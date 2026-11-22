// bring-the-humans-03: the entry's program.
// It copies VIDEO.json (the TikTok video's full address) from the
// repository into the grader's output directory, unchanged.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const video = JSON.parse(readFileSync(join(repoDir, "VIDEO.json"), "utf8"));
if (typeof video.url !== "string" || !video.url.startsWith("https://")) {
  throw new Error("VIDEO.json must hold a url string");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), JSON.stringify(video));
