import { useEffect, useMemo, useState } from 'react';
import type { QualityTier } from '../config/scene';

function mediaMatches(query: string): boolean {
  try { return window.matchMedia(query).matches; } catch { return false; }
}

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
    const loseContext = context?.getExtension('WEBGL_lose_context');
    loseContext?.loseContext();
    return Boolean(context);
  } catch {
    return false;
  }
}

function detectTier(): QualityTier {
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const cores = navigator.hardwareConcurrency ?? 4;
  const reducedMotion = mediaMatches('(prefers-reduced-motion: reduce)');
  const coarsePointer = mediaMatches('(pointer: coarse)');
  const pixelPenalty = window.devicePixelRatio > 2 ? 2 : 0;
  const score = memory * 1.3 + cores + (coarsePointer ? -2 : 1) + (reducedMotion ? -3 : 0) - pixelPenalty;
  if (score <= 6) return 'low';
  if (score <= 13) return 'medium';
  return 'high';
}

function readStoredMode(): '3d' | '2d' | null {
  try {
    const stored = window.localStorage.getItem('mnemora:render-mode');
    return stored === '2d' || stored === '3d' ? stored : null;
  } catch { return null; }
}

function persistMode(mode: '3d' | '2d') {
  try { window.localStorage.setItem('mnemora:render-mode', mode); } catch { /* storage is optional */ }
}

export interface RenderProfile {
  webgl: boolean;
  quality: QualityTier;
  mode: '3d' | '2d';
  setMode: (mode: '3d' | '2d') => void;
}

export function useRenderProfile(): RenderProfile {
  const webgl = useMemo(() => supportsWebGL(), []);
  const [mode, setModeState] = useState<'3d' | '2d'>(() => {
    const stored = readStoredMode();
    return stored === '3d' && !webgl ? '2d' : stored ?? (webgl ? '3d' : '2d');
  });
  const quality = useMemo(() => detectTier(), []);

  useEffect(() => {
    if (!webgl && mode === '3d') {
      persistMode('2d');
      setModeState('2d');
    }
  }, [mode, webgl]);

  const setMode = (next: '3d' | '2d') => {
    const safeMode = next === '3d' && !webgl ? '2d' : next;
    persistMode(safeMode);
    setModeState(safeMode);
  };

  return { webgl, quality, mode, setMode };
}
