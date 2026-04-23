import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/supabase-server-client';
import { enrollmentSchema } from '@/lib/validation';
import { sendEnrollmentAlert } from '@/lib/email';

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
    
    const result = enrollmentSchema.safeParse(body);
    
    if (!result.success) {
      const errors = result.error.issues.map((e: { message: string }) => e.message);
      return NextResponse.json(
        { error: errors[0], errors },
        { status: 400 }
      );
    }

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
    } = result.data;

    const supabase = await createServiceClient();

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

    // Send email alert
    await sendEnrollmentAlert({
      name: full_name,
      email,
      phone: phone || undefined,
      course: course_title,
    });

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
