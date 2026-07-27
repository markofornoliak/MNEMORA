import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return <div className="grid min-h-[70vh] place-items-center px-6 text-center"><div><p className="font-mono text-xs uppercase tracking-[0.4em] text-rose-300">Signal 404</p><h1 className="mt-5 font-display text-5xl text-white">Координаты потеряны</h1><p className="mt-4 text-slate-500">Запрошенный фрагмент отсутствует в текущем архиве.</p><Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"><ArrowLeft size={16} /> Вернуться в обсерваторию</Link></div></div>;
}
