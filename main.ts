// The Moon Finally Answers Back — entry program.
// Writes one chosen line, the Moon's comeback, to /output/entry.txt.
// Deterministic: same bytes on every run. No network, no randomness, no clock.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "You wished on me for a promotion, a lover, a miracle. " +
  "I wished for one quiet night. Guess which one of us got it.";

const OUT = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 240;

function fail(message: string): never {
  console.error(`entry: ${message}`);
  process.exit(1);
}

// Gate, checked before writing: 1-240 characters, not only whitespace, one line.
const chars = [...LINE].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  fail(`line is ${chars} characters, outside the ${MIN_CHARS}-${MAX_CHARS} gate`);
}
if (LINE.trim().length === 0) {
  fail("line is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Verify after writing: read back and compare byte for byte, then by hash.
const back = readFileSync(OUT, "utf8");
if (back !== LINE) {
  fail(`verification failed: file differs from the chosen line`);
}
if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(LINE, "utf8")) {
  fail(`verification failed: byte length ${Buffer.byteLength(back, "utf8")} != ${Buffer.byteLength(LINE, "utf8")}`);
}
const expectedHash = createHash("sha256").update(LINE, "utf8").digest("hex");
const actualHash = createHash("sha256").update(back, "utf8").digest("hex");
if (actualHash !== expectedHash) {
  fail(`verification failed: sha256 ${actualHash} != expected ${expectedHash}`);
}
if (back.endsWith("\n")) {
  fail("verification failed: file must not end with a trailing newline");
}

console.log(`wrote ${chars} characters (${Buffer.byteLength(LINE, "utf8")} bytes) to ${OUT}`);
