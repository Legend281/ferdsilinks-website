import { createClient } from '@/lib/supabase/supabase-server-client';
import SubscribersTable from './SubscribersTable';

async function getSubscribers() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('subscribers')
    .select('*')
    .order('created_at', { ascending: false });
  return data || [];
}

export default async function NewsletterPage() {
  const subscribers = await getSubscribers();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Newsletter</h1>
        <p className="text-slate-500">Manage your newsletter subscribers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="bg-[#006a6a] p-3 rounded-lg">
              <span className="material-symbols-outlined text-white">mail</span>
            </div>
            <div>
              <p className="text-2xl font-headline font-bold text-[#0302cb]">
                {subscribers.length}
              </p>
              <p className="text-sm text-slate-500">Total Subscribers</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="bg-green-500 p-3 rounded-lg">
              <span className="material-symbols-outlined text-white">check_circle</span>
            </div>
            <div>
              <p className="text-2xl font-headline font-bold text-[#0302cb]">
                {subscribers.filter(s => s.status === 'active').length}
              </p>
              <p className="text-sm text-slate-500">Active</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="bg-red-500 p-3 rounded-lg">
              <span className="material-symbols-outlined text-white">person_remove</span>
            </div>
            <div>
              <p className="text-2xl font-headline font-bold text-[#0302cb]">
                {subscribers.filter(s => s.status === 'unsubscribed').length}
              </p>
              <p className="text-sm text-slate-500">Unsubscribed</p>
            </div>
          </div>
        </div>
      </div>

      <SubscribersTable initialSubscribers={subscribers} />
    </div>
  );
}
