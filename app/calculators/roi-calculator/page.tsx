import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/calculators';
import { JsonLd, calculatorJsonLd } from '@/components/seo/json-ld';
import { RoiClient } from './client';

const meta = getCalculatorBySlug('roi-calculator')!;

export const metadata: Metadata = {
  title: `${meta.name} - Measure Investment Returns`,
  description: meta.description,
  openGraph: { title: meta.name, description: meta.description, url: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
  twitter: { card: 'summary', title: meta.name, description: meta.description },
  alternates: { canonical: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
};

export default function RoiPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd(meta.name, meta.slug, meta.description)} />
      <RoiClient meta={meta} />
    </>
  );
}
