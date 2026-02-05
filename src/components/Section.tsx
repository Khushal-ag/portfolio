"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const defaultReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
};

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  reveal?: boolean;
  stagger?: boolean;
};

export function Section({
  id,
  className = "",
  children,
  reveal = true,
  stagger = false,
}: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (!reveal) {
    return (
      <section
        id={id}
        ref={ref}
        className={`section-padding scroll-mt-20 ${className}`}
      >
        <div className="section-container">{children}</div>
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={
        stagger
          ? {
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }
          : {}
      }
      className={`section-padding scroll-mt-20 ${className}`}
    >
      <motion.div
        className="section-container"
        variants={
          stagger
            ? {
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }
            : {}
        }
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.h2
      variants={defaultReveal}
      className={`section-heading text-text mb-12 text-center font-(--font-heading) md:mb-14 ${className}`}
    >
      {children}
    </motion.h2>
  );
}

/** File-path style label for sections (e.g. ~/portfolio/about.ts) */
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

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <motion.div
      variants={{
        ...defaultReveal,
        hidden: { ...defaultReveal.hidden, transition: { delay } },
      }}
      transition={defaultReveal.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
