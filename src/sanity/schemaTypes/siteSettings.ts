import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Site name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Site URL",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        defineField({
          name: "name",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "title",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "subtitle",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "location",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "phone",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "avatar",
          type: "string",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "mail",
          type: "string",
          validation: (r) => r.required().email(),
        }),
      ],
    }),
    defineField({
      name: "links",
      title: "Social links",
      type: "object",
      fields: [
        defineField({
          name: "github",
          type: "url",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "linkedin",
          type: "url",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "twitter",
          type: "url",
          validation: (r) => r.required(),
        }),
        defineField({
          name: "instagram",
          type: "url",
          validation: (r) => r.required(),
        }),
      ],
    }),
    defineField({
      name: "resumeUrl",
      title: "Resume link",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["https"] }),
    }),
    defineField({
      name: "twitterHandle",
      title: "Twitter / X handle (no @)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "keywords",
      title: "Default SEO keywords",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "metaDescription",
      title: "Default meta description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "homeMetaDescription",
      title: "Home meta description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "profileMetaDescription",
      title: "Profile meta description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alternateNames",
      title: "Alternate names (JSON-LD)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "navItems",
      title: "Nav items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "name",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "link",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "name", subtitle: "link" } },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
