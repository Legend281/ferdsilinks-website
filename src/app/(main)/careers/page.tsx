import { createClient } from '@/lib/supabase/supabase-server-client';
import CareersClient from './CareersClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the team building Africa\'s tech future. Explore open positions at Ferdsilinks in Buea, Cameroon.',
};

async function getJobs() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('job_listings')
      .select('*')
      .eq('status', 'published')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching jobs:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
}

export default async function CareersPage() {
  const jobs = await getJobs();
  
  const formattedJobs = jobs.map(job => ({
    id: job.id,
    title: job.title,
    department: job.department,
    type: job.type.replace('-', ' '),
    location: job.location,
    remote: job.remote,
    compensation: job.salary_range || 'Competitive',
    description: job.description,
    requirements: job.requirements,
    responsibilities: job.responsibilities,
  }));

  return <CareersClient initialJobs={formattedJobs} />;
}
