import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Code2,
  Crosshair,
  Gauge,
  Lightbulb,
  Rocket,
  Sparkles
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CodeLab } from '../components/CodeLab';
import { ProgressBar } from '../components/ProgressBar';
import { TaskWorkbench } from '../components/TaskWorkbench';
import { getAdjacentLessons, getLesson, getTrack } from '../data/registry';
import { completeLesson } from '../features/progress/progressStore';
import { useProgress } from '../features/progress/useProgress';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export function LessonPage() {
  const { lessonId } = useParams();
  const lesson = getLesson(lessonId);
  const track = getTrack(lesson?.trackId);
  const progress = useProgress();
  useDocumentTitle(lesson?.title ?? 'Урок');
  if (!lesson || !track) return <Navigate to="/tracks" replace />;

  const adjacent = getAdjacentLessons(lesson);
  const world = track.worlds.find((item) => item.id === lesson.worldId) ?? track.worlds[0];
  const worldIndex = Math.max(0, track.worlds.findIndex((item) => item.id === lesson.worldId));
  const connectedProject = track.projects[worldIndex];
  const completedCore = lesson.tasks.filter((task) => progress.completedTasks.includes(task.id)).length;
  const coreTasksComplete = completedCore === lesson.tasks.length;
  const lessonComplete = progress.completedLessons.includes(lesson.id);
  const lessonProgress = Math.round((completedCore / lesson.tasks.length) * 100);
  const availableXp = lesson.tasks.reduce((sum, task) => sum + task.xp, 0) + lesson.bonusTask.xp + 100;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full blur-[120px]" style={{ background: `${track.color}18` }} />
        <div className="relative mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to={`/track/${track.id}`} className="inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-white"><ArrowLeft size={15} /> {track.name} / {world.title}</Link>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500"><span className="inline-flex items-center gap-1"><Clock3 size={12} /> {lesson.duration} min</span><span>·</span><span>{lesson.difficulty}</span><span>·</span><span>+{availableXp} XP</span></div>
          </div>

          <header className="mt-10 grid gap-8 pb-9 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: track.color }}>Memory fragment / {String(lesson.order).padStart(2, '0')}</p>
              <h1 className="mt-4 max-w-5xl font-display text-5xl font-semibold leading-[.98] tracking-[-0.045em] text-white sm:text-7xl">{lesson.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">{lesson.subtitle}</p>
            </div>
            <aside className="rounded-[28px] border border-white/10 bg-[#080c18]/90 p-5 shadow-panel backdrop-blur-xl">
              <div className="flex items-center justify-between"><span className="text-xs text-slate-400">Прогресс сессии</span><span className="font-display text-3xl text-white">{lessonProgress}%</span></div>
              <div className="mt-4"><ProgressBar value={lessonProgress} color={track.color} /></div>
              <div className="mt-5 grid grid-cols-2 gap-2"><div className="telemetry-cell"><Gauge size={14} /><strong>{completedCore}/{lesson.tasks.length}</strong><span>протокола</span></div><div className="telemetry-cell"><Rocket size={14} /><strong>{availableXp}</strong><span>доступно XP</span></div></div>
            </aside>
          </header>

          <div className="grid gap-3 border-t border-white/[0.08] pt-6 md:grid-cols-3">
            {lesson.objectives.map((objective, index) => (
              <div key={objective} className="rounded-2xl border border-white/[0.07] bg-white/[0.022] p-4"><div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600"><span style={{ color: track.color }}>{String(index + 1).padStart(2, '0')}</span> Learning objective</div><p className="mt-3 text-sm leading-6 text-slate-300">{objective}</p></div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0 space-y-16">
            <section className="space-y-5" aria-labelledby="theory-title">
              <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Concept model</p><h2 id="theory-title" className="mt-2 font-display text-4xl text-white">Разберите механизм</h2></div><p className="max-w-md text-sm leading-6 text-slate-500">Не запоминайте форму кода отдельно от поведения. Для каждого блока сначала сформулируйте прогноз своими словами.</p></div>
              {lesson.theory.map((section, index) => (
                <article key={section.heading} className="group overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] transition hover:border-white/[0.14]">
                  <div className="grid md:grid-cols-[90px_1fr]">
                    <div className="border-b border-white/[0.07] p-6 md:border-b-0 md:border-r md:p-7"><span className="font-display text-4xl text-slate-800 transition group-hover:text-slate-700">{String(index + 1).padStart(2, '0')}</span></div>
                    <div className="p-6 md:p-8"><h3 className="font-display text-2xl text-white">{section.heading}</h3><p className="mt-5 text-[15px] leading-8 text-slate-400">{section.body}</p>{section.code && <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#050812] p-5 font-mono text-xs leading-6 text-slate-300"><code>{section.code}</code></pre>}</div>
                  </div>
                </article>
              ))}
              <div className="flex gap-4 rounded-[26px] border border-cyan-200/[0.12] bg-cyan-200/[0.025] p-5 md:p-6"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.05] text-cyan-100"><Lightbulb size={18} /></span><div><p className="text-sm font-medium text-white">Контрольный вопрос перед экспериментом</p><p className="mt-2 text-sm leading-7 text-slate-500">{lesson.objectives[0]} — объясните это без кода, затем укажите, какая строка примера подтверждает ваш ответ.</p></div></div>
            </section>

            <section aria-labelledby="lab-title">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Execution chamber</p><h2 id="lab-title" className="mt-2 font-display text-4xl text-white">Проверьте прогноз</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">Запустите исходный пример, измените один параметр и зафиксируйте, почему результат изменился именно так.</p></div><div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600"><Code2 size={13} /> isolated runtime</div></div>
              <CodeLab initialCode={lesson.starterCode} language={track.editorLanguage} runner={track.runner} />
            </section>

            <section className="space-y-4" aria-labelledby="tasks-title">
              <div className="mb-7"><p className="eyebrow">Practice protocols</p><h2 id="tasks-title" className="mt-2 font-display text-4xl text-white">Подтвердите навык</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">Задания идут от точного воспроизведения к самостоятельному управлению состоянием и порядком выполнения.</p></div>
              {lesson.tasks.map((task) => <TaskWorkbench key={task.id} task={task} language={track.editorLanguage} runner={track.runner} completed={progress.completedTasks.includes(task.id)} />)}
              <TaskWorkbench task={lesson.bonusTask} language={track.editorLanguage} runner={track.runner} completed={progress.completedTasks.includes(lesson.bonusTask.id)} />
            </section>

            <section className={`rounded-[32px] border p-7 md:p-8 ${lessonComplete ? 'border-emerald-300/20 bg-emerald-300/[0.04]' : 'border-white/10 bg-[radial-gradient(circle_at_10%_20%,rgba(86,241,255,.07),transparent_35%),rgba(255,255,255,.025)]'}`}>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><div className="flex items-center gap-2 text-xs font-medium text-white"><Sparkles size={15} className="text-amber-200" /> Фрагмент памяти</div><h2 className="mt-3 font-display text-3xl text-white">{lessonComplete ? 'Урок синхронизирован' : 'Зафиксировать результат'}</h2><p className="mt-2 text-sm leading-7 text-slate-500">{coreTasksComplete ? 'Все обязательные протоколы подтверждены. Зафиксируйте урок и переходите к следующему фрагменту.' : `Подтвердите ещё ${lesson.tasks.length - completedCore} обязательных протокола. Бонус остаётся необязательным.`}</p></div><button type="button" disabled={!coreTasksComplete || lessonComplete} onClick={() => completeLesson(lesson)} className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-500">{lessonComplete ? 'Сохранено · +100 XP' : 'Завершить · +100 XP'}</button></div>
            </section>

            <nav className="grid gap-3 border-t border-white/[0.08] pt-8 sm:grid-cols-2" aria-label="Навигация по урокам">
              {adjacent.previous ? <Link to={`/lesson/${adjacent.previous.id}`} className="rounded-2xl border border-white/[0.08] p-4 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"><span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-600"><ArrowLeft size={13} /> Предыдущий</span><strong className="mt-2 block font-medium">{adjacent.previous.title}</strong></Link> : <div />}
              {adjacent.next ? <Link to={`/lesson/${adjacent.next.id}`} className="rounded-2xl border border-white/[0.08] p-4 text-right text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"><span className="flex items-center justify-end gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">Следующий <ArrowRight size={13} /></span><strong className="mt-2 block font-medium">{adjacent.next.title}</strong></Link> : <Link to={`/track/${track.id}`} className="rounded-2xl border border-white/[0.08] p-4 text-right text-sm text-slate-400 hover:text-white">Вернуться к треку</Link>}
            </nav>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-[26px] border border-white/[0.08] bg-[#080c18] p-5"><div className="flex items-center gap-2 text-xs font-medium text-white"><Crosshair size={15} style={{ color: track.color }} /> Цели сессии</div><ul className="mt-4 space-y-3">{lesson.objectives.map((objective) => <li key={objective} className="flex gap-2 text-xs leading-6 text-slate-500"><Check size={13} className="mt-1 shrink-0" style={{ color: track.color }} />{objective}</li>)}</ul></div>
              <div className="rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-5"><p className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-600">Stage artifact</p><p className="mt-3 text-sm leading-6 text-slate-300">{world.artifact}</p></div>
              <div className="rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-5"><div className="flex items-center gap-2 text-xs text-white"><Rocket size={14} style={{ color: track.color }} /> Связь с проектом</div><p className="mt-3 font-display text-lg text-white">{connectedProject.title}</p><p className="mt-2 text-xs leading-6 text-slate-500">{connectedProject.summary}</p></div>
              <div className="rounded-[26px] border border-white/[0.08] bg-black/20 p-5 text-xs leading-6 text-slate-500">Python запускается через Pyodide, JavaScript — в Web Worker, HTML/CSS — в sandboxed iframe. Java и C++ используют прозрачную статическую симуляцию без внешнего backend.</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
