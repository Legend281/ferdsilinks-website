import { blogPosts } from '@/data/blog';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    post: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ post: string }> }) {
  const { post: postSlug } = await params;
  return <BlogPostClient postSlug={postSlug} />;
}