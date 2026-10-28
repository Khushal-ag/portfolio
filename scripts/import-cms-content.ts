/**
 * One-time (or occasional) import of `src/content.ts` into Sanity.
 *
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 * SANITY_API_WRITE_TOKEN
 *
 * Usage: bun run cms:import
 */
import { createReadStream, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { createClient } from "@sanity/client";

import {
  achievements,
  education,
  footer,
  githubCta,
  hero,
  navItems,
  personAlternateNames,
  projects,
  seo,
  site,
  skillGroups,
  summary,
  testimonials,
  workExperience,
} from "../src/content";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN before importing.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  token,
  useCdn: false,
});

async function uploadProjectImage(relativePath: string) {
  const absolute = path.join(root, "public", relativePath.replace(/^\//, ""));
  if (!existsSync(absolute)) {
    throw new Error(`Missing image: ${absolute}`);
  }
  return client.assets.upload("image", createReadStream(absolute), {
    filename: path.basename(absolute),
  });
}

async function main() {
  console.log("Importing site settings…");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    name: site.name,
    url: site.url,
    author: { ...site.author },
    links: { ...site.links },
    resumeUrl: site.resumeUrl,
    twitterHandle: site.twitterHandle,
    keywords: [...site.keywords],
    metaDescription: seo.metaDescription,
    homeMetaDescription: seo.homeMetaDescription,
    profileMetaDescription: seo.profileMetaDescription,
    alternateNames: [...personAlternateNames],
    navItems: navItems.map((item) => ({
      _type: "object",
      _key: item.link,
      ...item,
    })),
  });

  console.log("Importing home…");
  await client.createOrReplace({
    _id: "home",
    _type: "home",
    heroStatus: hero.status,
    heroBlurb: hero.blurb,
    aboutParagraphs: [...summary.paragraphs],
    facts: summary.facts.map((fact, i) => ({
      _type: "object",
      _key: `fact-${i}`,
      ...fact,
    })),
    footerHeading: footer.heading,
    footerSubtext: footer.subtext,
    footerCtaText: footer.ctaText,
    footerCopyright: footer.copyright,
    githubCtaLabel: githubCta.label,
    githubCtaBlurb: githubCta.blurb,
    achievements: [...achievements],
  });

  console.log("Importing skills…");
  await client.createOrReplace({
    _id: "skills",
    _type: "skills",
    groups: skillGroups.map((group, i) => ({
      _type: "object",
      _key: `group-${i}`,
      label: group.label,
      items: [...group.items],
    })),
  });

  console.log("Importing education…");
  await client.createOrReplace({
    _id: "education",
    _type: "education",
    ...education,
  });

  console.log("Importing jobs…");
  for (const [index, job] of workExperience.entries()) {
    await client.createOrReplace({
      _id: `job-${job.id}`,
      _type: "job",
      order: index + 1,
      company: job.company,
      role: job.role,
      type: job.type,
      location: job.location,
      ...(job.period ? { period: job.period } : {}),
      summary: job.summary,
      bullets: job.bullets.map((b, i) => ({
        _type: "object",
        _key: `bullet-${i}`,
        ...b,
      })),
      stack: [...job.stack],
    });
  }

  console.log("Importing projects (with screenshots)…");
  for (const [index, project] of projects.entries()) {
    const asset = await uploadProjectImage(project.img);
    await client.createOrReplace({
      _id: `project-${project.slug}`,
      _type: "project",
      order: index + 1,
      title: project.title,
      slug: { _type: "slug", current: project.slug },
      kind: project.kind,
      role: project.role,
      highlights: [...project.highlights],
      summary: project.summary,
      description: project.des,
      screenshot: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: `Screenshot of ${project.title}`,
      },
      tech: [...project.tech],
      ...(project.siteLink ? { siteLink: project.siteLink } : {}),
      ...(project.githubLink ? { githubLink: project.githubLink } : {}),
    });
    console.log(`  ✓ ${project.title}`);
  }

  console.log("Importing testimonials…");
  for (const [index, item] of testimonials.entries()) {
    await client.createOrReplace({
      _id: `testimonial-${index + 1}`,
      _type: "testimonial",
      order: index + 1,
      quote: item.quote,
      name: item.name,
      title: item.title,
    });
  }

  console.log("Done. Publish any drafts in Studio if needed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
