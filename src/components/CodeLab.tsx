import CodeMirror from '@uiw/react-codemirror';
import { CheckCircle2, LoaderCircle, Play, RotateCcw, TerminalSquare, TriangleAlert } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { languageExtension } from '../features/code-runner/languages';
import { runCode, type RunResult } from '../features/code-runner/runner';
import type { LanguageId, RunnerKind } from '../types/course';

interface CodeLabProps {
  initialCode: string;
  language: LanguageId;
  runner: RunnerKind;
  title?: string;
  onRun?: (result: RunResult, code: string) => void;
}

export function CodeLab({ initialCode, language, runner, title = 'Лаборатория исполнения', onRun }: CodeLabProps) {
  const [code, setCode] = useState(initialCode);
  const [result, setResult] = useState<RunResult | null>(null);
  const [running, setRunning] = useState(false);
  const executionId = useRef(0);
  const extension = useMemo(() => languageExtension(language), [language]);

  useEffect(() => {
    executionId.current += 1;
    setCode(initialCode);
    setResult(null);
    setRunning(false);
  }, [initialCode, language, runner]);

  const reset = () => {
    executionId.current += 1;
    setCode(initialCode);
    setResult(null);
    setRunning(false);
  };

  const execute = async () => {
    const currentExecution = ++executionId.current;
    setRunning(true);
    setResult(null);
    try {
      const next = await runCode(code, runner, language);
      if (executionId.current !== currentExecution) return;
      setResult(next);
      onRun?.(next, code);
    } catch (error) {
      if (executionId.current !== currentExecution) return;
      const next: RunResult = { ok: false, output: error instanceof Error ? error.message : 'Не удалось запустить код.' };
      setResult(next);
      onRun?.(next, code);
    } finally {
      if (executionId.current === currentExecution) setRunning(false);
    }
  };

  const htmlPreview = runner === 'html' ? code : null;

  return (
    <section className="overflow-hidden rounded-[28px] border border-white/10 bg-[#080c18] shadow-panel" aria-busy={running}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] px-4 py-3 md:px-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-200/[0.08] text-cyan-100"><TerminalSquare size={17} aria-hidden="true" /></span>
          <div><h3 className="text-sm font-medium text-white">{title}</h3><p className="font-mono text-[9px] uppercase tracking-[0.23em] text-slate-600">isolated client runtime</p></div>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={reset} className="icon-button" aria-label="Сбросить код"><RotateCcw size={15} /></button>
          <button type="button" onClick={execute} disabled={running} className="inline-flex items-center gap-2 rounded-xl bg-cyan-200 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-60">
            {running ? <LoaderCircle size={15} className="animate-spin" /> : <Play size={15} fill="currentColor" />} {running ? 'Выполнение' : 'Запустить'}
          </button>
        </div>
      </div>
      <div className={runner === 'html' ? 'grid lg:grid-cols-2' : ''}>
        <div className="min-w-0 border-white/[0.08] lg:border-r">
          <CodeMirror value={code} height="390px" extensions={[extension]} onChange={setCode} theme="dark" basicSetup={{ lineNumbers: true, foldGutter: true, highlightActiveLine: true, autocompletion: true, bracketMatching: true }} className="mnemora-editor" aria-label={`Редактор ${language}`} />
        </div>
        {runner === 'html' && (
          <div className="min-h-[390px] bg-white p-2">
            <div className="mb-2 flex items-center gap-2 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Live preview</div>
            <iframe title="HTML/CSS live preview" srcDoc={htmlPreview ?? ''} sandbox="allow-forms allow-modals" className="h-[350px] w-full rounded-lg border border-slate-200 bg-white" />
          </div>
        )}
      </div>
      <div className={`${runner === 'html' ? 'min-h-14' : 'min-h-28'} border-t border-white/[0.08] bg-black/30 p-4 font-mono text-xs leading-6`} aria-live="polite">
        {!result && <span className="text-slate-600">// {runner === 'html' ? 'Нажмите «Запустить», чтобы проверить задание.' : 'Вывод появится здесь после запуска.'}</span>}
        {result && <div className="flex items-start gap-3">{result.ok ? <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-300" /> : <TriangleAlert size={17} className="mt-1 shrink-0 text-rose-300" />}<pre className={result.ok ? 'whitespace-pre-wrap text-slate-200' : 'whitespace-pre-wrap text-rose-200'}>{result.output}</pre></div>}
        {result?.approximate && <p className="mt-3 border-t border-white/[0.08] pt-3 text-[10px] leading-5 text-amber-200/70">Приближённый результат статического анализа. Для окончательной проверки Java/C++ используйте локальный компилятор.</p>}
      </div>
    </section>
  );
}
