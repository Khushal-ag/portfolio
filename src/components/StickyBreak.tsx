"use client";

/**
 * Full-bleed section that sticks while the next section scrolls over it.
 * Code-editor style: quote as a comment block.
 */
export default function StickyBreak() {
  return (
    <div className="relative h-[40vh] min-h-[280px]">
      <div className="border-border sticky top-0 flex h-[40vh] min-h-[280px] items-center justify-center overflow-hidden border-y">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,var(--color-accent-dim),transparent_60%)]" />
        <div className="font-editor text-comment relative z-10 max-w-2xl px-6 text-left text-sm md:text-base">
          <p className="text-text-muted not-italic">
            <span className="text-comment">{"// "}</span>
            Building scalable systems and polished experiences, one commit at a
            time.
          </p>
        </div>
      </div>
    </div>
  );
}
