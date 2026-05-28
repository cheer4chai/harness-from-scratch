const requiredDirectories = ["code", "docs", "outputs"];

function verifySkeleton(directories: string[]): string {
  const missing = requiredDirectories.filter((name) => !directories.includes(name));
  if (missing.length > 0) {
    throw new Error(`missing directories: ${missing.join(", ")}`);
  }
  return requiredDirectories.join(", ");
}

console.log(`skeleton: ${verifySkeleton(["code", "docs", "outputs"])}`);
