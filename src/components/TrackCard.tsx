import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Trek } from '../types/course';
import { ProgressBar } from './ProgressBar';

interface TrackCardProps { track: Trek; progress: number; compact?: boolean }

export function TrackCard({ track, progress, compact = false }: TrackCardProps) {
  return (
    <Link to={`/track/${track.id}`} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition group-hover:opacity-35" style={{ background: track.color }} />
      <div className="relative flex items-start justify-between">
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 font-mono text-lg" style={{ color: track.color, background: `${track.color}12` }}>{track.icon}</div>
        {progress === 100 ? <CheckCircle2 size={20} style={{ color: track.color }} /> : <ArrowUpRight size={20} className="text-slate-500 transition group-hover:text-white" />}
      </div>
      <div className="relative mt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-500">{track.worlds.length} мира · 12 уроков</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-white">{track.name}</h3>
        {!compact && <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{track.tagline}</p>}
        <div className="mt-5"><ProgressBar value={progress} color={track.color} label="Синхронизация" /></div>
      </div>
    </Link>
  );
}
