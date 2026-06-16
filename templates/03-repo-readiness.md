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

## Product Mechanism Interrogation

Do this before positioning, launch copy, or claim review. Do not infer the mechanism from the category name.

| Question | Answer | Evidence |
|---|---|---|
| What input does the product accept? | | |
| What output does it produce? | | |
| What rule/config/plugin language or mechanism powers the core behavior? | | |
| What external services, registries, APIs, clusters, or networks are contacted? | | |
| What runs offline? | | |
| What failure modes are intentional and documented? | | |
| What comparable products does it not replace? | | |
| Which claims must be downgraded because proof is missing? | | |

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

## CLI Developer Tool Readiness

Use when `product.launch_type` is `cli`.

- [ ] `--help` works.
- [ ] `--version` or equivalent works.
- [ ] Exit codes are documented and tested for success, expected validation failure, bad input, and internal error.
- [ ] stdout/stderr behavior is deliberate and CI-friendly.
- [ ] JSON or machine-readable output exists or is explicitly out of scope.
- [ ] Noninteractive execution does not prompt unexpectedly.
- [ ] Config-file discovery and precedence are documented.
- [ ] Works in a narrow terminal without unreadable output, if terminal UI is involved.
- [ ] Clean temp-directory command proves the launch claim.

## Kubernetes / Infra Tool Readiness

Use when `product.launch_type` is `kubernetes_operator` or the tool validates Kubernetes manifests.

- [ ] Static-manifest behavior is distinguished from live-cluster behavior.
- [ ] Supported Kubernetes API versions and CRD behavior are documented.
- [ ] Rule source is documented: built-in checks, schemas, Rego, JS/TS plugins, YAML config, remote policy bundle, or other.
- [ ] Network calls are absent, disclosed, or configurable.
- [ ] Untrusted YAML handling is reviewed.
- [ ] Cluster credentials are never read unless the product explicitly needs them.
- [ ] Sample manifests are non-sensitive and realistic.
- [ ] CI integration example is copyable.
- [ ] Security-sensitive claims avoid "secure" and "production-ready" unless separately proven.
