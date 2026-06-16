import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const requiredWorkspaceFiles = [
  '00-org-context.json',
  '00-owner-authorization.md',
  '00-brand-context.md',
  '00-master-checklist.md',
  '00-external-prereqs.md',
  '01-strategy.md',
  '01-business-model-research.md',
  '02-show-hn.md',
  '03-repo-readiness.md',
  '07-assets.md',
  '08-launch-day-runbook.md',
  '09-retro.md',
  '10-worklog.md',
  '11-adversarial-review.md',
  '12-owner-approval-gate.md',
  'SURFACE-PROFILES.md',
  'OWNER-QUESTIONS.md',
  'PENDING.md',
  'repo/README.md',
  'repo/SECURITY.md',
  'repo/CONTRIBUTING.md',
  'repo/CODE_OF_CONDUCT.md',
  'repo/LICENSE.SELECTOR.md',
  'repo/docs/PRIVACY.md',
  'repo/docs/TERMS.md',
  'repo/docs/TELEMETRY.md',
  'surfaces/package-npm.md',
  'surfaces/package-pypi.md',
  'surfaces/package-docker-ghcr.md',
  'surfaces/package-helm.md',
  'surfaces/marketplace-figma.md',
  'surfaces/desktop-release.md',
  'surfaces/docs-site.md',
  'surfaces/trust-privacy.md'
];

const requiredOrgPaths = [
  ['organization', 'legal_name'],
  ['organization', 'public_name'],
  ['product', 'public_name'],
  ['product', 'one_sentence_description'],
  ['product', 'launch_type'],
  ['product', 'project_mechanism'],
  ['product', 'primary_user'],
  ['product', 'core_falsifiable_claim'],
  ['launch', 'primary_channel']
];

const launchTypes = new Set([
  'cli',
  'library',
  'web_app',
  'desktop_app',
  'kubernetes_operator',
  'docs_site',
  'marketplace_plugin',
  'other'
]);

const surfaceTypes = new Set([
  'npm',
  'pypi',
  'docker',
  'ghcr',
  'helm',
  'figma_community',
  'github_release',
  'homebrew',
  'docs_site',
  'website',
  'trust_privacy',
  'other'
]);

const readinessTemplateByType = {
  npm: 'surfaces/package-npm.md',
  pypi: 'surfaces/package-pypi.md',
  docker: 'surfaces/package-docker-ghcr.md',
  ghcr: 'surfaces/package-docker-ghcr.md',
  helm: 'surfaces/package-helm.md',
  figma_community: 'surfaces/marketplace-figma.md',
  github_release: 'surfaces/desktop-release.md',
  homebrew: 'surfaces/desktop-release.md',
  docs_site: 'surfaces/docs-site.md',
  website: 'surfaces/docs-site.md',
  trust_privacy: 'surfaces/trust-privacy.md'
};

export async function validateWorkspace(target, options = {}) {
  const root = resolve(target);
  const failures = [];
  const warnings = [];

  const requiredFiles = options.templateMode
    ? requiredWorkspaceFiles.filter((file) => !file.startsWith('repo/docs/'))
    : requiredWorkspaceFiles;

  for (const file of requiredFiles) {
    if (!existsSync(join(root, file))) failures.push(`missing file: ${file}`);
  }

  let org = {};
  try {
    org = JSON.parse(readFileSync(join(root, '00-org-context.json'), 'utf8'));
  } catch (error) {
    failures.push(`invalid JSON: 00-org-context.json (${error.message})`);
  }

  for (const path of requiredOrgPaths) {
    const value = valueAt(org, path);
    if (isMissing(value) || (!options.templateMode && hasPlaceholder(value))) {
      failures.push(`missing org context field: ${path.join('.')}`);
    }
  }

  if (!options.templateMode) {
    if (!launchTypes.has(org.product?.launch_type)) {
      failures.push(`product.launch_type must be one of: ${Array.from(launchTypes).join(', ')}`);
    }
    validateOwnerAuthorization(org, failures);
    validateDistributionSurfaces(org, failures);
    validateNoUnresolvedPlaceholders(root, filesForPlaceholderValidation(org), failures);
    validateSelectedSurfaceModules(root, org, failures);
    validateEvidenceReport(root, org, failures);
  }

  const prereqs = readIfExists(join(root, '00-external-prereqs.md'));
  if (!prereqs.includes('capture first, qualify later') && !prereqs.includes('Capture first, qualify later')) {
    warnings.push('external prereqs should preserve the low-friction capture rule');
  }

  const checklist = readIfExists(join(root, '00-master-checklist.md'));
  for (const needle of ['Current Launch Dashboard', 'Readiness Gates']) {
    if (!checklist.includes(needle)) failures.push(`master checklist missing: ${needle}`);
  }

  if (!options.templateMode) {
    const pending = readIfExists(join(root, 'PENDING.md'));
    if (!pending.includes('Pending Queue')) failures.push('PENDING.md missing Pending Queue');
  }

  if (failures.length) {
    throw new Error(['Launchframe validation failed:', ...failures.map((failure) => `- ${failure}`)].join('\n'));
  }

  return { root, warnings };
}

function validateDistributionSurfaces(org, failures) {
  const surfaces = org.distribution_surfaces;
  if (!Array.isArray(surfaces) || surfaces.length === 0) {
    failures.push('00-org-context.json must define at least one distribution_surfaces[] entry');
    return;
  }

  let requiredCount = 0;
  for (const [index, surface] of surfaces.entries()) {
    for (const key of ['id', 'type', 'scope']) {
      if (isMissing(surface?.[key]) || hasPlaceholder(surface[key])) {
        failures.push(`distribution_surfaces[${index}] missing ${key}`);
      }
    }
    if (!['required', 'optional', 'out_of_scope'].includes(surface.scope)) {
      failures.push(`distribution_surfaces[${index}].scope must be required, optional, or out_of_scope`);
    }
    if (surfaceTypes.size && surface.type && !surfaceTypes.has(surface.type)) {
      failures.push(`distribution_surfaces[${index}].type must be one of: ${Array.from(surfaceTypes).join(', ')}`);
    }
    if (surface.scope === 'out_of_scope') continue;

    if (surface.scope === 'required') requiredCount += 1;
    for (const key of ['name', 'verification_command', 'expected_result', 'async_review_state', 'side_effect_required', 'current_state', 'readiness_template']) {
      if (isMissing(surface?.[key]) || hasPlaceholder(surface[key])) {
        failures.push(`distribution_surfaces[${index}] missing ${key}`);
      }
    }

    if (
      surface.readiness_template &&
      readinessTemplateByType[surface.type] &&
      surface.readiness_template !== readinessTemplateByType[surface.type]
    ) {
      failures.push(`distribution_surfaces[${index}].readiness_template should be ${readinessTemplateByType[surface.type]}`);
    }
    if (
      surface.async_review_state &&
      !['not_applicable', 'not_submitted', 'submitted', 'changes_requested', 'approved', 'published'].includes(surface.async_review_state)
    ) {
      failures.push(`distribution_surfaces[${index}].async_review_state is invalid`);
    }
    if (
      surface.side_effect_required &&
      !['none', 'reserve', 'publish_staging', 'publish_public', 'submit_review', 'deploy_public'].includes(surface.side_effect_required)
    ) {
      failures.push(`distribution_surfaces[${index}].side_effect_required is invalid`);
    }
    if (
      surface.current_state &&
      !['not_started', 'prepared', 'verified', 'published', 'blocked', 'out_of_scope'].includes(surface.current_state)
    ) {
      failures.push(`distribution_surfaces[${index}].current_state is invalid`);
    }
  }

  if (requiredCount === 0) {
    failures.push('00-org-context.json must mark at least one distribution surface as required');
  }
}

function validateOwnerAuthorization(org, failures) {
  const status = org.owner_authorization?.authorization_status;
  if (!['approved', 'approved_with_limits'].includes(status)) {
    failures.push('owner_authorization.authorization_status must be approved or approved_with_limits before normal validation can pass');
  }
  const sideEffects = org.owner_authorization?.allowed_side_effects;
  if (!sideEffects || typeof sideEffects !== 'object') {
    failures.push('owner_authorization.allowed_side_effects must be filled');
  }
  const credentials = org.owner_authorization?.credential_paths;
  if (!Array.isArray(credentials)) {
    failures.push('owner_authorization.credential_paths must be an array');
    return;
  }

  const requiredProviders = new Set(
    (org.distribution_surfaces || [])
      .filter((surface) => surface.scope === 'required' && surface.credential_provider && surface.credential_provider !== 'none')
      .map((surface) => surface.credential_provider)
  );
  for (const provider of requiredProviders) {
    const matching = credentials.find((credential) => credential.provider === provider);
    if (!matching || isMissing(matching.path) || hasPlaceholder(matching.path)) {
      failures.push(`missing credential path for required provider: ${provider}`);
    }
  }
}

function validateSelectedSurfaceModules(root, org, failures) {
  const requiredSurfaces = (org.distribution_surfaces || []).filter((surface) => surface.scope === 'required');
  for (const surface of requiredSurfaces) {
    const template = surface.readiness_template;
    const absolute = join(root, template);
    if (!existsSync(absolute)) {
      failures.push(`missing readiness template for required surface ${surface.id}: ${template}`);
      continue;
    }

    const text = readIfExists(absolute);
    if (text.includes('- [ ]')) {
      failures.push(`required surface module still has unchecked readiness items: ${template}`);
    }
    if (/\|\s*\|\s*\|\s*\|/.test(text)) {
      failures.push(`required surface module has empty evidence rows: ${template}`);
    }
  }
}

function validateEvidenceReport(root, org, failures) {
  const evidencePath = join(root, 'EVIDENCE-REPORT.md');
  if (!existsSync(evidencePath)) {
    failures.push('missing file: EVIDENCE-REPORT.md');
    return;
  }

  const text = readIfExists(evidencePath);
  const unresolved = findUnresolved(text);
  if (unresolved) failures.push(`unresolved placeholder in EVIDENCE-REPORT.md: ${unresolved}`);

  const requiredSurfaces = (org.distribution_surfaces || []).filter((surface) => surface.scope === 'required');
  for (const surface of requiredSurfaces) {
    if (!text.includes(surface.id) && !text.includes(surface.name)) {
      failures.push(`EVIDENCE-REPORT.md missing required surface evidence: ${surface.id}`);
    }
  }
}

function filesForPlaceholderValidation(org) {
  const files = [
    '00-org-context.json',
    '00-owner-authorization.md',
    '12-owner-approval-gate.md'
  ];

  const surfaces = Array.isArray(org.distribution_surfaces) ? org.distribution_surfaces : [];
  for (const surface of surfaces) {
    if (surface.scope === 'required' && typeof surface.readiness_template === 'string') {
      files.push(surface.readiness_template);
    }
  }

  return files;
}

function validateNoUnresolvedPlaceholders(root, files, failures) {
  for (const file of files) {
    const text = readIfExists(join(root, file));
    if (!text) continue;
    const unresolved = findUnresolved(text);
    if (unresolved) failures.push(`unresolved placeholder in ${file}: ${unresolved}`);
  }
}

function findUnresolved(text) {
  const patterns = [
    /<[^>\n]+>/,
    /\bTBD\b/,
    /\bTODO\b/,
    /\[ \] Owner approval packet reviewed/
  ];
  const match = patterns.map((pattern) => text.match(pattern)).find(Boolean);
  return match ? match[0] : '';
}

function isMissing(value) {
  return value === undefined || value === null || value === '';
}

function hasPlaceholder(value) {
  return typeof value === 'string' && findUnresolved(value);
}

function valueAt(object, path) {
  return path.reduce((current, key) => {
    if (current && typeof current === 'object' && key in current) return current[key];
    return undefined;
  }, object);
}

function readIfExists(path) {
  if (!existsSync(path)) return '';
  return readFileSync(path, 'utf8');
}
