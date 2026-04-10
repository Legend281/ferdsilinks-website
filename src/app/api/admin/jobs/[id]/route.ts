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
      .from('job_listings')
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
    if (body.department !== undefined) updateData.department = body.department;
    if (body.location !== undefined) updateData.location = body.location;
    if (body.type !== undefined) updateData.type = body.type;
    if (body.remote !== undefined) updateData.remote = body.remote;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.requirements !== undefined) updateData.requirements = body.requirements;
    if (body.responsibilities !== undefined) updateData.responsibilities = body.responsibilities;
    if (body.salary_range !== undefined) updateData.salary_range = body.salary_range;
    if (body.status !== undefined) updateData.status = body.status;

    updateData.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from('job_listings')
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
      .from('job_listings')
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
