import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/calculators';
import { JsonLd, calculatorJsonLd } from '@/components/seo/json-ld';
import { InventoryForecastClient } from './client';

const meta = getCalculatorBySlug('inventory-forecast-calculator')!;

export const metadata: Metadata = {
  title: `${meta.name} - Forecast Inventory Needs`,
  description: meta.description,
  openGraph: { title: meta.name, description: meta.description, url: `https://calchub.com/calculators/${meta.slug}` },
  twitter: { card: 'summary', title: meta.name, description: meta.description },
  alternates: { canonical: `https://calchub.com/calculators/${meta.slug}` },
};

export default function InventoryForecastPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd(meta.name, meta.slug, meta.description)} />
      <InventoryForecastClient meta={meta} />
    </>
  );
}
