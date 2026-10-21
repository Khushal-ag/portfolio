"use client";

import { useRef } from "react";

import { motion, useInView } from "motion/react";

import { fadeUp, stagger } from "@/lib/motion";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/** Reveals on scroll: descendants with `variants={fadeUp}` animate in sequence. */
export function Section({ id, className = "", children }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger()}
      className={`section-padding scroll-mt-20 ${className}`}
    >
      <div className="section-container">{children}</div>
    </motion.section>
  );
}

type SectionHeadingProps = {
  /** Short mono label above the heading, e.g. "about". */
  eyebrow: string;
  children: React.ReactNode;
};

export function SectionHeading({ eyebrow, children }: SectionHeadingProps) {
  return (
    <motion.div variants={fadeUp} className="mb-10 md:mb-12">
      <p
        className="font-editor mb-3 text-xs tracking-wide text-accent"
        aria-hidden
      >
        {`// ${eyebrow}`}
      </p>
      <h2 className="section-heading text-text">{children}</h2>
    </motion.div>
  );
}
