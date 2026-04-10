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
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();
    const body = await request.json();

    const updateData: Record<string, unknown> = {};

    if (body.title !== undefined) updateData.title = body.title;
    if (body.slug !== undefined) updateData.slug = body.slug;
    if (body.short_description !== undefined) updateData.short_description = body.short_description;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.cover_image !== undefined) updateData.cover_image = body.cover_image;
    if (body.price !== undefined) updateData.price = body.price;
    if (body.currency !== undefined) updateData.currency = body.currency;
    if (body.duration !== undefined) updateData.duration = body.duration;
    if (body.level !== undefined) updateData.level = body.level;
    if (body.category !== undefined) updateData.category = body.category;
    if (body.curriculum !== undefined) updateData.curriculum = body.curriculum;
    if (body.instructor_name !== undefined) updateData.instructor_name = body.instructor_name;
    if (body.max_students !== undefined) updateData.max_students = body.max_students;
    if (body.start_date !== undefined) updateData.start_date = body.start_date || null;
    if (body.end_date !== undefined) updateData.end_date = body.end_date || null;
    if (body.enrollment_deadline !== undefined) updateData.enrollment_deadline = body.enrollment_deadline || null;
    if (body.location !== undefined) updateData.location = body.location;
    if (body.is_online !== undefined) updateData.is_online = body.is_online;
    if (body.certificate_provided !== undefined) updateData.certificate_provided = body.certificate_provided;
    if (body.status !== undefined) updateData.status = body.status;
    if (body.featured !== undefined) updateData.featured = body.featured;

    updateData.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('courses')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
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
      .from('courses')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
