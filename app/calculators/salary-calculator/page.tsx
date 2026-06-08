import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/calculators';
import { JsonLd, calculatorJsonLd } from '@/components/seo/json-ld';
import { SalaryClient } from './client';

const meta = getCalculatorBySlug('salary-calculator')!;

export const metadata: Metadata = {
  title: `${meta.name} - Convert Salary Rates`,
  description: meta.description,
  openGraph: { title: meta.name, description: meta.description, url: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
  twitter: { card: 'summary', title: meta.name, description: meta.description },
  alternates: { canonical: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
};

export default function SalaryPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd(meta.name, meta.slug, meta.description)} />
      <SalaryClient meta={meta} />
    </>
  );
}
