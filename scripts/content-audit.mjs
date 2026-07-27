import fs from 'node:fs';
import path from 'node:path';

const root = new URL('../src/data/tracks/', import.meta.url);
const trackDirs = fs.readdirSync(root).filter((name) => !name.startsWith('_') && fs.statSync(new URL(`./${name}/`, root)).isDirectory());
const lessonFiles = trackDirs.flatMap((track) => {
  const lessons = new URL(`./${track}/lessons/`, root);
  return fs.readdirSync(lessons).filter((name) => name.endsWith('.ts')).map((name) => path.join(track, 'lessons', name));
});

const failures = [];
for (const track of trackDirs) {
  const count = lessonFiles.filter((file) => file.startsWith(`${track}/`)).length;
  if (count !== 12) failures.push(`${track}: expected 12 lesson files, received ${count}`);
}

console.log(JSON.stringify({ tracks: trackDirs.length, lessonFiles: lessonFiles.length, failures }, null, 2));
process.exitCode = failures.length ? 1 : 0;
