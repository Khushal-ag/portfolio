"use client";

import { motion } from "motion/react";

import { Section, SectionHeading } from "@/components/Section";
import Spotlight from "@/components/Spotlight";
import { testimonials } from "@/content";
import { fadeUp, stagger } from "@/lib/motion";

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <Section id="testimonials">
      <SectionHeading>
        Kind words from <span className="text-accent">satisfied clients</span>
      </SectionHeading>
      <motion.div
        variants={stagger(0.1)}
        className="grid gap-5 md:grid-cols-12"
      >
        {featured && (
          <motion.div variants={fadeUp} className="md:col-span-7 md:row-span-2">
            <Spotlight className="editor-panel h-full">
              <blockquote className="flex h-full flex-col justify-between p-6 md:p-10">
                <p className="text-xl leading-relaxed text-text md:text-2xl md:leading-relaxed">
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent-dim font-heading font-semibold text-accent">
                    {featured.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="font-semibold text-text not-italic">
                      {featured.name}
                    </cite>
                    <p className="text-sm text-text-subtle">{featured.title}</p>
                  </div>
                </footer>
              </blockquote>
            </Spotlight>
          </motion.div>
        )}
        {rest.map((t) => (
          <motion.div key={t.name} variants={fadeUp} className="md:col-span-5">
            <Spotlight className="card-surface h-full">
              <blockquote className="p-5">
                <p className="text-sm leading-relaxed text-text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-3 text-sm">
                  <cite className="font-semibold text-text not-italic">
                    {t.name}
                  </cite>
                  <span className="text-text-subtle"> · {t.title}</span>
                </footer>
              </blockquote>
            </Spotlight>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
