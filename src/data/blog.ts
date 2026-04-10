import { useLanguage } from '@/components/LanguageProvider';
import { blogPosts as enBlogPosts } from './en/blog';
import { blogPosts as frBlogPosts } from './fr/blog';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    category: "Data Science" | "AI & ML" | "Business" | "Training" | "Insights";
    date: string;
    readTime: string;
    author: string;
    authorRole: string;
    excerpt: string;
    content: string;
}

export const useBlogPosts = () => {
    const { language } = useLanguage();
    return language === 'fr' ? frBlogPosts : enBlogPosts;
};

// Retain English default for Server-side static param generation
export const blogPosts = enBlogPosts;
