import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      job_id,
      job_title,
      full_name,
      email,
      phone,
      linkedin_url,
      portfolio_url,
      cover_letter,
      resume_url,
    } = body;

    if (!full_name || !email || !cover_letter || !job_title) {
      return NextResponse.json(
        { error: 'Full name, email, cover letter, and job title are required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data, error } = await supabase
      .from('job_applications')
      .insert([
        {
          job_id: job_id || null,
          job_title,
          full_name,
          email,
          phone: phone || null,
          linkedin_url: linkedin_url || null,
          portfolio_url: portfolio_url || null,
          cover_letter,
          resume_url: resume_url || null,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Apply API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
