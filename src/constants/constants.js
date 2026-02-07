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
    name: "Nadire Chocolatier",
    description:
      "Nadire Chocolatier is an elegant, premium-style landing website crafted for a luxury chocolate brand. The website focuses on visual storytelling, smooth animations, and high-end aesthetics to showcase handcrafted chocolates and create a refined brand presence online.",
    features: [
      "🏠 Hero Landing Section with immersive visuals",
      "📖 About Us section highlighting brand story",
      "🍬 Menu / Collection Showcase",
      "📅 Bookings Section for customer engagement",
      "📱 Fully responsive design for all devices",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "javascript ",
        color: "blue-text-gradient",
      },
      {
        name: "uiux",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://tourmaline-sundae-a390ce.netlify.app/",
    live_link: "https://tourmaline-sundae-a390ce.netlify.app/",
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
    title: "Frontend Developer Intern",
    company_name: "SpeedVitals",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "Feb 2025 - April 2025",
    points: [
      "Architected and developed the Real User Monitoring (RUM) web application from scratch using React, Vite, and Tailwind CSS.",
      "Integrated Apache Charts to visualise complex performance datasets, providing actionable insights for business clients.",
      "Collaborated with design and backend teams to integrate new features and enhance user experience.",
      "Tech Stack - React, Tailwind, Vite, Apache Charts.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SpeedVitals",
    icon: speedvitals,
    iconBg: "#383E56",
    date: "April 2025 - Present",
    points: [
      "Spearheaded the migration of the core platform from Sails.js to Next.js, reducing page load times and improving Core Web Vitals scores.",
      "Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG), resulting in a measurable boost in SEO rankings and faster Time to First Byte (TTFB).",
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
