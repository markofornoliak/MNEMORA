import { Link } from 'react-router-dom';

export function Brand() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="MNEMORA — на главную">
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-cyan-200/30 bg-cyan-200/5 shadow-glow">
        <span className="h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_18px_currentColor]" />
        <span className="absolute inset-1 rounded-full border border-violet-300/30 transition-transform duration-700 group-hover:rotate-180" />
      </span>
      <span>
        <strong className="block font-display text-sm tracking-[0.28em] text-white">MNEMORA</strong>
        <span className="block text-[9px] tracking-[0.34em] text-slate-500">CODE OBSERVATORY</span>
      </span>
    </Link>
  );
}
