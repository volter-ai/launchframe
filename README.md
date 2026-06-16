# Launchframe

Launchframe creates auditable launch workspaces for OSS developer-tool launches.

```sh
npx launchframe-cli init my-launch
cd my-launch
npx launchframe-cli validate . --template
```

It is a template and validation system for launches that need more than a checklist in someone else's chat history. A Launchframe workspace keeps product facts, brand facts, repo readiness, policy/trust docs, HN/Reddit copy, launch-day runbooks, visual workflow evidence, pending blockers, and proof artifacts together.

## What It Creates

- A structured launch workspace with strongly named context files.
- Repo/policy collateral templates for OSS releases.
- HN, Reddit, outreach, asset, runbook, worklog, and retro docs.
- Upfront owner authorization and final owner approval gate templates.
- Surface profiles plus distribution-surface modules for npm, PyPI, Docker/GHCR, Helm, Kubernetes operators, Figma Community, desktop releases, local AI desktop apps, docs sites, and trust/privacy claims.
- A validator that catches missing launch context, unresolved placeholders, and incomplete selected distribution surfaces before public posting.
- An evidence report scaffold for commands, deploys, submissions, and owner confirmations.

## What It Does Not Do

- It does not submit posts, automate comments, solicit votes, or manage engagement.
- It does not verify the truth of every claim automatically; evidence and owner approval still have to be recorded.
- It does not replace owner/legal review for privacy, terms, security, or commercial claims.
- It does not make a launch successful by itself. It makes the work easier to reconstruct, review, and rehearse.

## Commands

```sh
launchframe init <dir> [--force]
launchframe validate <dir>
launchframe evidence <dir>
```

`launchframe validate <dir>` is a pre-launch readiness check and fails on unresolved placeholders, missing owner authorization, missing evidence, and incomplete selected distribution surfaces. Use `--template` only when validating an unfilled scaffold or template pack.

## Repository Layout

```text
bin/                  CLI entrypoint
src/                  scaffold, validate, and evidence commands
templates/            reusable launch workspace templates
templates/surfaces/   distribution-surface readiness modules
docs/                 operating procedure, repo quality, visual, and UI makeover docs
examples/launchframe/ dogfood launch output for Launchframe itself
```

The root of this repo is the reusable OSS product. `examples/launchframe/` is the dogfood launch generated from the process: site, launch context, policy collateral, and capture-flow evidence.

## Launch Principles

- Gather real product/org facts before writing launch copy.
- Keep public claims tied to evidence.
- Capture first, qualify later: email required; source attribution optional by default.
- Verify external state after every provider transition.
- Commit after each meaningful launch cycle.
- Use signed-browser automation for account consoles; do not use isolated fresh browser profiles for logged-in account work.
- Treat visual direction as mood-board led and image-first before implementation.

## Status

`0.1.0-beta.9` is the current public-beta scaffold. The included dogfood example shows Launchframe being used to launch Launchframe.
