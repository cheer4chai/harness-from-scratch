import { execFileSync } from "node:child_process";

type Check = {
  name: string;
  command: string[];
  expected: string;
};

function runCheck(check: Check): boolean {
  const [binary, ...args] = check.command;
  if (!binary) {
    throw new Error("empty command");
  }
  const observed = execFileSync(binary, args, { encoding: "utf8" }).trim();
  console.log(`check: ${check.name}`);
  console.log(`observed: ${observed}`);
  return observed === check.expected;
}

const check: Check = {
  name: "node expression",
  command: [process.execPath, "-e", "console.log(2 + 2)"],
  expected: "4",
};

if (!runCheck(check)) {
  throw new Error("verification failed");
}

console.log("verification: PASS");
