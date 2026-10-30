/* =========================================================================
 *  ARSENAL — logique d'affichage (vanilla JS, aucune dépendance)
 * ====================================================================== */
(function () {
  "use strict";
  const A = window.ARSENAL;
  if (!A) { console.error("data.js non chargé"); return; }

  const { META, PHASES, CATEGORIES, TOOLS, CHEATS } = A;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const PHASE_LABEL = Object.fromEntries(PHASES.map(p => [p.id, p.label]));
  const CAT_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
  const PHASE_COLOR = { recon: "#7aa2ff", enum: "#59d0e0", vuln: "#f2c94c", exploit: "#ff6b35", post: "#e0558f", support: "#9a9ba3" };
  const PHASE_SHORT = { recon: "Recon", enum: "Énum", vuln: "Vuln", exploit: "Exploit", post: "Post", support: "Supp" };
  const PHASES_MAIN = PHASES.filter(p => p.id !== "support");
  const primaryPhase = (t) => (t.phases || []).find(p => p !== "support") || null;

  /* ---- Recherche tolérante : mots-clés, sans accents, synonymes FR <-> EN ----
   * "scan de port" / "port scan" / "analyse de ports" trouvent tous Nmap.
   * Pour enrichir : ajouter un groupe de termes équivalents dans SYN_GROUPS.
   * Les termes multi-mots (ex. "mot de passe") servent de cible de recherche. */
  const normalize = (s) => String(s).toLowerCase().normalize("NFD")
    .replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const STOPWORDS = new Set("de du des la le les l un une d a au aux et ou en mot the of to for and or with an on in my".split(" "));
  const SYN_GROUPS = [
    ["scan", "scanner", "analyse", "scanning", "decouverte"],
    ["port", "ports"],
    ["reseau", "network"],
    ["password", "mot de passe", "motdepasse", "mdp", "credential", "credentials", "identifiant", "identifiants", "creds", "passe"],
    ["hash", "hashes", "empreinte", "condensat"],
    ["bruteforce", "brute force", "cassage", "casser", "crack", "cracking"],
    ["wordlist", "wordlists", "dictionnaire", "dictionnaires"],
    ["subdomain", "subdomains", "sous domaine", "sous domaines", "sousdomaine"],
    ["domaine", "domain", "annuaire"],
    ["web", "http", "https", "site", "application web"],
    ["vulnerabilite", "vulnerabilites", "vulnerability", "vuln", "vulns", "cve", "faille", "failles"],
    ["privesc", "escalade", "privilege", "privileges", "elevation"],
    ["reverse shell", "revshell", "shell inverse"],
    ["pivot", "pivoting", "tunnel", "tunneling", "rebond"],
    ["sniff", "sniffing", "capture", "ecoute", "interception"],
    ["mitm", "man in the middle", "homme du milieu"],
    ["wifi", "wireless", "sans fil"],
    ["reverse", "retro", "decompilation", "desassemblage", "desassembleur"],
    ["memoire", "memory"],
    ["forensic", "forensique", "investigation", "dfir"],
    ["detection", "detecter", "blue team", "siem", "surveillance", "monitoring"],
    ["osint", "renseignement", "reconnaissance", "recon"],
    ["enumeration", "enumerer", "enum"],
    ["exploit", "exploitation", "exploiter"],
    ["phishing", "hameconnage"],
    ["email", "mail", "courriel", "emails"],
    ["persistance", "persistence", "backdoor", "porte derobee"],
    ["lateral", "laterale", "lateral movement", "mouvement lateral"],
    ["kerberos", "kerberoast", "kerberoasting", "asrep"],
    ["ntlm", "pass the hash", "pth"],
    ["smb", "partage", "partages", "share", "shares"],
    ["dns", "zone", "axfr"],
    ["training", "entrainement", "apprentissage", "lab", "labs", "ctf"]
  ];
  const SYNONYMS = {};
  SYN_GROUPS.forEach(g => {
    const terms = g.map(normalize);
    terms.forEach(t => { SYNONYMS[t] = Array.from(new Set([...(SYNONYMS[t] || []), ...terms])); });
  });
  const tokenize = (q) => normalize(q).split(" ").filter(w => w && !STOPWORDS.has(w));
  function tokenMatches(tok, hay) {
    const cands = SYNONYMS[tok] ? [tok, ...SYNONYMS[tok]] : [tok];
    return cands.some(c => hay.includes(c));
  }
  function textMatches(rawHay, tokens) {
    if (!tokens.length) return true;
    const hay = normalize(rawHay);
    return tokens.every(t => tokenMatches(t, hay)); // tous les mots doivent correspondre (ET)
  }

  const state = { view: "cheats", phase: null, q: "", qTokens: [] };
  let veilleKind = null;      // filtre source (type de flux) actif
  let veilleSevMin = -1;      // seuil de criticité (-1 = toutes)
  let veillePlat = null;      // filtre plateforme actif
  let veilleSort = "date";    // "date" (récent) ou "crit" (criticité)
  const KIND_LABEL = { alerte: "Alerte", avis: "Avis", actu: "Actu", cve: "CVE", exploit: "Exploit", news: "News" };
  const SEV_LABEL = { crit: "Critique", high: "Élevé", med: "Moyen", low: "Faible" };
  const SEV_RANK = { crit: 3, high: 2, med: 1, low: 0 };
  const SEV_GLYPH = { crit: "■", high: "▲", med: "●", low: "○" };
  // score numérique d'un item (CVSS si présent, sinon estimé depuis le niveau)
  const sevScore = (it) => it.cvss != null ? it.cvss
    : it.sev === "crit" ? 9.2 : it.sev === "high" ? 7.5 : it.sev === "med" ? 5 : it.sev === "low" ? 2 : null;
  const sevColor = (s) => s == null ? "var(--border-2)" : s >= 9 ? "#ff5c5c" : s >= 7 ? "#ff9f43" : s >= 4 ? "#ffd166" : "#6cb4ff";
  const SEV_STEPS = [
    { label: "toutes", min: -1 },
    { label: "🟡 ≥ Moyen", min: 1 },
    { label: "🟠 ≥ Élevé", min: 2 },
    { label: "🔴 Critique", min: 3 },
  ];
  const PLAT_LABEL = { windows: "Windows", linux: "Linux", macos: "macOS", android: "Android", ios: "iOS", web: "Web", "réseau": "Réseau", vmware: "VMware" };

  /* ---- en-têtes / marque ---- */
  $("#brandName").textContent = META.name;
  $("#heroTitle").textContent = META.name;
  $("#brandVer").textContent = "v" + META.version;
  $("#tagline").textContent = META.tagline;
  $("#footName").textContent = META.name;
  $("#toolCount").textContent = TOOLS.length + " outils · " + CATEGORIES.length + " catégories";
  const repo = $("#repoLink");
  if (META.repo && META.repo !== "https://github.com/") { repo.href = META.repo; } else { repo.style.display = "none"; }

  // met en forme une commande : grise le commentaire « # … » final pour le distinguer
  function fmtCmd(text) {
    return esc(text).replace(/(\s#\s[^]*)$/, '<span class="cmt">$1</span>');
  }

  /* ---- bouton copier ---- */
  function copyBtn(text) {
    const b = el("button", "copy", "copy");
    b.addEventListener("click", (ev) => {
      ev.stopPropagation();
      navigator.clipboard.writeText(text).then(() => {
        b.textContent = "✓"; b.classList.add("ok");
        setTimeout(() => { b.textContent = "copy"; b.classList.remove("ok"); }, 1200);
      });
    });
    return b;
  }

  /* ---- navigation catégories ---- */
  function buildCatNav() {
    const nav = $("#catNav");
    nav.innerHTML = "";
    CATEGORIES.forEach(c => {
      const n = TOOLS.filter(t => t.cat === c.id).length;
      const a = el("button", "cat-link");
      a.innerHTML = `<span class="ci">${c.icon}</span><span>${esc(c.label)}</span><span class="cc">${n}</span>`;
      a.addEventListener("click", () => {
        // réinitialise les filtres actifs pour que la catégorie soit toujours affichée
        if (state.phase) { state.phase = null; updateRailActive(); }
        if (state.q) { state.q = ""; state.qTokens = []; searchEl.value = ""; }
        setView("tools"); // rend le catalogue de façon synchrone : la cible existe déjà
        const target = document.getElementById("cat-" + c.id);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        closeSidebar();
      });
      nav.appendChild(a);
    });
  }

  /* ---- rail « kill chain » (nav + filtre par phase) ---- */
  function buildPhaseRail() {
    const bar = $("#phaseBar");
    bar.innerHTML = "";
    const rail = el("div", "rail", '<div class="rail-line"></div>');
    const stations = el("div", "rail-stations");
    PHASES_MAIN.forEach(p => {
      const n = TOOLS.filter(t => (t.phases || []).includes(p.id)).length;
      const b = el("button", "station",
        `<span class="dot"></span><span class="nm">${esc(PHASE_SHORT[p.id] || p.id)}</span><span class="k">${n}</span>`);
      b.dataset.phase = p.id;
      b.style.setProperty("--ph", PHASE_COLOR[p.id]);
      b.title = p.label;
      stations.appendChild(b);
    });
    rail.appendChild(stations);
    bar.appendChild(rail);
    const reset = el("button", "rail-reset", "× toutes phases");
    reset.dataset.phase = "";
    bar.appendChild(reset);
    bar.addEventListener("click", (e) => {
      const s = e.target.closest(".station, .rail-reset");
      if (!s) return;
      const ph = s.dataset.phase || null;
      state.phase = (state.phase === ph) ? null : ph; // re-cliquer la station active = tout afficher
      updateRailActive();
      render();
    });
    updateRailActive();
  }
  function updateRailActive() {
    const bar = $("#phaseBar");
    bar.querySelectorAll(".station").forEach(s => s.classList.toggle("active", s.dataset.phase === state.phase));
    bar.classList.toggle("has-sel", !!state.phase);
  }

  /* ---- filtrage ---- */
  function matchQ(t) {
    const hay = t.name + " " + t.desc + " " + (t.cmd || "") + " " + (t.tags || "") + " " +
      (CAT_BY_ID[t.cat] ? CAT_BY_ID[t.cat].label : "");
    return textMatches(hay, state.qTokens);
  }
  function matchPhase(t) {
    if (!state.phase) return true;
    return (t.phases || []).includes(state.phase);
  }

  /* ---- carte outil ---- */
  function toolCard(t) {
    const c = el("article", "tool");
    const prim = primaryPhase(t);
    if (prim) c.dataset.phase = prim;
    const plats = (t.platforms || []).map(p => `<span class="plat ${p}">${p}</span>`).join("");
    const star = t.star ? '<span class="star" title="Incontournable">★</span>' : "";
    // mini-indicateur : 5 segments = phases couvertes (légende couleur = phase)
    const segs = PHASES_MAIN.map(p => {
      const on = (t.phases || []).includes(p.id);
      return `<span style="background:${on ? PHASE_COLOR[p.id] : "var(--border-2)"}" title="${esc(p.label)}${on ? "" : " (non couverte)"}"></span>`;
    }).join("");
    c.innerHTML =
      `<div class="tool-top">
         <span class="tool-name"><a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.name)}</a></span>${star}
         <span class="tool-segs" aria-label="phases couvertes">${segs}</span>
       </div>
       <p class="tool-desc">${esc(t.desc)}</p>`;
    if (t.cmd) {
      const cmd = el("div", "tool-cmd");
      cmd.innerHTML = fmtCmd(t.cmd);
      cmd.appendChild(copyBtn(t.cmd));
      c.appendChild(cmd);
    }
    c.appendChild(el("div", "tool-foot",
      `<span class="tool-plats">${plats}</span><a class="tool-link" href="${esc(t.url)}" target="_blank" rel="noopener">ouvrir ↗</a>`));
    return c;
  }

  /* ---- vue catalogue ---- */
  function renderTools() {
    const root = $("#view-tools");
    root.innerHTML = "";
    let total = 0;
    CATEGORIES.forEach(c => {
      const items = TOOLS.filter(t => t.cat === c.id && matchQ(t) && matchPhase(t));
      if (!items.length) return;
      total += items.length;
      const block = el("section", "cat-block");
      block.id = "cat-" + c.id;
      block.innerHTML =
        `<div class="cat-head"><span class="ci">${c.icon}</span><h2>${esc(c.label)}</h2><span class="n">${items.length}</span></div>
         <p class="cat-desc">${esc(c.desc)}</p>`;
      const grid = el("div", "tool-grid");
      items.forEach(t => grid.appendChild(toolCard(t)));
      block.appendChild(grid);
      root.appendChild(block);
    });
    if (!total) root.appendChild(el("p", "empty", "Aucun outil ne correspond — élargis la recherche ou change de phase."));
  }

  /* ---- vue cheat-sheet ---- */
  function renderCheats() {
    const root = $("#view-cheats");
    root.innerHTML = "";
    const grid = el("div", "cheat-grid");
    let n = 0;
    CHEATS.forEach(ch => {
      if (state.phase && ch.phase !== state.phase) return;
      if (state.qTokens.length) {
        const hay = ch.title + " " + ch.note + " " + ch.steps.map(s => s.tool + " " + s.cmd).join(" ");
        if (!textMatches(hay, state.qTokens)) return;
      }
      n++;
      const card = el("article", "cheat");
      if (ch.phase) card.dataset.phase = ch.phase;
      let steps = "";
      ch.steps.forEach(s => {
        steps += `<li class="cheat-step"><span class="st-tool">▸ ${esc(s.tool)}</span>
          <div class="cmd">${fmtCmd(s.cmd)}</div></li>`;
      });
      card.innerHTML =
        `<div class="cheat-head"><span class="cheat-ico">${ch.icon}</span><span class="cheat-title">${esc(ch.title)}</span></div>
         <ul class="cheat-steps">${steps}</ul>
         ${ch.note ? `<p class="cheat-note">${esc(ch.note)}</p>` : ""}`;
      card.querySelectorAll(".cmd").forEach(cmdEl => cmdEl.appendChild(copyBtn(cmdEl.textContent)));
      grid.appendChild(card);
    });
    if (!n) root.appendChild(el("p", "empty", "Aucun cas d'usage ne correspond au filtre."));
    else root.appendChild(grid);
  }

  /* ---- vue méthodologie ---- */
  const KILLCHAIN = [
    { t: "Reconnaissance (OSINT)", d: "Recueillir un maximum d'infos sans attaquer : passive (bases publiques, certificats, réseaux sociaux) puis active légère (DNS).", tools: "theHarvester · crt.sh · Amass · Shodan · Google Dorks · whois/dig" },
    { t: "Énumération", d: "Collecte active : hôtes vivants, ports, services/versions, protocoles (SMB, SNMP, NFS, DNS, LDAP). Scanner large puis affiner.", tools: "netdiscover · Nmap · enum4linux-ng · smbmap · snmpwalk · ldapsearch" },
    { t: "Analyse de vulnérabilités", d: "Croiser versions détectées ↔ bases CVE. Cibler, ne pas endommager, mettre à jour les bases.", tools: "OpenVAS/Greenbone · Nuclei · nmap --script vuln · searchsploit" },
    { t: "Exploitation", d: "Utiliser une faille pour prendre la main. Comprendre payload vs commande, staged vs inline, reverse vs bind.", tools: "Metasploit · msfvenom · Exploit-DB · Hydra/Hashcat/John · Burp/sqlmap" },
    { t: "Post-exploitation", d: "Consolider et étendre : élévation de privilèges, persistance, mouvement latéral, pivoting.", tools: "LinPEAS/WinPEAS · GTFOBins/LOLBAS · Mimikatz · NetExec · chisel/ligolo" }
  ];
  const CHAINS = [
    { out: "netdiscover → ips.txt", in: "nmap -iL ips.txt", why: "Scanner uniquement les hôtes vivants" },
    { out: "nmap -oX scan.xml", in: "eyewitness -x scan.xml", why: "Captures des interfaces web détectées" },
    { out: "nmap -sV (versions)", in: "searchsploit <produit>", why: "Trouver des exploits connus" },
    { out: "nmap -oX", in: "OpenVAS (import cibles)", why: "Scan de vulns sur le périmètre réel" },
    { out: "enum4linux (users)", in: "hydra / hashcat", why: "Bruteforce ciblé sur comptes réels" },
    { out: "dump de hashes", in: "hashcat -m 1000 / john", why: "Cassage offline, sans bruit réseau" },
    { out: "Meterpreter", in: "post/ · kiwi · dcsync", why: "Loot & compromission du domaine" },
    { out: "creds obtenus", in: "NetExec / evil-winrm", why: "Mouvement latéral (pass-the-hash)" }
  ];
  function renderMethod() {
    const kc = $("#killchain");
    kc.innerHTML = "";
    KILLCHAIN.forEach(s => {
      kc.appendChild(el("li", "", `<b>${esc(s.t)}</b> — <span>${esc(s.d)}</span><span class="kc-tools">${esc(s.tools)}</span>`));
    });
    const cg = $("#chainGrid");
    cg.innerHTML = "";
    CHAINS.forEach(c => {
      cg.appendChild(el("div", "chain",
        `<span class="out">${esc(c.out)}</span> <span class="arr">▶</span> <span class="in">${esc(c.in)}</span><span class="why">${esc(c.why)}</span>`));
    });
  }

  /* ---- vue veille (flux RSS agrégés) ---- */
  function timeAgo(iso) {
    if (!iso) return "";
    const d = new Date(iso), s = Math.floor((Date.now() - d.getTime()) / 1000);
    if (isNaN(s)) return "";
    if (s < 3600) return "il y a " + Math.max(1, Math.floor(s / 60)) + " min";
    if (s < 86400) return "il y a " + Math.floor(s / 3600) + " h";
    const j = Math.floor(s / 86400);
    return j < 30 ? "il y a " + j + " j" : d.toLocaleDateString("fr-FR");
  }
  function renderVeille() {
    const root = $("#view-veille");
    root.innerHTML = "";
    const F = window.ARSENAL_FEEDS;
    if (!F || !F.items || !F.items.length) {
      root.appendChild(el("p", "empty",
        "Pas encore de données de veille. Le fichier feeds.js est généré automatiquement par GitHub Actions — ou localement via <code>python scripts/build_feeds.py</code>."));
      return;
    }

    // index de recherche : titre, résumé, source, type, criticité, score CVSS, plateformes
    const searchText = (it) => [
      it.title, it.summary || "", it.source,
      KIND_LABEL[it.kind] || it.kind,
      it.sev ? "cvss " + SEV_LABEL[it.sev] + (it.cvss != null ? " " + it.cvss : "") : "",
      (it.platforms || []).map(p => PLAT_LABEL[p] || p).join(" "),
    ].join(" ");

    const head = el("div", "veille-head");
    head.appendChild(el("span", "veille-upd",
      `📡 ${F.items.length} actualités · ${F.updated ? "mis à jour " + esc(timeAgo(F.updated)) : ""}`));

    // ligne — source (type de flux) + bascule de tri
    const chips = el("div", "veille-chips");
    const mkKind = (kind, label) => {
      const c = el("button", "vchip" + (veilleKind === kind ? " active" : ""), esc(label));
      c.addEventListener("click", () => { veilleKind = (veilleKind === kind ? null : kind); renderVeille(); });
      return c;
    };
    chips.appendChild(mkKind(null, "toutes sources"));
    [...new Set(F.items.map(i => i.kind))].forEach(k => chips.appendChild(mkKind(k, KIND_LABEL[k] || k)));
    const sortBtn = el("button", "vchip vchip-sort", veilleSort === "crit" ? "⇅ Criticité" : "⇅ Récent");
    sortBtn.addEventListener("click", () => { veilleSort = (veilleSort === "crit" ? "date" : "crit"); renderVeille(); });
    chips.appendChild(sortBtn);
    head.appendChild(chips);

    // ligne — seuil de criticité
    const sevRow = el("div", "veille-chips");
    sevRow.appendChild(el("span", "vchip-lbl", "Criticité"));
    SEV_STEPS.forEach(s => {
      const c = el("button", "vchip" + (veilleSevMin === s.min ? " active" : ""), esc(s.label));
      c.addEventListener("click", () => { veilleSevMin = s.min; renderVeille(); });
      sevRow.appendChild(c);
    });
    head.appendChild(sevRow);

    // ligne — plateforme (uniquement celles présentes dans les données)
    const platsPresent = [...new Set(F.items.flatMap(i => i.platforms || []))];
    if (platsPresent.length) {
      const platRow = el("div", "veille-chips");
      platRow.appendChild(el("span", "vchip-lbl", "Plateforme"));
      const mkPlat = (p, label) => {
        const c = el("button", "vchip" + (veillePlat === p ? " active" : ""), esc(label));
        c.addEventListener("click", () => { veillePlat = (veillePlat === p ? null : p); renderVeille(); });
        return c;
      };
      platRow.appendChild(mkPlat(null, "toutes"));
      platsPresent.forEach(p => platRow.appendChild(mkPlat(p, PLAT_LABEL[p] || p)));
      head.appendChild(platRow);
    }
    root.appendChild(head);

    // sismographe — 30 jours, une barre/jour, hauteur = CVSS max du jour
    const byDay = {};
    F.items.forEach(it => {
      if (!it.date) return;
      const k = new Date(it.date).toISOString().slice(0, 10);
      const s = sevScore(it);
      if (s != null) byDay[k] = Math.max(byDay[k] || 0, s);
    });
    let bars = "";
    for (let d = 29; d >= 0; d--) {
      const dt = new Date(); dt.setHours(0, 0, 0, 0); dt.setDate(dt.getDate() - d);
      const k = dt.toISOString().slice(0, 10);
      const s = byDay[k];
      const h = s != null ? Math.round(s * 6) + 2 : 2;
      bars += `<div class="sbar" style="height:${h}px;background:${s != null ? sevColor(s) : "var(--border-2)"}" title="${k}${s != null ? " · CVSS " + s.toFixed(1) : " · —"}"></div>`;
    }
    const seis = el("div", "seismo-wrap",
      `<div class="seismo-cap">sismographe · 30 jours · hauteur = CVSS max du jour</div><div class="seismo">${bars}</div>`);
    root.appendChild(seis);

    // filtrage (source + criticité + plateforme + recherche)
    let items = F.items.filter(it => {
      if (veilleKind && it.kind !== veilleKind) return false;
      if (veilleSevMin > -1 && (SEV_RANK[it.sev] ?? -1) < veilleSevMin) return false;
      if (veillePlat && !(it.platforms || []).includes(veillePlat)) return false;
      if (state.qTokens.length && !textMatches(searchText(it), state.qTokens)) return false;
      return true;
    });
    // tri par criticité à la demande (sinon : déjà trié par date)
    if (veilleSort === "crit") {
      const weight = (it) => it.cvss != null ? it.cvss : (SEV_RANK[it.sev] ?? -1) * 3;
      items = items.slice().sort((a, b) =>
        (weight(b) - weight(a)) || String(b.date || "").localeCompare(String(a.date || "")));
    }

    const list = el("div", "feed-list");
    items.forEach(it => {
      const sevBadge = it.sev
        ? `<span class="sev sev-${esc(it.sev)}">${SEV_GLYPH[it.sev] || ""} ${it.cvss != null ? "CVSS " + esc(String(it.cvss)) : esc(SEV_LABEL[it.sev])}</span>`
        : "";
      const kev = /\b(kev)\b|exploit|activement|in the wild|ran[çc]ongiciel|ransomware|0-?day|zero-?day/i
        .test((it.title || "") + " " + (it.summary || "")) ? '<span class="kev" title="Exploitation active probable">KEV</span>' : "";
      const platTags = (it.platforms || [])
        .map(p => `<span class="plat">${esc(PLAT_LABEL[p] || p)}</span>`).join("");
      const card = el("article", "feed-item");
      card.innerHTML =
        `<div class="feed-top">
           <span class="kind kind-${esc(it.kind)}">${esc(KIND_LABEL[it.kind] || it.kind)}</span>
           ${sevBadge}${kev}
           <span class="feed-src">${esc(it.source)}</span>
           <span class="feed-date">${esc(timeAgo(it.date))}</span>
         </div>
         <a class="feed-title" href="${esc(it.link)}" target="_blank" rel="noopener">${esc(it.title)}</a>
         ${it.summary ? `<p class="feed-sum">${esc(it.summary)}</p>` : ""}
         ${platTags ? `<div class="feed-plats">${platTags}</div>` : ""}`;
      list.appendChild(card);
    });
    if (!items.length) list.appendChild(el("p", "empty", "Aucune actualité pour ce filtre."));
    root.appendChild(list);
  }

  /* ---- palette de commandes (Ctrl K) ---- */
  let PALETTE = null, palSel = 0, palItems = [];
  function buildPaletteIndex() {
    const idx = [];
    [["cheats", "⚡ Cheat-sheet (cas d'usage)"], ["tools", "🧰 Catalogue d'outils"], ["method", "🧭 Méthodologie"], ["veille", "📡 Veille"]]
      .forEach(([v, l]) => idx.push({ label: l, sub: "vue", hay: l, act: () => setView(v) }));
    PHASES_MAIN.forEach(p => idx.push({
      label: "Phase : " + p.label, sub: "filtre", hay: "phase " + p.label,
      act: () => { state.phase = p.id; updateRailActive(); setView("tools"); }
    }));
    CATEGORIES.forEach(c => idx.push({
      label: c.icon + " " + c.label, sub: "catégorie", hay: c.label + " " + c.desc,
      act: () => { setView("tools"); setTimeout(() => { const t = document.getElementById("cat-" + c.id); if (t) t.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60); }
    }));
    TOOLS.forEach(t => idx.push({
      label: t.name, sub: "outil · " + ((CAT_BY_ID[t.cat] || {}).label || ""), hay: t.name + " " + t.desc + " " + (t.tags || ""),
      act: () => window.open(t.url, "_blank", "noopener")
    }));
    return idx;
  }
  function openPalette() { if (!PALETTE) return; PALETTE.classList.remove("hidden"); const i = $("#paletteInput"); i.value = ""; filterPalette(""); i.focus(); }
  function closePalette() { if (PALETTE) PALETTE.classList.add("hidden"); }
  function filterPalette(q) {
    const toks = tokenize(q), all = buildPaletteIndex();
    palItems = (toks.length ? all.filter(x => textMatches(x.hay, toks)) : all).slice(0, 40);
    palSel = 0; renderPalette();
  }
  function renderPalette() {
    const list = $("#paletteList");
    if (!palItems.length) { list.innerHTML = '<div class="palette-empty">Aucun résultat</div>'; return; }
    list.innerHTML = palItems.map((x, i) =>
      `<div class="palette-item${i === palSel ? " sel" : ""}" data-i="${i}"><span class="pl-label">${esc(x.label)}</span><span class="pl-sub">${esc(x.sub)}</span></div>`).join("");
    const sel = list.querySelector(".palette-item.sel"); if (sel) sel.scrollIntoView({ block: "nearest" });
  }
  function palMove(d) { if (!palItems.length) return; palSel = (palSel + d + palItems.length) % palItems.length; renderPalette(); }
  function palExec(i) { const x = palItems[i == null ? palSel : i]; if (!x) return; closePalette(); x.act(); }
  function setupPalette() {
    PALETTE = $("#palette");
    if (!PALETTE) return;
    const inp = $("#paletteInput");
    inp.addEventListener("input", () => filterPalette(inp.value));
    inp.addEventListener("keydown", e => {
      if (e.key === "ArrowDown") { e.preventDefault(); palMove(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); palMove(-1); }
      else if (e.key === "Enter") { e.preventDefault(); palExec(); }
      else if (e.key === "Escape") { e.preventDefault(); closePalette(); }
    });
    $("#paletteList").addEventListener("click", e => { const it = e.target.closest(".palette-item"); if (it) palExec(+it.dataset.i); });
    PALETTE.addEventListener("click", e => { if (e.target === PALETTE) closePalette(); });
  }

  /* ---- navigation clavier (j / k / Entrée) ---- */
  let cursorEl = null;
  function visibleCards() { const sec = $("#view-" + state.view); return sec ? [...sec.querySelectorAll(".tool, .cheat, .feed-item")] : []; }
  function moveCursor(d) {
    const list = visibleCards(); if (!list.length) return;
    let i = list.indexOf(cursorEl);
    i = i < 0 ? (d > 0 ? 0 : list.length - 1) : Math.max(0, Math.min(list.length - 1, i + d));
    if (cursorEl) cursorEl.classList.remove("kbd-cursor");
    cursorEl = list[i]; cursorEl.classList.add("kbd-cursor");
    cursorEl.scrollIntoView({ block: "center", behavior: "smooth" });
  }
  function openCursor() { if (!cursorEl) return; const a = cursorEl.querySelector("a[href]"); if (a) window.open(a.href, "_blank", "noopener"); }

  /* ---- orchestration ---- */
  function render() {
    cursorEl = null;
    if (state.view === "tools") renderTools();
    else if (state.view === "cheats") renderCheats();
    else if (state.view === "veille") renderVeille();
    else renderMethod();
  }
  function setView(v) {
    state.view = v;
    document.querySelectorAll(".hero-tabs .tab").forEach(t => t.classList.toggle("active", t.dataset.view === v));
    ["cheats", "tools", "method", "veille"].forEach(id => { const sec = $("#view-" + id); if (sec) sec.classList.toggle("hidden", id !== v); });
    $("#phaseBar").style.display = (v === "cheats" || v === "tools") ? "" : "none";
    render();
  }

  /* ---- sidebar mobile ---- */
  function closeSidebar() { $("#sidebar").classList.remove("open"); }
  const menuBtn = el("button", "menu-btn", "☰");
  menuBtn.setAttribute("aria-label", "Menu");
  menuBtn.addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  document.body.appendChild(menuBtn);

  /* ---- events ---- */
  document.querySelector(".hero-tabs").addEventListener("click", e => {
    const t = e.target.closest(".tab"); if (t) setView(t.dataset.view);
  });
  const searchEl = $("#search");
  searchEl.addEventListener("input", () => { state.q = searchEl.value.trim(); state.qTokens = tokenize(state.q); render(); });
  document.addEventListener("keydown", e => {
    const pOpen = PALETTE && !PALETTE.classList.contains("hidden");
    if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) { e.preventDefault(); pOpen ? closePalette() : openPalette(); return; }
    if (pOpen) return; // la palette gère son propre clavier
    const typing = /^(input|textarea|select)$/i.test((document.activeElement || {}).tagName || "");
    if (e.key === "/" && !typing) { e.preventDefault(); searchEl.focus(); return; }
    if (e.key === "Escape") { searchEl.blur(); return; }
    if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "j") { e.preventDefault(); moveCursor(1); }
    else if (e.key === "k") { e.preventDefault(); moveCursor(-1); }
    else if (e.key === "Enter") { openCursor(); }
  });
  const toTop = $("#toTop");
  window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 500));
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---- init ---- */
  buildCatNav();
  buildPhaseRail();
  setupPalette();
  setView("cheats");
})();
