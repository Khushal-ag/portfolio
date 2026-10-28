import type { SiteContent } from "@/lib/cms/types";

import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";

/** Page chrome shared by every route: skip link, scroll progress and nav. */
export default function SiteShell({
  site,
  children,
}: {
  site: SiteContent;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-bg">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[calc(var(--z-nav)+2)] rounded-md bg-accent px-3 py-2 text-sm font-medium text-on-accent opacity-0 focus:opacity-100 focus:ring-2 focus:ring-text focus:outline-none"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav site={site} />
      {children}
    </div>
  );
}
