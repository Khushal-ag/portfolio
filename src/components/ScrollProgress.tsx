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
        className="bg-accent fixed top-0 left-0 z-[calc(var(--z-nav)+1)] h-[2px] origin-left"
        style={{ scaleX: smoothProgress }}
      />
      {/* Vertical scrollbar (editor-style, right edge) */}
      <div
        className="fixed right-0 top-0 z-[calc(var(--z-nav)-1)] hidden h-full w-1.5 md:block pointer-events-none"
        aria-hidden
      >
        <div className="bg-border-muted h-full w-full rounded-l" />
        <motion.div
          className="bg-accent absolute left-0 top-0 w-full origin-top rounded-l opacity-70"
          style={{ scaleY: smoothProgress }}
        />
      </div>
    </>
  );
}
