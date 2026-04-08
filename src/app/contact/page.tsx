import ContactContent from './ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Ferdsilinks. Contact our team for tech consulting, training inquiries, or partnership opportunities.',
  keywords: ['contact Ferdsilinks', 'tech consulting', 'Buea Cameroon', 'Silicon Mountain', 'tech partnership'],
  openGraph: {
    title: 'Contact Us | Ferdsilinks',
    description: 'Get in touch with Ferdsilinks for tech consulting, training, or partnership opportunities.',
  },
};

export default function Page() {
  return <ContactContent />;
}
