import type { LanguageId, RunnerKind, TaskValidator } from '../../types/course';
import { simulateCompiledLanguage } from './simulatedRunner';

export interface RunResult {
  ok: boolean;
  output: string;
  approximate?: boolean;
}

function runDisposableWorker(worker: Worker, code: string, timeoutMs: number): Promise<RunResult> {
  return new Promise((resolve) => {
    let settled = false;
    const finish = (result: RunResult) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      worker.terminate();
      resolve(result);
    };
    const timer = window.setTimeout(
      () => finish({ ok: false, output: `Выполнение остановлено: превышен лимит ${timeoutMs / 1000} с.` }),
      timeoutMs
    );
    worker.onmessage = (event: MessageEvent<RunResult>) => finish(event.data);
    worker.onerror = (event) => finish({ ok: false, output: event.message || 'Ошибка рабочего потока.' });
    worker.postMessage({ code });
  });
}

let pythonWorker: Worker | null = null;
let pythonQueue: Promise<void> = Promise.resolve();

function resetPythonWorker() {
  pythonWorker?.terminate();
  pythonWorker = null;
}

function runPythonOnce(code: string): Promise<RunResult> {
  return new Promise((resolve) => {
    try {
      const worker = pythonWorker ?? new Worker(new URL('../../workers/python.worker.ts', import.meta.url));
      pythonWorker = worker;
      let settled = false;
      const finish = (result: RunResult, reset = false) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        worker.onmessage = null;
        worker.onerror = null;
        if (reset) resetPythonWorker();
        resolve(result);
      };
      const timer = window.setTimeout(
        () => finish({ ok: false, output: 'Python остановлен: превышен лимит 60 с. Проверьте бесконечные циклы или сетевое соединение.' }, true),
        60000
      );
      worker.onmessage = (event: MessageEvent<RunResult>) => finish(event.data);
      worker.onerror = (event) => finish({ ok: false, output: event.message || 'Не удалось инициализировать Python runtime.' }, true);
      worker.postMessage({ code });
    } catch (error) {
      resetPythonWorker();
      resolve({ ok: false, output: error instanceof Error ? error.message : 'Не удалось создать Python worker.' });
    }
  });
}

function runPython(code: string): Promise<RunResult> {
  const task = pythonQueue.then(() => runPythonOnce(code));
  pythonQueue = task.then(() => undefined, () => undefined);
  return task;
}

export async function runCode(code: string, runner: RunnerKind, language: LanguageId): Promise<RunResult> {
  try {
    if (runner === 'javascript') {
      return await runDisposableWorker(
        new Worker(new URL('../../workers/javascript.worker.ts', import.meta.url), { type: 'module' }),
        code,
        3000
      );
    }
    if (runner === 'python') return await runPython(code);
    if (runner === 'simulated') return simulateCompiledLanguage(code, language);
    return { ok: true, output: 'HTML/CSS обновлён и готов к проверке.' };
  } catch (error) {
    return { ok: false, output: error instanceof Error ? error.message : 'Не удалось запустить код.' };
  }
}

function normalize(value: string): string {
  return value.replace(/\r/g, '').trim().replace(/[ \t]+$/gm, '');
}

export function validateTask(code: string, output: string, validator: TaskValidator): boolean {
  const normalizedOutput = normalize(output);
  switch (validator.kind) {
    case 'exact-output':
      return normalizedOutput === normalize(validator.expected ?? '');
    case 'contains-output': {
      const expected = normalize(validator.expected ?? '');
      return expected.length > 0 && normalizedOutput.includes(expected);
    }
    case 'html-contains': {
      const patterns = validator.patterns ?? [];
      return patterns.length > 0 && patterns.every((pattern) => code.toLowerCase().includes(pattern.toLowerCase()));
    }
    case 'code-pattern': {
      const patterns = validator.patterns ?? [];
      if (!patterns.length) return false;
      try {
        return patterns.every((pattern) => new RegExp(pattern, 'i').test(code));
      } catch {
        return false;
      }
    }
    default:
      return false;
  }
}
