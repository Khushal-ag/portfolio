"use client";

/**
 * Full-bleed section that sticks while the next section scrolls over it.
 * Creates a "scroll-over" effect for visual variety.
 */
export default function StickyBreak() {
  return (
    <div className="relative h-[40vh] min-h-[280px]">
      <div className="sticky top-0 flex h-[40vh] min-h-[280px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,var(--color-accent-dim),transparent_60%)]" />
        <p className="relative z-10 max-w-2xl px-6 text-center text-xl font-[var(--font-heading)] font-medium italic text-text-muted md:text-2xl">
          Building scalable systems and polished experiences, one commit at a
          time.
        </p>
      </div>
    </div>
  );
}
