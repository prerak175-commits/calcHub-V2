import { Currency, CurrencyCode } from '@/types/calculator';

export const currencies: Currency[] = [
  { code: 'INR', symbol: '\u20B9', name: 'Indian Rupee' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'EUR', symbol: '\u20AC', name: 'Euro' },
];

export function getCurrencySymbol(code: CurrencyCode): string {
  return currencies.find((c) => c.code === code)?.symbol ?? '$';
}

export function formatCurrency(value: number, code: CurrencyCode): string {
  const symbol = getCurrencySymbol(code);
  if (code === 'INR') {
    return `${symbol}${value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
  }
  return `${symbol}${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatNumber(value: number, decimals = 2): string {
  return value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
