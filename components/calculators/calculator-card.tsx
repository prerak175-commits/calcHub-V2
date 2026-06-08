import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { CalculatorMeta } from '@/types/calculator';
import {
  Landmark,
  TrendingUp,
  Briefcase,
  PlayCircle,
  Package,
  Home,
  PiggyBank,
  Wallet,
  BarChart3,
  Percent,
  Target,
  Youtube,
  PackageSearch,
  ShieldCheck,
  Calculator,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  TrendingUp,
  Briefcase,
  PlayCircle,
  Package,
  Home,
  PiggyBank,
  Wallet,
  BarChart3,
  Percent,
  Target,
  Youtube,
  PackageSearch,
  ShieldCheck,
};

interface CalculatorCardProps {
  calculator: CalculatorMeta;
  showCategory?: boolean;
  featured?: boolean;
}

export function CalculatorCard({ calculator, showCategory = false, featured = false }: CalculatorCardProps) {
  const Icon = iconMap[calculator.icon] || Calculator;

  return (
    <Link href={`/calculators/${calculator.slug}`} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl">
      <Card className={`h-full transition-all duration-300 hover:shadow-lg border-border/60 group-hover:border-primary/25 ${
        featured ? 'hover:shadow-primary/5' : ''
      }`}>
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300 ${
              featured ? 'w-11 h-11' : ''
            }`}>
              <Icon className={`text-primary ${featured ? 'w-5 h-5' : 'w-5 h-5'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {calculator.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-muted-foreground/0 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 shrink-0" />
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {calculator.description}
              </p>
              {showCategory && (
                <span className="inline-block mt-2.5 text-[10px] font-medium text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full">
                  {calculator.category.charAt(0).toUpperCase() + calculator.category.slice(1).replace('-', ' ')}
                </span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
