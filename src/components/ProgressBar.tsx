interface ProgressBarProps {
  value: number;
  label?: string;
  color?: string;
}

export function ProgressBar({ value, label, color = '#56f1ff' }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className="space-y-2">
      {label && <div className="flex justify-between text-xs text-slate-400"><span>{label}</span><span>{safeValue}%</span></div>}
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]" role="progressbar" aria-valuenow={safeValue} aria-valuemin={0} aria-valuemax={100} aria-label={label ?? 'Прогресс'}>
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${safeValue}%`, background: color, boxShadow: `0 0 18px ${color}` }} />
      </div>
    </div>
  );
}
