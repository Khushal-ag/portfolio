import {
  FaAws,
  FaBolt,
  FaCode,
  FaCubes,
  FaDatabase,
  FaFilePdf,
  FaMagnifyingGlass,
  FaPlug,
  FaWallet,
} from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import {
  SiBun,
  SiCplusplus,
  SiDart,
  SiDocker,
  SiDotnet,
  SiDrizzle,
  SiEthereum,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGo,
  SiGraphql,
  SiHono,
  SiHuggingface,
  SiIpfs,
  SiJavascript,
  SiLanggraph,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPwa,
  SiRazorpay,
  SiReact,
  SiReactquery,
  SiRedis,
  SiRedux,
  SiRust,
  SiShadcnui,
  SiSharp,
  SiSocketdotio,
  SiSolana,
  SiSolidity,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";

import type { IconType } from "react-icons";

type Brand = {
  Icon: IconType;
  /** Brand colour on light backgrounds; omit for the neutral text colour. */
  light?: string;
  /** Brand colour on dark backgrounds; falls back to `light`. */
  dark?: string;
};

/** Logo and brand colours per skill label in `skillGroups`. */
const brands: Record<string, Brand> = {
  TypeScript: { Icon: SiTypescript, light: "#3178c6" },
  JavaScript: { Icon: SiJavascript, light: "#b59b00", dark: "#f7df1e" },
  "C#": { Icon: SiSharp, light: "#9b4f96", dark: "#b67cb1" },
  Golang: { Icon: SiGo, light: "#0098bd", dark: "#00add8" },
  Rust: { Icon: SiRust },
  Dart: { Icon: SiDart, light: "#0175c2", dark: "#2cb7f6" },
  "C++": { Icon: SiCplusplus, light: "#00599c", dark: "#5ba3e0" },

  "Node.js": { Icon: SiNodedotjs, light: "#3f8a2f", dark: "#5fa04e" },
  "Express.js": { Icon: SiExpress },
  NestJS: { Icon: SiNestjs, light: "#e0234e" },
  Hono: { Icon: SiHono, light: "#e36002" },
  "ASP.NET Core": { Icon: SiDotnet, light: "#512bd4", dark: "#8b6cf0" },
  Bun: { Icon: SiBun, light: "#8a6d3b", dark: "#fbf0df" },
  "REST APIs": { Icon: FaPlug },
  GraphQL: { Icon: SiGraphql, light: "#e10098" },
  WebSockets: { Icon: SiSocketdotio },
  Microservices: { Icon: FaCubes },
  Serverless: { Icon: FaBolt, light: "#e68a00", dark: "#ff9900" },
  Docker: { Icon: SiDocker, light: "#2496ed" },
  "AWS (S3, SQS, Lambda, Cognito)": {
    Icon: FaAws,
    light: "#e68a00",
    dark: "#ff9900",
  },
  "CI/CD (GitHub Actions)": { Icon: SiGithubactions, light: "#2088ff" },
  Firebase: { Icon: SiFirebase, light: "#f5a300", dark: "#ffca28" },

  "Next.js": { Icon: SiNextdotjs },
  "React.js": { Icon: SiReact, light: "#149eca", dark: "#61dafb" },
  "React Native": { Icon: SiReact, light: "#149eca", dark: "#61dafb" },
  Expo: { Icon: SiExpo },
  "Redux Toolkit": { Icon: SiRedux, light: "#764abc", dark: "#a67ee8" },
  "TanStack Query": { Icon: SiReactquery, light: "#ff4154" },
  "Tailwind CSS": { Icon: SiTailwindcss, light: "#06b6d4" },
  "ShadCN UI": { Icon: SiShadcnui },
  Vite: { Icon: SiVite, light: "#646cff" },
  PWA: { Icon: SiPwa, light: "#5a0fc8", dark: "#a47bff" },

  PostgreSQL: { Icon: SiPostgresql, light: "#4169e1", dark: "#6b8ef5" },
  MongoDB: { Icon: SiMongodb, light: "#47a248" },
  Redis: { Icon: SiRedis, light: "#dc382d" },
  MySQL: { Icon: SiMysql, light: "#4479a1", dark: "#5b9bc7" },
  "SQL Server": { Icon: FaDatabase, light: "#cc2927" },
  Prisma: { Icon: SiPrisma },
  "Drizzle ORM": { Icon: SiDrizzle, light: "#84a800", dark: "#c5f74f" },
  Git: { Icon: SiGit, light: "#f05032" },

  LangGraph: { Icon: SiLanggraph },
  "Vercel AI SDK": { Icon: SiVercel },
  "OpenAI API": { Icon: RiOpenaiFill },
  HuggingFace: { Icon: SiHuggingface, light: "#e6a800", dark: "#ffd21e" },
  "Multimodal AI search": { Icon: FaMagnifyingGlass },
  Solidity: { Icon: SiSolidity },
  EVM: { Icon: SiEthereum, light: "#627eea" },
  "Solana (Anchor)": { Icon: SiSolana, light: "#9945ff" },
  Privy: { Icon: FaWallet },
  "Ethers.js": { Icon: SiEthereum, light: "#627eea" },
  IPFS: { Icon: SiIpfs, light: "#2a8f9c", dark: "#65c2cb" },
  Stripe: { Icon: SiStripe, light: "#635bff" },
  Razorpay: { Icon: SiRazorpay, light: "#3395ff" },
  "PDF generation (Playwright, pdf-lib)": { Icon: FaFilePdf, light: "#e5484d" },
};

/** Brand logo for a skill, tinted per theme through the `.brand-icon` CSS vars. */
export default function SkillIcon({
  skill,
  className = "size-4",
}: {
  skill: string;
  className?: string;
}) {
  const { Icon, light, dark } = brands[skill] ?? { Icon: FaCode };
  return (
    <span
      aria-hidden
      className="brand-icon inline-flex shrink-0"
      style={
        {
          "--brand-l": light,
          "--brand-d": dark ?? light,
        } as React.CSSProperties
      }
    >
      <Icon className={className} />
    </span>
  );
}
