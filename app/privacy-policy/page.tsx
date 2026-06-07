import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'CalcHub privacy policy - how we handle your data and protect your privacy.',
  alternates: { canonical: 'https://calchub.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: June 2026</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>CalcHub is a calculator tool. We do not require account creation and collect minimal personal information. Specifically:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li><strong>Calculator inputs:</strong> All calculations run locally in your browser. We do not store or transmit your calculator inputs or results to our servers.</li>
              <li><strong>Currency preference:</strong> Your selected currency is stored in your browser local storage for convenience. This data never leaves your device.</li>
              <li><strong>Contact form data:</strong> If you use our contact form, we collect the name, email, and message you provide solely to respond to your inquiry.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Analytics</h2>
            <p>We may use privacy-respecting analytics tools to understand how visitors use CalcHub. These tools collect anonymized data such as page views, visitor country, and device type. We do not track individual users across sessions or sites.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Cookies</h2>
            <p>CalcHub uses minimal, essential cookies. We do not use tracking cookies or sell data to advertisers. Any cookies used are for site functionality (such as remembering your currency preference) or aggregated analytics.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Third-Party Services</h2>
            <p>We may use third-party services for analytics (such as Google Analytics) or advertising (such as Google AdSense) in the future. These services have their own privacy policies, and we encourage you to review them. We do not share personal data with third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Data Security</h2>
            <p>Since calculator data stays in your browser and we collect minimal personal information, the risk of data breach is very low. We use HTTPS encryption for all connections to our site.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at hello@calchub.com.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Contact</h2>
            <p>For privacy-related questions, contact us at hello@calchub.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
