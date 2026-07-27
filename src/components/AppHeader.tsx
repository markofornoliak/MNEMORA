import { BookOpen, Gauge, Map, Sparkles } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useProgress } from '../features/progress/useProgress';
import { Brand } from './Brand';

const links = [
  { to: '/', label: 'Обсерватория', icon: Map },
  { to: '/tracks', label: 'Треки', icon: BookOpen },
  { to: '/progress', label: 'Прогресс', icon: Gauge }
];

export function AppHeader() {
  const progress = useProgress();
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#05070f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-4 py-3 md:px-8">
        <Brand />
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 md:flex" aria-label="Основная навигация">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs transition ${isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}>
              <Icon size={14} aria-hidden="true" />{label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 rounded-full border border-amber-200/[0.15] bg-amber-200/5 px-3 py-2 text-xs text-amber-100">
          <Sparkles size={14} aria-hidden="true" />
          <span className="font-mono">{progress.xp.toLocaleString('en-US')} XP</span>
        </div>
      </div>
    </header>
  );
}
