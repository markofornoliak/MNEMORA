import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, LockOpen, Orbit } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ProgressBar } from '../components/ProgressBar';
import { getTrack, getWorldLessons, registry } from '../data/registry';
import { getTrackProgress } from '../features/progress/progressStore';
import { useProgress } from '../features/progress/useProgress';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function TrackPage() {
  const { trackId } = useParams();
  const track = getTrack(trackId);
  const progress = useProgress();
  useDocumentTitle(track?.name ?? 'Трек');
  if (!track) return <Navigate to="/tracks" replace />;
  const trackProgress = getTrackProgress(track.id, registry.lessons, progress);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 opacity-50" style={{ background: `radial-gradient(circle at 72% 25%, ${track.color}28, transparent 38%), linear-gradient(135deg, transparent, ${track.secondaryColor}12)` }} />
        <div className="relative mx-auto max-w-[1300px] px-4 py-12 md:px-8 md:py-20">
          <Link to="/tracks" className="inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-white"><ArrowLeft size={15} /> Все треки</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <div className="flex items-center gap-4"><span className="grid h-16 w-16 place-items-center rounded-3xl border border-white/10 font-mono text-2xl" style={{ color: track.color, background: `${track.color}14` }}>{track.icon}</span><div><p className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color: track.color }}>Language constellation</p><p className="mt-1 text-sm text-slate-500">{track.worlds.length} мира · 12 уроков · 48 заданий</p></div></div>
              <h1 className="mt-7 font-display text-5xl font-semibold tracking-[-0.04em] text-white sm:text-7xl">{track.name}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">{track.description}</p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur"><div className="flex items-center justify-between"><span className="text-sm text-slate-400">Синхронизация трека</span><span className="font-display text-3xl text-white">{trackProgress}%</span></div><div className="mt-5"><ProgressBar value={trackProgress} color={track.color} /></div><p className="mt-5 text-xs leading-5 text-slate-500">Прогресс хранится локально в браузере и не требует аккаунта.</p></div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1300px] space-y-16 px-4 py-12 md:px-8 md:py-20">
        {track.worlds.map((world, worldIndex) => {
          const worldLessons = getWorldLessons(track.id, world.id);
          const completedCount = worldLessons.filter((lesson) => progress.completedLessons.includes(lesson.id)).length;
          return (
            <section key={world.id} aria-labelledby={`world-${world.id}`}>
              <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 font-mono text-sm" style={{ color: track.color }}>{world.icon}</span><span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">World {worldIndex + 1} / 3</span></div>
                  <h2 id={`world-${world.id}`} className="mt-5 font-display text-3xl text-white">{world.title}</h2>
                  <p className="mt-2 text-sm font-medium" style={{ color: track.color }}>{world.subtitle}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-500">{world.description}</p>
                  <div className="mt-5"><ProgressBar value={Math.round((completedCount / worldLessons.length) * 100)} color={track.color} label={`${completedCount}/${worldLessons.length} уроков`} /></div>
                </div>
                <div className="grid gap-3">
                  {worldLessons.map((lesson, lessonIndex) => {
                    const completed = progress.completedLessons.includes(lesson.id);
                    return <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="group flex items-center gap-4 rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:p-5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/[0.08] font-mono text-sm text-slate-500 group-hover:text-white">{completed ? <CheckCircle2 size={19} style={{ color: track.color }} /> : String(lessonIndex + 1).padStart(2, '0')}</span>
                      <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600"><span>{lesson.difficulty}</span><span>·</span><span className="inline-flex items-center gap-1"><Clock3 size={11} /> {lesson.duration} мин</span><span>·</span><span className="inline-flex items-center gap-1"><LockOpen size={11} /> доступен</span></div><h3 className="mt-2 truncate font-display text-lg text-white">{lesson.title}</h3><p className="mt-1 truncate text-sm text-slate-500">{lesson.subtitle}</p></div>
                      <ArrowRight size={18} className="shrink-0 text-slate-600 transition group-hover:translate-x-1 group-hover:text-white" />
                    </Link>;
                  })}
                </div>
              </div>
            </section>
          );
        })}
        <div className="rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(86,241,255,.1),transparent_35%),rgba(255,255,255,.025)] p-7 md:p-10"><Orbit className="text-cyan-200" /><h2 className="mt-5 font-display text-3xl text-white">Созвездие спроектировано для расширения</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">Компоненты не содержат списков уроков. Все маршруты, миры, редакторы и карточки строятся из типизированного реестра. Добавление контента не требует изменения UI-слоя.</p></div>
      </div>
    </div>
  );
}
