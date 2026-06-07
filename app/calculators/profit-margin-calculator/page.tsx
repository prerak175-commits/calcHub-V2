import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/calculators';
import { JsonLd, calculatorJsonLd } from '@/components/seo/json-ld';
import { ProfitMarginClient } from './client';

const meta = getCalculatorBySlug('profit-margin-calculator')!;

export const metadata: Metadata = {
  title: `${meta.name} - Calculate Profit Margins`,
  description: meta.description,
  openGraph: { title: meta.name, description: meta.description, url: `https://calchub.com/calculators/${meta.slug}` },
  twitter: { card: 'summary', title: meta.name, description: meta.description },
  alternates: { canonical: `https://calchub.com/calculators/${meta.slug}` },
};

export default function ProfitMarginPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd(meta.name, meta.slug, meta.description)} />
      <ProfitMarginClient meta={meta} />
    </>
  );
}
