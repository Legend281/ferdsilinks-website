import { createClient } from '@/lib/supabase/supabase-server-client';
import EnrollmentsTable from './EnrollmentsTable';

async function getEnrollments() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching enrollments:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    return [];
  }
}

export default async function EnrollmentsPage() {
  const enrollments = await getEnrollments();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-[#002147]">Enrollments</h1>
        <p className="text-gray-500">Manage course enrollments and registrations.</p>
      </div>

      <EnrollmentsTable initialEnrollments={enrollments} />
    </div>
  );
}
