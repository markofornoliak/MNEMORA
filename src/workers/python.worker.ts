type Pyodide = {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (text: string) => void }) => void;
  setStderr: (options: { batched: (text: string) => void }) => void;
};

declare const loadPyodide: (options: { indexURL: string }) => Promise<Pyodide>;

let runtimePromise: Promise<Pyodide> | null = null;
const indexURL = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/';

async function getRuntime(): Promise<Pyodide> {
  if (!runtimePromise) {
    importScripts(`${indexURL}pyodide.js`);
    runtimePromise = loadPyodide({ indexURL });
  }
  return runtimePromise;
}

self.onmessage = async (event: MessageEvent<{ code: string }>) => {
  const logs: string[] = [];
  try {
    const pyodide = await getRuntime();
    pyodide.setStdout({ batched: (text) => logs.push(text) });
    pyodide.setStderr({ batched: (text) => logs.push(text) });
    const source = JSON.stringify(event.data.code);
    await pyodide.runPythonAsync(
      `_mnemora_scope = {"__name__": "__main__"}\nexec(compile(${source}, "<mnemora>", "exec"), _mnemora_scope)`
    );
    self.postMessage({ ok: true, output: logs.join('\n') || '✓ Код выполнен без вывода.' });
  } catch (error) {
    self.postMessage({ ok: false, output: error instanceof Error ? error.message : String(error) });
  }
};
