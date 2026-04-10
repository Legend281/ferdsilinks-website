import { courses } from '@/data/training';
import CourseClient from './CourseClient';

export function generateStaticParams() {
  return courses.map((course) => ({
    course: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ course: string }> }) {
  const { course } = await params;
  return <CourseClient courseSlug={course} />;
}