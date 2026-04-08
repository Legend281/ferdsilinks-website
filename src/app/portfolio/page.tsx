import PortfolioContent from './PortfolioClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Our Work - Solafide ERP & AI Solutions',
  description: 'Explore Ferdsilinks portfolio of AI-powered solutions and software. Featured: Solafide - Africa\'s First AI-Powered OHADA-Compliant ERP Platform, trusted by 1000+ businesses.',
  keywords: ['portfolio', 'case studies', 'Solafide', 'OHADA ERP', 'AI solutions', 'African tech', 'Buea', 'Cameroon'],
  openGraph: {
    title: 'Portfolio | Ferdsilinks',
    description: 'Real solutions for real businesses. Solafide ERP and AI solutions transforming African enterprises.',
  },
};

export default function Page() {
  return <PortfolioContent />;
}
