import { describe, expect, it } from 'vitest';
import { registry } from './registry';

describe('course registry', () => {
  it('loads all five tracks and sixty lessons', () => {
    expect(registry.tracks).toHaveLength(5);
    expect(registry.lessons).toHaveLength(60);
  });

  it('provides three worlds and twelve lessons per track', () => {
    for (const track of registry.tracks) {
      expect(track.worlds).toHaveLength(3);
      expect(registry.lessonsByTrack[track.id]).toHaveLength(12);
      for (const world of track.worlds) {
        expect(registry.lessonsByTrack[track.id].filter((lesson) => lesson.worldId === world.id)).toHaveLength(4);
      }
    }
  });

  it('gives every lesson three core tasks and one bonus task', () => {
    for (const lesson of registry.lessons) {
      expect(lesson.tasks).toHaveLength(3);
      expect(lesson.bonusTask.bonus).toBe(true);
    }
  });
});
