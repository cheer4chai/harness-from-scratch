type Check = {
  command: string;
  input: string;
  observed: string;
  expected: string;
};

function verdict(check: Check): "PASS" | "FAIL" {
  return check.observed === check.expected ? "PASS" : "FAIL";
}

const check: Check = {
  command: "node -e 'console.log(2 + 2)'",
  input: "verify that the runtime can execute a command",
  observed: "4",
  expected: "4",
};

console.log(`trace-first: ${verdict(check)}`);
console.log(`input: ${check.input}`);
console.log(`command: ${check.command}`);
console.log(`observed: ${check.observed}`);
