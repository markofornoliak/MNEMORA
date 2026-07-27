import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Code2,
  Layers3,
  LockOpen,
  Rocket,
  Target
} from 'lucide-react';
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
  const firstIncomplete = registry.lessonsByTrack[track.id].find((lesson) => !progress.completedLessons.includes(lesson.id)) ?? registry.lessonsByTrack[track.id][0];

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 74% 22%, ${track.color}26, transparent 34%), radial-gradient(circle at 20% 80%, ${track.secondaryColor}18, transparent 34%)` }} />
        <div className="relative mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-20">
          <Link to="/tracks" className="inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-white"><ArrowLeft size={15} /> Все траектории</Link>

          <div className="mt-10 grid gap-10 xl:grid-cols-[1fr_390px] xl:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="grid h-16 w-16 place-items-center rounded-3xl border border-white/10 font-mono text-2xl" style={{ color: track.color, background: `${track.color}14` }}>{track.icon}</span>
                <div><p className="font-mono text-[10px] uppercase tracking-[0.28em]" style={{ color: track.color }}>Language trajectory</p><p className="mt-1 text-sm text-slate-500">{track.level}</p></div>
              </div>
              <h1 className="mt-8 font-display text-6xl font-semibold tracking-[-0.055em] text-white sm:text-8xl">{track.name}</h1>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{track.tagline}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">{track.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{track.skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}</div>
            </div>

            <aside className="rounded-[32px] border border-white/10 bg-[#080c18]/85 p-6 shadow-panel backdrop-blur-xl">
              <div className="flex items-center justify-between"><span className="text-sm text-slate-400">Прогресс траектории</span><span className="font-display text-4xl text-white">{trackProgress}%</span></div>
              <div className="mt-5"><ProgressBar value={trackProgress} color={track.color} /></div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="telemetry-cell"><Clock3 size={14} /><strong>{track.estimatedHours}</strong><span>часов</span></div>
                <div className="telemetry-cell"><Layers3 size={14} /><strong>12</strong><span>уроков</span></div>
                <div className="telemetry-cell"><Rocket size={14} /><strong>3</strong><span>проекта</span></div>
              </div>
              <Link to={`/lesson/${firstIncomplete.id}`} className="mt-6 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">{trackProgress ? 'Продолжить трек' : 'Начать траекторию'} <ArrowRight size={16} /></Link>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20">
        <section className="grid gap-4 lg:grid-cols-[.8fr_1.2fr]" aria-labelledby="outcome-title">
          <div className="rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-7 md:p-9">
            <Target size={20} style={{ color: track.color }} />
            <p className="mt-7 eyebrow">Final capability</p>
            <h2 id="outcome-title" className="mt-3 font-display text-3xl text-white">Что вы сможете</h2>
            <p className="mt-4 text-sm leading-8 text-slate-400">{track.outcome}</p>
          </div>
          <div className="rounded-[32px] border border-white/[0.08] bg-[#080c18] p-7 md:p-9">
            <div className="flex items-center gap-3"><Code2 size={19} className="text-cyan-200" /><p className="eyebrow">Learning contract</p></div>
            <div className="mt-7 grid gap-5 sm:grid-cols-3">
              <div><strong className="font-display text-xl text-white">Сначала модель</strong><p className="mt-2 text-xs leading-6 text-slate-500">Объясняете, как код выполняется и какие данные меняются.</p></div>
              <div><strong className="font-display text-xl text-white">Затем эксперимент</strong><p className="mt-2 text-xs leading-6 text-slate-500">Проверяете прогноз в редакторе и находите границы решения.</p></div>
              <div><strong className="font-display text-xl text-white">После — артефакт</strong><p className="mt-2 text-xs leading-6 text-slate-500">Соединяете темы в проект, который можно показать и объяснить.</p></div>
            </div>
          </div>
        </section>

        <div className="mt-20 space-y-20">
          {track.worlds.map((world, worldIndex) => {
            const worldLessons = getWorldLessons(track.id, world.id);
            const completedCount = worldLessons.filter((lesson) => progress.completedLessons.includes(lesson.id)).length;
            const worldProgress = Math.round((completedCount / worldLessons.length) * 100);
            return (
              <section key={world.id} aria-labelledby={`world-${world.id}`}>
                <div className="grid gap-7 lg:grid-cols-[320px_1fr]">
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 font-mono text-sm" style={{ color: track.color, background: `${track.color}0d` }}>{world.icon}</span><span className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">Stage {worldIndex + 1} / 3</span></div>
                    <h2 id={`world-${world.id}`} className="mt-6 font-display text-4xl text-white">{world.title}</h2>
                    <p className="mt-2 text-sm font-medium" style={{ color: track.color }}>{world.subtitle}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-500">{world.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{world.skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}</div>
                    <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"><p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">Stage artifact</p><p className="mt-2 text-sm text-slate-300">{world.artifact}</p></div>
                    <div className="mt-6"><ProgressBar value={worldProgress} color={track.color} label={`${completedCount}/${worldLessons.length} уроков`} /></div>
                  </div>

                  <div className="grid gap-3">
                    {worldLessons.map((lesson, lessonIndex) => {
                      const completedLesson = progress.completedLessons.includes(lesson.id);
                      const completedTasks = lesson.tasks.filter((task) => progress.completedTasks.includes(task.id)).length;
                      return (
                        <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="group grid gap-4 rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:grid-cols-[58px_1fr_140px_22px] md:items-center md:p-5">
                          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.08] font-mono text-sm text-slate-500 group-hover:text-white">{completedLesson ? <CheckCircle2 size={19} style={{ color: track.color }} /> : String(lessonIndex + 1).padStart(2, '0')}</span>
                          <div className="min-w-0"><div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600"><span>{lesson.difficulty}</span><span>·</span><span className="inline-flex items-center gap-1"><Clock3 size={11} /> {lesson.duration} мин</span><span>·</span><span className="inline-flex items-center gap-1"><LockOpen size={11} /> доступен</span></div><h3 className="mt-2 font-display text-xl text-white">{lesson.title}</h3><p className="mt-1 text-sm text-slate-500">{lesson.subtitle}</p></div>
                          <div className="rounded-xl border border-white/[0.07] bg-black/15 px-3 py-2 text-right"><strong className="font-display text-lg text-white">{completedTasks}/{lesson.tasks.length}</strong><span className="block text-[9px] text-slate-600">protocols</span></div>
                          <ArrowRight size={18} className="hidden shrink-0 text-slate-600 transition group-hover:translate-x-1 group-hover:text-white md:block" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-24" aria-labelledby="projects-title">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Portfolio missions</p><h2 id="projects-title" className="mt-3 font-display text-4xl text-white md:text-5xl">Три проекта траектории</h2></div><p className="max-w-xl text-sm leading-7 text-slate-500">Проекты не проверяются автоматически: их цель — научить вас принимать решения, объяснять компромиссы и собирать целостную работу.</p></div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {track.projects.map((project, index) => (
              <article key={project.id} className="project-card">
                <div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: track.color }}>Mission {String(index + 1).padStart(2, '0')}</span><span className="text-[10px] text-slate-600">{project.duration}</span></div>
                <h3 className="mt-7 font-display text-2xl text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
                <ul className="mt-6 space-y-3">{project.deliverables.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-500"><CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: track.color }} />{item}</li>)}</ul>
                <div className="mt-7 border-t border-white/[0.08] pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">{project.difficulty}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
