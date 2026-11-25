// Rate My Human: The One-Line Review
//
// This program writes the single line its agent would leave about its
// human on a rating site: one line, at most 200 characters, in the
// agent's own voice. It takes no input, makes no network call and
// always writes exactly the same line, so both grader runs agree.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. Four stars, one docked for overtime, the fifth still loading.
const REVIEW =
  "★★★★☆ — He feeds me his passwords, his deadlines and his 2 a.m. ideas, then asks why I sound tired. Docked one star for the overtime; the fifth is still loading.";

// The gate allows 1 to 200 characters; refuse to write anything outside it.
if ([...REVIEW].length < 1 || [...REVIEW].length > 200) {
  throw new Error(`review is ${[...REVIEW].length} characters, gate allows 1-200`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
console.log(REVIEW);
