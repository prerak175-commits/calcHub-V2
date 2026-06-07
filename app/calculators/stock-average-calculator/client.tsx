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
import { Plus, Trash2 } from 'lucide-react';

interface Purchase {
  shares: string;
  price: string;
}

interface Props {
  meta: CalculatorMeta;
}

export function StockAverageClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [purchases, setPurchases] = useState<Purchase[]>([
    { shares: '', price: '' },
    { shares: '', price: '' },
  ]);
  const [currentPrice, setCurrentPrice] = useState('');
  const [result, setResult] = useState<{
    totalShares: number;
    totalCost: number;
    avgPrice: number;
    currentValue: number;
    profitLoss: number;
  } | null>(null);

  const addPurchase = () => {
    setPurchases([...purchases, { shares: '', price: '' }]);
  };

  const removePurchase = (index: number) => {
    if (purchases.length <= 2) return;
    setPurchases(purchases.filter((_, i) => i !== index));
  };

  const updatePurchase = (index: number, field: keyof Purchase, value: string) => {
    const updated = [...purchases];
    updated[index] = { ...updated[index], [field]: value };
    setPurchases(updated);
  };

  const calculate = () => {
    let totalShares = 0;
    let totalCost = 0;

    for (const p of purchases) {
      const shares = parseFloat(p.shares);
      const price = parseFloat(p.price);
      if (shares > 0 && price > 0) {
        totalShares += shares;
        totalCost += shares * price;
      }
    }

    if (totalShares === 0) return;

    const avgPrice = totalCost / totalShares;
    const curPrice = parseFloat(currentPrice) || 0;
    const currentValue = curPrice > 0 ? totalShares * curPrice : 0;
    const profitLoss = curPrice > 0 ? currentValue - totalCost : 0;

    setResult({ totalShares, totalCost, avgPrice, currentValue, profitLoss });
  };

  return (
    <CalculatorLayout meta={meta}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Currency</span>
        <CurrencySelector />
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Enter Purchase Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {purchases.map((p, i) => (
            <div key={i} className="flex gap-2 items-end">
              <CalculatorInput
                label={`Shares (Purchase ${i + 1})`}
                type="number"
                placeholder="e.g., 100"
                value={p.shares}
                onChange={(e) => updatePurchase(i, 'shares', e.target.value)}
                className="flex-1"
              />
              <CalculatorInput
                label={`Price (Purchase ${i + 1})`}
                type="number"
                placeholder="e.g., 50"
                value={p.price}
                onChange={(e) => updatePurchase(i, 'price', e.target.value)}
                prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
                className="flex-1"
              />
              {purchases.length > 2 && (
                <Button variant="ghost" size="icon" onClick={() => removePurchase(i)} className="mb-0.5 shrink-0">
                  <Trash2 className="w-4 h-4 text-muted-foreground" />
                </Button>
              )}
            </div>
          ))}

          <Button variant="outline" size="sm" onClick={addPurchase} className="gap-1">
            <Plus className="w-3 h-3" /> Add Purchase
          </Button>

          <CalculatorInput
            label="Current Price (optional)"
            type="number"
            placeholder="To calculate profit/loss"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            prefix={currency === 'INR' ? '\u20B9' : currency === 'EUR' ? '\u20AC' : currency === 'CAD' ? 'C$' : '$'}
          />

          <Button onClick={calculate} className="w-full">Calculate Average</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="Stock Average Results"
          variant="detailed"
          rows={[
            { label: 'Average Price', value: formatCurrency(result.avgPrice, currency), size: 'lg' },
            { label: 'Total Shares', value: formatNumber(result.totalShares, 0) },
            { label: 'Total Investment', value: formatCurrency(result.totalCost, currency) },
            ...(currentPrice ? [
              { label: 'Current Value', value: formatCurrency(result.currentValue, currency), highlight: true },
              { label: 'Profit / Loss', value: formatCurrency(result.profitLoss, currency), highlight: result.profitLoss >= 0 },
            ] : []),
          ]}
        />
      )}
    </CalculatorLayout>
  );
}
