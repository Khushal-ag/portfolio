import { cacheLife, cacheTag } from "next/cache";

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

import { CONTENT_CACHE_LIFE, CONTENT_TAG } from "@/lib/cms/constants";
import {
  snapshotEducation,
  snapshotHome,
  snapshotJobs,
  snapshotProjects,
  snapshotSite,
  snapshotSkills,
  snapshotTestimonials,
  staticFallback,
} from "@/lib/cms/fallback";
import {
  mapEducation,
  mapHome,
  mapJobs,
  mapProject,
  mapProjects,
  mapSite,
  mapSkills,
  mapTestimonials,
} from "@/lib/cms/map";
import {
  educationQuery,
  homeQuery,
  jobsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  projectsQuery,
  siteSettingsQuery,
  skillsQuery,
  testimonialsQuery,
} from "@/lib/cms/queries";
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";

/**
 * Fetch CMS data inside `"use cache"`.
 *
 * - Sanity not configured → repo snapshot (`src/content.ts`).
 * - Sanity configured → fetch + validate; on failure throw so Next keeps the
 *   last good cached entry (do not write the snapshot into the cache).
 */
async function loadCms<T>(
  fetchFresh: () => Promise<T>,
  snapshot: () => T,
): Promise<T> {
  if (!isSanityConfigured()) return snapshot();
  return fetchFresh();
}

export async function getSite(): Promise<SiteContent> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(async () => {
    const raw = await client.fetch(siteSettingsQuery);
    if (!raw) throw new Error("Missing siteSettings document");
    return mapSite(raw);
  }, snapshotSite);
}

export async function getHome(): Promise<HomeContent> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(async () => {
    const raw = await client.fetch(homeQuery);
    if (!raw) throw new Error("Missing home document");
    return mapHome(raw);
  }, snapshotHome);
}

export async function getSkills(): Promise<SkillGroup[]> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(async () => {
    const raw = await client.fetch(skillsQuery);
    if (!raw) throw new Error("Missing skills document");
    return mapSkills(raw);
  }, snapshotSkills);
}

export async function getEducation(): Promise<EducationContent> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(async () => {
    const raw = await client.fetch(educationQuery);
    if (!raw) throw new Error("Missing education document");
    return mapEducation(raw);
  }, snapshotEducation);
}

export async function getExperience(): Promise<WorkExperience[]> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(async () => {
    const raw = await client.fetch(jobsQuery);
    return mapJobs(raw ?? []);
  }, snapshotJobs);
}

export async function getProjects(): Promise<PortfolioProject[]> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(async () => {
    const raw = await client.fetch(projectsQuery);
    return mapProjects(raw ?? []);
  }, snapshotProjects);
}

export async function getProjectBySlug(
  slug: string,
): Promise<PortfolioProject | null> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(
    async () => {
      const raw = await client.fetch(projectBySlugQuery, { slug });
      if (!raw) return null;
      return mapProject(raw);
    },
    () => snapshotProjects().find((p) => p.slug === slug) ?? null,
  );
}

export async function getProjectSlugs(): Promise<string[]> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(
    async () => {
      const raw = await client.fetch<string[]>(projectSlugsQuery);
      return raw ?? [];
    },
    () => snapshotProjects().map((p) => p.slug),
  );
}

export async function getTestimonials(): Promise<Testimonial[]> {
  "use cache";
  cacheTag(CONTENT_TAG);
  cacheLife(CONTENT_CACHE_LIFE);

  return loadCms(async () => {
    const raw = await client.fetch(testimonialsQuery);
    return mapTestimonials(raw ?? []);
  }, snapshotTestimonials);
}

export function getStaticFallback(): StaticFallback {
  return staticFallback;
}
