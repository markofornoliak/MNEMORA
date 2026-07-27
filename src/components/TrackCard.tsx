import { ArrowUpRight, CheckCircle2, Clock3, Layers3, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Trek } from '../types/course';
import { ProgressBar } from './ProgressBar';

interface TrackCardProps {
  track: Trek;
  progress: number;
  compact?: boolean;
}

export function TrackCard({ track, progress, compact = false }: TrackCardProps) {
  return (
    <Link
      to={`/track/${track.id}`}
      className="group relative flex min-h-full flex-col overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#090d18] p-5 transition duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70" style={{ background: `linear-gradient(90deg, transparent, ${track.color}, transparent)` }} />
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-[0.13] blur-[60px] transition duration-500 group-hover:opacity-25" style={{ background: track.color }} />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 font-mono text-lg" style={{ color: track.color, background: `${track.color}12` }}>{track.icon}</div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-slate-600">{track.shortName} trajectory</p>
            <p className="mt-1 text-xs text-slate-500">{track.estimatedHours} ч · {track.worlds.length} мира</p>
          </div>
        </div>
        {progress === 100 ? <CheckCircle2 size={20} style={{ color: track.color }} /> : <ArrowUpRight size={20} className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />}
      </div>

      <div className="relative mt-7">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-white">{track.name}</h3>
        <p className={`${compact ? 'line-clamp-2 min-h-12' : 'min-h-20'} mt-3 text-sm leading-6 text-slate-400`}>{compact ? track.tagline : track.outcome}</p>
      </div>

      {!compact && (
        <div className="relative mt-5 flex flex-wrap gap-2">
          {track.skills.slice(0, 4).map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}
        </div>
      )}

      <div className="relative mt-auto pt-7">
        <div className="mb-4 flex items-center gap-4 border-y border-white/[0.07] py-3 text-[10px] text-slate-500">
          <span className="inline-flex items-center gap-1.5"><Layers3 size={13} /> 12 уроков</span>
          <span className="inline-flex items-center gap-1.5"><Rocket size={13} /> {track.projects.length} проекта</span>
          {!compact && <span className="ml-auto inline-flex items-center gap-1.5"><Clock3 size={13} /> {track.estimatedHours} ч</span>}
        </div>
        <ProgressBar value={progress} color={track.color} label={progress ? 'Прогресс трека' : 'Готов к запуску'} />
      </div>
    </Link>
  );
}
