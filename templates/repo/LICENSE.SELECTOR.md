# <Product> — License Selector

Do not generate license text by hand. Pick a standard license, then copy the exact license text from an authoritative source.

## Decision

- Product:
- Repo URL:
- Copyright holder:
- Year:
- Chosen license:
- Approved by:
- Date:

## Common OSS Choices

- MIT: short permissive license.
- Apache-2.0: permissive license with explicit patent grant.
- BSD-2-Clause / BSD-3-Clause: permissive licenses.
- MPL-2.0: file-level copyleft.
- GPL-3.0 / AGPL-3.0: strong copyleft; use only with explicit owner intent.

## Authoritative Sources

- GitHub license picker: https://choosealicense.com/
- SPDX license list: https://spdx.org/licenses/
- GitHub repo license docs: https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository

## Required Placeholder Substitutions

- `<year>`:
- `<copyright holder>`:

## Launch Gate

- [ ] Exact upstream license text copied without agent rewrites.
- [ ] Copyright holder is correct.
- [ ] Package metadata uses the same SPDX identifier.
- [ ] README and website use the same license claim.

