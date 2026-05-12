import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { Section } from "@/components/ui/section";
import { guides } from "@/data/guides";
import { articleSchema, faqSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    keywords: [guide.keyword, "GLP-1", "Ozempic", "Wegovy", "Mounjaro", "Zepbound"]
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd data={articleSchema(guide.title, `/guides/${guide.slug}`, guide.description)} />
      <JsonLd data={faqSchema(guide.faqs)} />
      <article className="mx-auto max-w-3xl px-4 pb-8 pt-12 sm:px-6 lg:pb-14 lg:pt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean dark:text-mint">{guide.keyword}</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl">{guide.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{guide.description}</p>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Updated {guide.updated}</p>
      </article>
      <Section>
        <div className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-8 last:mb-0">
              <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white">{section.heading}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{section.body}</p>
            </section>
          ))}

          {guide.table && (
            <div className="mt-8 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
              <div
                className="grid bg-slate-50 text-sm font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                style={{
                  gridTemplateColumns: `repeat(${guide.table?.columns?.length || 1}, minmax(0, 1fr))`
                }}
              >
                {guide.table.columns.map((column) => (
                  <div key={column} className="p-3">
                    {column}
                  </div>
                ))}
              </div>

              {guide.table.rows.map((row) => (
                <div
                  key={row.join("-")}
                  className="grid border-t border-slate-200 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300"
                  style={{
                    gridTemplateColumns: `repeat(${guide.table?.columns?.length || 1}, minmax(0, 1fr))`
                  }}
                >
                  {row.map((cell) => (
                    <div key={cell} className="p-3">
                      {cell}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section title="Practical Next Steps">
        <div className="mx-auto grid max-w-3xl gap-3">
          {guide.recommendations.map((item) => (
            <p
              key={item}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
            >
              {item}
            </p>
          ))}

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link
              href="/muscle-loss-risk"
              className="rounded-lg bg-ink px-4 py-3 text-center font-semibold text-white dark:bg-white dark:text-ink"
            >
              Calculate Muscle Loss Risk
            </Link>

            <Link
              href="/protein-calculator"
              className="rounded-lg border border-slate-300 px-4 py-3 text-center font-semibold text-ink dark:border-slate-700 dark:text-white"
            >
              Calculate Protein Needs
            </Link>
          </div>
        </div>
      </Section>

      <Section title="FAQ">
        <div className="mx-auto grid max-w-3xl gap-4">
          {guide.faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
            >
              <summary className="cursor-pointer font-semibold text-ink dark:text-white">
                {faq.question}
              </summary>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}