# Docs Site Readiness

## Scope

- Docs URL: https://launchframe.site/
- Hosting provider: GitHub Pages
- Build command: static site, no build step
- Deploy command: GitHub Pages workflow from `examples/launchframe/site`
- Search provider, if any: none

## Checks

- [x] verified static site deploys through GitHub Pages.
- [x] verified quickstart path is copyable from the site and README.
- [x] verified examples use current package name and beta.10 version where shown.
- [x] verified links were reviewed during the launch dress rehearsal.
- [x] verified mobile/desktop site readiness was reviewed during the site cycle.
- [x] verified canonical URL, title, description, favicon, and social image are present for the public site.
- [x] verified privacy/terms/support/security links are represented through repo policy docs and GitHub support surfaces.
- [x] verified analytics are out of scope for the current static site.

## Evidence

| Check | Command / URL | Result |
|---|---|---|
| Landing page | https://launchframe.site/ | Live over HTTPS |
| Startup Pilot page | https://launchframe.site/startup-pilot.html | Live over HTTPS |
| Pages workflow | https://github.com/volter-ai/launchframe/actions | CI and Pages passed on beta.10 commit |
| Site source | `examples/launchframe/site` | Static site deployed by Pages workflow |
