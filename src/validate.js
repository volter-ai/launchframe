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
  'surfaces/kubernetes-operator.md',
  'surfaces/marketplace-figma.md',
  'surfaces/desktop-release.md',
  'surfaces/local-ai-desktop.md',
  'surfaces/docs-site.md',
  'surfaces/trust-privacy.md'
];

const requiredOrgPaths = [
  ['organization', 'legal_name'],
  ['organization', 'public_name'],
  ['product', 'public_name'],
  ['product', 'one_sentence_description'],
  ['product', 'launch_type'],
  ['product', 'product_domains'],
  ['product', 'project_mechanism'],
  ['product', 'primary_user'],
  ['product', 'core_falsifiable_claim'],
  ['launch', 'primary_channel'],
  ['launch', 'readiness_mode']
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
  'kubernetes_operator',
  'figma_community',
  'github_release',
  'homebrew',
  'local_ai_desktop',
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
  kubernetes_operator: 'surfaces/kubernetes-operator.md',
  figma_community: 'surfaces/marketplace-figma.md',
  github_release: 'surfaces/desktop-release.md',
  homebrew: 'surfaces/desktop-release.md',
  local_ai_desktop: 'surfaces/local-ai-desktop.md',
  docs_site: 'surfaces/docs-site.md',
  website: 'surfaces/docs-site.md',
  trust_privacy: 'surfaces/trust-privacy.md'
};

const readinessModes = new Set([
  'pre_submit_ready',
  'submitted_waiting',
  'post_approval_ready',
  'public_launch_ready'
]);

const evidenceStatuses = new Set([
  'pass',
  'verified',
  'owner-approved',
  'owner-approved-out-of-scope',
  'owner-approved out of scope',
  'blocked',
  'deferred'
]);

const productDomains = new Set([
  'infra',
  'security',
  'privacy',
  'accessibility',
  'finance',
  'health',
  'legal',
  'local_ai',
  'audio',
  'desktop',
  'marketplace',
  'browser_app',
  'other'
]);

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
    if (!readinessModes.has(org.launch?.readiness_mode)) {
      failures.push(`launch.readiness_mode must be one of: ${Array.from(readinessModes).join(', ')}`);
    }
    validateOwnerAuthorization(org, failures);
    validateDistributionSurfaces(org, failures);
    validateProfileRequiredSurfaces(org, failures);
    validateProductDomains(org, failures);
    validateClaimRiskSurfaces(org, failures);
    validateNoUnresolvedPlaceholders(root, filesForPlaceholderValidation(org), failures);
    validateOwnerAuthorizationMarkdown(root, org, failures);
    validateSelectedSurfaceModules(root, org, failures);
    validateEvidenceReport(root, org, failures);
    validateOwnerApprovalGate(root, org, failures);
    validateReadinessMode(org, failures);
    validateChannelReadiness(root, org, failures);
    validateLaunchCopyConsistency(root, org, failures);
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

function validateProductDomains(org, failures) {
  const domains = org.product?.product_domains;
  if (!Array.isArray(domains) || domains.length === 0) {
    failures.push('product.product_domains must list at least one product domain');
    return;
  }
  for (const domain of domains) {
    if (hasPlaceholder(domain) || !productDomains.has(domain)) {
      failures.push(`product.product_domains contains invalid value: ${domain}`);
    }
  }
  const selected = requiredSurfaceTypes(org);
  if ((domains.includes('local_ai') || domains.includes('audio')) && !selected.has('local_ai_desktop')) {
    failures.push('local_ai or audio product domains require a required local_ai_desktop distribution surface');
  }
}

function validateProfileRequiredSurfaces(org, failures) {
  const launchType = org.product?.launch_type;
  const requiredTypes = requiredSurfaceTypesForLaunchType(launchType);
  if (!requiredTypes.length) return;

  const selected = requiredSurfaceTypes(org);
  for (const requirement of requiredTypes) {
    const options = Array.isArray(requirement) ? requirement : [requirement];
    if (!options.some((type) => selected.has(type))) {
      failures.push(`product.launch_type=${launchType} requires a required distribution surface of type: ${options.join(' or ')}`);
    }
  }
}

function requiredSurfaceTypesForLaunchType(launchType) {
  if (launchType === 'marketplace_plugin') {
    return ['figma_community', ['docs_site', 'website'], 'trust_privacy'];
  }
  if (launchType === 'kubernetes_operator') {
    return [['docker', 'ghcr'], 'helm', 'kubernetes_operator', ['docs_site', 'website'], 'trust_privacy'];
  }
  if (launchType === 'desktop_app') {
    return ['github_release', ['docs_site', 'website'], 'trust_privacy'];
  }
  return [];
}

function validateClaimRiskSurfaces(org, failures) {
  const selected = requiredSurfaceTypes(org);
  const riskValues = [
    ...Object.values(org.claim_risk || {}),
    ...Object.values(org.claim_risk_profile || {})
  ].filter((value) => typeof value === 'string');
  const needsTrust = riskValues.some((value) => ['high', 'verified', 'owner_approval_required', 'blocked'].includes(value));
  if (needsTrust && !selected.has('trust_privacy')) {
    failures.push('high or approval-required claim risk requires a required trust_privacy distribution surface');
  }
}

function requiredSurfaceTypes(org) {
  return new Set(
    (org.distribution_surfaces || [])
      .filter((surface) => surface.scope === 'required')
      .map((surface) => surface.type)
  );
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

function validateReadinessMode(org, failures) {
  const mode = org.launch?.readiness_mode;
  const requiredSurfaces = (org.distribution_surfaces || []).filter((surface) => surface.scope === 'required');
  for (const surface of requiredSurfaces) {
    if (mode === 'public_launch_ready') {
      if (!['not_applicable', 'published'].includes(surface.async_review_state)) {
        failures.push(`public_launch_ready requires ${surface.id}.async_review_state to be not_applicable or published`);
      }
      if (!['verified', 'published'].includes(surface.current_state)) {
        failures.push(`public_launch_ready requires ${surface.id}.current_state to be verified or published`);
      }
    }
    if (mode === 'post_approval_ready' && !['not_applicable', 'approved', 'published'].includes(surface.async_review_state)) {
      failures.push(`post_approval_ready requires ${surface.id}.async_review_state to be not_applicable, approved, or published`);
    }
    if (mode === 'submitted_waiting' && !['not_applicable', 'submitted', 'changes_requested', 'approved', 'published'].includes(surface.async_review_state)) {
      failures.push(`submitted_waiting requires ${surface.id}.async_review_state to be submitted, changes_requested, approved, published, or not_applicable`);
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
    if (/^- \[x\] (?!verified\b|owner-approved\b|owner-approved out of scope\b|blocked\b)/m.test(text)) {
      failures.push(`required surface module uses plain [x]; use [x] verified, [x] owner-approved out of scope, or [x] blocked: ${template}`);
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
  const rows = markdownRows(text);
  for (const surface of requiredSurfaces) {
    const row = rows.find((candidate) => candidate.raw.includes(surface.id) || candidate.raw.includes(surface.name));
    if (!row) {
      failures.push(`EVIDENCE-REPORT.md missing required surface evidence: ${surface.id}`);
      continue;
    }
    if (/\b(TBD|TODO)\b/i.test(row.raw) || /\|\s*(done|yes|n\/a|na)\s*\|/i.test(row.raw)) {
      failures.push(`EVIDENCE-REPORT.md has weak evidence for required surface: ${surface.id}`);
    }
    const reviewer = row.cells.at(-1);
    const date = row.cells.at(-2);
    const status = row.cells.at(-3)?.toLowerCase();
    const result = row.cells.at(-4);
    const evidence = row.cells.at(-5);
    const proofType = row.cells.at(-6);
    if (!proofType || !/command|url|artifact|screenshot|source|owner|registry|deploy|review/i.test(proofType)) {
      failures.push(`EVIDENCE-REPORT.md missing proof type for required surface: ${surface.id}`);
    }
    if (!evidence || evidence.length < 8 || /^(manual|checked|recorded|evidence)$/i.test(evidence) || !isConcreteEvidence(evidence)) failures.push(`EVIDENCE-REPORT.md missing concrete evidence for required surface: ${surface.id}`);
    if (!result || result.length < 4 || /^(pass|ok|works)$/i.test(result)) failures.push(`EVIDENCE-REPORT.md missing concrete result for required surface: ${surface.id}`);
    if (!evidenceStatuses.has(status)) failures.push(`EVIDENCE-REPORT.md invalid status for required surface ${surface.id}: ${status || 'missing'}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) failures.push(`EVIDENCE-REPORT.md missing YYYY-MM-DD date for required surface: ${surface.id}`);
    if (!reviewer || reviewer.length < 3) failures.push(`EVIDENCE-REPORT.md missing reviewer for required surface: ${surface.id}`);
    if (org.launch?.readiness_mode === 'public_launch_ready' && status !== 'pass' && status !== 'verified') {
      failures.push(`public_launch_ready requires pass/verified evidence for required surface: ${surface.id}`);
    }
  }
}

function validateOwnerAuthorizationMarkdown(root, org, failures) {
  const text = readIfExists(join(root, '00-owner-authorization.md'));
  for (const label of ['- Status:', '- Approver:', '- Date:', '- Launch mode authorized:', '- Final approver for irreversible public actions:']) {
    if (!hasFilledLabel(text, label)) failures.push(`00-owner-authorization.md missing ${label}`);
  }
  if (hasBlankMarkdownRows(text)) failures.push('00-owner-authorization.md has blank table rows');
  if (/\|\s*yes \/ no\s*\|/.test(text)) failures.push('00-owner-authorization.md still has unresolved yes/no choices');
  const jsonStatus = org.owner_authorization?.authorization_status;
  if (jsonStatus && !new RegExp(`- Status:\\s*${jsonStatus.replaceAll('_', '[ _-]')}`, 'i').test(text)) {
    failures.push('00-owner-authorization.md status must match 00-org-context.json owner_authorization.authorization_status');
  }
  const launchMode = org.launch?.readiness_mode;
  if (launchMode && !new RegExp(launchMode.replaceAll('_', '[ _-]'), 'i').test(text)) {
    failures.push('00-owner-authorization.md launch mode should reference launch.readiness_mode');
  }
  for (const surface of (org.distribution_surfaces || []).filter((candidate) => candidate.scope === 'required')) {
    if (!text.includes(surface.id) && !text.includes(surface.name)) {
      failures.push(`00-owner-authorization.md missing selected required surface: ${surface.id}`);
    }
  }
  const requiredProviders = new Set(
    (org.distribution_surfaces || [])
      .filter((surface) => surface.scope === 'required' && surface.credential_provider && surface.credential_provider !== 'none')
      .map((surface) => surface.credential_provider)
  );
  for (const provider of requiredProviders) {
    if (!new RegExp(`\\b${provider}\\b`, 'i').test(text)) {
      failures.push(`00-owner-authorization.md missing credential provider: ${provider}`);
    }
  }
  for (const [key, value] of Object.entries(org.owner_authorization?.allowed_side_effects || {})) {
    if (typeof value !== 'boolean') continue;
    const label = sideEffectLabel(key);
    const expected = value ? 'yes' : 'no';
    const pattern = new RegExp(`\\|[^\\n]*${label}[^\\n]*\\|\\s*${expected}\\s*\\|`, 'i');
    if (!pattern.test(text)) {
      failures.push(`00-owner-authorization.md side effect must match JSON: ${label}=${expected}`);
    }
  }
}

function validateOwnerApprovalGate(root, org, failures) {
  const text = readIfExists(join(root, '12-owner-approval-gate.md'));
  for (const label of ['- Requested decision:', '- Approver:', '- Date:', '- Scope approved:', '- Final verdict:', '- Owner approval record:']) {
    if (!hasFilledLabel(text, label)) failures.push(`12-owner-approval-gate.md missing ${label}`);
  }
  if (!/- Final verdict:\s*(go|conditional go|no-go)\b/i.test(text)) {
    failures.push('12-owner-approval-gate.md final verdict must be go, conditional go, or no-go');
  }
  if (hasBlankMarkdownRows(text)) failures.push('12-owner-approval-gate.md has blank table rows');
  if (/\|\s*(agent \/ owner|yes \/ no|ready \/ blocked|verified \/ owner-approved|approved \/ needs review|publish \/ submit \/ no action)/.test(text)) {
    failures.push('12-owner-approval-gate.md still has unresolved choice text in tables');
  }

  if (!/\|\s*[^|]{4,}\s*\|\s*(README|site|HN|Reddit|social|docs)[^|]*\|\s*[^|]{8,}\s*\|\s*(verified|owner-approved|weakened|blocked)\s*\|/i.test(text)) {
    failures.push('12-owner-approval-gate.md must include at least one completed public claim row');
  }

  const requiredSurfaces = (org.distribution_surfaces || []).filter((surface) => surface.scope === 'required');
  for (const surface of requiredSurfaces) {
    const surfaceRow = markdownRows(text).find((row) => row.raw.includes(surface.id) || row.raw.includes(surface.name));
    if (!surfaceRow) {
      failures.push(`12-owner-approval-gate.md missing required surface: ${surface.id}`);
      continue;
    }
    if (!/(ready|blocked|async review|out of scope|published|verified)/i.test(surfaceRow.raw)) {
      failures.push(`12-owner-approval-gate.md missing state for required surface: ${surface.id}`);
    }
  }

  const actionRows = markdownRows(text).filter((row) =>
    /Publish package|Flip repo public|Buy\/configure domain|Submit marketplace|Post Show HN|Post Reddit/.test(row.raw)
  );
  const requiredActions = ['Publish package/listing', 'Flip repo public', 'Buy/configure domain', 'Submit marketplace/app review', 'Post Show HN', 'Post Reddit/social'];
  for (const action of requiredActions) {
    if (!actionRows.some((row) => row.cells[0] === action)) {
      failures.push(`12-owner-approval-gate.md missing irreversible action row: ${action}`);
    }
  }
  for (const row of actionRows) {
    const approval = row.cells.at(-1)?.toLowerCase();
    if (!['approved', 'rejected', 'not_applicable', 'not applicable'].includes(approval)) {
      failures.push(`12-owner-approval-gate.md irreversible action approval must be approved, rejected, or not_applicable: ${row.cells[0] || 'action'}`);
    }
    for (const [index, cell] of row.cells.entries()) {
      if (!cell || /agent \/ owner|owner \/ agent-assisted|human account|established human account/i.test(cell)) {
        failures.push(`12-owner-approval-gate.md irreversible action row has unresolved cell ${index + 1}: ${row.cells[0] || 'action'}`);
      }
    }
  }

  const legalRows = markdownRows(text);
  const requiredLegalRows = ['License', 'Privacy', 'Terms', 'Telemetry/data use', 'Security/support'];
  for (const name of requiredLegalRows) {
    const row = legalRows.find((candidate) => candidate.cells[0] === name);
    if (!row) {
      failures.push(`12-owner-approval-gate.md missing legal/trust row: ${name}`);
      continue;
    }
    if (row.cells.slice(1).some((cell) => !cell || /approved \/ needs review|yes \/ no|verified \/ needs review/i.test(cell))) {
      failures.push(`12-owner-approval-gate.md legal/trust row incomplete: ${name}`);
    }
  }

  for (const label of ['- Show HN title:', '- Show HN URL:', '- Founder first comment:', '- Communities intentionally avoided:']) {
    if (org.launch?.primary_channel === 'Show HN' && !hasFilledLabel(text, label)) {
      failures.push(`12-owner-approval-gate.md missing launch copy field ${label}`);
    }
  }
}

function validateChannelReadiness(root, org, failures) {
  if (org.launch?.primary_channel !== 'Show HN') return;
  const showHn = readIfExists(join(root, '02-show-hn.md'));
  const rehearsal = readIfExists(join(root, '08-launch-day-runbook.md')) + '\n' + readIfExists(join(root, 'EVIDENCE-REPORT.md'));
  for (const label of ['Title:', 'URL:', 'Founder first comment:']) {
    if (!hasFilledLabel(showHn, label)) failures.push(`02-show-hn.md missing ${label}`);
  }
  if (!/HN account suitability:\s*(?=.*(?:account:\s*\S+|user:\s*\S+|u\/\S+|owner will post manually|manual-owner-post))(?=.*(?:\d{4}-\d{2}-\d{2}|reviewed by\s+\S+|reviewer:\s*\S+)).{12,}/i.test(showHn + '\n' + rehearsal)) {
    failures.push('Show HN readiness requires account suitability evidence');
  }
  if (!/Show HN pre-submit rehearsal:\s*(?=.*(?:screenshot|EVIDENCE|recorded|artifact|stopped before submit|pre-submit)).{12,}/i.test(showHn + '\n' + rehearsal)) {
    failures.push('Show HN readiness requires stop-before-submit rehearsal evidence');
  }
  if (!/Show HN pre-submit rehearsal.*\|\s*(command|url|artifact|screenshot|owner|review)/i.test(rehearsal)) {
    failures.push('EVIDENCE-REPORT.md should include a Show HN pre-submit rehearsal evidence row');
  }
}

function validateLaunchCopyConsistency(root, org, failures) {
  const publicText = [
    'repo/README.md',
    '00-brand-context.md',
    '01-strategy.md',
    '02-show-hn.md',
    '04-social.md',
    '05-reddit.md',
    '06-outreach.md',
    '12-owner-approval-gate.md'
  ].map((file) => readIfExists(join(root, file))).join('\n');

  const selected = requiredSurfaceTypes(org);
  const checks = [
    { pattern: /\bhomebrew\b/i, type: 'homebrew', label: 'Homebrew' },
    { pattern: /\b(local ai|local transcription|transcribes locally|offline transcription)\b/i, type: 'local_ai_desktop', label: 'local AI/transcription' },
    { pattern: /\b(no telemetry|private|encrypted|local-first|offline)\b/i, type: 'trust_privacy', label: 'privacy/local/offline' },
    { pattern: /\b(signed|notarized|checksum)\b/i, type: 'github_release', label: 'signed/checksum desktop release' },
    { pattern: /\bhelm\b/i, type: 'helm', label: 'Helm' },
    { pattern: /\b(docker|ghcr|container image)\b/i, type: ['docker', 'ghcr'], label: 'Docker/GHCR' }
  ];

  for (const check of checks) {
    if (!check.pattern.test(publicText)) continue;
    const types = Array.isArray(check.type) ? check.type : [check.type];
    if (!types.some((type) => selected.has(type))) {
      failures.push(`public copy mentions ${check.label} but no matching required distribution surface is selected`);
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
  const searchable = stripFencedCode(text);
  const patterns = [
    /<[^>\n]+>/,
    /\bTBD\b/,
    /\bTODO\b/,
    /\[ \] Owner approval packet reviewed/
  ];
  const match = patterns.map((pattern) => searchable.match(pattern)).find(Boolean);
  return match ? match[0] : '';
}

function stripFencedCode(text) {
  return text.replace(/```[\s\S]*?```/g, '');
}

function hasFilledLabel(text, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = text.match(new RegExp(`^${escaped}\\s*(.+)$`, 'm'));
  return Boolean(match && match[1].trim() && !findUnresolved(match[1]) && !/^(yes \/ no|approve launch as-is|go \/ conditional go|tabletop dry run \/)/i.test(match[1].trim()));
}

function hasBlankMarkdownRows(text) {
  return text
    .split('\n')
    .filter((line) => line.trim().startsWith('|') && !line.includes('---'))
    .some((line) => {
      const cells = line.split('|').slice(1, -1).map((cell) => cell.trim());
      return cells.length > 1 && cells.every((cell) => cell === '');
    });
}

function markdownRows(text) {
  return text
    .split('\n')
    .filter((line) => line.trim().startsWith('|') && !line.includes('---'))
    .map((line) => ({
      raw: line,
      cells: line.split('|').slice(1, -1).map((cell) => cell.trim())
    }));
}

function isConcreteEvidence(value) {
  return /(https?:\/\/|\/|\.\/|[A-Za-z]:\\|^gh\s|^npm\s|^npx\s|^curl\s|^rg\s|^python\s|^pytest\s|^docker\s|^helm\s|^kubectl\s|screenshot|artifact|sha256|digest|owner approval|release|registry|listing)/i.test(value);
}

function sideEffectLabel(key) {
  const labels = {
    read_public_sources: 'Read public sources',
    inspect_local_source: 'Inspect local source',
    create_local_files: 'Create local files',
    create_remote_repo: 'Create remote repo',
    publish_staging_package: 'Publish staging package/listing',
    publish_public_package: 'Publish public package/listing',
    buy_domain: 'Buy domain',
    deploy_public_site: 'Deploy public site',
    submit_marketplace_review: 'Submit marketplace/app review',
    post_public_channels: 'Post to HN/Reddit/social'
  };
  return labels[key] || key.replaceAll('_', ' ');
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
