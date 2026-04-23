import { createClient } from '@/lib/supabase/supabase-server-client';
import TrainingClient from './TrainingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Training | Data Science, AI & Software Development Courses',
  description: 'Expert-led intensives in Data Science, AI, and Software Engineering at Ferdsilinks Academy in Buea, Cameroon. Build your tech career in Silicon Mountain.',
  keywords: ['tech training', 'data science course', 'AI course', 'software development', 'Python training', 'Buea', 'Cameroon', 'Silicon Mountain', 'Ferdsilinks Academy'],
  alternates: {
    canonical: 'https://ferdsilinks.com/training',
  },
  openGraph: {
    title: 'Tech Training | Ferdsilinks Academy',
    description: 'Expert-led tech intensives in Python, Data Science & AI. Join the next generation of African tech leaders.',
  },
};

async function getCourses() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('status', 'published')
      .order('featured', { ascending: false })
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

export default async function TrainingPage() {
  const courses = await getCourses();
  
  const formattedCourses = courses.map(course => ({
    id: course.id,
    slug: course.slug,
    title: course.title,
    short_description: course.short_description || course.description?.slice(0, 150) || '',
    description: course.description || '',
    cover_image: course.cover_image,
    duration: course.duration || '8 weeks',
    level: course.level || 'Beginner',
    curriculum: course.curriculum || [],
    price: course.price,
    currency: course.currency,
    instructor_name: course.instructor_name,
    certificate_provided: course.certificate_provided,
    is_online: course.is_online,
  }));

  return <TrainingClient initialCourses={formattedCourses} />;
}
