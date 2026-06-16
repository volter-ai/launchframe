# Launchframe — Master Launch Checklist

Status legend: done · ready/in-progress · blocked · launch-day

## 0. Current Launch Dashboard

- Mode: real dress rehearsal for a public beta launch
- Overall state: ready for beta release surfaces; Show HN posting still gated
- Link target: https://github.com/volter-ai/launchframe
- Package/install target: `npx launchframe-cli init my-launch`
- Site target: https://launchframe.site/
- Selected distribution surfaces: npm_package, docs_site, trust_privacy
- Public posting status: not posted
- Next three actions:
  1. Keep npm/site/repo smoke checks green.
  2. Reconfirm owner availability before public posting.
  3. Use an established HN account or wait until `aaronyetc` is appropriate.

### Hard Blockers

| Blocker | Required for | Owner | Next action | Status |
|---|---|---|---|---|
| HN account suitability | Show HN posting | Aaron | Approve an established account or wait for normal account history | pending |

### Scope Decisions

| Surface | Scope | Chosen provider/value | Why | Current state |
|---|---|---|---|---|
| Repo | required | GitHub `volter-ai/launchframe` | Primary launch target | public |
| Distribution surfaces | required | npm, docs site, trust/privacy | CLI launch proof | verified |
| Package registry | required | npm `launchframe-cli` | One-command install | published |
| Website hosting | required | GitHub Pages | Public marketing/capture surface | live |
| Custom domain | required | `launchframe.site` | Public site target | live |
| HTTPS | required | GitHub Pages HTTPS | Trust requirement | live |
| Support/security email | required | GitHub Issues and Security Advisories | OSS support path | configured |
| Social/community | optional | HN/Reddit/social drafts | Launch channels only | rehearsed |
| Analytics | out of scope | none | Avoid extra data handling in beta | not used |

### Evidence Summary

| Gate | Latest evidence | Result | Date |
|---|---|---|---|
| Repo | https://github.com/volter-ai/launchframe | Public | 2026-06-16 |
| Site | https://launchframe.site/ | Live over HTTPS | 2026-06-16 |
| Package install | Public `npx` smoke | Passed | 2026-06-16 |
| Domain/DNS | `launchframe.site` | Live | 2026-06-16 |
| HTTPS | `https://launchframe.site/` | Live | 2026-06-16 |
| Deployed copy/metadata | Pages workflow | Passed | 2026-06-16 |
| Launch copy | `02-show-hn.md` and channel drafts | Ready but not posted | 2026-06-16 |

## 1. Intake: Facts Gathered First

- [x] `00-owner-authorization.md` defines allowed side effects, credentials, claims, and selected surfaces.
- [x] `00-org-context.json` contains factual org/product/surface/policy fields.
- [x] `00-brand-context.md` contains Launchframe positioning and launch narrative.
- [x] `SURFACE-PROFILES.md` was used to select npm, docs_site, and trust_privacy.
- [x] `00-external-prereqs.md` records account and credential readiness.
- [x] `PENDING.md` tracks the remaining HN account suitability gate.
- [x] Owner-reviewed defaults are captured in the final approval gate.
- [x] `distribution_surfaces[]` is filled and each required surface has a module.
- [x] Optional/unsupported surfaces are not advertised in public copy.

## 2. Decisions

- Product name: Launchframe
- License: Apache-2.0
- Repo: https://github.com/volter-ai/launchframe
- Package/install command: `npx launchframe-cli init my-launch`
- Launch objective: design partners and feedback
- Primary audience: OSS developer-tool maintainers
- Primary launch channel: Show HN
- Link target: GitHub repo
- Launch date/time: Wednesday 2026-06-17, operator-selected

## 3. Readiness Gates

- [x] Initial owner authorization is complete.
- [x] Public launch copy does not invent monetization, hosted-service, or automation claims.
- [x] Startup Pilot signup path and notification were verified during dress rehearsal.
- [x] One-command public install works.
- [x] Every required distribution surface has a completed module and evidence.
- [x] Public package/repo were scrubbed by pack and repo review.
- [x] README explains product, mechanism, install, and limitations.
- [x] Adversarial review returned GO with residual human-reviewed posting gates.
- [x] License, security, contributing, conduct, issue templates, privacy, terms, and telemetry docs are present.
- [x] Final owner approval packet is complete for beta release surfaces.
- [ ] Founder/operator availability and HN account suitability are confirmed immediately before public posting.

## 4. Surfaces

- [x] Domain checked, purchased, configured, and verified.
- [x] npm package checked, published, and verified.
- [x] GitHub repo target checked and public.
- [x] Support/security contacts configured through GitHub.
- [x] Real dress rehearsal evidence recorded.
- [x] Signed-browser requirement documented for account-console work.

## 5. Assets

- [x] Mood-board/design learnings captured in workflow docs.
- [x] Site assets and final folds collected under `site/assets`.
- [x] OG/social image included.
- [x] README/site demo asset included.

## 6. Channel Artifacts

- [x] Show HN title, URL, and first comment drafted.
- [x] Reddit/social drafts prepared.
- [x] Launch-day schedule and simulation steps prepared.
- [x] Stop-before-submit rehearsal recorded.
