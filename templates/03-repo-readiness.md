# <Product> — Repo Readiness

If the repo is the launch link target or a major trust surface, this file should be backed by `playbook/oss-repo-quality-workflow.md`, not filled from vibes.

OSS repo quality artifacts:

- Baseline captures:
- Comparable repo matrix:
- Target repo spec:
- Final parity review:
- Public-only deferred signals:

## Install

Command:

```sh
<install command>
```

Clean-machine verification:

```sh
<commands>
```

## Demo

Command:

```sh
<demo command>
```

Expected result:

```text
<expected output>
```

## README First Screen

- [ ] What it is.
- [ ] Who it is for.
- [ ] Why it exists.
- [ ] Install command.
- [ ] Minimal demo.
- [ ] License.

## OSS Trust

- [ ] LICENSE.
- [ ] SECURITY.md.
- [ ] CONTRIBUTING.md.
- [ ] CODE_OF_CONDUCT.md, if appropriate.
- [ ] Issue templates.
- [ ] Good first issues.
- [ ] CI badge.
- [ ] Package/version badge.
- [ ] Social preview image.
- [ ] Privacy policy, if website, telemetry, accounts, forms, analytics, or hosted service exist.
- [ ] Terms of use, if hosted service, accounts, commercial use, community, or website needs it.
- [ ] Telemetry/data policy, if CLI, SDK, website, analytics, crash reporting, or hosted service sends data.
- [ ] Real support/security/community contacts.

## Core Claim CI

What does CI prove that makes the launch credible?

```sh
<ci-equivalent local command>
```

## Template Pack

Use the repo and policy templates instead of agent-generated first drafts:

- `templates/repo/LICENSE.SELECTOR.md`
- `templates/repo/SECURITY.md`
- `templates/repo/CONTRIBUTING.md`
- `templates/repo/CODE_OF_CONDUCT.md`
- `templates/repo/.github/ISSUE_TEMPLATE/`
- `templates/policies/PRIVACY.md`
- `templates/policies/TERMS.md`
- `templates/policies/TELEMETRY.md`

Launch rule: unresolved `TBD` values in public policy, security, install, or data-use docs are blockers, not polish items.
