import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Calculator className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-3">404</h1>
      <h2 className="text-xl font-semibold mb-3">Page not found</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        The page you are looking for does not exist. It may have been moved or deleted.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          Go Home <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/calculators"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
        >
          Browse Calculators
        </Link>
      </div>
    </div>
  );
}
