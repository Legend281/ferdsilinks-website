import { createServiceClient } from '@/lib/supabase/supabase-server-client';
import BlogClient from './BlogClient';

async function getPublishedPosts() {
  try {
    const supabase = await createServiceClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  
  // Find the featured post first (marked as featured)
  const featuredPost = posts.find(p => p.featured === true);
  
  // If there's a featured post, put it first; otherwise use the first published post
  let sortedPosts = [...posts];
  if (featuredPost) {
    sortedPosts = [featuredPost, ...posts.filter(p => p.id !== featuredPost.id)];
  }
  
  const formattedPosts = sortedPosts.map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category || 'Insights',
    date: post.published_at 
      ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: Math.max(3, Math.ceil((post.content?.split(' ').length || 0) / 200)) + ' min read',
    author: post.author_name || 'Ferdsilinks Team',
    authorRole: 'Content Team',
    cover_image: post.cover_image,
    featured: post.featured === true,
  }));

  return <BlogClient posts={formattedPosts} />;
}