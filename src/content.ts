import type { TechKey } from "@/lib/tech";

const TWITTER_HANDLE = "starkhush5";

export const site = {
  name: "Khushal Agarwal | Full-Stack Developer",
  url: "https://www.khushalagarwal.dev",
  /** Bump when page content changes; feeds sitemap lastmod and JSON-LD dateModified. */
  lastUpdated: "2026-10-22",

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
    "Portfolio of Khushal Agarwal, a full-stack developer in Pune, India working with TypeScript, Go, AI and Web3. Open to full-time, contract and freelance work.",

  homeMetaDescription:
    "Full-stack developer in Pune, India building AI, Web3 and SaaS products with React, Next.js, Node.js and Go. Open to full-time, contract and freelance work.",

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
  status: "Open to full-time, contract and freelance work",
  blurb:
    "I build AI, Web3 and SaaS products for web and mobile, with React, Node.js, Go and .NET.",
};

export const summary = {
  paragraphs: [
    "I'm a full-stack developer with 3+ years of experience shipping production software for startups across AI, Web3 and SaaS. I work end to end: React, Next.js and React Native on the front, Node.js, Go and .NET on the back, and smart contracts and LLM integrations wherever a product needs them.",
    "I'm open to full-time roles, contracts and freelance projects, onsite in India or remote worldwide. If you have something interesting to build, I'd like to hear about it.",
  ],
  facts: [
    { label: "Based in", value: "Pune, India" },
    { label: "Right now", value: "Full-time at Kreedalabs" },
    { label: "Focus", value: "AI, Web3 and SaaS products" },
    {
      label: "Open to",
      value: "Full-time roles, contracts and freelance projects",
    },
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
  /** Omitted for freelance work, which has no fixed tenure. */
  period?: string;
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
      "Owning features end to end on AI, Web3 and mobile products, from API and data design to production releases.",
    bullets: [
      {
        lead: "AI image search",
        text: "Shipped a multimodal AI search and analytics platform for an enterprise fashion client, so teams can find catalog items from images and keywords. Built the React UI, the Express and PostgreSQL API, AI matching and secure S3 delivery.",
      },
      {
        lead: "Generative AI tooling",
        text: "Built features for a generative-AI collection builder, including multi-select workflows and range-plan validation, and added per-build AI usage and cost tracking so spend stays visible.",
      },
      {
        lead: "Syncora",
        text: "Delivered core parts of an AI data marketplace: real-time job updates over WebSockets, dataset quality scoring, Stripe subscriptions with automated credit recharge and HuggingFace fine-tuning workflows.",
      },
      {
        lead: "On-chain",
        text: "Designed and shipped smart contracts (upgradeable Solidity on Base and a Solana Anchor program) for contribution records and token rewards, plus a Rust service that streams chain events without overloading RPC nodes.",
      },
      {
        lead: "Mobile",
        text: "Built React Native wallet features, including transactions and refunds, for a social creator app.",
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
    id: 2,
    company: "MixR",
    role: "Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    period: "Mar 2024 - Aug 2024",
    summary:
      "Backend and AI engineer on a community-first shopping marketplace, shipping the Go services and an agent that finds and buys products for users.",
    bullets: [
      {
        lead: "Go backend",
        text: "Built the Go services on PostgreSQL, Redis and GraphQL behind search, catalog sync and order flows.",
      },
      {
        lead: "AI shopping agent",
        text: "Built an agent on the Vercel AI SDK and OpenAI that finds products across stores and completes the purchase, and reshaped the APIs so the agent can read and act on them reliably.",
      },
      {
        lead: "Payments",
        text: "Shipped checkout with Stripe and Privy authentication, plus MixR Pay, a crypto checkout on embedded wallets that lets the agent pay on-chain.",
      },
      {
        lead: "Fast search",
        text: "Kept browsing quick with Redis caching and PostgreSQL trigram search over a Shopify catalog synced through the Rye API.",
      },
      {
        lead: "Delivery",
        text: "Owned deployment: Docker Compose on a VPS with CI/CD, plus webhook and cron-driven order and notification flows.",
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
  {
    id: 3,
    company: "Hench Solutions",
    role: "Full Stack Developer",
    type: "Freelance",
    location: "Remote",
    summary:
      "Freelance engineer taking client products from idea to production across billing, insurance, coaching and retail: API design, web, mobile and deployment.",
    bullets: [
      {
        lead: "BillBook",
        text: "Built a multi-tenant billing and invoicing SaaS for Indian businesses, with GST reports, inventory tracking and PDF exports on Next.js, Express and PostgreSQL.",
      },
      {
        lead: "IAM and IAMS",
        text: "Created shared authentication, roles and policies used across service modules, and an ASP.NET Core broker and insurer app with KYC uploads, OTP and premium-reminder emails, deployed through CI/CD to AWS ECR and EC2.",
      },
      {
        lead: "Mera Coach",
        text: "Shipped an Expo mobile app (EAS builds) and a Next.js website for health coaches, both on one .NET API.",
      },
      {
        lead: "Abvela",
        text: "Launched a fashion storefront with Razorpay checkout on an Express and PostgreSQL API, so the label can sell online.",
      },
      {
        lead: "Vimpact",
        text: "Migrated the API of an offline-capable gate-pass PWA from .NET to Node.js and SQL Server, keeping camera capture working and moving photos to S3.",
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
    summary:
      "Built the full stack behind an online pharmacy, from customer ordering to merchant fulfilment and admin operations.",
    bullets: [
      {
        lead: "Five apps, one platform",
        text: "Delivered customer web, merchant portal, pharmacy ERP, admin dashboard and a shared serverless API as one connected system.",
      },
      {
        lead: "Live fulfilment",
        text: "Built real-time order acceptance and delivery for merchants, with Google Maps delivery zones and live, location-aware tracking for customers.",
      },
      {
        lead: "Backend",
        text: "Designed the Node.js API (Hono, NestJS) on MongoDB, Redis, AWS S3 and SQS, with Firebase push notifications and Puppeteer PDF receipts and reports.",
      },
      {
        lead: "Admin tooling",
        text: "Gave admins onboarding, analytics and billing tools to manage merchants.",
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
];

export const achievements = [
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
  /** URL segment for the project's case-study page. */
  slug: string;
  title: string;
  /** Short label such as "Online pharmacy", shown beside the title. */
  kind: string;
  /** Your part in the project, shown on its case-study page. */
  role: string;
  /** Key facts shown as a list on the case-study page. */
  highlights: readonly string[];
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
    slug: "mera-coach",
    kind: "Coaching app and web",
    role: "Full-stack developer, freelance for Hench Solutions",
    highlights: [
      "Expo Android app with EAS builds where coaches manage clients, leads and due checkups.",
      "Assessment wizard that produces a shareable BMI report and diet plan as a PDF.",
      "Next.js website where visitors find coaches, send enquiries or message them on WhatsApp.",
      "Razorpay-powered premium plans, all on one .NET API.",
    ],
    summary:
      "Run a coaching practice from your phone: clients, leads, assessments and plans.",
    des: "Coaches get one place for clients, leads and due checkups in an Expo Android app, plus an assessment wizard that produces a shareable BMI report and diet plan as a PDF. A Next.js website helps visitors find coaches, send enquiries or message them on WhatsApp, and Razorpay powers premium plans. I built the app and the website on its .NET API.",
    img: "/images/projects/mera-coach.jpg",
    tech: ["expo", "react", "nextjs", "typescript", "dotnet", "razorpay"],
    siteLink: "https://www.mera-coach.com/",
  },
  {
    id: 2,
    title: "Abvela By Kiara",
    slug: "abvela-by-kiara",
    kind: "Fashion storefront",
    role: "Full-stack developer, freelance for Hench Solutions",
    highlights: [
      "Next.js storefront with catalog, cart and Razorpay checkout.",
      "Customer accounts with order history and saved addresses.",
      "Express and PostgreSQL API with admin tooling, invoice PDFs and S3 uploads.",
    ],
    summary:
      "A fashion label's online store, from catalog to Razorpay checkout.",
    des: "A Delhi label selling curated fabrics and ready-to-wear needed a store of its own. I built the Next.js storefront (catalog, cart, Razorpay checkout, customer accounts with orders and addresses) and the Express and PostgreSQL API behind it, including admin tooling, invoice PDFs and S3 uploads.",
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
    slug: "vyloo",
    kind: "Online pharmacy",
    role: "Full-stack developer, freelance",
    highlights: [
      "Five connected apps: customer web, merchant portal, pharmacy ERP, admin dashboard and a shared serverless API.",
      "Real-time order acceptance and delivery for merchants, with Google Maps delivery zones and live order tracking.",
      "Node.js API (Hono, NestJS) on MongoDB, Redis, AWS S3 and SQS.",
      "Firebase push notifications and Puppeteer-generated PDF receipts and reports.",
    ],
    summary:
      "An online pharmacy: ordering, merchant fulfilment and admin, as five connected apps.",
    des: "Customers order medicines and upload prescriptions, merchants accept and deliver orders live, and admins run the network. I built all five apps (customer web, merchant portal, pharmacy ERP, admin dashboard and a shared serverless API) on Node.js with Hono, MongoDB, Redis and AWS S3 and SQS, with Firebase push notifications and Puppeteer PDFs.",
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
    slug: "billbook",
    kind: "Billing SaaS",
    role: "Full-stack developer, freelance for Hench Solutions",
    highlights: [
      "Finalized GST invoices are immutable, so the paper trail stays auditable.",
      "Append-only ledgers for parties, payments, receipts, credit notes and stock.",
      "GST and report CSV exports.",
      "OTP login, JWT, audit logs and OpenAPI docs on an Express, PostgreSQL and Drizzle API.",
    ],
    summary: "GST billing, inventory and ledgers for Indian businesses.",
    des: "Built for businesses that need an auditable paper trail. Teams draft and finalize GST invoices (finalized ones are immutable), track parties, payments, credit notes and stock in append-only ledgers, and export GST and report CSVs. I built the Express, PostgreSQL and Drizzle API and the Next.js app, with OTP login, JWT, audit logs and OpenAPI docs.",
    img: "/images/projects/billbook.jpg",
    tech: ["nextjs", "typescript", "express", "postgresql", "drizzle", "aws"],
    siteLink: "https://billbook.khushalagarwal.dev",
  },
  {
    id: 5,
    title: "Capsule Cloud",
    slug: "capsule-cloud",
    kind: "Pharmacy ERP",
    role: "Full-stack developer, freelance for Vyloo",
    highlights: [
      "Medicines tracked by batch and expiry.",
      "Stock levels with reorder alerts and a live dashboard.",
      "Role-based access with permission gates and audit trails.",
      "Light and dark themes.",
    ],
    summary: "Pharmacy inventory ERP with batch and expiry tracking.",
    des: "Built for Vyloo's pharmacies to know what is on the shelf and when it expires. It tracks medicines by batch and expiry, raises reorder alerts, shows a live dashboard and enforces role-based access with permission gates and audit trails, in light and dark themes.",
    img: "/images/projects/capsule-cloud-dashboard.jpg",
    tech: ["nextjs", "typescript", "tailwind", "reactquery", "mongodb", "aws"],
    siteLink: "https://capsule.vyloo.in/signin",
  },
  {
    id: 6,
    title: "MixR",
    slug: "mixr",
    kind: "AI shopping marketplace",
    role: "Full-stack developer, full-time (Mar 2024 - Aug 2024)",
    highlights: [
      "Go services on PostgreSQL, Redis and GraphQL behind search, catalog sync and order flows.",
      "Agent-friendly APIs so the AI shopping agent can read and act on them reliably.",
      "MixR Pay, a crypto checkout on Privy embedded wallets that lets the agent pay on-chain.",
      "Shopify catalog sync through the Rye API, with Redis caching and PostgreSQL trigram search.",
      "Docker Compose deployments with CI/CD on a VPS.",
    ],
    summary: "An AI agent that finds and buys products across stores.",
    des: "MixR is a community-first marketplace where an AI agent finds products across stores and checks out for you. I built the Go, PostgreSQL, Redis and GraphQL backend, the agent-friendly APIs, MixR Pay on Privy wallets, Shopify sync through Rye, trigram search and Docker Compose deployments with CI/CD.",
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
    slug: "gitcontrol",
    kind: "Git simulator",
    role: "Designer and developer, personal open-source project",
    highlights: [
      "Runs real Git commands in a simulated terminal.",
      "Updates the commit graph, working directory, staging area, stash and reflog live.",
      "Six guided lessons and a side-by-side merge conflict resolver.",
      "Undo and redo, with the Git engine written as a pure, unit-tested function.",
    ],
    summary: "Learn Git by doing: real commands and a live commit graph.",
    des: "Git is easier to learn when you can see what a command does. GitControl runs real Git commands in a simulated terminal and updates the commit graph, working directory, staging area, stash and reflog live, with six guided lessons, a side-by-side merge conflict resolver and undo and redo. Built end to end with Next.js, TypeScript and Zustand, with the Git engine as a pure, unit-tested function.",
    img: "/images/projects/git-control.jpg",
    tech: ["nextjs", "react", "typescript", "tailwind", "git", "vitest"],
    siteLink: "https://git-control.khushalagarwal.dev/",
    githubLink: "https://github.com/Khushal-ag/git-control",
  },
  {
    id: 8,
    title: "Next.js Starter",
    slug: "nextjs-starter",
    kind: "Open-source template",
    role: "Author, personal open-source project",
    highlights: [
      "React 19, Tailwind v4 and TypeScript.",
      "Cache Components and the React Compiler.",
      "Light, dark and system themes.",
      "SEO metadata with JSON-LD, plus security headers.",
      "One validate script covering lint, types, Prettier and build.",
    ],
    summary:
      "A production-minded Next.js 16 starting point with themes, SEO and security headers.",
    des: "Every new Next.js app repeats the same setup, so this open-source template ships it once: React 19, Tailwind v4 and TypeScript with Cache Components, the React Compiler, light, dark and system themes, SEO metadata with JSON-LD, security headers and one validate script for lint, types, Prettier and build.",
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
    "Open to full-time roles, contracts and freelance projects, onsite in India or remote worldwide. Reach out anytime.",
  ctaText: "Send an email",
  copyright: "© {year} Khushal Agarwal",
};

export const githubCta = {
  label: "View my GitHub",
  blurb: "More projects, open-source contributions, and code on GitHub.",
};
