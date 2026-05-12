import type { Metadata } from "next";
import { MuscleRiskEstimator } from "@/components/calculators/muscle-risk-estimator";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { toolSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 Muscle Loss Calculator",
  description: "Estimate whether weight loss pace, calories, protein, training, and age may increase muscle loss risk on GLP-1 medications.",
  alternates: { canonical: "/muscle-loss-risk" }
};

export default function MuscleLossRiskPage() {
  return (
    <>
      <JsonLd data={toolSchema("GLP-1 Muscle Loss Risk Estimator", "/muscle-loss-risk", metadata.description as string)} />
      <PageHero
        eyebrow="GLP-1 muscle loss calculator"
        title="Are You Losing Muscle Too Fast?"
        description="Score the main risk factors and see what to change first to preserve strength while the scale is moving."
      />
      <Section>
        <MuscleRiskEstimator />
      </Section>
    </>
  );
}
