import { defineField, defineType } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "degree",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "school",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "cpi",
      title: "CPI / GPA",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "years",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "degree", subtitle: "school" },
  },
});
