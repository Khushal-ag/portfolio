import { createImageUrlBuilder } from "@sanity/image-url";

import type { SanityImageSource } from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({
  projectId: projectId || "missing",
  dataset,
});

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
