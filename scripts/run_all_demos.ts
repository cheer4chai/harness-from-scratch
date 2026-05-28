import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const phasesDir = join(root, "phases");

const phaseDirs = readdirSync(phasesDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => join(phasesDir, entry.name))
  .sort();

function findDemoFiles(dir: string): string[] {
  const demos: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      demos.push(...findDemoFiles(path));
    } else if (entry.isFile() && entry.name === "demo.ts" && path.endsWith("/code/demo.ts")) {
      demos.push(path);
    }
  }
  return demos.sort();
}

const missing = phaseDirs.filter((phaseDir) => {
  const files = readdirSync(join(phaseDir, "code"), { withFileTypes: true });
  return !files.some((entry) => entry.name === "demo.ts" && entry.isFile());
});

if (missing.length > 0) {
  for (const phaseDir of missing) {
    console.log(`missing demo: ${relative(root, join(phaseDir, "code", "demo.ts"))}`);
  }
  process.exit(1);
}

const demos = findDemoFiles(phasesDir);

for (const demo of demos) {
  console.log(`==> ${relative(root, demo)}`);
  const result = spawnSync(
    process.execPath,
    ["--import", "tsx", demo],
    {
      cwd: dirname(demo),
      encoding: "utf8",
    },
  );
  if (result.stdout.trim()) {
    console.log(result.stdout.trim());
  }
  if (result.status !== 0) {
    if (result.stderr.trim()) {
      console.error(result.stderr.trim());
    }
    console.error(`failed: ${relative(root, demo)}`);
    process.exit(result.status ?? 1);
  }
}

console.log(`ran ${demos.length} demos`);
