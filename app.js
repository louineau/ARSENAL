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
  let veilleKind = null; // filtre source actif dans la vue Veille
  const KIND_LABEL = { alerte: "Alerte", avis: "Avis", actu: "Actu", cve: "CVE", exploit: "Exploit", news: "News" };

  /* ---- en-têtes / marque ---- */
  $("#brandName").textContent = META.name;
  $("#heroTitle").textContent = META.name;
  $("#brandVer").textContent = "v" + META.version;
  $("#tagline").textContent = META.tagline;
  $("#footName").textContent = META.name;
  $("#toolCount").textContent = TOOLS.length + " outils · " + CATEGORIES.length + " catégories";
  const repo = $("#repoLink");
  if (META.repo && META.repo !== "https://github.com/") { repo.href = META.repo; } else { repo.style.display = "none"; }

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
        setView("tools");
        setTimeout(() => {
          const target = document.getElementById("cat-" + c.id);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
          closeSidebar();
        }, 40);
      });
      nav.appendChild(a);
    });
  }

  /* ---- barre de phases ---- */
  function buildPhaseBar() {
    const bar = $("#phaseBar");
    bar.innerHTML = "";
    const all = el("button", "phase-chip active", "toutes phases");
    all.dataset.phase = "";
    bar.appendChild(all);
    PHASES.filter(p => p.id !== "support").forEach(p => {
      const c = el("button", "phase-chip", esc(p.label));
      c.dataset.phase = p.id;
      bar.appendChild(c);
    });
    bar.addEventListener("click", (e) => {
      const chip = e.target.closest(".phase-chip");
      if (!chip) return;
      state.phase = chip.dataset.phase || null;
      [...bar.children].forEach(c => c.classList.toggle("active", c === chip));
      render();
    });
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
    const plats = (t.platforms || []).map(p => `<span class="plat ${p}">${p}</span>`).join("");
    const star = t.star ? '<span class="star" title="Incontournable">★</span>' : "";
    const phases = (t.phases || []).filter(p => p !== "support").map(p => PHASE_LABEL[p] || p).join(" · ");
    c.innerHTML =
      `<div class="tool-top">
         <span class="tool-name"><a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.name)}</a></span>${star}
         <span class="tool-plats">${plats}</span>
       </div>
       <p class="tool-desc">${esc(t.desc)}</p>`;
    if (t.cmd) {
      const cmd = el("div", "tool-cmd");
      cmd.textContent = t.cmd;
      cmd.appendChild(copyBtn(t.cmd));
      c.appendChild(cmd);
    }
    c.appendChild(el("div", "tool-foot",
      `<span class="phase-tag">${esc(phases)}</span><a class="tool-link" href="${esc(t.url)}" target="_blank" rel="noopener">ouvrir ↗</a>`));
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
      let steps = "";
      ch.steps.forEach(s => {
        steps += `<li class="cheat-step"><span class="st-tool">▸ ${esc(s.tool)}</span>
          <div class="cmd">${esc(s.cmd)}</div></li>`;
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
    const head = el("div", "veille-head");
    head.appendChild(el("span", "veille-upd",
      `📡 ${F.items.length} actualités · ${F.updated ? "mis à jour " + esc(timeAgo(F.updated)) : ""}`));
    const chips = el("div", "veille-chips");
    const mkChip = (kind, label) => {
      const c = el("button", "vchip" + (veilleKind === kind ? " active" : ""), esc(label));
      c.addEventListener("click", () => { veilleKind = (veilleKind === kind ? null : kind); renderVeille(); });
      return c;
    };
    chips.appendChild(mkChip(null, "toutes"));
    [...new Set(F.items.map(i => i.kind))].forEach(k => chips.appendChild(mkChip(k, KIND_LABEL[k] || k)));
    head.appendChild(chips);
    root.appendChild(head);

    const list = el("div", "feed-list");
    let n = 0;
    F.items.forEach(it => {
      if (veilleKind && it.kind !== veilleKind) return;
      if (state.qTokens.length && !textMatches(it.title + " " + (it.summary || "") + " " + it.source, state.qTokens)) return;
      n++;
      const card = el("article", "feed-item");
      card.innerHTML =
        `<div class="feed-top">
           <span class="kind kind-${esc(it.kind)}">${esc(KIND_LABEL[it.kind] || it.kind)}</span>
           <span class="feed-src">${esc(it.source)}</span>
           <span class="feed-date">${esc(timeAgo(it.date))}</span>
         </div>
         <a class="feed-title" href="${esc(it.link)}" target="_blank" rel="noopener">${esc(it.title)}</a>
         ${it.summary ? `<p class="feed-sum">${esc(it.summary)}</p>` : ""}`;
      list.appendChild(card);
    });
    if (!n) list.appendChild(el("p", "empty", "Aucune actualité pour ce filtre."));
    root.appendChild(list);
  }

  /* ---- orchestration ---- */
  function render() {
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
    if (e.key === "/" && document.activeElement !== searchEl) { e.preventDefault(); searchEl.focus(); }
    if (e.key === "Escape") { searchEl.blur(); }
  });
  const toTop = $("#toTop");
  window.addEventListener("scroll", () => toTop.classList.toggle("show", window.scrollY > 500));
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---- init ---- */
  buildCatNav();
  buildPhaseBar();
  setView("cheats");
})();
