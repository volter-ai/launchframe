import { readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

export async function createEvidenceReport(target) {
  const root = resolve(target);
  const now = new Date().toISOString();
  const surfaces = await readDistributionSurfaces(root);
  const surfaceRows = surfaces.length
    ? surfaces.map((surface) => surfaceEvidenceRow(surface)).join('\n')
    : '| Surface | Type | Scope | State | Verification Command | Evidence URL Or Command | Result | Status | Date |';
  const content = `# Launchframe Evidence Report

Generated: ${now}

## Distribution Surface Evidence

| Surface | Type | Scope | State | Verification Command | Evidence URL Or Command | Result | Status | Date |
|---|---|---|---|---|---|---|---|---|
${surfaceRows}

## Side-Effect Evidence

| Action | Surface / target | Authorization | Credential path | Evidence | Result |
|---|---|---|---|---|---|
| Repo public/private transition | TBD | TBD | TBD | TBD | TBD |
| Package/listing publish or staging publish | TBD | TBD | TBD | TBD | TBD |
| Site/docs deploy | TBD | TBD | TBD | TBD | TBD |
| Domain/DNS/HTTPS | TBD | TBD | TBD | TBD | TBD |
| Public posting rehearsal | TBD | final approval required | human account / owner-assisted | TBD | TBD |

## Required Manual Evidence

| Gate | Evidence | Result |
|---|---|---|
| Repo | TBD | TBD |
| Website/docs | TBD | TBD |
| Capture path | TBD | TBD |
| Policy/trust docs | TBD | TBD |
| Adversarial review | TBD | TBD |
| Owner approval gate | TBD | TBD |
| Launch context validation | \`launchframe validate .\` | TBD |

## Notes

Record command outputs, URLs, submission IDs, deploy IDs, screenshots, and owner confirmations here. Do not mark a launch gate complete without durable evidence.
`;
  const path = join(root, 'EVIDENCE-REPORT.md');
  await writeFile(path, content);
  return { path };
}

async function readDistributionSurfaces(root) {
  try {
    const text = await readFile(join(root, '00-org-context.json'), 'utf8');
    const org = JSON.parse(text);
    return Array.isArray(org.distribution_surfaces)
      ? org.distribution_surfaces.filter((surface) => surface.scope !== 'out_of_scope')
      : [];
  } catch {
    return [];
  }
}

function surfaceEvidenceRow(surface) {
  return [
    surface.id || surface.name || surface.type || 'surface',
    surface.type || 'surface',
    surface.scope || 'unknown',
    surface.current_state || 'TBD',
    surface.verification_command || 'TBD',
    'TBD',
    'TBD',
    'TBD',
    'TBD'
  ].map(markdownCell).join('|').replace(/^/, '| ').replace(/$/, ' |');
}

function markdownCell(value) {
  return String(value).replaceAll('|', '\\|').trim();
}
