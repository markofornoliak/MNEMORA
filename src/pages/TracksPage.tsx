import { registry } from '../data/registry';
import { getTrackProgress } from '../features/progress/progressStore';
import { useProgress } from '../features/progress/useProgress';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { TrackCard } from '../components/TrackCard';

export function TracksPage() {
  useDocumentTitle('Треки');
  const progress = useProgress();
  return <div className="mx-auto max-w-[1500px] px-4 py-12 md:px-8 md:py-20"><p className="eyebrow">Archive directory</p><h1 className="mt-3 font-display text-5xl tracking-tight text-white">Каталог созвездий</h1><p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">Каждый трек содержит три мира по четыре урока, практические протоколы и бонусные аномалии. Проходите линейно или переключайтесь между языками.</p><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{registry.tracks.map((track) => <TrackCard key={track.id} track={track} progress={getTrackProgress(track.id, registry.lessons, progress)} />)}</div></div>;
}
