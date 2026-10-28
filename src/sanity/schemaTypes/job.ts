import { defineField, defineType } from "sanity";

import { TECH_KEY_OPTIONS } from "./techKeys";

export const job = defineType({
  name: "job",
  title: "Job",
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
      name: "company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      type: "string",
      options: { list: ["Full-time", "Freelance"] },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "period",
      title: "Period (optional for freelance)",
      type: "string",
    }),
    defineField({
      name: "summary",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bullets",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "lead",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "text",
              type: "text",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "lead", subtitle: "text" } },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "stack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
      options: { list: [...TECH_KEY_OPTIONS] },
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "company", subtitle: "role", order: "order" },
    prepare: ({ title, subtitle, order }) => ({
      title: `${order ?? "?"}. ${title}`,
      subtitle,
    }),
  },
});
