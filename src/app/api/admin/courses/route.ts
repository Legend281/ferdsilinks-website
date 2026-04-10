import { createClient } from '@/lib/supabase/supabase-server-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
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
      title, 
      slug,
      short_description,
      description,
      cover_image,
      price,
      currency,
      duration,
      level,
      category,
      curriculum,
      instructor_name,
      max_students,
      start_date,
      end_date,
      enrollment_deadline,
      location,
      is_online,
      certificate_provided,
      status,
      featured,
    } = body;

    if (!title || !slug) {
      return NextResponse.json(
        { error: 'Title and slug are required' }, 
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('courses')
      .insert({
        title,
        slug,
        short_description,
        description,
        cover_image,
        price: price || 0,
        currency: currency || 'XAF',
        duration,
        level: level || 'Beginner',
        category,
        curriculum: curriculum || [],
        instructor_name,
        max_students,
        start_date: start_date || null,
        end_date: end_date || null,
        enrollment_deadline: enrollment_deadline || null,
        location,
        is_online: is_online ?? true,
        certificate_provided: certificate_provided ?? true,
        status: status || 'draft',
        featured: featured || false,
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
