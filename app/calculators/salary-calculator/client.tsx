"use client";

import { useState } from 'react';
import { CalculatorLayout } from '@/components/calculators/calculator-layout';
import { CalculatorInput } from '@/components/calculators/calculator-input';
import { CalculatorResult } from '@/components/calculators/calculator-result';
import { CurrencySelector } from '@/components/layout/currency-selector';
import { useCurrency } from '@/hooks/use-currency';
import { formatCurrency } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalculatorMeta } from '@/types/calculator';

interface Props {
  meta: CalculatorMeta;
}

export function SalaryClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [amount, setAmount] = useState('');
  const [inputType, setInputType] = useState<'hourly' | 'daily' | 'weekly' | 'monthly' | 'annual'>('annual');
  const [hoursPerWeek, setHoursPerWeek] = useState('40');
  const [daysPerWeek, setDaysPerWeek] = useState('5');
  const [result, setResult] = useState<Record<string, number> | null>(null);
  const [shareRows, setShareRows] = useState<{ label: string; value: string }[]>([]);

  const calculate = () => {
    const val = parseFloat(amount);
    const hrs = parseFloat(hoursPerWeek) || 40;
    const days = parseFloat(daysPerWeek) || 5;

    if (!val || val <= 0) return;

    let annual: number;

    switch (inputType) {
      case 'hourly':
        annual = val * hrs * 52;
        break;
      case 'daily':
        annual = val * days * 52;
        break;
      case 'weekly':
        annual = val * 52;
        break;
      case 'monthly':
        annual = val * 12;
        break;
      case 'annual':
        annual = val;
        break;
      default:
        annual = val;
    }

    setResult({
      hourly: annual / (hrs * 52),
      daily: annual / (days * 52),
      weekly: annual / 52,
      monthly: annual / 12,
      annual,
    });
  };

  return (
    <CalculatorLayout meta={meta} results={shareRows}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Salary Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Salary Type</label>
            <div className="flex flex-wrap gap-2">
              {(['hourly', 'daily', 'weekly', 'monthly', 'annual'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setInputType(type)}
                  className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                    inputType === type
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-white text-muted-foreground border-border hover:border-primary/30'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <CalculatorInput
            label={`${inputType.charAt(0).toUpperCase() + inputType.slice(1)} Amount`}
            type="number"
            placeholder={`Enter ${inputType} salary`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />

          {(inputType === 'hourly' || inputType === 'daily') && (
            <div className="grid grid-cols-2 gap-3">
              <CalculatorInput
                label="Hours per Week"
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(e.target.value)}
              />
              <CalculatorInput
                label="Days per Week"
                type="number"
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(e.target.value)}
              />
            </div>
          )}

          <Button onClick={calculate} className="w-full">Calculate</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="Salary Breakdown"
          variant="detailed"
          rows={[
            { label: 'Hourly', value: formatCurrency(result.hourly, currency) },
            { label: 'Daily', value: formatCurrency(result.daily, currency) },
            { label: 'Weekly', value: formatCurrency(result.weekly, currency) },
            { label: 'Monthly', value: formatCurrency(result.monthly, currency), highlight: true },
            { label: 'Annual', value: formatCurrency(result.annual, currency), size: 'lg' },
          ]}
          onResultsReady={(rows) => setShareRows(rows.map(r => ({ label: r.label, value: String(r.value) })))}
        />
      )}
    </CalculatorLayout>
  );
}
