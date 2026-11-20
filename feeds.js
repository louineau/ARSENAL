/* Généré automatiquement par scripts/build_feeds.py — NE PAS éditer à la main */
window.ARSENAL_FEEDS = {
 "updated": "2026-11-20T07:25:02+00:00",
 "sources": [
  {
   "name": "CERT-FR · Alertes",
   "kind": "alerte",
   "url": "https://www.cert.ssi.gouv.fr/alerte/feed/",
   "ok": true,
   "count": 15
  },
  {
   "name": "CERT-FR · Avis",
   "kind": "avis",
   "url": "https://www.cert.ssi.gouv.fr/avis/feed/",
   "ok": true,
   "count": 15
  },
  {
   "name": "CERT-FR · Actualités",
   "kind": "actu",
   "url": "https://www.cert.ssi.gouv.fr/actualite/feed/",
   "ok": true,
   "count": 15
  },
  {
   "name": "CISA · Advisories",
   "kind": "cve",
   "url": "https://www.cisa.gov/cybersecurity-advisories/all.xml",
   "ok": true,
   "count": 15
  },
  {
   "name": "Exploit-DB",
   "kind": "exploit",
   "url": "https://www.exploit-db.com/rss.xml",
   "ok": true,
   "count": 15
  },
  {
   "name": "The Hacker News",
   "kind": "news",
   "url": "https://feeds.feedburner.com/TheHackersNews",
   "ok": true,
   "count": 15
  },
  {
   "name": "NVD · CVE notés CVSS",
   "kind": "cve",
   "url": "https://nvd.nist.gov/",
   "ok": false,
   "count": 0,
   "error": "The read operation timed out"
  }
 ],
 "items": [
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "China-Linked Hackers Exploit Critical VMware vCenter Zero-Day to Gain Admin Access and Steal Data",
   "link": "https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html",
   "summary": "The suspected China-nexus cyber espionage group known as Armory Castle (formerly UNC5221) has been attributed to the zero-day exploitation of a critical security flaw in VMware vCenter Server in early September 2026. The vulnerability, trac…",
   "date": "2026-11-20T06:33:31+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "vmware"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "New Unpatched Windows 0-Day FastUnlock Lets Someone Holding a Locked PC Run Programs on It",
   "link": "https://thehackernews.com/2026/11/new-unpatched-windows-0-day-fastunlock.html",
   "summary": "A newly disclosed unpatched zero-day technique called FastUnlock lets someone with physical access to a locked Windows computer start programs without signing in. Whoever uses it gets only a limited account, not administrator control of the…",
   "date": "2026-11-20T05:30:01+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "ThreatsDay: GPT-6.2 Jailbreak Flaws, BubbleLoader PNG Malware, $500M Ransom Demands + 17 More Stories",
   "link": "https://thehackernews.com/2026/11/threatsday-gpt-62-jailbreak-flaws.html",
   "summary": "The easiest way to fool someone is to give them something they already expect. A job offer. A message about a service outage. A familiar app. Nothing looks strange at first. And that's the problem. This week's stories show how ordinary thin…",
   "date": "2026-11-19T18:47:58+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "phpAfterShell Explained: How Hackers Could Turn a PHP Session Flaw Into Code Execution",
   "link": "https://thehackernews.com/2026/11/phpaftershell-explained-how-hackers.html",
   "summary": "PHP's default file-based session storage can be made to return objects an attacker chose, by cutting off a session write at the right moment. When combined with a second weakness, such as a suitable gadget chain in the app, those objects ca…",
   "date": "2026-11-19T16:59:56+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "PHP Fixes 7 Critical Flaws, Including Bugs That Could Allow Remote Code Execution",
   "link": "https://thehackernews.com/2026/11/php-fixes-7-critical-flaws-including.html",
   "summary": "The PHP Foundation has released security updates to address multiple critical security flaws that could be exploited to achieve remote code execution on affected deployments, including CVE-2026-115560. The release of the patch follows an ad…",
   "date": "2026-11-19T15:18:07+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Critical VMware vCenter Zero-Day Flaw Lets Network Attackers Bypass Authentication",
   "link": "https://thehackernews.com/2026/11/critical-vmware-vcenter-flaw-cvss-98.html",
   "summary": "A critical flaw in VMware vCenter lets an attacker with network access bypass authentication and gain unauthorized access to the system, Broadcom, which owns VMware, said in an advisory published today. Fixed versions are out for all suppor…",
   "date": "2026-11-19T15:11:06+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "vmware"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Drupal Patches Critical Installer Flaw That Could Give Unauthenticated Attackers Control of Sites",
   "link": "https://thehackernews.com/2026/11/drupal-patches-critical-installer-flaw.html",
   "summary": "Under specific conditions, a critical vulnerability in Drupal core can allow an attacker without login credentials to use the built-in installer to attempt to reinstall a site. That can lead to a site takeover or remote code execution, and…",
   "date": "2026-11-19T14:33:06+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Elecbrakes EB2, VM1, ELBC2000",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-323-02",
   "summary": "View CSAF Summary Successful exploitation of these vulnerabilities could allow an attacker to gain control of the brakes of a trailer, modify the firmware, disable the brake lights, modify the brake conditions or disable other critical safe…",
   "date": "2026-11-19T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "libumqtt",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-323-03",
   "summary": "View CSAF Summary Successful exploitation of this vulnerability could allow a remote attacker to cause a denial of service, memory corruption, or information disclosure. The following versions of libumqtt are affected: libumqtt <=1.1.1 (CVE…",
   "date": "2026-11-19T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Autonomy Logic OpenPLC Runtime",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-323-01",
   "summary": "View CSAF Summary Successful exploitation of this vulnerability could allow several unauthenticated admin accounts to be created. The following versions of Autonomy Logic OpenPLC Runtime are affected: OpenPLC Runtime <=4.2.4 (CVE-2026-12608…",
   "date": "2026-11-19T12:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Everything Is a Web Application, Including Your Firewall",
   "link": "https://thehackernews.com/2026/11/everything-is-web-application-including.html",
   "summary": "One of the early targets of PHP2Shell exploitation was the firewall. On October 28, Palo Alto Networks confirmed that attackers were exploiting the two PHP vulnerabilities, CVE-2026-109618 and CVE-2026-109619, against PAN-OS management inte…",
   "date": "2026-11-19T11:52:23+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web",
    "réseau"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Hackers Breach N-able Cloud Server, Disrupting Email Security Management Across 3 Regions",
   "link": "https://thehackernews.com/2026/11/n-able-confirms-hackers-accessed-cloud.html",
   "summary": "N-able on Wednesday disclosed that unknown threat actors gained unauthorized access to one of the servers in the Mail Assure and Spam Experts Hosted Cloud, causing it to disable management interfaces and APIs. \"We have taken steps to mitiga…",
   "date": "2026-11-19T09:31:26+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Ruby Releases Fixes for 7 Regex and String Flaws, Warns 5 Have Proof-of-Concept RCE",
   "link": "https://thehackernews.com/2026/11/ruby-releases-fixes-for-7-regex-and.html",
   "summary": "Ruby contains seven memory-safety flaws in its regular expression engine and its string case-conversion code. For five of them, its maintainers say, proof-of-concept exploits, or PoCs, have shown that crafted input can run code on the machi…",
   "date": "2026-11-19T08:42:11+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Researcher Demonstrates Database RCE Exploits Affecting PostgreSQL, MySQL and Oracle",
   "link": "https://thehackernews.com/2026/11/researcher-demonstrates-database-rce.html",
   "summary": "Low-privilege database accounts that cannot read a single application table can still be used to run code on the database server itself, a researcher has shown, by reaching memory-corruption bugs in the engine code behind ordinary SQL. The…",
   "date": "2026-11-19T08:14:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "CISA Warns of 4 Exploited Flaws Linked to Ransomware, Cryptomining, and LLMjacking Attacks",
   "link": "https://thehackernews.com/2026/11/cisa-warns-of-4-exploited-flaws-linked.html",
   "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Wednesday added four vulnerabilities impacting Synology DiskStation Manager (DSM), BerriAI LiteLLM, Apache Axis, and Vanderbilt University Research Electronic Data Capture…",
   "date": "2026-11-19T08:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "PHP Warns of Critical Security Flaws Affecting All Supported Versions, Fixes Coming November 19",
   "link": "https://thehackernews.com/2026/11/php-warns-of-critical-security-flaws.html",
   "summary": "The maintainers of the PHP programming language on Wednesday issued an advisory announcing an upcoming security release that addresses critical flaws. The release is scheduled for November 19, 2026, between 2 and 2:30 p.m. UTC. \"These relea…",
   "date": "2026-11-19T04:33:46+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans VMware Tanzu (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1568/",
   "summary": "Une vulnérabilité a été découverte dans VMware Tanzu. Elle permet à un attaquant de provoquer une exécution de code arbitraire à distance.",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "vmware"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Mitel (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1569/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Mitel. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la confiden…",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Progress WS_FTP Server (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1570/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Progress WS_FTP Server. Certaines d'entre elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et une atteinte à l'int…",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Laravel (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1571/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Laravel. Certaines d'entre elles permettent à un attaquant de provoquer un déni de service à distance, une injection de code indirecte à distance (XSS) et un contournement de la politique…",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans ClamAV (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1572/",
   "summary": "De multiples vulnérabilités ont été découvertes dans ClamAV. Certaines d'entre elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et un contournement de la politique de…",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Cisco (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1573/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Cisco. Elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance et un déni de service à distance.",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans WordPress (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1574/",
   "summary": "De multiples vulnérabilités ont été découvertes dans WordPress. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une élévation de privilèges et un déni de service à distance.",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Wireshark (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1575/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Wireshark. Elles permettent à un attaquant de provoquer un déni de service à distance.",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Splunk (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1576/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Splunk. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une élévation de privilèges et une atteinte à la confident…",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits NetApp (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1577/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits NetApp. Elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et une atteinte à l'intégrité des données.",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans les produits Elastic (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1578/",
   "summary": "Une vulnérabilité a été découverte dans les produits Elastic. Elle permet à un attaquant de provoquer une exécution de code arbitraire à distance et un déni de service à distance.",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Drupal (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1579/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Drupal. Elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance.",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans PHP (19 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1580/",
   "summary": "De multiples vulnérabilités ont été découvertes dans PHP. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une élévation de privilèges et un déni de service à distance.",
   "date": "2026-11-19T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "10-Year-Old NGINX HTTP/2 Flaw Lets Unauthenticated Attackers Execute Code on Servers",
   "link": "https://thehackernews.com/2026/11/10-year-old-nginx-http2-flaw-lets.html",
   "summary": "A flaw in NGINX's HTTP/2 support can allow an attacker to run code on servers with HTTP/2 enabled, without needing to log in. The decade-old flaw, CVE-2026-123007, dubbed \"nginx2root,\" has been present in NGINX's open-source code since vers…",
   "date": "2026-11-18T18:31:17+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "F5 Warns 6 Critical BIG-IP Flaws Can Crash Traffic in Specific Setups, May Allow RCE",
   "link": "https://thehackernews.com/2026/11/f5-warns-6-critical-big-ip-flaws-can.html",
   "summary": "Six critical vulnerabilities in F5 BIG-IP allow an attacker to crash the Traffic Management Microkernel (TMM) without logging in, disrupting traffic until the TMM restarts. Each flaw needs a specific setup on a virtual server: an iRule that…",
   "date": "2026-11-18T18:15:39+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "CISA Adds Four Known Exploited Vulnerabilities to Catalog",
   "link": "https://www.cisa.gov/news-events/alerts/2026/11/18/cisa-adds-four-known-exploited-vulnerabilities-catalog",
   "summary": "CISA has added four new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog , based on evidence of active exploitation. CVE-2024-10441 Synology DiskStation Manager (DSM) Improper Encoding or Escaping of Output Vulnerability…",
   "date": "2026-11-18T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Vulnérabilité dans Oracle Java SE (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-016/",
   "summary": "Le 17 novembre 2026, Oracle a publié un avis de sécurité concernant la vulnérabilité CVE-2026-114938, surnommée *java4shell*, qui affecte le décodeur Base64 de OpenJDK sur les processeurs x86-64 supportant AVX-512 VBMI. Celle-ci permet à un…",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Multiples vulnérabilités dans F5 NGINX (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-017/",
   "summary": "Le 18 novembre 2026, F5 a publié deux avis de sécurité concernant les vulnérabilités CVE-2026-123633 et CVE-2026-123007. Celles-ci affectent NGINX Open Source et NGINX Plus permettent à un attaquant non authentifié d'exécuter du code à dist…",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Tenable (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1556/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Tenable. Elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et une atteinte à l'intégrité des données.",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Netgate pfSense (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1557/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Netgate pfSense. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une élévation de privilèges et un déni de service à distance.",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Siemens Simcenter Femap",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-10",
   "summary": "View CSAF Summary Simcenter Femap is affected by an out of bounds read vulnerability that could be triggered when the application reads files in X_T format. This could allow an attacker to crash the application or execute arbitrary code. Si…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Dorsett Controls InfoScan",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-01",
   "summary": "View CSAF Summary Successful exploitation of these vulnerabilities could allow an attacker to retrieve sensitive system information, access application data without authorization, recover stored credentials, or intercept and manipulate netw…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Siemens Mendix Studio Pro",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-05",
   "summary": "View CSAF Summary Mendix Studio Pro contains multiple vulnerabilities in the MCP Server, that could allow an attacker with network access to interact with the server remotely or trick a user's browser into sending unauthorized requests, pot…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Siemens .NET Client Library for SIMATIC S7 Webserver API",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-02",
   "summary": "View CSAF Summary .NET Client Library for SIMATIC S7 Webserver API contains multiple vulnerabilities that could allow an attacker to obtain sensitive information or write arbitrary files outside the intended download directory. Siemens has…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Critical Java Vulnerability Requires Immediate Patching",
   "link": "https://www.cisa.gov/news-events/alerts/2026/11/17/critical-java-vulnerability-requires-immediate-patching",
   "summary": "Purpose CISA strongly urges organizations to immediately patch the recently disclosed Oracle Java vulnerability CVE-2026-114938 . This critical memory-corruption vulnerability, known as “Java4Shell,” affects the Base64 decoder of the x86-64…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Siemens Industrial Software Products",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-04",
   "summary": "View CSAF Summary On October 21, 2026, the Node.js project released security updates addressing a critical vulnerability in the Brotli decoder bundled with Node.js, commonly referred to as \"Node2Shell\" (tracked as CVE-2026-111497). The vuln…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Siemens ROS#",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-06",
   "summary": "View CSAF Summary ROS# before version 2.3.1 contains a code injection vulnerability that could allow an attacker that is able to pass a crafted message definition file to the user to inject arbitrary code into the generated program. Siemens…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Siemens SIMATIC",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-08",
   "summary": "View CSAF Summary The products listed below contain an authentication bypass vulnerability that could allow an on-path attacker to take over the session of a legitimate user and execute arbitrary code with the privileges of the victim user.…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Siemens Industrial Automation Software Products",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-03",
   "summary": "View CSAF Summary On October 21, 2026, the Node.js project released security updates addressing a critical vulnerability in the Brotli decoder bundled with Node.js, commonly referred to as \"Node2Shell\" (tracked as CVE-2026-111497). The vuln…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "CISA Adds One Known Exploited Vulnerability to Catalog",
   "link": "https://www.cisa.gov/news-events/alerts/2026/11/17/cisa-adds-one-known-exploited-vulnerability-catalog",
   "summary": "CISA has added one new vulnerability to its Known Exploited Vulnerabilities (KEV) Catalog , based on evidence of active exploitation. CVE-2026-115731 Perforce Puppet Enterprise Deserialization of Untrusted Data Vulnerability This type of vu…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "Siemens meta-iot2050",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-11",
   "summary": "View CSAF Summary meta-iot2050 (https://github.com/siemens/meta-iot2050) from V01.03.01 contains a Command Injection vulnerability in the firmware update tool that could allow an attacker which is able to manipulate a configuration file to…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-048 (16 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-048/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-11-16T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] Ruflo MCP Bridge 3.16.2 - Remote Code Execution",
   "link": "https://www.exploit-db.com/exploits/52705",
   "summary": "Ruflo MCP Bridge 3.16.2 - Remote Code Execution",
   "date": "2026-11-11T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-047 (09 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-047/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-11-09T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "[MàJ] Vulnérabilité dans OpenSSH (05 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-015/",
   "summary": "[Mise à jour du 6 novembre 2026] Cette vulnérabilité porte l'identifiant CVE-2026-123158. Alpine a publié un bulletin de sécurité (cf. section Documentation) concernant cette vulnérabilité. Le CERT-FR précise que toute installation de corre…",
   "date": "2026-11-05T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-046 (02 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-046/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-11-02T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-045 (26 octobre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-045/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-10-26T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] PHP2Shell (CVE-2026-109618) - PHP core versions after v5.4 - RCE",
   "link": "https://www.exploit-db.com/exploits/52704",
   "summary": "PHP2Shell (CVE-2026-109618) - PHP core versions after v5.4 - RCE",
   "date": "2026-10-22T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "[Màj] Multiples vulnérabilités dans PHP (21 octobre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-014/",
   "summary": "**[Mise à jour du 26 octobre 2026]** Le 23 octobre 2026, PHP a publié un avis de sécurité concernant la vulnérabilité CVE-2026-115560. Celle-ci permet une exécution de code arbitraire à distance. L'éditeur estime que les conditions d'exploi…",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[webapps] pizzafy-1.0 - SQLi",
   "link": "https://www.exploit-db.com/exploits/52703",
   "summary": "pizzafy-1.0 - SQLi",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] South River Technologies Titan MFT Server 26.0.0 - code execution",
   "link": "https://www.exploit-db.com/exploits/52701",
   "summary": "South River Technologies Titan MFT Server 26.0.0 - code execution",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] Synametrics Syncrify 6.2 - command execution",
   "link": "https://www.exploit-db.com/exploits/52700",
   "summary": "Synametrics Syncrify 6.2 - command execution",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[webapps] Keycloak 26.7.2 - Unauthenticated Account Takeover",
   "link": "https://www.exploit-db.com/exploits/52699",
   "summary": "Keycloak 26.7.2 - Unauthenticated Account Takeover",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[webapps] Open eClass 3.15 - RCE",
   "link": "https://www.exploit-db.com/exploits/52698",
   "summary": "Open eClass 3.15 - RCE",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[webapps] Automotive Shop Management System 1.0 - SQLi",
   "link": "https://www.exploit-db.com/exploits/52697",
   "summary": "Automotive Shop Management System 1.0 - SQLi",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] Edimax BR-6478AC firmware v2.20 - authenticated command injection",
   "link": "https://www.exploit-db.com/exploits/52696",
   "summary": "Edimax BR-6478AC firmware v2.20 - authenticated command injection",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] Exasol Database 7.1.30 - command execution",
   "link": "https://www.exploit-db.com/exploits/52695",
   "summary": "Exasol Database 7.1.30 - command execution",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] Parasoft Continuous Testing Platform 10.7.5 - JSP command execution",
   "link": "https://www.exploit-db.com/exploits/52694",
   "summary": "Parasoft Continuous Testing Platform 10.7.5 - JSP command execution",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] ProSoft RLX-IFH24E v2.2.44 - Unsigned Firmware Upgrade Package Executed as Root",
   "link": "https://www.exploit-db.com/exploits/52693",
   "summary": "ProSoft RLX-IFH24E v2.2.44 - Unsigned Firmware Upgrade Package Executed as Root",
   "date": "2026-10-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-044 (19 octobre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-044/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-10-19T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "[MàJ] Multiples vulnérabilités dans Ivanti Connect Secure (ICS) (14 octobre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-013/",
   "summary": "[Mise à jour du 2 novembre 2026] Le 29 octobre 2026, Ivanti a mis à jour son avis de sécurité du 13 octobre 2026 pour ajouter deux vulnérabilités (CVE-2026-111357 et CVE-2026-118527). Celles-ci permettent à un attaquant authentifié d'élever…",
   "date": "2026-10-14T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Incident de sécurité ciblant les contrôleurs à distance des installations de réfrigération (12 octobre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-012/",
   "summary": "Le CERT-FR a connaissance de nombreuses compromissions des controleurs à distance d'installation de réfrigération Danfoss série AK-SM, AK-SC ainsi que Copeland xweb et Dixell xweb. De manière générale l'exposition d'une interface de gestion…",
   "date": "2026-10-12T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-043 (12 octobre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-043/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-10-12T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-042 (05 octobre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-042/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-10-05T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[remote] Teltonika_RutOS 00.07.06.21 - command injection",
   "link": "https://www.exploit-db.com/exploits/52692",
   "summary": "Teltonika_RutOS 00.07.06.21 - command injection",
   "date": "2026-10-01T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[webapps] TigerGraph_Community_Edition 4.2.4 - arbitrary file write",
   "link": "https://www.exploit-db.com/exploits/52691",
   "summary": "TigerGraph_Community_Edition 4.2.4 - arbitrary file write",
   "date": "2026-10-01T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[webapps] WordPress 7.0.2 - Path Travesal",
   "link": "https://www.exploit-db.com/exploits/52690",
   "summary": "WordPress 7.0.2 - Path Travesal",
   "date": "2026-10-01T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Multiples vulnérabilités dans Citrix NetScaler ADC et Gateway (28 septembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-011/",
   "summary": "**[Mise à jour du 05 octobre 2026]** Le 4 octobre 2026, Citrix a publié un avis concernant une nouvelle vulnérabilité (CVE-2026-88779) permettant un déni de service à distance. La CISA indique que cette vulnérabilité est activement exploité…",
   "date": "2026-09-28T00:00:00+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-041 (28 septembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-041/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-09-28T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-040 (21 septembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-040/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-09-21T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-039 (14 septembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-039/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-09-14T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Vulnérabilité dans Metabase (10 septembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-010/",
   "summary": "Le 06 août 2026, Metabase a publié un avis de sécurité concernant une vulnérabilité critique permettant à un attaquant non authentifié de provoquer une injection SQL (SQLi) dans la base de donnée de l'application Metabase. Cette injection S…",
   "date": "2026-09-10T00:00:00+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-038 (07 septembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-038/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-09-07T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Multiples vulnérabilités dans SonicWall Secure Mobile Access (02 septembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-009/",
   "summary": "Le 01 septembre 2026, SonicWall a publié un avis de sécurité concernant deux vulnérabilités affectant les Secure Mobile Access (SMA) 1000. La vulnérabilité critique CVE-2026-83548 permet une falsification de requêtes côté serveur (SSRF) de…",
   "date": "2026-09-02T00:00:00+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-037 (31 août 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-037/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-08-31T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-036 (24 août 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-036/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-08-24T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-035 (17 août 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-035/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-08-17T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-034 (10 août 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-034/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-08-10T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Multiples vulnérabilités dans Microsoft Sharepoint (22 juillet 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-008/",
   "summary": "Le 14 juillet 2026, à l'occasion de sa mise à jour mensuelle, Microsoft a publié, entre autres, des correctifs pour deux vulnérabilités critiques affectant SharePoint. Les vulnérabilités CVE-2026-50522 et CVE-2026-58644 permettent à un atta…",
   "date": "2026-07-22T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Multiples vulnérabilités dans WordPress (20 juillet 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-007/",
   "summary": "Le 17 juillet 2026, WordPress a publié un correctif pour deux vulnérabilités : CVE-2026-60137 : une injection SQL (SQLi) ; CVE-2026-63030 : celle-ci permet un contournement de la politique de sécurité. Un attaquant peut exploiter ces deux v…",
   "date": "2026-07-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Multiples vulnérabilités dans Sonicwall Secure Mobile Access (15 juillet 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-006/",
   "summary": "Le 14 juillet 2026, Sonicwall a publié un avis de sécurité concernant deux vulnérabilités affectant les Secure Mobile Access (SMA) 1000. La vulnérabilité critique CVE-2026-15409 permet une falsification de requêtes côté serveur (SSRF) de la…",
   "date": "2026-07-15T00:00:00+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "[Màj] Vulnérabilité dans Microsoft Exchange Server (15 mai 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-005/",
   "summary": "[Mise à jour du 11 juin 2026] Le 9 juin 2026, Microsoft a publié des versions correctives. [Publication initiale] Le 14 mai 2026, Microsoft a publié un avis de sécurité concernant la vulnérabilité CVE-2026-42897 affectant Exchange Server. E…",
   "date": "2026-05-15T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Vulnérabilité dans F5 BIG-IP Access Policy Manager (31 mars 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-004/",
   "summary": "Le 15 octobre 2025, F5 a publié un avis de sécurité concernant entre autres la vulnérabilité CVE-2025-53521. Celle-ci affecte BIG-IP APM et permet à un attaquant non authentifié d'exécuter du code à distance. Le 29 mars 2026, l'éditeur indi…",
   "date": "2026-03-31T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "Note d’alerte – Ciblage des messageries instantanées (20 mars 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-003/",
   "summary": "Le CERT-FR observe une recrudescence de campagnes d’attaques ciblant les comptes de messagerie instantanées. Ces campagnes ciblent particulièrement les secteurs régaliens (personnalités politiques, cadres de l’administration) mais aussi les…",
   "date": "2026-03-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  }
 ]
};
