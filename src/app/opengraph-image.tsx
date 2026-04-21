import { ImageResponse } from "next/og";

import { OgCardMarkup } from "@/lib/og-image";

export const alt =
  "Khushal Agarwal — Full-Stack Developer (TypeScript, Go, AI, Web3)";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<OgCardMarkup />, {
    ...size,
  });
}
