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
    title: "Penetration Tester",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Cybersecurity Analyst",
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
    title: "Security Researcher",
    company_name: "Independent Research & Responsible Disclosure",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "2026 - Present",
    points: [
      "Identified security vulnerabilities in real-world web applications and reported them through responsible disclosure.",
      "Performed web application security assessments using OWASP Testing Guide and PTES methodology.",
      "Created detailed vulnerability reports with risk analysis and remediation strategies.",
      "Maintained ethical standards by avoiding exploitation and ensuring safe disclosure practices.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "CyberZero × Cybersecurity Council of India",
    icon: speedvitals,
    iconBg: "#E6DEDD",
    date: "Oct 2025 - Nov 2025",
    points: [
      "Completed a 45-day intensive cybersecurity internship covering Web Security, Network Security, and Penetration Testing.",
      "Worked on real-world scenarios involving Threat Intelligence and Incident Response workflows.",
      "Performed Malware Analysis, Digital Forensics, and Cyber Defense exercises.",
      "Mentored by industry experts including Anmol Kumar and Dr. Lalit Gupta.",
    ],
  },
  {
    title: "CTF Player",
    company_name: "AISS 2025 — DSCI (NASSCOM Initiative)",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "Dec 2025",
    points: [
      "Participated in a national-level cybersecurity hackathon at AISS 2025 organized by DSCI.",
      "Solved challenges in web exploitation, cryptography, and reverse engineering under time constraints.",
      "Collaborated in a competitive team environment to analyze vulnerabilities and attack vectors.",
      "Improved practical penetration testing and problem-solving skills.",
    ],
  },
  {
    title: "Digital Forensics Developer",
    company_name: "Digital Forensics File Analyzer",
    icon: speedvitals,
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Developed a Python-based digital forensics toolkit for metadata extraction and suspicious file detection.",
      "Implemented USB tracking, Windows artifact analysis, and EXIF-based GPS mapping.",
      "Built tools for keylogger detection and browser history analysis.",
      "Automated structured forensic report generation for investigations.",
    ],
  },
  {
    title: "Top 3% Global Learner",
    company_name: "TryHackMe",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "2025 - Present",
    points: [
      "Ranked in the top 3% globally on TryHackMe platform.",
      "Completed labs covering Web Exploitation, Privilege Escalation, OSINT, and Networking.",
      "Practiced real-world attack and defense techniques in simulated environments.",
      "Consistently solving advanced challenges in Linux, Cryptography, and Security Analysis.",
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
