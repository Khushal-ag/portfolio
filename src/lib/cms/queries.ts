export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  name,
  url,
  author,
  links,
  resumeUrl,
  twitterHandle,
  keywords,
  metaDescription,
  homeMetaDescription,
  profileMetaDescription,
  alternateNames,
  navItems,
  _updatedAt
}`;

export const homeQuery = `*[_type == "home"][0]{
  heroStatus,
  heroBlurb,
  aboutParagraphs,
  facts,
  footerHeading,
  footerSubtext,
  footerCtaText,
  footerCopyright,
  githubCtaLabel,
  githubCtaBlurb,
  achievements,
  _updatedAt
}`;

export const skillsQuery = `*[_type == "skills"][0]{ groups }`;

export const educationQuery = `*[_type == "education"][0]{
  degree, school, cpi, years
}`;

export const jobsQuery = `*[_type == "job"] | order(order asc){
  _id,
  order,
  company,
  role,
  type,
  location,
  period,
  summary,
  bullets,
  stack
}`;

export const projectsQuery = `*[_type == "project"] | order(order asc){
  _id,
  order,
  title,
  "slug": slug.current,
  kind,
  role,
  highlights,
  summary,
  description,
  screenshot{
    alt,
    asset->{
      _id,
      url,
      metadata { dimensions }
    }
  },
  tech,
  siteLink,
  githubLink,
  seoTitle,
  seoDescription,
  _updatedAt
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  order,
  title,
  "slug": slug.current,
  kind,
  role,
  highlights,
  summary,
  description,
  screenshot{
    alt,
    asset->{
      _id,
      url,
      metadata { dimensions }
    }
  },
  tech,
  siteLink,
  githubLink,
  seoTitle,
  seoDescription,
  _updatedAt
}`;

export const projectSlugsQuery = `*[_type == "project" && defined(slug.current)].slug.current`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  quote, name, title
}`;
