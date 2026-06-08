import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'CalcHub terms of service - the rules and guidelines for using our calculator platform.',
  alternates: { canonical: 'https://calc-hub-v2.vercel.app/terms-of-service' },
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: June 2026</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using CalcHub, you accept and agree to be bound by these terms of service. If you do not agree, please do not use the site.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Use of Service</h2>
            <p>CalcHub provides free online calculation tools for informational purposes. You may use the calculators for personal and commercial purposes. You agree not to misuse the service, attempt to disrupt it, or use it for unlawful purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Accuracy Disclaimer</h2>
            <p>While we strive for accuracy in all our calculators, CalcHub provides results for informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any calculation results. Always verify important financial decisions with qualified professionals. CalcHub is not a substitute for professional financial, investment, or business advice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. No Professional Advice</h2>
            <p>The information and calculations provided by CalcHub do not constitute financial, investment, tax, legal, or professional advice. You should consult appropriate professionals before making any financial or business decisions based on calculator results.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Intellectual Property</h2>
            <p>All content on CalcHub, including text, design, code, and calculator formulas, is the property of CalcHub and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p>CalcHub shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our calculators or reliance on calculation results.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of CalcHub after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
            <p>For questions about these terms, contact us at hello@calchub.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
