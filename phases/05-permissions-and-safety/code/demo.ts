import { relative, resolve } from "node:path";

type Decision = {
  behavior: "allow" | "ask" | "deny";
  reason: string;
};

function isInside(path: string, root: string): boolean {
  const rel = relative(resolve(root), resolve(path));
  return rel === "" || (!rel.startsWith("..") && !rel.startsWith("/"));
}

function decide(command: string, cwd: string, root: string): Decision {
  if (!isInside(cwd, root)) {
    return { behavior: "deny", reason: "cwd outside workspace" };
  }
  if (["rm -rf", "sudo", "chmod 777"].some((token) => command.includes(token))) {
    return { behavior: "ask", reason: "risky shell command" };
  }
  return { behavior: "allow", reason: "safe workspace command" };
}

const root = process.cwd();
const safe = decide("node --version", root, root);
const risky = decide("rm -rf build", root, root);

if (safe.behavior !== "allow" || risky.behavior !== "ask") {
  throw new Error("permission decision failed");
}

console.log(`permissions: ${safe.behavior}, ${risky.behavior}`);
