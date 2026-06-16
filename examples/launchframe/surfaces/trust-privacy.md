# Trust / Privacy Readiness

## Scope

- Sensitive claim areas: no CLI telemetry; no posting automation; no automatic truth verification.
- Data processed: local launch workspace files created by the CLI; optional Startup Pilot form submissions on the site.
- Data stored: local files in the generated workspace; Tally stores Startup Pilot form submissions.
- Network access: CLI source has no application network calls; npm itself fetches the package during install.
- Telemetry / analytics / crash reporting: none in the CLI; analytics out of scope for the current static site.
- Hosted service, accounts, sync, or payments: no hosted CLI service, no accounts, no payment collection.
- Privacy/security contact: GitHub Issues and GitHub Security Advisories.

## Checks

- [x] verified public copy avoids unsupported secure/private/encrypted/local-first/compliance claims.
- [x] verified data flow is documented for the CLI and Startup Pilot capture.
- [x] verified network access was checked by source inspection.
- [x] verified telemetry, analytics, crash reporting, update checks, and external API calls are absent from the CLI or out of scope.
- [x] verified sample/demo data contains no customer or production data.
- [x] verified privacy policy matches current CLI and Startup Pilot behavior.
- [x] verified terms avoid hosted-service, payment, account, SLA, warranty, or professional-advice commitments.
- [x] verified security disclosure path and support contact are real.
- [x] owner-approved out of scope professional-advice boundary; Launchframe is not a finance, legal, health, tax, compliance, or investment product.
- [x] verified claims requiring owner/legal/security approval are listed in `12-owner-approval-gate.md`.

## Browser / Plugin / Marketplace Data Review

- [x] owner-approved out of scope; Launchframe is not a browser/plugin/marketplace product.

## Accessibility Claim Review

- [x] owner-approved out of scope; Launchframe does not claim WCAG compliance or accessibility automation.

## Finance / Legal / Health / Professional-Advice Review

- [x] owner-approved out of scope; Launchframe does not provide professional advice.

## Kubernetes / Cost Observability Review

- [x] owner-approved out of scope; Launchframe does not estimate or optimize infrastructure cost.

## Network Verification Examples

```sh
rg -n "fetch\\(|XMLHttpRequest|WebSocket|sendBeacon|posthog|segment|sentry|analytics|telemetry|requests\\.|httpx|urllib|socket|grpc|axios" src bin docs README.md
```

## Evidence

| Check | Command / URL / source | Result |
|---|---|---|
| CLI network/telemetry source scan | `rg -n "fetch\\(|XMLHttpRequest|WebSocket|sendBeacon|posthog|segment|sentry|analytics|telemetry" src bin docs README.md` | No CLI telemetry implementation found |
| Privacy docs | `docs/PRIVACY.md` | Present |
| Terms docs | `docs/TERMS.md` | Present |
| Telemetry docs | `docs/TELEMETRY.md` | Present |
| Security path | `SECURITY.md` | GitHub Security Advisories path documented |
