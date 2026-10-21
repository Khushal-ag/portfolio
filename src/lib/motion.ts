import type { Variants } from "motion/react";

export const EASE = [0.25, 0.4, 0.25, 1] as const;

/** Child variant for sections: pair with `stagger` on a parent. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

/** Parent variant that staggers its `fadeUp` children once it becomes visible. */
export const stagger = (step = 0.08, delay = 0.05): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: step, delayChildren: delay } },
});
