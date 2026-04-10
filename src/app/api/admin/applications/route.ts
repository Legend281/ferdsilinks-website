import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server-client';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('job_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}
