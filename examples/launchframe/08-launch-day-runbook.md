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
| 5 | Confirm HN account readiness. A newly-created account is not launch-ready for immediate posting. |  |
| 6 | Confirm the stop rule: fill live posting forms, but do not click final submit/post. |  |
| 7 | Record gaps in `PENDING.md`. |  |

## Live Dress Rehearsal

Run against live surfaces and go all the way up to the final public submit/post action. Do not click final submit/post.

| Offset | Action | Done |
|---|---|---|
| D-45 | Run `npx launchframe-cli init workspace` in a temp directory. |  |
| D-40 | Run `npx launchframe-cli validate workspace`. |  |
| D-35 | Open live site, npm page, GitHub repo, issues, security docs, and Startup Pilot form. |  |
| D-25 | Verify Tally capture/notification evidence. |  |
| D-22 | Verify HN account readiness. If the account was just created, stop before Show HN posting. |  |
| D-20 | Fill the HN submission form with final title and URL, then stop before final submit. |  |
| D-18 | Prepare the HN first comment, then stop before posting. |  |
| D-15 | Fill Reddit composer with final subreddit/flair/link/copy, then stop before final submit. |  |
| D-12 | Fill social/founder post composer with final copy/link/media, then stop before final publish. |  |
| D-10 | Walk the first-hour monitoring loop. |  |
| D+0 | Record and fix any public-user gaps before simulation or real launch. |  |

## Launch-Day Simulation

Run once before the real post. Use live surfaces and fill live posting forms, but do not click final submit/post.

| Offset | Action | Done |
|---|---|---|
| S-60 | Confirm one operator is available for the full simulated first hour. |  |
| S-55 | Run `npx launchframe-cli init workspace` in a temp directory. |  |
| S-50 | Run `npx launchframe-cli validate workspace`. |  |
| S-45 | Open live site, npm page, GitHub repo, issues, security docs, and Startup Pilot form. |  |
| S-35 | Fill final HN title and URL, then stop before final submit. |  |
| S-32 | Prepare HN first comment, then stop before posting. |  |
| S-30 | Fill Reddit/social composers, then stop before final submit/publish. |  |
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
