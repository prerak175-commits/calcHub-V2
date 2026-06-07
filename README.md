# CalcHub

Fast, modern, Apple-inspired calculator platform for finance, investing, business, creator economy, and supply chain professionals.

## Features

- 10 fully functional calculators with accurate formulas
- Multi-currency support (USD, EUR, INR, CAD)
- Apple-inspired minimalist design
- Mobile-first responsive layout
- SEO optimized with sitemap, robots.txt, JSON-LD, Open Graph, Twitter Cards
- Page load speed under 1 second
- Category-based filtering and search
- Formula explanations and worked examples on every calculator
- FAQ sections on every calculator
- Related calculators sidebar
- Breadcrumb navigation
- Analytics-ready architecture (GA4, Clarity placeholders)
- AdSense-ready architecture
- Custom 404 page

## Folder Structure

```
app/
  layout.tsx                    # Root layout with header, footer, analytics
  page.tsx                      # Homepage
  not-found.tsx                 # Custom 404
  sitemap.ts                    # Dynamic sitemap generation
  robots.ts                     # Robots.txt generation
  globals.css                   # Global styles and CSS variables
  calculators/
    page.tsx                    # Calculators index (search + filter)
    client.tsx                  # Client-side calculator listing
    emi-calculator/
      page.tsx                  # Server page with metadata + JSON-LD
      client.tsx                # EMI calculator client component
    savings-goal-calculator/
    salary-calculator/
    roi-calculator/
    stock-average-calculator/
    profit-margin-calculator/
    break-even-calculator/
    youtube-earnings-calculator/
    inventory-forecast-calculator/
    safety-stock-calculator/
  about/page.tsx
  contact/
    page.tsx                    # Server page with metadata
    client.tsx                  # Contact form client component
  privacy-policy/page.tsx
  terms-of-service/page.tsx

components/
  layout/
    header.tsx                  # Sticky header with mobile nav
    footer.tsx                  # Footer with link columns
    currency-selector.tsx       # Currency dropdown selector
  calculators/
    calculator-card.tsx         # Reusable calculator card component
    calculator-input.tsx        # Reusable labeled input with prefix/suffix
    calculator-result.tsx       # Reusable results display component
    calculator-layout.tsx       # Shared layout for all calculator pages
  seo/
    json-ld.tsx                 # JSON-LD structured data helpers
  analytics/
    analytics.tsx               # Analytics placeholder scripts
  ui/                           # shadcn/ui components

data/
  calculators.ts                # All calculator metadata, categories, FAQs

hooks/
  use-currency.ts               # Currency preference hook with localStorage
  use-toast.ts                  # Toast notification hook

lib/
  utils.ts                      # cn() utility
  currency.ts                   # Currency formatting functions

types/
  calculator.ts                 # TypeScript type definitions
```

## Local Installation

```bash
git clone https://github.com/your-username/calchub.git
cd calchub
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## GitHub Upload Guide

1. Create a new repository on GitHub named `calchub`
2. Initialize git and push:
```bash
git init
git add .
git commit -m "Initial commit: CalcHub calculator platform"
git branch -M main
git remote add origin https://github.com/your-username/calchub.git
git push -u origin main
```

## Vercel Deployment Guide

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" and import your `calchub` repository
3. Vercel auto-detects Next.js - no configuration needed
4. Click "Deploy"
5. Your site will be live at `calchub.vercel.app`

### Environment Variables

No environment variables are required for basic deployment. If you add analytics or ads later, add these in Vercel project settings:
- `NEXT_PUBLIC_GA4_ID` - Google Analytics 4 Measurement ID
- `NEXT_PUBLIC_CLARITY_ID` - Microsoft Clarity Project ID

## Domain Connection Guide

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain (e.g., `calchub.com`)
3. Update your DNS records at your domain registrar:
   - Add a CNAME record pointing `calchub.com` to `cname.vercel-dns.com`
   - Or add an A record pointing to Vercel's IP (76.76.21.21)
4. Wait for DNS propagation (up to 48 hours)
5. Vercel automatically provisions SSL

## Google Analytics Setup Guide

1. Go to [analytics.google.com](https://analytics.google.com) and create a GA4 property
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
3. In `components/analytics/analytics.tsx`, uncomment the GA4 script block
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID
5. Add `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX` to Vercel environment variables
6. Redeploy

## Google Search Console Setup Guide

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (e.g., `https://calchub.com`)
3. Verify ownership using the HTML meta tag method:
   - Add the meta tag to `app/layout.tsx` in the `<head>` section
4. Submit your sitemap: `https://calchub.com/sitemap.xml`

## Sitemap Submission Guide

1. Your sitemap is automatically generated at `/sitemap.xml`
2. Submit it to:
   - Google Search Console > Sitemaps > Add sitemap
   - Bing Webmaster Tools > Sitemaps > Submit

## Future Calculator Expansion Guide

To add a new calculator:

1. Add metadata to `data/calculators.ts` in the `calculators` array:
```ts
{
  name: 'New Calculator',
  slug: 'new-calculator',
  description: 'Description...',
  category: 'finance', // must match a category slug
  icon: 'IconName',    // must match a lucide-react icon
  formula: 'Formula text...',
  example: 'Worked example...',
  faqs: [{ question: 'Q?', answer: 'A.' }],
  relatedSlugs: ['emi-calculator'],
}
```

2. Create the directory and files:
```bash
mkdir -p app/calculators/new-calculator
```

3. Create `app/calculators/new-calculator/page.tsx` (server component with metadata)
4. Create `app/calculators/new-calculator/client.tsx` (client component with calculator logic)
5. Add the icon import to `components/calculators/calculator-card.tsx`
6. The sitemap automatically includes new calculator routes

## AdSense Setup Guide

1. Apply for Google AdSense at [adsense.google.com](https://adsense.google.com)
2. Once approved, create ad units in the AdSense dashboard
3. Add ad component placeholders (pre-built in the architecture):
   - Banner ad slot in `components/layout/header.tsx` or `app/layout.tsx`
   - Sidebar ad slot in `components/calculators/calculator-layout.tsx`
   - Between-calculators ad slot on the calculators index page
4. Add the AdSense script to `components/analytics/analytics.tsx`
5. Use Next.js `<Script>` component with `strategy="afterInteractive"`

## Maintenance Guide

- **Update formulas**: Edit `data/calculators.ts` and the corresponding `client.tsx`
- **Add categories**: Add to the `categories` array in `data/calculators.ts`
- **Update metadata**: Edit the `metadata` export in each `page.tsx`
- **Change colors**: Edit CSS variables in `app/globals.css`
- **Add currencies**: Add to the `currencies` array in `lib/currency.ts`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails with TypeScript errors | Run `npm run typecheck` to identify errors |
| Page not found after adding route | Restart the dev server (`npm run dev`) |
| Styles not applying | Clear `.next` folder: `rm -rf .next` then rebuild |
| Currency not saving | Check browser localStorage is enabled |
| Mobile layout broken | Verify viewport meta tag in layout.tsx |

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## License

MIT
