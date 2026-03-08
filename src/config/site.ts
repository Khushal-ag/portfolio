import { site } from "@/content";

export const siteConfig = {
  name: site.name,
  description: site.description,
  url: site.url,
  keywords: [
    "Full-stack developer",
    "Golang",
    "React",
    "Node.js",
    "TypeScript",
    "Microservices",
    "Khushal Agarwal",
  ],
  author: site.author,
  links: site.links,
  github: site.github,
  routes: {
    home: "/",
    resume: "/khushal-agarwal",
  },
} as const;
