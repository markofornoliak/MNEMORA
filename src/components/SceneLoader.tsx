export function SceneLoader() {
  return (
    <div className="grid h-full min-h-[540px] place-items-center bg-[radial-gradient(circle_at_center,rgba(86,241,255,.08),transparent_48%)]" role="status" aria-live="polite">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border border-white/10 border-t-cyan-200" />
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.28em] text-slate-400">Синхронизация сцены</p>
        <p className="mt-2 text-sm text-slate-600">Интерфейс остаётся доступным во время загрузки.</p>
      </div>
    </div>
  );
}
