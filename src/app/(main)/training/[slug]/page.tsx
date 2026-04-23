import { createClient } from '@/lib/supabase/supabase-server-client';
import { notFound } from 'next/navigation';
import CourseDetailClient from './CourseDetailClient';
import { courses as staticCourses } from '@/data/training';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const course = await getCourse(slug);

  if (!course) {
    return { title: 'Course Not Found' };
  }

  return {
    title: course.title,
    description: course.short_description,
    openGraph: {
      title: course.title,
      description: course.short_description,
      images: course.cover_image ? [course.cover_image] : [],
    },
  };
}

async function getCourse(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    
    if (!error && data) {
      return data;
    }
  } catch (error: any) {
    console.error('Database error, falling back to static data:', error?.message || error);
  }
  
  const staticCourse = staticCourses.find(c => c.slug === slug);
  if (staticCourse) {
    return {
      id: staticCourse.id,
      slug: staticCourse.slug,
      title: staticCourse.title,
      short_description: staticCourse.short_description,
      description: staticCourse.long_description,
      cover_image: null,
      duration: staticCourse.duration,
      level: staticCourse.level,
      category: staticCourse.category,
      curriculum: staticCourse.curriculum.flatMap(m => [m.title, ...m.topics]),
      price: 0,
      currency: 'USD',
      instructor_name: 'Ferdsilinks Academy',
      max_students: null,
      certificate_provided: true,
      is_online: false,
      location: null,
      enrollment_deadline: null,
    };
  }
  
  return null;
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) {
    notFound();
  }

  const formattedCourse = {
    id: course.id,
    slug: course.slug,
    title: course.title,
    short_description: course.short_description || '',
    description: course.description || '',
    cover_image: course.cover_image,
    duration: course.duration || '8 weeks',
    level: course.level || 'Beginner',
    category: course.category || '',
    curriculum: course.curriculum || [],
    price: course.price,
    currency: course.currency,
    instructor_name: course.instructor_name,
    max_students: course.max_students,
    certificate_provided: course.certificate_provided,
    is_online: course.is_online,
    location: course.location,
    enrollment_deadline: course.enrollment_deadline,
  };

  return <CourseDetailClient course={formattedCourse} />;
}
