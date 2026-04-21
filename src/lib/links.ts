import { GITHUB_PROFILE_URL, site } from "@/content";

export const githubProfileHref =
  site.github?.href ?? site.links.github.href ?? GITHUB_PROFILE_URL;

export const personSameAs = [
  site.author.linkedin,
  githubProfileHref,
  site.links.twitter.href,
].filter((url): url is string => Boolean(url));
