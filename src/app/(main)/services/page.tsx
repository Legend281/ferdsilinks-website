import ServicesContent from './ServicesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Data Science, AI & Software Development',
  description: 'Ferdsilinks offers Data Science & AI solutions, custom Software Development, OHADA-compliant ERP (Solafide), and tech training via Ferdsilinks Academy in Silicon Mountain, Buea.',
  keywords: ['data science', 'AI', 'artificial intelligence', 'machine learning', 'software development', 'OHADA ERP', 'Solafide', 'Cameroon', 'Buea', 'Silicon Mountain', 'tech training'],
  alternates: {
    canonical: 'https://ferdsilinks.com/services',
  },
  openGraph: {
    title: 'Services | Ferdsilinks',
    description: 'AI-powered solutions and tech training. Trusted by 1000+ businesses across Africa.',
  },
};

export default function Page() {
  return <ServicesContent />;
}
