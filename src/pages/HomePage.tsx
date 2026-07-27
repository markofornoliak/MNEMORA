import { Suspense, lazy, useMemo, useState } from 'react';
import { ArrowRight, Box, Cpu, Layers3, MonitorSmartphone, Orbit, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FlatMap } from '../components/FlatMap';
import { SceneLoader } from '../components/SceneLoader';
import { SceneBoundary } from '../components/SceneBoundary';
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
  const globalProgress = Math.round((completed / total) * 100);
  const trackProgress = useMemo(() => Object.fromEntries(registry.tracks.map((track) => [track.id, getTrackProgress(track.id, registry.lessons, progress)])), [progress]);
  const stats = [
    { value: '60', label: 'уроков', icon: Layers3 },
    { value: '180', label: 'практик', icon: Cpu },
    { value: '5', label: 'языков', icon: Orbit },
    { value: `${globalProgress}%`, label: 'восстановлено', icon: MonitorSmartphone }
  ];

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(154,124,255,.14),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(86,241,255,.09),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-8 px-4 py-10 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:py-16">
          <div className="pb-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/[0.15] bg-cyan-200/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.23em] text-cyan-100"><Sparkles size={13} /> Living code curriculum</div>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.35em] text-slate-500">The mnemonic engine / cycle 01</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl lg:text-[78px]">Восстановите<br /><span className="text-transparent [background:linear-gradient(100deg,#fff,#56f1ff_45%,#9a7cff)] bg-clip-text">память кода.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">MNEMORA превращает изучение программирования в навигацию по живой обсерватории. Пять языков образуют отдельные созвездия, а каждый завершённый урок возвращает фрагмент вычислительной памяти.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`/track/${selected.id}`} className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">Войти в {selected.name}<ArrowRight size={17} /></Link>
              <Link to="/tracks" className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.035] px-5 py-3 text-sm text-white transition hover:bg-white/10">Каталог треков</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ value, label, icon: Icon }) => <div key={label} className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-4"><Icon size={17} className="text-slate-500" /><p className="mt-5 font-display text-2xl text-white">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 py-8 md:px-8 md:py-12">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div><p className="eyebrow">Primary navigation</p><h2 className="mt-2 font-display text-3xl text-white">Карта созвездий</h2><p className="mt-2 text-sm text-slate-500">Выберите структуру в сцене или используйте полноценную 2D-карту.</p></div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.025] p-1">
            <button type="button" onClick={() => profile.setMode('3d')} disabled={!profile.webgl} className={`mode-button ${profile.mode === '3d' ? 'mode-button-active' : ''}`}><Box size={15} /> 3D</button>
            <button type="button" onClick={() => profile.setMode('2d')} className={`mode-button ${profile.mode === '2d' ? 'mode-button-active' : ''}`}><Layers3 size={15} /> 2D</button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#05070f] shadow-panel">
          <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400 backdrop-blur">Render profile: {profile.quality} · {profile.webgl ? 'WebGL ready' : 'WebGL unavailable'}</div>
          {profile.mode === '3d' && profile.webgl ? <SceneBoundary onFallback={() => profile.setMode('2d')}><Suspense fallback={<SceneLoader />}><ObservatoryScene tracks={registry.tracks} quality={profile.quality} selectedId={selectedId} onSelect={setSelectedId} /></Suspense></SceneBoundary> : <FlatMap tracks={registry.tracks} selectedId={selectedId} onSelect={setSelectedId} />}
          <div className="relative z-20 border-t border-white/[0.08] bg-[#070a13]/[0.92] p-5 backdrop-blur-xl md:flex md:items-center md:justify-between md:p-6">
            <div className="flex items-start gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 font-mono text-lg" style={{ color: selected.color, background: `${selected.color}12` }}>{selected.icon}</span><div><p className="font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: selected.color }}>Selected constellation</p><h3 className="mt-1 font-display text-xl text-white">{selected.name}</h3><p className="mt-1 text-sm text-slate-400">{selected.tagline}</p></div></div>
            <Link to={`/track/${selected.id}`} className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-white/[0.12] px-4 py-3 text-sm text-white transition hover:bg-white/10 md:mt-0">Открыть 3 мира <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-4 pb-20 md:px-8">
        <div className="mb-6 flex items-end justify-between"><div><p className="eyebrow">Learning paths</p><h2 className="mt-2 font-display text-3xl text-white">Пять треков, единая система</h2></div><Link to="/tracks" className="hidden text-sm text-slate-400 hover:text-white sm:block">Смотреть все →</Link></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{registry.tracks.map((track) => <TrackCard key={track.id} track={track} progress={trackProgress[track.id] ?? 0} compact />)}</div>
      </section>
    </div>
  );
}
