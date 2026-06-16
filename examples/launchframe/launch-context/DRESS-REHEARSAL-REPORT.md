# Launchframe Dress Rehearsal Report

Date: 2026-06-16

Mode: live dress rehearsal up to final submit/post, with no public posting.

## Completed

| Gate | Evidence | Result |
|---|---|---|
| Public install | `npx launchframe-cli init workspace` from a temp directory | Passed |
| Workspace validation | `npx launchframe-cli validate workspace` from a temp directory | Passed |
| npm package | `launchframe-cli@0.1.0-beta.5` | Published; `latest` and `beta` point to beta.5 |
| Site | `https://launchframe.site/` | Live over HTTPS |
| Startup Pilot page | `https://launchframe.site/startup-pilot.html` | Live over HTTPS |
| GitHub repo | `https://github.com/volter-ai/launchframe` | Public |
| CI/Pages | Latest GitHub Actions runs | Passing |
| HN account creation | `aaronyetc` | Created; credentials stored only in ignored `.env` |
| HN submit form | `https://news.ycombinator.com/submit` | Reached after account creation; no post submitted |
| Reddit submit form | `https://old.reddit.com/r/opensource/submit` | Reached signed in; title/body filled; no post submitted |

## Stop Points

- HN: stopped because `aaronyetc` was created during rehearsal and should not immediately post a launch.
- Reddit: stopped before final submit. r/opensource requires correct post flair; `Promotional` is the likely fit for a project announcement.
- Social/founder post: draft exists, but no live composer was filled in this pass.

## Open Blockers

| ID | Blocker | Blocks | Required resolution |
|---|---|---|---|
| LF-P-001 | HN account readiness | Show HN posting | Use an established human HN account, or wait until `aaronyetc` is appropriate for posting. |

## Notes

- No HN, Reddit, or social post was submitted.
- The HN submit form was inspected but not used to publish.
- The Reddit form was filled only as a rehearsal and not submitted.
- The current launch can continue with Reddit/social rehearsal, but Show HN should not proceed from the just-created HN account.
