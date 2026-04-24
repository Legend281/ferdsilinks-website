import { createServiceClient } from '@/lib/supabase/supabase-server-client';
import CareersClient from './CareersClient';

async function getJobs() {
  try {
    const supabase = await createServiceClient();
    const { data, error } = await supabase
      .from('job_listings')
      .select('*')
      .eq('status', 'active')
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

export default async function Page() {
  const jobs = await getJobs();
  
  const formattedJobs = jobs.map(job => ({
    id: job.id,
    title: job.title,
    department: job.department,
    type: job.type,
    location: job.location,
    remote: job.remote,
    compensation: job.salary_range || 'Competitive',
  }));

  return <CareersClient initialJobs={formattedJobs} />;
}