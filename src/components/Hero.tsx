"use client";

import Image from "next/image";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { FaArrowRight, FaGithub } from "react-icons/fa6";

import ExternalLink from "@/components/ExternalLink";
import Magnetic from "@/components/Magnetic";
import TrafficLights from "@/components/TrafficLights";
import { hero, site } from "@/content";
import { techStack } from "@/lib/tech";

const nameWords = site.author.name.split(" ");

/** Decorative tech badges that float around the portrait. */
const badges = [
  { key: "nextjs", className: "-top-4 -left-2 sm:-left-6", delay: 0 },
  { key: "go", className: "top-1/3 -right-3 sm:-right-8", delay: 900 },
  { key: "openai", className: "bottom-3 -right-2 sm:-right-6", delay: 1800 },
] as const;

type Segment = readonly [text: string, className?: string];

const rawLines: readonly (readonly Segment[])[] = [
  [
    ["const", "text-keyword"],
    [" "],
    ["dev", "text-accent"],
    [" "],
    ["=", "text-keyword"],
    [" {"],
  ],
  [["  role: "], [`"${site.author.title}"`, "text-string"], [","]],
  [["  stack: "], [`"${site.author.subtitle}"`, "text-string"], [","]],
  [["  base: "], [`"${site.author.location}"`, "text-string"], [","]],
  [["  open: "], ["true", "text-number"], [","]],
  [["};"]],
];

const CHAR_MS = 28;
const LINE_GAP_MS = 140;
const TYPING_START_MS = 1000;

/** Each line types after the previous one; `chars` is measured from the text. */
const codeLines = rawLines.reduce<
  { segments: readonly Segment[]; chars: number; delay: number }[]
>((lines, segments) => {
  const chars = segments.reduce((n, [text]) => n + text.length, 0);
  const previous = lines.at(-1);
  const delay =
    previous ?
      previous.delay + previous.chars * CHAR_MS + LINE_GAP_MS
    : TYPING_START_MS;
  return [...lines, { segments, chars, delay }];
}, []);

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Cursor spotlight behind the whole hero.
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${spotX}px ${spotY}px, var(--color-spot), transparent 65%)`;

  // Pointer-driven tilt for the portrait stack.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [7, -7]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-9, 9]), {
    stiffness: 140,
    damping: 18,
  });

  function onSectionPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    spotX.set(e.clientX - rect.left);
    spotY.set(e.clientY - rect.top);
  }

  function onTiltMove(e: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onTiltLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <section
      onPointerMove={onSectionPointerMove}
      className="group/hero relative flex min-h-dvh items-center overflow-hidden px-4 pt-24 pb-24 sm:pt-28 sm:pb-20"
    >
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 size-[34rem] rounded-full bg-accent-dim blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-40 size-[32rem] rounded-full bg-accent-2-dim blur-[110px]"
      />
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
      />

      <div className="section-container relative z-10 grid grid-cols-[minmax(0,1fr)] items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="flex flex-col items-start text-left">
          <p
            className="fade-up font-editor mb-6 inline-flex items-center gap-2.5 rounded-full border border-border-strong bg-surface px-3.5 py-1.5 text-xs text-text-muted"
            style={{ "--d": "0ms" } as React.CSSProperties}
          >
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {hero.status}
          </p>

          <h1 className="mb-6 text-5xl leading-[1.02] font-bold tracking-tighter text-text sm:text-6xl xl:text-7xl">
            {nameWords.map((word, i) => (
              <span key={word}>
                <span
                  className={`reveal-word ${i === nameWords.length - 1 ? "text-gradient" : ""}`}
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {word}
                </span>
                {i < nameWords.length - 1 && " "}
              </span>
            ))}
          </h1>
          <h2 className="sr-only">{site.author.title}</h2>

          <p
            className="fade-up mb-10 max-w-md text-lg leading-relaxed text-text-muted md:text-xl"
            style={{ "--d": "150ms" } as React.CSSProperties}
          >
            {hero.blurb}
          </p>

          <div
            className="fade-up flex w-full items-center gap-3 sm:w-auto sm:flex-wrap"
            style={{ "--d": "250ms" } as React.CSSProperties}
          >
            <Magnetic className="min-w-0 flex-1 sm:flex-none">
              <ExternalLink
                href={site.resumeUrl}
                className="btn-primary w-full py-3.5 sm:w-auto sm:py-3"
              >
                Resume
                <FaArrowRight className="size-3" aria-hidden />
              </ExternalLink>
            </Magnetic>
            <Magnetic className="min-w-0 flex-1 sm:flex-none">
              <ExternalLink
                href={site.links.github}
                className="btn-ghost w-full py-3.5 sm:w-auto sm:py-3"
              >
                <FaGithub className="size-4" aria-hidden />
                GitHub
              </ExternalLink>
            </Magnetic>
          </div>
        </div>

        <div
          onPointerMove={onTiltMove}
          onPointerLeave={onTiltLeave}
          className="fade-up relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1100,
            }}
            className="relative sm:pb-36"
          >
            <div className="relative ml-auto aspect-square w-[82%] overflow-hidden rounded-3xl border border-border-strong bg-gradient-to-br from-accent/20 via-bg-panel to-accent-2/20 shadow-2xl ring-1 shadow-black/20 ring-accent/15 sm:aspect-[5/6] sm:w-[80%]">
              <Image
                src={site.author.avatar}
                alt={site.author.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 340px, 420px"
              />
            </div>

            <div className="relative -mt-14 w-full overflow-hidden rounded-xl border border-border-strong bg-bg-panel/95 shadow-2xl shadow-black/30 sm:absolute sm:bottom-0 sm:left-0 sm:mt-0 sm:w-max sm:max-w-[78%]">
              <div className="flex items-center gap-2 border-b border-border bg-bg-elevated px-3 py-2">
                <TrafficLights />
                <span className="font-editor ml-2 text-xs text-text-dim">
                  intro.ts
                </span>
              </div>
              <div className="font-editor px-3 py-4 text-[clamp(0.5625rem,2.9vw,0.6875rem)] leading-relaxed sm:pr-8 sm:pl-4 sm:text-xs">
                {codeLines.map((line, i) => (
                  <span
                    key={i}
                    className="type-line"
                    style={
                      {
                        "--chars": line.chars,
                        "--d": `${line.delay}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {line.segments.map(([text, className], j) => (
                      <span key={j} className={className}>
                        {text}
                      </span>
                    ))}
                    {i === codeLines.length - 1 && (
                      <span className="caret" aria-hidden />
                    )}
                  </span>
                ))}
              </div>
            </div>

            {badges.map(({ key, className, delay }) => {
              const { label, Icon } = techStack[key];
              return (
                <div
                  key={key}
                  aria-hidden
                  className={`float-y font-editor absolute hidden items-center gap-1.5 rounded-full border border-border-strong bg-bg-panel/90 px-3 py-1.5 text-xs text-text shadow-lg shadow-black/20 sm:flex ${className}`}
                  style={
                    {
                      "--d": `${delay}ms`,
                    } as React.CSSProperties
                  }
                >
                  <Icon className="size-3.5 text-accent" />
                  {label}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
