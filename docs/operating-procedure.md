# Operating Procedure

Use this sequence when launching an OSS developer tool with HN as the primary channel and Reddit as a secondary native channel.

## 1. Intake

Fill `00-org-context.json` and `00-brand-context.md` before writing launch copy or buying surfaces. The workspace must know the legal operator, product name, package target, repo target, website target, support/security paths, launch objective, and claims that are already true.

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
- npm package name.
- Domain.
- Site hosting.
- Capture form/CRM.
- Social/community surfaces only if there is a moderation plan.

Record every external action in `00-external-prereqs.md`.

## 4. Product Proof

The README and launch copy must lead with a falsifiable demo. For a CLI, this usually means a command that succeeds or fails in a way that proves the central claim.

Do not launch until the install command works from a clean environment.

## 5. Capture Path

If the launch has a paid-intent CTA, make capture durable before promoting it.

Default rule: capture first, qualify later. Ask for email as the only required field. Add optional source attribution such as "How did you hear about us?" because it explains which channel worked without blocking signup.

Verify:

- Public page loads.
- Test submission stores durably.
- Export/backfill works.
- Founder/operator notification arrives.

## 6. Visual And Site Work

Use the visual workflow in `visual-workflow.md`. The mood board and generated artboards should lead the direction. The implementation cycle must compare the real site against the selected references and produce a gap report after each pass.

## 7. Trust And Policy

Use template policy/repo docs, then fill only facts that are true. Agents should not invent legal terms. If legal language is not reviewed, mark it as a launch gate or remove the claim/surface.

## 8. Launch Copy

Create:

- Show HN title and body.
- Reddit posts that are native to each community.
- Technical article outline.
- Social copy only for surfaces that actually exist.

Never solicit votes.

## 9. Readiness

Run:

```sh
launchframe validate .
launchframe evidence .
```

Then verify public deployed state, package install, capture, policy/trust docs, and launch-day runbook.

## 10. Launch Day

The founder/operator should be available for replies. Log what was posted, when, what changed, and what feedback should update the product or templates.

