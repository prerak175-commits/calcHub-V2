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

export function ProfitMarginClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [revenue, setRevenue] = useState('');
  const [cogs, setCogs] = useState('');
  const [operatingExpenses, setOperatingExpenses] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');
  const [result, setResult] = useState<{
    grossProfit: number;
    grossMargin: number;
    operatingProfit: number;
    operatingMargin: number;
    netProfit: number;
    netMargin: number;
  } | null>(null);

  const calculate = () => {
    const rev = parseFloat(revenue);
    const c = parseFloat(cogs) || 0;
    const opEx = parseFloat(operatingExpenses) || 0;
    const other = parseFloat(otherExpenses) || 0;

    if (!rev || rev <= 0) return;

    const grossProfit = rev - c;
    const grossMargin = (grossProfit / rev) * 100;
    const operatingProfit = grossProfit - opEx;
    const operatingMargin = (operatingProfit / rev) * 100;
    const netProfit = operatingProfit - other;
    const netMargin = (netProfit / rev) * 100;

    setResult({ grossProfit, grossMargin, operatingProfit, operatingMargin, netProfit, netMargin });
  };

  return (
    <CalculatorLayout meta={meta}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Financial Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorInput
            label="Revenue"
            type="number"
            placeholder="e.g., 100000"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Cost of Goods Sold (COGS)"
            type="number"
            placeholder="e.g., 40000"
            value={cogs}
            onChange={(e) => setCogs(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Operating Expenses"
            type="number"
            placeholder="e.g., 25000"
            value={operatingExpenses}
            onChange={(e) => setOperatingExpenses(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Tax, Interest & Other Expenses"
            type="number"
            placeholder="e.g., 5000"
            value={otherExpenses}
            onChange={(e) => setOtherExpenses(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <Button onClick={calculate} className="w-full">Calculate Margins</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="Profit Margin Analysis"
          variant="detailed"
          rows={[
            { label: 'Gross Profit', value: formatCurrency(result.grossProfit, currency) },
            { label: 'Gross Margin', value: `${formatNumber(result.grossMargin)}%`, size: 'lg' },
            { label: 'Operating Profit', value: formatCurrency(result.operatingProfit, currency) },
            { label: 'Operating Margin', value: `${formatNumber(result.operatingMargin)}%`, highlight: true },
            { label: 'Net Profit', value: formatCurrency(result.netProfit, currency) },
            { label: 'Net Margin', value: `${formatNumber(result.netMargin)}%`, size: 'lg' },
          ]}
        />
      )}
    </CalculatorLayout>
  );
}
