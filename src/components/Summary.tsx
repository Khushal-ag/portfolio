"use client";

import Link from "next/link";

import {
  Reveal,
  Section,
  SectionFileLabel,
  SectionHeading,
} from "@/components/Section";
import { summary } from "@/content";

export default function Summary() {
  return (
    <Section id="about" reveal>
      <SectionFileLabel file="~/portfolio/about.ts" />
      <SectionHeading>About me</SectionHeading>
      <Reveal>
        <h3 className="sr-only">
          Full-Stack Developer · TypeScript · Go · AI · Web3
        </h3>
        <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-text-muted md:text-xl">
          {summary.paragraph}
        </p>
        <p className="mt-4 text-center text-text-dim">
          <Link
            href="/khushal-agarwal"
            className="text-sm underline underline-offset-2 hover:text-accent"
          >
            More about me
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}
