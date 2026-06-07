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
}

export function CalculatorCard({ calculator, showCategory = false }: CalculatorCardProps) {
  const Icon = iconMap[calculator.icon] || Calculator;

  return (
    <Link href={`/calculators/${calculator.slug}`}>
      <Card className="group h-full transition-all duration-200 hover:shadow-md hover:border-primary/20 border-border/60">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {calculator.name}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {calculator.description}
              </p>
              {showCategory && (
                <span className="inline-block mt-2 text-[10px] font-medium text-primary/80 bg-primary/5 px-2 py-0.5 rounded">
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
