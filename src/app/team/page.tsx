import TeamContent from './TeamClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the minds shaping African tech innovation - the leadership team at Ferdsilinks, Silicon Mountain, Buea, Cameroon.',
  keywords: ['team', 'leadership', 'Ferdsilinks team', 'tech leaders', 'Buea', 'Cameroon'],
  openGraph: {
    title: 'Our Team | Ferdsilinks',
    description: 'Meet the minds shaping African tech innovation at Ferdsilinks.',
  },
};

export default function Page() {
  return <TeamContent />;
}
