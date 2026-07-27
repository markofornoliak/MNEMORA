# Track folder template

Copy this directory as `src/data/tracks/<new-id>/`, then add:

- `track.ts` exporting one default `Trek` object;
- `lessons/*.ts` exporting default `Lesson` objects.

Use an existing track as the executable template. The registry, routes, cards, progress dashboard, 2D map and 3D scene discover the folder automatically. A truly new syntax/runtime may also require one entry in `features/code-runner/languages.ts`; this is a runtime capability extension, not a component change.
