# npm Package Readiness

## Scope

- Package name: launchframe-cli
- Registry URL: https://www.npmjs.com/package/launchframe-cli
- Publish tag: latest and beta
- Public install command: `npx launchframe-cli init my-launch`
- Clean verification command: `npx --yes launchframe-cli@latest init workspace && npx --yes launchframe-cli@latest validate workspace --template`

## Checks

- [x] verified `npm whoami`/token path was usable through an ignored repo-local `.env` and temporary npmrc during beta.10 publish.
- [x] verified publish used a repo-local token path and temporary npmrc, not stale global config.
- [x] verified package ownership exists for `launchframe-cli`.
- [x] verified `npm pack --dry-run` reviewed before publish.
- [x] verified archive inspection showed intended files only.
- [x] verified no secrets, private notes, local screenshots, or unrelated launch artifacts were included in the npm tarball.
- [x] verified `bin`, engines, and package files allowlist are intentional for the current CLI.
- [x] verified package metadata is intentional for the beta.
- [x] verified clean public install succeeds.
- [x] verified quickstart validation succeeds on a generated workspace.
- [x] verified documented CLI examples work after public install.
- [x] verified noninteractive behavior is documented by the CLI usage and template-validation path.
- [x] verified `latest` and `beta` dist-tags point to 0.1.0-beta.10.

## Evidence

| Check | Command / URL | Result |
|---|---|---|
| Registry version | https://www.npmjs.com/package/launchframe-cli/v/0.1.0-beta.10 | Published |
| Dist tags | `npm view launchframe-cli version dist-tags --json` | `latest` and `beta` are 0.1.0-beta.10 |
| Public smoke | `npx --yes launchframe-cli@latest init workspace && npx --yes launchframe-cli@latest validate workspace --template` | Passed from a clean temp directory |
| Pack review | `npm pack --dry-run` | Tarball contents reviewed before publish |
