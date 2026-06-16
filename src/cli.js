import { createEvidenceReport } from './evidence.js';
import { scaffoldWorkspace } from './scaffold.js';
import { validateWorkspace } from './validate.js';

const usage = `Launchframe

Usage:
  launchframe init <dir> [--force]
  launchframe validate <dir> [--template]
  launchframe evidence <dir>
  launchframe help
`;

export async function run(args) {
  const [command, target, ...rest] = args;
  if (!command || command === 'help' || command === '--help' || command === '-h') {
    console.log(usage.trim());
    return;
  }

  if (!target) throw new Error(usage.trim());

  if (command === 'init') {
    const result = await scaffoldWorkspace(target, { force: rest.includes('--force') });
    console.log(`Created Launchframe workspace at ${result.targetDir}`);
    return;
  }

  if (command === 'validate') {
    const result = await validateWorkspace(target, { templateMode: rest.includes('--template') });
    for (const warning of result.warnings) console.warn(`Warning: ${warning}`);
    console.log(`Launchframe validation passed for ${result.root}`);
    return;
  }

  if (command === 'evidence') {
    const result = await createEvidenceReport(target);
    console.log(`Wrote ${result.path}`);
    return;
  }

  throw new Error(`Unknown command: ${command}\n\n${usage.trim()}`);
}
