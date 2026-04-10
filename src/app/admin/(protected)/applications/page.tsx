import { createClient } from '@/lib/supabase/supabase-server-client';
import ApplicationsTable from './ApplicationsTable';

async function getApplications() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('job_applications')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function ApplicationsPage() {
  const applications = await getApplications();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-[#002147]">Job Applications</h1>
        <p className="text-gray-500">Manage job applications from candidates.</p>
      </div>

      <ApplicationsTable initialApplications={applications} />
    </div>
  );
}
