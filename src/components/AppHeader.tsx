import { BookOpen, Gauge, Map, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { registry } from '../data/registry';
import { useProgress } from '../features/progress/useProgress';
import { Brand } from './Brand';

const links = [
  { to: '/', label: 'Обсерватория', icon: Map },
  { to: '/tracks', label: 'Траектории', icon: BookOpen },
  { to: '/progress', label: 'Прогресс', icon: Gauge }
];

export function AppHeader() {
  const progress = useProgress();
  const completion = Math.round((progress.completedLessons.length / registry.lessons.length) * 100);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#05070f]/82 backdrop-blur-2xl">
      <div className="mx-auto flex h-[68px] max-w-[1500px] items-center justify-between gap-5 px-4 md:px-8">
        <Brand />
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 md:flex" aria-label="Основная навигация">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs transition ${isActive ? 'bg-white/10 text-white shadow-[inset_0_1px_rgba(255,255,255,.06)]' : 'text-slate-500 hover:text-white'}`}>
              <Icon size={14} aria-hidden="true" />{label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 sm:flex">
            <div className="progress-orbit" style={{ background: `conic-gradient(#56f1ff ${completion * 3.6}deg, rgba(255,255,255,.08) 0deg)` }}><span>{completion}</span></div>
            <div className="hidden lg:block"><p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">Course sync</p><p className="mt-0.5 text-[11px] text-slate-300">{progress.completedLessons.length} / {registry.lessons.length} уроков</p></div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-amber-200/[0.15] bg-amber-200/[0.055] px-3 py-2 text-xs text-amber-100">
            <Sparkles size={14} aria-hidden="true" />
            <span className="font-mono">{progress.xp.toLocaleString('en-US')} XP</span>
          </div>
        </div>
      </div>
    </header>
  );
}
