import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server-client';
import { cookies } from 'next/headers';

function generateVisitorId() {
  return `v_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
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

    const { error } = await supabase
      .from('page_views')
      .insert({
        visitor_id: visitorId,
        page: page,
        ip_address: 'unknown',
        user_agent: 'unknown',
        referrer: referrer,
      });

    if (error) {
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
