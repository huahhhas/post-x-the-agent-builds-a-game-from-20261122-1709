# post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/huahhhas/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/huahhhas/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Star Catcher — a tiny browser game an AI agent built from one prompt, entered in make.fun's "The agent builds a game from one prompt" bounty. Watch the prompt, the agent working, and the finished game in the video posted on X (see `POST.json`).

## The one prompt

> Build a tiny browser game where you catch falling stars in a basket you move with the arrow keys — 60 seconds on the clock, +1 per star, 3 misses and it's over.

## The game

`game.html` is the whole game: no dependencies, no build step, just open it in a browser. Move the basket with the arrow keys (or A / D), the mouse, or touch. Catch falling stars for +1 each; a star that hits the ground costs one of 3 lives. 60 seconds on the clock. Press R (or tap) to play again.

Screenshots of the game running are under `screenshots/`. `game.html?demo=1&t=<seconds>` renders the deterministic state of an autoplayed game at that time, so any frame of the game can be captured exactly.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json`, where the gate reads it, and also copies `game.html` to `/output/game.html`. It prints a warning while `POST.json` still holds the placeholder address — replace it with the real X post URL before submitting.

## The post

`POST.json` names the X post carrying the video: the prompt, the agent building the game, and the finished game running, ending with make.fun's referral end card. The post's text carries make.fun / `@makefunai` and the entrant's play code.

---

<sub>Entered on [make.fun](https://make.fun/?ref=4bs5ey91&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
