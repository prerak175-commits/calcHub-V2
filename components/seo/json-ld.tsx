export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CalcHub',
    url: 'https://calc-hub-v2.vercel.app',
    description: 'Free online calculators for finance, investing, business, and supply chain.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://calc-hub-v2.vercel.app/calculators?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
}

export function calculatorJsonLd(name: string, slug: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    url: `https://calc-hub-v2.vercel.app/calculators/${slug}`,
    description,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}
