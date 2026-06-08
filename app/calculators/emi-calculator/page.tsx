import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/calculators';
import { JsonLd, calculatorJsonLd } from '@/components/seo/json-ld';
import { EmiCalculatorClient } from './client';

const meta = getCalculatorBySlug('emi-calculator')!;

export const metadata: Metadata = {
  title: `${meta.name} - Calculate Monthly Loan EMI`,
  description: meta.description,
  openGraph: { title: meta.name, description: meta.description, url: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
  twitter: { card: 'summary', title: meta.name, description: meta.description },
  alternates: { canonical: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
};

export default function EmiCalculatorPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd(meta.name, meta.slug, meta.description)} />
      <EmiCalculatorClient meta={meta} />
    </>
  );
}
