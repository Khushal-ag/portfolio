import { defineField, defineType } from "sanity";

import { TECH_KEY_OPTIONS } from "./techKeys";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      // Locked after first publish so URLs and rankings stay stable.
      readOnly: ({ document }) => Boolean(document?._createdAt),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Kind / label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "highlights",
      type: "array",
      of: [{ type: "text" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Full description",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "screenshot",
      title: "Screenshot",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alt text",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tech",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
      options: { list: [...TECH_KEY_OPTIONS] },
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "siteLink",
      title: "Live site URL",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["https", "http"] }),
    }),
    defineField({
      name: "githubLink",
      title: "Source URL",
      type: "url",
      validation: (rule) => rule.uri({ scheme: ["https", "http"] }),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title override",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description override",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "title", media: "screenshot", order: "order" },
    prepare: ({ title, media, order }) => ({
      title: `${order ?? "?"}. ${title}`,
      media,
    }),
  },
});
