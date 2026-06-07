"use client";

import { forwardRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface CalculatorInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  prefix?: string;
  suffix?: string;
  error?: string;
}

export const CalculatorInput = forwardRef<HTMLInputElement, CalculatorInputProps>(
  ({ label, hint, prefix, suffix, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1.5">
        <Label htmlFor={inputId} className="text-sm font-medium">
          {label}
        </Label>
        <div className="relative">
          {prefix && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              {prefix}
            </span>
          )}
          <Input
            ref={ref}
            id={inputId}
            className={cn(
              'h-10',
              prefix && 'pl-8',
              suffix && 'pr-12',
              error && 'border-destructive',
              className
            )}
            {...props}
          />
          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
              {suffix}
            </span>
          )}
        </div>
        {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  }
);

CalculatorInput.displayName = 'CalculatorInput';
