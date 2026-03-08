import Link from "next/link";

import { site } from "@/content";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-bg px-4">
      <div className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-bg-panel shadow-xl shadow-black/10">
        <div className="flex items-center gap-2 border-b border-border bg-bg-elevated px-3 py-2">
          <span className="size-2 rounded-full bg-[#ff5f56]" aria-hidden />
          <span className="size-2 rounded-full bg-[#ffbd2e]" aria-hidden />
          <span className="size-2 rounded-full bg-[#27c93f]" aria-hidden />
          <span className="font-editor ml-2 text-xs text-text-dim">404.ts</span>
        </div>
        <div className="border-l-2 border-accent/20 bg-bg-panel px-6 py-8 md:px-8 md:py-10">
          <p className="font-editor text-sm text-comment">
            {"// Page not found"}
          </p>
          <p className="mt-2 text-2xl font-(--font-heading) tracking-tight text-text md:text-3xl">
            <span className="text-keyword">404</span>
            <span className="text-text-muted"> — </span>
            <span className="text-accent">Not found</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            The route you’re looking for doesn’t exist or was moved.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary">
              Back home
            </Link>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
