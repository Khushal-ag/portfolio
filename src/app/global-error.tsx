"use client";

import { useEffect } from "react";

import "@/styles/globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body
        className="bg-bg text-text font-(--font-body) antialiased"
        style={{
          backgroundColor: "#0f0f10",
          color: "#ededed",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          className="flex min-h-dvh flex-col items-center justify-center px-4"
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            className="rounded-lg border shadow-xl"
            style={{
              width: "100%",
              maxWidth: "32rem",
              backgroundColor: "#1c1c1f",
              borderColor: "rgba(255,255,255,0.06)",
              borderLeftWidth: "3px",
              borderLeftColor: "#3ecf8e",
              padding: "2rem 1.5rem",
              boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                color: "#5c6370",
                fontFamily: "ui-monospace, monospace",
              }}
            >
              {"// Critical error"}
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#3ecf8e",
              }}
            >
              Application error
            </p>
            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "0.875rem",
                color: "rgba(237,237,237,0.7)",
                lineHeight: 1.5,
              }}
            >
              {error?.message ||
                "Something went wrong. Please refresh or try again."}
            </p>
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <button
                type="button"
                onClick={() => reset()}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem 1.5rem",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: "#0f0f10",
                  background: "#3ecf8e",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
              >
                Try again
              </button>
              <a
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.75rem 1.5rem",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: "#ededed",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "0.375rem",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Back home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
