import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      course_id,
      course_title,
      full_name,
      email,
      phone,
      education_level,
      experience_level,
      motivation,
      payment_method,
    } = body;

    if (!course_id || !course_title || !full_name || !email) {
      return NextResponse.json(
        { error: 'Course, full name, and email are required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('enrollments')
      .insert([
        {
          course_id,
          course_title,
          full_name,
          email,
          phone: phone || null,
          education_level: education_level || null,
          experience_level: experience_level || null,
          motivation: motivation || null,
          payment_method: payment_method || null,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit enrollment. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Enrollment submitted successfully! We will contact you soon.', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Enroll API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
