import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Flame,
  Orbit,
  RotateCcw,
  Rocket,
  Sparkles,
  Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
  const nextLesson = registry.lessons.find((lesson) => !state.completedLessons.includes(lesson.id)) ?? registry.lessons[0];
  const nextTrack = registry.tracks.find((track) => track.id === nextLesson.trackId) ?? registry.tracks[0];
  const activeTracks = registry.tracks.filter((track) => getTrackProgress(track.id, registry.lessons, state) > 0).length;
  const completedTracks = registry.tracks.filter((track) => getTrackProgress(track.id, registry.lessons, state) === 100).length;
  const totalProjects = registry.tracks.reduce((sum, track) => sum + track.projects.length, 0);

  const achievements = [
    { title: 'Первый сигнал', description: 'Завершить первый урок', unlocked: state.completedLessons.length >= 1, icon: Sparkles },
    { title: 'Инженер протоколов', description: 'Подтвердить 12 задач', unlocked: state.completedTasks.length >= 12, icon: CheckCircle2 },
    { title: 'Полиглот', description: 'Начать два языковых трека', unlocked: activeTracks >= 2, icon: Orbit },
    { title: 'Орбитальная серия', description: 'Поддерживать серию 7 дней', unlocked: state.streak >= 7, icon: Flame },
    { title: 'Системный уровень', description: 'Набрать 2 000 XP', unlocked: state.xp >= 2000, icon: Trophy },
    { title: 'Архив восстановлен', description: 'Завершить все 60 уроков', unlocked: completion === 100, icon: Award }
  ];

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute right-10 top-0 h-80 w-80 rounded-full bg-cyan-300/[0.07] blur-[120px]" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-7">
            <div><p className="eyebrow">Local telemetry</p><h1 className="mt-3 font-display text-5xl tracking-[-0.045em] text-white md:text-7xl">Ваш учебный контур</h1><p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">Прогресс, задачи и XP хранятся только на этом устройстве. Панель показывает не активность ради активности, а реальные завершённые действия.</p></div>
            <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-xs text-slate-500 transition hover:bg-white/5 hover:text-white"><RotateCcw size={15} /> Сбросить локальные данные</button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-16">
        <section className="grid gap-px overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4" aria-label="Основные показатели">
          {[
            { icon: Sparkles, label: 'Опыт', value: state.xp.toLocaleString('en-US'), suffix: 'XP', detail: 'за подтверждённые действия' },
            { icon: BookOpenCheck, label: 'Уроки', value: state.completedLessons.length, suffix: `/ ${registry.lessons.length}`, detail: `${completion}% всей программы` },
            { icon: Award, label: 'Задания', value: state.completedTasks.length, suffix: `/ ${registry.lessons.length * 4}`, detail: 'включая бонусные протоколы' },
            { icon: Flame, label: 'Серия', value: state.streak, suffix: 'дн.', detail: state.streak ? 'текущая учебная серия' : 'начнётся после первого задания' }
          ].map(({ icon: Icon, label, value, suffix, detail }) => (
            <div key={label} className="bg-[#070a13] p-6 md:p-7"><div className="flex items-center justify-between"><Icon size={18} className="text-cyan-200" /><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-700">Verified</span></div><p className="mt-8 font-display text-4xl text-white">{value} <span className="text-base text-slate-600">{suffix}</span></p><p className="mt-2 text-xs font-medium text-slate-300">{label}</p><p className="mt-1 text-[11px] text-slate-600">{detail}</p></div>
          ))}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_12%_50%,rgba(86,241,255,.12),transparent_30%),rgba(255,255,255,.025)] p-7 md:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">Archive restoration</p><h2 className="mt-3 font-display text-3xl text-white">Глобальная синхронизация</h2></div><p className="font-display text-6xl text-white">{completion}%</p></div>
            <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 transition-all" style={{ width: `${completion}%` }} /></div>
            <div className="mt-7 grid grid-cols-3 gap-3 text-center"><div><strong className="font-display text-2xl text-white">{activeTracks}</strong><span className="mt-1 block text-[10px] text-slate-600">активных треков</span></div><div><strong className="font-display text-2xl text-white">{completedTracks}</strong><span className="mt-1 block text-[10px] text-slate-600">завершено</span></div><div><strong className="font-display text-2xl text-white">{totalProjects}</strong><span className="mt-1 block text-[10px] text-slate-600">проектных брифов</span></div></div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-[#080c18] p-7 md:p-8">
            <div className="flex items-center justify-between"><div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500"><span className="status-dot" /> Next action</div><Rocket size={17} style={{ color: nextTrack.color }} /></div>
            <p className="mt-8 text-xs" style={{ color: nextTrack.color }}>{nextTrack.name}</p>
            <h2 className="mt-2 font-display text-2xl text-white">{nextLesson.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{nextLesson.subtitle}</p>
            <Link to={`/lesson/${nextLesson.id}`} className="mt-7 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">Продолжить <ArrowRight size={16} /></Link>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="achievements-title">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Capability milestones</p><h2 id="achievements-title" className="mt-3 font-display text-4xl text-white">Достижения</h2></div><p className="text-sm text-slate-600">{achievements.filter((item) => item.unlocked).length} / {achievements.length} открыто</p></div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map(({ title, description, unlocked, icon: Icon }) => (
              <article key={title} className={`rounded-[26px] border p-5 transition ${unlocked ? 'border-cyan-200/[0.16] bg-cyan-200/[0.035]' : 'border-white/[0.07] bg-white/[0.018] opacity-55'}`}>
                <div className="flex items-center justify-between"><span className={`grid h-11 w-11 place-items-center rounded-2xl border ${unlocked ? 'border-cyan-200/20 bg-cyan-200/[0.06] text-cyan-100' : 'border-white/[0.08] text-slate-600'}`}><Icon size={18} /></span><span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">{unlocked ? 'Unlocked' : 'Locked'}</span></div>
                <h3 className="mt-5 font-display text-xl text-white">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" aria-labelledby="track-progress-title"><div><p className="eyebrow">Trajectory status</p><h2 id="track-progress-title" className="mt-3 font-display text-4xl text-white">По языкам</h2></div><div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{registry.tracks.map((track) => <TrackCard key={track.id} track={track} progress={getTrackProgress(track.id, registry.lessons, progress)} />)}</div></section>
      </div>
    </div>
  );
}
