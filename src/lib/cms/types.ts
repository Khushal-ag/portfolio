import type { TechKey } from "@/lib/tech";

export type SiteAuthor = {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  avatar: string;
  mail: string;
};

export type SiteLinks = {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
};

export type NavItem = { name: string; link: string };

export type SiteContent = {
  name: string;
  url: string;
  /** ISO date from CMS `_updatedAt`, used for sitemap / JSON-LD. */
  lastUpdated: string;
  author: SiteAuthor;
  links: SiteLinks;
  resumeUrl: string;
  twitterHandle: string;
  keywords: string[];
  metaDescription: string;
  homeMetaDescription: string;
  profileMetaDescription: string;
  alternateNames: string[];
  navItems: NavItem[];
};

export type HomeContent = {
  hero: { status: string; blurb: string };
  summary: {
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  footer: {
    heading: string;
    subtext: string;
    ctaText: string;
    copyright: string;
  };
  githubCta: { label: string; blurb: string };
  achievements: string[];
};

export type SkillGroup = { label: string; items: string[] };

export type EducationContent = {
  degree: string;
  school: string;
  cpi: string;
  years: string;
};

export type WorkBullet = { lead: string; text: string };

export type WorkExperience = {
  id: number;
  company: string;
  role: string;
  type: "Full-time" | "Freelance";
  location: string;
  period?: string;
  summary: string;
  bullets: WorkBullet[];
  stack: TechKey[];
};

export type PortfolioProject = {
  id: number;
  slug: string;
  title: string;
  kind: string;
  role: string;
  highlights: string[];
  summary: string;
  des: string;
  img: string;
  imgAlt: string;
  tech: TechKey[];
  siteLink?: string;
  githubLink?: string;
  seoTitle?: string;
  seoDescription?: string;
  updatedAt: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

/** Minimal static copy for error / not-found when CMS is unreachable. */
export type StaticFallback = {
  authorName: string;
  authorMail: string;
  resumeUrl: string;
  siteUrl: string;
};
