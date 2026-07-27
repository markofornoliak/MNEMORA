import type { CourseRegistry, LanguageId, Lesson, Trek } from '../types/course';

const trackModules = import.meta.glob<{ default: Trek }>('./tracks/*/track.ts', { eager: true });
const lessonModules = import.meta.glob<{ default: Lesson }>('./tracks/*/lessons/*.ts', { eager: true });

export const tracks = Object.values(trackModules)
  .map((module) => module.default)
  .sort((a, b) => a.name.localeCompare(b.name));

export const lessons = Object.values(lessonModules)
  .map((module) => module.default)
  .sort((a, b) => a.trackId.localeCompare(b.trackId) || a.worldId.localeCompare(b.worldId) || a.order - b.order);

export const registry: CourseRegistry = {
  tracks,
  lessons,
  lessonsByTrack: tracks.reduce((acc, track) => {
    acc[track.id] = lessons.filter((lesson) => lesson.trackId === track.id);
    return acc;
  }, {} as Record<LanguageId, Lesson[]>)
};

export function getTrack(id?: string): Trek | undefined {
  return tracks.find((track) => track.id === id);
}

export function getLesson(id?: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}

export function getWorldLessons(trackId: LanguageId, worldId: string): Lesson[] {
  return lessons.filter((lesson) => lesson.trackId === trackId && lesson.worldId === worldId).sort((a, b) => a.order - b.order);
}

export function getAdjacentLessons(lesson: Lesson): { previous?: Lesson; next?: Lesson } {
  const trackLessons = lessons.filter((item) => item.trackId === lesson.trackId);
  const index = trackLessons.findIndex((item) => item.id === lesson.id);
  return { previous: trackLessons[index - 1], next: trackLessons[index + 1] };
}
