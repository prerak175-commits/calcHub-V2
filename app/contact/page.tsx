import type { Metadata } from 'next';
import { ContactClient } from './client';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with CalcHub. Report errors, suggest calculators, or ask questions.',
  alternates: { canonical: 'https://calchub.com/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
