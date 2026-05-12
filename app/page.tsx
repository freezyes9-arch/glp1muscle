import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, Calculator, HeartPulse, ReceiptText, ShieldCheck, Sparkles } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { guides } from "@/data/guides";
import { websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GLP-1 Muscle Loss Calculator and Protein Tools",
  description:
    "Free GLP-1 muscle loss calculator, Ozempic protein calculator, and practical muscle preservation guides for Ozempic, Wegovy, Mounjaro, and Zepbound users.",
  alternates: { canonical: "/" },
  keywords: [
    "GLP-1 muscle loss calculator",
    "Ozempic protein calculator",
    "Do you lose muscle on Ozempic",
    "How much protein on Wegovy",
    "Muscle preservation on GLP-1"
  ]
};

const tools = [
  {
    href: "/protein-calculator",
    title: "Ozempic Protein Calculator",
    description: "Find a realistic protein range when appetite is low and weight is dropping fast.",
    icon: Calculator
  },
  {
    href: "/muscle-loss-risk",
    title: "GLP-1 Muscle Loss Calculator",
    description: "See whether your pace, calories, protein, and training habits may put lean mass at risk.",
    icon: Activity
  },
  {
    href: "/cost-comparison",
    title: "Cost Comparison",
    description: "Compare example monthly costs for Ozempic, Wegovy, Mounjaro, and Zepbound.",
    icon: ReceiptText
  }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(89,195,166,0.28),transparent_30rem),radial-gradient(circle_at_80%_0%,rgba(34,111,159,0.18),transparent_28rem)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-12 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8 lg:pb-20 lg:pt-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-white/70 px-3 py-1.5 text-sm font-semibold text-ocean shadow-sm backdrop-blur dark:bg-slate-950/60 dark:text-mint">
              <HeartPulse className="h-4 w-4" />
              GLP-1 muscle preservation tools
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-tight text-ink dark:text-white sm:text-6xl lg:text-7xl">
              Are You Losing Muscle on GLP-1?
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600 dark:text-slate-300">
              Free calculators and practical tools to help Ozempic, Wegovy, Mounjaro, and Zepbound users preserve muscle while losing weight.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/muscle-loss-risk" className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-5 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-ink">
                Calculate Your Muscle Loss Risk
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/protein-calculator" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/70 px-5 py-4 text-base font-semibold text-ink backdrop-blur transition hover:bg-white dark:border-slate-700 dark:bg-slate-950/50 dark:text-white dark:hover:bg-slate-900">
                Calculate Protein Needs
                <Calculator className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-7 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-mint" /> No account needed</span>
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-mint" /> Screenshot-friendly</span>
              <span className="flex items-center gap-2"><HeartPulse className="h-4 w-4 text-mint" /> Built around lean mass</span>
            </div>
          </div>
          <div className="rounded-lg border border-white/70 bg-white/78 p-5 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-950/72">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ocean dark:text-mint">Fast self-check</p>
            <div className="mt-5 rounded-lg bg-rose-50 p-5 dark:bg-rose-950/25">
              <p className="text-sm font-medium text-rose-700 dark:text-rose-200">If the scale is moving quickly...</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-ink dark:text-white">your strength may be the signal to watch.</p>
            </div>
            <div className="mt-4 grid gap-3">
              <MiniSignal label="Protein below target" value="Higher risk" />
              <MiniSignal label="No resistance training" value="Fixable" />
              <MiniSignal label="Losing over 1% weekly" value="Slow down" />
            </div>
          </div>
        </div>
      </section>

      <Section title="Start Here" description="Three lightweight utilities focused on preserving muscle while losing weight on GLP-1 medications.">
        <div className="grid gap-4 md:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <tool.icon className="h-6 w-6 text-ocean dark:text-mint" />
              <h2 className="mt-4 text-lg font-semibold text-ink dark:text-white">{tool.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{tool.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Muscle Preservation Guides" description="SEO-focused guides built around the questions people actually search, post, and worry about.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="rounded-lg border border-slate-200 bg-white p-5 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900">
              <p className="text-sm font-semibold text-ocean dark:text-mint">{guide.keyword}</p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink dark:text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{guide.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

function MiniSignal({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 text-sm dark:border-slate-800 dark:bg-slate-900">
      <span className="text-slate-600 dark:text-slate-300">{label}</span>
      <strong className="text-ink dark:text-white">{value}</strong>
    </div>
  );
}
