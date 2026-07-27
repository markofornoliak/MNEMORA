import { ArrowUpRight, Clock3, Rocket } from 'lucide-react';
import type { LanguageId, Trek } from '../types/course';

interface FlatMapProps {
  tracks: Trek[];
  selectedId: LanguageId;
  onSelect: (id: LanguageId) => void;
}

export function FlatMap({ tracks, selectedId, onSelect }: FlatMapProps) {
  return (
    <div className="relative min-h-[540px] overflow-hidden bg-[radial-gradient(circle_at_center,rgba(86,241,255,.11),transparent_34%),linear-gradient(rgba(255,255,255,.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.022)_1px,transparent_1px)] bg-[size:auto,52px_52px,52px_52px] p-5 md:p-8">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/[0.08]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/25 bg-cyan-200/[0.04] shadow-[0_0_90px_rgba(86,241,255,.2)]" aria-hidden="true"><div className="absolute inset-4 rounded-full border border-violet-300/15" /></div>

      <div className="relative z-10 grid min-h-[480px] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track, index) => {
          const selected = selectedId === track.id;
          return (
            <button key={track.id} type="button" onClick={() => onSelect(track.id)} className={`group relative self-center overflow-hidden rounded-[26px] border p-5 text-left backdrop-blur-xl transition duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 ${index === 4 ? 'lg:col-start-2' : ''} ${selected ? 'border-white/25 bg-white/[0.09] shadow-panel' : 'border-white/[0.08] bg-[#080c18]/80 hover:border-white/18 hover:bg-[#0b1020]/90'}`}>
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-15 blur-3xl" style={{ background: track.color }} />
              <div className="relative flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 font-mono" style={{ color: track.color, background: `${track.color}14` }}>{track.icon}</span>
                <ArrowUpRight size={18} className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>
              <p className="relative mt-5 font-mono text-[9px] uppercase tracking-[0.22em]" style={{ color: track.color }}>Constellation {String(index + 1).padStart(2, '0')}</p>
              <h3 className="relative mt-2 font-display text-2xl text-white">{track.name}</h3>
              <p className="relative mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-slate-400">{track.tagline}</p>
              <div className="relative mt-5 flex items-center gap-4 border-t border-white/[0.07] pt-4 text-[10px] text-slate-500"><span className="inline-flex items-center gap-1.5"><Clock3 size={12} /> {track.estimatedHours} ч</span><span className="inline-flex items-center gap-1.5"><Rocket size={12} /> {track.projects.length} проекта</span><span className="ml-auto font-mono" style={{ color: selected ? track.color : undefined }}>{selected ? 'SELECTED' : track.shortName}</span></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
