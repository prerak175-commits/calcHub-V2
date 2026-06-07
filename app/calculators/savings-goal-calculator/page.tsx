import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/calculators';
import { JsonLd, calculatorJsonLd } from '@/components/seo/json-ld';
import { SavingsGoalClient } from './client';

const meta = getCalculatorBySlug('savings-goal-calculator')!;

export const metadata: Metadata = {
  title: `${meta.name} - Plan Your Savings`,
  description: meta.description,
  openGraph: { title: meta.name, description: meta.description, url: `https://calchub.com/calculators/${meta.slug}` },
  twitter: { card: 'summary', title: meta.name, description: meta.description },
  alternates: { canonical: `https://calchub.com/calculators/${meta.slug}` },
};

export default function SavingsGoalPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd(meta.name, meta.slug, meta.description)} />
      <SavingsGoalClient meta={meta} />
    </>
  );
}
