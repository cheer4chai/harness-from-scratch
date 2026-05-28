import { mkdtempSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";

function inspectRepo(root: string): string[] {
  return readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => join(root, entry.name))
    .sort();
}

function planChange(files: string[]): string {
  const names = files.map((file) => basename(file)).join(", ");
  return `update summary for ${names}`;
}

function editSummary(root: string, plan: string): string {
  const target = join(root, "SUMMARY.md");
  writeFileSync(target, `# Summary\n\n${plan}\n`, "utf8");
  return target;
}

function verify(target: string): boolean {
  return readFileSync(target, "utf8").includes("update summary");
}

const root = mkdtempSync(join(tmpdir(), "hfs-capstone-"));
writeFileSync(join(root, "README.md"), "# Demo\n", "utf8");
const files = inspectRepo(root);
const plan = planChange(files);
const target = editSummary(root, plan);

if (!verify(target)) {
  throw new Error("capstone verification failed");
}

console.log("capstone: inspect -> plan -> edit -> verify");
console.log(readFileSync(target, "utf8").trim().split("\n").at(-1));
