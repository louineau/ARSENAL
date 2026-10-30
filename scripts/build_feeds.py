#!/usr/bin/env python3
# =============================================================================
#  ARSENAL — Agrégateur de veille (RSS / Atom / NVD) -> feeds.js
# =============================================================================
#  Récupère plusieurs flux (CERT-FR, CISA, Exploit-DB, actus, CVE NVD…),
#  les fusionne, les trie par date, évalue leur CRITICITÉ (score CVSS) et
#  écrit `feeds.js` (chargé par la page, comme data.js).
#
#  - Aucune dépendance externe (uniquement la bibliothèque standard Python).
#  - Lancé automatiquement par GitHub Actions (.github/workflows/feeds.yml),
#    ou manuellement : `python scripts/build_feeds.py`.
#
#  Pour AJOUTER une source RSS/Atom : ajouter une entrée dans FEEDS ci-dessous.
#  La source NVD (CVE notés CVSS) est gérée à part (fetch_nvd).
# =============================================================================

import json
import re
import sys
import urllib.request
from datetime import datetime, timezone, timedelta
from email.utils import parsedate_to_datetime
from xml.etree import ElementTree as ET

# --- Sources de veille ------------------------------------------------------
FEEDS = [
    {"name": "CERT-FR · Alertes",     "url": "https://www.cert.ssi.gouv.fr/alerte/feed/",    "kind": "alerte"},
    {"name": "CERT-FR · Avis",        "url": "https://www.cert.ssi.gouv.fr/avis/feed/",      "kind": "avis"},
    {"name": "CERT-FR · Actualités",  "url": "https://www.cert.ssi.gouv.fr/actualite/feed/", "kind": "actu"},
    {"name": "CISA · Advisories",     "url": "https://www.cisa.gov/cybersecurity-advisories/all.xml", "kind": "cve"},
    {"name": "Exploit-DB",            "url": "https://www.exploit-db.com/rss.xml",           "kind": "exploit"},
    {"name": "The Hacker News",       "url": "https://feeds.feedburner.com/TheHackersNews",  "kind": "news"},
]

# Source NVD : CVE récents, notés CVSS (source officielle NIST).
NVD_NAME = "NVD · CVE notés CVSS"
NVD_SEVERITIES = ["CRITICAL", "HIGH"]   # on ne garde que le haut du spectre (CVSS ≥ 7)
NVD_DAYS = 10                           # fenêtre de publication (jours)
NVD_PER_SEV = 12                        # entrées max par niveau de sévérité

PER_SOURCE = 15      # nombre max d'entrées conservées par source
GLOBAL_MAX = 100     # nombre max d'entrées au total
KEEP_SEVERE = 24     # garantit la présence des items crit/high au-delà de GLOBAL_MAX
TIMEOUT = 20
NVD_TIMEOUT = 30
UA = "Mozilla/5.0 (compatible; ARSENAL-veille/1.0; +https://github.com/)"

TAG_RE = re.compile(r"<[^>]+>")
WS_RE = re.compile(r"\s+")
# Score CVSS cité en clair : "CVSS 9.8", "CVSS:3.1 score 7.5", ou "9.8 CVSS Score".
CVSS_RE = re.compile(r"cvss[^0-9]{0,12}(\d{1,2}(?:\.\d)?)", re.I)
CVSS_RE2 = re.compile(r"(\d{1,2}(?:\.\d)?)\s*cvss", re.I)

# Mots-clés qui, à défaut de score, trahissent une criticité (prudents = multi-mots).
CRIT_KW = (
    "zero-day", "zero day", "0-day", "jour zéro", "activement exploit",
    "exploited in the wild", "wormable", "vulnérabilité critique", "faille critique",
    "critical vulnerability", "critical flaw", "severity: critical", "note : critique",
)
HIGH_KW = (
    "rce ", "remote code execution", "exécution de code", "high severity",
    "privilege escalation", "élévation de privilège", "unauthenticated",
    "non authentifié", "pré-authentification", "pre-auth",
)

# Détection de plateforme / type de système ciblé (indice, pas une science exacte).
WORD_RE = re.compile(r"[a-z0-9]+")
PLATFORM_KW = {
    "windows": ("windows", "win32", "microsoft", "active directory", "exchange",
                "sharepoint", "outlook", "rdp", "smb", "ntlm", "kerberos"),
    "linux":   ("linux", "ubuntu", "debian", "red hat", "redhat", "rhel", "centos",
                "kernel", "glibc", "sudo", "apache", "nginx", "openssh"),
    "macos":   ("macos", "mac os", "osx", "apple"),
    "android": ("android",),
    "ios":     ("ios", "iphone", "ipad", "ipados"),
    "web":     ("wordpress", "drupal", "joomla", "php", "javascript", "node.js",
                "chrome", "firefox", "navigateur", "browser", "xss", "sql injection"),
    "réseau":  ("cisco", "fortinet", "fortigate", "palo alto", "juniper", "vpn",
                "firewall", "pare-feu", "routeur", "router", "big-ip", "citrix",
                "netscaler", "sonicwall", "mikrotik", "ivanti"),
    "vmware":  ("vmware", "esxi", "vcenter", "hyperviseur", "hypervisor"),
}


def detect_platforms(text):
    """Liste des plateformes probablement concernées (d'après le texte)."""
    t = (text or "").lower()
    words = set(WORD_RE.findall(t))
    found = []
    for plat, kws in PLATFORM_KW.items():
        for kw in kws:
            hit = (kw in t) if (" " in kw or "." in kw or "-" in kw) else (kw in words)
            if hit:
                found.append(plat)
                break
    return found


def localname(tag):
    """Retourne le nom de balise sans son espace de noms ({ns}tag -> tag)."""
    return tag.rsplit("}", 1)[-1].lower() if "}" in tag else tag.lower()


def clean_text(raw, limit=240):
    if not raw:
        return ""
    txt = TAG_RE.sub(" ", raw)
    txt = (txt.replace("&amp;", "&").replace("&lt;", "<").replace("&gt;", ">")
              .replace("&quot;", '"').replace("&#39;", "'").replace("&nbsp;", " "))
    txt = WS_RE.sub(" ", txt).strip()
    return txt[:limit].rstrip() + "…" if len(txt) > limit else txt


def parse_date(raw):
    """Essaie RFC822 (RSS) puis ISO8601 (Atom). Retourne un datetime aware ou None."""
    if not raw:
        return None
    raw = raw.strip()
    try:
        d = parsedate_to_datetime(raw)
        if d.tzinfo is None:
            d = d.replace(tzinfo=timezone.utc)
        return d
    except (TypeError, ValueError, IndexError):
        pass
    try:
        d = datetime.fromisoformat(raw.replace("Z", "+00:00"))
        if d.tzinfo is None:
            d = d.replace(tzinfo=timezone.utc)
        return d
    except ValueError:
        return None


# --- Criticité --------------------------------------------------------------
def cvss_to_sev(score):
    """Convertit un score CVSS (0-10) en niveau : crit / high / med / low."""
    if score is None:
        return None
    if score >= 9.0:
        return "crit"
    if score >= 7.0:
        return "high"
    if score >= 4.0:
        return "med"
    return "low"


def extract_cvss(text):
    """Récupère le plus haut score CVSS cité en clair dans un texte, sinon None."""
    best = None
    for rx in (CVSS_RE, CVSS_RE2):
        for m in rx.finditer(text or ""):
            try:
                v = float(m.group(1))
            except ValueError:
                continue
            if 0.0 <= v <= 10.0:
                best = v if best is None else max(best, v)
    return best


def keyword_sev(text, kind):
    """Criticité approchée via mots-clés quand aucun score n'est disponible."""
    t = (text or "").lower()
    if any(k in t for k in CRIT_KW):
        return "crit"
    if kind == "alerte":          # les alertes CERT-FR sont urgentes par nature
        return "high"
    if any(k in t for k in HIGH_KW):
        return "high"
    return None


def score_item(it):
    """Renseigne it['cvss'] (float|None) et it['sev'] (str|None)."""
    text = (it.get("title") or "") + " " + (it.get("summary") or "")
    cvss = it.get("cvss")
    if cvss is None:
        cvss = extract_cvss(text)
    it["cvss"] = cvss
    it["sev"] = cvss_to_sev(cvss) or keyword_sev(text, it.get("kind"))
    it["platforms"] = detect_platforms(text)
    return it


# --- RSS / Atom -------------------------------------------------------------
def child_text(el, names):
    for c in el:
        if localname(c.tag) in names:
            return (c.text or "").strip()
    return ""


def atom_link(el):
    # Atom : plusieurs <link> ; préférer rel="alternate"/html, sinon le 1er href.
    href = ""
    for c in el:
        if localname(c.tag) != "link":
            continue
        rel = c.get("rel", "alternate")
        if c.get("href"):
            if rel == "alternate":
                return c.get("href")
            href = href or c.get("href")
    return href


def parse_feed(xml_bytes, source):
    root = ET.fromstring(xml_bytes)
    items = []
    # RSS : <rss><channel><item>  |  Atom : <feed><entry>
    entries = [e for e in root.iter() if localname(e.tag) in ("item", "entry")]
    for e in entries:
        title = child_text(e, {"title"})
        link = child_text(e, {"link"}) or atom_link(e)
        summary = child_text(e, {"description", "summary", "content"})
        raw_date = child_text(e, {"pubdate", "published", "updated", "date"})
        dt = parse_date(raw_date)
        items.append(score_item({
            "source": source["name"],
            "kind": source["kind"],
            "title": clean_text(title, 180) or "(sans titre)",
            "link": link.strip(),
            "summary": clean_text(summary, 240),
            "date": dt.astimezone(timezone.utc).isoformat() if dt else None,
            "_sort": dt.timestamp() if dt else 0,
        }))
    items.sort(key=lambda x: x["_sort"], reverse=True)
    return items[:PER_SOURCE]


def fetch(url, timeout=TIMEOUT):
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, application/json, */*",
    })
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


# --- NVD (CVE notés CVSS) ---------------------------------------------------
def nvd_best_cvss(cve):
    """Plus haut baseScore parmi toutes les métriques CVSS (v4/v3.1/v3.0)."""
    metrics = cve.get("metrics", {}) or {}
    best = None
    for key in ("cvssMetricV40", "cvssMetricV31", "cvssMetricV30"):
        for m in metrics.get(key, []) or []:
            try:
                v = float(m["cvssData"]["baseScore"])
            except (KeyError, TypeError, ValueError):
                continue
            best = v if best is None else max(best, v)
    return best


def fetch_nvd():
    """Récupère les CVE récents CRITICAL/HIGH via l'API NVD 2.0 (JSON)."""
    end = datetime.now(timezone.utc)
    start = end - timedelta(days=NVD_DAYS)
    fmt = lambda d: d.strftime("%Y-%m-%dT%H:%M:%S.000")
    items = []
    for sev in NVD_SEVERITIES:
        url = ("https://services.nvd.nist.gov/rest/json/cves/2.0"
               "?cvssV3Severity=" + sev +
               "&pubStartDate=" + fmt(start) +
               "&pubEndDate=" + fmt(end) +
               "&resultsPerPage=" + str(NVD_PER_SEV))
        data = json.loads(fetch(url, timeout=NVD_TIMEOUT).decode("utf-8"))
        for v in data.get("vulnerabilities", []):
            cve = v.get("cve", {})
            cid = cve.get("id")
            if not cid:
                continue
            cvss = nvd_best_cvss(cve)
            desc = next((d.get("value", "") for d in cve.get("descriptions", [])
                         if d.get("lang") == "en"), "")
            dt = parse_date(cve.get("published"))
            items.append(score_item({
                "source": NVD_NAME,
                "kind": "cve",
                "title": cid,
                "link": "https://nvd.nist.gov/vuln/detail/" + cid,
                "summary": clean_text(desc, 240),
                "date": dt.astimezone(timezone.utc).isoformat() if dt else None,
                "_sort": dt.timestamp() if dt else 0,
                "cvss": cvss,
            }))
    # dédoublonne (un CVE peut être CRITICAL et remonter deux fois), garde le + haut
    uniq = {}
    for it in items:
        cur = uniq.get(it["title"])
        if cur is None or (it.get("cvss") or 0) > (cur.get("cvss") or 0):
            uniq[it["title"]] = it
    out = list(uniq.values())
    out.sort(key=lambda x: (x.get("cvss") or 0, x["_sort"]), reverse=True)
    return out[:PER_SOURCE]


def main():
    all_items, sources = [], []

    for feed in FEEDS:
        entry = {"name": feed["name"], "kind": feed["kind"], "url": feed["url"], "ok": False, "count": 0}
        try:
            items = parse_feed(fetch(feed["url"]), feed)
            all_items.extend(items)
            entry["ok"], entry["count"] = True, len(items)
            print(f"[ok]   {feed['name']}: {len(items)} entrées")
        except Exception as exc:  # on n'interrompt jamais le build pour une source
            entry["error"] = str(exc)
            print(f"[warn] {feed['name']}: {exc}", file=sys.stderr)
        sources.append(entry)

    # Source NVD (gérée à part : JSON + scores CVSS)
    nvd_entry = {"name": NVD_NAME, "kind": "cve", "url": "https://nvd.nist.gov/", "ok": False, "count": 0}
    try:
        nvd_items = fetch_nvd()
        all_items.extend(nvd_items)
        nvd_entry["ok"], nvd_entry["count"] = True, len(nvd_items)
        print(f"[ok]   {NVD_NAME}: {len(nvd_items)} entrées")
    except Exception as exc:
        nvd_entry["error"] = str(exc)
        print(f"[warn] {NVD_NAME}: {exc}", file=sys.stderr)
    sources.append(nvd_entry)

    all_items.sort(key=lambda x: x["_sort"], reverse=True)
    kept = all_items[:GLOBAL_MAX]
    # garantit la présence des items sévères même au-delà du plafond
    kept_ids = {id(x) for x in kept}
    severe_extra = [x for x in all_items[GLOBAL_MAX:]
                    if x.get("sev") in ("crit", "high") and id(x) not in kept_ids][:KEEP_SEVERE]
    final = kept + severe_extra
    final.sort(key=lambda x: x["_sort"], reverse=True)
    for it in final:
        it.pop("_sort", None)

    n_sev = sum(1 for it in final if it.get("sev") in ("crit", "high"))
    payload = {
        "updated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "sources": sources,
        "items": final,
    }
    js = "/* Généré automatiquement par scripts/build_feeds.py — NE PAS éditer à la main */\n"
    js += "window.ARSENAL_FEEDS = " + json.dumps(payload, ensure_ascii=False, indent=1) + ";\n"
    with open("feeds.js", "w", encoding="utf-8") as fh:
        fh.write(js)
    print(f"\nfeeds.js écrit : {len(final)} entrées ({n_sev} sévères), "
          f"{sum(s['ok'] for s in sources)}/{len(sources)} sources OK")


if __name__ == "__main__":
    main()
