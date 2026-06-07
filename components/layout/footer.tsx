import Link from 'next/link';
import { Calculator } from 'lucide-react';

const footerLinks = {
  Calculators: [
    { href: '/calculators/emi-calculator', label: 'EMI Calculator' },
    { href: '/calculators/savings-goal-calculator', label: 'Savings Goal' },
    { href: '/calculators/salary-calculator', label: 'Salary Calculator' },
    { href: '/calculators/roi-calculator', label: 'ROI Calculator' },
    { href: '/calculators/stock-average-calculator', label: 'Stock Average' },
  ],
  Business: [
    { href: '/calculators/profit-margin-calculator', label: 'Profit Margin' },
    { href: '/calculators/break-even-calculator', label: 'Break-even' },
    { href: '/calculators/youtube-earnings-calculator', label: 'YouTube Earnings' },
    { href: '/calculators/inventory-forecast-calculator', label: 'Inventory Forecast' },
    { href: '/calculators/safety-stock-calculator', label: 'Safety Stock' },
  ],
  Company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Calculator className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight">CalcHub</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fast, reliable calculators for finance, investing, business, and supply chain professionals worldwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CalcHub. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for speed. Designed for clarity.
          </p>
        </div>
      </div>
    </footer>
  );
}
