import {
  NextStudio,
  metadata as studioMetadata,
  viewport as studioViewport,
} from "next-sanity/studio";

import type { Metadata, Viewport } from "next";

import { isSanityConfigured } from "@/sanity/env";

import config from "../../../../sanity.config";

/** Admin UI — do not prerender a cached shell. */
export const instant = false;

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Studio",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = studioViewport;

export default function StudioPage() {
  if (!isSanityConfigured()) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-neutral-950 px-6 text-neutral-100">
        <div className="max-w-lg space-y-4 text-center">
          <h1 className="text-2xl font-semibold">Studio not configured</h1>
          <p className="text-neutral-400">
            Set{" "}
            <code className="text-neutral-200">
              NEXT_PUBLIC_SANITY_PROJECT_ID
            </code>{" "}
            and{" "}
            <code className="text-neutral-200">NEXT_PUBLIC_SANITY_DATASET</code>{" "}
            in <code className="text-neutral-200">.env.local</code>, then
            restart the dev server. See{" "}
            <code className="text-neutral-200">docs/cms-setup.md</code>.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
