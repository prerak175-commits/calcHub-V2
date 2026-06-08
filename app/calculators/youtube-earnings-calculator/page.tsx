import type { Metadata } from 'next';
import { getCalculatorBySlug } from '@/data/calculators';
import { JsonLd, calculatorJsonLd } from '@/components/seo/json-ld';
import { YoutubeEarningsClient } from './client';

const meta = getCalculatorBySlug('youtube-earnings-calculator')!;

export const metadata: Metadata = {
  title: `${meta.name} - Estimate Channel Revenue`,
  description: meta.description,
  openGraph: { title: meta.name, description: meta.description, url: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
  twitter: { card: 'summary', title: meta.name, description: meta.description },
  alternates: { canonical: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
};

export default function YoutubeEarningsPage() {
  return (
    <>
      <JsonLd data={calculatorJsonLd(meta.name, meta.slug, meta.description)} />
      <YoutubeEarningsClient meta={meta} />
    </>
  );
}
