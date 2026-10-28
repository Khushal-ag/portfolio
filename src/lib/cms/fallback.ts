import type {
  EducationContent,
  HomeContent,
  PortfolioProject,
  SiteContent,
  SkillGroup,
  StaticFallback,
  Testimonial,
  WorkExperience,
} from "@/lib/cms/types";

import {
  achievements,
  education as educationSnapshot,
  footer,
  githubCta,
  hero,
  navItems,
  personAlternateNames,
  projects as projectsSnapshot,
  seo,
  site,
  skillGroups,
  summary,
  testimonials as testimonialsSnapshot,
  workExperience as workSnapshot,
} from "@/content";

export const staticFallback: StaticFallback = {
  authorName: site.author.name,
  authorMail: site.author.mail,
  resumeUrl: site.resumeUrl,
  siteUrl: site.url,
};

export function snapshotSite(): SiteContent {
  return {
    name: site.name,
    url: site.url,
    lastUpdated: site.lastUpdated,
    author: { ...site.author },
    links: { ...site.links },
    resumeUrl: site.resumeUrl,
    twitterHandle: site.twitterHandle,
    keywords: [...site.keywords],
    metaDescription: seo.metaDescription,
    homeMetaDescription: seo.homeMetaDescription,
    profileMetaDescription: seo.profileMetaDescription,
    alternateNames: [...personAlternateNames],
    navItems: navItems.map((item) => ({ ...item })),
  };
}

export function snapshotHome(): HomeContent {
  return {
    hero: { status: hero.status, blurb: hero.blurb },
    summary: {
      paragraphs: [...summary.paragraphs],
      facts: summary.facts.map((f) => ({ ...f })),
    },
    footer: { ...footer },
    githubCta: { ...githubCta },
    achievements: [...achievements],
  };
}

export function snapshotSkills(): SkillGroup[] {
  return skillGroups.map((g) => ({
    label: g.label,
    items: [...g.items],
  }));
}

export function snapshotEducation(): EducationContent {
  return { ...educationSnapshot };
}

export function snapshotJobs(): WorkExperience[] {
  return workSnapshot.map((job) => ({
    ...job,
    bullets: job.bullets.map((b) => ({ ...b })),
    stack: [...job.stack],
  }));
}

export function snapshotProjects(): PortfolioProject[] {
  return projectsSnapshot.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    kind: p.kind,
    role: p.role,
    highlights: [...p.highlights],
    summary: p.summary,
    des: p.des,
    img: p.img,
    imgAlt: `Screenshot of ${p.title}`,
    tech: [...p.tech],
    siteLink: p.siteLink,
    githubLink: p.githubLink,
    updatedAt: site.lastUpdated,
  }));
}

export function snapshotTestimonials(): Testimonial[] {
  return testimonialsSnapshot.map((t) => ({ ...t }));
}
