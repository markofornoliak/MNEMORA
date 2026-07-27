import type { LanguageId, ThreeDLocation } from '../types/course';

export type QualityTier = 'low' | 'medium' | 'high';

export const sceneLocations: Record<LanguageId, ThreeDLocation> = {
  python: { position: [-5.6, 1.1, -0.8], accent: '#55e6a5', secondary: '#0d6c67', structure: 'orb', scale: 1.15, orbitRadius: 1.7 },
  javascript: { position: [-1.9, -1.4, 3.8], accent: '#ffd44a', secondary: '#8c6412', structure: 'ring', scale: 1.05, orbitRadius: 1.55 },
  'html-css': { position: [3.4, 1.8, 2.8], accent: '#ff6b8b', secondary: '#7141ff', structure: 'crystal', scale: 1.15, orbitRadius: 1.65 },
  java: { position: [5.2, -1.2, -1.8], accent: '#ff8a4c', secondary: '#7f2d26', structure: 'spire', scale: 1.12, orbitRadius: 1.6 },
  cpp: { position: [0.8, 2.2, -4.7], accent: '#62a8ff', secondary: '#3148a8', structure: 'reactor', scale: 1.18, orbitRadius: 1.75 }
};

export const sceneQuality = {
  low: { dpr: 1, stars: 350, particles: 0, shadows: false, segments: 16, postEffects: false },
  medium: { dpr: 1.35, stars: 900, particles: 80, shadows: false, segments: 28, postEffects: false },
  high: { dpr: 1.75, stars: 1800, particles: 180, shadows: true, segments: 48, postEffects: true }
} as const;
