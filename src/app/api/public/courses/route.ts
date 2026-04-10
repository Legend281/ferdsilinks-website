import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('status', 'published')
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Courses API error:', error);
      return NextResponse.json({ courses: [], error: error.message }, { status: 200 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Courses API error:', error);
    return NextResponse.json({ courses: [] }, { status: 200 });
  }
}
