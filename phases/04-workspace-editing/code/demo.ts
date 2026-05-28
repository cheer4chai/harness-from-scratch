import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

function replaceOnce(path: string, before: string, after: string): string {
  const original = readFileSync(path, "utf8");
  if (!original.includes(before)) {
    throw new Error(`missing text: ${before}`);
  }
  const updated = original.replace(before, after);
  writeFileSync(path, updated, "utf8");
  return [
    "--- before",
    "+++ after",
    `-${original.trimEnd()}`,
    `+${updated.trimEnd()}`,
  ].join("\n");
}

const target = join(mkdtempSync(join(tmpdir(), "hfs-edit-")), "app.ts");
writeFileSync(target, "console.log('old')\n", "utf8");
const diff = replaceOnce(target, "old", "new");
const updated = readFileSync(target, "utf8");

if (!updated.includes("console.log('new')")) {
  throw new Error("edit failed");
}

console.log("workspace-editing: patched");
console.log(diff.split("\n").at(-1));
