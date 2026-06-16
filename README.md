# Launchframe

Launchframe creates auditable launch workspaces for OSS developer-tool launches.

```sh
npx launchframe-cli init my-launch
cd my-launch
npx launchframe-cli validate .
```

It is a template and validation system for launches that need more than a checklist in someone else's chat history. A Launchframe workspace keeps product facts, brand facts, repo readiness, policy/trust docs, HN/Reddit copy, launch-day runbooks, visual workflow evidence, pending blockers, and proof artifacts together.

## What It Creates

- A structured launch workspace with strongly named context files.
- Repo/policy collateral templates for OSS releases.
- HN, Reddit, outreach, asset, runbook, worklog, and retro docs.
- A validator that catches missing launch context before public posting.
- An evidence report scaffold for commands, deploys, submissions, and owner confirmations.

## Commands

```sh
launchframe init <dir> [--force]
launchframe validate <dir>
launchframe evidence <dir>
```

## Repository Layout

```text
bin/                  CLI entrypoint
src/                  scaffold, validate, and evidence commands
templates/            reusable launch workspace templates
docs/                 operating procedure and visual workflow docs
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

`0.1.0-beta.1` is the first public-beta scaffold. The included dogfood example shows Launchframe being used to launch Launchframe.
