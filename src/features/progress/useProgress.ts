import { useEffect, useState } from 'react';
import { readProgress, type ProgressState } from './progressStore';

export function useProgress(): ProgressState {
  const [progress, setProgress] = useState(readProgress);
  useEffect(() => {
    const sync = () => setProgress(readProgress());
    window.addEventListener('storage', sync);
    window.addEventListener('mnemora:progress', sync);
    return () => {
      window.removeEventListener('storage', sync);
      window.removeEventListener('mnemora:progress', sync);
    };
  }, []);
  return progress;
}
