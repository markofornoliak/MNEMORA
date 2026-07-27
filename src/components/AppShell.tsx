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
    <div className="min-h-screen bg-[#05070f] pb-20 text-slate-100 md:pb-0">
      <a href="#main-content" className="skip-link">Перейти к содержимому</a>
      <AppHeader />
      <main id="main-content" tabIndex={-1}><Outlet /></main>
      <footer className="border-t border-white/[0.08] px-6 py-10 text-center text-xs tracking-[0.2em] text-slate-600">
        MNEMORA // LOCAL-FIRST LEARNING SYSTEM
      </footer>
      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 rounded-2xl border border-white/10 bg-[#070a13]/95 p-1 shadow-panel backdrop-blur-xl md:hidden" aria-label="Мобильная навигация">
        {mobileLinks.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[10px] transition ${isActive ? 'bg-white/10 text-white' : 'text-slate-500'}`}>
            <Icon size={16} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
