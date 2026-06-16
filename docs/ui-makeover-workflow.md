# UI Makeover Workflow

Use this as an optional quality-parity round for a product surface with UI: CLI, web app, mobile app, desktop app, docs portal, admin console, extension popup, terminal dashboard, onboarding flow, or generated demo media.

This is not the landing-page brand/site process. Landing pages use `visual-workflow.md` and `website-readiness-review.md`. This workflow improves the real product surface until it can credibly appear in the README, demo GIF, screenshots, HN post, or social assets.

## When To Run It

Run it when:

- The product surface is part of the launch proof.
- README, demo GIF, screenshots, or HN copy will show the surface.
- The UI is functional but visually weak.
- Credibility depends on the product feeling serious after the core behavior is already true.

Do not run it before product truth is verified. Visual polish cannot compensate for a fake demo, broken install, unsupported claim, or missing persistence.

## Core Principle

Do not jump from "current UI looks bad" to implementation.

Run a fixed taste-calibration funnel:

1. Baseline the real current UI.
2. Collect a large mood board.
3. Extract the mood board's visual DNA.
4. Generate or sketch broad candidate directions.
5. Review and narrow to the strongest directions.
6. Generate convergence variants around the top directions.
7. Select the target direction and write implementation rules.
8. Implement the real UI.
9. Capture real screenshots/output.
10. Iterate real screenshots until they reach quality parity with references.
11. Regenerate launch/demo assets that depend on the surface.

The goal is not "better than before." The goal is "this belongs beside the best references for this surface."

## Procedure

Save artifacts under `ui-makeover/<surface>/` or an equivalent product workspace folder.

### 0. Intake And Scope

- Name the surface: CLI, web app, mobile app, desktop app, docs, console, extension, onboarding, or demo media.
- Name 3-7 exact states to improve, not "the app" generically.
- Name the launch job: README GIF, HN proof, onboarding conversion, sales demo, docs quickstart, support/admin workflow.
- List hard product-truth constraints: unsupported claims, machine contracts, accessibility constraints, platform conventions, performance limits, compliance/legal limits.
- Add a `PENDING.md` entry if work depends on owner approval, external access, credentials, unpublished product state, or stale demo assets.

Output: `00-scope.md`.

### 1. Baseline Capture

Capture the real UI for every scoped state and at least two sizes or contexts when responsive or environment-sensitive.

Minimum captures:

- CLI: `--help`, first-run/init, pass state, fail state, narrow terminal, normal terminal, raw ANSI/text if available.
- Web app: desktop main flow, mobile main flow, empty/loading/error state, key modal/drawer, realistic data.
- Mobile: small phone, large phone, main flow, empty/loading/error state, keyboard or permission state if relevant.
- Desktop: realistic app window, narrow/resized window, main workflow, preferences/settings, error state.
- Docs/console: quickstart, navigation, code/API key page, account/billing/support page if launch-visible.

Output: `current/`, `current/contact-sheet.png`, `reviews/baseline-notes.md`.

### 2. Mood Board Collection

Collect references from direct peers first, adjacent best-in-class products second, and aspirational visual systems third.

- Save actual screenshots locally. Do not use only text links.
- Group screenshots by UI job, not by company.
- Add a one-line note per reference explaining what it contributes.
- Build one or more contact sheets.

Minimum reference volume:

- Small/narrow UI: 12-20 screenshots.
- Serious launch surface: 20-40 screenshots.
- Broad product redesign: 40+ screenshots.

For CLI-first products, include references for help screens, init/onboarding, success output, failure diagnostics, metrics/tables, prompts, and CI logs.

Output: `references/`, `references/README.md`, `references/contact-sheet.png`.

### 3. Mood Board Analysis

Ask a visual reviewer to inspect the reference contact sheet and current UI contact sheet before generating candidates.

Prompt shape:

```text
You are the visual director for a product-surface makeover.
Compare the mood board to the current product UI.
Extract the shared visual DNA, rank the most relevant references, identify anti-patterns, and define what quality parity would mean for this specific surface.
Do not redesign yet.
```

Output: `reviews/01-moodboard-analysis.md`.

### 4. Broad Candidate Cycle

Run at least one broad candidate cycle. For serious launch surfaces, run two.

Cycle 4A:

- Generate or sketch 8-16 candidates for a narrow UI, or 12-24 candidates for a primary launch surface.
- Use 4-8 creative attitudes.
- Keep product content truthful and surface-specific.
- Save all candidates, including weak ones.
- Build a candidate contact sheet.
- Ask for top 3, bottom 3, product-truth risks, implementation risks, and reusable visual rules.

Cycle 4B, required for serious launch surfaces:

- Use the Cycle 4A review to generate a second batch.
- Preserve the strongest signals.
- Remove repeated failure modes.
- Add new creative attitudes only where the first batch lacked range.
- Review again with the same top/bottom/risk/rule structure.

Output: `candidates/batch-01/`, `reviews/02-candidate-review-batch-01.md`, plus batch 2 for serious surfaces.

### 5. Convergence Cycle

- Choose the top 1-2 directions.
- Generate or sketch 6-12 variants around those directions.
- Deliberately mix style and information architecture when useful.
- Review variants against the mood board, current product truth, and launch job.
- Pick one target direction.
- Write implementation rules before touching code.

Implementation rules must cover hierarchy, layout/grid/spacing, color and semantic color use, typography or terminal text treatment, iconography/illustration rules, state rules, responsive/viewport rules, product-truth constraints, and native implementation constraints.

Output: `target/selected-direction.md`, `target/implementation-rules.md`.

### 6. Native Implementation Cycle

Run scoped passes. Each pass must produce real UI captures before deciding the next pass.

- Pass 1, structural implementation: layout, grouping, spacing, hierarchy; preserve behavior; capture states; run tests; commit/checkpoint.
- Pass 2, visual fidelity: color, typography/text treatment, icons, borders, panels, motion, detailed hierarchy; capture; compare against rules; test; commit/checkpoint.
- Pass 3, edge states and viewport polish: wrapping, overflow, responsive layout, empty/error/loading states, terminal-width issues, keyboard/touch behavior; capture alternate sizes; test; commit/checkpoint.

Preserve nonvisual contracts. A CLI makeover must not break `--json`, exit codes, stdout/stderr expectations, or scripting compatibility.

### 7. Quality-Parity Loop

Run this against the actual implemented UI, not mockups.

- Build a contact sheet with mood board exemplars, selected target, and real implementation captures.
- Ask: "Does the real implementation belong beside these references?"
- Require GO / CONDITIONAL GO / NO-GO.
- If NO-GO, fix only ranked issues, re-capture, retest, and repeat.
- Check exact README/demo/social crop or viewport.
- Check small and large responsive contexts.
- Check the highest-risk error/failure state.
- Confirm no stale screenshots or GIFs remain marked as current.

Output: `reviews/05-quality-parity-review.md`, follow-up reviews, `final/`, updated `PENDING.md`.

## Verification Gates

- Current captures are from the real product, not mockups.
- The chosen direction was selected from multiple candidates.
- Real implementation screenshots were compared against references.
- Important responsive/viewport sizes were checked.
- Error/empty/loading/success states were checked where relevant.
- Product claims shown in the UI are verified.
- Existing tests still pass.
- Machine/API contracts still pass for developer surfaces.
- README/demo screenshots or GIFs are regenerated if the visual surface changed.
- Artifacts and decisions are saved in the product workspace.

## Lessons From ztrack CLI

- CLI screenshots need the same visual rigor as web screenshots when the CLI is the product demo.
- Image mockups are useful, but terminal implementation needs a translation pass for ANSI, width, wrapping, and machine-output compatibility.
- A final visual GO does not finish the launch loop if README GIFs and screenshots are now stale.
- The strongest review question is not "is this better?" but "does this belong beside the references?"
