# Repository Structure

Launchframe separates the reusable product from its dogfood output.

| Path | Purpose |
|---|---|
| `bin/` | CLI entrypoint exposed by npm. |
| `src/` | Scaffold, validation, and evidence command implementation. |
| `templates/` | Reusable launch workspace templates. |
| `docs/` | Operating procedure, repo quality, visual workflow, UI makeover, and readiness review docs. |
| `examples/launchframe/` | The Launchframe dogfood launch output. |

Do not put generated launch work at the repository root. The root should stay focused on the package a user installs.
