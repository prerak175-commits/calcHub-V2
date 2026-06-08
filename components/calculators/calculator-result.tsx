"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ResultRow {
  label: string;
  value: string | number;
  subtext?: string;
  highlight?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

interface CalculatorResultProps {
  title?: string;
  rows: ResultRow[];
  variant?: 'simple' | 'detailed';
  onResultsReady?: (rows: ResultRow[]) => void;
}

export function CalculatorResult({ title = 'Results', rows, variant = 'simple', onResultsReady }: CalculatorResultProps) {
  if (onResultsReady && rows.length > 0) {
    onResultsReady(rows);
  }

  if (variant === 'simple') {
    return (
      <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-xl p-5 space-y-3 animate-fade-in">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center justify-between ${
              i === 0 ? 'pb-3 border-b border-primary/10' : ''
            }`}
          >
            <span className="text-sm text-muted-foreground">{row.label}</span>
            <span
              className={`font-semibold ${
                row.size === 'lg'
                  ? 'text-2xl text-primary'
                  : row.size === 'md'
                  ? 'text-lg'
                  : row.highlight
                  ? 'text-primary text-base'
                  : 'text-base'
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Card className="border-primary/20 animate-fade-in">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`flex items-start justify-between ${
                i < rows.length - 1 ? 'pb-3 border-b border-border/50' : ''
              }`}
            >
              <div>
                <span className="text-sm font-medium">{row.label}</span>
                {row.subtext && (
                  <p className="text-xs text-muted-foreground mt-0.5">{row.subtext}</p>
                )}
              </div>
              <span
                className={`font-semibold ${
                  row.size === 'lg'
                    ? 'text-2xl text-primary'
                    : row.highlight
                    ? 'text-primary'
                    : ''
                }`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
