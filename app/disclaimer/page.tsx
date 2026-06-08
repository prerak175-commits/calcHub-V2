import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'CalcHub disclaimer - important information about the use of our calculator tools and the limitations of the results provided.',
  alternates: { canonical: 'https://calc-hub-v2.vercel.app/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Disclaimer</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: June 2026</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section className="bg-warning/5 border border-warning/20 rounded-xl p-5">
            <p className="font-medium text-foreground mb-2">Important Notice</p>
            <p>The calculators and results provided by CalcHub are for informational and educational purposes only. They do not constitute professional financial, investment, tax, legal, or business advice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. No Professional Advice</h2>
            <p>The information provided by CalcHub should not be relied upon as a substitute for professional advice from qualified financial advisors, accountants, lawyers, or other professionals. Always consult appropriate professionals before making any financial or business decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Accuracy Limitations</h2>
            <p>While we use industry-standard formulas and strive for accuracy, CalcHub does not guarantee that results are error-free, complete, or current. Calculations may be affected by rounding, approximations, or assumptions that do not reflect your specific circumstances. Users should independently verify all results.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. No Warranty</h2>
            <p>CalcHub is provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that the service will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Limitation of Liability</h2>
            <p>In no event shall CalcHub, its owners, operators, or contributors be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use the calculators, reliance on results, or any other matter relating to the service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. External Factors</h2>
            <p>Financial calculations are simplified models that do not account for all real-world variables including but not limited to: tax regulations, inflation rates, market volatility, regulatory changes, fees, and individual circumstances. Actual results may differ significantly from calculator projections.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Not a Substitute for Due Diligence</h2>
            <p>Using CalcHub does not replace the need for proper due diligence, research, and professional consultation. You are solely responsible for verifying the accuracy and applicability of any calculation results to your specific situation.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Contact</h2>
            <p>If you believe any calculator produces incorrect results, please contact us at hello@calchub.com so we can investigate and correct any errors.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
