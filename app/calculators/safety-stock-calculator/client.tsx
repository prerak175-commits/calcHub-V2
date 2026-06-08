"use client";

import { useState } from 'react';
import { CalculatorLayout } from '@/components/calculators/calculator-layout';
import { CalculatorInput } from '@/components/calculators/calculator-input';
import { CalculatorResult } from '@/components/calculators/calculator-result';
import { useCurrency } from '@/hooks/use-currency';
import { formatNumber } from '@/lib/currency';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalculatorMeta } from '@/types/calculator';

interface Props {
  meta: CalculatorMeta;
}

const zScores = [
  { label: '90%', value: 1.28 },
  { label: '95%', value: 1.65 },
  { label: '98%', value: 2.05 },
  { label: '99%', value: 2.33 },
];

export function SafetyStockClient({ meta }: Props) {
  const { currency } = useCurrency();
  const [avgDemand, setAvgDemand] = useState('');
  const [stdDevDemand, setStdDevDemand] = useState('');
  const [avgLeadTime, setAvgLeadTime] = useState('');
  const [stdDevLeadTime, setStdDevLeadTime] = useState('');
  const [serviceLevel, setServiceLevel] = useState('95');
  const [maxDemand, setMaxDemand] = useState('');
  const [maxLeadTime, setMaxLeadTime] = useState('');
  const [method, setMethod] = useState<'standard' | 'simple'>('standard');
  const [result, setResult] = useState<{
    safetyStock: number;
    reorderPoint: number;
  } | null>(null);
  const [shareRows, setShareRows] = useState<{ label: string; value: string }[]>([]);

  const calculate = () => {
    if (method === 'standard') {
      const avgD = parseFloat(avgDemand);
      const stdD = parseFloat(stdDevDemand);
      const avgLT = parseFloat(avgLeadTime);
      const stdLT = parseFloat(stdDevLeadTime);
      const sl = parseFloat(serviceLevel) || 95;

      if (!avgD || !stdD || !avgLT || !stdLT) return;

      const z = zScores.find((z) => z.label === `${sl}%`)?.value ?? 1.65;
      const safetyStock = z * Math.sqrt(avgLT * stdD * stdD + avgD * stdLT * stdLT);
      const reorderPoint = avgD * avgLT + safetyStock;

      setResult({ safetyStock: Math.ceil(safetyStock), reorderPoint: Math.ceil(reorderPoint) });
    } else {
      const maxD = parseFloat(maxDemand);
      const maxLT = parseFloat(maxLeadTime);
      const avgD = parseFloat(avgDemand);
      const avgLT = parseFloat(avgLeadTime);

      if (!maxD || !maxLT || !avgD || !avgLT) return;

      const safetyStock = maxD * maxLT - avgD * avgLT;
      const reorderPoint = avgD * avgLT + safetyStock;

      setResult({ safetyStock: Math.ceil(safetyStock), reorderPoint: Math.ceil(reorderPoint) });
    }
  };

  return (
    <CalculatorLayout meta={meta} results={shareRows}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Method</span>
        <div className="flex rounded-md border border-input overflow-hidden">
          <button
            onClick={() => setMethod('standard')}
            className={`px-3 py-1.5 text-xs ${method === 'standard' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
          >
            Standard
          </button>
          <button
            onClick={() => setMethod('simple')}
            className={`px-3 py-1.5 text-xs ${method === 'simple' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
          >
            Simple
          </button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-base">
            {method === 'standard' ? 'Standard Method Parameters' : 'Simple Method Parameters'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CalculatorInput
            label="Average Daily Demand"
            type="number"
            placeholder="e.g., 100"
            value={avgDemand}
            onChange={(e) => setAvgDemand(e.target.value)}
            suffix="units/day"
          />

          <CalculatorInput
            label="Average Lead Time"
            type="number"
            placeholder="e.g., 10"
            value={avgLeadTime}
            onChange={(e) => setAvgLeadTime(e.target.value)}
            suffix="days"
          />

          {method === 'standard' ? (
            <>
              <CalculatorInput
                label="Standard Deviation of Demand"
                type="number"
                placeholder="e.g., 20"
                value={stdDevDemand}
                onChange={(e) => setStdDevDemand(e.target.value)}
                suffix="units"
              />
              <CalculatorInput
                label="Standard Deviation of Lead Time"
                type="number"
                placeholder="e.g., 2"
                value={stdDevLeadTime}
                onChange={(e) => setStdDevLeadTime(e.target.value)}
                suffix="days"
              />
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Service Level</label>
                <div className="flex gap-2">
                  {zScores.map((z) => (
                    <button
                      key={z.label}
                      onClick={() => setServiceLevel(z.label.replace('%', ''))}
                      className={`px-3 py-1.5 text-xs rounded-md border transition-colors ${
                        serviceLevel === z.label.replace('%', '')
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-white text-muted-foreground border-border hover:border-primary/30'
                      }`}
                    >
                      {z.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <CalculatorInput
                label="Maximum Daily Demand"
                type="number"
                placeholder="e.g., 150"
                value={maxDemand}
                onChange={(e) => setMaxDemand(e.target.value)}
                suffix="units/day"
              />
              <CalculatorInput
                label="Maximum Lead Time"
                type="number"
                placeholder="e.g., 14"
                value={maxLeadTime}
                onChange={(e) => setMaxLeadTime(e.target.value)}
                suffix="days"
              />
            </>
          )}

          <Button onClick={calculate} className="w-full">Calculate Safety Stock</Button>
        </CardContent>
      </Card>

      {result && (
        <CalculatorResult
          title="Safety Stock Results"
          variant="detailed"
          rows={[
            { label: 'Safety Stock', value: `${formatNumber(result.safetyStock, 0)} units`, size: 'lg' },
            { label: 'Reorder Point', value: `${formatNumber(result.reorderPoint, 0)} units`, highlight: true },
            { label: 'Service Level', value: `${serviceLevel}%` },
          ]}
          onResultsReady={(rows) => setShareRows(rows.map(r => ({ label: r.label, value: String(r.value) })))}
        />
      )}
    </CalculatorLayout>
  );
}
