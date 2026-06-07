"use client";

import { CalculatorMeta, Category } from '@/types/calculator';
import { getCalculatorBySlug, getCategoryBySlug } from '@/data/calculators';
import { CalculatorCard } from './calculator-card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface CalculatorLayoutProps {
  meta: CalculatorMeta;
  children: React.ReactNode;
}

function toTitleCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function CalculatorLayout({ meta, children }: CalculatorLayoutProps) {
  const category = getCategoryBySlug(meta.category);
  const relatedCalculators = meta.relatedSlugs
    .map(slug => getCalculatorBySlug(slug))
    .filter(Boolean) as CalculatorMeta[];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/calculators" className="hover:text-foreground transition-colors">Calculators</Link>
        <ChevronRight className="w-4 h-4" />
        {category && (
          <>
            <Link
              href={`/calculators?category=${category.slug}`}
              className="hover:text-foreground transition-colors"
            >
              {category.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
          </>
        )}
        <span className="text-foreground font-medium truncate">{meta.name}</span>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Calculator Tool */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">{meta.name}</h1>
            </div>
            <p className="text-muted-foreground leading-relaxed">{meta.description}</p>
            {children}
          </section>

          {/* Formula Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Formula</h2>
            <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
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

          {/* FAQ Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {meta.faqs.map((faq, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-sm font-medium">{faq.question}</h3>
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
            {category && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Category
                </h3>
                <Badge variant="secondary" className="text-sm">
                  {category.name}
                </Badge>
              </div>
            )}

            {relatedCalculators.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Related Calculators
                </h3>
                <div className="space-y-2">
                  {relatedCalculators.map((calc) => (
                    <CalculatorCard key={calc.slug} calculator={calc} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
