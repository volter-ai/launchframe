# <Product> — Launch-Day Runbook

One operator. Keep this executable.

Hard rule: never solicit upvotes.

## Go / No-Go Preflight

- [ ] Clean install works.
- [ ] Demo works.
- [ ] Repo is public-ready.
- [ ] Package is publish-ready.
- [ ] README and social image are final.
- [ ] Founder/operator can monitor for 4-6 hours.

## T-3 Days

- [ ] Newsletter heads-ups.
- [ ] Builder DMs.
- [ ] Awesome-list PRs.
- [ ] Final demo asset.

## T-1 Day

- [ ] Tabletop dry run.
- [ ] Cold-machine dress rehearsal.
- [ ] Finalize HN title and first comment.
- [ ] Finalize social and Reddit drafts.
- [ ] Confirm launch window.
- [ ] Run launch-day simulation against live surfaces without posting publicly.

## Tabletop Dry Run

Run this before touching external systems. The goal is to find missing steps, credentials, owners, and fallback paths while the cost of correction is still low.

- [ ] Read this runbook top to bottom.
- [ ] Confirm exact launch mode: tabletop dry run / live dress rehearsal / public launch.
- [ ] Confirm required surfaces and out-of-scope surfaces.
- [ ] Confirm credential paths without printing secret values.
- [ ] Confirm go/no-go criteria.
- [ ] Confirm rollback notes for broken install, broken site, broken capture, bad bug, or accidental leak.
- [ ] Record gaps in `PENDING.md`.

## Live Dress Rehearsal

Run against real deployed surfaces and go all the way up to the final public submit/post action. Do not click the final submit/post buttons.

- [ ] Run clean install from a temp directory.
- [ ] Run the demo or validation command from a temp directory.
- [ ] Open live site, npm/package page, GitHub repo, CI, issues, docs, security policy, and capture form.
- [ ] Verify capture notification path or recheck prior evidence.
- [ ] Open the HN submission form, fill the final title and URL, and stop before final submit.
- [ ] Prepare the HN first comment and stop before posting.
- [ ] Open the Reddit post composer, fill subreddit/flair/link/copy, and stop before final submit.
- [ ] Open the social/founder post composer, fill final copy/link/media, and stop before final publish.
- [ ] Walk through first-hour monitoring: public post, comments, issues, install path, site uptime, capture notifications.
- [ ] Commit fixes before moving to real launch.

## Launch-Day Simulation

Run this before the real public post. Use live repo/site/package/capture links and fill the real posting forms, but do not click final submit/post.

- [ ] Pick a simulated post time and assign one operator.
- [ ] Run clean install and demo from a temp directory.
- [ ] Fill final HN title, URL, and first comment, then stop before final submit/post.
- [ ] Fill Reddit and social composers, then stop before final submit/publish.
- [ ] Verify site, package, repo, issue tracker, security docs, and capture form.
- [ ] Verify notification path for signup/capture.
- [ ] Walk through the first-hour monitoring loop.
- [ ] Record gaps and fix them before posting.

## T-0

- [ ] H-90: final clean install and demo smoke.
- [ ] H-75: verify site, package, repo, CI, issue tracker, and capture form.
- [ ] H-60: freeze copy and links.
- [ ] H-45: prepare HN submission and first comment.
- [ ] H-30: prepare social/founder support post.
- [ ] H-0: post Show HN.
- [ ] H+5: post founder first comment if needed.
- [ ] H+0 to H+240: monitor HN, GitHub issues, npm install path, site uptime, and capture notifications.
- [ ] H+120 or later: post Reddit natively if still appropriate.
- [ ] H+240: write same-day notes and follow-up list.

## T+1 To T+7

- [ ] Publish technical article.
- [ ] Keep responding to issues/PRs.
- [ ] Track metrics.
- [ ] Write retro.

## Rollback

- Broken install:
- Bad bug:
- Accidental leak:
