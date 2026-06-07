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

export function SavingsGoalClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [goalAmount, setGoalAmount] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [annualRate, setAnnualRate] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [timeframeType, setTimeframeType] = useState<'years' | 'months'>('years');
  const [result, setResult] = useState<{
    monthlyRequired: number;
    totalDeposited: number;
    interestEarned: number;
    monthsNeeded: number;
  } | null>(null);

  const calculate = () => {
    const goal = parseFloat(goalAmount);
    const current = parseFloat(currentSavings) || 0;
    const rate = parseFloat(annualRate) || 0;
    const r = rate / 12 / 100;

    if (!goal || goal <= 0) return;

    const monthly = parseFloat(monthlyDeposit);
    const time = parseFloat(timeframe);

    if (monthly > 0 && rate > 0) {
      // Calculate how many months to reach goal with fixed monthly deposit
      let balance = current;
      let months = 0;
      while (balance < goal && months < 1200) {
        balance = balance * (1 + r) + monthly;
        months++;
      }
      const totalDeposited = current + monthly * months;
      setResult({
        monthlyRequired: monthly,
        totalDeposited,
        interestEarned: goal - totalDeposited,
        monthsNeeded: months,
      });
    } else if (time > 0 && rate > 0) {
      // Calculate monthly deposit needed
      const N = timeframeType === 'years' ? time * 12 : time;
      const futureCurrent = current * Math.pow(1 + r, N);
      const remaining = goal - futureCurrent;
      if (remaining > 0) {
        const monthlyReq = (remaining * r) / (Math.pow(1 + r, N) - 1);
        const totalDeposited = current + monthlyReq * N;
        setResult({
          monthlyRequired: monthlyReq,
          totalDeposited,
          interestEarned: goal - totalDeposited,
          monthsNeeded: N,
        });
      }
    } else if (time > 0) {
      // No interest
      const N = timeframeType === 'years' ? time * 12 : time;
      const monthlyReq = (goal - current) / N;
      setResult({
        monthlyRequired: monthlyReq,
        totalDeposited: goal,
        interestEarned: 0,
        monthsNeeded: N,
      });
    }
  };

  return (
    <CalculatorLayout meta={meta}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Savings Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorInput
            label="Savings Goal"
            type="number"
            placeholder="e.g., 500000"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Current Savings"
            type="number"
            placeholder="e.g., 50000"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />
          <CalculatorInput
            label="Annual Interest Rate"
            type="number"
            placeholder="e.g., 6"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            suffix="%"
            hint="Expected annual return on your savings"
          />
          <div className="grid grid-cols-2 gap-3">
            <CalculatorInput
              label="Monthly Deposit"
              type="number"
              placeholder="If known"
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(e.target.value)}
              prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
            />
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Timeframe</label>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="e.g., 5"
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <div className="flex rounded-md border border-input overflow-hidden shrink-0">
                  <button
                    onClick={() => setTimeframeType('years')}
                    className={`px-2 py-2 text-xs ${timeframeType === 'years' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
                  >
                    Yr
                  </button>
                  <button
                    onClick={() => setTimeframeType('months')}
                    className={`px-2 py-2 text-xs ${timeframeType === 'months' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
                  >
                    Mo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Enter either a monthly deposit OR a timeframe to calculate the other.</p>
          <Button onClick={calculate} className="w-full">Calculate</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="Savings Plan"
          variant="detailed"
          rows={[
            { label: 'Monthly Deposit Required', value: formatCurrency(result.monthlyRequired, currency), size: 'lg' },
            { label: 'Time Needed', value: `${Math.floor(result.monthsNeeded / 12)} years ${result.monthsNeeded % 12} months` },
            { label: 'Total Deposited', value: formatCurrency(result.totalDeposited, currency) },
            { label: 'Interest Earned', value: formatCurrency(Math.max(result.interestEarned, 0), currency), highlight: true },
          ]}
        />
      )}
    </CalculatorLayout>
  );
}
