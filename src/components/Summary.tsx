"use client";

import { summary } from "@/content";

import { Reveal, Section, SectionHeading } from "@/components/Section";

export default function Summary() {
  return (
    <Section id="about" reveal>
      <SectionHeading>About me</SectionHeading>
      <Reveal>
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-text-muted md:text-xl">
          {summary.paragraph}
        </p>
      </Reveal>
    </Section>
  );
}
