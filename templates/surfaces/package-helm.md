# Helm / Kubernetes Readiness

Use when a selected `distribution_surfaces[]` entry has type `helm` or the launch type is `kubernetes_operator`.

## Scope

- Chart name:
- Chart registry/repo:
- Kubernetes versions:
- Required cluster dependencies:
- Install command:

## Checks

- [ ] `helm lint` passes.
- [ ] `helm template` output reviewed.
- [ ] CRDs, RBAC, service accounts, and permissions are reviewed.
- [ ] Default values are safe for a test cluster.
- [ ] `helm install` smoke succeeds in `kind`, `k3d`, or equivalent.
- [ ] If this is not an operator or chart launch, Helm is explicitly marked out of scope.
- [ ] Upgrade/uninstall behavior is documented or explicitly out of scope.
- [ ] Container image tags/digests are pinned intentionally.
- [ ] Prometheus/Grafana/cloud-provider dependencies are documented if relevant.
- [ ] Network calls and cluster permissions are disclosed.
- [ ] Cost/performance claims cite reproducible evidence and pricing/source assumptions.
- [ ] Claims distinguish YAML validation from admission control or live-cluster enforcement.

## Evidence

| Check | Command / URL | Result |
|---|---|---|
| | | |
