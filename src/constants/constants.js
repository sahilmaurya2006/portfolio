import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
  vega,
  tesla,
  shopify,
  meta,
  starbucks,
  speedvitals,
  nestjs,
  reactNative,
  prisma,
  trpc,
  postgresql,
  initialLetterLogo,
} from "../assets";

const initialLetterIcon = initialLetterLogo;
const remainingLetters = "ahil Maurya";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "pentesting",
    icon: web,
  },
  {
    title: "Full stack developer",
    icon: mobile,
  },
  {
    title: "Cybersecurity",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  // {
  //   name: "JWT",
  //   icon: jwt,
  // },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  { name: "React Native", icon: reactNative },
  { name: "Prisma", icon: prisma },
  { name: "tRPC", icon: trpc },
];

const projects = [
  {
    name: "Digital Forensics File Analyzer",
    description:
      "This tool helps automate core digital forensics tasks such as scanning folders, organizing file information, and exporting structured reports that can be used during investigations or audits.",
    features: [
      "📁 Recursively scan folders and gather file metadata",
      "🔍 Calculate MD5 & SHA-256 hashes for integrity and duplicate detection",
      "🖼️ Extract EXIF metadata from common image formats",
      "📄 Export results as CSV, JSON, or PDF reports",
    ],
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Metadata",
        color: "green-text-gradient",
      },
      {
        name: "digitalforensics",
        color: "pink-text-gradient",
      },
      {
        name: "hashing",
        color: "orange-text-gradient",
      },
      {
        name: "automation",
        color: "purple-text-gradient",
      },
    ],
    image: vega,
    source_code_link: "https://github.com/sahilmaurya2006/digital-forensics-file-analyzer",
    live_link: "https://github.com/sahilmaurya2006/digital-forensics-file-analyzer",
  },
  {
    name: "CafeGPT AI Café Ordering Assistant",
    description:
      "An AI chatbot that takes café orders using natural language. It understands requests, suggests items, and processes orders automatically. ☕🤖",
    features: [
      "1️⃣ Natural Language Ordering Customers can order using simple chat messages.",
      "2️⃣ Smart Menu Recognition  AI detects and validates menu items automatically.",
      "3️⃣ Dynamic Cart Management  Add, modify, or remove items during conversation.",
      "4️⃣ Session Tracking – Maintains conversation context and user cart state.",
      "5️⃣ Automated Order Processing – Orders are structured and stored in the database. ☕🤖",
    ],
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "orange-text-gradient",
      },
      {
        name: "chatbot ",
        color: "blue-text-gradient",
      },
      {
        name: "uiux",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sahilmaurya2006/ai-cafe-ordering",
    live_link: "https://github.com/sahilmaurya2006/ai-cafe-ordering",
  },
  {
    name: "website security scanner",
    description:
      "A sleek web that scans websites for security misconfigurations and instantly highlights risk levels with a clean, modern dashboard.",
    features: [
      "Fast website security scanning",
      "Clear risk score & grade",
      "Modern, easy-to-read dashboard",
    ],
    tags: [
      {
        name: "Security APIs",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Axios",
        color: "pink-text-gradient",
      },
      {
        name: "React.js",
        color: "orange-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
    ],
    image: inkSync,
    source_code_link: "https://github.com/sahilmaurya2006/website-security-scanner",
    live_link: "https://website-security-scanner-sbnd.vercel.app/",
  },
  {
    name: "Network Intrusion Detection System",
    description:
      "A Python-based system that monitors live network traffic, analyzes packets in real time, and detects suspicious or malicious activity using Scapy",
    features: [
      "Real-Time Network Traffic Monitoring",
      "Rule-Based Alert System",
      "Lightweight & Extensible Architecture",
      "Deep Packet Inspection",
      "Intrusion & Attack Detection.",
      "Dark mode support.",
    ],
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scapy",
        color: "green-text-gradient",
      },
      {
        name: "Linux",
        color: "pink-text-gradient",
      },
      {
        name: "TCP",
        color: "orange-text-gradient",
      },
      {
        name: "CLI",
        color: "blue-text-gradient",
      },
    ],
    image: socialSphere,
    source_code_link: "https://github.com/sahilmaurya2006/Network-Intrusion-Detection-System-using-Scapy",
    live_link: "https://github.com/sahilmaurya2006/Network-Intrusion-Detection-System-using-Scapy",
  },
];

const experiences = [
  {
    title: "Bug Bounty Researcher",
    company_name: "Indrajala Movie Makers LLP",
    icon: speedvitals,
    iconBg: "#1d1836",
    date: "Mar 2026",
    tags: ["Bug Bounty", "RCE", "CVE", "Web Security", "Misconfiguration"],
    links: [
      {
        label: "View Report",
        url: "/reports/indrajala.pdf",
      },
    ],
    points: [
      "Identified publicly exposed pgAdmin instance due to misconfigured routing and TLS certificate misbinding.",
      "Discovered missing rate limiting on authentication endpoint enabling large-scale brute-force attacks.",
      "Chained vulnerabilities with CVE-2026-1707 to demonstrate potential remote code execution (RCE).",
      "Showed risk of full database compromise including user data, transactions, and internal systems.",
      "Delivered a structured vulnerability report with attack chain, impact analysis, and remediation guidance.",
    ],
  },

  {
    title: "Web Application Security Researcher",
    company_name: "Responsible Disclosure — Panchsheel Public School",
    icon: speedvitals,
    iconBg: "#100d25",
    date: "Mar 2026",
    tags: ["OWASP", "PTES", "RDP", "Attack Chain", "Web Security"],
    links: [
      {
        label: "View Report",
        url: "/reports/panchsheel.pdf",
      },
    ],
    points: [
      "Performed full-scope security assessment of ERP and web infrastructure using OWASP Testing Guide v4 and PTES.",
      "Identified 7 vulnerabilities including exposed RDP (3389), directory listing, legacy ASP.NET disclosure, and insecure HTTPS configuration.",
      "Detected supply chain risk via external script inclusion and insecure client-side dependencies.",
      "Mapped a realistic multi-step attack chain leading to potential full server compromise.",
      "Produced a professional security report with CVSS scoring, technical evidence, and prioritized remediation roadmap.",
    ],
  },

  {
    title: "Digital Forensics Developer",
    company_name: "Digital Forensics File Analyzer — Personal Project",
    icon: speedvitals,
    iconBg: "#1d1836",
    date: "Feb 2026",
    tags: ["Python", "Forensics", "Automation", "Security Tools"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/sahilmaurya2006/digital-forensics-file-analyzer",
      },
    ],
    points: [
      "Built a Python-based forensic toolkit for automated file analysis and investigation workflows.",
      "Implemented hashing (MD5, SHA-256) for integrity verification and duplicate detection.",
      "Developed modules for USB activity tracking, browser history analysis, and suspicious file detection.",
      "Automated structured forensic report generation in CSV, JSON, and PDF formats.",
    ],
  },

  {
    title: "Cybersecurity Intern",
    company_name: "CyberZero × Cybersecurity Council of India",
    icon: speedvitals,
    iconBg: "#100d25",
    date: "Oct 2025 - Nov 2025",
    tags: ["Pentesting", "Threat Intelligence", "Incident Response"],
    points: [
      "Worked on network security, web security, and penetration testing in practical lab environments.",
      "Performed vulnerability analysis, threat intelligence, and incident response simulations.",
      "Explored malware analysis techniques and digital forensics investigation workflows.",
    ],
  },

  {
    title: "Top 3% Global Learner",
    company_name: "TryHackMe",
    icon: speedvitals,
    iconBg: "#1d1836",
    date: "2025 - Present",
    tags: ["CTF", "Web Exploitation", "Privilege Escalation", "OSINT"],
    links: [
      {
        label: "Profile",
        url: "https://tryhackme.com/p/cyberZero",
      },
    ],
    points: [
      "Ranked in the top 3% globally among TryHackMe users.",
      "Completed hands-on labs in web exploitation, privilege escalation, networking, and OSINT.",
      "Practiced real-world attack and defense techniques in isolated lab environments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sahil demonstrated exceptional dedication during the CyberZero internship. His grasp of digital forensics, threat analysis, and ethical hacking is well beyond his experience level.",
    name: "Anmol Kumar",
    designation: "President",
    company: "Cyber Shakti Foundation",
    image: "/1718264839341.jpg",
  },
  {
    testimonial:
      "Sahil showed great commitment throughout the CyberZero internship program. His technical foundation in cybersecurity and incident response was impressive for a 2nd year student.",
    name: "Dr. Lalit Gupta",
    designation: "President",
    company: "Cybersecurity Council of India",
    image: "https://cybersecindiaexpo.com/images/DrLalitGupta.jpg",
  },
  {
    testimonial:
      "Sahil is a curious and persistent learner. His understanding of security concepts and practical application in projects reflects a strong cybersecurity mindset.",
    name: "Dr. Arvind Prasad",
    designation: "Assistant Professor, Cybersecurity & AI",
    company: "GLA University",
    image: "/1737814787990.jpg",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  initialLetterIcon,
  remainingLetters,
};
