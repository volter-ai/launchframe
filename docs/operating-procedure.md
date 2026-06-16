# Operating Procedure

Use this sequence when launching an OSS developer tool with HN as the primary channel and Reddit as a secondary native channel.

## 1. Intake

Fill `00-owner-authorization.md`, `00-org-context.json`, `00-brand-context.md`, and `SURFACE-PROFILES.md` before writing launch copy or buying surfaces. The workspace must know the legal operator, product name, launch type, selected distribution surfaces, repo target, website target, support/security paths, launch objective, allowed side effects, credential paths, and claims that are already true.

The intended autonomy model is:

1. Initial owner authorization.
2. Agent autonomous preparation to pre-submit/pre-publish state.
3. Final owner approval packet in `12-owner-approval-gate.md`.

Do not interrupt the owner piecemeal when a safe weaker claim or reversible default exists.

## 2. Landscape Research

Research comparable products and adjacent launch examples. Capture:

- What users already understand.
- Which claims sound credible.
- Which claims will be challenged.
- How similar products describe install, proof, pricing, and trust.

Do not publish pricing, hosted-service, BYOK, telemetry, or enterprise claims until they are backed by actual product behavior or an owner-approved plan.

## 3. Surface Reservation

Check and reserve only the surfaces needed for the launch:

- GitHub org/repo.
- Selected distribution surfaces from `distribution_surfaces[]`: npm, PyPI, Docker/GHCR, Helm, Figma Community, GitHub Releases, Homebrew, docs site, website, trust/privacy, or other.
- Domain.
- Site hosting.
- Capture form/CRM.
- Social/community surfaces only if there is a moderation plan.

Record every external action in `00-external-prereqs.md`.

## 4. Product Proof

The README and launch copy must lead with a falsifiable demo. For a CLI, this usually means a command that succeeds or fails in a way that proves the central claim.

Do not launch until every required distribution surface has a clean verification path recorded in its `surfaces/` module.

If an optional surface is advertised in README, site copy, launch copy, or social copy, promote it to required and complete its module, or remove the claim.

## 5. Repo Quality

If the repo is the launch target or a major trust surface, run `oss-repo-quality-workflow.md` before treating README polish as done. Capture comparable repos, define the first-screen story, use only real badges, verify install/demo/package contents, and run a final OSS repo quality review against the references.

## 6. Capture Path

If the launch has a paid-intent CTA, make capture durable before promoting it.

Default rule: capture first, qualify later. Ask for email as the only required field. Add optional source attribution such as "How did you hear about us?" because it explains which channel worked without blocking signup.

Verify:

- Public page loads.
- Test submission stores durably.
- Export/backfill works.
- Founder/operator notification arrives.

## 7. Visual And Site Work

Use the visual workflow in `visual-workflow.md`. The mood board and generated artboards should lead the direction. The implementation cycle must compare the real site against the selected references and produce a gap report after each pass.

If the product UI itself will appear in the README, demo GIF, screenshots, or HN proof, run `ui-makeover-workflow.md` after product truth is verified. Capture the current UI, collect real references, generate multiple directions, implement natively, and compare real screenshots against the mood board before regenerating launch media.

## 8. Trust And Policy

Use template policy/repo docs, then fill only facts that are true. Agents should not invent legal terms. If legal language is not reviewed, mark it as a launch gate or remove the claim/surface.

## 9. Launch Copy

Create:

- Show HN title and body.
- Reddit posts that are native to each community.
- Technical article outline.
- Social copy only for surfaces that actually exist.

Never solicit votes.

## 10. Readiness

Run:

```sh
launchframe evidence .
launchframe validate .
```

Then verify public deployed state, package install, capture, policy/trust docs, and launch-day runbook.

`launchframe evidence .` creates the evidence report scaffold from selected distribution surfaces. Normal validation is a pre-launch readiness check and should fail if required placeholders, missing evidence, or incomplete selected surface modules remain. Use `--template` only to validate an unfilled scaffold or template pack.

## 11. Adversarial Review

Before public posting, run `11-adversarial-review.md` as a skeptical reviewer. Try to disprove or weaken the launch:

- Does the README explain the mechanism quickly?
- Does the install path work from a clean environment?
- Does the package contain only intended files?
- Are privacy, telemetry, hosted-service, pricing, and support claims true?
- Would HN reasonably call this a checklist, process theater, or launch automation?
- Are account and posting behaviors human and appropriate?

Fix issues, downgrade claims, or record blockers before proceeding.

## 12. Launch Day

Before irreversible actions, complete `12-owner-approval-gate.md`. The founder/operator should be available for replies. Log what was posted, when, what changed, and what feedback should update the product or templates.
