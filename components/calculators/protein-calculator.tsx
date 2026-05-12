"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ResultCard } from "@/components/ui/result-card";
import { calculateProtein, ProteinInput } from "@/lib/calculators";

const initial: ProteinInput = {
  gender: "female",
  age: 42,
  weight: 92,
  goalWeight: 74,
  activity: "moderate",
  resistanceTraining: true,
  medication: "Wegovy"
};

export function ProteinCalculator() {
  const [input, setInput] = useState<ProteinInput>(initial);
  const result = useMemo(() => calculateProtein(input), [input]);

  function update<Key extends keyof ProteinInput>(key: Key, value: ProteinInput[Key]) {
    setInput((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Gender">
            <select value={input.gender} onChange={(event) => update("gender", event.target.value as ProteinInput["gender"])} className="input">
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </Field>
          <Field label="Medication">
            <select value={input.medication} onChange={(event) => update("medication", event.target.value)} className="input">
              <option>Ozempic</option>
              <option>Wegovy</option>
              <option>Mounjaro</option>
              <option>Zepbound</option>
            </select>
          </Field>
          <NumberField label="Age" value={input.age} onChange={(value) => update("age", value)} />
          <NumberField label="Current weight (kg)" value={input.weight} onChange={(value) => update("weight", value)} />
          <NumberField label="Goal weight (kg)" value={input.goalWeight} onChange={(value) => update("goalWeight", value)} />
          <Field label="Activity level">
            <select value={input.activity} onChange={(event) => update("activity", event.target.value as ProteinInput["activity"])} className="input">
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </Field>
        </div>
        <label className="mt-5 flex items-center gap-3 rounded-lg bg-slate-50 p-4 text-sm font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-200">
          <input
            type="checkbox"
            checked={input.resistanceTraining}
            onChange={(event) => update("resistanceTraining", event.target.checked)}
            className="h-5 w-5 rounded border-slate-300 text-ocean"
          />
          Resistance training at least twice weekly
        </label>
      </form>
      <div className="grid gap-4">
        <ResultCard
          title="Your muscle-preserving protein target"
          value={`${result.proteinLow}-${result.proteinHigh}g`}
          description={`Aim near ${result.target}g/day to give your body a better chance of preserving lean mass while appetite is lower on ${input.medication}.`}
          shareText={`My GLP-1 protein target is ${result.proteinLow}-${result.proteinHigh}g/day to help preserve muscle while losing weight.`}
          tone="good"
          callout="Protein is one of the easiest levers to fix first."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Metric label="Hydration target" value={`${result.hydrationLiters}L/day`} />
          <Metric
            label="Muscle preservation"
            value={input.resistanceTraining ? "Your current habits may help preserve lean mass." : "Add strength training to protect lean mass."}
          />
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
          <p className="font-semibold text-ink dark:text-white">What to improve now</p>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{result.muscleRecommendation}</p>
          {result.warning && <p className="mt-3 rounded-lg bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">{result.warning}</p>}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      {children}
    </label>
  );
}

function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <Field label={label}>
      <input type="number" min="0" value={value} onChange={(event) => onChange(Number(event.target.value))} className="input" />
    </Field>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-semibold leading-snug text-ink dark:text-white">{value}</p>
    </div>
  );
}
