"use client";

/**
 * Full-bleed section that sticks while the next section scrolls over it.
 * Code-editor style: quote as a comment block.
 */
export default function StickyBreak() {
  return (
    <div className="relative h-[40vh] min-h-[280px]">
      <div className="sticky top-0 flex h-[40vh] min-h-[280px] items-center justify-center overflow-hidden border-y border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,var(--color-accent-dim),transparent_60%)]" />
        <div className="font-editor relative z-10 max-w-2xl px-6 text-left text-sm text-[var(--color-comment)] md:text-base">
          <p className="text-text-muted not-italic">
            <span className="text-[var(--color-comment)]">{"// "}</span>
            Building scalable systems and polished experiences, one commit at a
            time.
          </p>
        </div>
      </div>
    </div>
  );
}
