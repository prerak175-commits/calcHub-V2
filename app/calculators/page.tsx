import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CalculatorsClient } from './client';

export const metadata: Metadata = {
  title: 'All Calculators',
  description: 'Browse all free online calculators for finance, investing, business, creator economy, and supply chain management.',
  openGraph: { title: 'All Calculators | CalcHub', description: 'Browse all free online calculators.', url: 'https://calc-hub-v2.vercel.app/calculators' },
  alternates: { canonical: 'https://calc-hub-v2.vercel.app/calculators' },
};

export default function CalculatorsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-48" />
          <div className="h-4 bg-muted rounded w-64" />
          <div className="h-10 bg-muted rounded w-full" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-28 bg-muted rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    }>
      <CalculatorsClient />
    </Suspense>
  );
}
