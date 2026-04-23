import { createServiceClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createServiceClient();
    const { data, error } = await supabase
      .from('podcasts')
      .select('*')
      .order('season_number', { ascending: false })
      .order('episode_number', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Podcasts API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createServiceClient();
    const body = await request.json();

    const {
      title,
      slug,
      description,
      youtube_url,
      video_id,
      episode_number,
      season_number,
      duration,
      cover_image,
      guest_name,
      guest_role,
      guest_bio,
      guest_image,
      published_date,
      category,
      featured,
      status,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('podcasts')
      .insert({
        title,
        slug,
        description,
        youtube_url,
        video_id,
        episode_number: episode_number || null,
        season_number: season_number || null,
        duration,
        cover_image,
        guest_name,
        guest_role,
        guest_bio,
        guest_image,
        published_date: published_date || null,
        category,
        featured: featured || false,
        status: status || 'draft',
      })
      .select()
      .single();

    if (error) {
      console.error('Podcast creation error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Podcast creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}