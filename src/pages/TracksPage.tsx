import { ArrowRight, Braces, Clock3, Layers3, Rocket, Route, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TrackCard } from '../components/TrackCard';
import { registry } from '../data/registry';
import { getTrackProgress } from '../features/progress/progressStore';
import { useProgress } from '../features/progress/useProgress';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const directions = [
  {
    title: 'Автоматизация и данные',
    description: 'Быстрый путь к прикладным сценариям, CLI-инструментам и обработке информации.',
    trackIds: ['python'],
    icon: Sparkles
  },
  {
    title: 'Web и интерфейсы',
    description: 'Структура, дизайн, браузерная логика, события и асинхронные данные.',
    trackIds: ['html-css', 'javascript'],
    icon: Braces
  },
  {
    title: 'Архитектура и systems',
    description: 'Строгие типы, объектные модели, ресурсы, алгоритмы и производительность.',
    trackIds: ['java', 'cpp'],
    icon: Layers3
  }
];

export function TracksPage() {
  useDocumentTitle('Треки');
  const progress = useProgress();
  const totalHours = registry.tracks.reduce((sum, track) => sum + track.estimatedHours, 0);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-[1500px] px-4 py-14 md:px-8 md:py-24">
          <p className="eyebrow">Curriculum directory</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-7xl">Выберите не язык.<br /><span className="text-gradient">Выберите тип мышления.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">Пять траекторий отличаются не только синтаксисом. Каждая развивает собственный способ проектировать данные, интерфейсы, объекты и ресурсы.</p>
            </div>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.08]">
              <div className="bg-[#070a13] p-4"><strong className="font-display text-2xl text-white">{registry.lessons.length}</strong><span className="mt-1 block text-[10px] text-slate-600">уроков</span></div>
              <div className="bg-[#070a13] p-4"><strong className="font-display text-2xl text-white">{totalHours}</strong><span className="mt-1 block text-[10px] text-slate-600">часов практики</span></div>
              <div className="bg-[#070a13] p-4"><strong className="font-display text-2xl text-white">15</strong><span className="mt-1 block text-[10px] text-slate-600">проектов</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] px-4 py-14 md:px-8 md:py-20">
        <section aria-labelledby="direction-title">
          <div><p className="eyebrow">Decision layer</p><h2 id="direction-title" className="mt-3 font-display text-4xl text-white">Куда двигаться</h2></div>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {directions.map(({ title, description, trackIds, icon: Icon }) => (
              <article key={title} className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6">
                <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-cyan-100"><Icon size={18} /></span><span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">{trackIds.length} {trackIds.length === 1 ? 'трек' : 'трека'}</span></div>
                <h3 className="mt-6 font-display text-2xl text-white">{title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-7 text-slate-500">{description}</p>
                <div className="mt-5 flex gap-2">{trackIds.map((id) => { const track = registry.tracks.find((item) => item.id === id); return track ? <Link key={track.id} to={`/track/${track.id}`} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] transition hover:bg-white/5" style={{ color: track.color }}>{track.name}</Link> : null; })}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20" aria-labelledby="tracks-title">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Complete programmes</p><h2 id="tracks-title" className="mt-3 font-display text-4xl text-white">Все траектории</h2></div><p className="max-w-xl text-sm leading-7 text-slate-500">Каждый трек: 3 мира, 12 уроков, 48 задач, 3 проектных брифа и прозрачный итоговый результат.</p></div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{registry.tracks.map((track) => <TrackCard key={track.id} track={track} progress={getTrackProgress(track.id, registry.lessons, progress)} />)}</div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[36px] border border-white/10 bg-[#080c18]" aria-labelledby="compare-title">
          <div className="grid gap-8 border-b border-white/[0.08] p-7 md:p-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <div><p className="eyebrow">Comparison matrix</p><h2 id="compare-title" className="mt-3 font-display text-4xl text-white">Что вы унесёте с собой</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">Трек считается завершённым не после просмотра материалов, а когда вы можете объяснить решения и собрать работающий итоговый проект.</p></div>
            <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"><Route className="text-cyan-200" /><div><p className="text-xs text-white">Маршрут можно менять</p><p className="mt-1 text-[11px] text-slate-600">Прогресс сохраняется отдельно для каждого языка</p></div></div>
          </div>
          <div className="divide-y divide-white/[0.07]">
            {registry.tracks.map((track) => (
              <Link key={track.id} to={`/track/${track.id}`} className="group grid gap-5 p-6 transition hover:bg-white/[0.025] md:grid-cols-[180px_1fr_190px_36px] md:items-center md:px-10">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 font-mono" style={{ color: track.color, background: `${track.color}10` }}>{track.icon}</span><div><strong className="font-display text-lg text-white">{track.name}</strong><span className="block text-[10px] text-slate-600">{track.estimatedHours} ч</span></div></div>
                <p className="text-sm leading-6 text-slate-400">{track.outcome}</p>
                <div className="flex items-center gap-4 text-[11px] text-slate-500"><span className="inline-flex items-center gap-1"><Rocket size={13} /> 3 проекта</span><span className="inline-flex items-center gap-1"><Clock3 size={13} /> {track.worlds.length} этапа</span></div>
                <ArrowRight size={17} className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
