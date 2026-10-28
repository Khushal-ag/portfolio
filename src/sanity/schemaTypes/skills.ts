import { defineField, defineType } from "sanity";

export const skills = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "groups",
      title: "Skill groups",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "items",
              type: "array",
              of: [{ type: "string" }],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: { title: "label", items: "items" },
            prepare: ({ title, items }) => ({
              title,
              subtitle: `${(items as string[] | undefined)?.length ?? 0} skills`,
            }),
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: { prepare: () => ({ title: "Skills" }) },
});
