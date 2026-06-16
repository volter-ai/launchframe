# <Product> — Master Launch Checklist

Status legend: done · ready/in-progress · blocked · launch-day

Use this file as the live launch dashboard, not as the full historical log. Keep detailed credential notes and command evidence in `00-external-prereqs.md`; keep chronology and reversals in `10-worklog.md`.

Primary context files:

- `00-owner-authorization.md` — upfront human authority, allowed side effects, credential paths, claim boundaries, and selected distribution surfaces.
- `00-org-context.json` — structured org, product, surface, policy, launch, and verification facts.
- `00-brand-context.md` — narrative brand, positioning, voice, visual, and channel context.
- `SURFACE-PROFILES.md` — routing guide for selecting distribution and trust modules by product shape.
- `00-external-prereqs.md` — credentials, sign-ins, publish tokens, registrar keys, and purchase approval gates.
- `01-business-model-research.md` — sourced comparable products, business models, pricing, BYOK/self-host posture, and monetization implications.
- `11-adversarial-review.md` — skeptical repo, product, claim, install, trust, and launch-channel review before public posting.
- `12-owner-approval-gate.md` — final single human review packet before irreversible public actions.
- `PENDING.md` — running queue for owner questions, sent questions, external waits, operational blockers, and defaulted assumptions.

## 0. Current Launch Dashboard

Update this section continuously. It should answer "can we launch, what is blocking us, and what is intentionally out of scope?" without reading the rest of the repo.

- Mode: tabletop dry run / real dress rehearsal / public launch
- Overall state: ready / blocked / pending external propagation / launch-day only
- Link target:
- Package/install target:
- Site target:
- Selected distribution surfaces:
- Public posting status: not started / scheduled / posted
- Next three actions:
  1.
  2.
  3.

### Hard Blockers

Only include blockers that prevent the selected mode from succeeding. Do not list optional surfaces here.

| Blocker | Required for | Owner | Next action | Status |
|---|---|---|---|---|
| | | | | |

### Scope Decisions

Every external surface must be marked `required`, `optional`, or `out of scope` before execution starts. Provider-specific paths that are not chosen should be out of scope, not lingering blockers.

| Surface | Scope | Chosen provider/value | Why | Current state |
|---|---|---|---|---|
| Repo | required |  |  |  |
| Distribution surfaces | required / optional / out of scope |  |  |  |
| Package registry | required / optional / out of scope |  |  |  |
| Website hosting | required / optional / out of scope |  |  |  |
| Custom domain | required / optional / out of scope |  |  |  |
| HTTPS | required / optional / pending propagation |  |  |  |
| Support/security email | required / optional / out of scope |  |  |  |
| Social/community | required / optional / out of scope |  |  |  |
| Analytics | required / optional / out of scope |  |  |  |

### Evidence Summary

Summarize only the latest proof. Put full command output and retries in `00-external-prereqs.md` or `10-worklog.md`.

| Gate | Latest evidence | Result | Date |
|---|---|---|---|
| Repo |  |  |  |
| Site |  |  |  |
| Package install |  |  |  |
| Domain/DNS |  |  |  |
| HTTPS |  |  |  |
| Deployed copy/metadata |  |  |  |
| Launch copy |  |  |  |

## 1. Intake: Facts To Gather First

Do this before strategy, launch copy, site work, domain purchase, package reservation, or community setup.

- [ ] `00-owner-authorization.md` exists and defines allowed side effects, credential paths, claim boundaries, and selected surfaces.
- [ ] `00-org-context.json` exists and contains factual org/product/surface/policy fields.
- [ ] `00-brand-context.md` exists and contains positioning, voice, visual direction, and launch narrative.
- [ ] `SURFACE-PROFILES.md` was used to choose selected distribution and trust/privacy modules.
- [ ] `00-external-prereqs.md` exists and records external account/credential readiness.
- [ ] `PENDING.md` exists and tracks active owner/external/ops/defaulted waits.
- [ ] Owner has reviewed the context files or unresolved fields are marked as blockers.
- [ ] `distribution_surfaces[]` is filled in `00-org-context.json`; each selected surface has a matching `surfaces/` module.
- [ ] Any advertised optional surface was promoted to required or removed from public copy.

### Execution Preflight

Do this before any real external side effect: domain purchase, DNS change, repo publish, package publish, account-console token creation, email setup, or public posting.

- [ ] Current git state reviewed; unrelated dirty files are identified and left untouched.
- [ ] A checkpoint or commit strategy is selected for this run.
- [ ] For iterative work, every pass will be committed or checkpointed before the next pass starts.
- [ ] Required account-console access has been verified through the repo-local signed-browser skill, if browser work is needed.
- [ ] Required CLI/API credentials are present in ignored local env only.
- [ ] Publish commands use the intended credential path, not stale global config.
- [ ] The current mode is explicit: tabletop dry run / real dress rehearsal / public launch.
- [ ] Side effects approved for this mode are listed in `00-external-prereqs.md`.

### Product Source

- Product name / working codename:
- Launch type: CLI / library / web app / desktop app / Kubernetes operator / docs site / marketplace plugin / other
- One-sentence founder description:
- Target users:
- Primary launch objective: mindshare / installs / contributors / design partners / pipeline / other
- Product repo, local path:
- Product repo, online URL:
- Product docs path:
- Existing README path:
- Existing demo/screenshots path:
- Existing package registry URL:
- Distribution surfaces and verification commands:
- Existing website URL:
- License:
- Business model: free OSS / open-core / hosted cloud / enterprise self-host / paid SaaS / services / unknown
- Pricing status: none / published / private-custom / planned / unknown
- Monetization summary:
- Default tier strategy: Free OSS / Startup Pilot / Enterprise Custom, unless explicitly changed
- Startup Pilot price anchor:
- Startup Pilot CTA:
- Startup Pilot payment reassurance: "No payment collected until we confirm you're a good fit."
- Free self-host available: yes / no / unknown / not applicable
- BYOK supported: yes / no / unknown / not applicable
- Current public/private state:
- Launchable version:
- Owner who can approve final public claims:

### Surfaces And Accounts

- GitHub org/user:
- GitHub repo target:
- Package manager target: npm / PyPI / Cargo / Homebrew / Docker / other
- Package name target:
- Distribution surface modules required: npm / PyPI / Docker-GHCR / Helm / Figma Community / desktop release / docs site / trust/privacy / other
- Domain target:
- Registrar:
- Hosting provider:
- Analytics provider:
- X/Twitter handle:
- LinkedIn page or founder profile:
- Discord server:
- Slack/community links:
- Newsletter/blog/dev.to/Lobsters/HN account:
- Support/contact email:
- Security contact:
- Account-console browser requirement: signed-in controllable browser / CLI token / manual owner step
- Browser automation method, if needed: `.claude/skills/browser` named eval-server session with a configured signed-in Chrome profile
- Account consoles that must not use an isolated fresh browser:

### Policy And Trust Docs

- LICENSE:
- SECURITY.md:
- CONTRIBUTING.md:
- CODE_OF_CONDUCT.md:
- Privacy policy:
- Terms of use:
- Telemetry policy:
- Data retention / local-first note:
- Responsible disclosure path:
- AI/data usage disclosure, if relevant:

### Launch Collateral Inputs

- Core falsifiable demo:
- Demo product surface: CLI / API / UI / hybrid
- Demo recording method: VHS / Playwright / browser automation / screen recording / other
- Install command:
- Quickstart command:
- Main failure mode the demo proves:
- Product limitations to say honestly:
- Competitors / adjacent tools:
- Sites/brands that look premium:
- Existing brand assets:
- Visual references to avoid:
- Communities that should not be contacted:
- Hard launch date or external deadline:

## 2. Decisions

Fill these from `00-org-context.json` and `00-brand-context.md`.

- Product name:
- License:
- Repo:
- Package/install command:
- Launch objective:
- Primary audience:
- Primary launch channel:
- Link target:
- Launch date/time:

## 3. Readiness Gates

- [ ] Initial owner authorization is complete, including allowed side effects and final approver.
- [ ] Comparable business-model research is complete and cites primary sources where possible.
- [ ] Pricing, free tier, self-host, BYOK, hosted, and enterprise claims are sourced or marked unknown.
- [ ] Public launch copy does not invent monetization, pricing, hosted-service, or free/self-host claims.
- [ ] Startup Pilot signups are durably preserved before launch, if the paid-intent CTA is live.
- [ ] Startup Pilot signup notification/follow-up path is verified, if the paid-intent CTA is live.
- [ ] Startup Pilot capture is low-friction: email required, "how did you hear about us?" optional by default; role and qualification questions happen after capture unless explicitly approved.
- [ ] One-command install works on a clean machine.
- [ ] One-command demo proves the central claim.
- [ ] Every required distribution surface has a completed surface module and recorded evidence.
- [ ] UI demo is recorded from a reproducible Playwright/browser flow, if a UI is part of the proof.
- [ ] Public package/repo is scrubbed of private data and secrets.
- [ ] README explains the product, mechanism, install, and demo in the first screen.
- [ ] Adversarial repo/product review is complete, with serious objections either fixed, downgraded in copy, or recorded as blockers.
- [ ] Deployed site copy, links, package/install status, canonical URL, and OG metadata were rechecked after every real external state transition.
- [ ] License, SECURITY, CONTRIBUTING, and issue templates are present.
- [ ] Privacy, terms, telemetry, and data-use docs are present or explicitly not applicable.
- [ ] Discord/community links and conduct/enforcement paths are real if a community is advertised.
- [ ] CI proves the core claim or failure mode.
- [ ] Founder/operator is available for 4-6 hours after posting.
- [ ] Final `12-owner-approval-gate.md` packet is complete before irreversible actions.

## 4. Surfaces

- [ ] Domain checked/purchased/configured.
- [ ] Selected distribution surfaces checked/reserved/prepared.
- [ ] Package/listing/artifact names checked/reserved.
- [ ] GitHub repo/org target checked.
- [ ] Social handles checked/reserved.
- [ ] Discord/community created or deferred.
- [ ] Support/security contacts configured.
- [ ] Real dress rehearsal evidence recorded in `00-external-prereqs.md`, not only tabletop targets.
- [ ] `.claude/skills/browser/SKILL.md` read before browser-required account-console work.
- [ ] Signed-in account-console access verified before any browser-required token, billing, registrar, hosting, or social work.
- [ ] MCP and fresh automation browsers are explicitly rejected for account-console work.

## 5. Repo And Policy Templates

Use `templates/repo/` and `templates/policies/`.

- [ ] OSS repo quality workflow completed if the repo is the launch target or major trust surface: baseline captured, comparable repos sampled, section/badge/trust matrix written, target repo spec written, implementation passes completed, real repo quality review passed, public-only signals deferred.
- [ ] Exact license text copied from authoritative source.
- [ ] `SECURITY.md` filled from real contact/process.
- [ ] `CONTRIBUTING.md` filled from real setup/test commands.
- [ ] `CODE_OF_CONDUCT.md` filled from official Contributor Covenant source and real enforcement contact.
- [ ] Issue templates copied and product placeholders filled.
- [ ] `PRIVACY.md` filled from verified product data behavior.
- [ ] `TERMS.md` filled from owner-approved commitments.
- [ ] `TELEMETRY.md` verified against source/network behavior.

## 6. Assets

- [ ] Mood-board references captured.
- [ ] Brand/site concepts generated with Gemini/Nano Banana, if site work is in scope.
- [ ] Final selected designs collected.
- [ ] Site implementation reviewed with Gemini CLI, if site work is in scope.
- [ ] Optional UI makeover round completed or explicitly skipped. If completed: current UI captured, broad mood board collected, multiple candidates compared, real implementation captured, quality-parity review passed, stale screenshots/GIFs marked for regeneration.
- [ ] README demo GIF or short video.
- [ ] 7-second social cut.
- [ ] OG/social image.
- [ ] Screenshots.
- [ ] Logo/icon/favicon, if needed.

## 7. Channel Artifacts

- [ ] Show HN title.
- [ ] Founder first comment.
- [ ] HN account selected, already established, and appropriate for posting.
- [ ] Objection cheat sheet.
- [ ] X/Twitter thread.
- [ ] Reddit native posts.
- [ ] Technical article draft.
- [ ] Outreach templates.

## 7.5. Adversarial Review

Run before dress rehearsal and again after any major claim, README, package, or site change.

- [ ] Skeptical README review: can a visitor understand what it is, how it works, and what proof exists within one screen?
- [ ] Cold install review: does a clean install work exactly as documented?
- [ ] Package contents review: does npm include only intended files and no secrets/private artifacts?
- [ ] Surface-specific review: each selected module under `surfaces/` has evidence and no unsupported claims.
- [ ] Trust/privacy review: sensitive-data, local-first, telemetry, security, compliance, finance/legal/health, and professional-advice claims are evidenced, weakened, or blocked.
- [ ] Claim review: every public claim maps to repo behavior, docs, or recorded evidence.
- [ ] Trust review: license, security, privacy, terms, telemetry, support, and issue paths are present and not overclaimed.
- [ ] HN objection review: "Why not a checklist?", "Is this process theater?", "What does validation really validate?", "Is this launch automation or vote-seeking?"
- [ ] Channel-risk review: account readiness, subreddit fit/flair, no vote solicitation, no bot-like navigation/posting.
- [ ] Fixes made or blockers recorded in `PENDING.md`.

## 8. Launch Day

Launch day is not a single post. Treat it as an operated sequence with rehearsals.

### Tabletop Dry Run

- [ ] Walk through `08-launch-day-runbook.md` without touching external systems.
- [ ] Confirm every surface has an owner, URL, credential path, and fallback.
- [ ] Confirm exact go/no-go criteria.
- [ ] Confirm what is explicitly out of scope for launch day.
- [ ] Record gaps in `PENDING.md`.

### Live Dress Rehearsal

Run against live surfaces and go all the way up to the final public submit/post action. Do not click the final submit/post buttons.

- [ ] Clean install from a temp directory.
- [ ] Demo or validation command from a temp directory.
- [ ] Site, repo, package, docs, issue tracker, and capture form opened and verified.
- [ ] Tally/contact notification path verified or existing evidence rechecked.
- [ ] HN account age/history reviewed. If a new account was just created, stop before posting and route launch through an established human account.
- [ ] HN submission form opened, final title and URL filled, and stopped before final submit.
- [ ] HN first comment prepared and stopped before posting.
- [ ] Reddit post composer opened, final copy/subreddit/flair/link filled, and stopped before final submit.
- [ ] Social/founder post composer opened, final copy/link/media filled, and stopped before final publish.
- [ ] First-hour monitoring loop rehearsed.
- [ ] Gaps fixed and committed before real launch.

### Launch-Day Simulation

Run the same day or immediately before public posting.

- [ ] Pick simulated `H` time.
- [ ] Execute H-90 through H+60, including filling live posting forms, without clicking final submit/post.
- [ ] Confirm operator availability for 4-6 hours after real posting.
- [ ] Confirm only critical fixes will be made after posting.
- [ ] Complete `12-owner-approval-gate.md` and make final go/no-go decision.

### Real Launch

- [ ] H-90: final clean install and demo smoke.
- [ ] H-75: verify site, package, repo, CI, issue tracker, docs, and capture path.
- [ ] H-60: freeze HN title, URL, first comment, and support copy.
- [ ] H-45: prepare HN submission.
- [ ] H-30: prepare founder/social support post.
- [ ] H-0: post Show HN.
- [ ] H+5: post founder first comment if useful.
- [ ] H+0 to H+240: monitor HN, GitHub issues, npm install path, site uptime, and capture notifications.
- [ ] H+120 or later: decide whether Reddit should post now or defer.
- [ ] H+240: write same-day notes and follow-up list.

## 9. Post-Launch

- [ ] Publish technical article.
- [ ] Reply to issues/PRs quickly.
- [ ] Track metrics.
- [ ] Write retro.

## 10. Owner Questions

Do not ask piecemeal. Move every workstream forward by applying safe defaults, then batch only the true owner decisions into `OWNER-QUESTIONS.md`.

- [ ] All research/local/source-verification avenues exhausted before owner questions were prepared.
- [ ] Owner questions include source-backed context, default applied/proposed, and blocked artifact/action if any.
- [ ] Safe defaults were implemented before asking and are recorded for later owner override.
