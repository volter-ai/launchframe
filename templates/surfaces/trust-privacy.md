# Trust / Privacy Readiness

Use when privacy, security, finance, health, legal, encryption, local-first, or sensitive data handling is a major launch surface or public claim.

## Scope

- Sensitive claim areas:
- Data processed:
- Data stored:
- Network access:
- Telemetry / analytics / crash reporting:
- Hosted service, accounts, sync, or payments:
- Privacy/security contact:

## Checks

- [ ] Public copy avoids "secure", "private", "encrypted", "local-first", "no telemetry", "compliance", or similar high-risk claims unless evidence is recorded.
- [ ] Data flow is documented from input through storage, processing, export, and deletion.
- [ ] Network access is verified by source inspection or runtime observation.
- [ ] Telemetry, analytics, crash reporting, update checks, and external API calls are absent, disclosed, or explicitly out of scope.
- [ ] Sample/demo data contains no personal, customer, production, financial, health, or confidential data.
- [ ] Privacy policy matches actual data behavior.
- [ ] Terms do not invent hosted-service, payment, account, SLA, warranty, or professional-advice commitments.
- [ ] Security disclosure path and support contact are real.
- [ ] Any professional-advice boundary is explicit when finance, legal, health, tax, compliance, or investment topics are involved.
- [ ] Claims requiring owner/legal/security approval are listed in `12-owner-approval-gate.md`.

## Browser / Plugin / Marketplace Data Review

Use this when the product is a plugin, browser app, editor extension, or marketplace listing.

- [ ] User file/design/project data accessed is listed.
- [ ] Local, session, plugin, extension, or browser storage is listed.
- [ ] External requests are listed with destination, purpose, and payload class.
- [ ] Screenshots, exports, generated assets, or uploaded files are disclosed.
- [ ] Tokens, auth state, API keys, or workspace identifiers are disclosed or absent.
- [ ] Analytics/error logging/crash reporting are disclosed or absent.
- [ ] Data deletion/export behavior is described or explicitly not applicable.

## Accessibility Claim Review

Use this when copy claims accessibility, WCAG, contrast, annotation quality, review automation, or similar.

- [ ] WCAG version and criterion are stated, if claimed.
- [ ] Contrast algorithm and supported color formats are stated.
- [ ] Alpha, blending, gradients, images, and text-size assumptions are handled or listed as limitations.
- [ ] The tool says what accessibility dimensions it does not check.
- [ ] Reproducible fixtures or examples verify the claim.
- [ ] Copy avoids "compliant" or "guarantees accessibility" unless owner/legal approves and evidence supports it.

## Finance / Legal / Health / Professional-Advice Review

Use this when the product touches finance, accounting, tax, legal, health, compliance, investment, insurance, payroll, regulated data, or professional decisions.

- [ ] Public copy states the product is tooling/information, not professional advice, if applicable.
- [ ] Sample/demo data is scrubbed and synthetic.
- [ ] Import/export formats and sensitive fields are documented.
- [ ] Currency, timezone, rounding, reconciliation, and accounting assumptions are listed where relevant.
- [ ] Copy avoids "tax-ready", "compliant", "financially accurate", "audit-proof", or similar without owner/legal approval and evidence.
- [ ] Retention, deletion, local storage, and network behavior are verified or downgraded.

## Kubernetes / Cost Observability Review

Use this when the product estimates, allocates, reports, or optimizes infrastructure/cloud/Kubernetes cost.

- [ ] Pricing source is recorded with date and provider/version.
- [ ] Allocation model is described: requests, limits, actual usage, billing export, metrics, tags, namespaces, labels, or other.
- [ ] Idle/shared cost handling is documented.
- [ ] Currency, region, time window, and rounding assumptions are listed.
- [ ] Supported providers/clusters are stated.
- [ ] Known inaccuracies and blind spots are listed.
- [ ] Copy avoids "accurate cloud costs", "billing-grade", "audit-proof", or "saves X%" without reproducible evidence and owner approval.

## Network Verification Examples

Record at least one applicable method, or mark the claim not verified and weaken copy.

```sh
# Source inspection examples; adapt to the stack.
rg -n "fetch\\(|XMLHttpRequest|WebSocket|sendBeacon|posthog|segment|sentry|analytics|telemetry|requests\\.|httpx|urllib|socket|grpc|axios" <source path>

# Runtime example; use the project's test command under blocked network if feasible.
<run app/test/demo with network blocked or monitored>
```

## Evidence

| Check | Command / URL / source | Result |
|---|---|---|
| | | |
