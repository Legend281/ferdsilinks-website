import { createClient } from '@/lib/supabase/supabase-server-client';
import LeadsTable from './LeadsTable';

async function getLeads() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function LeadsPage() {
  const leads = await getLeads();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-[#002147]">Leads</h1>
        <p className="text-gray-500">Manage contact form submissions and quote requests.</p>
      </div>

      <LeadsTable initialLeads={leads} />
    </div>
  );
}
