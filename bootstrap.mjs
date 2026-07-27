import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

if (existsSync('src/main.tsx')) {
  console.log('MNEMORA source tree is already present.');
  process.exit(0);
}

const payloadDir = '.payload';
const chunks = readdirSync(payloadDir)
  .filter((name) => /^chunk-\d+$/.test(name))
  .sort((a, b) => a.localeCompare(b));

if (!chunks.length) {
  throw new Error('MNEMORA source payload is missing.');
}

const encoded = chunks.map((name) => readFileSync(join(payloadDir, name), 'utf8')).join('');
const archive = '.mnemora-source.tar.xz';
writeFileSync(archive, Buffer.from(encoded, 'base64'));
mkdirSync('.mnemora-bootstrap', { recursive: true });

const result = spawnSync('tar', ['-xJf', archive, '--strip-components=1', '-C', '.'], {
  stdio: 'inherit'
});

rmSync(archive, { force: true });
rmSync('.mnemora-bootstrap', { recursive: true, force: true });

if (result.status !== 0 || !existsSync('src/main.tsx')) {
  throw new Error('Could not reconstruct the MNEMORA source tree. GNU/BSD tar with xz support is required.');
}

console.log('MNEMORA source tree reconstructed successfully.');
