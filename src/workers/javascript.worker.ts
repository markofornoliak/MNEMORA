interface RunRequest { code: string }

self.onmessage = async (event: MessageEvent<RunRequest>) => {
  const logs: string[] = [];
  const safeConsole = {
    log: (...args: unknown[]) => logs.push(args.map(formatValue).join(' ')),
    error: (...args: unknown[]) => logs.push(`Error: ${args.map(formatValue).join(' ')}`),
    warn: (...args: unknown[]) => logs.push(`Warning: ${args.map(formatValue).join(' ')}`)
  };

  try {
    const fn = new Function(
      'console',
      'window',
      'document',
      'globalThis',
      'self',
      'fetch',
      'XMLHttpRequest',
      'WebSocket',
      'EventSource',
      'importScripts',
      'postMessage',
      'Worker',
      'SharedWorker',
      'navigator',
      'location',
      `"use strict"; return (async () => {\n${event.data.code}\n})();`
    );
    await fn(
      safeConsole,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    );
    self.postMessage({ ok: true, output: logs.join('\n') || '✓ Код выполнен без вывода.' });
  } catch (error) {
    self.postMessage({ ok: false, output: error instanceof Error ? `${error.name}: ${error.message}` : String(error) });
  }
};

function formatValue(value: unknown): string {
  if (typeof value === 'string') return value;
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}
