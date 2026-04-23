import { createClient } from '@/lib/supabase/supabase-server-client';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { blogPosts as staticPosts } from '@/data/blog';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ post: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { post: slug } = await params;
  const post = await getPost(slug);

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
    
    if (!error && data) {
      return data;
    }
  } catch (error) {
    console.error('Database error, falling back to static data:', error);
  }
  
  const staticPost = staticPosts.find(p => p.slug === slug);
  if (staticPost) {
    return {
      id: staticPost.id,
      slug: staticPost.slug,
      title: staticPost.title,
      excerpt: staticPost.excerpt,
      content: staticPost.content,
      category: staticPost.category,
      author_name: staticPost.author,
      cover_image: null,
      published_at: staticPost.date,
      created_at: staticPost.date,
      status: 'published',
    };
  }
  
  return null;
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
    
    if (!error && data) {
      return data;
    }
  } catch {
    // Fall through to static data
  }
  
  return staticPosts
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, 2)
    .map(p => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      cover_image: null,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ post: string }> }) {
  const { post: slug } = await params;
  const post = await getPost(slug);

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
    <main className="bg-surface">
      <style dangerouslySetInnerHTML={{__html: `
        .article-content { font-family: 'Inter', sans-serif; }
        .article-content p { margin-bottom: 1.5rem; line-height: 1.75; color: #191c1d; }
        .article-content h1, .article-content h2, .article-content h3, .article-content h4 { font-family: 'Manrope', sans-serif; font-weight: 800; color: #000a1e; margin-top: 2.5rem; margin-bottom: 1.25rem; }
        .article-content h2 { font-size: 1.875rem; }
        .article-content h3 { font-size: 1.5rem; font-weight: 700; }
        .article-content ul, .article-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
        .article-content li { margin-bottom: 0.75rem; line-height: 1.75; }
        .article-content blockquote { border-left: 4px solid #ef0d11; padding-left: 1.5rem; margin: 1.5rem 0; font-style: italic; color: #475569; }
        .article-content a { color: #0302cb; text-decoration: underline; }
        .article-content img { border-radius: 0.5rem; margin: 1.5rem 0; max-width: 100%; }
        .article-content hr { border: none; border-top: 2px solid #e2e8f0; margin: 2rem 0; }
        .article-content strong { font-weight: 700; }
        .article-content em { font-style: italic; }
        .article-content ul { list-style-type: disc; }
        .article-content ol { list-style-type: decimal; }
      `}} />

      {/* Hero Section - Full Width Image */}
      <header className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {formattedPost.cover_image ? (
            <img 
                alt={formattedPost.title} 
                className="w-full h-full object-cover" 
                src={formattedPost.cover_image}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary via-primary to-slate-900"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-6xl mx-auto px-6 pb-16">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-on-tertiary-container text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
                {formattedPost.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6 max-w-5xl">
              {formattedPost.title}
            </h1>
            
            {/* Meta Bar */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-tertiary-fixed">
                  <img 
                    alt={formattedPost.author} 
                    className="w-full h-full object-cover" 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${formattedPost.author}`} 
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{formattedPost.author}</p>
                  <p className="text-white/60 text-xs">{formattedPost.authorRole}</p>
                </div>
              </div>
              
              <div className="w-px h-10 bg-white/30"></div>
              
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed text-lg">calendar_today</span>
                <span>{formattedPost.date}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary-fixed text-lg">schedule</span>
                <span>{formattedPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
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
