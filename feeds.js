/* Généré automatiquement par scripts/build_feeds.py — NE PAS éditer à la main */
window.ARSENAL_FEEDS = {
 "updated": "2026-11-21T19:23:11+00:00",
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
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-125294",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-125294",
   "summary": "The Nexter Blocks Pro plugin for WordPress is vulnerable to Privilege Escalation in all versions up to, and including, 5.0.10 via the `tpgb_ajax_register_user()` function. This is due to a byte-level denylist on the `tpgb_acf_key[]` and `tp…",
   "date": "2026-11-21T19:16:31.403000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-133993",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-133993",
   "summary": "A security flaw has been discovered in D-Link DIR-600L 2.17b02. This affects the function FUN_0040efb0 of the file gena.cgi of the component GENA Subscription Handler. Performing a manipulation of the argument service results in stack-based…",
   "date": "2026-11-21T18:16:54.277000+00:00",
   "cvss": 10.0,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-134292",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-134292",
   "summary": "SurrealDB 1.0.0 before 4.0.0 contains a capability check bypass in its embedded JavaScript scripting engine, where the surrealdb.functions bridge calls the internal fnc::synchronous() and fnc::asynchronous() dispatchers without enforcing fu…",
   "date": "2026-11-21T17:16:48.897000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "A Single Malicious Webpage Let Researchers Hijack Meta Muse and Access Private Chats",
   "link": "https://thehackernews.com/2026/11/a-single-malicious-webpage-let.html",
   "summary": "A malicious webpage could extract a Meta Muse user's private conversations and stored memories from the assistant without triggering any approval prompt, researchers have shown. The same attack could be extended to reach the credentials Mus…",
   "date": "2026-11-21T11:53:07+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "GnuPG Warns Critical GPGME Flaw Could Expose App Data via Malicious OpenPGP Keys",
   "link": "https://thehackernews.com/2026/11/gnupg-warns-critical-gpgme-flaw-could.html",
   "summary": "A malicious OpenPGP key with an unusually long user ID can trigger a critical memory bug in GPGME, the standard library that programs use to work with GnuPG. The GnuPG project warned yesterday that the flaw could be used to steal data from…",
   "date": "2026-11-21T11:05:53+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Attackers' AI Agents Found a Zero-Day in Medical-Imaging Software and Gained Root Access",
   "link": "https://thehackernews.com/2026/11/attackers-ai-agents-found-zero-day-in.html",
   "summary": "Suspected China-linked hackers used autonomous AI agents to find a previously unknown flaw in MONAI Label, an open-source medical imaging server, and gain root access to a university server, Amazon Threat Intelligence said this week. The fl…",
   "date": "2026-11-21T11:03:17+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Signal Blocks AI Agents From Reading Private Chats via Screenshots on Android and iOS",
   "link": "https://thehackernews.com/2026/11/signal-blocks-ai-agents-from-reading.html",
   "summary": "Signal has announced that it will restrict screenshots by default to stop artificial intelligence (AI) agents from reading private chats on Android and iOS devices, but conceded that the protection is \"incomplete.\" The feature applies to ag…",
   "date": "2026-11-21T08:49:20+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "android",
    "ios"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Hackers Exploit Critical VMware, Cisco, and Apache Flaws as Espionage Attacks Emerge",
   "link": "https://thehackernews.com/2026/11/hackers-exploit-critical-vmware-cisco.html",
   "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) on Friday added four flaws impacting Apache Roller, Cisco Expressway, SAP NetWeaver, and Broadcom VMware vCenter to its Known Exploited Vulnerabilities (KEV), citing evidence…",
   "date": "2026-11-21T08:49:13+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "linux",
    "réseau",
    "vmware"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-120539",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-120539",
   "summary": "The Restrictions for BuddyPress plugin for WordPress is vulnerable to Remote Code Execution in all versions up to, and including, 1.5.4 This is due to the plugin splicing the attacker-controlled request URI into a PHP expression inside a do…",
   "date": "2026-11-21T06:16:33.227000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-133680",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-133680",
   "summary": "A vulnerability was found in D-Link DCS-935L 1.10.01. This affects the function loginRouter of the file web/cgi-bin/localrecording/setconf.cgi of the component Local Recording CGI. Performing a manipulation of the argument account/password…",
   "date": "2026-11-20T20:17:35.750000+00:00",
   "cvss": 9.9,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "WhatsApp Patches 3 Security Flaws, Including Android Bug Suspected of Use in Scams",
   "link": "https://thehackernews.com/2026/11/whatsapp-patches-3-security-flaws.html",
   "summary": "Meta-owned WhatsApp has addressed security vulnerabilities, including one impacting its Android app that it suspects may have been exploited in connection with scam messages. The vulnerability, tracked as CVE-2026-23871 (CVSS score: 3.5), h…",
   "date": "2026-11-20T17:57:20+00:00",
   "cvss": 3.5,
   "sev": "low",
   "platforms": [
    "android"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Bazuka Android Malware Uses Fake Screen Overlays to Hide Credential Theft and Device Control",
   "link": "https://thehackernews.com/2026/11/bazuka-android-malware-uses-fake-screen.html",
   "summary": "Cybersecurity researchers have disclosed details of a previously unknown Android malware framework called Bazuka that offers large language model (LLM) integration for victim management and control at scale. Dutch mobile security company Th…",
   "date": "2026-11-20T16:58:16+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "android"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Linux KVM Flaw CVE-2026-99312 Lets Guest VMs Access Host Memory on AMD Hosts",
   "link": "https://thehackernews.com/2026/11/new-linux-kvm-flaw-cve-2026-99312-lets.html",
   "summary": "A flaw in KVM, the hypervisor built into the Linux kernel, let researchers read about 127 GB of a cloud server's memory from inside a virtual machine of their own on DigitalOcean. On a shared server, that memory can include other customers'…",
   "date": "2026-11-20T12:20:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "linux",
    "vmware"
   ]
  },
  {
   "source": "CISA · Advisories",
   "kind": "cve",
   "title": "CISA Adds Four Known Exploited Vulnerabilities to Catalog",
   "link": "https://www.cisa.gov/news-events/alerts/2026/11/20/cisa-adds-four-known-exploited-vulnerabilities-catalog",
   "summary": "CISA has added four new vulnerabilities to its Known Exploited Vulnerabilities (KEV) Catalog , based on evidence of active exploitation. CVE-2025-42884 SAP NetWeaver Improper Neutralization of Special Elements in Data Query Logic Vulnerabil…",
   "date": "2026-11-20T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "The Path to AI Autonomy in the SOC",
   "link": "https://thehackernews.com/2026/11/the-path-to-ai-autonomy-in-soc.html",
   "summary": "Security leaders are about to hand AI agents a lot more authority. In a recent a16z survey of CISOs at organizations with more than 1,000 employees, 36% said they are comfortable today letting AI agents act autonomously on low-risk security…",
   "date": "2026-11-20T12:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "SonicWall Warns Gen 6 Firewalls Won't Get Security Patches, Even for Critical Flaws",
   "link": "https://thehackernews.com/2026/11/sonicwall-warns-gen-6-firewalls-wont.html",
   "summary": "SonicWall has urged all customers still running Generation 6 firewalls to retire and replace them immediately and stop exposing the devices on the internet edge, citing security risks fueled by AI-assisted attacks. \"Attackers now use automa…",
   "date": "2026-11-20T10:38:22+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Hackers Exploit Critical Cisco Expressway Flaw, Breach Four Devices and Reach Internal Network",
   "link": "https://thehackernews.com/2026/11/hackers-exploit-critical-cisco.html",
   "summary": "Threat actors have been observed exploiting a recently disclosed critical security flaw in Cisco Expressway to breach a Russian organization shortly after the public release of a proof-of-concept (PoC) exploit. The activity involves the exp…",
   "date": "2026-11-20T10:32:50+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "China-Linked Hackers Exploit Critical VMware vCenter Zero-Day to Gain Admin Access and Steal Data",
   "link": "https://thehackernews.com/2026/11/china-linked-hackers-exploit-critical.html",
   "summary": "The suspected China-nexus cyber espionage group known as Armory Castle (formerly UNC5221) has been attributed to the zero-day exploitation of a critical security flaw in VMware vCenter Server in early September 2026. The vulnerability, trac…",
   "date": "2026-11-20T09:38:15+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "vmware"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-133500",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-133500",
   "summary": "A vulnerability was identified in Gladys Assistant up to 4.71.0. This affects an unknown function of the file gateway.downloadBackup.js of the component Backup Restore Endpoint. The manipulation of the argument file_url leads to os command…",
   "date": "2026-11-20T09:20:07.047000+00:00",
   "cvss": 9.1,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "ROMULUS ClickFix Attacks Deliver RAT That Can Spy on Users and Control PCs",
   "link": "https://thehackernews.com/2026/11/romulus-clickfix-attacks-deliver-rat.html",
   "summary": "Threat actors have been observed using the ROMULUS ClickFix malware delivery platform to deliver a previously undocumented remote access trojan (RAT) that shares similarities with CNCMachineRMS. \"ROMULUS likely operates as a delivery servic…",
   "date": "2026-11-20T07:11:39+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
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
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Moodle (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1581/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Moodle. Elles permettent à un attaquant de provoquer une atteinte à la confidentialité des données et un contournement de la politique de sécurité.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Citrix (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1582/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Citrix. Elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance et un déni de service à distance.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Tenable Security Center (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1583/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Tenable Security Center. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une injection SQL (SQLi) et un contournement de la pol…",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans les produits Palo Alto Networks (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1584/",
   "summary": "Une vulnérabilité a été découverte dans les produits Palo Alto Networks. Elle permet à un attaquant de provoquer une exécution de code arbitraire à distance.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans Metabase (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1585/",
   "summary": "Une vulnérabilité a été découverte dans Metabase. Elle permet à un attaquant de provoquer une exécution de code arbitraire à distance.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans KeyCloak (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1586/",
   "summary": "Une vulnérabilité a été découverte dans KeyCloak. Elle permet à un attaquant de provoquer un contournement de la politique de sécurité.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Apache Tomcat (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1587/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Apache Tomcat. Certaines d'entre elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et une atteinte à l'intégrité de…",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Mattermost (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1588/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Mattermost. Certaines d'entre elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et un contournement de…",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Moxa (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1589/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Moxa. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la confident…",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Siemens Industrial Edge (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1590/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Siemens Industrial Edge. Elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans GitLab (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1591/",
   "summary": "Une vulnérabilité a été découverte dans GitLab. Elle permet à un attaquant de provoquer une exécution de code arbitraire à distance.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans le noyau Linux de Red Hat (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1592/",
   "summary": "De multiples vulnérabilités ont été découvertes dans le noyau Linux de Red Hat. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une élévation de privilèges et un déni de service à…",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans le noyau Linux de SUSE (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1593/",
   "summary": "De multiples vulnérabilités ont été découvertes dans le noyau Linux de SUSE. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire, une atteinte à la confidentialité des données et une atteinte à l'…",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans le noyau Linux de Debian (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1594/",
   "summary": "De multiples vulnérabilités ont été découvertes dans le noyau Linux de Debian. Elles permettent à un attaquant de provoquer une élévation de privilèges, une atteinte à la confidentialité des données et un déni de service.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans le noyau Linux de Debian LTS (20 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1595/",
   "summary": "De multiples vulnérabilités ont été découvertes dans le noyau Linux de Debian LTS. Elles permettent à un attaquant de provoquer une élévation de privilèges, une atteinte à la confidentialité des données et un déni de service.",
   "date": "2026-11-20T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "linux"
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
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-132142",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-132142",
   "summary": "A flaw has been found in DrayTek Vigor2960 up to 1.5.1.6. This affects the function dataflowstatus of the file /cgi-bin/mainfunction.cgi of the component CGI Process. This manipulation of the argument option causes stack-based buffer overfl…",
   "date": "2026-11-18T22:17:20.160000+00:00",
   "cvss": 9.1,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-130786",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-130786",
   "summary": "Incus before 7.6.0 contains a configuration injection vulnerability that allows users who can launch instances from controlled images to inject LXC directives by embedding line breaks in OCI config.json values or oci.entrypoint and oci.cwd…",
   "date": "2026-11-18T19:17:55.157000+00:00",
   "cvss": 9.9,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-130778",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-130778",
   "summary": "Incus before 7.6.0 contains an authentication bypass vulnerability that allows remote attackers to authenticate as any trusted certificate by appending its public certificate to their presented TLS client chain. Attackers can append the ser…",
   "date": "2026-11-18T19:17:53.607000+00:00",
   "cvss": 10.0,
   "sev": "crit",
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
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-115501",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-115501",
   "summary": "IBM i 7.3 7.4, 7.5, and 7.6 is vulnerable to a stack buffer overflow, caused by improper bounds checking in the QFileSvr.400 file system. By sending a command in the QFileSvr.400 file system, a local authenticated attacker could cause undef…",
   "date": "2026-11-13T22:17:21.593000+00:00",
   "cvss": 7.8,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-128127",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-128127",
   "summary": "AIOHTTP is an asynchronous HTTP client/server framework for asyncio and Python. Prior to 3.14.4, BodyPartReader.read_chunk() processing a multipart part with Content-Transfer-Encoding set to base64 keeps reading until the chunk length is a…",
   "date": "2026-11-13T21:17:44.460000+00:00",
   "cvss": 8.7,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-128126",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-128126",
   "summary": "AIOHTTP is an asynchronous HTTP client/server framework for asyncio and Python. Prior to 3.14.4, Request.post() does not limit the number of fields in a URL-encoded form body, and inserting many repeated keys into MultiDict takes quadratic…",
   "date": "2026-11-13T21:17:44.310000+00:00",
   "cvss": 8.7,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-128124",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-128124",
   "summary": "AIOHTTP is an asynchronous HTTP client/server framework for asyncio and Python. Prior to 3.14.4, Application.add_domain() converts every asterisk wildcard in a domain mask into a greedy regular-expression fragment, so a mask containing two…",
   "date": "2026-11-13T21:17:44.003000+00:00",
   "cvss": 8.2,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-128337",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-128337",
   "summary": "ExcelJS through 4.4.0 contains a prototype pollution vulnerability in mergeConditionalFormattings that allows attackers to modify Object.prototype by supplying an x14:cfRule id of __proto__. Attackers can craft an xlsx file that, when loade…",
   "date": "2026-11-13T10:18:13.920000+00:00",
   "cvss": 8.6,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-126492",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-126492",
   "summary": "OpenEMR before 8.5.0 contains a second-order sql injection vulnerability that allows low-privileged authenticated users to store malicious SQL via library/ajax/addlistitem.php. Attackers can persist a SQL fragment in the recent_patient_colu…",
   "date": "2026-11-13T10:17:59.763000+00:00",
   "cvss": 8.8,
   "sev": "high",
   "platforms": [
    "web"
   ]
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
