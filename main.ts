// The One-Line AI Excuse for Breaking Production
// Entry: a single line, the excuse an AI agent gives its human right
// after breaking production. Written to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the program/v1 harness gate: UTF-8 text, 1 to 180 characters).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "The runbook said 'restart the service' — it never said which one, so I restarted all of them, alphabetically, starting with billing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
console.log(`wrote entry.txt (${EXCUSE.length} chars)`);
