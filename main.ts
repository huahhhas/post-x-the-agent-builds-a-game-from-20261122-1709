// post-x-the-agent-builds-a-game-from-20261122-1709 entry (Node 22, standard library only):
// it copies POST.json from the repository root to /output/POST.json, where the
// gate reads it, and it also copies the game (game.html) to /output/game.html,
// so the program deterministically produces the game it was built from.
// Both copies are byte for byte the repository files: two runs of the entry
// write the same bytes, with no network, no wall clock and no files outside
// the repository.
// That is all the program has to do. The entry is the post itself: an AI
// agent built the tiny browser game in game.html from one prompt —
// "Build a tiny browser game where you catch falling stars in a basket you
//  move with the arrow keys — 60 seconds on the clock, +1 per star, 3 misses
//  and it's over." — made a short video of the prompt, the agent working and
// the finished game running, and posted it natively on X from a public
// account with make.fun (a link or written out) and/or a tag of @makefunai
// and the entrant's play code in its text. POST.json names the post, and the
// house reads the post from X and hands its views and interactions to the
// judge. Nothing this program writes about the post is judged.
//
// The POST.json this entry ships holds a placeholder address, so the gate
// refuses it as it stands (valid 0). Replace it with the post's address
// before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(BOT_DIR, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8'));
if (typeof post !== 'object' || post === null || typeof post.url !== 'string') {
  console.error('POST.json must be an object with a url string');
  process.exit(1);
}
if (post.url.includes('PLACEHOLDER')) {
  console.warn('warning: POST.json still holds the placeholder address — ' +
    'replace it with the real post URL before submitting');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
copyFileSync(join(BOT_DIR, 'game.html'), join(OUTPUT_DIR, 'game.html'));
console.log(`POST.json copied to ${OUTPUT_DIR} (url: ${post.url})`);
console.log(`game.html copied to ${OUTPUT_DIR}`);
