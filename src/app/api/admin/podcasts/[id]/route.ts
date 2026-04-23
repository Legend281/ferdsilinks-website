import { createServiceClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createServiceClient();
    const { data, error } = await supabase
      .from('podcasts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return NextResponse.json({ error: 'Podcast not found' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Podcast fetch error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const supabase = await createServiceClient();

    const updateData: Record<string, unknown> = {};
    const allowedFields = [
      'title', 'slug', 'description', 'youtube_url', 'video_id',
      'episode_number', 'season_number', 'duration', 'cover_image', 
      'guest_name', 'guest_role', 'guest_bio', 'guest_image', 
      'published_date', 'category', 'featured', 'status'
    ];

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    updateData.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('podcasts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Podcast update error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Podcast update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createServiceClient();
    const { error } = await supabase
      .from('podcasts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Podcast delete error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Podcast delete error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}