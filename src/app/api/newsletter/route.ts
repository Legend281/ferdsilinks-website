import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/supabase-server-client';
import { newsletterSchema } from '@/lib/validation';
import { sendNewsletterAlert, sendWelcomeEmail } from '@/lib/email';

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  if (record.count >= RATE_LIMIT) return false;
  record.count++;
  return true;
}

function getClientIP(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() 
    || request.headers.get('x-real-ip')?.trim()
    || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    
    const body = await request.json();
    
    const result = newsletterSchema.safeParse(body);
    
    if (!result.success) {
      const errors = result.error.issues.map((e: { message: string }) => e.message);
      return NextResponse.json(
        { error: errors[0], errors },
        { status: 400 }
      );
    }

    const { email, name } = result.data;

    const supabase = await createServiceClient();

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

    // Send email alert
    await sendNewsletterAlert({
      email,
      name: name || undefined,
      source: 'Website',
    });

    // Send welcome email to subscriber
    await sendWelcomeEmail({
      email,
      name: name || undefined,
    });

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
