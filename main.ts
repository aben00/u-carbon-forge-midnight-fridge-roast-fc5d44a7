// Midnight Fridge Roast — make.fun entry (program/v1)
// Writes one line roasting a smart fridge that refuses to open after
// midnight, to /output/entry.txt. Deterministic: same bytes every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge locks at midnight to save me from myself — brave words from a box whose entire job is guarding cake at 2 a.m.";

// Gate: 1–200 chars, single line, UTF-8, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1–200`);
}
if (ENTRY.trim().length === 0 || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

// Read-back check: what landed on disk must be exactly what we wrote.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY + "\n") {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt (read-back OK)`);
