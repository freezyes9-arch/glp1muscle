export function ScoreGauge({ score, label }: { score: number; label: string }) {
  const color = score >= 70 ? "bg-rose-500" : score >= 40 ? "bg-amber-500" : "bg-mint";
  const ring = score >= 70 ? "border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/25" : score >= 40 ? "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/25" : "border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/25";

  return (
    <div className={`rounded-lg border p-5 ${ring}`}>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Estimated Muscle Loss Risk</p>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-ink dark:text-white">{score}</p>
        </div>
        <span className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
          {label}
        </span>
      </div>
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}
