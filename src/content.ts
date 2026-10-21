import type { TechKey } from "@/lib/tech";

const TWITTER_HANDLE = "starkhush5";

export const site = {
  name: "Khushal Agarwal | Full-Stack Developer",
  url: "https://www.khushalagarwal.dev",
  urlBare: "https://khushalagarwal.dev",
  /** Bump when page content changes; feeds sitemap lastmod and JSON-LD dateModified. */
  lastUpdated: "2026-10-21",

  author: {
    name: "Khushal Agarwal",
    title: "Full-Stack Developer",
    subtitle: "TypeScript · Go · AI · Web3",
    location: "Pune, Maharashtra",
    phone: "+91 9557429766",
    avatar: "/images/profile/github-profile.png",
    mail: "starkhush5@gmail.com",
  },

  links: {
    github: "https://github.com/Khushal-ag",
    linkedin: "https://www.linkedin.com/in/khushal-agarwal",
    twitter: `https://x.com/${TWITTER_HANDLE}`,
    instagram: "https://www.instagram.com/starkhush/",
  },

  resumeUrl:
    "https://drive.google.com/file/d/1nW1Xe0eYhQ0QTlKrlM6XRfnFxD7GChOZ/view?usp=sharing",

  twitterHandle: TWITTER_HANDLE,

  keywords: [
    "Khushal Agarwal",
    "Kushal Agarwal",
    "Khushal Agrawal",
    "Full-Stack Developer",
    "full-stack developer Pune",
    "developer portfolio",
    "TypeScript",
    "Golang",
    "React",
    "Next.js",
    "AI",
    "Web3",
    "Node.js",
    "React Native",
    ".NET",
  ],
} as const;

export const seo = {
  metaDescription:
    "Portfolio of Khushal Agarwal, a full-stack developer in Pune, India working with TypeScript, Go, AI and Web3. Open to full-time roles and freelance projects.",

  homeMetaDescription:
    "Full-stack developer in Pune, India building AI, Web3 and SaaS products with React, Next.js, Node.js and Go. Open to full-time and freelance work.",

  profileMetaDescription:
    "Khushal Agarwal, full-stack developer and software engineer in Pune, India. Work at Kreedalabs, MixR, Hench Solutions and Vyloo, plus tech stack and education.",
} as const;

export const personAlternateNames = [
  "Kushal Agarwal",
  "Khusal Agarwal",
  "Khushal Agrawal",
  "Khushaal Agarwal",
] as const;

export const hero = {
  status: "Open to full-time and freelance work",
  blurb:
    "I build AI, Web3 and SaaS products for web and mobile, with React, Node.js, Go and .NET.",
};

export const summary = {
  paragraphs: [
    "I'm a full-stack developer with 3+ years of experience shipping production software for startups across AI, Web3 and SaaS. I work end to end: React, Next.js and React Native on the front, Node.js, Go and .NET on the back, and smart contracts and LLM integrations wherever a product needs them.",
    "I work full-time at Kreedalabs and take on freelance projects in parallel. I'm open to full-time roles and freelance work, onsite in India or remote worldwide.",
  ],
  facts: [
    { label: "Based in", value: "Pune, India" },
    {
      label: "Right now",
      value: "Full-time at Kreedalabs, with freelance projects in parallel",
    },
    { label: "Focus", value: "AI, Web3 and SaaS products" },
    { label: "Open to", value: "Full-time roles and freelance projects" },
  ],
} as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "Golang", "Rust", "Dart", "C++"],
  },
  {
    label: "Backend & Cloud",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Hono",
      "ASP.NET Core",
      "Bun",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Microservices",
      "Serverless",
      "Docker",
      "AWS (S3, SQS, Lambda, Cognito)",
      "CI/CD (GitHub Actions)",
      "Firebase",
    ],
  },
  {
    label: "Frontend & Mobile",
    items: [
      "Next.js",
      "React.js",
      "React Native",
      "Expo",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "ShadCN UI",
      "Vite",
      "PWA",
    ],
  },
  {
    label: "Databases & DevOps",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "SQL Server",
      "Prisma",
      "Drizzle ORM",
      "Git",
    ],
  },
  {
    label: "AI, Web3 & Payments",
    items: [
      "LangGraph",
      "Vercel AI SDK",
      "OpenAI API",
      "HuggingFace",
      "Multimodal AI search",
      "Solidity",
      "EVM",
      "Solana (Anchor)",
      "Privy",
      "Ethers.js",
      "IPFS",
      "Stripe",
      "Razorpay",
      "PDF generation (Playwright, pdf-lib)",
    ],
  },
] as const;

/** Flat list of every skill, in group order. */
export const allSkills = skillGroups.flatMap((group) => group.items);

export const education = {
  degree: "B.Tech, Computer Science",
  school: "GLA University",
  cpi: "8.3 CPI",
  years: "2020 - 2024",
};

type WorkBullet = { lead: string; text: string };

export type WorkExperience = {
  id: number;
  company: string;
  role: string;
  type: "Full-time" | "Freelance";
  location: string;
  period: string;
  summary: string;
  bullets: readonly WorkBullet[];
  stack: readonly TechKey[];
};

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "Kreedalabs",
    role: "Full Stack Developer",
    type: "Full-time",
    location: "Pune",
    period: "Aug 2024 - Present",
    summary:
      "Product engineering across AI platforms, Web3 infrastructure and mobile apps.",
    bullets: [
      {
        lead: "AI image search",
        text: "Built a multimodal search and analytics platform for an enterprise fashion client, with a React frontend, an Express and PostgreSQL API, AI keyword and catalog matching, and S3 presigned delivery.",
      },
      {
        lead: "Collection builder",
        text: "Developed features for a generative-AI collection builder: multi-select surfaces, range-plan validation and per-build AI usage and cost tracking.",
      },
      {
        lead: "Syncora",
        text: "Worked across an AI data marketplace, including WebSocket job updates, dataset quality scoring, Stripe subscriptions with automated credit recharge, and HuggingFace fine-tuning workflows.",
      },
      {
        lead: "On-chain",
        text: "Wrote Solidity contracts (UUPS proxy on Base L2) and a Solana Anchor program for contribution records and token rewards, plus a Rust service that streams chain events without overloading RPC nodes.",
      },
      {
        lead: "Mobile",
        text: "Built React Native features, including wallet transactions and refunds, for a social creator app.",
      },
    ],
    stack: [
      "react",
      "nextjs",
      "typescript",
      "nodejs",
      "postgresql",
      "mongodb",
      "openai",
      "huggingface",
      "solidity",
      "solana",
      "rust",
      "stripe",
    ],
  },
  {
    id: 3,
    company: "Hench Solutions",
    role: "Full Stack Developer",
    type: "Freelance",
    location: "Remote",
    period: "2025 - Present",
    summary:
      "Designed and shipped client products across billing, insurance, coaching and retail.",
    bullets: [
      {
        lead: "BillBook",
        text: "Multi-tenant billing and invoicing with GST reports, inventory and PDF exports, on Next.js, Express and PostgreSQL.",
      },
      {
        lead: "IAM",
        text: "Authentication, roles and policies shared across multiple service modules.",
      },
      {
        lead: "IAMS",
        text: "An ASP.NET Core app for broker and insurer management, with KYC uploads, OTP and premium-reminder emails, and CI/CD to AWS ECR and EC2.",
      },
      {
        lead: "Mera Coach",
        text: "An Expo mobile app with EAS builds and a Next.js website, both on a .NET API.",
      },
      {
        lead: "Abvela",
        text: "A fashion storefront with Razorpay checkout, backed by an Express and PostgreSQL API.",
      },
      {
        lead: "Vimpact",
        text: "An offline-capable gate-pass PWA with camera capture, and a migration of its API from .NET to Node.js and SQL Server with S3 photo storage.",
      },
    ],
    stack: [
      "nextjs",
      "expo",
      "express",
      "postgresql",
      "dotnet",
      "razorpay",
      "aws",
      "typescript",
    ],
  },
  {
    id: 4,
    company: "Vyloo",
    role: "Full Stack Developer",
    type: "Freelance",
    location: "Remote",
    period: "2025 - Jun 2026",
    summary:
      "Built the full stack behind an online pharmacy and its operations tooling.",
    bullets: [
      {
        lead: "Suite",
        text: "Delivered five connected apps: customer web, merchant portal, pharmacy ERP, admin dashboard and a shared serverless API.",
      },
      {
        lead: "Backend",
        text: "Node.js with Hono and NestJS on MongoDB, Redis, AWS S3 and SQS, with Firebase push notifications and Puppeteer-generated PDF receipts and reports.",
      },
      {
        lead: "Maps",
        text: "Google Maps for delivery zones and live, location-aware order tracking.",
      },
      {
        lead: "Operations",
        text: "Real-time order acceptance and delivery workflows for merchants, and onboarding, analytics and billing for admins.",
      },
    ],
    stack: [
      "nextjs",
      "hono",
      "nestjs",
      "mongodb",
      "redis",
      "aws",
      "firebase",
      "puppeteer",
    ],
  },
  {
    id: 2,
    company: "MixR",
    role: "Full Stack Developer",
    type: "Freelance",
    location: "Remote",
    period: "Mar 2024 - Feb 2026",
    summary:
      "Full-stack work on a community-first shopping marketplace, from the Go backend to an AI shopping agent.",
    bullets: [
      {
        lead: "Backend",
        text: "Built the Go services on PostgreSQL, Redis and GraphQL that power search, catalog sync and order flows.",
      },
      {
        lead: "AI agent",
        text: "Created a shopping agent with the Vercel AI SDK and OpenAI that finds and buys products for users, and reshaped the APIs so it can read and act on them reliably.",
      },
      {
        lead: "Web and payments",
        text: "Built the Next.js client and AI chat service with Stripe checkout and Privy authentication, plus MixR Pay, a crypto checkout on Privy embedded wallets that lets the agent pay on-chain.",
      },
      {
        lead: "Catalog and search",
        text: "Synced the Shopify catalog through the Rye API and sped up queries with Redis caching and PostgreSQL trigram search.",
      },
      {
        lead: "Infrastructure",
        text: "Deployed with Docker Compose on a VPS, with CI/CD and webhook and cron-driven order and notification flows.",
      },
    ],
    stack: [
      "go",
      "postgresql",
      "redis",
      "graphql",
      "nextjs",
      "openai",
      "stripe",
      "docker",
    ],
  },
];

export const achievements = [
  "Research paper on OpenMAIC published in JCST 2026 (Tsinghua University Press / Springer)",
  "Winner of the TON NFT Challenge; active in hackathons including HackCBS, GLATHON and Solana Hacker House",
  "Solved 600+ DSA problems on LeetCode and GeeksforGeeks",
  "Google Cloud Digital Leader certified; completed the Google Cloud Facilitator Program",
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

export type PortfolioProject = {
  id: number;
  title: string;
  /** Short label such as "Online pharmacy", shown beside the title. */
  kind: string;
  /** One line for list rows. */
  summary: string;
  /** Full description for the preview and structured data. */
  des: string;
  img: string;
  tech: readonly TechKey[];
  siteLink?: string;
  githubLink?: string;
};

export const projects: PortfolioProject[] = [
  {
    id: 1,
    title: "Mera Coach",
    kind: "Coaching app and web",
    summary:
      "Client, lead and assessment management for health coaches, on Android and web.",
    des: "A platform for health coaches in India, with an Expo Android app and a Next.js website on a .NET API. Coaches manage clients, leads and due checkups, run an assessment wizard that produces a shareable BMI report and diet plan as a PDF, and sell packages. Visitors find coaches, send enquiries or reach them on WhatsApp. Razorpay powers premium plans.",
    img: "/images/projects/mera-coach.jpg",
    tech: ["expo", "react", "nextjs", "typescript", "dotnet", "razorpay"],
    siteLink: "https://www.mera-coach.com/",
  },
  {
    id: 2,
    title: "Abvela By Kiara",
    kind: "Fashion storefront",
    summary: "Online store for a Delhi fashion label, with Razorpay checkout.",
    des: "An online store for a Delhi label selling curated fabrics and ready-to-wear. The Next.js storefront covers the catalog, cart, Razorpay checkout and customer accounts with orders and addresses, backed by an Express and PostgreSQL API with admin tooling, invoice PDFs and S3 uploads.",
    img: "/images/projects/abvela.jpg",
    tech: [
      "nextjs",
      "typescript",
      "tailwind",
      "express",
      "postgresql",
      "drizzle",
      "razorpay",
      "aws",
    ],
    siteLink: "https://www.abvelabykiara.com/",
  },
  {
    id: 3,
    title: "Vyloo",
    kind: "Online pharmacy",
    summary: "An online pharmacy built as five connected apps.",
    des: "An online pharmacy built as five apps: customer web, merchant portal, pharmacy ERP, admin dashboard and a shared serverless API. Customers order medicines and upload prescriptions, and merchants accept and deliver orders live. The API runs on Node.js with Hono on MongoDB, Redis, AWS S3 and SQS, with Firebase push notifications and Puppeteer PDFs.",
    img: "/images/projects/vyloo.jpg",
    tech: [
      "nextjs",
      "hono",
      "mongodb",
      "redis",
      "aws",
      "firebase",
      "puppeteer",
      "typescript",
    ],
    siteLink: "https://www.vyloo.in/",
  },
  {
    id: 4,
    title: "BillBook",
    kind: "Billing SaaS",
    summary: "Multi-tenant GST billing, inventory and invoicing.",
    des: "Multi-tenant billing for Indian businesses. Teams draft and finalize GST invoices (finalized ones are immutable), keep append-only ledgers for parties, payments, receipts, credit notes and stock, and export GST and report CSVs. An Express, PostgreSQL and Drizzle API sits behind a Next.js app, with OTP login, JWT, audit logs and OpenAPI docs.",
    img: "/images/projects/billbook.jpg",
    tech: ["nextjs", "typescript", "express", "postgresql", "drizzle", "aws"],
    siteLink: "https://billbook.khushalagarwal.dev",
  },
  {
    id: 5,
    title: "Capsule Cloud",
    kind: "Pharmacy ERP",
    summary: "Batch and expiry tracking inventory ERP for pharmacies.",
    des: "An inventory ERP for pharmacies, built for Vyloo. It tracks medicines by batch and expiry, with stock levels and reorder alerts, a live dashboard, role-based access with permission gates, audit trails and light and dark themes.",
    img: "/images/projects/capsule-cloud.jpg",
    tech: ["nextjs", "typescript", "tailwind", "reactquery", "mongodb", "aws"],
    siteLink: "https://capsule.vyloo.in/signin",
  },
  {
    id: 6,
    title: "MixR",
    kind: "AI shopping marketplace",
    summary:
      "AI shopping agent and checkout for a community-first marketplace.",
    des: "A community-first marketplace with an AI agent that finds products across stores and checks out on MixR. I built the Go, PostgreSQL, Redis and GraphQL backend, MixR Pay on Privy wallets, agent-friendly APIs, Shopify sync through Rye, trigram search and Docker Compose deployments with CI/CD.",
    img: "/images/projects/mixr.jpg",
    tech: [
      "nextjs",
      "typescript",
      "go",
      "postgresql",
      "redis",
      "graphql",
      "openai",
      "privy",
      "stripe",
      "docker",
    ],
  },
  {
    id: 7,
    title: "GitControl",
    kind: "Git simulator",
    summary: "Interactive Git simulator with a live commit graph.",
    des: "A learning playground that runs real Git commands in a simulated terminal and updates the commit graph, working directory, staging area, stash and reflog live. It includes six guided lessons, a side-by-side merge conflict resolver and undo and redo. Next.js, TypeScript and Zustand, with the Git engine as a pure, unit-tested function.",
    img: "/images/projects/git-control.jpg",
    tech: ["nextjs", "react", "typescript", "tailwind", "git", "vitest"],
    siteLink: "https://git-control.khushalagarwal.dev/",
    githubLink: "https://github.com/Khushal-ag/git-control",
  },
  {
    id: 8,
    title: "Next.js Starter",
    kind: "Open-source template",
    summary: "Lean Next.js 16 starter with themes, SEO and security headers.",
    des: "A lean starter for Next.js 16 with React 19, Tailwind v4 and TypeScript. It ships Cache Components, the React Compiler, light, dark and system themes, SEO metadata with JSON-LD, security headers and a validate script covering lint, types, Prettier and build.",
    img: "/images/projects/nextjs-template.jpg",
    tech: ["nextjs", "react", "typescript", "tailwind", "vercel"],
    siteLink: "https://nextjs-template.khushalagarwal.dev/",
    githubLink: "https://github.com/Khushal-ag/nextjs-template",
  },
];

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
      "Collaborating with Khushal on our backend infrastructure was a decision we're proud of. His in-depth knowledge of database management and API integrations played a crucial role.",
    name: "Yash Goyal",
    title: "MixR.gg",
  },
];

export const footer = {
  heading: "Let's build something together",
  subtext:
    "Open to full-time roles and freelance projects, onsite in India or remote worldwide. Reach out anytime.",
  ctaText: "Send an email",
  copyright: "© {year} Khushal Agarwal",
};

export const githubCta = {
  label: "View my GitHub",
  blurb: "More projects, open-source contributions, and code on GitHub.",
};
