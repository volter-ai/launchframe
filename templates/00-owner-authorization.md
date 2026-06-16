# <Product> — Owner Authorization

Fill this before the agent attempts autonomous launch preparation. The goal is to front-load authority so the agent can work without interrupting until the final launch gate.

## Authorization Status

- Status: not requested / approved / approved with limits / rejected
- Approver:
- Date:
- Launch mode authorized: tabletop dry run / real dress rehearsal / public launch
- Final approver for irreversible public actions:

## Allowed Side Effects

| Side effect | Allowed? | Limit / condition | Evidence location |
|---|---|---|---|
| Read public sources | yes / no | | |
| Inspect local source | yes / no | | |
| Create local files | yes / no | | |
| Create remote repo | yes / no | | |
| Publish staging package/listing | yes / no | | |
| Publish public package/listing | yes / no | | |
| Buy domain | yes / no | Max spend: | |
| Deploy public site | yes / no | | |
| Submit marketplace/app review | yes / no | | |
| Post to HN/Reddit/social | no | Final approval required | |

Rules:

- If a side effect is not explicitly allowed here, treat it as disallowed.
- For a tabletop dry run, simulate external actions and record the exact command/form/action that would happen.
- For a real dress rehearsal, stop before public posting and before any owner-disallowed spend/publish action.
- For a public launch, still stop at `12-owner-approval-gate.md` until final approval is recorded.

## Credential Paths

Record where credentials can be found or how access is obtained. Do not put secret values here.

| Provider | Credential path or browser profile | Agent usable? | Scope/limits |
|---|---|---|---|
| GitHub | | yes / no | |
| npm / PyPI / Docker / registry | | yes / no | |
| Registrar | | yes / no | |
| Hosting | | yes / no | |
| Marketplace/app store | | yes / no | |
| Email/capture/CRM | | yes / no | |

## Claim Boundaries

Claims the agent must not make:

- 

Claims that require explicit owner approval before publication:

- Pricing or paid plan details.
- Security, encryption, privacy, compliance, legal, health, finance, or performance claims.
- Roadmap commitments.
- Enterprise readiness, production readiness, SLA, support, or customer/user claims.

Automatic downgrade rule: if evidence is missing, weaken the claim or record it as blocked. Do not ask piecemeal unless no safe weaker claim exists.

## Product Truth Required Before Autonomy

These are facts, not copy. If they are unknown, record them as upfront intake blockers before autonomous launch prep starts.

| Fact | Owner-provided answer | Source/evidence |
|---|---|---|
| What the product actually does | | |
| What it explicitly does not do | | |
| Primary user | | |
| Primary proof/demo path | | |
| Data read or transmitted | | |
| Network access behavior | | |
| Telemetry/analytics/crash reporting | | |
| Security/privacy/performance/accessibility claims allowed | | |
| Business model and pricing posture | | |
| License choice | | |
| Support/security contact | | |

## Safe Default Registry

Use these defaults when the owner has not specified otherwise. Record every default in `PENDING.md` as defaulted, not blocked.

| Area | Safe default |
|---|---|
| Analytics / telemetry | Out of scope; do not claim "no telemetry" unless source/network behavior is verified. |
| Paid plan / pricing | Do not publish pricing; say free OSS only if license/package state proves it. |
| Security/privacy/compliance | Avoid strong claims; describe only observed behavior and docs. |
| Performance/accessibility | Avoid comparative or absolute claims unless evidence is reproducible. |
| Domain | Optional unless owner selected it or the site is the primary launch target. |
| Community | Optional; do not advertise Discord/Slack unless it exists and has conduct/support paths. |
| HN/Reddit/social | Draft and rehearse only; final posting requires approval and a human-appropriate account. |
| Unsupported distribution surface | Mark out of scope rather than leaving it as a blocker. |

## Selected Distribution Surfaces

Each selected surface must have a matching row in `00-org-context.json` under `distribution_surfaces[]` and a completed module under `surfaces/`.

| Surface | Scope | Module | Owner approval needed before final action? |
|---|---|---|---|
| | required / optional / out of scope | | yes / no |

## Final Approval Expectation

The agent should proceed autonomously until `12-owner-approval-gate.md` is complete or until all remaining work is blocked by missing authority, credentials, or product facts.
