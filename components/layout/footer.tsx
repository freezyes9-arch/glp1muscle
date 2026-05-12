import Link from "next/link";
import { disclaimer } from "@/lib/site";
import { guides } from "@/data/guides";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 dark:border-slate-800 dark:bg-slate-950/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-semibold">GLP-1 Intelligence</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">{disclaimer}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Tools</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/protein-calculator">Protein Calculator</Link>
            <Link href="/muscle-loss-risk">Muscle Loss Risk</Link>
            <Link href="/cost-comparison">Cost Comparison</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Guides</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
            {guides.slice(0, 4).map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                {guide.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
