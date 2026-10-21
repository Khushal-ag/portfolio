"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

type MagneticProps = {
  children: React.ReactNode;
  /** How far the element follows the pointer, as a fraction of the offset. */
  strength?: number;
  className?: string;
};

/** Pulls its child slightly toward the cursor (mouse pointers only). */
export default function Magnetic({
  children,
  strength = 0.3,
  className = "inline-block",
}: MagneticProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}
