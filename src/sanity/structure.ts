import type { StructureResolver } from "sanity/structure";

const SINGLETONS = [
  { id: "siteSettings", title: "Site settings" },
  { id: "home", title: "Home page" },
  { id: "skills", title: "Skills" },
  { id: "education", title: "Education" },
] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...SINGLETONS.map(({ id, title }) =>
        S.listItem()
          .title(title)
          .id(id)
          .child(S.document().schemaType(id).documentId(id).title(title)),
      ),
      S.divider(),
      S.documentTypeListItem("job").title("Jobs"),
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
    ]);
