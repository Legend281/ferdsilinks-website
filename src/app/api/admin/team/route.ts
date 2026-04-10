import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('order', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const body = await request.json();

    const { 
      name, 
      role, 
      department,
      bio,
      image_url,
      linkedin_url,
      twitter_url,
      email,
      order,
      status 
    } = body;

    if (!name || !role || !bio) {
      return NextResponse.json(
        { error: 'Name, role, and bio are required' }, 
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('team_members')
      .insert({
        name,
        role,
        department,
        bio,
        image_url,
        linkedin_url,
        twitter_url,
        email,
        order: order || 0,
        status: status || 'active',
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
