/**
 * Single source of truth for all portfolio content.
 * Edit this file to update site copy, links, and data.
 */

// ─── Site & author ───────────────────────────────────────────────────────────
export const site = {
  name: "Khushal Agarwal | Full-Stack Developer",
  description:
    "Full-stack developer with experience building scalable microservices, high-performance UIs, and crypto-enabled payment solutions. Golang, React, Node.js, Cloud.",
  url: "https://portfolio.khushalagarwal.tech",

  author: {
    name: "Khushal Agarwal",
    title: "Full-Stack Software Developer",
    subtitle: "Go • React.js • Microservices • Node.js • Cloud",
    location: "",
    phone: "+91 9557429766",
    url: "https://khushalagarwal.tech",
    avatar: "/images/profile/github-profile.png",
    mail: "starkhush5@gmail.com",
    linkedin: "https://www.linkedin.com/in/khushal-agarwal",
  },

  links: {
    github: { title: "GitHub", href: "https://github.com/Khushal-ag" },
    linkedin: {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/khushal-agarwal",
    },
    twitter: { title: "Twitter", href: "https://twitter.com/starkhush5" },
  },

  resumeUrl:
    "https://drive.google.com/file/d/1G--7hh0MFgapSgJPQpelYxsDi1aOtOyo/view?usp=drive_link",

  /** GitHub profile – single source for "View GitHub" links across the site */
  github: {
    username: "Khushal-ag",
    href: "https://github.com/Khushal-ag",
    label: "View my GitHub",
    blurb: "More projects, open-source contributions, and code on GitHub.",
  },
};

// ─── Hero ───────────────────────────────────────────────────────────────────
export const hero = {
  greeting: "Hi, I'm",
  title: "Khushal Agarwal",
  subtitle: "Full-Stack Software Developer",
  tagline: "Go • React.js • Microservices • Node.js • Cloud",
  avatar: "/images/profile/github-profile.png",
};

// ─── Professional summary ───────────────────────────────────────────────────
export const summary = {
  paragraph:
    "Full-stack developer with experience building scalable microservices, high-performance UIs, and crypto-enabled payment solutions. Skilled in Golang, React/React Native, PostgreSQL, Redis, and cloud-native deployment. Passionate about solving complex engineering challenges and delivering business-driven product outcomes.",
};

// ─── Skills (grouped) ───────────────────────────────────────────────────────
export const skills = {
  languages: ["C++", "JavaScript", "TypeScript", "Golang", "Java", "Dart"],
  backendCloud: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "AWS",
    "Docker",
    "CI/CD",
  ],
  frontendMobile: [
    "React.js",
    "Next.js",
    "React Native",
    "ShadCN UI",
    "TailwindCSS",
  ],
  databasesDevOps: [
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Redis",
    "Git",
    "Linux",
    "Docker Compose",
  ],
  other: ["Web3", "Stripe", "Drizzle ORM", "Prisma", "Kubernetes (basic)"],
};

// ─── Education ──────────────────────────────────────────────────────────────
export const education = {
  degree: "B.Tech Computer Science",
  school: "GLA University",
  cpi: "8.3 CPI",
  year: "2024",
};

// ─── Work experience ───────────────────────────────────────────────────────
export const workExperience = [
  {
    id: 1,
    company: "Kreedalabs",
    role: "Full Stack Developer",
    location: "Pune",
    period: "Aug 2024 – Present",
    bullets: [
      "Built and optimized responsive web and mobile applications using React.js and React Native, strengthening UX/UI quality and performance across platforms.",
      "Architected scalable microservice-based backend systems and RESTful APIs, improving modularity, system reliability, and development efficiency.",
      "Developed Multiversity, an AI-powered edtech platform that generates course TOC and scripts using AI and manages learning projects end-to-end.",
      "Built Strova, an AI model finetuning platform where users bring their models to fine-tune from platform datasets, with blockchain-based data storage and payments for transparency.",
      "Integrated blockchain and Web3 features; implemented Stripe-based payment systems, subscription management, and automated credit recharge flows.",
    ],
  },
  {
    id: 2,
    company: "MixR",
    role: "Backend Developer",
    location: "Remote",
    period: "Mar 2024 – Aug 2024",
    bullets: [
      "Led backend development for a community-driven e-commerce platform using Golang, PostgreSQL, Redis, and GraphQL to enhance performance and scalability.",
      "Built AI-powered ecommerce enabling users to ask AI for product recommendations from global platforms and purchase directly from AI suggestions.",
      "Created an autonomous agent to handle the full discovery-to-purchase workflow; drove AI initiatives across the product.",
      "Built MixR Pay, a custom crypto-based checkout system using Privy embedded + server wallets, enabling secure on-chain payments.",
      "Engineered Shopify-integrated microservices, Redis caching, and PostgreSQL trigram search; containerized deployments with Docker Compose and CI/CD.",
    ],
  },
  {
    id: 3,
    company: "Vyloo",
    role: "Full Stack Developer",
    location: "Remote",
    period: "",
    bullets: [
      "Architected and built three integrated platforms—Vyloo ERP, Vyloo Web/Admin, and Vyloo Merchant—using Next.js and ShadCN UI for end-to-end pharmacy operations.",
      "Integrated WhatsApp Business API for order placement on behalf of users, enabling automated customer–vendor coordination and reducing manual follow-ups.",
      "Developed pharmacy ERP with stock management, product catalog, multi-channel ordering (customers & vendors), and automated billing.",
      "Built merchant portals with real-time order acceptance, delivery partner assignment, and map-based delivery tracking with live status updates.",
      "Designed central admin dashboard for order oversight, vendor management, merchant onboarding, and operational automation.",
    ],
  },
];

// ─── Achievements ───────────────────────────────────────────────────────────
export const achievements = [
  "Winner – TON NFT Challenge",
  "Active participant in major hackathons including HackCBS, GLATHON, and Solana Hacker House",
  "Solved 600+ DSA problems on GeeksforGeeks and LeetCode",
  "Completed Google Cloud Facilitator Program; certified as Google Cloud Digital Leader",
];

// ─── Navigation ─────────────────────────────────────────────────────────────
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

// ─── Projects ───────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Eventloop – Event Management Web App",
    des: "Event creation & management with user authentication, ticket purchase, and Stripe integration.",
    img: "/images/projects/eventloop.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/c.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/stripe-icon.svg",
    ],
    siteLink: "https://eventloop.khushalagarwal.tech/",
    githubLink: "https://github.com/Khushal-ag/eventloop",
  },
  {
    id: 2,
    title: "Sealog – Hotel Management System",
    des: "Comprehensive features for hotel employees to manage cabins/rooms, bookings, and guest information.",
    img: "/images/projects/sealog.png",
    iconLists: [
      "/icons/projects/re.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/supabase-icon.png",
      "/icons/projects/js.svg",
      "/icons/projects/react-query.svg",
    ],
    siteLink: "https://sealog.khushalagarwal.tech",
    githubLink: "https://github.com/Khushal-ag/sealog",
  },
  {
    id: 3,
    title: "Infinitunes – Music Streaming Platform",
    des: "Web-based music streaming with playlists and discovery.",
    img: "/images/projects/infinitunes.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/supabase-icon.png",
      "/icons/projects/ts.svg",
      "/icons/projects/vercel-light.png",
    ],
    siteLink: "https://infinitunes.khushalagarwal.tech/",
    githubLink: "https://github.com/Khushal-ag/infinitunes",
  },
  {
    id: 4,
    title: "MixR – Community-First Marketplace",
    des: "E-commerce platform for members to buy products at discounted prices.",
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
    id: 5,
    title: "Triphive – Hotel Review Website",
    des: "Find hotels, leave reviews, and get rewarded for valuable feedback.",
    img: "/images/projects/triphive.png",
    iconLists: [
      "/icons/projects/nodejs.svg",
      "/icons/projects/mongodb-icon.svg",
      "/icons/projects/js.svg",
      "/icons/projects/passport.svg",
      "/icons/projects/vercel-light.png",
    ],
    siteLink: "https://triphive.khushalagarwal.tech/",
    githubLink: "https://github.com/Khushal-ag/TripHive",
  },
  {
    id: 6,
    title: "Next.js Starter Template",
    des: "Next.js with TailwindCSS, TypeScript, Prettier & ESLint pre-configured.",
    img: "/images/projects/nextjs-template.png",
    iconLists: [
      "/icons/projects/next.svg",
      "/icons/projects/tail.svg",
      "/icons/projects/nodejs.svg",
      "/icons/projects/ts.svg",
      "/icons/projects/vercel-light.png",
    ],
    siteLink: "https://nextjs-template.khushalagarwal.tech/",
    githubLink: "https://github.com/Khushal-ag/nextjs-template",
  },
];

// ─── Testimonials ───────────────────────────────────────────────────────────
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

// ─── Footer & contact ───────────────────────────────────────────────────────
export const footer = {
  heading: "Let's build something together",
  subtext: "Open to full-time roles and freelance projects. Reach out anytime.",
  ctaText: "Get in touch",
  contactEmail: "starkhush5@gmail.com",
  copyright: "© {year} Khushal Agarwal",
};

export const socialMedia = [
  {
    id: 1,
    img: "/icons/social/git.svg",
    link: "https://github.com/Khushal-ag",
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
