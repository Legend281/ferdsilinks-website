import ContactContent from './ContactClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Quote',
  description: 'Contact Ferdsilinks for data science consulting, software development, or training. Based in Buea, Silicon Mountain, Cameroon. Get a free quote today.',
  keywords: ['contact Ferdsilinks', 'tech consulting', 'Buea Cameroon', 'Silicon Mountain', 'tech partnership'],
  alternates: {
    canonical: 'https://ferdsilinks.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Ferdsilinks',
    description: 'Get in touch with Ferdsilinks for tech consulting, training, or partnership opportunities.',
  },
};

export default function Page() {
  return <ContactContent />;
}
