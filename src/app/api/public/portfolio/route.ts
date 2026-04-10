import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .eq('status', 'active')
      .order('featured', { ascending: false })
      .order('order_index', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Public portfolio API error:', error);
      return NextResponse.json({ portfolio: [], error: error.message }, { status: 200 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Public portfolio API error:', error);
    return NextResponse.json({ portfolio: [] }, { status: 200 });
  }
}
