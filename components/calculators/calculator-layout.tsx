"use client";

import { CalculatorMeta, Category } from '@/types/calculator';
import { getCalculatorBySlug, getCategoryBySlug } from '@/data/calculators';
import { CalculatorCard } from './calculator-card';
import { Badge } from '@/components/ui/badge';
import { FavoriteButton } from '@/components/calculators/favorite-button';
import { ShareCopyButtons } from '@/components/calculators/share-copy-buttons';
import { AdSlot } from '@/components/ads/ad-slot';
import { JsonLd, breadcrumbJsonLd, faqJsonLd } from '@/components/seo/json-ld';
import Link from 'next/link';
import { ChevronRight, Bookmark } from 'lucide-react';

interface CalculatorLayoutProps {
  meta: CalculatorMeta;
  children: React.ReactNode;
  results?: { label: string; value: string }[];
}

export function CalculatorLayout({ meta, children, results }: CalculatorLayoutProps) {
  const category = getCategoryBySlug(meta.category);
  const relatedCalculators = meta.relatedSlugs
    .map(slug => getCalculatorBySlug(slug))
    .filter(Boolean) as CalculatorMeta[];

  const breadcrumbItems = [
    { name: 'Home', url: 'https://calc-hub-v2.vercel.app' },
    { name: 'Calculators', url: 'https://calc-hub-v2.vercel.app/calculators' },
    ...(category ? [{ name: category.name, url: `https://calc-hub-v2.vercel.app/calculators?category=${category.slug}` }] : []),
    { name: meta.name, url: `https://calc-hub-v2.vercel.app/calculators/${meta.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={faqJsonLd(meta.faqs, meta.name)} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/calculators" className="hover:text-foreground transition-colors">Calculators</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          {category && (
            <>
              <Link
                href={`/calculators?category=${category.slug}`}
                className="hover:text-foreground transition-colors"
              >
                {category.name}
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
            </>
          )}
          <span className="text-foreground font-medium truncate">{meta.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Tool */}
            <section className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{meta.name}</h1>
                  <p className="text-muted-foreground leading-relaxed mt-1">{meta.description}</p>
                </div>
                <FavoriteButton slug={meta.slug} />
              </div>

              {/* In-content Ad Slot */}
              <AdSlot className="mb-4" />

              {children}

              {/* Copy / Share */}
              {results && results.length > 0 && (
                <ShareCopyButtons results={results} calculatorName={meta.name} />
              )}
            </section>

            {/* Formula Section */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Formula</h2>
              <div className="bg-muted/50 dark:bg-muted/20 rounded-xl p-5 border border-border/50">
                <pre className="text-sm font-mono whitespace-pre-wrap text-foreground leading-relaxed">
                  {meta.formula}
                </pre>
              </div>
            </section>

            {/* Example Section */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Example Calculation</h2>
              <div className="bg-card rounded-xl p-5 border border-border/60">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {meta.example}
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="bg-warning/5 border border-warning/20 rounded-xl p-4 flex items-start gap-3">
              <Bookmark className="w-4 h-4 text-warning shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                This calculator provides results for informational purposes only. It does not constitute financial, investment, or professional advice. Always verify important decisions with a qualified professional.
              </p>
            </div>

            {/* FAQ Section */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {meta.faqs.map((faq, i) => (
                  <div key={i} className="bg-card rounded-xl border border-border/50 p-5 hover:border-border transition-colors">
                    <h3 className="text-sm font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Ad Slot */}
              <AdSlot variant="sidebar" />

              {category && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Category
                  </h3>
                  <Badge variant="secondary" className="text-sm">
                    {category.name}
                  </Badge>
                </div>
              )}

              {relatedCalculators.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Related Calculators
                  </h3>
                  <div className="space-y-2">
                    {relatedCalculators.map((calc) => (
                      <CalculatorCard key={calc.slug} calculator={calc} />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggest Calculator */}
              <div className="bg-card rounded-xl border border-border/50 p-5 text-center">
                <p className="text-sm font-medium mb-2">Need a different calculator?</p>
                <p className="text-xs text-muted-foreground mb-3">We are always adding new tools based on user feedback.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                >
                  Suggest one <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
