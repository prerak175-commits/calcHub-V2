"use client";

import { useState, useCallback } from 'react';
import { CurrencyCode } from '@/types/calculator';

const CURRENCY_KEY = 'calchub-currency';

export function useCurrency(defaultCurrency: CurrencyCode = 'USD') {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(CURRENCY_KEY);
      if (stored && ['INR', 'USD', 'CAD', 'EUR'].includes(stored)) {
        return stored as CurrencyCode;
      }
    }
    return defaultCurrency;
  });

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    if (typeof window !== 'undefined') {
      localStorage.setItem(CURRENCY_KEY, code);
    }
  }, []);

  return { currency, setCurrency };
}
