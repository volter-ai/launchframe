# OSS Repo Quality Workflow

Use this when the repository is the launch link target or a major trust surface. The goal is not "has a README"; the goal is that a skeptical visitor from HN believes the repo belongs beside credible open-source developer-tool repos.

This is separate from the brand/site workflow and the UI makeover workflow. A repo is its own product surface: README, demo media, install path, package metadata, CI proof, license, support, security, issue posture, releases, and public settings all need to agree.

## Procedure

Save artifacts under `oss-repo-quality/` or an equivalent product workspace folder.

### 0. Scope And Claims

- Identify the launch repo URL and local repo path.
- Confirm public/private/staged state.
- Identify the launch link target: repo, landing page, docs, package, or demo.
- Identify the package/install target.
- State the central proof the repo must communicate in the first 5 seconds.
- List unsupported claims that must not appear: fake badges, fake users, fake coverage, fake security posture, fake governance, fake cloud/self-host claims.

Output: `00-scope.md`.

### 1. Baseline Repo Capture

- Capture the first README screen, full README, repo about/sidebar panel, file tree top, Actions/CI page, Issues/templates view, Security tab if available, Releases/tags, and package registry page if one exists.
- Record repo settings that affect trust: description, website URL, topics, social preview, discussions/wiki/projects, branch protection, delete-branch-on-merge.
- Run local verification: install, quickstart, core demo, tests or CI equivalent, and package dry run.
- Write a baseline gap note.

Output: `baseline/screenshots/`, `baseline/repo-settings.md`, `baseline/verification.md`, `baseline/gap-notes.md`.

### 2. Comparable Repo Mood Board

Collect 8-15 comparable repos. Include direct peers, aspirational best-in-class repos, and at least 2 smaller or weaker adjacent repos so the team sees failure modes instead of only copying famous projects.

For each comparable, capture:

- README first screen.
- Full README or section outline.
- Badge area.
- Demo media style.
- Docs/community/support/security links.
- Package/install presentation.
- Trust signals: stars, releases, discussions, issue labels, good-first-issues, CI, security, governance, sponsors, telemetry/privacy, roadmap.
- What not to copy because the current product does not support it.

Output: `references/`, `references/README.md`, `references/contact-sheet.png`.

### 3. Pattern Analysis

Build a matrix with:

- First-screen content.
- Badge strategy.
- Install/quickstart.
- Demo/proof media.
- How-it-works explanation.
- Architecture or mechanism.
- Docs links.
- Support/community paths.
- Contributing path.
- Security policy.
- License.
- Roadmap/changelog/releases.
- Commercial/cloud/self-host positioning if relevant.
- Package metadata.
- Repo settings/trust features.
- What to copy.
- What to avoid.

Then ask a reviewer to identify the fitting section pattern, the minimum credible repo-health set, credible badges now, badges/signals to defer, the first-screen story, and launch-risk gaps an HN reader would notice.

Output: `analysis/comparable-matrix.md`, `analysis/reviewer-pattern-analysis.md`.

### 4. Target Repo Spec

Write the target before editing:

- README first screen: name, one-line definition, proof/demo, install, license, primary CTA.
- README section order.
- Badge policy: include, defer, reject.
- Demo media requirements.
- Docs map.
- Trust files.
- Issue/PR templates.
- CI/proof surface.
- Package/release metadata.
- Repo settings.
- Public-only tasks to run after the repo is flipped public.

Output: `target/repo-spec.md`, `target/badge-policy.md`, `target/readme-outline.md`.

### 5. Implementation Passes

Run scoped passes, verifying after each material pass.

- Pass 1, README landing page: rewrite the first-screen story and section order, add only true claims, verify install and quickstart, capture rendered README, commit or checkpoint.
- Pass 2, trust and contribution surface: add or fill license, security, contributing, conduct, issue/PR templates, support docs, roadmap/changelog/releasing docs as appropriate. Use canonical templates and real contacts.
- Pass 3, CI/package/release proof: ensure CI proves the core claim or launch-critical install/demo path. Add package metadata and only real badges backed by passing systems.
- Pass 4, repo settings and public presentation: set description, website URL, topics, social preview, discussions/wiki/projects choice, branch behavior, and security features where available. Record settings that cannot be verified until public.

Output: `implementation/pass-01-readme.md`, `implementation/pass-02-trust.md`, `implementation/pass-03-proof.md`, `implementation/pass-04-settings.md`.

### 6. Repo Quality Review

After implementation, compare the real repo against the comparable mood board:

- Capture rendered README and public-facing repo views again.
- Build a contact sheet with comparables and current repo.
- Ask for GO / CONDITIONAL GO / NO-GO.
- Require findings in this order: first-screen clarity, credibility/proof, missing trust surfaces, unsupported claims, visual/readability gaps, stale/broken links, deferred public-only signals.
- Fix ranked issues and repeat until GO or CONDITIONAL GO with explicit deferred items.

Output: `reviews/01-oss-repo-quality-review.md`, follow-up reviews, `final/screenshots/`.

### 7. Public Flip And Public-Only Signals

Run this only after owner approval:

- Flip repo public.
- Reopen the repo in an unauthenticated browser.
- Rerun clean public clone/install/demo smoke.
- Verify badges, package links, security/community/support links.
- Add public-only badges only after systems are real and passing: OpenSSF Scorecard, CodeQL, coverage, release, Docker pulls, package downloads, discussions, sponsors.
- Record final public URL, commit, tag/release, CI run, package version, and smoke output.

## Badge Rules

Allowed if real: CI passing, package version, license, package downloads, runtime/language support, no telemetry if verified.

Defer until real: coverage, OpenSSF Scorecard, CodeQL, release, Docker pulls, sponsors/funding, governance/CODEOWNERS, security audit.

Reject: fake stars, fake users/customers, fake compliance, fake branch protection, fake coverage, and badges for workflows that do not exist or fail.

## Done Criteria

- README first screen explains what it is, who it is for, why it exists, install, proof/demo, and license.
- Install and quickstart were verified on a clean machine.
- The core claim is proven by CI, demo, or a documented reproducible check.
- Trust files are present or explicitly not applicable.
- Badge set is credible and not cluttered.
- Repo settings match launch strategy.
- Comparable analysis and final parity review are saved.
- Public-only tasks are tracked in `PENDING.md`.
- Stale README/demo assets are marked for regeneration or replaced.
