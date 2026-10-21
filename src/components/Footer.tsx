import Link from "next/link";

import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import CopyEmail from "@/components/CopyEmail";
import ExternalLink from "@/components/ExternalLink";
import FadeIn from "@/components/FadeIn";
import { footer, site } from "@/content";

const socialLinks = [
  { label: "GitHub", href: site.links.github, Icon: FaGithub },
  { label: "X", href: site.links.twitter, Icon: FaXTwitter },
  { label: "LinkedIn", href: site.links.linkedin, Icon: FaLinkedin },
  { label: "Instagram", href: site.links.instagram, Icon: FaInstagram },
] as const;

export default function Footer({ year }: { year: number }) {
  const words = footer.heading.split(" ");
  const lastWord = words.pop();

  return (
    <footer
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-bg-elevated"
    >
      <div aria-hidden className="bg-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-accent-dim blur-[120px]"
      />

      <div className="section-container relative z-10 py-24 text-center max-lg:pb-40 md:py-32">
        <FadeIn>
          <h2 className="mx-auto max-w-4xl text-4xl leading-[1.05] font-bold tracking-tighter text-text sm:text-6xl lg:text-7xl">
            {words.join(" ")} <span className="text-accent">{lastWord}</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.05}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            {footer.subtext}
          </p>
        </FadeIn>
        <FadeIn
          delay={0.1}
          className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center"
        >
          <CopyEmail />
          <ExternalLink
            href={site.resumeUrl}
            className="btn-ghost min-h-14 px-6 py-3.5 sm:min-h-0"
          >
            Resume
          </ExternalLink>
        </FadeIn>

        <FadeIn delay={0.15} className="mt-14">
          <p className="font-editor flex flex-wrap items-center justify-center text-xs text-text-muted">
            <a
              href={`mailto:${site.author.mail}`}
              className="inline-flex min-h-11 items-center px-3 hover:text-accent"
            >
              {footer.ctaText}
            </a>
            <span aria-hidden>·</span>
            <a
              href={`tel:${site.author.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-11 items-center px-3 hover:text-accent"
            >
              {site.author.phone}
            </a>
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <ExternalLink
                key={label}
                href={href}
                className="flex size-11 items-center justify-center rounded-full border border-border bg-bg-panel text-text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                aria-label={label}
              >
                <Icon className="size-[1.125rem]" aria-hidden />
              </ExternalLink>
            ))}
          </div>
        </FadeIn>

        <p className="mt-14 text-sm text-text-subtle">
          {footer.copyright.replace("{year}", String(year))} ·{" "}
          <Link
            href="/khushal-agarwal"
            className="inline-block py-3 underline underline-offset-2 hover:text-accent"
          >
            Full profile
          </Link>
        </p>
      </div>
    </footer>
  );
}
