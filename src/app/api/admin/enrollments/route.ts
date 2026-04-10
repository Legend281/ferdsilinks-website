import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Enrollments API error:', error);
      return NextResponse.json({ enrollments: [], error: error.message }, { status: 200 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Enrollments API error:', error);
    return NextResponse.json({ enrollments: [] }, { status: 200 });
  }
}
