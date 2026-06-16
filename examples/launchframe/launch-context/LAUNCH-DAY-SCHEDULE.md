# Launchframe Launch-Day Schedule

Launch date: Wednesday, 2026-06-17.

Exact Show HN posting hour is selected on launch day based on operator availability. Use this schedule relative to `H`, the public Show HN post time.

## Tabletop Dry Run

No external side effects. Use this to prove the sequence is coherent.

| Step | Action | Done |
|---|---|---|
| 1 | Read this schedule and confirm the launch mode is dry run, dress rehearsal, simulation, or real launch. |  |
| 2 | Confirm surfaces: site, npm, GitHub repo, issues, security docs, Startup Pilot form. |  |
| 3 | Confirm credential source: ignored `.env` in this repo. Do not print tokens. |  |
| 4 | Confirm go/no-go criteria. |  |
| 5 | Confirm no public post is submitted during rehearsal. |  |
| 6 | Record gaps in `PENDING.md`. |  |

## Live Dress Rehearsal

Run against live surfaces, but do not submit public posts.

| Offset | Action | Done |
|---|---|---|
| D-45 | Run `npx launchframe-cli init workspace` in a temp directory. |  |
| D-40 | Run `npx launchframe-cli validate workspace`. |  |
| D-35 | Open live site, npm page, GitHub repo, issues, security docs, and Startup Pilot form. |  |
| D-25 | Verify Tally capture/notification evidence. |  |
| D-20 | Open final HN, Reddit, and social drafts without posting. |  |
| D-10 | Walk the first-hour monitoring loop. |  |
| D+0 | Record and fix any public-user gaps before simulation or real launch. |  |

## Launch-Day Simulation

Run once before the real post. Use live surfaces, but do not submit public posts.

| Offset | Action | Done |
|---|---|---|
| S-60 | Confirm one operator is available for the full simulated first hour. |  |
| S-55 | Run `npx launchframe-cli init workspace` in a temp directory. |  |
| S-50 | Run `npx launchframe-cli validate workspace`. |  |
| S-45 | Open live site, npm page, GitHub repo, issues, security docs, and Startup Pilot form. |  |
| S-35 | Verify final HN title, URL target, and first-comment draft. |  |
| S-30 | Verify Reddit/social drafts without posting. |  |
| S-20 | Submit a test Startup Pilot capture or verify current notification evidence. |  |
| S-10 | Walk the first-hour monitoring loop: HN, issues, npm install, site, Tally. |  |
| S+0 | Record any gaps. If gaps affect public users, fix before posting. |  |

## Real Launch Schedule

| Offset | Action | Done |
|---|---|---|
| H-90 | Run clean public install smoke from a temp directory. |  |
| H-75 | Verify `https://launchframe.site/`, npm package, GitHub repo, CI, issues, security docs, and Startup Pilot form. |  |
| H-60 | Freeze HN title, URL, first comment, and support copy. |  |
| H-45 | Prepare HN submission form; do not submit yet. |  |
| H-30 | Prepare founder/social support post; do not publish yet. |  |
| H-15 | Confirm operator has 4-6 hours available for replies and issue triage. |  |
| H-0 | Post Show HN. |  |
| H+5 | Post first comment if needed for context, install command, or disclosure. |  |
| H+15 | Verify HN link, site, npm install, and GitHub issue path. |  |
| H+30 | Triage first comments and fix critical docs/link issues only. |  |
| H+60 | Check Tally captures and notification path. |  |
| H+120 | Decide whether to post Reddit natively or defer. |  |
| H+240 | Write same-day notes: questions asked, objections, signups, issues, fixes. |  |

## Go / No-Go

Go only if:

- `npx launchframe-cli init workspace` works from a clean temp directory.
- `npx launchframe-cli validate workspace` passes.
- Site, npm, GitHub repo, issues, and Startup Pilot form are reachable.
- The operator can monitor replies for at least four hours after posting.
- No unresolved public-user blocker is open.

No-go if:

- Install fails.
- Site/package/repo links disagree.
- Capture form or notification path is broken.
- A secret or private/internal URL is found in public collateral.
