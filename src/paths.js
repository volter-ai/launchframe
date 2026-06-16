import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));

export const packageRoot = resolve(here, '..');
export const templatesRoot = resolve(packageRoot, 'templates');
