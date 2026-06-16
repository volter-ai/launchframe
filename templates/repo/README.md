# Repo And Policy Template Pack

Use this folder when creating the public repo collateral for a product launch.

Rule: fill placeholders from user-provided facts and verified product source. Do not let an agent invent policy, legal, security, telemetry, package, or support claims.

Recommended copy targets:

```text
<product-repo>/
  LICENSE
  SECURITY.md
  CONTRIBUTING.md
  CODE_OF_CONDUCT.md
  .github/
    ISSUE_TEMPLATE/
      bug_report.yml
      feature_request.yml
      question.yml
  docs/
    PRIVACY.md
    TERMS.md
    TELEMETRY.md
```

Before copying:

- Pick the actual license using `LICENSE.SELECTOR.md`.
- Fill `SECURITY.md` with the real security contact.
- Fill `CONTRIBUTING.md` with real setup/test commands.
- Use `CODE_OF_CONDUCT.md` with the real enforcement contact.
- Fill policy templates only from product facts and owner-approved commitments.
- Mark anything unknown as `TBD` and keep it as a launch blocker if public users rely on it.

