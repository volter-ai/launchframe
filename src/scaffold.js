import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { templatesRoot } from './paths.js';

const scaffoldFiles = [
  '.env.example',
  '00-org-context.json',
  '00-brand-context.md',
  '00-master-checklist.md',
  '00-external-prereqs.md',
  '01-strategy.md',
  '01-business-model-research.md',
  '02-show-hn.md',
  '03-repo-readiness.md',
  '04-social.md',
  '05-reddit.md',
  '06-outreach.md',
  '07-assets.md',
  '08-launch-day-runbook.md',
  '09-retro.md',
  '10-worklog.md',
  'OWNER-QUESTIONS.md',
  'PENDING.md'
];

export async function scaffoldWorkspace(target, options = {}) {
  const targetDir = resolve(target);
  if (options.force) await rm(targetDir, { recursive: true, force: true });
  await assertEmptyOrMissing(targetDir);
  await mkdir(targetDir, { recursive: true });

  for (const file of scaffoldFiles) {
    await cp(join(templatesRoot, file), join(targetDir, file));
  }
  await cp(join(templatesRoot, 'repo'), join(targetDir, 'repo'), { recursive: true });
  await cp(join(templatesRoot, 'policies'), join(targetDir, 'repo', 'docs'), { recursive: true });
  await mkdir(join(targetDir, 'site', 'assets'), { recursive: true });
  await mkdir(join(targetDir, 'references'), { recursive: true });
  await mkdir(join(targetDir, 'review'), { recursive: true });

  return { targetDir };
}

async function assertEmptyOrMissing(targetDir) {
  try {
    const info = await stat(targetDir);
    if (!info.isDirectory()) throw new Error(`${targetDir} exists and is not a directory`);
    const entries = await readdir(targetDir);
    if (entries.length > 0) {
      throw new Error(`${targetDir} already exists and is not empty. Use --force to replace it.`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') return;
    throw error;
  }
}
