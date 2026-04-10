import { createClient } from '@/lib/supabase/supabase-server-client';
import BlogClient from './BlogClient';

async function getPublishedPosts() {
  try {
    const supabase = await createClient();
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
  
  const formattedPosts = posts.map(post => ({
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
  }));

  return <BlogClient posts={formattedPosts} />;
}
