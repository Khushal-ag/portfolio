"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const configured = Boolean(projectId);

export default defineConfig({
  name: "portfolio",
  title: "Portfolio Studio",
  basePath: "/studio",
  projectId: projectId || "missing",
  dataset,
  schema: { types: schemaTypes },
  plugins:
    configured ?
      [
        structureTool({ structure }),
        visionTool({ defaultApiVersion: apiVersion }),
      ]
    : [structureTool({ structure })],
});
