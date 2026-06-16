# <Product> — Pending Items

Use this as the running queue for owner questions, external waits, operational blockers, defaulted assumptions, and questions already sent to the owner. Keep it current while driving work forward.

## Status Legend

- `owner`: needs owner approval or override.
- `sent_to_owner`: question/form has been sent; waiting for owner response.
- `external`: waiting on provider, DNS, certificate, review, publish propagation, or another outside system.
- `ops`: actionable implementation or verification work.
- `defaulted`: safe default applied; owner can override later.
- `resolved`: no longer pending.

## Pending Queue

| ID | Type | Item | Current default / next action | Owner or system | Blocks | Last checked | Status |
|---|---|---|---|---|---|---|---|
| P-001 | owner / sent_to_owner / external / ops / defaulted | | | | | | |

## Recently Resolved

| ID | Resolved date | Item | Resolution | Evidence |
|---|---|---|---|---|
| | | | | |

## Rules

- If a safe reversible default exists, apply it and mark the row `defaulted`.
- If a question has been sent to the owner, mark it `sent_to_owner` and record what remains blocked.
- If a provider/system must complete work, mark it `external` and record the poll/check command.
- If the owner must approve a public/external commitment, link to `OWNER-QUESTIONS.md`.
- Do not duplicate long research here; link the source artifact.
