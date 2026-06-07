import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/calculators';
import { JsonLd, calculatorJsonLd } from '@/components/seo/json-ld';
import { SafetyStockClient } from './client';

const meta = getCalculatorBySlug('safety-stock-calculator')!;

export const metadata: Metadata = {
  title: `${meta.name} - Calculate Optimal Buffer Stock`,
  description: meta.description,
  openGraph: { title: meta.name, description: meta.description, url: `https://calchub.com/calculators/${meta.slug}` },
  twitter: { card: 'summary', title: meta.name, description: meta.description },
  alternates: { canonical: `https://calchub.com/calculators/${meta.slug}` },
};

export default function SafetyStockPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd(meta.name, meta.slug, meta.description)} />
      <SafetyStockClient meta={meta} />
    </>
  );
}
