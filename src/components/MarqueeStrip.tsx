import { allSkills } from "@/content";

/** Decorative skill ticker; the Skills section carries the accessible list. */
export default function MarqueeStrip() {
  const row = [...allSkills, ...allSkills];

  return (
    <section
      className="marquee relative overflow-hidden border-y border-border-muted bg-bg-panel/80 py-3"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-4">
        {row.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="font-editor shrink-0 rounded-md border border-border bg-bg px-3 py-1.5 text-xs text-text-muted"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
