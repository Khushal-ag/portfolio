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

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      variants={fadeUp}
      className="section-heading mb-10 font-(--font-heading) text-text md:mb-12"
    >
      {children}
    </motion.h2>
  );
}

export function SectionFileLabel({
  file,
  className = "",
}: {
  file: string;
  className?: string;
}) {
  return (
    <p className={`file-path mb-4 ${className}`} aria-hidden>
      {file}
    </p>
  );
}
