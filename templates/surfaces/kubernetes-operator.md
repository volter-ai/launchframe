# Kubernetes Operator Readiness

Use when `product.launch_type` is `kubernetes_operator` or a selected `distribution_surfaces[]` entry has type `kubernetes_operator`.

## Scope

- Operator/controller name:
- Controller runtime/framework:
- CRDs installed:
- Namespace scope: cluster / namespace / both
- Metrics endpoint:
- Required cloud/provider APIs:

## Checks

- [ ] CRD install, upgrade, and uninstall behavior is verified or blocked.
- [ ] RBAC permissions are reviewed and least-privilege rationale is recorded.
- [ ] Controller service account, namespace scope, leader election, and finalizers are documented.
- [ ] Reconciliation failure modes are exercised or explicitly blocked.
- [ ] Metrics endpoint is verified or out of scope.
- [ ] Resource requests/limits and default values are safe for a test cluster.
- [ ] `kind`, `k3d`, `minikube`, or equivalent smoke test is recorded.
- [ ] Uninstall cleanup behavior is verified or accepted as a limitation.
- [ ] Cluster data, credentials, cloud APIs, and outbound network calls are disclosed.
- [ ] "Production-ready", "secure", "enterprise", or "accurate cost" claims are owner-approved and evidence-backed, or removed.

## Evidence

| Check | Command / URL | Result |
|---|---|---|
| | | |
