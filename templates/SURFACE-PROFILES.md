# <Product> — Surface Profiles

Use this before filling `distribution_surfaces[]`. A profile is a starting point, not a substitute for source inspection. If the product advertises a surface, select and complete the matching module even if the profile marks it optional.

Completion semantics for selected surface modules:

- `[x] verified` means the agent verified it from source, command output, deployed state, or registry state.
- `[x] owner-approved` means the owner explicitly accepted the claim, side effect, or policy text.
- `[x] out of scope` means the item is not part of this launch and the public copy does not advertise it.
- Leave no unchecked boxes in required surface modules before final validation.

## Profiles

### CLI

Recommended surfaces:

- `npm`, `pypi`, `cargo`, `homebrew`, or another package surface as required.
- `docs_site` if docs/quickstart are a major launch link.
- `trust_privacy` if the CLI handles secrets, credentials, personal data, telemetry, security, infra, finance, health, legal, or compliance.

Required readiness:

- `03-repo-readiness.md` CLI Developer Tool Readiness.
- Matching package module.
- `11-adversarial-review.md`.

### Infra CLI

Use for Kubernetes, cloud, security, CI, policy, deployment, secrets, or developer-infrastructure CLIs.

Recommended surfaces:

- Primary package surface as required.
- `docker`/`ghcr` optional unless the image is advertised.
- `helm` required only for a chart/operator launch.
- `trust_privacy` required if credentials, cluster data, cloud resources, secrets, or security claims are involved.

Required readiness:

- CLI Developer Tool Readiness.
- Kubernetes / Infra Tool Readiness when manifests/clusters are involved.
- Claim downgrades for "secure", "production-ready", "enterprise", and "compliance" unless separately evidenced.

### Python Library

Recommended surfaces:

- `pypi` required.
- `docs_site` required if API docs or examples are part of launch proof.
- `trust_privacy` required if the library handles sensitive data or high-risk domains.

Required readiness:

- `surfaces/package-pypi.md`.
- Clean virtualenv install and import smoke.
- Wheel/sdist audit.

### Python Sensitive-Data Library

Use for finance, health, legal, personal data, local-first, privacy, encryption, compliance, or security-adjacent libraries.

Recommended surfaces:

- `pypi` required.
- `docs_site` required.
- `trust_privacy` required.

Required readiness:

- Professional-advice boundary if finance, health, legal, tax, compliance, accounting, or investment topics are involved.
- Network-egress verification or explicit "not verified" downgrade.
- Sample/demo data scrub.
- No "secure", "private", "no telemetry", "local-first", "compliant", "tax-ready", or "financially accurate" claims without evidence or owner/legal approval.

### JavaScript Library

Recommended surfaces:

- `npm` required.
- `docs_site` required if examples or API docs are a major launch proof.
- `trust_privacy` if browser data, telemetry, auth, payments, plugins, or personal data are involved.

Required readiness:

- `surfaces/package-npm.md`.
- Export/types/peer dependency review.
- Browser/SSR support statement if relevant.

### Web App Or Docs Site

Recommended surfaces:

- `docs_site` or `website` required.
- `trust_privacy` required if there are forms, analytics, accounts, uploads, payments, telemetry, or hosted processing.

Required readiness:

- Deployment URL and build command.
- Privacy/terms/support/security links if data is collected.
- Analytics disclosure or explicit out-of-scope.

### Marketplace Plugin

Use for Figma, browser extensions, editor plugins, app-store-style listings, or any async marketplace review.

Recommended surfaces:

- Marketplace module required.
- `docs_site` or `website` required for support/privacy/docs links.
- `trust_privacy` required if plugin reads user files, design data, browser data, tokens, storage, screenshots, or external APIs.

Required readiness:

- Pre-submission readiness.
- Async review state: `not_submitted`, `submitted`, `changes_requested`, `approved`, or `published`.
- Post-approval publication check before launch.

### Desktop App

Recommended surfaces:

- `github_release` or distribution artifact required.
- `homebrew` optional unless advertised.
- `docs_site` recommended.
- `trust_privacy` required if the app handles local files, personal data, AI models, audio/video, telemetry, crash reporting, or auto-updates.

Required readiness:

- Checksums.
- Signing/notarization status or explicit out-of-scope.
- Download/install smoke.
- Update/crash/telemetry disclosure.

### Kubernetes Operator

Recommended surfaces:

- `docker`/`ghcr` required.
- `helm` required if chart is advertised.
- `kubernetes_operator` required for controller/operator launches.
- `docs_site` required.
- `trust_privacy` required if cluster data, cloud costs, credentials, metrics, or security claims are involved.

Required readiness:

- Image digest.
- Helm lint/template/install.
- Kind/k3d/minikube smoke.
- RBAC/CRD review.
- Cost/performance/security claims tied to reproducible evidence.

### Local AI Desktop App

Use for desktop apps that record audio/video, transcribe locally, run local AI models, store local notes, or make local-first/privacy claims.

Recommended surfaces:

- `github_release` required.
- `local_ai_desktop` required.
- `docs_site` recommended.
- `trust_privacy` required.
- `homebrew` optional unless advertised.

Required readiness:

- Model source/license/redistribution review.
- Microphone/audio permission behavior.
- Audio/transcript retention and deletion behavior.
- Offline transcription proof before claiming local/offline operation.
- Network-egress verification during recording/transcription.
- Signing/notarization/checksum/install smoke from `desktop-release.md`.
