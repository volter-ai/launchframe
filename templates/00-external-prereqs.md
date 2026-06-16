# <Product> — External Prerequisites

Fill this before attempting a full dress rehearsal or real launch. This file exists so agents do not discover missing credentials halfway through the launch.

## Rehearsal Modes

Use the right word for the run:

- **Tabletop dry run:** fill docs, choose targets, and simulate the sequence without external side effects.
- **Real dress rehearsal:** execute low-risk external steps for real: repo creation, hosted site, package publish if safe, domain purchase if approved, DNS/hosting verification, and publish checks.
- **Public launch:** post to public channels and invite real users.

Do not call a tabletop dry run a dress rehearsal. A real dress rehearsal should leave external evidence: URLs, package versions, DNS records, deploy URLs, verification commands, and screenshots/logs where useful.

## Surface Scope Matrix

Fill this before checking credentials. This prevents optional providers from turning into fake blockers.

| Surface | Scope | Provider/account | Required before current mode? | Current state | Next action |
|---|---|---|---|---|---|
| GitHub repo | required / optional / out of scope |  | yes / no |  |  |
| Package registry | required / optional / out of scope |  | yes / no |  |  |
| Domain registrar | required / optional / out of scope |  | yes / no |  |  |
| Hosting | required / optional / out of scope |  | yes / no |  |  |
| HTTPS | required / optional / pending propagation |  | yes / no |  |  |
| Email sending/receiving | required / optional / out of scope |  | yes / no |  |  |
| Social/community accounts | required / optional / out of scope |  | yes / no |  |  |
| Analytics/monitoring | required / optional / out of scope |  | yes / no |  |  |

Rules:
- If a provider is not chosen, mark it out of scope and stop checking its credentials.
- If a surface is optional but advertised publicly, it becomes required.
- If a surface is waiting on DNS/certificate propagation, mark it pending propagation, not blocked.

## Required For Full Dress Rehearsal

### Launch Session Preflight

Run this before making external changes.

- [ ] `git status --short` reviewed.
- [ ] Unrelated dirty files recorded and excluded from launch commits.
- [ ] Commit/checkpoint cadence selected: every material pass / every external side effect / every visual pass.
- [ ] Product launch repo has its own local ignored `.env`.
- [ ] Any shared operator secret source is documented by path, but not treated as the launch repo's credential source of truth.
- [ ] No secret values appear in staged diffs.
- [ ] Shell is using the expected credential source for each provider.
- [ ] Temp credential files, if needed, have a deletion plan before the command is run.
- [ ] The operator has approved the current mode and its allowed side effects.

Credential placement rule:

- Put launch credentials in the active launch repo's ignored `.env`.
- Commit only `.env.example` with variable names and comments.
- Do not leave a launch depending on another product repo's `.env`; that creates invisible coupling and causes agents to use the wrong shell state.
- A shared local vault can be used as an input source, but copy or export the needed values into the active repo before launch verification.
- Never commit real token values, screenshots of token values, or generated temporary npmrc files.

### Signed-In Browser / Account Console Access

Some launch steps require a real account console, not a fresh automation browser.

- [ ] `.claude/skills/browser/SKILL.md` read before browser-required account work.
- [ ] Required account consoles identified: npm / registrar / hosting / email / social / other.
- [ ] `.volter/chrome-profiles.json` configured locally from `.volter/chrome-profiles.example.json`.
- [ ] Agent has started or attached to a named browser-skill eval-server session with the required signed-in Chrome profile.
- [ ] Agent has listed tabs, selected the intended tab, and verified the target account before account-console work starts.
- [ ] Do not use MCP, an isolated browser, or a fresh Playwright profile for account-console work.
- [ ] Do not assume `open -a "Google Chrome"` gives the agent controllable signed-in browser access.

Verification:

```sh
node --experimental-strip-types .claude/skills/browser/scripts/list-sessions.ts
node --experimental-strip-types .claude/skills/browser/scripts/open-session.ts --profile <profile> --name account-console-check &
PORT=$(cat /tmp/bb-account-console-check-eval-port.txt)
curl -s localhost:$PORT/tabs
curl -s localhost:$PORT/eval -H 'Content-Type: application/json' \
  -d '{"code": "await page.goto(\"https://www.npmjs.com/settings/<user>/tokens\", {timeout:1000, waitUntil:\"domcontentloaded\"}); return page.url();"}'
curl -s localhost:$PORT/eval -H 'Content-Type: application/json' \
  -d '{"code": "return await page.locator(\"body\").ariaSnapshot({timeout:1000});"}'
```

Rule: if the browser skill session redirects to login, it is not the right signed-in profile. Stop and fix browser control before trying token creation, billing, registrar, hosting, or social-account setup.

### GitHub

- [ ] `gh auth status` succeeds.
- [ ] Token has repo creation/push permissions.
- [ ] Target owner/org:
- [ ] Target repo:
- [ ] Public/private setting:

Verification:

```sh
gh auth status
gh repo view <owner>/<repo>
```

### npm

- [ ] `npm whoami` succeeds.
- [ ] Registry is `https://registry.npmjs.org`.
- [ ] Package name checked.
- [ ] Publish token supports package write.
- [ ] If account publish policy requires it, token has 2FA bypass or operator has current OTP.
- [ ] Active publish token is confirmed, not merely visible as a masked token in `npm token list`.
- [ ] If a new bypass token must be created through npm.com, use the signed-in browser gate above first.

Verification:

```sh
set -a; source .env; set +a
npm whoami
npm config get registry
npm view <package> name version --json
npm token list --json
```

Important token rule:

- `npm token list` only shows masked token values after creation.
- A bypass-capable token listed there cannot be recovered from npm later.
- The token used by `npm publish` must be present in the shell as `NPM_TOKEN`/`NODE_AUTH_TOKEN` or in `.npmrc`.
- If `.npmrc` contains a different token than the bypass token, publish can still fail with a 2FA/bypass-token error even when `npm whoami` succeeds.
- Prefer an isolated temporary userconfig for publish verification so stale global/user `.npmrc` tokens cannot shadow the intended token.
- Before publish, verify that the token loaded from the active repo `.env` is the token being used. `npm whoami` alone is insufficient.

Headless publish:

```sh
set -a; source .env; set +a
printf "//registry.npmjs.org/:_authToken=%s\nregistry=https://registry.npmjs.org/\n" "$NPM_TOKEN" > /tmp/<product>-npmrc
npm publish --userconfig=/tmp/<product>-npmrc --registry=https://registry.npmjs.org --access public --tag <tag>
rm -f /tmp/<product>-npmrc
```

Interactive publish:

```sh
npm publish --access public --tag <tag> --otp <otp>
```

### Domain Registrar

- [ ] `NAMECOM_USERNAME` present in `.env`.
- [ ] `NAMECOM_TOKEN` present in `.env`.
- [ ] Optional sandbox keys present: `NAMECOM_DEV_USERNAME`, `NAMECOM_DEV_TOKEN`.
- [ ] Candidate domains checked.
- [ ] Purchase price and renewal price recorded.
- [ ] Explicit purchase approval received before registration.

Default rehearsal TLD:

- Use `.site` for cheap dress-rehearsal domains unless the product has a stronger reason to use another TLD.
- Avoid `.icu` as a default despite low first-year pricing because it can read as medical/intensive-care in the US.
- Still record renewal price even when first-year cost is the main concern.
- If the first-year price is the main concern, do not over-optimize renewal for disposable rehearsals; still record it so the operator can shut the domain down before renewal.

Verification:

```sh
set -a; source .env; set +a
curl -s -u "$NAMECOM_USERNAME:$NAMECOM_TOKEN" \
  'https://api.name.com/v4/domains:checkAvailability' \
  -X POST -H 'Content-Type: application/json' \
  -d '{"domainNames":["<domain>"]}'
```

Purchase gate:

```text
Do not register a domain until the operator approves:
- exact domain
- first-year price
- renewal price
- registrar
- DNS target
```

### Hosting

- [ ] Hosting provider chosen: GitHub Pages / Vercel / Cloudflare Pages / Fly.io / other.
- [ ] Required token present.
- [ ] Deploy command verified.
- [ ] Production URL recorded.
- [ ] Unchosen hosting providers are marked out of scope in the surface matrix.

Vercel prerequisites:

- [ ] `VERCEL_TOKEN` present in `.env`.
- [ ] `VERCEL_SCOPE` present and accepted by CLI, or deployment works without explicit scope.

GitHub Pages prerequisites:

- [ ] Repo exists.
- [ ] Pages source branch/path configured.
- [ ] Pages URL returns 200 over HTTPS.
- [ ] If using a custom domain, DNS resolves to GitHub Pages records and no CAA record blocks Let's Encrypt.
- [ ] Custom-domain HTTPS verified, or recovery intervention recorded.

GitHub Pages custom-domain HTTPS recovery:

Use this when all of the following are true:

- `gh api repos/<owner>/<repo>/pages/health` returns no errors.
- Apex DNS resolves to GitHub Pages A records and, if used, AAAA records.
- `www` resolves to `<owner>.github.io`.
- `dig +short <domain> CAA @1.1.1.1` is empty or permits Let's Encrypt.
- `curl -Iv https://<domain>/` shows GitHub serving the fallback `*.github.io` certificate instead of a certificate whose SAN includes `<domain>`.

Concrete intervention:

1. Temporarily clear the Pages custom domain.
2. Save/apply the Pages config.
3. Re-add the exact custom domain.
4. Confirm the `CNAME` file still contains the exact domain.
5. Poll `gh api repos/<owner>/<repo>/pages/health` and `curl -Iv https://<domain>/` until the served certificate SAN includes the domain.
6. Only then enable HTTPS enforcement and change canonical/OG URLs from `http://` to `https://`.

CLI shape:

```sh
gh api -X PUT repos/<owner>/<repo>/pages -f cname=''
gh api -X PUT repos/<owner>/<repo>/pages -f cname='<domain>'
gh api repos/<owner>/<repo>/pages/health
curl -Iv https://<domain>/
```

Do not switch site metadata to HTTPS while GitHub is still serving the fallback `*.github.io` certificate.

### Email / Sending

Only required if the launch uses a custom support/security/press email or sends email.

- [ ] `RESEND_API_KEY` present in `.env`, if using Resend.
- [ ] Domain added to Resend.
- [ ] DNS records added.
- [ ] Sending verified.
- [ ] Receiving configured if inbound email is needed.

### Startup Pilot Signup Capture

Only required if the launch uses a paid-intent CTA such as "Start Startup Pilot."

- [ ] Signup destination selected: form / database / CRM / app account table / other.
- [ ] Required fields defined with minimal capture first: email required; "how did you hear about us?" optional. Do not add name, company, role, team size, budget, pain, launch window, or qualification questions before capture unless the owner explicitly chooses a higher-friction application flow.
- [ ] Submission persists durably.
- [ ] Founder/operator receives notification.
- [ ] Confirmation message says no payment is collected until fit is confirmed.
- [ ] Export/backfill path exists before launch day.

Rule: capture first, qualify later. For a beta/startup-pilot CTA, every additional required field is a barrier between interest and the lead record. Optional attribution is useful because it explains which launch channel worked without blocking signup.

### Community / Social

- [ ] X/Twitter account exists or founder account selected.
- [ ] Discord/Slack community exists or explicitly not in scope.
- [ ] LinkedIn/founder profile selected.
- [ ] HN account selected.

Rule: social/community posting is never automated unless explicitly requested. Never solicit votes.

## Current Credential Inventory

Record presence only; never commit secret values.

| Key | Required for | Present? | Notes |
|---|---|---|---|
| `NAMECOM_USERNAME` | Domain purchase/DNS |  |  |
| `NAMECOM_TOKEN` | Domain purchase/DNS |  |  |
| `NAMECOM_DEV_USERNAME` | Name.com sandbox |  |  |
| `NAMECOM_DEV_TOKEN` | Name.com sandbox |  |  |
| `NAMECHEAP_API_KEY` | Namecheap DNS |  |  |
| `RESEND_API_KEY` | Email sending/receiving |  |  |
| `VERCEL_TOKEN` | Vercel deploy |  |  |
| `VERCEL_SCOPE` | Vercel deploy |  |  |
| `NPM_TOKEN` | Headless npm publish |  |  |

## Dress Rehearsal Evidence

Record actual external evidence here as the run proceeds.

| Surface | Evidence | Verified command/result | Notes |
|---|---|---|---|
| GitHub repo |  |  |  |
| Hosted site |  |  |  |
| npm package |  |  |  |
| Domain |  |  |  |
| DNS |  |  |  |
| Email |  |  |  |
| Social/community |  |  |  |
