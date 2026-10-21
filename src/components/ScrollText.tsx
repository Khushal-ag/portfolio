"use client";

import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import type { MotionValue } from "motion/react";

type WordProps = {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
};

function Word({ word, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}
    </motion.span>
  );
}

/** Paragraph whose words brighten one by one as it scrolls through the viewport. */
export default function ScrollText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {reduceMotion ?
        text
      : words.map((word, i) => (
          <span key={`${word}-${i}`}>
            <Word
              word={word}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            />{" "}
          </span>
        ))
      }
    </p>
  );
}
