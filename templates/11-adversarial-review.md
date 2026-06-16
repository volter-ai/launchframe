# <Product> — Adversarial Review

Run this as a skeptical reviewer before public posting. The goal is to find the objections that HN, GitHub visitors, maintainers, and security-minded users will find anyway.

## Review Metadata

- Reviewer:
- Date:
- Product/version:
- Launch mode:
- Public link target:
- Install command:

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

## Cold Install And Demo Review

Run from a clean temp directory.

```sh
npx <package> init workspace
npx <package> validate workspace
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

- [ ] npm/package archive contains intended files only.
- [ ] No `.env`, tokens, private notes, screenshots of secrets, or irrelevant product artifacts are included.
- [ ] Public repo has license, security policy, contribution path, and issue templates.
- [ ] Public repo has no internal-only URLs or stale package names.
- [ ] GitHub release/tag state matches package version.

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
