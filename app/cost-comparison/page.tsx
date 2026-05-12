import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { medications } from "@/data/medications";
import { toolSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 Cost Comparison",
  description: "Compare example monthly costs for Ozempic, Wegovy, Mounjaro, and Zepbound in a simple GLP-1 price table.",
  alternates: { canonical: "/cost-comparison" }
};

export default function CostComparisonPage() {
  return (
    <>
      <JsonLd data={toolSchema("GLP-1 Cost Comparison", "/cost-comparison", metadata.description as string)} />
      <PageHero
        eyebrow="Comparison"
        title="GLP-1 Cost Comparison"
        description="A structured pricing table for major GLP-1 and GLP-1/GIP medications. Replace mock values with pharmacy, coupon, or Supabase-backed data later."
      />
      <Section>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <div className="grid min-w-[780px] grid-cols-[1fr_1fr_1fr_1fr_1.2fr] border-b border-slate-200 bg-slate-50 text-sm font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
            <Cell>Medication</Cell>
            <Cell>Ingredient</Cell>
            <Cell>Use</Cell>
            <Cell>Example Cash Price</Cell>
            <Cell>Savings Notes</Cell>
          </div>
          {medications.map((med) => (
            <div key={med.name} className="grid min-w-[780px] grid-cols-[1fr_1fr_1fr_1fr_1.2fr] border-b border-slate-100 text-sm last:border-b-0 dark:border-slate-800">
              <Cell>
                <strong className="text-ink dark:text-white">{med.name}</strong>
                <span className="mt-1 block text-slate-500">{med.manufacturer}</span>
              </Cell>
              <Cell>{med.ingredient}</Cell>
              <Cell>{med.typicalUse}</Cell>
              <Cell>{med.exampleCashPrice}</Cell>
              <Cell>{med.savingsNotes}</Cell>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

function Cell({ children }: { children: ReactNode }) {
  return <div className="p-4 text-slate-600 dark:text-slate-300">{children}</div>;
}
