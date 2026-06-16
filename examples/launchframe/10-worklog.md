# Launchframe — Launch Worklog

## Key Events

| Date | Event | Evidence | Result |
|---|---|---|---|
| 2026-06-16 | Published beta.10 | npm registry | published |
| 2026-06-16 | Created GitHub release | `v0.1.0-beta.10` | created |
| 2026-06-16 | Verified public npx smoke | temp workspace | passed |
| 2026-06-16 | Verified CI and Pages | GitHub Actions | passed |
| 2026-06-16 | Ran adversarial review cycle | Cycle 8 result | GO |
| 2026-06-16 | Added validator-backed dogfood workspace | `examples/launchframe` | passed |

## Reversals And Decisions

| Decision | Reason | Result |
|---|---|---|
| Do not post from newly-created HN account | Avoid bot-like launch behavior | Show HN remains gated |
| Keep npm token available | Needed for future updates | Stored only in ignored local env |
| Treat validation as structural | Avoid overclaiming truth verification | Public copy downgraded |
