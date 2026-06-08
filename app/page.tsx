import Link from 'next/link';
import {
  Search,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  CheckCircle2,
  Users,
  Star,
  Clock,
  Sparkles,
} from 'lucide-react';
import { CalculatorCard } from '@/components/calculators/calculator-card';
import { calculators, categories } from '@/data/calculators';
import { JsonLd, websiteJsonLd, faqJsonLd } from '@/components/seo/json-ld';
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

const stats = [
  { value: '10+', label: 'Calculators', icon: Zap },
  { value: '5', label: 'Categories', icon: Globe },
  { value: '4', label: 'Currencies', icon: Star },
  { value: '0', label: 'Sign-up Required', icon: CheckCircle2 },
];

const homeFaqs = [
  { question: 'Are CalcHub calculators free?', answer: 'Yes, every calculator on CalcHub is completely free to use with no sign-up required. Just pick a tool and start calculating.' },
  { question: 'How accurate are the calculations?', answer: 'All calculators use industry-standard formulas verified against published financial methods. Each calculator page shows the exact formula and a worked example so you can verify results yourself.' },
  { question: 'Can I use CalcHub for professional decisions?', answer: 'CalcHub provides accurate calculations for informational purposes. While our formulas are industry-standard, always consult a qualified professional for important financial, investment, or business decisions.' },
  { question: 'Does CalcHub work on mobile?', answer: 'Yes, every calculator is fully responsive and optimized for mobile devices. The interface adapts to any screen size for a seamless experience.' },
  { question: 'What currencies are supported?', answer: 'CalcHub currently supports USD, EUR, INR, and CAD. You can switch currencies with a single click from any calculator page, and your preference is remembered.' },
];

export default function HomePage() {
  const featured = calculators.filter((c) => featuredSlugs.includes(c.slug));
  const popular = calculators.filter((c) => popularSlugs.includes(c.slug));

  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaqs, 'CalcHub FAQ')} />

      <div className="flex flex-col">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
            <div className="max-w-2xl fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6">
                <Sparkles className="w-3 h-3" />
                Free, no sign-up required
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-5">
                Fast calculators for
                <br />
                <span className="gradient-text">every decision</span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Free, accurate calculators for finance, investing, business, and supply chain.
                Industry-standard formulas. No sign-up required.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/calculators"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Browse All Calculators
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="relative max-w-xs w-full">
                  <Link
                    href="/calculators"
                    className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 text-sm text-muted-foreground hover:border-primary/30 transition-all shadow-sm"
                  >
                    <Search className="w-4 h-4 shrink-0" />
                    <span>Search calculators...</span>
                    <kbd className="hidden sm:inline-flex items-center gap-0.5 ml-auto px-1.5 py-0.5 text-[10px] font-mono bg-secondary border border-border rounded">
                      Ctrl K
                    </kbd>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-border/50 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why CalcHub */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Why choose CalcHub</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Professional-grade tools built for speed, accuracy, and transparency.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'No loading screens, no spinners. Results appear the moment you click calculate. Every tool is optimized for instant computation.',
              },
              {
                icon: Shield,
                title: 'Formula Transparency',
                description: 'Every calculator shows its formula, worked examples, and detailed FAQ. Verify results yourself — no black boxes.',
              },
              {
                icon: Globe,
                title: 'Multi-Currency',
                description: 'Switch between USD, EUR, INR, and CAD with a single click. All monetary outputs update instantly. Your preference is remembered.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Calculators */}
        <section className="bg-secondary/30 dark:bg-secondary/10 border-y border-border/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Calculators</h2>
                <p className="text-sm text-muted-foreground mt-1">Our most versatile tools</p>
              </div>
              <Link href="/calculators" className="text-sm text-primary hover:underline flex items-center gap-1 font-medium">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((calc) => (
                <CalculatorCard key={calc.slug} calculator={calc} showCategory featured />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Browse by Category</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Find the right tool for your domain.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.icon] || Landmark;
              const count = calculators.filter((c) => c.category === cat.slug).length;
              return (
                <Link
                  key={cat.slug}
                  href={`/calculators?category=${cat.slug}`}
                  className="group bg-card rounded-2xl border border-border/60 p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {cat.description}
                  </p>
                  <span className="text-[10px] font-medium text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full">
                    {count} tool{count !== 1 ? 's' : ''}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Popular Calculators */}
        <section className="bg-secondary/30 dark:bg-secondary/10 border-y border-border/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Popular Calculators</h2>
                <p className="text-sm text-muted-foreground mt-1">Most used by our visitors</p>
              </div>
              <Link href="/calculators" className="text-sm text-primary hover:underline flex items-center gap-1 font-medium">
                View all <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {popular.map((calc) => (
                <CalculatorCard key={calc.slug} calculator={calc} showCategory />
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Built on Trust</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Transparency and accuracy are at the core of everything we build.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: CheckCircle2, title: 'Verified Formulas', desc: 'Every calculator uses industry-standard formulas with worked examples you can verify.' },
              { icon: Shield, title: 'Privacy First', desc: 'Calculations run in your browser. We never store or transmit your financial data.' },
              { icon: Clock, title: 'Always Available', desc: 'No downtime, no loading screens. Your tools are ready the moment you need them.' },
              { icon: Users, title: 'Open & Free', desc: 'No paywalls, no sign-ups. Every tool is free for personal and commercial use.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col items-center text-center p-5 rounded-2xl border border-border/40 bg-card/50 hover:border-primary/15 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-success" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary/30 dark:bg-secondary/10 border-y border-border/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about CalcHub.</p>
            </div>
            <div className="space-y-4">
              {homeFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border/50 p-5 hover:border-border transition-colors"
                >
                  <h3 className="text-sm font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/80 opacity-90" />
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-primary-foreground">Ready to calculate?</h2>
            <p className="text-sm text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Explore our full library of professional calculators for every financial decision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/calculators"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/90 transition-all hover:shadow-lg"
              >
                Browse All Calculators <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-primary-foreground border border-white/20 px-6 py-3 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
              >
                Suggest a Calculator
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
