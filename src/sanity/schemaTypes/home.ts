import { defineField, defineType } from "sanity";

export const home = defineType({
  name: "home",
  title: "Home page",
  type: "document",
  fields: [
    defineField({
      name: "heroStatus",
      title: "Hero status",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroBlurb",
      title: "Hero blurb",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutParagraphs",
      title: "About paragraphs",
      type: "array",
      of: [{ type: "text" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "facts",
      title: "Fact card",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "value",
              type: "string",
              validation: (r) => r.required(),
            }),
          ],
          preview: { select: { title: "label", subtitle: "value" } },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "footerHeading",
      title: "Footer heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "footerSubtext",
      title: "Footer subtext",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "footerCtaText",
      title: "Footer CTA text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "footerCopyright",
      title: "Footer copyright (use {year})",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "githubCtaLabel",
      title: "GitHub CTA label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "githubCtaBlurb",
      title: "GitHub CTA blurb",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "text" }],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});
