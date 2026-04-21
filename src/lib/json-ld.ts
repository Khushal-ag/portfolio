import { personAlternateNames, seo, site, skills } from "@/content";
import { personSameAs } from "@/lib/links";

function knowsAboutList(): string[] {
  return [
    ...skills.languages,
    ...skills.frontendMobile,
    ...skills.backendCloud,
    ...skills.databasesDevOps,
    ...skills.other,
  ].slice(0, 28);
}

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
        jobTitle: site.author.title,
        sameAs: personSameAs,
        knowsAbout: knowsAboutList(),
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

export function buildProfileBreadcrumbJsonLd() {
  const base = site.url;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Khushal Agarwal",
        item: `${base}/khushal-agarwal`,
      },
    ],
  };
}
