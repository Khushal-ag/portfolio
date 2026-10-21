"use client";

import { motion } from "motion/react";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

/** One-shot fade and rise when scrolled into view. */
export default function FadeIn({
  children,
  delay = 0,
  className,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
