# npm Package Readiness

Use when a selected `distribution_surfaces[]` entry has type `npm`.

## Scope

- Package name:
- Registry URL:
- Publish tag:
- Public install command:
- Clean verification command:

## Checks

- [ ] `npm whoami` works with the intended token.
- [ ] Publish uses repo-local `.env` or isolated temporary npmrc, not stale global config.
- [ ] Package name availability or existing ownership verified.
- [ ] `npm pack --dry-run` reviewed.
- [ ] `npm pack --json` or equivalent archive inspection is saved to evidence.
- [ ] Archive contains only intended files.
- [ ] No secrets, private notes, local screenshots, or unrelated launch artifacts included.
- [ ] `bin`, `exports`, `types`, peer dependencies, engines, and files allowlist are correct.
- [ ] `package.json` repository, homepage, bugs, license, keywords, and funding fields are intentional.
- [ ] Clean temp install succeeds.
- [ ] Quickstart command succeeds.
- [ ] `--help` and documented CLI examples work after public install.
- [ ] Noninteractive/CI behavior is documented if relevant.
- [ ] `latest`/`beta`/other dist-tags are intentional.

## Evidence

| Check | Command / URL | Result |
|---|---|---|
| | | |
