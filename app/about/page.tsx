import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Globe, CheckCircle2, Users, Clock, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CalcHub',
  description: 'Learn about CalcHub - the fast, reliable calculator platform for finance, investing, business, and supply chain professionals.',
  alternates: { canonical: 'https://calc-hub-v2.vercel.app/about' },
};

const values = [
  { icon: Zap, title: 'Speed First', desc: 'No spinners, no loading screens. Results appear the moment you click calculate.' },
  { icon: Eye, title: 'Formula Transparency', desc: 'Every calculator shows its formula, worked examples, and FAQ so you can verify results yourself.' },
  { icon: Globe, title: 'Global Currency', desc: 'Switch between USD, EUR, INR, and CAD with a single click. Built for an international audience.' },
  { icon: ShieldCheck, title: 'Privacy by Design', desc: 'Calculations run entirely in your browser. We never store or transmit your financial data.' },
  { icon: CheckCircle2, title: 'Accuracy', desc: 'Industry-standard formulas verified against published financial methods with worked examples.' },
  { icon: Users, title: 'Open & Free', desc: 'No paywalls, no sign-ups. Every tool is free for personal and commercial use.' },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight mb-4">About CalcHub</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-base">
            CalcHub is a free, open calculator platform built for professionals, entrepreneurs, and anyone who needs fast, accurate calculations. We believe calculation tools should be instant, reliable, and beautifully simple.
          </p>
          <p>
            Every calculator on CalcHub uses industry-standard formulas, tested for accuracy and presented with clear explanations so you understand not just the result, but the reasoning behind it.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card rounded-xl border border-border/50 p-5 hover:border-primary/15 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-xs leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <h2 className="text-xl font-semibold text-foreground pt-4">Our Mission</h2>
          <p>
            To become the most trusted calculator platform on the web. We aim to provide every calculation a professional might need, with the speed and clarity that keeps users coming back.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">Accuracy Commitment</h2>
          <p>
            All CalcHub calculators use verified, industry-standard formulas. Each calculator includes a worked example so you can cross-check our math. If you ever find an error, please contact us and we will fix it immediately.
          </p>

          <div className="bg-warning/5 border border-warning/20 rounded-xl p-4 flex items-start gap-3 my-6">
            <Clock className="w-4 h-4 text-warning shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              CalcHub provides results for informational purposes only. It does not constitute financial, investment, or professional advice. Always verify important decisions with a qualified professional. See our <Link href="/disclaimer" className="text-primary hover:underline">disclaimer</Link> for details.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
            >
              Explore our calculators <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
