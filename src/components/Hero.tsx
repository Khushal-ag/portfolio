"use client";

import Image from "next/image";
import Link from "next/link";
import { hero as heroContent, site } from "@/content";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const parallaxBg = useTransform(scrollY, [0, 400], [0, 120]);
  const parallaxFade = useTransform(scrollY, [0, 300], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 80], [1, 0]);

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      <motion.div
        style={{ y: parallaxBg }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--color-accent-dim),transparent)]"
      />
      <motion.div
        style={{ y: parallaxBg }}
        className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-bg)_70%)]"
      />

      <motion.div
        style={{ opacity: parallaxFade }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <motion.div variants={item} className="mb-8 flex justify-center">
          <motion.div
            className="border-border-strong ring-accent-dim relative size-28 overflow-hidden rounded-full border-2 ring-4 md:size-36"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Image
              src={heroContent.avatar}
              alt={heroContent.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 112px, 144px"
            />
          </motion.div>
        </motion.div>

        <motion.p
          variants={item}
          className="text-accent text-sm font-medium tracking-[0.25em] uppercase md:text-base"
        >
          {heroContent.greeting}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-text mt-3 text-4xl font-(--font-heading) font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          {heroContent.title}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-text-muted mt-2 text-lg md:text-xl"
        >
          {heroContent.subtitle}
        </motion.p>
        <motion.p
          variants={item}
          className="text-accent/90 mt-1 text-sm md:text-base"
        >
          {heroContent.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={`tel:${site.author.phone?.replace(/\s/g, "")}`}
            className="border-border bg-surface text-text-muted hover:border-accent/30 hover:text-text flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition"
          >
            <FaPhone className="text-accent size-3.5" />
            <span>{site.author.phone}</span>
          </a>
          <a
            href={`mailto:${site.author.mail}`}
            className="border-border bg-surface text-text-muted hover:border-accent/30 hover:text-text flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition"
          >
            <FaEnvelope className="text-accent size-3.5" />
            <span className="max-w-[180px] truncate md:max-w-none">
              {site.author.mail}
            </span>
          </a>
          <a
            href={site.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-surface text-text-muted hover:border-accent/30 hover:text-text flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition"
          >
            <FaLinkedin className="text-accent size-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="border-border bg-surface text-text-muted flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm">
            <FaMapMarkerAlt className="text-accent size-3.5" />
            <span>{site.author.location}</span>
          </span>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Download Resume
          </a>
          <Link href="#contact" className="btn-ghost">
            Get in touch
          </Link>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        style={{ opacity: scrollIndicatorOpacity }}
        className="text-text-muted hover:text-accent absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 transition"
        aria-label="Scroll to content"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <HiChevronDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
