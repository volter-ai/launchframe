import { writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

export async function createEvidenceReport(target) {
  const root = resolve(target);
  const now = new Date().toISOString();
  const content = `# Launchframe Evidence Report

Generated: ${now}

## Required Manual Evidence

| Gate | Evidence | Result |
|---|---|---|
| Repo | TBD | TBD |
| Package install | TBD | TBD |
| Website | TBD | TBD |
| Capture path | TBD | TBD |
| Policy/trust docs | TBD | TBD |
| Launch context validation | \`launchframe validate .\` | TBD |

## Notes

Record command outputs, URLs, submission IDs, deploy IDs, screenshots, and owner confirmations here. Do not mark a launch gate complete without durable evidence.
`;
  const path = join(root, 'EVIDENCE-REPORT.md');
  await writeFile(path, content);
  return { path };
}

