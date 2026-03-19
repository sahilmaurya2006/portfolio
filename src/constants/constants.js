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
    title: "Cybersecurity Intern",
    company_name: "CyberZero × Cybersecurity Council of India",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "Oct 2025 - Nov 2025",
    points: [
      "Completed a 45-day intensive internship covering Network & Web Security, Ethical Hacking, and Penetration Testing.",
      "Gained hands-on experience in Cyber Threat Intelligence and Incident Response workflows.",
      "Worked on Malware Analysis, Digital Forensics, and Cyber Defense strategies.",
      "Mentored by Mr. Anmol Kumar (Founder, CyberZero) and Dr. Lalit Gupta (President, Cybersecurity Council of India).",
    ],
  },
  {
    title: "CTF Participant",
    company_name: "AISS 2025 — DSCI (NASSCOM Initiative)",
    icon: speedvitals,
    iconBg: "#E6DEDD",
    date: "Dec 2025",
    points: [
      "Participated in the Cybersecurity Hackathon (CTF) at the 20th Annual Information Security Summit organized by DSCI.",
      "Solved challenges covering vulnerability analysis, attack vectors, and ethical hacking under time pressure.",
      "Collaborated with teammate Saurabh Tiwari in a professional national-level security environment.",
      "Gained practical exposure to real-world cybersecurity scenarios and incident response strategies.",
    ],
  },
  {
    title: "Digital Forensics Developer (Personal Project)",
    company_name: "Digital Forensics File Analyzer",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Built a comprehensive Python-based digital forensics toolkit with modules for metadata extraction, keyword scanning, and suspicious file detection.",
      "Implemented USB audit trail tracking, Windows artifacts analysis, and GPS mapping from file metadata.",
      "Developed a keylogger detector and browser history tracker for forensic investigation support.",
      "Automated structured forensic report generation for investigative and audit use cases.",
    ],
  },
  {
    title: "Top 3% Global Learner",
    company_name: "TryHackMe",
    icon: speedvitals,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Ranked in the top 3% of TryHackMe users globally out of hundreds of thousands of learners.",
      "Completed hands-on rooms covering Penetration Testing, Web Exploitation, Privilege Escalation, and OSINT.",
      "Practiced real-world attack and defense techniques in isolated lab environments.",
      "Consistently solving challenges in Networking, Linux, Cryptography, and Reverse Engineering.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
