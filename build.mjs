import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'dist');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js']) cpSync(resolve(root, file), resolve(output, file));
cpSync(resolve(root, 'public'), output, { recursive: true });
console.log('Shopfront static build written to dist/.');
