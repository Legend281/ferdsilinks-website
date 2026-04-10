import { useLanguage } from '@/components/LanguageProvider';
import { courses as enTraining } from './en/training';
import { courses as frTraining } from './fr/training';

export interface CourseModule {
    title: string;
    topics: string[];
}

export interface Course {
    id: string;
    slug: string;
    title: string;
    category: string;
    level: string;
    duration: string;
    icon: string;
    short_description: string;
    long_description: string;
    skills_gained: string[];
    curriculum: CourseModule[];
}

export const useTrainingCourses = () => {
    const { language } = useLanguage();
    return language === 'fr' ? frTraining : enTraining;
};

// Default export kept for Server generation methods
export const courses = enTraining;
