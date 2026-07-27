import { Suspense, lazy, useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Box,
  CheckCircle2,
  Clock3,
  Code2,
  Compass,
  Cpu,
  Layers3,
  Orbit,
  Play,
  Rocket,
  Sparkles,
  TerminalSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FlatMap } from '../components/FlatMap';
import { SceneBoundary } from '../components/SceneBoundary';
import { SceneLoader } from '../components/SceneLoader';
import { TrackCard } from '../components/TrackCard';
import { registry } from '../data/registry';
import { getTrackProgress } from '../features/progress/progressStore';
import { useProgress } from '../features/progress/useProgress';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useRenderProfile } from '../hooks/useRenderProfile';
import type { LanguageId } from '../types/course';

const ObservatoryScene = lazy(() => import('../three-scenes/ObservatoryScene'));

export function HomePage() {
  useDocumentTitle('Обсерватория');
  const profile = useRenderProfile();
  const progress = useProgress();
  const [selectedId, setSelectedId] = useState<LanguageId>('python');
  const selected = registry.tracks.find((track) => track.id === selectedId) ?? registry.tracks[0];
  const completed = progress.completedLessons.length;
  const total = registry.lessons.length;
  const totalTasks = registry.lessons.length * 4;
  const globalProgress = Math.round((completed / total) * 100);
  const trackProgress = useMemo(
    () => Object.fromEntries(registry.tracks.map((track) => [track.id, getTrackProgress(track.id, registry.lessons, progress)])),
    [progress]
  );
  const nextLesson = registry.lessons.find((lesson) => !progress.completedLessons.includes(lesson.id)) ?? registry.lessons[0];
  const nextTrack = registry.tracks.find((track) => track.id === nextLesson.trackId) ?? selected;
  const selectedProgress = trackProgress[selected.id] ?? 0;
  const projectIndex = selectedProgress < 34 ? 0 : selectedProgress < 67 ? 1 : 2;
  const activeProject = selected.projects[projectIndex];

  const stats = [
    { value: total, label: 'уроков', detail: '12 в каждом треке', icon: BookOpenCheck },
    { value: totalTasks, label: 'задач', detail: 'включая бонусные', icon: Code2 },
    { value: registry.tracks.length, label: 'траекторий', detail: 'от web до systems', icon: Orbit },
    { value: progress.xp.toLocaleString('en-US'), label: 'XP', detail: `${progress.streak} дн. серия`, icon: Activity }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-white/[0.08]">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-10 h-[360px] w-[360px] rounded-full bg-cyan-300/[0.08] blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1500px] gap-8 px-4 py-10 md:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/[0.18] bg-cyan-200/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.23em] text-cyan-100">
              <Sparkles size={13} /> Interactive programming curriculum
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.34em] text-slate-500">MNEMORA / learning observatory 2.0</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-7xl lg:text-[88px]">
              Не смотрите уроки.
              <span className="mt-2 block text-gradient">Стройте системы.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              Пять языковых траекторий, 60 интерактивных уроков и 15 портфельных проектов. Теория сразу превращается в код, проверяемый эксперимент и законченный артефакт.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`/lesson/${nextLesson.id}`} className="primary-action">
                <Play size={16} fill="currentColor" /> {completed ? 'Продолжить обучение' : 'Начать первый урок'}
              </Link>
              <Link to="/tracks" className="secondary-action">
                Сравнить траектории <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <aside className="mission-console relative overflow-hidden rounded-[34px] border border-white/10 bg-[#080c18]/90 p-5 shadow-panel backdrop-blur-xl md:p-7">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-100">
                <span className="status-dot" /> Active mission
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">Local-first</span>
            </div>

            <div className="mt-10 flex items-start gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 font-mono text-xl" style={{ color: nextTrack.color, background: `${nextTrack.color}12` }}>{nextTrack.icon}</span>
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: nextTrack.color }}>{nextTrack.name} · next fragment</p>
                <h2 className="mt-2 font-display text-2xl text-white">{nextLesson.title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-400">{nextLesson.subtitle}</p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2">
              <div className="telemetry-cell"><Clock3 size={14} /><strong>{nextLesson.duration}</strong><span>минут</span></div>
              <div className="telemetry-cell"><TerminalSquare size={14} /><strong>{nextLesson.tasks.length + 1}</strong><span>задачи</span></div>
              <div className="telemetry-cell"><Rocket size={14} /><strong>{globalProgress}%</strong><span>курса</span></div>
            </div>

            <div className="mt-7">
              <div className="flex justify-between text-xs text-slate-500"><span>Восстановлено {completed} из {total} уроков</span><span>{globalProgress}%</span></div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 transition-all" style={{ width: `${globalProgress}%` }} /></div>
            </div>

            <Link to={`/lesson/${nextLesson.id}`} className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white transition hover:border-cyan-200/30 hover:bg-cyan-200/[0.06]">
              Открыть рабочую станцию <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>

        <div className="relative mx-auto grid max-w-[1500px] grid-cols-2 gap-px border-x border-t border-white/[0.08] bg-white/[0.08] md:grid-cols-4">
          {stats.map(({ value, label, detail, icon: Icon }) => (
            <div key={label} className="bg-[#05070f] p-5 md:p-6">
              <div className="flex items-center justify-between"><Icon size={16} className="text-slate-600" /><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-700">Live</span></div>
              <p className="mt-7 font-display text-3xl text-white">{value}</p>
              <p className="mt-1 text-xs font-medium text-slate-300">{label}</p>
              <p className="mt-1 text-[11px] text-slate-600">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 py-14 md:px-8 md:py-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Spatial curriculum</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-white md:text-5xl">Выберите созвездие</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Исследуйте карту, затем посмотрите реальные навыки, проекты и ожидаемый результат выбранного трека.</p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] p-1">
            <button type="button" onClick={() => profile.setMode('3d')} disabled={!profile.webgl} className={`mode-button ${profile.mode === '3d' ? 'mode-button-active' : ''}`}><Box size={15} /> 3D</button>
            <button type="button" onClick={() => profile.setMode('2d')} className={`mode-button ${profile.mode === '2d' ? 'mode-button-active' : ''}`}><Layers3 size={15} /> 2D</button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[#050812] shadow-panel lg:grid lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="relative min-h-[520px] border-b border-white/[0.08] lg:border-b-0 lg:border-r">
            <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/45 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 backdrop-blur">
              {profile.quality} profile · {profile.webgl ? 'WebGL ready' : '2D fallback'}
            </div>
            {profile.mode === '3d' && profile.webgl ? (
              <SceneBoundary onFallback={() => profile.setMode('2d')}>
                <Suspense fallback={<SceneLoader />}>
                  <ObservatoryScene tracks={registry.tracks} quality={profile.quality} selectedId={selectedId} onSelect={setSelectedId} />
                </Suspense>
              </SceneBoundary>
            ) : <FlatMap tracks={registry.tracks} selectedId={selectedId} onSelect={setSelectedId} />}
          </div>

          <div className="flex flex-col bg-[#070a13] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 font-mono text-xl" style={{ color: selected.color, background: `${selected.color}12` }}>{selected.icon}</span>
              <span className="font-display text-4xl text-white">{selectedProgress}%</span>
            </div>
            <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: selected.color }}>Selected trajectory</p>
            <h3 className="mt-2 font-display text-3xl text-white">{selected.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{selected.outcome}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {selected.skills.slice(0, 6).map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}
            </div>

            <div className="mt-7 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
              <div className="flex items-center gap-2 text-xs text-white"><Rocket size={14} style={{ color: selected.color }} /> Проект на текущем уровне</div>
              <p className="mt-3 font-display text-lg text-white">{activeProject.title}</p>
              <p className="mt-2 text-xs leading-6 text-slate-500">{activeProject.summary}</p>
            </div>

            <div className="mt-auto pt-7">
              <div className="mb-4 flex gap-2">
                {registry.tracks.map((track) => <button key={track.id} type="button" aria-label={`Выбрать ${track.name}`} onClick={() => setSelectedId(track.id)} className={`h-2 flex-1 rounded-full transition ${track.id === selected.id ? 'opacity-100' : 'opacity-25 hover:opacity-60'}`} style={{ background: track.color }} />)}
              </div>
              <Link to={`/track/${selected.id}`} className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">Открыть программу <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.08] bg-white/[0.015]">
        <div className="mx-auto max-w-[1500px] px-4 py-14 md:px-8 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="eyebrow">Portfolio layer</p><h2 className="mt-3 font-display text-4xl text-white md:text-5xl">Учитесь через результат</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">У каждого трека есть три проекта: первый закрепляет механику, второй соединяет темы, третий требует архитектурного решения.</p></div>
            <div className="flex flex-wrap gap-2">{registry.tracks.map((track) => <button type="button" key={track.id} onClick={() => setSelectedId(track.id)} className={`track-filter ${track.id === selected.id ? 'track-filter-active' : ''}`} style={track.id === selected.id ? { borderColor: `${track.color}66`, color: track.color, background: `${track.color}0d` } : undefined}>{track.shortName}</button>)}</div>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {selected.projects.map((project, index) => (
              <article key={project.id} className="project-card group">
                <div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: selected.color }}>Project {String(index + 1).padStart(2, '0')}</span><span className="text-[10px] text-slate-600">{project.duration}</span></div>
                <h3 className="mt-7 font-display text-2xl text-white">{project.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">{project.summary}</p>
                <ul className="mt-6 space-y-3">{project.deliverables.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-slate-500"><CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: selected.color }} />{item}</li>)}</ul>
                <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-4"><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">{project.difficulty}</span><Compass size={16} className="text-slate-600 transition group-hover:text-white" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 py-14 pb-24 md:px-8 md:py-20">
        <div className="mb-7 flex items-end justify-between"><div><p className="eyebrow">All trajectories</p><h2 className="mt-3 font-display text-4xl text-white">Пять способов войти в разработку</h2></div><Link to="/tracks" className="hidden text-sm text-slate-400 transition hover:text-white sm:block">Полное сравнение →</Link></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{registry.tracks.map((track) => <TrackCard key={track.id} track={track} progress={trackProgress[track.id] ?? 0} compact />)}</div>
      </section>
    </div>
  );
}
