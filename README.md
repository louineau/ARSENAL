# ARSENAL — Outils & méthodes offensives

> Mémo exhaustif et **ré-alimentable** d'outils et de méthodes : **OSINT · Pentest · Red Team**.
> Une cheat-sheet par cas d'usage (« dans telle situation, quel outil lancer ? ») + un catalogue d'outils classé par catégorie, dans l'esprit de [osintfr.com/outils](https://osintfr.com/outils/), [GTFOBins](https://gtfobins.github.io/) et [LOLBAS](https://lolbas-project.github.io/).

Page 100 % statique (HTML/CSS/JS, aucune dépendance, aucun build) — prête pour **GitHub Pages**.

---

## 🚀 Publier sur GitHub Pages

1. Crée un dépôt (ex. `arsenal`) et pousse le contenu de ce dossier :

   ```bash
   cd arsenal
   git init
   git add .
   git commit -m "ARSENAL v1.0"
   git branch -M main
   git remote add origin https://github.com/<ton-user>/arsenal.git
   git push -u origin main
   ```

2. Sur GitHub : **Settings → Pages → Build and deployment**
   - *Source* : `Deploy from a branch`
   - *Branch* : `main` / `/ (root)` → **Save**

3. La page sera en ligne sous quelques minutes à l'adresse
   `https://<ton-user>.github.io/arsenal/`.

> Renseigne l'URL de ton dépôt dans `data.js` (champ `META.repo`) pour activer le lien « Dépôt GitHub » du menu.

---

## ✍️ Ajouter / modifier du contenu

Tout se passe dans **`data.js`** — aucun autre fichier à toucher.

### Ajouter un outil
Copie un objet dans le tableau `TOOLS` :

```js
{
  name: "Nom de l'outil",
  url: "https://lien-officiel",
  cat: "enum",                       // id d'une catégorie (voir CATEGORIES)
  platforms: ["linux"],              // linux | windows | macos | web | multi
  phases: ["enum"],                  // recon | enum | vuln | exploit | post | support
  desc: "Description courte en français.",
  cmd: "exemple -de commande",       // optionnel (bouton copier auto)
  tags: "mots cles pour la recherche",
  star: true                         // optionnel : outil incontournable (★)
}
```

### Ajouter une catégorie
Ajoute un objet dans `CATEGORIES` (avec un `id` unique), puis référence cet `id` dans le champ `cat` de tes outils.

### Ajouter un cas d'usage (cheat-sheet)
Ajoute un objet dans `CHEATS` :

```js
{
  icon: "📁",
  title: "Port 445 / SMB ouvert",
  phase: "enum",
  steps: [
    { tool: "smbmap", cmd: "smbmap -H <ip> -R" }
  ],
  note: "Conseil / point de méthode."
}
```

---

## 🧩 Contenu couvert

- **Systèmes** : Kali, Parrot, BlackArch, Commando VM, FLARE-VM, REMnux…
- **OSINT** : theHarvester, Maltego, SpiderFoot, Shodan, crt.sh, Amass, Sherlock, Holehe…
- **Scan / énumération** : Nmap, netdiscover, RustScan, enum4linux-ng, smbmap, snmpwalk, ldapsearch…
- **Web** : ffuf, gobuster, Nikto, WPScan, Burp Suite, sqlmap, EyeWitness…
- **Vulnérabilités** : OpenVAS/Greenbone, Nessus, Nuclei, searchsploit…
- **Exploitation** : Metasploit, msfvenom, Impacket, Exploit-DB, Cobalt Strike, Sliver…
- **Cracking** : Hydra, Hashcat, John, CeWL, Crunch…
- **Active Directory** : BloodHound, NetExec (CrackMapExec), Responder, Mimikatz, Rubeus, evil-winrm…
- **Post-exploitation** : LinPEAS/WinPEAS, PowerUp, pspy, Seatbelt…
- **Pivot / shells** : Netcat, socat, Chisel, Ligolo-ng, proxychains, revshells.com…
- **Références** : GTFOBins, LOLBAS, LOLDrivers, WADComs, HackTricks, MITRE ATT&CK, CyberChef…
- **Méthodologies** : PTES, OWASP WSTG, NIST 800-115, OSSTMM, Cyber Kill Chain…

Méthodologie et cas d'usage synthétisés à partir du cours **Lead Pentester (ESD Academy)** et des rapports de test d'intrusion associés.

---

## 📡 Veille (flux RSS automatiques)

L'onglet **Veille** agrège des flux RSS/Atom (CERT-FR avis/alertes/actus, CISA, Exploit-DB, The Hacker News) **+ les CVE notés CVSS de la base NVD (NIST)**, et les affiche triés par date.

Chaque actualité est enrichie automatiquement :
- **Criticité** — score **CVSS** (badge couleur : 🔴 Critique ≥ 9 · 🟠 Élevé ≥ 7 · 🟡 Moyen ≥ 4). Le score vient de NVD quand il existe, sinon il est extrait du texte, sinon estimé par mots-clés (alerte, « activement exploité », RCE…).
- **Plateforme** — système/produit probablement concerné (Windows, Linux, macOS, Android, iOS, Web, Réseau, VMware), déduit du texte.

Filtres disponibles dans l'onglet : par **source**, par **seuil de criticité**, par **plateforme**, un **tri Récent ↔ Criticité**, et la **recherche** globale indexe tout (titre, résumé, type, criticité, score, plateforme) — ex. `cvss windows` ou `critique linux`.

Fonctionnement — 100 % automatique, sans backend :
1. Un **workflow GitHub Actions** ([.github/workflows/feeds.yml](.github/workflows/feeds.yml)) s'exécute toutes les 6 h (et à la demande).
2. Il lance [scripts/build_feeds.py](scripts/build_feeds.py) (Python standard, zéro dépendance) qui récupère les flux, calcule criticité + plateforme, et génère **`feeds.js`**.
3. Il commite `feeds.js` ; la page le charge comme `data.js`.

> ⚙️ À activer une fois : sur GitHub, **Settings → Actions → General → Workflow permissions → Read and write permissions** (pour que l'Action puisse committer `feeds.js`).

**Ajouter une source** : une ligne dans la liste `FEEDS` de `scripts/build_feeds.py`.
**Régénérer à la main** : `python scripts/build_feeds.py` (puis commit).

## ⚖️ Avertissement

Ressource **pédagogique**. À n'utiliser que dans un cadre **légal** :
tests d'intrusion autorisés (avec Rules of Engagement signées), laboratoires, CTF, formation.
L'usage de ces outils contre des systèmes sans autorisation explicite est illégal.
