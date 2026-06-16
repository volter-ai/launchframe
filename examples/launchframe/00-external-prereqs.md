# Launchframe — External Prerequisites

Use ignored local env files for secrets. Do not print tokens in logs.

## Credential Readiness

| Provider | Purpose | Credential path | Status |
|---|---|---|---|
| GitHub | repo, releases, Pages | `gh` auth for `volter-ai/launchframe` | verified |
| npm | `launchframe-cli` publish | ignored `.env` `NPM_TOKEN`, temporary npmrc | verified |
| Name.com | `launchframe.site` DNS/domain | ignored local env key path | verified |
| Tally | Startup Pilot capture | Tally dashboard/API access | verified |
| HN | Show HN posting | `aaronyetc` created during rehearsal | pending suitability |
| Reddit | pre-submit rehearsal | signed-in browser session | rehearsed |

## Capture Rule

Capture first, qualify later. Startup Pilot capture asks for email and optional "how did you hear about Launchframe?" information; deeper qualification happens after capture.

## Side Effects Completed

| Side effect | Evidence | Result |
|---|---|---|
| npm publish | https://www.npmjs.com/package/launchframe-cli/v/0.1.0-beta.10 | published |
| GitHub release | https://github.com/volter-ai/launchframe/releases/tag/v0.1.0-beta.10 | created |
| Site deploy | https://launchframe.site/ | live |
| Domain/HTTPS | https://launchframe.site/ | live |
| Tally capture | https://launchframe.site/startup-pilot.html | verified |

## Stop Rules

- Do not use isolated fresh browser profiles for logged-in account-console work.
- Do not submit HN, Reddit, or social posts without final owner approval.
- Do not post from a newly-created HN account unless a human reviewer approves account suitability.
