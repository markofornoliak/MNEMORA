import { BookOpen, Gauge, Map } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppHeader } from './AppHeader';

const mobileLinks = [
  { to: '/', label: 'Карта', icon: Map },
  { to: '/tracks', label: 'Треки', icon: BookOpen },
  { to: '/progress', label: 'Прогресс', icon: Gauge }
];

export function AppShell() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070f] pb-20 text-slate-100 md:pb-0">
      <div className="app-ambient pointer-events-none fixed inset-0" aria-hidden="true" />
      <a href="#main-content" className="skip-link">Перейти к содержимому</a>
      <div className="relative z-10">
        <AppHeader />
        <main id="main-content" tabIndex={-1}><Outlet /></main>
        <footer className="border-t border-white/[0.08] bg-[#05070f]/90">
          <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-10 text-xs text-slate-600 md:flex-row md:items-center md:justify-between md:px-8">
            <div><p className="font-mono uppercase tracking-[0.24em] text-slate-500">MNEMORA // Code Observatory</p><p className="mt-2 max-w-xl leading-6">Local-first учебная система: прогресс остаётся в браузере, код исполняется в изолированной среде.</p></div>
            <div className="flex gap-6 font-mono text-[9px] uppercase tracking-[0.18em]"><span>60 lessons</span><span>240 tasks</span><span>15 projects</span></div>
          </div>
        </footer>
      </div>

      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 rounded-[20px] border border-white/10 bg-[#070a13]/95 p-1.5 shadow-panel backdrop-blur-2xl md:hidden" aria-label="Мобильная навигация">
        {mobileLinks.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex min-h-12 flex-col items-center justify-center gap-1 rounded-2xl text-[10px] transition ${isActive ? 'bg-white/10 text-white shadow-[inset_0_1px_rgba(255,255,255,.06)]' : 'text-slate-500'}`}>
            <Icon size={16} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
