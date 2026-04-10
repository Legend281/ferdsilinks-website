import PodcastContent from './PodcastClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Silicon Mountain Pulse | Ferdsilinks Podcast',
  description: 'Listen to Silicon Mountain Pulse - Ferdsilinks podcast featuring African tech leaders, data science insights, AI discussions, and innovation from Silicon Mountain, Buea.',
  keywords: ['podcast', 'Silicon Mountain Pulse', 'tech podcast', 'African tech', 'data science podcast', 'AI podcast', 'Buea', 'Cameroon'],
  openGraph: {
    title: 'Silicon Mountain Pulse | Ferdsilinks',
    description: 'Conversations with the thinkers, builders, and innovators shaping Africa\'s digital future from Buea, Cameroon.',
  },
};

export default function Page() {
  return <PodcastContent />;
}
