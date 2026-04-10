import { createClient } from '@/lib/supabase/supabase-server-client';
import TeamClient from './TeamClient';
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

async function getTeamMembers() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('status', 'active')
      .order('order', { ascending: true });
    
    if (error) {
      console.error('Error fetching team:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching team:', error);
    return [];
  }
}

export default async function Page() {
  const teamMembers = await getTeamMembers();
  
  const formattedMembers = teamMembers.map(member => ({
    id: member.id,
    name: member.name,
    role: member.role,
    bio: member.bio,
    image: member.image_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`,
    linkedin: member.linkedin_url || '#',
    twitter: member.twitter_url,
    email: member.email,
    department: member.department,
  }));

  return <TeamClient initialMembers={formattedMembers} />;
}
