import { ArrowLeft, ArrowRight, Check, Clock3, Crosshair, Sparkles } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CodeLab } from '../components/CodeLab';
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
  const coreTasksComplete = lesson.tasks.every((task) => progress.completedTasks.includes(task.id));
  const lessonComplete = progress.completedLessons.includes(lesson.id);

  return (
    <div className="mx-auto max-w-[1300px] px-4 py-8 md:px-8 md:py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link to={`/track/${track.id}`} className="inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-white"><ArrowLeft size={15} /> {track.name}</Link>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500"><span className="inline-flex items-center gap-1"><Clock3 size={12} /> {lesson.duration} min</span><span>·</span><span>{lesson.difficulty}</span></div>
      </div>

      <header className="mt-10 grid gap-8 border-b border-white/[0.08] pb-10 lg:grid-cols-[1fr_320px]">
        <div><p className="font-mono text-[10px] uppercase tracking-[0.26em]" style={{ color: track.color }}>Memory fragment / {lesson.worldId}</p><h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-[-0.035em] text-white sm:text-6xl">{lesson.title}</h1><p className="mt-4 text-lg text-slate-400">{lesson.subtitle}</p></div>
        <aside className="rounded-[26px] border border-white/10 bg-white/[0.025] p-5"><div className="flex items-center gap-2 text-xs font-medium text-white"><Crosshair size={15} style={{ color: track.color }} /> Цели синхронизации</div><ul className="mt-4 space-y-3">{lesson.objectives.map((objective) => <li key={objective} className="flex gap-2 text-sm leading-6 text-slate-400"><Check size={14} className="mt-1 shrink-0" style={{ color: track.color }} />{objective}</li>)}</ul></aside>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="min-w-0 space-y-12">
          <section className="space-y-6" aria-labelledby="theory-title"><div><p className="eyebrow">Theory transmission</p><h2 id="theory-title" className="mt-2 font-display text-3xl text-white">Принцип работы</h2></div>{lesson.theory.map((section, index) => <article key={section.heading} className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 md:p-8"><div className="flex items-center gap-3"><span className="font-mono text-xs" style={{ color: track.color }}>{String(index + 1).padStart(2, '0')}</span><h3 className="font-display text-xl text-white">{section.heading}</h3></div><p className="mt-5 text-[15px] leading-8 text-slate-400">{section.body}</p>{section.code && <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.08] bg-black/[0.35] p-5 font-mono text-xs leading-6 text-slate-300"><code>{section.code}</code></pre>}</article>)}</section>

          <section aria-labelledby="lab-title"><div className="mb-5"><p className="eyebrow">Execution chamber</p><h2 id="lab-title" className="mt-2 font-display text-3xl text-white">Эксперимент</h2><p className="mt-2 text-sm leading-6 text-slate-500">Запустите пример, измените один параметр и сравните фактический результат со своим прогнозом.</p></div><CodeLab initialCode={lesson.starterCode} language={track.editorLanguage} runner={track.runner} /></section>

          <section className="space-y-4" aria-labelledby="tasks-title"><div className="mb-6"><p className="eyebrow">Practice protocols</p><h2 id="tasks-title" className="mt-2 font-display text-3xl text-white">Проверка навыка</h2><p className="mt-2 text-sm text-slate-500">Три обязательных протокола и одна бонусная аномалия.</p></div>{lesson.tasks.map((task) => <TaskWorkbench key={task.id} task={task} language={track.editorLanguage} runner={track.runner} completed={progress.completedTasks.includes(task.id)} />)}<TaskWorkbench task={lesson.bonusTask} language={track.editorLanguage} runner={track.runner} completed={progress.completedTasks.includes(lesson.bonusTask.id)} /></section>

          <section className={`rounded-[30px] border p-7 ${lessonComplete ? 'border-emerald-300/20 bg-emerald-300/[0.04]' : 'border-white/10 bg-white/[0.025]'}`}><div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><div className="flex items-center gap-2 text-xs font-medium text-white"><Sparkles size={15} className="text-amber-200" /> Фрагмент памяти</div><h2 className="mt-3 font-display text-2xl text-white">{lessonComplete ? 'Урок синхронизирован' : 'Зафиксировать результат'}</h2><p className="mt-2 text-sm text-slate-500">{coreTasksComplete ? 'Все обязательные протоколы подтверждены.' : 'Завершите три обязательных задания. Бонус остаётся необязательным.'}</p></div><button type="button" disabled={!coreTasksComplete || lessonComplete} onClick={() => completeLesson(lesson)} className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-slate-500">{lessonComplete ? 'Сохранено · +100 XP' : 'Завершить · +100 XP'}</button></div></section>

          <nav className="grid gap-3 border-t border-white/[0.08] pt-8 sm:grid-cols-2" aria-label="Навигация по урокам">{adjacent.previous ? <Link to={`/lesson/${adjacent.previous.id}`} className="rounded-2xl border border-white/[0.08] p-4 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"><span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-600"><ArrowLeft size={13} /> Предыдущий</span><strong className="mt-2 block font-medium">{adjacent.previous.title}</strong></Link> : <div />}{adjacent.next ? <Link to={`/lesson/${adjacent.next.id}`} className="rounded-2xl border border-white/[0.08] p-4 text-right text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"><span className="flex items-center justify-end gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-600">Следующий <ArrowRight size={13} /></span><strong className="mt-2 block font-medium">{adjacent.next.title}</strong></Link> : <Link to={`/track/${track.id}`} className="rounded-2xl border border-white/[0.08] p-4 text-right text-sm text-slate-400 hover:text-white">Вернуться к треку</Link>}</nav>
        </div>

        <aside className="hidden lg:block"><div className="sticky top-28 space-y-4"><div className="rounded-[24px] border border-white/[0.08] bg-white/[0.025] p-5"><p className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-600">Lesson status</p><p className="mt-3 font-display text-2xl text-white">{lesson.tasks.filter((task) => progress.completedTasks.includes(task.id)).length} / {lesson.tasks.length}</p><p className="mt-1 text-xs text-slate-500">обязательных протокола</p></div><div className="rounded-[24px] border border-white/[0.08] bg-black/20 p-5 text-xs leading-6 text-slate-500">Python запускается через Pyodide, JavaScript — в изолированном Web Worker, HTML/CSS — в sandboxed iframe. Java и C++ используют прозрачную приближённую проверку без внешнего backend.</div></div></aside>
      </div>
    </div>
  );
}
