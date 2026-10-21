"use client";

import { motion } from "motion/react";

import { Section, SectionHeading } from "@/components/Section";
import Spotlight from "@/components/Spotlight";
import { testimonials } from "@/content";
import { fadeUp, stagger } from "@/lib/motion";

type Testimonial = (typeof testimonials)[number];

/**
 * One card style on phones (the swipe row). From `md` up the first quote is the
 * featured card and the rest are compact.
 */
function TestimonialCard({
  testimonial,
  featured,
}: {
  testimonial: Testimonial;
  featured: boolean;
}) {
  const { quote, name, title } = testimonial;

  return (
    <motion.div
      variants={fadeUp}
      className={`w-[88%] shrink-0 snap-start sm:w-[70%] md:w-auto md:shrink ${
        featured ? "md:col-span-7 md:row-span-2" : "md:col-span-5"
      }`}
    >
      <Spotlight
        className={
          featured ?
            "editor-panel h-full"
          : "card-surface h-full max-md:border-l-[3px] max-md:border-l-accent"
        }
      >
        <blockquote
          className={`flex h-full flex-col justify-between p-6 ${
            featured ? "md:p-10" : "md:p-5"
          }`}
        >
          <p
            className={`text-lg leading-relaxed text-text ${
              featured ?
                "md:text-2xl md:leading-relaxed"
              : "md:text-sm md:text-text-muted"
            }`}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <footer
            className={`mt-8 flex items-center gap-3 ${featured ? "" : "md:mt-3 md:block md:text-sm"}`}
          >
            <div
              className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-dim font-heading font-semibold text-accent ${featured ? "" : "md:hidden"}`}
            >
              {name.charAt(0)}
            </div>
            <div className={featured ? "" : "md:inline"}>
              <cite className="font-semibold text-text not-italic">{name}</cite>
              <p
                className={`text-sm text-text-subtle ${featured ? "" : "md:inline md:before:content-['_·_']"}`}
              >
                {title}
              </p>
            </div>
          </footer>
        </blockquote>
      </Spotlight>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading eyebrow="testimonials">
        What clients and teammates{" "}
        <span className="text-gradient">say about me</span>
      </SectionHeading>
      <motion.div
        variants={stagger(0.1)}
        className="-mx-5 flex snap-x snap-mandatory scroll-px-5 [scrollbar-width:none] items-stretch gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-12 md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} featured={i === 0} />
        ))}
      </motion.div>
    </Section>
  );
}
