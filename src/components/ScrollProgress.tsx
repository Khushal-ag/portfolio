"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top bar – thin horizontal progress */}
      <motion.div
        className="fixed top-0 left-0 z-[calc(var(--z-nav)+1)] h-[2px] origin-left bg-accent"
        style={{ scaleX: smoothProgress }}
      />
      {/* Vertical scrollbar (editor-style, right edge) */}
      <div
        className="pointer-events-none fixed top-0 right-0 z-[calc(var(--z-nav)-1)] hidden h-full w-1.5 md:block"
        aria-hidden
      >
        <div className="h-full w-full rounded-l bg-border-muted" />
        <motion.div
          className="absolute top-0 left-0 w-full origin-top rounded-l bg-accent opacity-70"
          style={{ scaleY: smoothProgress }}
        />
      </div>
    </>
  );
}
