import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .order('featured', { ascending: false })
      .order('order_index', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Portfolio API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const body = await request.json();

    const {
      title,
      slug,
      short_description,
      description,
      client_name,
      industry,
      cover_image,
      images,
      technologies,
      project_url,
      category,
      featured,
      order_index,
      status,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('portfolio')
      .insert({
        title,
        slug,
        short_description,
        description,
        client_name,
        industry,
        cover_image,
        images: images || [],
        technologies: technologies || [],
        project_url,
        category,
        featured: featured || false,
        order_index: order_index || 0,
        status: status || 'active',
      })
      .select()
      .single();

    if (error) {
      console.error('Portfolio creation error:', error);
      return NextResponse.json(
        { error: 'Failed to create portfolio item' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Portfolio creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
