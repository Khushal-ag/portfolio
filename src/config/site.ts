import { site } from "@/content";

export const siteConfig = {
  name: site.name,
  description: site.description,
  url: site.url,
  urlBare: site.urlBare,
  keywords: [...site.keywords],
  author: site.author,
  links: site.links,
  github: site.github,
  twitterHandle: site.twitterHandle,
  routes: {
    home: "/",
    resume: "/khushal-agarwal",
  },
} as const;
