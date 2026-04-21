import { hero, site } from "@/content";

export function OgCardMarkup() {
  const host = new URL(site.urlBare).hostname;

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0f0f10",
        backgroundImage:
          "linear-gradient(145deg, #0f0f10 0%, #18181b 45%, #0f0f10 100%)",
        padding: 56,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#ededed",
            letterSpacing: -1.5,
            lineHeight: 1.1,
          }}
        >
          {site.author.name}
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#3ecf8e",
            fontWeight: 600,
            letterSpacing: -0.5,
          }}
        >
          {site.author.title}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(237, 237, 237, 0.78)",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          {hero.tagline}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div
          style={{
            fontSize: 20,
            color: "rgba(237, 237, 237, 0.55)",
            lineHeight: 1.4,
            maxWidth: 920,
          }}
        >
          Open to full-time & freelance · India (onsite) & remote worldwide
        </div>
        <div
          style={{
            fontSize: 17,
            color: "rgba(237, 237, 237, 0.38)",
            letterSpacing: 0.2,
          }}
        >
          {host}
        </div>
      </div>
    </div>
  );
}
