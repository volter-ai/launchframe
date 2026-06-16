# Desktop Release Readiness

Use when a selected `distribution_surfaces[]` entry has type `github_release`, `homebrew`, or a desktop app artifact.

## Scope

- Platforms:
- Release URL:
- Artifact names:
- Install command or download URL:
- Update channel:
- Signing state: verified / not applicable / owner accepted unsigned / blocked
- Notarization state: verified / not applicable / owner accepted unnotarized / blocked
- Checksum state: verified / blocked
- Clean install smoke state: verified / blocked

## Checks

- [ ] Artifacts are built from a clean checkout.
- [ ] Checksums are generated and published.
- [ ] macOS signing/notarization/Gatekeeper behavior is verified or out of scope.
- [ ] Windows signing/SmartScreen implications are verified or out of scope.
- [ ] Linux package/AppImage/deb/rpm behavior is verified or out of scope.
- [ ] Homebrew Cask is prepared if in scope.
- [ ] Auto-update behavior is disclosed.
- [ ] Crash reporting, update checks, telemetry, local storage, and network access are documented.
- [ ] Release notes include limitations and known issues.
- [ ] Download/install smoke succeeds on at least one clean machine or VM.

## Evidence

| Check | Command / URL | Result |
|---|---|---|
| | | |
