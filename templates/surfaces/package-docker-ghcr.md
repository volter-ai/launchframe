# Docker / GHCR Package Readiness

Use when a selected `distribution_surfaces[]` entry has type `docker` or `ghcr`.

## Scope

- Image name:
- Registry:
- Tags:
- Digest:
- Pull/run command:

## Checks

- [ ] Dockerfile builds from clean checkout.
- [ ] Runtime image contains only intended files.
- [ ] Image user, entrypoint, exposed ports, volumes, and environment variables are intentional.
- [ ] Image runs with documented command.
- [ ] Version tag and immutable digest are recorded.
- [ ] Multi-arch support is verified or explicitly out of scope.
- [ ] Secrets are not baked into layers.
- [ ] SBOM generated if in scope.
- [ ] Vulnerability scan reviewed if security-sensitive.
- [ ] Image signing/provenance is completed or deferred.
- [ ] Public pull works unauthenticated if advertised.
- [ ] If the image is optional, launch copy does not imply Docker is the primary install path.

## Evidence

| Check | Command / URL | Result |
|---|---|---|
| | | |
