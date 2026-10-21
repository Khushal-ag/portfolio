"use client";

import Link from "next/link";

import { motion } from "motion/react";

import ScrollText from "@/components/ScrollText";
import { Section, SectionHeading } from "@/components/Section";
import Spotlight from "@/components/Spotlight";
import TrafficLights from "@/components/TrafficLights";
import { summary } from "@/content";
import { fadeUp } from "@/lib/motion";

export default function Summary() {
  const [lead, ...rest] = summary.paragraphs;

  return (
    <Section id="about">
      <SectionHeading eyebrow="about">About me</SectionHeading>
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
        <motion.div variants={fadeUp} className="space-y-6 lg:col-span-7">
          <ScrollText
            text={lead}
            className="text-lg leading-relaxed text-text sm:text-xl md:text-2xl md:leading-relaxed"
          />
          {rest.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg leading-relaxed text-text-muted"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href="/khushal-agarwal"
            className="link-accent font-editor inline-flex min-h-11 items-center text-sm underline underline-offset-4"
          >
            More about me
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="lg:col-span-5">
          <Spotlight className="editor-panel">
            <div className="flex items-center gap-2 border-b border-border bg-bg-elevated px-4 py-2.5">
              <TrafficLights />
              <span className="font-editor ml-2 text-xs text-text-dim">
                profile.ts
              </span>
            </div>
            <dl className="divide-y divide-border px-5">
              {summary.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid gap-1 py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-4"
                >
                  <dt className="font-editor text-xs text-text-subtle">
                    {fact.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-text">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Spotlight>
        </motion.div>
      </div>
    </Section>
  );
}
