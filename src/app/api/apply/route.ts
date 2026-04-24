import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/supabase-server-client';
import { jobApplicationSchema } from '@/lib/validation';
import { sendApplicationAlert } from '@/lib/email';

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

async function uploadResumeToStorage(supabase: any, file: File, email: string): Promise<string | null> {
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `applications/${Date.now()}-${sanitizedName}`;
    
    const { data, error } = await supabase.storage
      .from('resumes')
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error('Storage upload error:', error);
      return null;
    }

    const { data: urlData } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);

    return urlData.publicUrl;
  } catch (error) {
    console.error('Upload error:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const formData = await request.formData();
    const resumeFile = formData.get('resume') as File | null;
    
    const jobData = {
      job_id: formData.get('job_id') as string || null,
      job_title: formData.get('job_title') as string || 'General Application',
      full_name: formData.get('full_name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || null,
      linkedin_url: formData.get('linkedin_url') as string || null,
      portfolio_url: formData.get('portfolio_url') as string || null,
      cover_letter: formData.get('cover_letter') as string || '',
    };

    const result = jobApplicationSchema.safeParse(jobData);
    
    if (!result.success) {
      const errors = result.error.issues.map((e: { message: string }) => e.message);
      return NextResponse.json(
        { error: errors[0], errors },
        { status: 400 }
      );
    }

    const supabase = await createServiceClient();
    let resumeUrl = null;

    if (resumeFile && resumeFile.size > 0) {
      resumeUrl = await uploadResumeToStorage(supabase, resumeFile, jobData.email);
    }

    const { data, error } = await supabase
      .from('job_applications')
      .insert([
        {
          job_id: jobData.job_id,
          job_title: jobData.job_title,
          full_name: jobData.full_name,
          email: jobData.email,
          phone: jobData.phone,
          linkedin_url: jobData.linkedin_url,
          portfolio_url: jobData.portfolio_url,
          cover_letter: jobData.cover_letter,
          resume_url: resumeUrl,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    await sendApplicationAlert({
      name: jobData.full_name,
      email: jobData.email,
      phone: jobData.phone || undefined,
      position: jobData.job_title,
    });

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!', data },
      { status: 201 }
    );
  } catch (error) {
    console.error('Application API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}