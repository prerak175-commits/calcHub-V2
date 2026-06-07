import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CalcHub',
  description: 'Learn about CalcHub - the fast, reliable calculator platform for finance, investing, business, and supply chain professionals.',
  alternates: { canonical: 'https://calchub.com/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight mb-4">About CalcHub</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            CalcHub is a free, open calculator platform built for professionals, entrepreneurs, and anyone who needs fast, accurate calculations. We believe calculation tools should be instant, reliable, and beautifully simple.
          </p>
          <p>
            Every calculator on CalcHub uses industry-standard formulas, tested for accuracy and presented with clear explanations so you understand not just the result, but the reasoning behind it.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 my-8">
            <div className="bg-secondary/30 rounded-xl p-5 border border-border/50">
              <h3 className="text-sm font-semibold text-foreground mb-2">Speed First</h3>
              <p className="text-xs leading-relaxed">No spinners, no loading screens. Results appear the moment you click calculate.</p>
            </div>
            <div className="bg-secondary/30 rounded-xl p-5 border border-border/50">
              <h3 className="text-sm font-semibold text-foreground mb-2">Formula Transparency</h3>
              <p className="text-xs leading-relaxed">Every calculator shows its formula, worked examples, and FAQ so you can verify results yourself.</p>
            </div>
            <div className="bg-secondary/30 rounded-xl p-5 border border-border/50">
              <h3 className="text-sm font-semibold text-foreground mb-2">Global Currency</h3>
              <p className="text-xs leading-relaxed">Switch between USD, EUR, INR, and CAD with a single click. Built for an international audience.</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-foreground pt-4">Our Mission</h2>
          <p>
            To become the most trusted calculator platform on the web. We aim to provide every calculation a professional might need, with the speed and clarity that keeps users coming back.
          </p>

          <h2 className="text-xl font-semibold text-foreground pt-4">Accuracy Commitment</h2>
          <p>
            All CalcHub calculators use verified, industry-standard formulas. Each calculator includes a worked example so you can cross-check our math. If you ever find an error, please contact us and we will fix it immediately.
          </p>

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
