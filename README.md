# GLP-1 Intelligence

A modern, SEO-first utility site for GLP-1 medication users. Built with Next.js 15, TypeScript, TailwindCSS, Supabase-ready data access, and a programmatic content architecture.

## Getting Started

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add Supabase credentials when you are ready to store prices, guide data, or user-submitted utility data.

## Structure

- `app/` - App Router pages, metadata, sitemap, robots
- `components/` - Reusable UI and calculator components
- `data/` - Mock pricing, medication, and SEO guide content
- `lib/` - Calculator logic, SEO/schema helpers, Supabase client

## Notes

Calculator outputs are informational estimates and not medical advice. The app is intentionally lightweight and utility-first for organic search growth.
