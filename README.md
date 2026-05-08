<p align="center">
  <img src="./assets/oowa/original/logo/svg/oowa_logo_primary.svg" width="92" alt="OOWA logo" />
</p>

<h1 align="center">OOWA Loveloop</h1>

<p align="center">
  A fictional K-pop fan signal community demo for rooms, safe concept creation, and vote-wall discovery.
</p>

<p align="center">
  <a href="https://luke-940.github.io/oowa-loveloop-demo/?fresh=readme#/home"><strong>Open live demo</strong></a>
  ·
  <a href="https://luke-940.github.io/oowa-loveloop-demo/?fresh=readme#/rooms">Rooms</a>
  ·
  <a href="https://luke-940.github.io/oowa-loveloop-demo/?fresh=readme#/studio">Studio</a>
  ·
  <a href="https://luke-940.github.io/oowa-loveloop-demo/?fresh=readme#/vote">Vote Wall</a>
</p>

---

## Demo Surface

OOWA Loveloop is a static product prototype for a fan-safe community experience around the fictional group **NOVAIR**.

| Area | What it demonstrates |
| --- | --- |
| **Feed** | Polished home feed, nightly drops, quick CTAs, and creator prompts. |
| **Rooms** | Topic rooms for brief-writing, visuals, styling, stage cuts, and beginner-safe help. |
| **Studio** | A structured fictional comeback concept builder with rights-safe constraints. |
| **Vote Wall** | Concept ranking and fandom-badge insight without ranking fandoms themselves. |

## Product Principles

- Fictional IP first: no real-idol likeness prompts or agency assets.
- Fan-safe by default: community copy avoids harassment, private-location sharing, and off-platform pressure.
- Lightweight review loop: teammates can inspect the demo from a public web link without local setup.
- App-only public repo: internal handoff docs, PDFs, backups, raw archives, and source-generation scripts are excluded.

## Live URL

```text
https://luke-940.github.io/oowa-loveloop-demo/
```

Recommended review route:

```text
https://luke-940.github.io/oowa-loveloop-demo/?fresh=review#/home
```

## Local Preview

```bash
python3 -m http.server 5182
```

Then open:

```text
http://localhost:5182/?fresh=local#/home
```

## Deployment

GitHub Pages is configured as:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

The app uses hash routing and relative assets, so it works under the GitHub Pages project path without a build step.
