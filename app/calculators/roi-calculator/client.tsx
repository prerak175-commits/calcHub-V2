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

export function RoiClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [initialInvestment, setInitialInvestment] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<{
    roi: number;
    annualizedRoi: number;
    profit: number;
  } | null>(null);

  const calculate = () => {
    const initial = parseFloat(initialInvestment);
    const final_ = parseFloat(finalValue);
    const yrs = parseFloat(years);

    if (!initial || !final_ || initial <= 0) return;

    const profit = final_ - initial;
    const roi = (profit / initial) * 100;
    let annualizedRoi = roi;
    if (yrs && yrs > 0) {
      annualizedRoi = (Math.pow(final_ / initial, 1 / yrs) - 1) * 100;
    }

    setResult({ roi, annualizedRoi, profit });
  };

  return (
    <CalculatorLayout meta={meta}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Investment Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorInput
            label="Initial Investment"
            type="number"
            placeholder="e.g., 10000"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Final Value"
            type="number"
            placeholder="e.g., 15000"
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Investment Period"
            type="number"
            placeholder="e.g., 3"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            suffix="years"
            hint="Required for annualized ROI"
          />
          <Button onClick={calculate} className="w-full">Calculate ROI</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="ROI Results"
          variant="detailed"
          rows={[
            { label: 'Total ROI', value: `${formatNumber(result.roi)}%`, size: 'lg' },
            ...(years ? [{ label: 'Annualized ROI', value: `${formatNumber(result.annualizedRoi)}%`, highlight: true }] : []),
            { label: 'Profit / Loss', value: formatCurrency(result.profit, currency), highlight: result.profit >= 0 },
            { label: 'Initial Investment', value: formatCurrency(parseFloat(initialInvestment), currency) },
            { label: 'Final Value', value: formatCurrency(parseFloat(finalValue), currency) },
          ]}
        />
      )}
    </CalculatorLayout>
  );
}
