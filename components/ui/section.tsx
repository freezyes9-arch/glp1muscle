import { ReactNode } from "react";

export function Section({
  title,
  description,
  children
}: {
  title?: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {(title || description) && (
        <div className="mb-7 max-w-3xl">
          {title && <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white sm:text-3xl">{title}</h2>}
          {description && <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
