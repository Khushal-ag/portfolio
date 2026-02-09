"use client";

import Link from "next/link";
import { summary } from "@/content";

import {
  Reveal,
  Section,
  SectionFileLabel,
  SectionHeading,
} from "@/components/Section";

export default function Summary() {
  return (
    <Section id="about" reveal>
      <SectionFileLabel file="~/portfolio/about.ts" />
      <SectionHeading>About me</SectionHeading>
      <Reveal>
        <h3 className="sr-only">
          Software Engineer · Backend &amp; Systems Engineer
        </h3>
        <p className="text-text-muted mx-auto max-w-2xl text-center text-lg leading-relaxed md:text-xl">
          {summary.paragraph}
        </p>
        <p className="text-text-dim mt-4 text-center">
          <Link
            href="/khushal-agarwal"
            className="hover:text-accent text-sm underline underline-offset-2"
          >
            More about me
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}
