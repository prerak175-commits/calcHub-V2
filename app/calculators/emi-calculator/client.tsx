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

export function EmiCalculatorClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years');
  const [result, setResult] = useState<{
    emi: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const annualRate = parseFloat(rate);
    let N = parseFloat(tenure);

    if (!P || !annualRate || !N || P <= 0 || annualRate <= 0 || N <= 0) return;

    if (tenureType === 'years') N = N * 12;

    const R = annualRate / 12 / 100;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    setResult({ emi, totalPayment, totalInterest });
  };

  return (
    <CalculatorLayout meta={meta}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Loan Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorInput
            label="Loan Amount"
            type="number"
            placeholder="e.g., 1000000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Annual Interest Rate"
            type="number"
            placeholder="e.g., 8.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            suffix="%"
          />
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Loan Tenure</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="e.g., 20"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <div className="flex rounded-md border border-input overflow-hidden">
                <button
                  onClick={() => setTenureType('years')}
                  className={`px-3 py-2 text-sm ${tenureType === 'years' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
                >
                  Years
                </button>
                <button
                  onClick={() => setTenureType('months')}
                  className={`px-3 py-2 text-sm ${tenureType === 'months' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
                >
                  Months
                </button>
              </div>
            </div>
          </div>
          <Button onClick={calculate} className="w-full">
            Calculate EMI
          </Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="EMI Breakdown"
          variant="detailed"
          rows={[
            { label: 'Monthly EMI', value: formatCurrency(result.emi, currency), size: 'lg' },
            { label: 'Total Payment', value: formatCurrency(result.totalPayment, currency), highlight: true },
            { label: 'Total Interest', value: formatCurrency(result.totalInterest, currency), highlight: true },
            {
              label: 'Principal Amount',
              value: formatCurrency(parseFloat(principal), currency),
            },
          ]}
        />
      )}
    </CalculatorLayout>
  );
}
