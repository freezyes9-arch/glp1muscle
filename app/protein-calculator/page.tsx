import type { Metadata } from "next";
import { ProteinCalculator } from "@/components/calculators/protein-calculator";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { toolSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ozempic Protein Calculator",
  description:
    "Calculate how much protein you may need on Ozempic, Wegovy, Mounjaro, or Zepbound to help preserve muscle while losing weight.",
  alternates: { canonical: "/protein-calculator" }
};

export default function ProteinCalculatorPage() {
  return (
    <>
      <JsonLd
        data={toolSchema(
          "GLP-1 Protein Calculator",
          "/protein-calculator",
          metadata.description as string
        )}
      />

      <PageHero
        eyebrow="Ozempic protein calculator"
        title="How Much Protein Do You Need on GLP-1?"
        description="Low appetite can make it easy to under-eat protein. Use this calculator to set a realistic target for preserving strength and lean mass."
      />

      <Section>
        <ProteinCalculator />
      </Section>

      <Section title="Why Protein Matters on GLP-1s">
        <p className="text-slate-600 dark:text-slate-300">
          Lower appetite can make protein harder to hit. A practical target,
          paired with resistance training, can support lean mass while weight
          drops.
        </p>
      </Section>
    </>
  );
}