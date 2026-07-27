import type { Lesson, LanguageId } from '../../types/course';

const STORAGE_KEY = 'mnemora:progress:v1';

export interface ProgressState {
  completedLessons: string[];
  completedTasks: string[];
  xp: number;
  streak: number;
  lastActiveDate: string | null;
}

function emptyProgress(): ProgressState {
  return { completedLessons: [], completedTasks: [], xp: 0, streak: 0, lastActiveDate: null };
}

function uniqueStrings(value: unknown): string[] {
  return Array.isArray(value) ? [...new Set(value.filter((item): item is string => typeof item === 'string'))] : [];
}

function sanitizeProgress(value: unknown): ProgressState {
  if (!value || typeof value !== 'object') return emptyProgress();
  const input = value as Partial<ProgressState>;
  return {
    completedLessons: uniqueStrings(input.completedLessons),
    completedTasks: uniqueStrings(input.completedTasks),
    xp: Number.isFinite(input.xp) ? Math.max(0, Math.floor(input.xp as number)) : 0,
    streak: Number.isFinite(input.streak) ? Math.max(0, Math.floor(input.streak as number)) : 0,
    lastActiveDate: typeof input.lastActiveDate === 'string' ? input.lastActiveDate : null
  };
}

export function readProgress(): ProgressState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? sanitizeProgress(JSON.parse(raw)) : emptyProgress();
  } catch {
    return emptyProgress();
  }
}

function localDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function updateStreak(previous: ProgressState): Pick<ProgressState, 'streak' | 'lastActiveDate'> {
  const now = new Date();
  const today = localDateKey(now);
  if (previous.lastActiveDate === today) return { streak: previous.streak, lastActiveDate: today };
  const previousDay = new Date(now);
  previousDay.setDate(now.getDate() - 1);
  const yesterday = localDateKey(previousDay);
  return { streak: previous.lastActiveDate === yesterday ? previous.streak + 1 : 1, lastActiveDate: today };
}

export function writeProgress(next: ProgressState): ProgressState {
  const safe = sanitizeProgress(next);
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(safe)); } catch { /* storage may be unavailable in private mode */ }
  window.dispatchEvent(new CustomEvent('mnemora:progress'));
  return safe;
}

export function completeTask(taskId: string, xp: number): ProgressState {
  const current = readProgress();
  if (current.completedTasks.includes(taskId)) return current;
  const streak = updateStreak(current);
  return writeProgress({ ...current, ...streak, completedTasks: [...current.completedTasks, taskId], xp: current.xp + Math.max(0, xp) });
}

export function completeLesson(lesson: Lesson): ProgressState {
  const current = readProgress();
  if (current.completedLessons.includes(lesson.id)) return current;
  const streak = updateStreak(current);
  return writeProgress({ ...current, ...streak, completedLessons: [...current.completedLessons, lesson.id], xp: current.xp + 100 });
}

export function getTrackProgress(trackId: LanguageId, lessons: Lesson[], state = readProgress()): number {
  const relevant = lessons.filter((lesson) => lesson.trackId === trackId);
  if (!relevant.length) return 0;
  const completed = relevant.filter((lesson) => state.completedLessons.includes(lesson.id)).length;
  return Math.round((completed / relevant.length) * 100);
}
