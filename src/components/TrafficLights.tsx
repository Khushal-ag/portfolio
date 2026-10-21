/** Decorative window-control dots used by the editor-style panels. */
export default function TrafficLights() {
  return (
    <span className="flex shrink-0 items-center gap-1.5" aria-hidden>
      <span className="size-2 rounded-full bg-[#ff5f56]" />
      <span className="size-2 rounded-full bg-[#ffbd2e]" />
      <span className="size-2 rounded-full bg-[#27c93f]" />
    </span>
  );
}
