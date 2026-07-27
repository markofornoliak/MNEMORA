import { beforeEach, describe, expect, it } from 'vitest';
import { completeTask, readProgress } from './progressStore';

describe('progress store', () => {
  beforeEach(() => localStorage.clear());

  it('recovers from malformed stored data', () => {
    localStorage.setItem('mnemora:progress:v1', JSON.stringify({ completedTasks: 'bad', xp: -20, streak: 'bad' }));
    expect(readProgress()).toMatchObject({ completedTasks: [], xp: 0, streak: 0 });
  });

  it('awards XP once per task', () => {
    completeTask('task-1', 35);
    completeTask('task-1', 35);
    const state = readProgress();
    expect(state.xp).toBe(35);
    expect(state.completedTasks).toEqual(['task-1']);
  });
});
