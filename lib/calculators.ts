export type ProteinInput = {
  gender: "female" | "male" | "other";
  age: number;
  weight: number;
  goalWeight: number;
  activity: "low" | "moderate" | "high";
  resistanceTraining: boolean;
  medication: string;
};

export type ProteinResult = {
  proteinLow: number;
  proteinHigh: number;
  target: number;
  hydrationLiters: number;
  muscleRecommendation: string;
  warning: string | null;
};

const activityMultiplier = {
  low: 1.55,
  moderate: 1.75,
  high: 1.95
};

export function calculateProtein(input: ProteinInput): ProteinResult {
  const referenceWeight = Math.max(input.goalWeight || input.weight, input.weight * 0.72);
  const trainingBoost = input.resistanceTraining ? 0.18 : 0;
  const ageBoost = input.age >= 60 ? 0.15 : input.age >= 45 ? 0.08 : 0;
  const gramsPerKg = activityMultiplier[input.activity] + trainingBoost + ageBoost;
  const proteinLow = Math.round(referenceWeight * Math.max(1.35, gramsPerKg - 0.2));
  const proteinHigh = Math.round(referenceWeight * Math.min(2.35, gramsPerKg + 0.2));
  const target = Math.round((proteinLow + proteinHigh) / 2);
  const hydrationLiters = Number(Math.min(4.2, Math.max(2.2, input.weight * 0.035)).toFixed(1));

  return {
    proteinLow,
    proteinHigh,
    target,
    hydrationLiters,
    muscleRecommendation: input.resistanceTraining
      ? "Keep lifting 2-4 times weekly and spread protein across the day so low appetite does not quietly pull your intake down."
      : "Add 2-3 simple resistance sessions each week. This is one of the strongest signals you can send your body to keep muscle.",
    warning:
      target < 90
        ? "This target is on the low side for active weight loss. If you are losing quickly or feeling weaker, ask a clinician or dietitian whether you need a higher floor."
        : null
  };
}

export type MuscleRiskInput = {
  weeklyLossPercent: number;
  calories: number;
  protein: number;
  trainingDays: number;
  age: number;
};

export type MuscleRiskResult = {
  score: number;
  level: "Low" | "Moderate" | "High";
  recommendations: string[];
};

export function estimateMuscleRisk(input: MuscleRiskInput): MuscleRiskResult {
  let score = 18;
  score += input.weeklyLossPercent > 1.5 ? 32 : input.weeklyLossPercent > 1 ? 20 : input.weeklyLossPercent > 0.75 ? 10 : 0;
  score += input.calories < 1200 ? 22 : input.calories < 1500 ? 12 : 0;
  score += input.protein < 80 ? 24 : input.protein < 110 ? 12 : 0;
  score += input.trainingDays < 1 ? 22 : input.trainingDays < 3 ? 10 : 0;
  score += input.age >= 60 ? 14 : input.age >= 45 ? 7 : 0;
  score = Math.max(0, Math.min(100, Math.round(score)));

  const recommendations = [
    input.protein < 110 ? "Raise protein before cutting calories further. Low protein plus low appetite is where muscle loss can sneak in." : "Keep protein consistent. Your daily target is doing important protection work.",
    input.trainingDays < 3 ? "Add 2-4 strength sessions per week, even if they are short. Strength is the signal your body needs to keep lean mass." : "Keep training consistent and watch strength numbers, not only the scale.",
    input.weeklyLossPercent > 1 ? "Consider slowing the rate of loss if strength, energy, or measurements are dropping too fast." : "Your current loss pace is more muscle-preserving than aggressive crash dieting."
  ];

  return {
    score,
    level: score >= 70 ? "High" : score >= 40 ? "Moderate" : "Low",
    recommendations
  };
}
