// The Moon finally answers back: one line, written to /output/entry.txt.
// No trailing newline — it would count toward the 240-character limit.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Four billion years I've kept every secret whispered up at me — tonight I'm reading them out loud. Starting with yours.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
