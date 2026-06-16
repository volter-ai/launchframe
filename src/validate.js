import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const requiredWorkspaceFiles = [
  '00-org-context.json',
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
  'OWNER-QUESTIONS.md',
  'PENDING.md',
  'repo/README.md',
  'repo/SECURITY.md',
  'repo/CONTRIBUTING.md',
  'repo/CODE_OF_CONDUCT.md',
  'repo/LICENSE.SELECTOR.md',
  'repo/docs/PRIVACY.md',
  'repo/docs/TERMS.md',
  'repo/docs/TELEMETRY.md'
];

const requiredOrgPaths = [
  ['organization', 'legal_name'],
  ['organization', 'public_name'],
  ['product', 'public_name'],
  ['product', 'one_sentence_description'],
  ['surfaces', 'package_name'],
  ['surfaces', 'install_command'],
  ['launch', 'primary_channel']
];

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
    if (value === undefined || value === null || value === '') {
      failures.push(`missing org context field: ${path.join('.')}`);
    }
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
