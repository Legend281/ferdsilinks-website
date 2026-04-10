import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { data: existing } = await supabase
      .from('subscribers')
      .select('id, status')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.status === 'unsubscribed') {
        const { data, error } = await supabase
          .from('subscribers')
          .update({ status: 'active' })
          .eq('id', existing.id)
          .select()
          .single();

        if (error) throw error;

        return NextResponse.json(
          { success: true, message: 'Welcome back! You have been re-subscribed.', data },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { success: true, message: 'You are already subscribed!' },
        { status: 200 }
      );
    }

    const { data, error } = await supabase
      .from('subscribers')
      .insert([
        {
          email,
          name: name || null,
          source: 'website',
          status: 'active',
        },
      ])
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { success: true, message: 'You are already subscribed!' },
          { status: 200 }
        );
      }
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
