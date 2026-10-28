/**
 * Regenerates plain-text snapshots for README / resume from the repo CMS fallback.
 * When Sanity is configured you can extend this to fetch live data instead.
 *
 * Usage: bun run cms:sync
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  snapshotEducation,
  snapshotHome,
  snapshotJobs,
  snapshotProjects,
  snapshotSite,
  snapshotSkills,
} from "../src/lib/cms/fallback";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "content-snapshot");

function main() {
  const site = snapshotSite();
  const home = snapshotHome();
  const jobs = snapshotJobs();
  const projects = snapshotProjects();
  const education = snapshotEducation();
  const skills = snapshotSkills();

  const lines: string[] = [];
  lines.push(`# ${site.author.name}`);
  lines.push("");
  lines.push(home.hero.blurb);
  lines.push("");
  lines.push("## Experience");
  for (const job of jobs) {
    lines.push(`### ${job.role} · ${job.company}`);
    if (job.period) lines.push(job.period);
    lines.push(job.summary);
    lines.push("");
  }
  lines.push("## Projects");
  for (const project of projects) {
    lines.push(`### ${project.title}`);
    lines.push(project.summary);
    if (project.siteLink) lines.push(project.siteLink);
    lines.push("");
  }
  lines.push("## Education");
  lines.push(
    `${education.degree}, ${education.school} (${education.years}) — ${education.cpi}`,
  );
  lines.push("");
  lines.push("## Skills");
  for (const group of skills) {
    lines.push(`- **${group.label}:** ${group.items.join(", ")}`);
  }
  lines.push("");

  mkdirSync(outDir, { recursive: true });
  const outReadme = path.join(outDir, "README.generated.md");
  const outTex = path.join(outDir, "resume.generated.txt");
  writeFileSync(outReadme, lines.join("\n"), "utf8");
  writeFileSync(
    outTex,
    [
      `% Auto-generated from CMS snapshot — ${new Date().toISOString().slice(0, 10)}`,
      `% Paste relevant sections into resume.tex as needed.`,
      "",
      ...lines,
    ].join("\n"),
    "utf8",
  );

  console.log(`Wrote ${outReadme}`);
  console.log(`Wrote ${outTex}`);
}

main();
