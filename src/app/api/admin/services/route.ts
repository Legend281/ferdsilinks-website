import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('order_index', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Services API error:', error);
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
      icon,
      features,
      benefits,
      cover_image,
      category,
      order_index,
      highlight,
      status,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('services')
      .insert({
        title,
        slug,
        short_description,
        description,
        icon,
        features: features || [],
        benefits: benefits || [],
        cover_image,
        category,
        order_index: order_index || 0,
        highlight: highlight || false,
        status: status || 'active',
      })
      .select()
      .single();

    if (error) {
      console.error('Service creation error:', error);
      return NextResponse.json(
        { error: 'Failed to create service' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Service creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
