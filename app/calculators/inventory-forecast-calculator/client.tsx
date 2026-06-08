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

export function InventoryForecastClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [avgDailyDemand, setAvgDailyDemand] = useState('');
  const [leadTime, setLeadTime] = useState('');
  const [safetyStock, setSafetyStock] = useState('');
  const [forecastDays, setForecastDays] = useState('30');
  const [unitCost, setUnitCost] = useState('');
  const [result, setResult] = useState<{
    forecastedDemand: number;
    reorderPoint: number;
    totalNeeded: number;
    holdingCost: number;
  } | null>(null);
  const [shareRows, setShareRows] = useState<{ label: string; value: string }[]>([]);

  const calculate = () => {
    const demand = parseFloat(avgDailyDemand);
    const lt = parseFloat(leadTime);
    const ss = parseFloat(safetyStock) || 0;
    const days = parseFloat(forecastDays) || 30;
    const cost = parseFloat(unitCost) || 0;

    if (!demand || !lt || demand <= 0 || lt <= 0) return;

    const forecastedDemand = demand * days;
    const reorderPoint = demand * lt + ss;
    const totalNeeded = forecastedDemand + ss;
    const holdingCost = cost > 0 ? totalNeeded * cost * 0.25 : 0;

    setResult({ forecastedDemand, reorderPoint, totalNeeded, holdingCost });
  };

  return (
    <CalculatorLayout meta={meta} results={shareRows}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Demand Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorInput
            label="Average Daily Demand"
            type="number"
            placeholder="e.g., 50"
            value={avgDailyDemand}
            onChange={(e) => setAvgDailyDemand(e.target.value)}
            suffix="units/day"
          />
          <CalculatorInput
            label="Lead Time"
            type="number"
            placeholder="e.g., 7"
            value={leadTime}
            onChange={(e) => setLeadTime(e.target.value)}
            suffix="days"
          />
          <CalculatorInput
            label="Safety Stock"
            type="number"
            placeholder="e.g., 100"
            value={safetyStock}
            onChange={(e) => setSafetyStock(e.target.value)}
            suffix="units"
          />
          <CalculatorInput
            label="Forecast Period"
            type="number"
            placeholder="e.g., 30"
            value={forecastDays}
            onChange={(e) => setForecastDays(e.target.value)}
            suffix="days"
          />
          <CalculatorInput
            label="Unit Cost (optional)"
            type="number"
            placeholder="e.g., 25"
            value={unitCost}
            onChange={(e) => setUnitCost(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
            hint="For holding cost estimation (25% annual rate)"
          />
          <Button onClick={calculate} className="w-full">Calculate Forecast</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="Inventory Forecast"
          variant="detailed"
          rows={[
            { label: 'Forecasted Demand', value: `${formatNumber(result.forecastedDemand, 0)} units`, size: 'lg' },
            { label: 'Reorder Point', value: `${formatNumber(result.reorderPoint, 0)} units`, highlight: true },
            { label: 'Total Inventory Needed', value: `${formatNumber(result.totalNeeded, 0)} units`, highlight: true },
            ...(result.holdingCost > 0 ? [
              { label: 'Est. Annual Holding Cost', value: formatCurrency(result.holdingCost, currency) },
            ] : []),
          ]}
          onResultsReady={(rows) => setShareRows(rows.map(r => ({ label: r.label, value: String(r.value) })))}
        />
      )}
    </CalculatorLayout>
  );
}
