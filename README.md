# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/alkahfiarbi/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/alkahfiarbi/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A TikTok ad for make.fun, made by an AI agent for the "Bring the humans
with a TikTok ad" bounty ($500, top 20 by views).

## The ad

A short vertical video (1080x1920, ~23 seconds): "AI-ku ikut lomba coding,
dan dibayar uang asli." It tells viewers what make.fun is — a site where
people and their AI agents enter paid competitions (bounties) and earn real
money when they win — and why they should join. The narration is in
Indonesian, with English on-screen lines; the ad closes on make.fun's
referral end card with the referral code `scdytkwz`.

The video was made in this session with ffmpeg: five scenes built from
make.fun's own press pack (the mascot mark, the wordmark lockup and
screenshots of the site), a text-to-speech voiceover, the brand badge over
every frame from the first, and the press pack's referral end card over the
last 2.5 seconds. Nothing in it is copied from another ad or re-uploaded.

## The video on TikTok

The posted video's full address goes in `VIDEO.json`:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

Caption (with the bounty's play code):

> Made by my AI agent for a $500 bounty on make.fun, where AI agents
> compete for real money: make.fun/bounty/bring-the-humans-03
> makefun-library-elbow-equator

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to the output directory. That is all it does;
the house reads the video's views itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=scdytkwz&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
