# Launchframe — Launch Strategy

## Product In One Breath

Launchframe is an OSS CLI/template system that creates auditable launch workspaces for developer-tool launches. It keeps product facts, repo readiness, policy docs, HN/Reddit drafts, visual workflow notes, launch-day runbooks, pending decisions, and evidence records together.

## Launch Goal

Design partners and feedback from people who have launched OSS/devtools before.

## Audience

1. Primary: OSS developer-tool maintainers.
2. Secondary: small teams using agents to prepare launch materials.
3. Tertiary: release engineers and founder/operators.

## Category Attachment

Attach to launch operations, release readiness, and OSS maintainer tooling. Avoid being mistaken for vote/comment automation or generic marketing automation.

## Core Demo

Run a clean public install:

```sh
npx launchframe-cli init my-launch
npx launchframe-cli validate my-launch --template
```

## Proof Points

- Published npm package.
- Public GitHub repo.
- Validated dogfood workspace.
- Live site and Startup Pilot capture.
- Adversarial review and stop-before-submit rehearsal.

## Traps To Avoid

- Do not claim Launchframe makes launches succeed.
- Do not claim validation proves every public statement true.
- Do not post from a newly-created HN account.

## Narrative Arc

1. Launch work gets scattered across chats, docs, package setup, domains, assets, and channel drafts.
2. Agent-assisted work makes this harder to reconstruct later.
3. Launchframe packages the artifacts and gates into a workspace.
4. The validator catches structural gaps and missing selected-surface evidence.
5. Public posting still requires human judgment and final approval.
