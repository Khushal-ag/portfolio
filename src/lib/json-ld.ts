import type {
  EducationContent,
  PortfolioProject,
  SiteContent,
  SkillGroup,
  WorkExperience,
} from "@/lib/cms/types";

import { resolveTech } from "@/lib/tech";

const KNOWS_ABOUT_TOPICS = [
  "Full-stack web development",
  "Mobile app development",
  "Generative AI",
  "Blockchain and smart contracts",
] as const;
const MAX_KNOWN_SKILLS = 36;

type RootJsonLdInput = {
  site: SiteContent;
  education: EducationContent;
  skills: SkillGroup[];
  experience: WorkExperience[];
};

export function buildRootJsonLd({
  site,
  education,
  skills,
  experience,
}: RootJsonLdInput) {
  const base = site.url;
  const personId = `${base}/#person`;
  const allSkills = skills.flatMap((group) => group.items);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: site.name,
        description: site.metaDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.author.name,
        alternateName: [...site.alternateNames],
        url: base,
        image: `${base}${site.author.avatar}`,
        email: site.author.mail,
        description: site.metaDescription,
        jobTitle: site.author.title,
        worksFor: {
          "@type": "Organization",
          name: experience[0]?.company,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: education.school,
        },
        sameAs: [site.links.linkedin, site.links.github, site.links.twitter],
        knowsAbout: [
          ...KNOWS_ABOUT_TOPICS,
          ...allSkills.slice(0, MAX_KNOWN_SKILLS),
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        workLocation: {
          "@type": "Place",
          name: `${site.author.location}, India`,
        },
      },
    ],
  };
}

export function buildProfilePageJsonLd(site: SiteContent) {
  const base = site.url;
  const profileUrl = `${base}/khushal-agarwal`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${profileUrl}#profilepage`,
        url: profileUrl,
        name: `${site.author.name} | ${site.author.title}`,
        inLanguage: "en",
        dateModified: site.lastUpdated,
        isPartOf: { "@id": `${base}/#website` },
        mainEntity: { "@id": `${base}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base },
          {
            "@type": "ListItem",
            position: 2,
            name: site.author.name,
            item: profileUrl,
          },
        ],
      },
    ],
  };
}

export function buildProjectJsonLd(
  project: PortfolioProject,
  site: SiteContent,
) {
  const base = site.url;
  const url = `${base}/projects/${project.slug}`;
  const image =
    project.img.startsWith("http") ? project.img : `${base}${project.img}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        url,
        name: project.title,
        headline: `${project.title}: ${project.kind}`,
        description: project.des,
        image,
        inLanguage: "en",
        dateModified: project.updatedAt || site.lastUpdated,
        creator: { "@id": `${base}/#person` },
        isPartOf: { "@id": `${base}/#website` },
        keywords: project.tech.map((key) => resolveTech(key).label).join(", "),
        ...(project.siteLink && { sameAs: [project.siteLink] }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${base}/#projects`,
          },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };
}

export function buildProjectsJsonLd(
  projects: PortfolioProject[],
  site: SiteContent,
) {
  const base = site.url;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Projects by ${site.author.name}`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.des,
        image:
          project.img.startsWith("http") ?
            project.img
          : `${base}${project.img}`,
        creator: { "@id": `${base}/#person` },
        ...(project.siteLink && { url: project.siteLink }),
      },
    })),
  };
}
