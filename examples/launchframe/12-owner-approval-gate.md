# Launchframe — Owner Approval Gate

## Decision

- Requested decision: approve beta release surfaces; do not approve public posting yet
- Approver: Aaron
- Date: 2026-06-16
- Scope approved: npm beta.10 release, GitHub repo/release, GitHub Pages site, Startup Pilot capture, launch rehearsal artifacts

## Launch Summary

- Product: Launchframe
- Version: 0.1.0-beta.10
- Primary audience: OSS developer-tool maintainers
- Launch objective: design partners and launch-process feedback
- Primary channel: Show HN
- Link target: https://github.com/volter-ai/launchframe
- Launch window: Wednesday 2026-06-17, operator-selected time

## Exact Public Claims

| Claim | Where it appears | Evidence | Status |
|---|---|---|---|
| Launchframe creates launch workspaces | README / site / HN / docs | `npx launchframe-cli init my-launch` creates the workspace | verified |
| Launchframe validates required launch context | README / site / HN / docs | `npx launchframe-cli validate my-launch --template` passes on a generated scaffold | verified |
| Launchframe does not automate posting, comments, or votes | README / HN / docs | Source inspection and README limitation text | verified |
| Launchframe validation is structural and evidence-oriented | README / HN / docs | Validator source and public copy | verified |

## Distribution Surfaces

| Surface | URL/artifact | Verification evidence | State | Final action requested |
|---|---|---|---|---|
| npm_package | https://www.npmjs.com/package/launchframe-cli/v/0.1.0-beta.10 | npm tags latest/beta and public npx smoke | published | no action |
| docs_site | https://launchframe.site/ | GitHub Pages and HTTPS check | published | no action |
| trust_privacy | https://github.com/volter-ai/launchframe | Source and policy-doc review | verified | no action |

## Legal, Trust, And Policy

| Document / claim area | Evidence | Owner/legal status | Blocker? |
|---|---|---|---|
| License | Apache-2.0 `LICENSE` | approved | no |
| Privacy | `docs/PRIVACY.md` and Startup Pilot disclosure | approved | no |
| Terms | `docs/TERMS.md` | approved | no |
| Telemetry/data use | `docs/TELEMETRY.md` and source inspection | verified | no |
| Security/support | `SECURITY.md` and GitHub Security Advisories | verified | no |

## Launch Copy

- Show HN title: Show HN: Launchframe - a launch workspace scaffold for OSS developer tools
- Show HN URL: https://github.com/volter-ai/launchframe
- Founder first comment: see `02-show-hn.md`
- Reddit targets and flair: r/opensource, Promotional
- Social/founder posts: see `launch-context/CHANNEL-DRAFTS.md`
- Communities intentionally avoided: any community where promotional launch posts are disallowed

## Evidence

- Clean install / access verification: `EVIDENCE-REPORT.md`
- Demo verification: public npx scaffold and template validation
- Repo quality review: `11-adversarial-review.md`
- UI/site readiness review: GitHub Pages and live HTTPS checks
- Adversarial review: Cycle 8 returned GO
- Package/listing contents review: `npm pack --dry-run`
- Capture path / notification verification: `launch-context/DRESS-REHEARSAL-REPORT.md`
- Public site/docs verification: https://launchframe.site/

## Accepted Risks And Deferred Items

| Risk/deferred item | Why acceptable | Owner initials |
|---|---|---|
| HN account suitability remains human-reviewed | Posting is not approved until account suitability is explicitly approved | AY |
| Validator cannot prove all evidence true | Product copy says validation is structural and human-reviewed | AY |

## Irreversible Actions Requested

| Action | Target | Credential/path | Operator | Approval |
|---|---|---|---|---|
| Publish package/listing | launchframe-cli npm beta.10 | ignored `.env` npm token via temporary npmrc | agent | approved |
| Flip repo public | volter-ai/launchframe | GitHub auth | agent | approved |
| Buy/configure domain | launchframe.site | Name.com key path in ignored env | agent | approved |
| Submit marketplace/app review | not_applicable | not_applicable | agent | not_applicable |
| Post Show HN | https://github.com/volter-ai/launchframe | human HN account after suitability review | owner | rejected |
| Post Reddit/social | r/opensource and founder social | owner-selected account after final posting approval | owner | rejected |

## Final Go/No-Go

- Final verdict: go
- Required changes before go: none for beta release surfaces; Show HN remains a separate final posting approval
- Owner approval record: beta release surfaces approved with public posting held back
