import {
  allSkills,
  education,
  personAlternateNames,
  projects,
  seo,
  site,
  workExperience,
} from "@/content";

const KNOWS_ABOUT_TOPICS = [
  "Full-stack web development",
  "Mobile app development",
  "Generative AI",
  "Blockchain and smart contracts",
] as const;
const MAX_KNOWN_SKILLS = 36;

export function buildRootJsonLd() {
  const base = site.url;
  const personId = `${base}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: site.name,
        description: seo.metaDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: site.author.name,
        alternateName: [...personAlternateNames],
        url: base,
        image: `${base}${site.author.avatar}`,
        email: site.author.mail,
        description: seo.metaDescription,
        jobTitle: site.author.title,
        worksFor: {
          "@type": "Organization",
          name: workExperience[0]?.company,
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

export function buildProfilePageJsonLd() {
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

export function buildProjectsJsonLd() {
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
        image: `${base}${project.img}`,
        creator: { "@id": `${base}/#person` },
        ...(project.siteLink && { url: project.siteLink }),
      },
    })),
  };
}
