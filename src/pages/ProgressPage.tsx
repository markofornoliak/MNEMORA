import { Award, BookOpenCheck, Flame, RotateCcw, Sparkles } from 'lucide-react';
import { TrackCard } from '../components/TrackCard';
import { registry } from '../data/registry';
import { getTrackProgress, readProgress, writeProgress } from '../features/progress/progressStore';
import { useProgress } from '../features/progress/useProgress';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function ProgressPage() {
  useDocumentTitle('Прогресс');
  const progress = useProgress();
  const completion = Math.round((progress.completedLessons.length / registry.lessons.length) * 100);
  const reset = () => {
    if (window.confirm('Сбросить весь локальный прогресс MNEMORA?')) {
      writeProgress({ completedLessons: [], completedTasks: [], xp: 0, streak: 0, lastActiveDate: null });
    }
  };
  const state = readProgress();
  return (
    <div className="mx-auto max-w-[1300px] px-4 py-12 md:px-8 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Local telemetry</p><h1 className="mt-3 font-display text-5xl tracking-tight text-white">Панель прогресса</h1><p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">Все данные остаются на этом устройстве. Аккаунт, backend и передача учебной активности не используются.</p></div><button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-xs text-slate-400 transition hover:bg-white/5 hover:text-white"><RotateCcw size={15} /> Сбросить прогресс</button></div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[{ icon: Sparkles, label: 'Опыт', value: state.xp.toLocaleString('en-US'), suffix: 'XP' },{ icon: BookOpenCheck, label: 'Уроки', value: state.completedLessons.length, suffix: `/ ${registry.lessons.length}` },{ icon: Award, label: 'Задания', value: state.completedTasks.length, suffix: `/ ${registry.lessons.length * 4}` },{ icon: Flame, label: 'Серия', value: state.streak, suffix: 'дн.' }].map(({ icon: Icon, label, value, suffix }) => <div key={label} className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6"><Icon size={18} className="text-cyan-200" /><p className="mt-7 font-display text-3xl text-white">{value} <span className="text-base text-slate-600">{suffix}</span></p><p className="mt-2 text-xs text-slate-500">{label}</p></div>)}
      </div>
      <div className="mt-8 rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_12%_50%,rgba(86,241,255,.12),transparent_30%),rgba(255,255,255,.025)] p-7 md:p-10"><div className="flex items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">Archive restoration</p><h2 className="mt-3 font-display text-3xl text-white">Глобальная синхронизация</h2></div><p className="font-display text-5xl text-white">{completion}%</p></div><div className="mt-7 h-3 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 transition-all" style={{ width: `${completion}%` }} /></div></div>
      <div className="mt-12"><h2 className="font-display text-3xl text-white">По созвездиям</h2><div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{registry.tracks.map((track) => <TrackCard key={track.id} track={track} progress={getTrackProgress(track.id, registry.lessons, progress)} />)}</div></div>
    </div>
  );
}
