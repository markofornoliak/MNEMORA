import { ChevronDown, LockKeyhole, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { completeTask } from '../features/progress/progressStore';
import { validateTask, type RunResult } from '../features/code-runner/runner';
import type { LanguageId, RunnerKind, Task } from '../types/course';
import { CodeLab } from './CodeLab';

interface TaskWorkbenchProps { task: Task; language: LanguageId; runner: RunnerKind; completed: boolean }

export function TaskWorkbench({ task, language, runner, completed }: TaskWorkbenchProps) {
  const [open, setOpen] = useState(task.bonus ? false : !completed);
  const [status, setStatus] = useState<'idle' | 'success' | 'retry'>(completed ? 'success' : 'idle');

  useEffect(() => {
    setStatus(completed ? 'success' : 'idle');
  }, [completed, task.id]);

  const check = (result: RunResult, code: string) => {
    const passed = result.ok && validateTask(code, result.output, task.validator);
    setStatus(passed ? 'success' : 'retry');
    if (passed) completeTask(task.id, task.xp);
  };

  return (
    <article className={`overflow-hidden rounded-[26px] border transition ${status === 'success' ? 'border-emerald-300/25 bg-emerald-300/[0.035]' : task.bonus ? 'border-amber-200/20 bg-amber-200/[0.025]' : 'border-white/10 bg-white/[0.025]'}`}>
      <button type="button" onClick={() => setOpen((value) => !value)} className="flex w-full items-start justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-200">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{task.bonus ? <Sparkles size={13} className="text-amber-200" /> : <LockKeyhole size={13} />} {task.bonus ? 'Бонусная аномалия' : 'Практический протокол'} · +{task.xp} XP</div>
          <h3 className="mt-2 font-display text-lg text-white">{task.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{task.prompt}</p>
          {status === 'success' && <p className="mt-3 text-xs text-emerald-300">✓ Протокол подтверждён</p>}
          {status === 'retry' && <p className="mt-3 text-xs text-rose-300">Проверка не совпала с ожидаемым результатом. Сверьте вывод и попробуйте снова.</p>}
        </div>
        <ChevronDown size={18} className={`mt-1 shrink-0 text-slate-500 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="border-t border-white/[0.08] p-3 md:p-5"><CodeLab initialCode={task.starterCode} language={language} runner={runner} title={task.title} onRun={check} /><details className="mt-3 rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-sm text-slate-400"><summary className="cursor-pointer text-xs font-medium text-slate-300">Открыть направляющую</summary><p className="mt-3 leading-6">{task.solutionHint}</p></details></div>}
    </article>
  );
}
