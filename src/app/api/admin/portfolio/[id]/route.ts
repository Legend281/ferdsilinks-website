import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return NextResponse.json({ error: 'Portfolio item not found' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Portfolio fetch error:', error);
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
    const supabase = await createClient();

    const updateData: Record<string, unknown> = {};
    const allowedFields = [
      'title', 'slug', 'short_description', 'description', 'client_name',
      'industry', 'cover_image', 'images', 'technologies', 'project_url',
      'category', 'featured', 'order_index', 'status'
    ];

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    updateData.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('portfolio')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Portfolio update error:', error);
      return NextResponse.json(
        { error: 'Failed to update portfolio item' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Portfolio update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();
    const { error } = await supabase
      .from('portfolio')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Portfolio delete error:', error);
      return NextResponse.json(
        { error: 'Failed to delete portfolio item' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Portfolio delete error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
