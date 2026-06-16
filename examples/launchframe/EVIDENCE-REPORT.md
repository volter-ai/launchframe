# Launchframe Evidence Report

Generated: 2026-06-16

## Distribution Surface Evidence

| Surface | Type | Scope | State | Proof Type | Command URL Or Artifact | Actual Result | Status | Date | Reviewer |
|---|---|---|---|---|---|---|---|---|---|
| npm_package | npm | required | published | Registry URL | https://www.npmjs.com/package/launchframe-cli/v/0.1.0-beta.10 | npm tags latest and beta point to 0.1.0-beta.10 | verified | 2026-06-16 | Codex |
| docs_site | docs_site | required | published | URL | https://launchframe.site/ | GitHub Pages and HTTPS are live for the landing page and Startup Pilot page | verified | 2026-06-16 | Codex |
| trust_privacy | trust_privacy | required | verified | Source inspection | rg -n telemetry src bin docs README.md | CLI source has no telemetry or app network calls; docs disclose no CLI telemetry | verified | 2026-06-16 | Codex |
| Show HN pre-submit rehearsal | channel | required | deferred | Review artifact | `launch-context/DRESS-REHEARSAL-REPORT.md` | HN submit form reached and stopped before submit; account suitability remains human-reviewed | deferred | 2026-06-16 | Codex |

## Side-Effect Evidence

| Action | Surface / target | Authorization | Credential path | Evidence | Result |
|---|---|---|---|---|---|
| Repo public/private transition | `volter-ai/launchframe` | approved | GitHub auth | https://github.com/volter-ai/launchframe | Public repo live |
| Package/listing publish or staging publish | `launchframe-cli@0.1.0-beta.10` | approved | ignored `.env` `NPM_TOKEN` via temporary npmrc | https://www.npmjs.com/package/launchframe-cli/v/0.1.0-beta.10 | Published |
| Site/docs deploy | `launchframe.site` | approved | GitHub Pages workflow | https://launchframe.site/ | Live over HTTPS |
| Domain/DNS/HTTPS | `launchframe.site` | approved | Name.com key path in ignored local env | https://launchframe.site/ | Live over HTTPS |
| Public posting rehearsal | HN and Reddit | final approval required | human account / owner-assisted | `launch-context/DRESS-REHEARSAL-REPORT.md` | Stopped before final submit |

## Required Manual Evidence

| Gate | Evidence | Result |
|---|---|---|
| Repo | https://github.com/volter-ai/launchframe | Public |
| Website/docs | https://launchframe.site/ | Live over HTTPS |
| Capture path | https://launchframe.site/startup-pilot.html | Tally form and notification verified during dress rehearsal |
| Policy/trust docs | `docs/PRIVACY.md`, `docs/TERMS.md`, `docs/TELEMETRY.md`, `SECURITY.md` | Present and aligned with current CLI behavior |
| Adversarial review | `11-adversarial-review.md` | Go with HN account suitability as human pre-submit check |
| Owner approval gate | `12-owner-approval-gate.md` | Completed for beta release surfaces; public posting remains not approved |
| Launch context validation | `launchframe validate examples/launchframe` | Expected to pass in CI |

## Notes

Evidence authenticity is still human-reviewed. Launchframe validation checks structure, selected surface completion, and concrete evidence fields; it does not independently prove every external statement.
