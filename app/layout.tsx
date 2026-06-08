import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AnalyticsScripts } from '@/components/analytics/analytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'CalcHub - Fast, Reliable Financial Calculators',
    template: '%s | CalcHub',
  },
  description: 'Free online calculators for finance, investing, business, and supply chain. EMI, ROI, profit margin, break-even, and more. Fast, accurate, mobile-friendly.',
  keywords: ['calculator', 'emi calculator', 'roi calculator', 'profit margin', 'financial calculator', 'investment calculator'],
  authors: [{ name: 'CalcHub' }],
  creator: 'CalcHub',
  publisher: 'CalcHub',
  metadataBase: new URL('https://calc-hub-v2.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://calc-hub-v2.vercel.app',
    siteName: 'CalcHub',
    title: 'CalcHub - Fast, Reliable Financial Calculators',
    description: 'Free online calculators for finance, investing, business, and supply chain.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalcHub - Fast, Reliable Financial Calculators',
    description: 'Free online calculators for finance, investing, business, and supply chain.',
    images: ['/og.png'],
    creator: '@calchub',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://calc-hub-v2.vercel.app" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0066CC" />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
