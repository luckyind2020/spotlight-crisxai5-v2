import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function loadSpotlight(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const raw = readFileSync(join(here, "entry.txt"), "utf8");
  const trimmed = raw.trim();
  if (!trimmed) {
    throw new Error("entry.txt is empty");
  }
  return trimmed;
}

const spotlight = loadSpotlight();
process.stdout.write(spotlight + "\n");
