"use client";

import Image from "next/image";
import Link from "next/link";
import { footer as footerContent } from "@/content";
import { socialMedia } from "@/data";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="section-padding scroll-mt-20 border-t border-border"
    >
      <div className="section-container text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="section-heading text-text"
        >
          {footerContent.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-3 text-text-muted"
        >
          {footerContent.subtext}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Link
            href={`mailto:${footerContent.contactEmail}`}
            className="btn-primary mt-6 inline-flex"
          >
            {footerContent.ctaText}
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {socialMedia.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface transition hover:border-accent/40 hover:bg-surface-hover"
              aria-label={item.label ?? "Social link"}
            >
              <Image
                src={item.img}
                alt={item.label ?? ""}
                width={22}
                height={22}
              />
            </a>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-sm text-text-subtle"
        >
          {footerContent.copyright}
        </motion.p>
      </div>
    </footer>
  );
}
