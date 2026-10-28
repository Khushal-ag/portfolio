import { z } from "zod";

import type {
  EducationContent,
  HomeContent,
  PortfolioProject,
  SiteContent,
  SkillGroup,
  Testimonial,
  WorkExperience,
} from "@/lib/cms/types";
import type { TechKey } from "@/lib/tech";

import { isTechKey } from "@/lib/tech";
import { urlForImage } from "@/sanity/lib/image";

const authorSchema = z.object({
  name: z.string(),
  title: z.string(),
  subtitle: z.string(),
  location: z.string(),
  phone: z.string(),
  avatar: z.string(),
  mail: z.string(),
});

const linksSchema = z.object({
  github: z.string(),
  linkedin: z.string(),
  twitter: z.string(),
  instagram: z.string(),
});

const siteSchema = z.object({
  name: z.string(),
  url: z.string(),
  author: authorSchema,
  links: linksSchema,
  resumeUrl: z.string(),
  twitterHandle: z.string(),
  keywords: z.array(z.string()),
  metaDescription: z.string(),
  homeMetaDescription: z.string(),
  profileMetaDescription: z.string(),
  alternateNames: z.array(z.string()).nullable().optional(),
  navItems: z
    .array(z.object({ name: z.string(), link: z.string() }))
    .nullable()
    .optional(),
  _updatedAt: z.string(),
});

const homeSchema = z.object({
  heroStatus: z.string(),
  heroBlurb: z.string(),
  aboutParagraphs: z.array(z.string()),
  facts: z.array(z.object({ label: z.string(), value: z.string() })),
  footerHeading: z.string(),
  footerSubtext: z.string(),
  footerCtaText: z.string(),
  footerCopyright: z.string(),
  githubCtaLabel: z.string(),
  githubCtaBlurb: z.string(),
  achievements: z.array(z.string()),
});

const skillsSchema = z.object({
  groups: z.array(
    z.object({
      label: z.string(),
      items: z.array(z.string()),
    }),
  ),
});

const educationSchema = z.object({
  degree: z.string(),
  school: z.string(),
  cpi: z.string(),
  years: z.string(),
});

const jobSchema = z.object({
  _id: z.string(),
  order: z.number(),
  company: z.string(),
  role: z.string(),
  type: z.enum(["Full-time", "Freelance"]),
  location: z.string(),
  period: z.string().nullable().optional(),
  summary: z.string(),
  bullets: z.array(z.object({ lead: z.string(), text: z.string() })),
  stack: z.array(z.string()),
});

const projectSchema = z.object({
  _id: z.string(),
  order: z.number(),
  title: z.string(),
  slug: z.string(),
  kind: z.string(),
  role: z.string(),
  highlights: z.array(z.string()),
  summary: z.string(),
  description: z.string(),
  screenshot: z.object({
    alt: z.string().nullable().optional(),
    asset: z
      .object({
        url: z.string().nullable().optional(),
      })
      .nullable()
      .optional(),
  }),
  tech: z.array(z.string()),
  siteLink: z.string().nullable().optional(),
  githubLink: z.string().nullable().optional(),
  seoTitle: z.string().nullable().optional(),
  seoDescription: z.string().nullable().optional(),
  _updatedAt: z.string(),
});

const testimonialSchema = z.object({
  quote: z.string(),
  name: z.string(),
  title: z.string(),
});

function toTechKeys(values: string[]): TechKey[] {
  const known = values.filter(isTechKey);
  if (known.length !== values.length) {
    const dropped = values.filter((value) => !isTechKey(value));
    console.warn("[cms] Unknown tech keys dropped:", dropped.join(", "));
  }
  return known;
}

export function mapSite(raw: unknown): SiteContent {
  const data = siteSchema.parse(raw);
  return {
    name: data.name,
    url: data.url,
    lastUpdated: data._updatedAt.slice(0, 10),
    author: data.author,
    links: data.links,
    resumeUrl: data.resumeUrl,
    twitterHandle: data.twitterHandle,
    keywords: data.keywords,
    metaDescription: data.metaDescription,
    homeMetaDescription: data.homeMetaDescription,
    profileMetaDescription: data.profileMetaDescription,
    alternateNames: data.alternateNames ?? [],
    navItems: data.navItems ?? [],
  };
}

export function mapHome(raw: unknown): HomeContent {
  const data = homeSchema.parse(raw);
  return {
    hero: { status: data.heroStatus, blurb: data.heroBlurb },
    summary: {
      paragraphs: data.aboutParagraphs,
      facts: data.facts,
    },
    footer: {
      heading: data.footerHeading,
      subtext: data.footerSubtext,
      ctaText: data.footerCtaText,
      copyright: data.footerCopyright,
    },
    githubCta: {
      label: data.githubCtaLabel,
      blurb: data.githubCtaBlurb,
    },
    achievements: data.achievements,
  };
}

export function mapSkills(raw: unknown): SkillGroup[] {
  return skillsSchema.parse(raw).groups;
}

export function mapEducation(raw: unknown): EducationContent {
  return educationSchema.parse(raw);
}

export function mapJobs(raw: unknown): WorkExperience[] {
  const jobs = z.array(jobSchema).parse(raw);
  return jobs.map((job, index) => ({
    id: index + 1,
    company: job.company,
    role: job.role,
    type: job.type,
    location: job.location,
    ...(job.period ? { period: job.period } : {}),
    summary: job.summary,
    bullets: job.bullets,
    stack: toTechKeys(job.stack),
  }));
}

function projectFromParsed(
  data: z.infer<typeof projectSchema>,
): PortfolioProject {
  const img =
    data.screenshot.asset?.url ?
      urlForImage(data.screenshot).width(1600).quality(80).url()
    : "";
  if (!img) throw new Error(`Project ${data.slug} is missing a screenshot URL`);

  return {
    id: data.order,
    slug: data.slug,
    title: data.title,
    kind: data.kind,
    role: data.role,
    highlights: data.highlights,
    summary: data.summary,
    des: data.description,
    img,
    imgAlt: data.screenshot.alt || `Screenshot of ${data.title}`,
    tech: toTechKeys(data.tech),
    ...(data.siteLink ? { siteLink: data.siteLink } : {}),
    ...(data.githubLink ? { githubLink: data.githubLink } : {}),
    ...(data.seoTitle ? { seoTitle: data.seoTitle } : {}),
    ...(data.seoDescription ? { seoDescription: data.seoDescription } : {}),
    updatedAt: data._updatedAt.slice(0, 10),
  };
}

export function mapProject(raw: unknown): PortfolioProject {
  return projectFromParsed(projectSchema.parse(raw));
}

export function mapProjects(raw: unknown): PortfolioProject[] {
  return z.array(projectSchema).parse(raw).map(projectFromParsed);
}

export function mapTestimonials(raw: unknown): Testimonial[] {
  return z.array(testimonialSchema).parse(raw);
}
