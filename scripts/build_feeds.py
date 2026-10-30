#!/usr/bin/env python3
# =============================================================================
#  ARSENAL — Agrégateur de veille (RSS / Atom) -> feeds.js
# =============================================================================
#  Récupère plusieurs flux (CERT-FR, CISA, Exploit-DB, actus…), les fusionne,
#  les trie par date et écrit `feeds.js` (chargé par la page, comme data.js).
#
#  - Aucune dépendance externe (uniquement la bibliothèque standard Python).
#  - Lancé automatiquement par GitHub Actions (.github/workflows/feeds.yml),
#    ou manuellement : `python scripts/build_feeds.py`.
#
#  Pour AJOUTER une source : ajouter une entrée dans FEEDS ci-dessous.
# =============================================================================

import json
import re
import sys
import urllib.request
from datetime import datetime, timezone
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

PER_SOURCE = 15      # nombre max d'entrées conservées par source
GLOBAL_MAX = 90      # nombre max d'entrées au total
TIMEOUT = 20
UA = "Mozilla/5.0 (compatible; ARSENAL-veille/1.0; +https://github.com/)"

TAG_RE = re.compile(r"<[^>]+>")
WS_RE = re.compile(r"\s+")


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
        items.append({
            "source": source["name"],
            "kind": source["kind"],
            "title": clean_text(title, 180) or "(sans titre)",
            "link": link.strip(),
            "summary": clean_text(summary, 240),
            "date": dt.astimezone(timezone.utc).isoformat() if dt else None,
            "_sort": dt.timestamp() if dt else 0,
        })
    items.sort(key=lambda x: x["_sort"], reverse=True)
    return items[:PER_SOURCE]


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, */*"})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        return resp.read()


def main():
    all_items, sources = [], []
    for feed in FEEDS:
        entry = {"name": feed["name"], "kind": feed["kind"], "url": feed["url"], "ok": False, "count": 0}
        try:
            data = fetch(feed["url"])
            items = parse_feed(data, feed)
            all_items.extend(items)
            entry["ok"] = True
            entry["count"] = len(items)
            print(f"[ok]   {feed['name']}: {len(items)} entrées")
        except Exception as exc:  # on n'interrompt jamais le build pour une source
            entry["error"] = str(exc)
            print(f"[warn] {feed['name']}: {exc}", file=sys.stderr)
        sources.append(entry)

    all_items.sort(key=lambda x: x["_sort"], reverse=True)
    all_items = all_items[:GLOBAL_MAX]
    for it in all_items:
        it.pop("_sort", None)

    payload = {
        "updated": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "sources": sources,
        "items": all_items,
    }
    js = "/* Généré automatiquement par scripts/build_feeds.py — NE PAS éditer à la main */\n"
    js += "window.ARSENAL_FEEDS = " + json.dumps(payload, ensure_ascii=False, indent=1) + ";\n"
    with open("feeds.js", "w", encoding="utf-8") as fh:
        fh.write(js)
    print(f"\nfeeds.js écrit : {len(all_items)} entrées, {sum(s['ok'] for s in sources)}/{len(sources)} sources OK")


if __name__ == "__main__":
    main()
