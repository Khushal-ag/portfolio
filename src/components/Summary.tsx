"use client";

import { summary } from "@/content";

import { Reveal, Section, SectionFileLabel, SectionHeading } from "@/components/Section";

export default function Summary() {
  return (
    <Section id="about" reveal>
      <SectionFileLabel file="~/portfolio/about.ts" />
      <SectionHeading>About me</SectionHeading>
      <Reveal>
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-text-muted md:text-xl">
          {summary.paragraph}
        </p>
      </Reveal>
    </Section>
  );
}
