"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[calc(var(--z-nav)+1)] h-0.5 w-full origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
