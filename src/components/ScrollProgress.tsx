"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  // No spring: it kept a per-frame animation running after every scroll.
  const { scrollYProgress: scaleX } = useScroll();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[calc(var(--z-nav)+1)] h-0.5 w-full origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
