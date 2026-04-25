import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server-client';
import { cookies } from 'next/headers';

function generateVisitorId() {
  return `v_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

async function ensureTablesExist(supabase: any) {
  const { error } = await supabase.rpc('exec', {
    query: `
      CREATE TABLE IF NOT EXISTS page_views (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        visitor_id VARCHAR(255) NOT NULL,
        page VARCHAR(500) NOT NULL,
        ip_address VARCHAR(45),
        user_agent TEXT,
        referrer VARCHAR(500),
        visited_at TIMESTAMPTZ DEFAULT NOW()
      );
      
      CREATE INDEX IF NOT EXISTS page_views_visitor_id_idx ON page_views(visitor_id);
      CREATE INDEX IF NOT EXISTS page_views_page_idx ON page_views(page);
      CREATE INDEX IF NOT EXISTS page_views_visited_at_idx ON page_views(visited_at);
    `
  }).catch(() => {
    // RPC might not exist, try direct SQL
  });
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const cookieStore = await cookies();
    
    let visitorId = cookieStore.get('ferdsilinks_visitor')?.value;
    if (!visitorId) {
      visitorId = generateVisitorId();
    }
    
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '/';
    const referrer = searchParams.get('referrer') || '';

    // Insert page view
    const { error } = await supabase
      .from('page_views')
      .insert({
        visitor_id: visitorId,
        page: page,
        ip_address: request.headers.get('x-forwarded-for') || 'unknown',
        user_agent: request.headers.get('user-agent') || 'unknown',
        referrer: referrer,
      });

    if (error) {
      // Table might not exist - try to create it
      if (error.code === '42P01') {
        console.log('Table does not exist, attempting to create...');
        // The table needs to be created manually in Supabase
        // For now, just return success without tracking
        const response = NextResponse.json({ success: false, error: 'Analytics table not set up', needsSetup: true });
        return response;
      }
      console.error('Insert error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    const response = NextResponse.json({ success: true, visitorId });
    
    if (!cookieStore.get('ferdsilinks_visitor')?.value) {
      response.cookies.set('ferdsilinks_visitor', visitorId, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 365,
        path: '/',
      });
    }

    return response;
  } catch (error: any) {
    console.error('Tracking error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  let visitorId = cookieStore.get('ferdsilinks_visitor')?.value;
  
  if (!visitorId) {
    visitorId = generateVisitorId();
  }
  
  const response = NextResponse.json({ success: true, visitorId });
  
  if (!cookieStore.get('ferdsilinks_visitor')?.value) {
    response.cookies.set('ferdsilinks_visitor', visitorId, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });
  }

  return response;
}