import type { SchemaTypeDefinition } from "sanity";

import { education } from "./education";
import { home } from "./home";
import { job } from "./job";
import { project } from "./project";
import { siteSettings } from "./siteSettings";
import { skills } from "./skills";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  home,
  skills,
  education,
  job,
  project,
  testimonial,
];
