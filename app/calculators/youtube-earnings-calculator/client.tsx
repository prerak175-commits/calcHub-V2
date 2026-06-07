"use client";

import { useState } from 'react';
import { CalculatorLayout } from '@/components/calculators/calculator-layout';
import { CalculatorInput } from '@/components/calculators/calculator-input';
import { CalculatorResult } from '@/components/calculators/calculator-result';
import { CurrencySelector } from '@/components/layout/currency-selector';
import { useCurrency } from '@/hooks/use-currency';
import { formatCurrency, formatNumber } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalculatorMeta } from '@/types/calculator';

interface Props {
  meta: CalculatorMeta;
}

export function YoutubeEarningsClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [dailyViews, setDailyViews] = useState('');
  const [cpm, setCpm] = useState('');
  const [result, setResult] = useState<{
    dailyEarnings: number;
    weeklyEarnings: number;
    monthlyEarnings: number;
    annualEarnings: number;
    creatorDaily: number;
    creatorAnnual: number;
  } | null>(null);

  const calculate = () => {
    const views = parseFloat(dailyViews);
    const cpmVal = parseFloat(cpm);

    if (!views || !cpmVal || views <= 0 || cpmVal <= 0) return;

    const dailyEarnings = (views / 1000) * cpmVal;
    const weeklyEarnings = dailyEarnings * 7;
    const monthlyEarnings = dailyEarnings * 30;
    const annualEarnings = dailyEarnings * 365;
    const creatorDaily = dailyEarnings * 0.55;
    const creatorAnnual = creatorDaily * 365;

    setResult({ dailyEarnings, weeklyEarnings, monthlyEarnings, annualEarnings, creatorDaily, creatorAnnual });
  };

  return (
    <CalculatorLayout meta={meta}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Channel Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorInput
            label="Daily Views"
            type="number"
            placeholder="e.g., 50000"
            value={dailyViews}
            onChange={(e) => setDailyViews(e.target.value)}
          />
          <CalculatorInput
            label="CPM (Cost Per 1,000 Impressions)"
            type="number"
            placeholder="e.g., 5"
            value={cpm}
            onChange={(e) => setCpm(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
            hint="Typical CPM: $0.50-$4 (most niches), $10-$30+ (finance/tech)"
          />
          <Button onClick={calculate} className="w-full">Calculate Earnings</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="YouTube Earnings Estimate"
          variant="detailed"
          rows={[
            { label: 'Daily Earnings (Gross)', value: formatCurrency(result.dailyEarnings, currency) },
            { label: 'Weekly Earnings (Gross)', value: formatCurrency(result.weeklyEarnings, currency) },
            { label: 'Monthly Earnings (Gross)', value: formatCurrency(result.monthlyEarnings, currency), highlight: true },
            { label: 'Annual Earnings (Gross)', value: formatCurrency(result.annualEarnings, currency), size: 'lg' },
            { label: 'Creator Share (55%)', value: `${formatCurrency(result.creatorDaily, currency)}/day`, subtext: `After YouTube's 45% cut` },
            { label: 'Creator Annual', value: formatCurrency(result.creatorAnnual, currency), highlight: true },
          ]}
        />
      )}
    </CalculatorLayout>
  );
}
