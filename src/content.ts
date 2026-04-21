const SITE_ORIGIN_WWW = "https://www.khushalagarwal.dev" as const;
const SITE_ORIGIN_BARE = "https://khushalagarwal.dev" as const;

export const GITHUB_USERNAME = "Khushal-ag" as const;
export const GITHUB_PROFILE_URL =
  `https://github.com/${GITHUB_USERNAME}` as const;

export const site = {
  name: "Khushal Agarwal | Full-Stack Developer",
  description:
    "Full-stack developer building web and mobile products across AI, Web3, and SaaS — React/Next.js, Node.js/Go, smart contracts, and LLM integrations. Open to full-time roles and freelance work: India (onsite) and remote worldwide.",
  url: SITE_ORIGIN_WWW,
  urlBare: SITE_ORIGIN_BARE,

  author: {
    name: "Khushal Agarwal",
    title: "Full-Stack Developer",
    subtitle: "TypeScript · Go · AI · Web3",
    location: "Pune, Maharashtra",
    phone: "+91 9557429766",
    url: SITE_ORIGIN_WWW,
    avatar: "/images/profile/github-profile.png",
    mail: "starkhush5@gmail.com",
    linkedin: "https://www.linkedin.com/in/khushal-agarwal",
  },

  links: {
    github: { title: "GitHub", href: GITHUB_PROFILE_URL },
    linkedin: {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/khushal-agarwal",
    },
    twitter: { title: "Twitter", href: "https://twitter.com/starkhush5" },
  },

  resumeUrl:
    "https://drive.google.com/file/d/1nW1Xe0eYhQ0QTlKrlM6XRfnFxD7GChOZ/view?usp=sharing",

  github: {
    username: GITHUB_USERNAME,
    href: GITHUB_PROFILE_URL,
    label: "View my GitHub",
    blurb: "More projects, open-source contributions, and code on GitHub.",
  },

  twitterHandle: "starkhush5",

  keywords: [
    "Khushal Agarwal",
    "Kushal Agarwal",
    "Khusal Agarwal",
    "Khushal Agrawal",
    "Khushaal Agarwal",
    "Full-Stack Developer",
    "portfolio",
    "Full-stack developer",
    "TypeScript",
    "Golang",
    "React",
    "Next.js",
    "AI",
    "Web3",
    "Node.js",
  ],
};

export const seo = {
  metaDescription:
    "Full-stack developer (TypeScript, Go, AI, Web3) in Pune, India. Open to full-time & freelance — onsite in India, remote worldwide. Portfolio, projects & resume.",

  homeMetaDescription:
    "Khushal Agarwal — full-stack developer building AI, Web3 & SaaS with React, Next.js, Node.js & Go. Pune. Open to full-time & freelance; India onsite or remote worldwide.",

  profileMetaDescription:
    "Khushal Agarwal — full-stack developer & software engineer in Pune, India. Experience, tech stack, education. Name variants: Kushal Agarwal, Khushal Agrawal.",
} as const;

export const personAlternateNames = [
  "Kushal Agarwal",
  "Khusal Agarwal",
  "Khushal Agrawal",
  "Khushaal Agarwal",
] as const;

export const hero = {
  greeting: "Hi, I'm",
  title: "Khushal Agarwal",
  subtitle: "Full-Stack Developer",
  tagline: "TypeScript · Go · AI · Web3",
  avatar: "/images/profile/github-profile.png",
};

export const summary = {
  paragraph:
    "Full-stack developer with 2+ years building web and mobile products across AI, Web3, and SaaS. Comfortable across the stack — from React/Next.js frontends and Node.js/Go backends to smart contracts and LLM integrations — shipping production systems for startups. Open to full-time roles and freelance engagements: happy to work onsite in India or remotely with teams anywhere.",
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "Golang", "Rust", "Dart"],
  backendCloud: [
    "Node.js",
    "Express.js",
    "Hono",
    "Bun",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "Docker",
    "AWS (S3, SQS)",
    "CI/CD",
    "Firebase",
  ],
  frontendMobile: [
    "Next.js",
    "React.js",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "ShadCN UI",
    "Vite",
  ],
  databasesDevOps: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
    "Prisma",
    "Drizzle ORM",
    "Git",
  ],
  other: [
    "LangGraph",
    "Vercel AI SDK",
    "OpenAI API",
    "HuggingFace",
    "Solidity",
    "EVM",
    "Solana (Anchor)",
    "Privy",
    "Ethers.js",
    "IPFS",
    "Stripe",
  ],
};

export const education = {
  degree: "B.Tech, Computer Science",
  school: "GLA University",
  cpi: "8.3 CPI",
  years: "2020 – 2024",
};

export const workExperience = [
  {
    id: 1,
    company: "Kreedalabs",
    role: "Full Stack Developer",
    location: "Pune",
    period: "Aug 2024 – Present",
    bullets: [
      "Worked on Syncora — an AI data marketplace — building and maintaining frontend (React/Next.js), backend APIs (Node.js/TypeScript), and HuggingFace integrations for model fine-tuning workflows.",
      "Built a Rust service (Actix-web) to stream blockchain event data to the frontend without hammering RPC nodes.",
      "Wrote and deployed smart contracts (Solidity, UUPS proxy on Base L2) and a Solana Anchor program for on-chain contribution records and token rewards.",
      "Integrated Stripe subscriptions and automated credit recharge flows, reducing manual billing work significantly.",
      "Built React Native screens and cross-platform mobile features alongside web work.",
    ],
  },
  {
    id: 2,
    company: "MixR",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Mar 2024 – Aug 2024",
    bullets: [
      "Built backend services for a social commerce platform using Golang, PostgreSQL, Redis, and GraphQL.",
      "Built an AI shopping agent (Vercel AI SDK + OpenAI) that can autonomously browse and purchase products on behalf of users.",
      "Built MixR Pay — a crypto checkout system using Privy embedded wallets so the AI agent could handle payments end-to-end on-chain.",
      "Rewrote backend APIs with agent-friendly response structures so the AI agent could reliably consume and act on them.",
      "Integrated Shopify product catalog via the Rye API wrapper; added Redis caching and PostgreSQL trigram search for faster product queries.",
      "Set up Docker Compose deployments on VPS with basic CI/CD; automated order and notification flows via webhooks and cron jobs.",
    ],
  },
  {
    id: 3,
    company: "Hench Solutions",
    role: "Full Stack Developer (Freelance)",
    location: "Remote",
    period: "2025 – Present",
    bullets: [
      "Built BillBook — a multi-tenant billing and invoicing web app (Next.js + Express/TypeScript + PostgreSQL) with invoice management, GST reports, inventory tracking, and PDF exports.",
      "Built an IAM system (authentication, roles, policies) across multiple service modules.",
      "Shipped Mera Coach, a React Native/Expo mobile app, with EAS build setup for Android and iOS.",
    ],
  },
  {
    id: 4,
    company: "Vyloo",
    role: "Full Stack Developer (Freelance)",
    location: "Remote",
    period: "2025 – Present",
    bullets: [
      "Built a full pharmacy operations suite of five applications: customer-facing web app, merchant portal, pharmacy ERP, admin dashboard, and a shared serverless backend API.",
      "Backend (Node.js/Hono) uses MongoDB, Redis, AWS S3, AWS SQS, Firebase Admin for push notifications, and Puppeteer/Chromium for PDF generation (receipts, reports).",
      "ERP and customer web include Google Maps integration for delivery zone management and live location-aware order tracking.",
      "Merchant portal handles real-time order acceptance, delivery workflow management, and live status updates.",
      "Admin dashboard covers merchant onboarding, order oversight, analytics, and billing operations.",
    ],
  },
];

export const achievements = [
  "Research paper on OpenMAIC published in JCST 2026 (Tsinghua University Press / Springer)",
  "Winner — TON NFT Challenge; participated in HackCBS, GLATHON, and Solana Hacker House",
  "Solved 600+ DSA problems on LeetCode and GeeksforGeeks",
  "Google Cloud Digital Leader certified",
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Syncora – AI Data Marketplace",
    des: "Syncora (strova.xyz): AI data marketplace — React/Next.js frontend, Node.js/TypeScript APIs, HuggingFace for model fine-tuning, Rust (Actix-web) streaming for blockchain events, Solidity on Base L2, Solana Anchor for rewards, Stripe subscriptions, and React Native. Proof-of-data rails with on-chain provenance via Coinbase. Note: public live environment is temporarily unavailable; project remains active work.",
    img: "/images/projects/strova.png",
    iconLists: [
      "/icons/projects/vite.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/nodejs.svg",
      "/icons/projects/mongodb-icon.svg",
      "/icons/projects/aws.svg",
      "/icons/projects/coinbase.svg",
    ],
    siteLink: "https://strova.xyz/",
    githubLink: "https://strova.xyz/",
  },
  {
    id: 2,
    title: "MixR – Community-First Marketplace",
    des: "Social commerce backend (Go, PostgreSQL, Redis, GraphQL) with an AI shopping agent (Vercel AI SDK + OpenAI), MixR Pay (Privy), agent-friendly APIs, Shopify via Rye API, Redis caching, trigram search, and Docker Compose on VPS with CI/CD.",
    img: "/images/projects/mixr.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/supabase-icon.png",
      "/icons/projects/ts.svg",
      "/icons/projects/golang.svg",
    ],
    siteLink: "https://mixr.gg/",
    githubLink: "https://github.com/MixR-gg",
  },
  {
    id: 3,
    title: "BillBook – Billing & Invoicing",
    des: "Multi-tenant billing and invoicing web app (Next.js + Express/TypeScript + PostgreSQL): invoices, credit notes, parties, inventory, GST-ready reports, audit logs, role-based IAM, and PDF exports — built for Hench Solutions.",
    img: "/images/projects/billbook.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/nodejs.svg",
    ],
    siteLink: "https://billbook.khushalagarwal.dev",
    githubLink: site.github.href,
  },
  {
    id: 4,
    title: "Capsule Cloud – Pharmacy ERP",
    des: "Pharmacy ERP in the Vyloo suite: stock, catalog, ordering, and operations with Next.js, ShadCN UI, and a Hono/MongoDB backend with AWS and Firebase — part of a five-app pharmacy platform.",
    img: "/images/projects/capsule-cloud.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/nestjs.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/mongodb-icon.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/aws.svg",
    ],
    siteLink: "https://capsule.vyloo.in/signin",
    githubLink: "https://www.vyloo.in/",
  },
  {
    id: 5,
    title: "Vyloo – Pharmacy Operations Suite",
    des: "Five applications: customer web, merchant portal, pharmacy ERP, admin dashboard, and serverless API. Node.js/Hono, MongoDB, Redis, S3, SQS, Firebase push, Puppeteer PDFs, Google Maps for zones and live order tracking.",
    img: "/images/projects/vyloo.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/nestjs.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/mongodb-icon.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/aws.svg",
    ],
    siteLink: "https://www.vyloo.in/",
    githubLink: "https://www.vyloo.in/",
  },
  {
    id: 6,
    title: "Eventloop – Event Management Web App",
    des: "Full-featured event management platform for creating and organizing events. Includes user authentication, event creation and listing, ticket purchase flow with Stripe, and attendee management. Built with Next.js, Tailwind, and TypeScript.",
    img: "/images/projects/eventloop.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/c.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/stripe-icon.svg",
    ],
    siteLink: "https://eventloop.khushalagarwal.tech/",
    githubLink: `${site.github.href}/eventloop`,
  },
  {
    id: 7,
    title: "Infinitunes – Music Streaming Platform",
    des: "Web-based music streaming platform with playlist creation, library management, and discovery features. Users can browse, search, and stream music with a modern UI. Built with Next.js, Supabase for auth and database, and deployed on Vercel.",
    img: "/images/projects/infinitunes.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/supabase-icon.png",
      "/icons/projects/ts.svg",
      "/icons/projects/vercel-light.png",
    ],
    siteLink: "https://infinitunes.khushalagarwal.tech/",
    githubLink: `${site.github.href}/infinitunes`,
  },
  {
    id: 8,
    title: "Sealog – Hotel Management System",
    des: "Hotel management system for employees to manage cabins, rooms, bookings, and guest information. Includes availability calendars, reservation handling, and guest records. Built with React, Tailwind, Supabase, and React Query for data fetching.",
    img: "/images/projects/sealog.png",
    iconLists: [
      "/icons/projects/re.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/supabase-icon.png",
      "/icons/projects/js.svg",
      "/icons/projects/react-query.svg",
    ],
    siteLink: "https://sealog.khushalagarwal.tech",
    githubLink: `${site.github.href}/sealog`,
  },
  {
    id: 9,
    title: "Triphive – Hotel Review Website",
    des: "Hotel discovery and review platform where users find hotels, read and write reviews, and earn rewards for valuable feedback. Features Passport-based authentication, MongoDB for flexible data, and a Node.js backend. Deployed on Vercel.",
    img: "/images/projects/triphive.png",
    iconLists: [
      "/icons/projects/nodejs.svg",
      "/icons/projects/mongodb-icon.svg",
      "/icons/projects/js.svg",
      "/icons/projects/passport.svg",
      "/icons/projects/vercel-light.png",
    ],
    siteLink: "https://triphive.khushalagarwal.tech/",
    githubLink: `${site.github.href}/TripHive`,
  },
  {
    id: 10,
    title: "Next.js Starter Template",
    des: "Production-ready Next.js starter with TailwindCSS, TypeScript, Prettier, and ESLint pre-configured. Jumpstart new projects with sensible defaults and a clean structure. Deployed on Vercel.",
    img: "/images/projects/nextjs-template.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/nodejs.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/vercel-light.png",
    ],
    siteLink: "https://nextjs-template.khushalagarwal.tech/",
    githubLink: `${site.github.href}/nextjs-template`,
  },
];

export type PortfolioProject = (typeof projects)[number];

export const testimonials = [
  {
    quote:
      "Working with Khushal as our backend developer was a transformative experience. His technical expertise and meticulous approach ensured that our systems were both robust and scalable.",
    name: "Justin Martinez",
    title: "MixR.gg",
  },
  {
    quote:
      "Participating in a hackathon with Khushal as our team leader was an inspiring experience. His leadership and organizational skills were key to our team's success.",
    name: "Dev Busters",
    title: "HackCBS 6.0",
  },
  {
    quote:
      "Having Khushal on board as our full stack developer was a game-changer. His comprehensive understanding of both front-end and back-end technologies allowed us to create a seamless application.",
    name: "Hemant Rajput",
    title: "Infinitunes",
  },
  {
    quote:
      "Collaborating with Khushal on our backend infrastructure was a decision we're proud of. His in-depth knowledge of database management and API integrations played a crucial role.",
    name: "Yash Goyal",
    title: "MixR.gg",
  },
];

export const footer = {
  heading: "Let's build something together",
  subtext:
    "Open to full-time roles and freelance projects — India (onsite) or remote worldwide. Reach out anytime.",
  ctaText: "Get in touch",
  contactEmail: "starkhush5@gmail.com",
  copyright: "© {year} Khushal Agarwal",
};

export const socialMedia = [
  {
    id: 1,
    img: "/icons/social/git.svg",
    link: site.github.href,
    label: "GitHub",
  },
  {
    id: 2,
    img: "/icons/social/twit.svg",
    link: "https://x.com/starkhush5",
    label: "X",
  },
  {
    id: 3,
    img: "/icons/social/link.svg",
    link: "https://www.linkedin.com/in/khushal-agarwal/",
    label: "LinkedIn",
  },
  {
    id: 4,
    img: "/icons/social/insta.svg",
    link: "https://www.instagram.com/starkhush/",
    label: "Instagram",
  },
];
