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

export function BreakEvenClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [fixedCosts, setFixedCosts] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [variableCost, setVariableCost] = useState('');
  const [result, setResult] = useState<{
    breakEvenUnits: number;
    breakEvenRevenue: number;
    contributionPerUnit: number;
    contributionRatio: number;
  } | null>(null);

  const calculate = () => {
    const fc = parseFloat(fixedCosts);
    const sp = parseFloat(sellingPrice);
    const vc = parseFloat(variableCost);

    if (!fc || !sp || !vc || sp <= 0) return;
    if (sp <= vc) return;

    const contributionPerUnit = sp - vc;
    const contributionRatio = contributionPerUnit / sp;
    const breakEvenUnits = Math.ceil(fc / contributionPerUnit);
    const breakEvenRevenue = fc / contributionRatio;

    setResult({ breakEvenUnits, breakEvenRevenue, contributionPerUnit, contributionRatio });
  };

  return (
    <CalculatorLayout meta={meta}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Business Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorInput
            label="Fixed Costs (per period)"
            type="number"
            placeholder="e.g., 50000"
            value={fixedCosts}
            onChange={(e) => setFixedCosts(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
            hint="Rent, salaries, insurance, etc."
          />
          <CalculatorInput
            label="Selling Price per Unit"
            type="number"
            placeholder="e.g., 100"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Variable Cost per Unit"
            type="number"
            placeholder="e.g., 40"
            value={variableCost}
            onChange={(e) => setVariableCost(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
            hint="Materials, shipping, commission per unit"
          />
          <Button onClick={calculate} className="w-full">Calculate Break-even</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="Break-even Analysis"
          variant="detailed"
          rows={[
            { label: 'Break-even Units', value: `${formatNumber(result.breakEvenUnits, 0)} units`, size: 'lg' },
            { label: 'Break-even Revenue', value: formatCurrency(result.breakEvenRevenue, currency), size: 'lg' },
            { label: 'Contribution per Unit', value: formatCurrency(result.contributionPerUnit, currency) },
            { label: 'Contribution Margin Ratio', value: `${formatNumber(result.contributionRatio * 100)}%`, highlight: true },
          ]}
        />
      )}
    </CalculatorLayout>
  );
}
