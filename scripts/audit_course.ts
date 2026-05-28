import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const phasesDir = join(root, "phases");

const failures: string[] = [];

for (const phase of readdirSync(phasesDir, { withFileTypes: true })) {
  if (!phase.isDirectory()) {
    continue;
  }
  const phaseDir = join(phasesDir, phase.name);
  const lessonDirs = readdirSync(phaseDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d{2}-/.test(entry.name))
    .map((entry) => join(phaseDir, entry.name));

  for (const lessonDir of lessonDirs) {
    const required = [
      "docs/en.md",
      "docs/zh-CN.md",
      "code/demo.ts",
    ];
    for (const path of required) {
      if (!existsSync(join(lessonDir, path))) {
        failures.push(`missing ${join(lessonDir, path)}`);
      }
    }

    const outputFiles = existsSync(join(lessonDir, "outputs"))
      ? readdirSync(join(lessonDir, "outputs"))
      : [];
    if (!outputFiles.some((file) => file.endsWith(".md") && !file.endsWith(".zh-CN.md"))) {
      failures.push(`missing English output in ${lessonDir}`);
    }
    if (!outputFiles.some((file) => file.endsWith(".zh-CN.md"))) {
      failures.push(`missing Chinese output in ${lessonDir}`);
    }
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(failure);
  }
  process.exit(1);
}

console.log("course audit: PASS");
