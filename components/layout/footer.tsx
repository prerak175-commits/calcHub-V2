import Link from 'next/link';
import { Logo } from '@/components/brand/logo';

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
    { href: '/disclaimer', label: 'Disclaimer' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30 dark:bg-secondary/10">
      {/* Newsletter Section */}
      <div className="border-b border-border/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold mb-1">Stay updated</h3>
              <p className="text-xs text-muted-foreground">New calculators and financial insights. No spam, ever.</p>
            </div>
            <form className="flex w-full sm:w-auto gap-2" action="#">
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="flex h-9 w-full sm:w-56 rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              Fast, reliable calculators for finance, investing, business, and supply chain professionals worldwide.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                All systems operational
              </div>
            </div>
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

        <div className="mt-10 pt-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} CalcHub. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Built for speed</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Designed for clarity</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Trusted by thousands</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
