import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
      <div className={children ? "grid items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]" : "max-w-4xl"}>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean dark:text-mint">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
