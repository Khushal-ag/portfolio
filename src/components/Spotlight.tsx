"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

/** Card with a soft accent glow that follows the mouse (mouse pointers only). */
export default function Spotlight({
  children,
  className = "",
}: SpotlightProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const background = useMotionTemplate`radial-gradient(280px circle at ${x}px ${y}px, var(--color-spot), transparent 70%)`;

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <div
      onPointerMove={onPointerMove}
      className={`group/spot relative overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden
        style={{ background }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
