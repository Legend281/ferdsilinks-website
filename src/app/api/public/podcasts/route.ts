import { createServiceClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createServiceClient();
    const { data, error } = await supabase
      .from('podcasts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    console.log('Public podcasts:', data);

    if (error) {
      console.error('Public podcasts API error:', error);
      return NextResponse.json({ podcasts: [], error: error.message }, { status: 200 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Public podcasts API error:', error);
    return NextResponse.json({ podcasts: [] }, { status: 200 });
  }
}