# <Product> — Adversarial Review

Run this as a skeptical reviewer before public posting. The goal is to find the objections that HN, GitHub visitors, maintainers, and security-minded users will find anyway.

## Review Metadata

- Reviewer:
- Date:
- Product/version:
- Launch mode:
- Public link target:
- Launch type:
- Selected distribution surfaces:

## Summary

- Overall verdict: go / conditional go / no-go
- Hard blockers:
- Claims to weaken:
- Fixes made:
- Follow-up issues:

## Skeptical Visitor Review

- [ ] README first screen explains what this is.
- [ ] README first screen explains who it is for.
- [ ] README first screen shows the install/quickstart.
- [ ] README does not rely on vague launch/process language without mechanism.
- [ ] README says what the product does not do, if that prevents overclaiming.

Findings:

| Finding | Severity | Action |
|---|---|---|
| | blocker / high / medium / low | fix / downgrade claim / record blocker / accept |

## Cold Install / Access And Demo Review

Run the verification command for every selected `distribution_surfaces[]` entry. For npm this may be `npx`; for PyPI use a clean virtualenv; for Docker/GHCR pull and run the image; for Helm use `helm lint/template/install`; for desktop artifacts use download/install checks; for marketplaces verify listing/review state.

```sh
<surface verification command>
```

- [ ] Install command works.
- [ ] Quickstart command works.
- [ ] Failure modes are understandable.
- [ ] The demo proves the central claim, or the claim is weakened.

Findings:

| Finding | Severity | Action |
|---|---|---|
| | blocker / high / medium / low | fix / downgrade claim / record blocker / accept |

## Package And Repo Contents Review

- [ ] Package/listing/artifact/archive contains intended files only.
- [ ] No `.env`, tokens, private notes, screenshots of secrets, or irrelevant product artifacts are included.
- [ ] Public repo has license, security policy, contribution path, and issue templates.
- [ ] Public repo has no internal-only URLs or stale package names.
- [ ] GitHub release/tag state matches package version.

Selected surface modules reviewed:

| Surface | Module | Evidence | Verdict |
|---|---|---|---|
| | `surfaces/...` | | ready / blocked / out of scope |

Findings:

| Finding | Severity | Action |
|---|---|---|
| | blocker / high / medium / low | fix / downgrade claim / record blocker / accept |

## Claim Review

For each public claim, identify evidence or weaken the copy.

| Claim | Evidence | Verdict |
|---|---|---|
| | repo / command / package / site / owner approval | true / overclaimed / unsupported |

Common claims to challenge:

- "Auditable"
- "Launch-ready"
- "No telemetry"
- "Local-first"
- "Startup Pilot"
- "Validated"
- "OSS"
- "One-command install"
- "Fast"
- "Accessible"
- "Secure"
- "Encrypted"
- "Private"
- "Production-ready"
- "Enterprise"
- "Compliance"

Automatic downgrade rule: if evidence is missing, weaken the claim or mark it blocked. Do not escalate to the owner until safe defaults and weaker wording are exhausted.

## Trust And Policy Review

- [ ] Privacy policy matches actual collection behavior.
- [ ] Terms do not invent hosted-service, account, payment, SLA, warranty, or legal claims.
- [ ] Telemetry statement matches code and website behavior.
- [ ] Security path is real.
- [ ] Support/contact path is real.
- [ ] Community/conduct/enforcement claims are real if advertised.

Findings:

| Finding | Severity | Action |
|---|---|---|
| | blocker / high / medium / low | fix / downgrade claim / record blocker / accept |

## HN/Reddit Skeptic Review

Answer before posting:

- Why not just use a repo checklist?
- Is this process theater?
- What does validation actually validate?
- Is this automating posting, commenting, voting, or engagement?
- What is early/rough/missing?
- What is the strongest concrete proof?
- Is the posting account appropriate?
- Is the subreddit fit and flair appropriate?

Findings:

| Finding | Severity | Action |
|---|---|---|
| | blocker / high / medium / low | fix / downgrade claim / record blocker / accept |

## Go / No-Go

Go only if:

- No blocker remains.
- High-severity findings are fixed or explicitly accepted by the owner.
- Overclaims are weakened in README/site/channel copy.
- Public posting/account behavior is appropriate and human.

Final decision:

- Decision:
- Owner/reviewer:
- Date:
