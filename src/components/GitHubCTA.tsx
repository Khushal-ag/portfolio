import { FaGithub } from "react-icons/fa6";

import ExternalLink from "@/components/ExternalLink";
import FadeIn from "@/components/FadeIn";
import { githubCta, site } from "@/content";

export default function GitHubCTA() {
  return (
    <FadeIn className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-lg border border-border bg-bg-panel px-6 py-5 text-center">
      <p className="text-sm text-text-muted md:text-base">{githubCta.blurb}</p>
      <ExternalLink
        href={site.links.github}
        className="link-accent font-editor inline-flex items-center gap-2 text-sm font-medium"
      >
        <FaGithub className="size-4" aria-hidden />
        {githubCta.label}
      </ExternalLink>
    </FadeIn>
  );
}
