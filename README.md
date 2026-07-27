# MNEMORA — Code Observatory

MNEMORA is a portfolio-grade, local-first educational platform for learning Python, JavaScript, HTML/CSS, Java, and C++. It uses a narrative metaphor of a mnemonic code observatory: each programming language is a computational constellation, each track contains three orbiting worlds, and each lesson restores a fragment of the archive.

## Product scope

- Five complete language tracks.
- Three thematic worlds per track.
- Four lessons per world: 60 lessons total.
- Three practical tasks plus one bonus task per lesson: 240 challenge objects total (180 core tasks + 60 bonus tasks).
- CodeMirror 6 with language-specific syntax support.
- Python execution through a cached Pyodide Web Worker with isolated per-run namespaces and timeout recovery.
- JavaScript execution in a disposable Web Worker with a three-second timeout and restricted browser/network globals.
- HTML/CSS rendering in a sandboxed live-preview iframe.
- Java and C++ local approximate execution based on transparent static pattern analysis. This is intentionally an MVP choice: no backend, no API key, no rate limits, no third-party submission of source code. The interface always marks these results as approximate and recommends a local compiler for authoritative verification.
- Progress, XP, streaks, task completion, and lesson completion stored in `localStorage`.
- Interactive React Three Fiber world map plus a complete 2D alternative.
- Device-performance heuristic and low/medium/high 3D quality profiles, with configured per-location scale applied in the scene.
- Lazy-loaded 3D bundle, non-blocking loader, WebGL detection, reduced-motion support, keyboard-visible focus, skip navigation, and a persistent mobile navigation bar.

## Technology

React, TypeScript, Vite, Tailwind CSS, React Router, CodeMirror 6, Three.js, `@react-three/fiber`, `@react-three/drei`, Vitest, ESLint.

## Local development

```bash
npm install
npm run dev
```

Quality gate:

```bash
npm run check
```

The production build uses hash routing and a relative Vite base, so the generated `dist` can be deployed to GitHub Pages or another static host without server-side route rewriting.

## Content architecture

The UI never imports individual lessons. Vite discovers content automatically:

```text
src/data/tracks/
  python/
    track.ts
    lessons/
      01-01-first-signal.ts
      ...
  javascript/
  html-css/
  java/
  cpp/
```

`src/data/registry.ts` uses `import.meta.glob` to discover every `track.ts` and every file under `lessons/`.

### Add one lesson

1. Copy an existing lesson file into the correct `lessons/` directory.
2. Give it a unique `id`, valid `worldId`, and order.
3. Export it as the default `Lesson` object.

No component, route, or registry edit is required.

### Add one language

1. Create `src/data/tracks/<language-id>/track.ts` using the `Trek` interface.
2. Create `src/data/tracks/<language-id>/lessons/` and add lesson files.
3. Add the language identifier to `LanguageId` and provide a CodeMirror extension / runner implementation when the language is new to the runtime layer.
4. Add its visual coordinates and structure once in `src/config/scene.ts`.

The only required code changes are type/runtime capabilities specific to the new language; cards, routes, progress and 2D/3D navigation remain data-driven.

## Key folders

```text
src/
  app/                 router and application entry
  components/          shared UI primitives and learning workbenches
  config/              theme tokens and all 3D parameters
  data/                 data-driven course registry and lesson files
  features/
    code-runner/        runtime orchestration and validation
    progress/           localStorage persistence
  hooks/                rendering profile and document behavior
  pages/                route-level screens
  three-scenes/         R3F scene components
  types/                Trek, World, Lesson, Task and 3DLocation contracts
  workers/              isolated JavaScript and Pyodide execution
```

## Security and limitations

This is a frontend-only learning environment, not a hardened online judge. JavaScript uses a disposable worker; Python uses a cached worker that is terminated on timeout. Arbitrary learner code should still be considered untrusted. HTML is rendered with iframe sandboxing. Java/C++ output is approximate and does not claim compiler-level correctness.
