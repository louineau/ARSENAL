/* Généré automatiquement par scripts/build_feeds.py — NE PAS éditer à la main */
window.ARSENAL_FEEDS = {
 "updated": "2026-11-18T20:37:50+00:00",
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
   "ok": true,
   "count": 15
  }
 ],
 "items": [
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
   "source": "The Hacker News",
   "kind": "news",
   "title": "Critical Apache Roller RCE Flaw Under Active Exploitation, No Authentication Required",
   "link": "https://thehackernews.com/2026/11/critical-apache-roller-rce-flaw-under.html",
   "summary": "A critical security flaw in Apache Roller, an open-source, Java-based blogging platform, has come under active exploitation in the wild, according to the Apache Software Foundation (ASF) The vulnerability, tracked as CVE-2026-129448 (CVSS s…",
   "date": "2026-11-18T17:10:45+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "New EggStreme Malware Variant Goes Silent to Evade Security Tools in Government Attacks",
   "link": "https://thehackernews.com/2026/11/eggstreme-hackers-rebuild-malware-with.html",
   "summary": "The suspected Chinese advanced persistent threat (APT) group behind the sophisticated EggStreme malware has rebuilt its toolkit as it continues to target government organizations in the Philippines. \"When attackers are exposed, the cheap re…",
   "date": "2026-11-18T14:11:28+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "New Attack Bypasses TPM Lockout to Crack Windows Hello and BitLocker PINs in Days, Not Years",
   "link": "https://thehackernews.com/2026/11/flash-chip-attack-bypasses-tpm-lockout.html",
   "summary": "On AMD-based PCs and some Intel PCs, the TPM lockout for Windows Hello and BitLocker PINs can be reset by someone who opens the PC's case, researchers at Technische Universität Berlin say. That leaves short PINs open to guessing. In lab tes…",
   "date": "2026-11-18T12:28:30+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "AI Pentesting Checklist for Web Apps: 15 Questions to Ask Before Choosing a Vendor",
   "link": "https://thehackernews.com/2026/11/ai-pentesting-checklist-for-web-apps-15.html",
   "summary": "TL;DR Attackers move first. On average, exploitation now starts before a patch exists (Mandiant M-Trends 2026). In 1H 2026, 23% of vulnerabilities VulnCheck added to its exploited list were hit on or before disclosure day. AI pentesting ven…",
   "date": "2026-11-18T12:15:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
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
   "source": "The Hacker News",
   "kind": "news",
   "title": "Java4Shell Flaw (CVE-2026-114938) Enables Pre-Auth RCE in Jira, Jenkins, Keycloak and More",
   "link": "https://thehackernews.com/2026/11/java4shell-cve-2026-114938-enables-pre.html",
   "summary": "A Java flaw called Java4Shell can let attackers without an account run their own code on Jira, Jenkins, Keycloak, and three other widely used applications, says Calif, the security research firm that disclosed it this week. The flaw is pres…",
   "date": "2026-11-18T11:55:49+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Quality Isn’t The Main Worry About AI Pentesting — Data Privacy and Production Safety Are",
   "link": "https://thehackernews.com/2026/11/quality-isnt-main-worry-about-ai.html",
   "summary": "AI is speeding up how software is built, which means more code, more changes, and more chances for vulnerabilities to reach production. It's speeding up how attackers find and exploit them too, with time-to-exploit now down to a single day.…",
   "date": "2026-11-18T11:03:57+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Hackers Exploiting Critical Puppet RCE Flaw Affecting Enterprise Management Servers",
   "link": "https://thehackernews.com/2026/11/hackers-exploiting-critical-puppet-rce.html",
   "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Tuesday added a critical security flaw impacting Perforce Puppet, an enterprise infrastructure-as-code (IaC) and configuration management platform, to its Known Exploited V…",
   "date": "2026-11-18T08:24:31+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "CISA Urges Immediate Patching of Java4Shell Flaw That Could Allow Remote Code Execution",
   "link": "https://thehackernews.com/2026/11/cisa-urges-immediate-patching-of.html",
   "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has urged organizations to immediately patch a newly disclosed critical security flaw impacting Oracle Java. The flaw, tracked as CVE-2026-114938 (CVSS score: 8.1), refers to…",
   "date": "2026-11-18T08:24:23+00:00",
   "cvss": 8.1,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Attackers Compromise Microsoft's Agent Framework PyPI Package to Steal Cloud Credentials",
   "link": "https://thehackernews.com/2026/11/attackers-compromise-microsofts-agent.html",
   "summary": "Threat actors have compromised Microsoft's agent-framework package to push a credential stealer, according to reports from Aikido, Chainguard, Endor Labs, OX Security, SafeDep, Socket, StepSecurity, and Google-owned Wiz. The malicious versi…",
   "date": "2026-11-18T06:45:26+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Russian COLD RELIC Hackers Use Stolen Google Workspace Data to Breach Second U.S. Organization",
   "link": "https://thehackernews.com/2026/11/russian-cold-relic-hackers-use-stolen.html",
   "summary": "The Russia-linked cyber espionage group known as Cold Relic (formerly COLDRIVER and UNC4057) has been observed weaponizing a single cloud compromise into a launchpad for a series of linked intrusions resulting in third-party compromise. Goo…",
   "date": "2026-11-18T05:58:04+00:00",
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
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans FreeBSD (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1558/",
   "summary": "Une vulnérabilité a été découverte dans FreeBSD. Elle permet à un attaquant de provoquer une atteinte à la confidentialité des données et un déni de service.",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Google Chrome (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1559/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Google Chrome. Elles permettent à un attaquant de provoquer un problème de sécurité non spécifié par l'éditeur.",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Mozilla Firefox (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1560/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Mozilla Firefox. Elles permettent à un attaquant de provoquer une élévation de privilèges et un problème de sécurité non spécifié par l'éditeur.",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Oracle Database Server (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1561/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Oracle Database Server. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la conf…",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Oracle Java SE (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1562/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Oracle Java SE. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la confidential…",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Oracle MySQL (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1563/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Oracle MySQL. Elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et une atteinte à l'intégrité des données.",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Oracle PeopleSoft (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1564/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Oracle PeopleSoft. Elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une atteinte à la confidentialité des données et une atteinte à l'intégrité de…",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Oracle Weblogic (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1565/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Oracle Weblogic. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la confidentia…",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Oracle Virtualization (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1566/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Oracle Virtualization. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la confi…",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits F5 (18 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1567/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits F5. Elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et un contournement de la politique de sécurité.",
   "date": "2026-11-18T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-115139",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-115139",
   "summary": "Vulnerability in the Oracle Hyperion Infrastructure Technology product of Oracle Hyperion (component: Installation and Configuration). The supported version that is affected is 11.2.26.0.000. Easily exploitable vulnerability allows unauthen…",
   "date": "2026-11-17T22:18:47.437000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-114956",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-114956",
   "summary": "Vulnerability in the Oracle Hyperion Planning product of Oracle Hyperion (component: Security). The supported version that is affected is 11.2.26.0.000. Easily exploitable vulnerability allows unauthenticated attacker with network access vi…",
   "date": "2026-11-17T22:18:26.023000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-114934",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-114934",
   "summary": "Vulnerability in the PeopleSoft Enterprise PeopleTools product of Oracle PeopleSoft (component: Integration Broker). Supported versions that are affected are 8.61-8.63. Easily exploitable vulnerability allows unauthenticated attacker with n…",
   "date": "2026-11-17T22:18:23.437000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-114881",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-114881",
   "summary": "Vulnerability in the Document Management and Collaboration product of Oracle E-Business Suite (component: Attachments). Supported versions that are affected are 12.2.3-12.2.15. Easily exploitable vulnerability allows unauthenticated attacke…",
   "date": "2026-11-17T22:18:17.107000+00:00",
   "cvss": 9.1,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-101691",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-101691",
   "summary": "Vulnerability in the Oracle Mobile Field Service product of Oracle E-Business Suite (component: Admin UI). Supported versions that are affected are 12.2.3-12.2.15. Easily exploitable vulnerability allows unauthenticated attacker with networ…",
   "date": "2026-11-17T22:18:04.460000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-130849",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-130849",
   "summary": "BZFlag bzfs before 2.4.32 contains a heap out-of-bounds write vulnerability in NetHandler::tcpReceive() that allows remote unauthenticated attackers to corrupt heap memory by sending a TCP message with a body length of exactly 1024. Attacke…",
   "date": "2026-11-17T20:17:50.113000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Researchers Claim Two RCE Exploits That Bypass Telegram’s New Android Defenses",
   "link": "https://thehackernews.com/2026/11/researchers-claim-two-rce-exploits-that.html",
   "summary": "A malicious widget can bypass the security filter that Telegram added to its Android app last week and run code outside it, according to NebuSec, a security company. Widgets are small interactive blocks that bots send inside chat messages,…",
   "date": "2026-11-17T19:34:20+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "android"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Oracle to Patch 11 Java Flaws Today as Critical OpenJDK RCE (CVE-2026-114938) Report Emerges",
   "link": "https://thehackernews.com/2026/11/oracle-to-patch-11-java-flaws-today-as.html",
   "summary": "Oracle is preparing to release security patches for 11 vulnerabilities in Java SE on Tuesday, November 17, 2026, all of which may be exploited remotely without authentication, as separate reports warn of a potentially critical remote code e…",
   "date": "2026-11-17T15:17:36+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Trigram Campaign Impersonates About 50 AI and Blockchain Brands to Target Devs with Infostealers",
   "link": "https://thehackernews.com/2026/11/trigram-campaign-impersonates-about-50.html",
   "summary": "Artificial intelligence (AI), blockchain, and logistics sectors across Europe and the U.S. have emerged as the target of a large-scale, industrialized campaign dubbed Trigram. \"Trigram is a large-scale campaign that impersonates about 50 br…",
   "date": "2026-11-17T15:17:28+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-130583",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-130583",
   "summary": "Rootways Authorize.net CIM Pro extension for Magento 2 before 4.1.5 contains an unauthenticated server-side request forgery vulnerability in the Apple Pay merchant validation controller. Attackers can supply file://, gopher://, or dict:// U…",
   "date": "2026-11-17T14:17:44.847000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": [
    "macos"
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
   "title": "Siemens RUGGEDCOM APE1808",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-07",
   "summary": "View CSAF Summary Fortinet has published information on a Double Free vulnerability in FortiOS. This advisory lists the related Siemens Industrial products. Siemens recommends to update Fortigate NGFW to V7.6.9 or later following the secure…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "réseau"
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
   "title": "Siemens SIMATIC WinCC",
   "link": "https://www.cisa.gov/news-events/ics-advisories/icsa-26-321-09",
   "summary": "View CSAF Summary Graphics Designer of SIMATIC WinCC before V8.2 contains an implicit active content execution vulnerability upon opening files, which could allow an attacker to cause arbitrary code execution on the device. Siemens is prepa…",
   "date": "2026-11-17T12:00:00+00:00",
   "cvss": null,
   "sev": null,
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
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Mitel MiCollab (17 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1547/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Mitel MiCollab. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la confidential…",
   "date": "2026-11-17T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans GLPI (17 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1548/",
   "summary": "Une vulnérabilité a été découverte dans GLPI. Elle permet à un attaquant de provoquer une atteinte à l'intégrité des données.",
   "date": "2026-11-17T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans Axis OS (17 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1549/",
   "summary": "Une vulnérabilité a été découverte dans Axis OS. Elle permet à un attaquant de provoquer une exécution de code arbitraire à distance.",
   "date": "2026-11-17T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
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
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "CISA Adds Two Known Exploited Vulnerabilities to Catalog",
   "link": "https://www.cisa.gov/news-events/alerts/2026/11/13/cisa-adds-two-known-exploited-vulnerabilities-catalog",
   "summary": "CISA has added two new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog , based on evidence of active exploitation. CVE-2026-114713 UnrealIRCd Improper Neutralization of Delimiters Vulnerability CVE-2026-123039 Check Poi…",
   "date": "2026-11-13T12:00:00+00:00",
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
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-118383",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-118383",
   "summary": "A use-after-free in the replication component of MongoDB Server can occur when a newly elected replica set primary completes catch-up. The condition can be caused by requests that do not require authentication, and may result in the server…",
   "date": "2026-11-10T21:18:58.980000+00:00",
   "cvss": 10.0,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-120779",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-120779",
   "summary": "Improper control of generation of code ('code injection') in Visual Studio Code allows an unauthorized attacker to execute code over a network.",
   "date": "2026-11-10T19:20:27.040000+00:00",
   "cvss": 9.6,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-120002",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-120002",
   "summary": "Incorrect authorization in Microsoft Office SharePoint allows an authorized attacker to elevate privileges over a network.",
   "date": "2026-11-10T19:20:26.080000+00:00",
   "cvss": 9.9,
   "sev": "crit",
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-118148",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-118148",
   "summary": "Incorrect authorization in Active Directory Domain Services allows an authorized attacker to elevate privileges over a network.",
   "date": "2026-11-10T19:19:35.093000+00:00",
   "cvss": 8.8,
   "sev": "high",
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-111286",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-111286",
   "summary": "Use after free in Microsoft Office allows an unauthorized attacker to execute code over a network.",
   "date": "2026-11-10T19:18:25.443000+00:00",
   "cvss": 8.8,
   "sev": "high",
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-109491",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-109491",
   "summary": "Use after free in Microsoft Office Word allows an unauthorized attacker to execute code over a network.",
   "date": "2026-11-10T19:18:17.767000+00:00",
   "cvss": 8.8,
   "sev": "high",
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-56712",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-56712",
   "summary": "Replicate Cog through 0.23.1 contains a server-side request forgery vulnerability that allows attackers to cause the Cog process to make server-side HTTP requests by submitting prediction inputs with attacker-controlled URLs that are not va…",
   "date": "2026-11-09T22:18:52.290000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-115338",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-115338",
   "summary": "Insufficient protection of communications in Progress WS_FTP Server versions prior to 2025.0.5 could allow a network attacker to intercept sensitive information or modify requests when unencrypted connections are used.",
   "date": "2026-11-09T17:17:11.240000+00:00",
   "cvss": 9.8,
   "sev": "crit",
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
