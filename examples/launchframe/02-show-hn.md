# Launchframe — Show HN Playbook

Title: Show HN: Launchframe - a launch workspace scaffold for OSS developer tools

URL: https://github.com/volter-ai/launchframe

HN account suitability: account: aaronyetc; reviewer: Codex; date: 2026-06-16; not suitable for immediate Show HN posting unless a human reviewer approves normal account history or selects an established account. Owner will post manually.

Show HN pre-submit rehearsal: recorded in `launch-context/DRESS-REHEARSAL-REPORT.md`; HN submit form was reached and stopped before final submit.

Founder first comment:

```text
Hi HN, I built Launchframe after doing a few OSS/devtool launches where the launch work ended up scattered across chat logs, repo checklists, design iterations, npm/domain setup, HN/Reddit drafts, and launch-day notes.

Launchframe is a small CLI/template system that creates a launch workspace for developer-tool launches. It keeps product facts, repo readiness, policy docs, HN/Reddit copy, visual workflow notes, launch-day runbooks, pending decisions, and evidence records in one place.

The useful part is not the checklist by itself. It is making the launch reconstructable after a lot of agent-assisted work: what was researched, what got published, what is still pending, and which public claims are actually verified.

The CLI currently scaffolds the workspace and validates that required launch files exist:

    npx launchframe-cli init my-launch
    cd my-launch
    npx launchframe-cli validate . --template

This is early and intentionally plain. It does not automate posting, commenting, or voting. Right now the validation is mostly structural; the process docs are where most of the launch judgment lives.

I would especially like feedback from people who have launched OSS/devtools before: what launch artifacts or gates would you want this to track that are missing here?
```

## Stop Rule

Do not submit from a newly-created or bot-like HN account. During rehearsal, fill the title and URL only up to the final submit action.
