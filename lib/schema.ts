import { SITE } from "@/lib/site";

type Schema = Record<string, unknown>;

export function websiteSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/guides/how-much-protein-on-ozempic?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function toolSchema(name: string, path: string, description: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: `${SITE.url}${path}`,
    applicationCategory: "HealthApplication",
    operatingSystem: "Any",
    description
  };
}

export function articleSchema(title: string, path: string, description: string): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE.url}${path}`,
    author: {
      "@type": "Organization",
      name: SITE.name
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name
    }
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
