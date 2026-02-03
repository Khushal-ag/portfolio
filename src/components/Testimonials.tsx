"use client";

import { useRef } from "react";
import { testimonials } from "@/data";
import { motion, useInView } from "framer-motion";

import { Section, SectionHeading } from "@/components/Section";

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="testimonials" reveal={false}>
      <div ref={ref}>
        <SectionHeading>
          Kind words from <span className="text-accent">satisfied clients</span>
        </SectionHeading>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={card}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="card-surface p-6 md:p-8"
            >
              <p className="text-text-muted leading-relaxed md:text-lg">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="bg-accent-dim font-heading text-accent flex size-10 items-center justify-center rounded-full font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="text-text font-semibold not-italic">
                    {t.name}
                  </cite>
                  <p className="text-text-subtle text-sm">{t.title}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
