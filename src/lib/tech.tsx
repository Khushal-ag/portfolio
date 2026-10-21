import { FaAws, FaWallet } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiDocker,
  SiDotnet,
  SiDrizzle,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGo,
  SiGraphql,
  SiHono,
  SiHuggingface,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPuppeteer,
  SiRazorpay,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRust,
  SiSolana,
  SiSolidity,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVitest,
} from "react-icons/si";

import type { IconType } from "react-icons";

export const techStack = {
  aws: { label: "AWS", Icon: FaAws },
  docker: { label: "Docker", Icon: SiDocker },
  dotnet: { label: ".NET", Icon: SiDotnet },
  drizzle: { label: "Drizzle ORM", Icon: SiDrizzle },
  expo: { label: "Expo", Icon: SiExpo },
  express: { label: "Express", Icon: SiExpress },
  firebase: { label: "Firebase", Icon: SiFirebase },
  git: { label: "Git", Icon: SiGit },
  go: { label: "Go", Icon: SiGo },
  graphql: { label: "GraphQL", Icon: SiGraphql },
  hono: { label: "Hono", Icon: SiHono },
  huggingface: { label: "HuggingFace", Icon: SiHuggingface },
  mongodb: { label: "MongoDB", Icon: SiMongodb },
  nestjs: { label: "NestJS", Icon: SiNestjs },
  nextjs: { label: "Next.js", Icon: SiNextdotjs },
  nodejs: { label: "Node.js", Icon: SiNodedotjs },
  openai: { label: "OpenAI", Icon: RiOpenaiFill },
  postgresql: { label: "PostgreSQL", Icon: SiPostgresql },
  privy: { label: "Privy", Icon: FaWallet },
  puppeteer: { label: "Puppeteer", Icon: SiPuppeteer },
  razorpay: { label: "Razorpay", Icon: SiRazorpay },
  react: { label: "React", Icon: SiReact },
  reactquery: { label: "TanStack Query", Icon: SiReactquery },
  redis: { label: "Redis", Icon: SiRedis },
  rust: { label: "Rust", Icon: SiRust },
  solana: { label: "Solana", Icon: SiSolana },
  solidity: { label: "Solidity", Icon: SiSolidity },
  stripe: { label: "Stripe", Icon: SiStripe },
  tailwind: { label: "Tailwind CSS", Icon: SiTailwindcss },
  typescript: { label: "TypeScript", Icon: SiTypescript },
  vercel: { label: "Vercel", Icon: SiVercel },
  vitest: { label: "Vitest", Icon: SiVitest },
} as const satisfies Record<string, { label: string; Icon: IconType }>;

export type TechKey = keyof typeof techStack;

/** True only for a repository URL (github.com/<owner>/<repo>), not a profile or marketing page. */
export function isRepoLink(href?: string): href is string {
  if (!href) return false;
  try {
    const url = new URL(href);
    return (
      url.hostname === "github.com" &&
      url.pathname.split("/").filter(Boolean).length >= 2
    );
  } catch {
    return false;
  }
}
