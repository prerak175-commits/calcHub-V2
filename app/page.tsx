import Link from 'next/link';
import { Search, ArrowRight, Globe, Zap, Shield } from 'lucide-react';
import { CalculatorCard } from '@/components/calculators/calculator-card';
import { calculators, categories } from '@/data/calculators';
import { JsonLd, websiteJsonLd } from '@/components/seo/json-ld';
import {
  Landmark,
  TrendingUp,
  Briefcase,
  PlayCircle,
  Package,
} from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  TrendingUp,
  Briefcase,
  PlayCircle,
  Package,
};

const popularSlugs = [
  'emi-calculator',
  'roi-calculator',
  'profit-margin-calculator',
  'youtube-earnings-calculator',
  'salary-calculator',
  'break-even-calculator',
];

const featuredSlugs = [
  'emi-calculator',
  'roi-calculator',
  'stock-average-calculator',
];

export default function HomePage() {
  const featured = calculators.filter((c) => featuredSlugs.includes(c.slug));
  const popular = calculators.filter((c) => popularSlugs.includes(c.slug));

  return (
    <>
    <JsonLd data={websiteJsonLd()} />
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
              Fast calculators for
              <br />
              <span className="text-primary">every decision</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Free, accurate calculators for finance, investing, business, and supply chain. No sign-up required.
            </p>

            {/* Search */}
            <div className="relative max-w-md">
              <Link
                href="/calculators"
                className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 text-sm text-muted-foreground hover:border-primary/30 transition-colors shadow-sm"
              >
                <Search className="w-4 h-4 shrink-0" />
                <span>Search calculators...</span>
                <ArrowRight className="w-4 h-4 ml-auto shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-border/50 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium">Lightning Fast</p>
                <p className="text-xs text-muted-foreground">Results in milliseconds</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium">Multi-Currency</p>
                <p className="text-xs text-muted-foreground">USD, EUR, INR, CAD</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium">Accurate Formulas</p>
                <p className="text-xs text-muted-foreground">Industry-standard methods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Featured Calculators</h2>
          <Link href="/calculators" className="text-sm text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((calc) => (
            <CalculatorCard key={calc.slug} calculator={calc} showCategory />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/20 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-xl font-semibold mb-6">Categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.icon] || Landmark;
              return (
                <Link
                  key={cat.slug}
                  href={`/calculators?category=${cat.slug}`}
                  className="group bg-white rounded-xl border border-border/60 p-5 hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {cat.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Calculators */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Popular Calculators</h2>
          <Link href="/calculators" className="text-sm text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popular.map((calc) => (
            <CalculatorCard key={calc.slug} calculator={calc} showCategory />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to calculate?</h2>
          <p className="text-sm text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Explore our full library of professional calculators for every financial decision.
          </p>
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Browse All Calculators <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
