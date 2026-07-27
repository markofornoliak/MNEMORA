import { ArrowRight } from 'lucide-react';
import type { LanguageId, Trek } from '../types/course';

interface FlatMapProps {
  tracks: Trek[];
  selectedId: LanguageId;
  onSelect: (id: LanguageId) => void;
}

export function FlatMap({ tracks, selectedId, onSelect }: FlatMapProps) {
  return (
    <div className="relative min-h-[540px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(86,241,255,.12),transparent_38%),linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:auto,48px_48px,48px_48px] p-6 md:p-10">
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30 bg-cyan-200/5 shadow-[0_0_80px_rgba(86,241,255,.25)]" aria-hidden="true">
        <div className="absolute inset-5 rounded-full border border-violet-300/20" />
      </div>
      <div className="relative z-10 grid min-h-[460px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => (
          <button key={track.id} type="button" onClick={() => onSelect(track.id)} className={`group self-center rounded-[26px] border p-5 text-left backdrop-blur-md transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 ${index === 4 ? 'lg:col-start-2' : ''} ${selectedId === track.id ? 'border-white/30 bg-white/10' : 'border-white/10 bg-[#080c18]/75 hover:border-white/20'}`}>
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 font-mono" style={{ color: track.color, background: `${track.color}14` }}>{track.icon}</span>
              <ArrowRight size={18} className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" />
            </div>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em]" style={{ color: track.color }}>Сигнальное созвездие {index + 1}</p>
            <h3 className="mt-2 font-display text-xl text-white">{track.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{track.tagline}</p>
            <div className="mt-4 flex gap-2">{track.worlds.map((world) => <span key={world.id} className="rounded-full border border-white/[0.08] px-2 py-1 text-[10px] text-slate-500">{world.icon}</span>)}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
