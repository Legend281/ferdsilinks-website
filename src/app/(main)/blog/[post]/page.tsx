import { createClient } from '@/lib/supabase/supabase-server-client';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, excerpt, cover_image')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.cover_image ? [post.cover_image] : [],
    },
  };
}

async function getPost(slug: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    
    if (error) {
      console.error('Error fetching post:', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

async function getRelatedPosts(currentId: string, category: string) {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, slug, title, excerpt, category, cover_image')
      .eq('status', 'published')
      .eq('category', category)
      .neq('id', currentId)
      .limit(2);
    
    if (error) {
      console.error('Error fetching related posts:', error);
      return [];
    }
    return data || [];
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: postSlug } = await params;
  const post = await getPost(postSlug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.id, post.category);

  const formattedPost = {
    ...post,
    date: post.published_at 
      ? new Date(post.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: Math.max(3, Math.ceil((post.content?.split(' ').length || 0) / 200)) + ' min read',
    author: post.author_name || 'Ferdsilinks Team',
    authorRole: 'Content Team',
  };

  return (
    <main className="pt-20 bg-surface">
      <style dangerouslySetInnerHTML={{__html: `
        .article-content p { margin-bottom: 1.5rem; line-height: 1.75; color: #191c1d; font-family: 'Inter', sans-serif; }
        .article-content h2 { font-family: 'Manrope', sans-serif; font-weight: 800; font-size: 1.875rem; margin-top: 2.5rem; margin-bottom: 1.25rem; color: #000a1e; }
        .article-content h3 { font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; color: #002147; }
        .article-content ul { margin-bottom: 1.5rem; list-style-type: none; padding-left: 0; }
        .article-content li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; }
        .article-content li::before { content: '→'; position: absolute; left: 0; color: #cf7000; font-weight: bold; }
      `}} />

      {/* Hero Section */}
      <header className="relative w-full bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          {formattedPost.cover_image ? (
            <img 
                alt={formattedPost.title} 
                className="w-full h-full object-cover" 
                src={formattedPost.cover_image}
            />
          ) : (
            <img 
                alt={formattedPost.title} 
                className="w-full h-full object-cover" 
                src={`https://api.dicebear.com/7.x/shapes/svg?seed=${formattedPost.id}&backgroundColor=002147`} 
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant font-label text-xs font-bold tracking-widest uppercase rounded mb-6">
              {formattedPost.category}
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white font-headline leading-[1.1] mb-8 tracking-tighter">
              {formattedPost.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 text-slate-300 font-label text-sm border-t border-white/10 pt-8">
            <div className="flex items-center gap-3">
              <img alt={formattedPost.author} className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formattedPost.author}`} />
              <div>
                <p className="text-white font-bold">{formattedPost.author}</p>
                <p className="text-xs text-slate-400">{formattedPost.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500 text-sm">calendar_today</span>
              <span>{formattedPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500 text-sm">schedule</span>
              <span>{formattedPost.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Main Column */}
        <article className="lg:col-span-8">
          <div className="article-content text-lg">
            <p className="text-xl font-medium text-slate-700 leading-relaxed italic mb-10 border-l-4 border-orange-500 pl-6">
                "{formattedPost.excerpt}"
            </p>
            <div dangerouslySetInnerHTML={{ __html: formattedPost.content }} />
          </div>

          {/* Conversion Section */}
          <section className="mt-20 p-10 bg-surface-container-high rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-black text-primary font-headline mb-4">Join the Silicon Mountain Pulse</h2>
                <p className="text-slate-600 font-body mb-6">Get weekly deep-dives into data architecture, tech policy, and innovation directly from the heart of the ecosystem.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input className="flex-1 px-4 py-3 rounded-lg border-none bg-surface-container-lowest focus:ring-2 focus:ring-secondary transition-all" placeholder="Enter your email" type="email"/>
                  <button className="bg-on-tertiary-container text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                      Subscribe Now
                  </button>
                </div>
              </div>
              <div className="hidden md:block w-px h-32 bg-outline-variant"></div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-primary mb-2">Need Strategic Insight?</h3>
                <p className="text-slate-600 mb-6">Consult with our lead architects on your next data project.</p>
                <Link className="text-secondary font-bold flex items-center justify-center md:justify-start gap-2 hover:gap-4 transition-all" href="/contact">
                    Consult with us <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Share Section */}
          <div className="bg-surface-container-low p-8 rounded-xl">
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Share this insight</h4>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-4 p-3 bg-surface-container-lowest rounded-lg hover:bg-white hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xl">share</span>
                </div>
                <span className="font-bold text-slate-700">LinkedIn</span>
              </button>
              <button className="flex items-center gap-4 p-3 bg-surface-container-lowest rounded-lg hover:bg-white hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded bg-black flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xl">bolt</span>
                </div>
                <span className="font-bold text-slate-700">Twitter (X)</span>
              </button>
              <button className="flex items-center gap-4 p-3 bg-surface-container-lowest rounded-lg hover:bg-white hover:shadow-md transition-all group">
                <div className="w-10 h-10 rounded bg-green-500 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xl">chat</span>
                </div>
                <span className="font-bold text-slate-700">WhatsApp</span>
              </button>
            </div>
          </div>

          {/* About Author */}
          <div className="bg-primary text-white p-8 rounded-xl shadow-xl">
            <img alt={formattedPost.author} className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover mb-6 bg-white" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formattedPost.author}`} />
            <h4 className="text-2xl font-black font-headline mb-2">{formattedPost.author}</h4>
            <p className="text-slate-400 text-sm font-body mb-6 leading-relaxed">
                A veteran data strategist with 15 years of experience building resilient digital ecosystems across West Africa. Leading the Digital Architect initiative in Buea.
            </p>
            <Link className="inline-flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors" href="/team">
                View Profile <span className="material-symbols-outlined">trending_flat</span>
            </Link>
          </div>

          {/* Related Insights */}
          <div>
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Related Insights</h4>
            <div className="space-y-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} className="block group" href={`/blog/${related.slug}`}>
                  <div className="aspect-video w-full rounded-lg overflow-hidden mb-3 bg-surface-container">
                    {related.cover_image ? (
                      <img 
                          alt={related.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          src={related.cover_image}
                      />
                    ) : (
                      <img 
                          alt={related.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          src={`https://api.dicebear.com/7.x/shapes/svg?seed=${related.id}&backgroundColor=002147`} 
                      />
                    )}
                  </div>
                  <h5 className="font-bold text-primary group-hover:text-secondary transition-colors leading-tight">{related.title}</h5>
                  <p className="text-xs text-slate-500 mt-2 font-label uppercase">{related.category}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

    </main>
  );
}
