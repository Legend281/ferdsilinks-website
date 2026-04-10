import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('status', 'active')
      .order('order_index', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Public services API error:', error);
      return NextResponse.json({ services: [], error: error.message }, { status: 200 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Public services API error:', error);
    return NextResponse.json({ services: [] }, { status: 200 });
  }
}
