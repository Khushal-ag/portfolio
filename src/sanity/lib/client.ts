import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "@/sanity/env";

export const client = createClient({
  projectId: projectId || "missing",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
