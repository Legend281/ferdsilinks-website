import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server-client';
import { blogPosts as staticPosts } from '@/data/blog';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, slug, title, excerpt, category, cover_image, author_name, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false })
      .limit(3);
    
    if (!error && data && data.length > 0) {
      return NextResponse.json({ posts: data });
    }
  } catch (error) {
    console.error('Blog API error, using static data:', error);
  }
  
  const staticData = staticPosts.slice(0, 3).map(post => ({
    id: post.id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    cover_image: null,
    author_name: post.author,
    published_at: post.date,
  }));
  
  return NextResponse.json({ posts: staticData });
}
