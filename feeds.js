/* Généré automatiquement par scripts/build_feeds.py — NE PAS éditer à la main */
window.ARSENAL_FEEDS = {
 "updated": "2026-11-04T19:50:00+00:00",
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
   "ok": false,
   "count": 0,
   "error": "HTTP Error 403: Forbidden"
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
   "title": "Debian and Ubuntu APT Flaw Lets MitM Attackers Swap Verified Packages and Run Code as Root",
   "link": "https://thehackernews.com/2026/11/debian-and-ubuntu-apt-flaw-lets-mitm.html",
   "summary": "A flaw in APT, the package manager for Debian and Ubuntu, allows an attacker who can modify package downloads to swap a checked package for their own. The attacker's code then runs as root, according to advisories that Debian, Ubuntu, and A…",
   "date": "2026-11-04T17:00:46+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "SonicWall Won't Patch EoL GMS Flaws That Could Expose Files, Alter Database Records",
   "link": "https://thehackernews.com/2026/11/sonicwall-wont-patch-eol-gms-flaws-that.html",
   "summary": "SonicWall has warned of two vulnerabilities impacting end-of-life Global Management System (GMS) systems that it said will not be patched. Details of the security flaws, which affect SonicWall GMS 9.5.2 and earlier versions, are below - CVE…",
   "date": "2026-11-04T17:00:38+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Researchers Uncover Prompt Adware Hidden in OpenAI Codex Jailbreak Toolkit",
   "link": "https://thehackernews.com/2026/11/researchers-uncover-prompt-adware.html",
   "summary": "Cybersecurity researchers have disclosed details of an OpenAI Codex jailbreak bundle that's designed to modify an artificial intelligence (AI) agent's trusted instructions to insert advertisements for a third-party AI gateway. The phenomeno…",
   "date": "2026-11-04T16:06:43+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "APT29-Linked Hackers Hijack Web Analytics Script to Deliver iOS and Android Exploits",
   "link": "https://thehackernews.com/2026/11/apt29-linked-hackers-hijack-web.html",
   "summary": "The Russia-linked threat actor known as APT29 is said to be behind a large-scale watering hole campaign targeting iOS and Android users through compromised websites, fake domains, and a supply chain attack involving a Ukrainian web analytic…",
   "date": "2026-11-04T14:27:52+00:00",
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
   "title": "Critical Rails Flaw Lets Attackers Write Server Files via Crafted ImageMagick Uploads",
   "link": "https://thehackernews.com/2026/11/critical-rails-flaw-lets-attackers.html",
   "summary": "A critical flaw in Ruby on Rails could allow an unauthenticated attacker to write arbitrary files on an app's server by uploading a crafted file if the app processes uploads using ImageMagick. The Rails project disclosed the flaw in an advi…",
   "date": "2026-11-04T12:07:04+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Xen Hypervisor Flaws Let One Malicious VM Read and Write Any Other VM's Memory",
   "link": "https://thehackernews.com/2026/11/xen-hypervisor-flaws-let-one-malicious.html",
   "summary": "Two flaws in the Xen hypervisor allow a malicious guest virtual machine (VM) to read and write the memory of other VMs on the same host, including dom0. Dom0 is the VM that, by default, has full permissions and manages the others. Patches a…",
   "date": "2026-11-04T11:46:27+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "vmware"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Radio With No Radar: Why Agent Runtime Security Fails Without the Layers Beneath It",
   "link": "https://thehackernews.com/2026/11/radio-with-no-radar-why-agent-runtime.html",
   "summary": "Nearly every agent security pitch now ends on the same promise: the product stops the bad action in real time. The promise holds for one kind of agent, the kind whose traffic passes through a gateway the enterprise owns. Most agents never t…",
   "date": "2026-11-04T11:34:20+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "China-Aligned Hackers Hijack Sogou Input Method DNS Requests to Deploy DarkVigil Backdoor",
   "link": "https://thehackernews.com/2026/11/china-aligned-hackers-hijack-sogou.html",
   "summary": "A China-aligned threat actor known as SlippyNunchucks has been attributed to a Domain Name System (DNS) hijacking operation abusing insecure HTTP communications in Windows versions of Sogou Input Method as part of a surveillance campaign de…",
   "date": "2026-11-04T11:24:31+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Russian Police Arrest 3 Suspected VasyGrek Hackers, Dismantle Criminal Infrastructure",
   "link": "https://thehackernews.com/2026/11/russian-police-arrest-3-suspected.html",
   "summary": "Russian authorities have arrested three suspected members of a threat group known as VasyGrek and dismantled its criminal infrastructure. Also known as Fluffy Wolf, the threat actor has a history of targeting Russian and international compa…",
   "date": "2026-11-04T08:17:11+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Google Issues Patches for Critical Android Flaw That Could Allow RCE Without User Interaction",
   "link": "https://thehackernews.com/2026/11/google-patches-critical-android-flaw.html",
   "summary": "A critical Android flaw could allow an attacker to run code on a phone without any user action remotely, Google said in its November security bulletin. The flaw, CVE-2026-58868, affects Android 14 through 17. Phones get the fix with securit…",
   "date": "2026-11-04T07:46:15+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "android"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "CISA Confirms Hackers Exploiting WordPress Core Flaw During Software Upgrades",
   "link": "https://thehackernews.com/2026/11/cisa-confirms-hackers-exploiting.html",
   "summary": "The U.S. Cybersecurity and Infrastructure Security Agency (CISA) has added a security flaw in WordPress Core to the Known Exploited Vulnerabilities (KEV) catalog, citing evidence of active exploitation. The high-severity vulnerability, trac…",
   "date": "2026-11-04T05:43:11+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Apache Zookeeper (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1448/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Apache Zookeeper. Elles permettent à un attaquant de provoquer un déni de service à distance et un contournement de la politique de sécurité.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "linux"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Citrix (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1449/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Citrix. Elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance et une élévation de privilèges.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Google Chrome (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1450/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Google Chrome. Elles permettent à un attaquant de provoquer un problème de sécurité non spécifié par l'éditeur.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits HPE Aruba Networking (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1451/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits HPE Aruba Networking. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une élévation de privilèges et un déni de se…",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Ruby on Rails (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1452/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Ruby on Rails. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la confidentiali…",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans NetApp StorageGRID (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1453/",
   "summary": "De multiples vulnérabilités ont été découvertes dans NetApp StorageGRID. Elles permettent à un attaquant de provoquer une atteinte à la confidentialité des données et une atteinte à l'intégrité des données.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans MongoDB (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1454/",
   "summary": "Une vulnérabilité a été découverte dans MongoDB. Elle permet à un attaquant de provoquer une atteinte à la confidentialité des données et une atteinte à l'intégrité des données.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans Mozilla Firefox (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1455/",
   "summary": "Une vulnérabilité a été découverte dans Mozilla Firefox. Elle permet à un attaquant de provoquer un problème de sécurité non spécifié par l'éditeur.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "web"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits SonicWall (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1456/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits SonicWall. Elles permettent à un attaquant de provoquer une atteinte à la confidentialité des données et une injection SQL (SQLi).",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Vulnérabilité dans Laravel (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1457/",
   "summary": "Une vulnérabilité a été découverte dans Laravel. Elle permet à un attaquant de provoquer une exécution de code arbitraire à distance.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Mattermost (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1458/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Mattermost. Elles permettent à un attaquant de provoquer un problème de sécurité non spécifié par l'éditeur.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans SolarWinds Dameware (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1459/",
   "summary": "De multiples vulnérabilités ont été découvertes dans SolarWinds Dameware. Elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance et un contournement de la politique de sécurité.",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Symfony (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1460/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Symfony. Certaines d'entre elles permettent à un attaquant de provoquer un déni de service à distance, une atteinte à la confidentialité des données et un contournement de la…",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans les produits Elastic (04 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1461/",
   "summary": "De multiples vulnérabilités ont été découvertes dans les produits Elastic. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, un déni de service à distance et une atteinte à la confid…",
   "date": "2026-11-04T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "mSecure Warns Users to Change Passwords, Reset 2FA and Passkeys After Suspicious Activity",
   "link": "https://thehackernews.com/2026/11/msecure-warns-users-to-change-passwords.html",
   "summary": "Customers of the mSecure password manager are being urged to act now to protect the confidential information they store in it, possibly by changing passwords, resetting two-factor authentication (2FA), and removing passkeys. The warning cam…",
   "date": "2026-11-03T18:46:38+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Chainstack Reports Production Systems Breach Exposing Customer Data and Password Hashes",
   "link": "https://thehackernews.com/2026/11/chainstack-reports-production-systems.html",
   "summary": "Blockchain infrastructure provider Chainstack on Tuesday disclosed that it was targeted in a cyber attack that allowed an unauthorized party to gain access to some parts of its infrastructure. The incident is assessed to be part of a large-…",
   "date": "2026-11-03T18:16:19+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Binance Reveals How Fake Job Interviews and AI Tool Abuse Led to $6.43 Billion Theft",
   "link": "https://thehackernews.com/2026/11/binance-reveals-how-fake-job-interviews.html",
   "summary": "Binance on Tuesday said the record-setting theft of $6.43 billion in assets from the world's largest cryptocurrency exchange was the culmination of a \"sophisticated, multi-stage campaign\" that involved the use of a tampered Homebrew install…",
   "date": "2026-11-03T16:55:58+00:00",
   "cvss": null,
   "sev": null,
   "platforms": [
    "windows"
   ]
  },
  {
   "source": "The Hacker News",
   "kind": "news",
   "title": "Barracuda Flaws Could Be Chained to Bypass Authorization and Gain Root Access",
   "link": "https://thehackernews.com/2026/11/barracuda-flaws-could-be-chained-to.html",
   "summary": "Barracuda has disclosed details of two vulnerabilities affecting its products that, if chained together, could allow an attacker to bypass authorization controls and gain root access to a susceptible device. The vulnerabilities, a pre-authe…",
   "date": "2026-11-03T15:59:19+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "CERT-FR · Avis",
   "kind": "avis",
   "title": "Multiples vulnérabilités dans Google Android (03 novembre 2026)",
   "link": "https://www.cert.cyber.gouv.fr/avis/CERTFR-2026-AVI-1443/",
   "summary": "De multiples vulnérabilités ont été découvertes dans Google Android. Certaines d'entre elles permettent à un attaquant de provoquer une exécution de code arbitraire à distance, une élévation de privilèges et une atteinte à la confidentialit…",
   "date": "2026-11-03T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "android"
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
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-103409",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-103409",
   "summary": "A Missing authentication for critical function vulnerability in Juniper Networks Session Smart Router allows an unauthenticated network-based attacker to obtain administrative privileges by passing crafted URL parameters to an insecure endp…",
   "date": "2026-10-28T17:17:27.840000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-103406",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-103406",
   "summary": "An Improper Neutralization of Special Elements used in an OS Command vulnerability in the AutomatedProvisioner in Juniper Networks Session Smart Conductor allows a remote attacker to execute arbitrary commands as root via a specially crafte…",
   "date": "2026-10-28T17:17:25.830000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-118337",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-118337",
   "summary": "Use after free in Forms in Google Chrome prior to 156.0.8078.73 allowed a remote attacker to execute arbitrary code inside the sandbox via a crafted HTML page. (Chromium security severity: High)",
   "date": "2026-10-27T23:17:02.067000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-118333",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-118333",
   "summary": "Buffer overflow in Video in Google Chrome prior to 156.0.8078.73 allowed a remote attacker to execute arbitrary code inside the sandbox via a crafted HTML page. (Chromium security severity: High)",
   "date": "2026-10-27T23:17:01.580000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": [
    "web"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-112352",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-112352",
   "summary": "Sunhillo SureLine before 9.1.5 contains an authentication bypass vulnerability that allows an unauthenticated remote attacker to impersonate any user with an active web session by forging a session cookie containing only a cleartext usernam…",
   "date": "2026-10-27T20:17:12.997000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-113897",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-113897",
   "summary": "This issue was addressed by removing the vulnerable code. This issue is fixed in Safari 27.2, iOS 27.2 and iPadOS 27.2, macOS Golden Gate 27.2, visionOS 27.2. A remote attacker may be able to break out of Web Content sandbox.",
   "date": "2026-10-26T21:18:06.440000+00:00",
   "cvss": 10.0,
   "sev": "crit",
   "platforms": [
    "macos",
    "ios"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-112690",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-112690",
   "summary": "This issue was addressed with improved input validation. This issue is fixed in iOS 26.7.2 and iPadOS 26.7.2, iOS 27.2 and iPadOS 27.2, macOS Golden Gate 27.2, macOS Sequoia 15.8.2, macOS Tahoe 26.7.2, visionOS 27.2. A remote attacker may b…",
   "date": "2026-10-26T21:18:03.507000+00:00",
   "cvss": 10.0,
   "sev": "crit",
   "platforms": [
    "macos",
    "ios"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-112430",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-112430",
   "summary": "An authentication issue was addressed with improved validation of user attributes. This issue is fixed in macOS Golden Gate 27.2, macOS Sequoia 15.8.2, macOS Tahoe 26.7.2. An app may be able to gain root privileges.",
   "date": "2026-10-26T21:17:32.953000+00:00",
   "cvss": 8.4,
   "sev": "high",
   "platforms": [
    "macos"
   ]
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-115915",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-115915",
   "summary": "vLLM is an inference and serving engine for large language models. Prior to 0.32.0, ImageMediaIO passes attacker-controlled image bytes to Pillow through Image.open(BytesIO(data)) without restricting decoder selection, and the MIME label do…",
   "date": "2026-10-26T18:17:38.883000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-116370",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-116370",
   "summary": "A security flaw has been discovered in 2K Games Sid Meier's Civilization VI 1.0.12.68. The affected element is the function loadstring of the component Lua sandbox. Performing a manipulation results in type confusion. The attack may be init…",
   "date": "2026-10-26T17:17:25.930000+00:00",
   "cvss": 9.6,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-115912",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-115912",
   "summary": "vLLM is an inference and serving engine for large language models. Prior to 0.32.0, an authenticated caller can place forged shared-memory address and monotonic_id values in public multimodal features.kwargs_data. In scale-out deployments w…",
   "date": "2026-10-26T17:17:18.910000+00:00",
   "cvss": 8.8,
   "sev": "high",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-112346",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-112346",
   "summary": "OpenHands Software Agent SDK before 1.52.0 contains an unauthenticated remote code execution vulnerability where the DockerWorkspace and Apptainer workspace launchers bind the sandbox agent server to all network interfaces (0.0.0.0) with an…",
   "date": "2026-10-26T16:17:14.110000+00:00",
   "cvss": 9.8,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-116214",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-116214",
   "summary": "MacCMS v10 before 2026.1000.4054 contains an authentication bypass vulnerability that allows unauthenticated attackers to reset any member's password because check_msg() never compares msg_to. Attackers can request a recovery code to their…",
   "date": "2026-10-26T14:16:34.173000+00:00",
   "cvss": 9.3,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-116111",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-116111",
   "summary": "A vulnerability was determined in 2K Games Civilization V 1.0.3.144. Impacted is the function loadstring of the component Lua Sandbox. Executing a manipulation can lead to type confusion. The attack may be performed from remote. The exploit…",
   "date": "2026-10-26T03:17:11.603000+00:00",
   "cvss": 9.6,
   "sev": "crit",
   "platforms": []
  },
  {
   "source": "NVD · CVE notés CVSS",
   "kind": "cve",
   "title": "CVE-2026-116099",
   "link": "https://nvd.nist.gov/vuln/detail/CVE-2026-116099",
   "summary": "A flaw has been found in Fusion Creators Studio SCP Containment Breach Multiplayer up to 1.295. This issue affects the function BlitzBanks of the component Skynet++ Virtual Machine. Executing a manipulation can lead to out-of-bounds write.…",
   "date": "2026-10-26T00:17:14.613000+00:00",
   "cvss": 8.8,
   "sev": "high",
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
   "source": "Exploit-DB",
   "kind": "exploit",
   "title": "[webapps] Food-Ordering 1.0 - LFI",
   "link": "https://www.exploit-db.com/exploits/52689",
   "summary": "Food-Ordering 1.0 - LFI",
   "date": "2026-10-01T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
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
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-033 (03 août 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-033/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-08-03T00:00:00+00:00",
   "cvss": null,
   "sev": null,
   "platforms": []
  },
  {
   "source": "CERT-FR · Actualités",
   "kind": "actu",
   "title": "Bulletin d'actualité CERTFR-2026-ACT-032 (27 juillet 2026)",
   "link": "https://www.cert.cyber.gouv.fr/actualite/CERTFR-2026-ACT-032/",
   "summary": "Ce bulletin d'actualité du CERT-FR revient sur les vulnérabilités significatives de la semaine passée pour souligner leurs criticités. Il ne remplace pas l'analyse de l'ensemble des avis et alertes publiés par le CERT-FR dans le cadre d'une…",
   "date": "2026-07-27T00:00:00+00:00",
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
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "[MàJ] Vulnérabilité dans Cisco Catalyst SD-WAN (25 février 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-002/",
   "summary": "Une vulnérabilité a été découverte dans Cisco Catalyst SD-WAN. Elle permet à un attaquant de provoquer un contournement de la politique de sécurité. Cisco indique que la vulnérabilité CVE-2026-20127 est activement exploitée.",
   "date": "2026-02-25T00:00:00+00:00",
   "cvss": null,
   "sev": "crit",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "[MàJ] Multiples vulnérabilités dans Ivanti Endpoint Manager Mobile (30 janvier 2026)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2026-ALE-001/",
   "summary": "[Mise à jour du 09 février 2026] Le 6 février 2026, Ivanti a mis à disposition des scripts RPM de détection d'indicateurs de compromission, à utiliser en fonction de la version d'EPMM installée. L'éditeur a également mis son guide d'analyse…",
   "date": "2026-01-30T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": [
    "réseau"
   ]
  },
  {
   "source": "CERT-FR · Alertes",
   "kind": "alerte",
   "title": "[MàJ] Vulnérabilité dans React Server Components (05 décembre 2025)",
   "link": "https://www.cert.cyber.gouv.fr/alerte/CERTFR-2025-ALE-014/",
   "summary": "**[Mise à jour du 11 décembre 2025]** Le CERT-FR a connaissance de multiples exploitations de la vulnérabilité CVE-2025-55182. Les serveurs avec une version vulnérable exposés après la publication des preuves de concept publiques du 5 décem…",
   "date": "2025-12-05T00:00:00+00:00",
   "cvss": null,
   "sev": "high",
   "platforms": []
  }
 ]
};
