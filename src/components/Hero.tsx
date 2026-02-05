"use client";

import Image from "next/image";
import Link from "next/link";
import { hero as heroContent, site } from "@/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const parallaxBg = useTransform(scrollY, [0, 400], [0, 80]);
  const parallaxFade = useTransform(scrollY, [0, 300], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-20">
      {/* Background */}
      <motion.div
        style={{ y: parallaxBg }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,var(--color-accent-dim),transparent_50%)]"
      />
      <motion.div
        style={{ y: parallaxBg }}
        className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-bg)_60%)]"
      />

      <motion.div
        style={{ opacity: parallaxFade }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center"
      >
        {/* Avatar */}
        <motion.div variants={item} className="mb-8 flex justify-center">
          <motion.div
            className="border-border-strong bg-bg-panel relative size-28 overflow-hidden rounded-xl border shadow-lg shadow-black/20 md:size-32"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 40px -15px rgba(62, 207, 142, 0.15)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image
              src={heroContent.avatar}
              alt={heroContent.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 112px, 128px"
            />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.p
          variants={item}
          className="text-accent font-editor mb-2 text-sm font-medium tracking-wide md:text-base"
        >
          {heroContent.greeting}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-text mb-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
        >
          {heroContent.title}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-text-muted mb-10 max-w-md text-base md:text-lg"
        >
          {heroContent.subtitle}
        </motion.p>

        {/* Code block – editor window style */}
        <motion.div
          variants={item}
          className="bg-bg-panel border-border w-full max-w-lg overflow-hidden rounded-lg border shadow-xl shadow-black/10"
        >
          {/* Window bar */}
          <div className="border-border bg-bg-elevated flex items-center gap-2 border-b px-3 py-2">
            <span className="size-2 rounded-full bg-[#ff5f56]" aria-hidden />
            <span className="size-2 rounded-full bg-[#ffbd2e]" aria-hidden />
            <span className="size-2 rounded-full bg-[#27c93f]" aria-hidden />
            <span className="font-editor text-text-dim ml-2 text-xs">
              intro.ts
            </span>
          </div>
          <div className="border-accent/20 bg-bg-panel border-l-2 px-4 py-4 md:px-5 md:py-5">
            <div className="font-editor space-y-2 text-left text-sm leading-relaxed md:text-[0.9375rem]">
              <p className="text-comment">
                {"// "}
                {heroContent.greeting}
              </p>
              <p>
                <span className="text-keyword">const</span>{" "}
                <span className="text-accent">role</span>{" "}
                <span className="text-keyword">=</span>{" "}
                <span className="text-string">
                  &quot;{heroContent.subtitle}&quot;
                </span>
                <span className="text-keyword">;</span>
              </p>
              <p className="text-comment">
                {"// "}
                {heroContent.tagline}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTAs – primary focus */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Resume
          </a>
          <a
            href={
              site.github?.href ??
              site.links?.github?.href ??
              "https://github.com/Khushal-ag"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <FaGithub className="size-4" />
            GitHub
          </a>
          <Link href="#contact" className="btn-ghost">
            Get in touch
          </Link>
        </motion.div>

        {/* Contact – secondary, compact */}
        <motion.div
          variants={item}
          className="text-text-muted mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={`mailto:${site.author.mail}`}
            className="hover:text-accent font-editor flex items-center gap-2 rounded-md px-2 py-1 text-xs transition"
          >
            <FaEnvelope className="size-3.5 shrink-0" />
            <span className="hidden max-w-[180px] truncate sm:inline md:max-w-none">
              {site.author.mail}
            </span>
          </a>
          <span className="text-text-dim">·</span>
          <a
            href={`tel:${site.author.phone?.replace(/\s/g, "")}`}
            className="hover:text-accent font-editor flex items-center gap-2 rounded-md px-2 py-1 text-xs transition"
          >
            <FaPhone className="size-3.5 shrink-0" />
            <span>{site.author.phone}</span>
          </a>
          <span className="text-text-dim">·</span>
          <a
            href={site.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent font-editor flex items-center gap-2 rounded-md px-2 py-1 text-xs transition"
          >
            <FaLinkedin className="size-3.5 shrink-0" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        style={{ opacity: scrollIndicatorOpacity }}
        className="text-text-muted hover:text-accent font-editor absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-0.5 text-[10px] tracking-widest uppercase transition"
        aria-label="Scroll to content"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
        >
          <HiChevronDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
