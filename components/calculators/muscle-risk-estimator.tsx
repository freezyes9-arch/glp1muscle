"use client";

import { useMemo, useState } from "react";
import { ResultCard } from "@/components/ui/result-card";
import { ScoreGauge } from "@/components/ui/score-gauge";
import { estimateMuscleRisk, MuscleRiskInput } from "@/lib/calculators";

const initial: MuscleRiskInput = {
  weeklyLossPercent: 1.1,
  calories: 1450,
  protein: 95,
  trainingDays: 2,
  age: 48
};

export function MuscleRiskEstimator() {
  const [input, setInput] = useState<MuscleRiskInput>(initial);
  const result = useMemo(() => estimateMuscleRisk(input), [input]);
  const emotionalLabel =
    result.level === "High"
      ? "You may be losing muscle too aggressively."
      : result.level === "Moderate"
        ? "Your plan has a few muscle-risk warning signs."
        : "Your habits look more muscle-protective.";
  const tone = result.level === "High" ? "risk" : result.level === "Moderate" ? "caution" : "good";

  function update<Key extends keyof MuscleRiskInput>(key: Key, value: MuscleRiskInput[Key]) {
    setInput((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <Slider label="Weekly weight loss" suffix="%" min={0} max={3} step={0.1} value={input.weeklyLossPercent} onChange={(value) => update("weeklyLossPercent", value)} />
        <Slider label="Daily calories" suffix=" kcal" min={900} max={2800} step={50} value={input.calories} onChange={(value) => update("calories", value)} />
        <Slider label="Daily protein" suffix="g" min={40} max={220} step={5} value={input.protein} onChange={(value) => update("protein", value)} />
        <Slider label="Training frequency" suffix=" days/week" min={0} max={6} step={1} value={input.trainingDays} onChange={(value) => update("trainingDays", value)} />
        <Slider label="Age" suffix="" min={18} max={80} step={1} value={input.age} onChange={(value) => update("age", value)} />
      </form>
      <div className="grid gap-4">
        <ResultCard
          title="Estimated Muscle Loss Risk"
          value={`${result.score}/100`}
          description={emotionalLabel}
          shareText={`My GLP-1 muscle loss risk estimate is ${result.score}/100. ${emotionalLabel}`}
          tone={tone}
          callout={emotionalLabel}
        />
        <ScoreGauge score={result.score} label={emotionalLabel} />
        <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
          <p className="font-semibold text-ink dark:text-white">What to improve now</p>
          <div className="mt-4 grid gap-3">
            {result.recommendations.map((item) => (
              <p key={item} className="rounded-lg bg-slate-50 p-3 text-sm leading-6 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  suffix,
  value,
  min,
  max,
  step,
  onChange
}: {
  label: string;
  suffix: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="mb-5 grid gap-3 text-sm font-medium text-slate-700 last:mb-0 dark:text-slate-200">
      <span className="flex items-center justify-between gap-3">
        {label}
        <strong className="text-ink dark:text-white">
          {value}
          {suffix}
        </strong>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-ocean"
      />
    </label>
  );
}
