# PyPI Package Readiness

Use when a selected `distribution_surfaces[]` entry has type `pypi`.

## Scope

- Package name:
- PyPI URL:
- TestPyPI URL:
- Public install command:
- Clean verification command:

## Checks

- [ ] Project metadata is correct in `pyproject.toml`.
- [ ] License metadata matches repo license.
- [ ] `python -m build` succeeds.
- [ ] Wheel and sdist contents are audited.
- [ ] `twine check dist/*` passes.
- [ ] TestPyPI publish/install path is verified when in scope.
- [ ] Trusted publishing or token scope is recorded.
- [ ] Clean virtualenv install succeeds.
- [ ] Import smoke succeeds.
- [ ] Example/quickstart succeeds.
- [ ] Sample data contains no private financial, personal, customer, or production data.
- [ ] If the library handles finance/legal/health data, public examples and README disclaim professional advice and avoid implying regulatory/accounting/tax correctness unless owner-approved.
- [ ] If "local-first", "offline", or "no telemetry" is claimed, the trust/privacy surface module is completed with source or runtime evidence.

## Evidence

| Check | Command / URL | Result |
|---|---|---|
| | | |
