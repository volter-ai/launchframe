# Launchframe — Owner Authorization

## Authorization Status

- Status: approved_with_limits
- Approver: Aaron
- Date: 2026-06-16
- Launch mode authorized: pre_submit_ready public beta preparation
- Final approver for irreversible public actions: Aaron

## Allowed Side Effects

| Side effect | Allowed? | Limit / condition | Evidence location |
|---|---|---|---|
| Read public sources | yes | Public launch research only | `10-worklog.md` |
| Inspect local source | yes | Launchframe repo | `10-worklog.md` |
| Create local files | yes | Repo-local launch assets and templates | Git history |
| Create remote repo | yes | `volter-ai/launchframe` | GitHub repo |
| Publish staging package/listing | yes | npm beta/staging tags allowed | npm evidence |
| Publish public package/listing | yes | `launchframe-cli` npm package | npm evidence |
| Buy domain | yes | Max spend: 15 USD | `00-external-prereqs.md` |
| Deploy public site | yes | GitHub Pages for `launchframe.site` | Pages workflow |
| Submit marketplace/app review | no | No marketplace surface for Launchframe beta | not_applicable |
| Post to HN/Reddit/social | no | Final approval required | `12-owner-approval-gate.md` |

## Credential Paths

| Provider | Credential path or browser profile | Agent usable? | Scope/limits |
|---|---|---|---|
| GitHub | gh auth and GitHub Actions for `volter-ai/launchframe` | yes | Repo, releases, Pages |
| npm | ignored repo-local `.env` `NPM_TOKEN`; temporary npmrc for publish | yes | `launchframe-cli` publish only |
| Registrar | ignored `.env` Name.com key path | yes | `launchframe.site` only |
| Hosting | GitHub Pages workflow | yes | `examples/launchframe/site` |
| Marketplace/app store | not_applicable | no | No marketplace surface |
| Email/capture/CRM | Tally form and notification settings | owner-assisted | Startup Pilot capture |

## Claim Boundaries

Claims the agent must not make:

- Automated launch success.
- Automatic truth verification of every public claim.
- Security compliance, production readiness, or enterprise readiness.
- Vote solicitation, comment automation, or bot-like launch behavior.

Claims that require explicit owner approval before publication:

- Pricing or paid plan details.
- Security, encryption, privacy, compliance, legal, health, finance, or performance claims.
- Roadmap commitments.
- Enterprise readiness, production readiness, SLA, support, or customer/user claims.

Automatic downgrade rule: if evidence is missing, weaken the claim or record it as blocked. Do not ask piecemeal unless no safe weaker claim exists.

## Product Truth Required Before Autonomy

| Fact | Owner-provided answer | Source/evidence |
|---|---|---|
| What the product actually does | Node CLI scaffolds and validates OSS launch workspaces | README, `src/` |
| What it explicitly does not do | Does not post, automate comments/votes, or prove every claim true | README |
| Primary user | OSS developer-tool maintainers | README |
| Primary proof/demo path | Public `npx` scaffold and validation from clean temp directory | Evidence report |
| Data read or transmitted | CLI reads/writes local files only | Source inspection |
| Network access behavior | No CLI network calls except npm installation by user tooling | Source inspection |
| Telemetry/analytics/crash reporting | None in CLI | `docs/TELEMETRY.md` |
| Security/privacy/performance/accessibility claims allowed | Only observed local/no-telemetry behavior; no compliance or production claims | Trust review |
| Business model and pricing posture | Free OSS CLI plus optional startup pilot/custom support | Site and docs |
| License choice | Apache-2.0 | `LICENSE` |
| Support/security contact | GitHub Issues and GitHub Security Advisories | `SECURITY.md` |

## Selected Distribution Surfaces

| Surface | Scope | Module | Owner approval needed before final action? |
|---|---|---|---|
| npm_package | required | `surfaces/package-npm.md` | yes |
| docs_site | required | `surfaces/docs-site.md` | yes |
| trust_privacy | required | `surfaces/trust-privacy.md` | yes |

## Final Approval Expectation

The agent should proceed autonomously until `12-owner-approval-gate.md` is complete or until all remaining work is blocked by missing authority, credentials, or product facts.
