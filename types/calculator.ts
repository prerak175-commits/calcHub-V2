export type CurrencyCode = 'INR' | 'USD' | 'CAD' | 'EUR';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
}

export type CategorySlug = 'finance' | 'investing' | 'business' | 'creator-economy' | 'supply-chain';

export interface Category {
  name: string;
  slug: CategorySlug;
  description: string;
  icon: string;
}

export interface CalculatorMeta {
  name: string;
  slug: string;
  description: string;
  category: CategorySlug;
  icon: string;
  formula: string;
  example: string;
  faqs: FAQ[];
  relatedSlugs: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}
