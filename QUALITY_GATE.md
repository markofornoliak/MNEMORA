# MNEMORA Quality Gate

This source tree is published through a verification workflow that runs before the repository is replaced with the final project files.

## Required checks

```bash
npm install --no-audit --no-fund
npm run audit:content
npm run typecheck
npm run lint
npm run test
npm run build
```

## Local pre-publication audit

- 5 tracks, 15 worlds, 60 lessons.
- 180 core tasks and 60 bonus tasks with unique identifiers.
- 102 TypeScript/TSX files parsed with zero syntax diagnostics.
- Strict project-local TypeScript audit completed with zero diagnostics using temporary declarations only for unavailable third-party modules.
- Python examples: 12/12 exact expected outputs.
- JavaScript examples: 12/12 exact expected outputs.
- Java/C++ approximate runner examples: 24/24 exact expected outputs.
- No external font request; the UI uses system font stacks.

The repository CI and Pages workflows run the complete dependency-backed gate on GitHub-hosted runners.

## GitHub-hosted verification

The publication workflow installed all declared dependencies on Node.js 22 and passed the content audit, TypeScript typecheck, ESLint, Vitest, and the production Vite build before committing this source tree.
