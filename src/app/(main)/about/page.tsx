import AboutContent from './AboutClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Ferdsilinks - our story, mission, and the team shaping African tech innovation from Silicon Mountain, Cameroon.',
  keywords: ['about Ferdsilinks', 'tech company Buea', 'Silicon Mountain', 'African innovation', 'data science Cameroon'],
  openGraph: {
    title: 'About Us | Ferdsilinks',
    description: 'Learn about Ferdsilinks - our story, mission, and the team shaping African tech innovation from Silicon Mountain, Cameroon.',
  },
};

export default function Page() {
  return <AboutContent />;
}
