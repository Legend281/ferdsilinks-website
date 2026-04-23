"use client";

import { useState, useMemo } from 'react';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  cover_image?: string;
  featured?: boolean;
}

interface BlogClientProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 6;

export default function BlogClient({ posts }: BlogClientProps) {
  const { t } = useLanguage();
  const bp = t.blogPage;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Data Science', 'AI & ML', 'Business', 'Training', 'Insights', 'Tech Culture', 'Software Development', 'Company News', 'Engineering'];

const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const featuredPost = posts.find(p => p.featured) || posts[0];

  if (posts.length === 0) {
    return (
      <main className="pt-24 min-h-screen">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-24 text-center">
          <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">article</span>
          <h1 className="text-3xl font-headline font-bold text-primary mb-4">{bp.noInsights}</h1>
          <p className="text-on-surface-variant mb-8">{bp.tryAdjusting}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section - Redesigned with Background Image */}
      <FadeIn>
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop"
              alt="Modern tech workspace"
            />
            <div className="absolute inset-0 bg-primary/85"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse"></span>
                  <span className="font-label text-xs uppercase tracking-widest text-white font-bold">{bp.featuredInsight}</span>
                </div>
                
                <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  {featuredPost?.title}
                </h1>
                
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  {featuredPost?.excerpt}
                </p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">schedule</span>
                    {featuredPost?.readTime}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                    {featuredPost?.date}
                  </span>
                  <span className="px-3 py-1 bg-tertiary-fixed text-white rounded-full text-xs font-bold uppercase">
                    {featuredPost?.category}
                  </span>
                </div>
                
                <Link 
                  href={`/blog/${featuredPost?.slug}`}
                  className="inline-flex items-center gap-3 bg-on-tertiary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-on-tertiary-container/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {bp.readFullStory}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              
              {/* Right Content - Featured Image */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-tr from-tertiary-fixed/30 to-transparent rounded-full blur-[80px] -z-10"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/50 aspect-[4/3]">
                  {featuredPost?.cover_image ? (
                    <img 
                      src={featuredPost.cover_image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                      alt={featuredPost?.title || 'Blog featured image'}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white backdrop-blur-md border border-white/30 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-on-tertiary-container rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl">article</span>
                  </div>
                  <div>
                    <p className="font-headline font-extrabold text-2xl text-primary">{posts.length}+</p>
                    <p className="text-xs text-on-surface-variant font-medium">Articles Published</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
            <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
          </div>
        </section>
      </FadeIn>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12">

        <FadeIn>
          <section className="mb-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-outline-variant/20 pb-6">
              <div className="flex flex-wrap gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2 lg:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full font-label text-sm font-bold transition-colors whitespace-nowrap ${
                      activeCategory === category 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-surface-container-high text-on-surface hover:bg-primary-fixed'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-outline bg-surface-container-high px-4 py-2 rounded-full w-full lg:w-auto">
                <span className="material-symbols-outlined">search</span>
                <input 
                  type="text" 
                  placeholder={bp.searchPlaceholder} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 font-body text-sm text-on-surface flex-grow focus:outline-none"
                />
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map(post => (
                    <article key={post.id} className="group flex flex-col h-full bg-surface-container-lowest p-0 rounded-xl overflow-hidden transition-all duration-300">
                        <Link href={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-surface-container-low relative">
                            {post.cover_image ? (
                              <img 
                                  alt={post.title} 
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                  src={post.cover_image}
                              />
                            ) : (
                              <img 
                                  alt={post.title} 
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                  src={`https://api.dicebear.com/7.x/shapes/svg?seed=${post.id}&backgroundColor=002147`}
                              />
                            )}
                        </Link>
                        <div className="flex items-center justify-between mb-4 px-6">
                            <span className="font-label text-[10px] uppercase tracking-widest text-on-secondary-container bg-secondary-fixed px-2 py-1 rounded">{post.category}</span>
                            <span className="font-body text-xs text-outline">{post.date}</span>
                        </div>
                        <div className="px-6 flex-grow">
                          <Link href={`/blog/${post.slug}`}>
                              <h3 className="font-headline text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
                          </Link>
                          <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                        </div>
                        <div className="px-6 pb-6">
                          <Link href={`/blog/${post.slug}`} className="font-headline font-bold text-sm text-on-tertiary-container flex items-center gap-2 group/link hover:text-primary transition-colors">
                              Read Story
                              <span className="material-symbols-outlined text-sm transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                          </Link>
                        </div>
                    </article>
                ))
            ) : (
                <div className="col-span-full text-center py-24 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">search_off</span>
                  <p className="font-headline font-bold text-lg text-primary">No insights found.</p>
                  <p className="text-on-surface-variant text-sm">Try adjusting your category or search terms.</p>
                </div>
            )}
          </section>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mb-20">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === page 
                      ? 'bg-primary text-white' 
                      : 'border border-outline-variant hover:bg-surface-container-low'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-outline-variant flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          )}
        </FadeIn>

        <FadeIn>
          <section className="relative bg-primary overflow-hidden rounded-2xl mb-20 mx-auto">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-on-tertiary-container rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[80px]"></div>
            </div>
            <div className="relative px-8 py-20 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center lg:text-left">
                    <span className="font-label text-xs uppercase tracking-widest text-tertiary-fixed mb-4 inline-block">Stay Ahead</span>
                    <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-white mb-4">Join the Silicon Mountain Pulse</h2>
                    <p className="font-body text-slate-300 text-lg leading-relaxed">Bi-weekly architectural insights into tech, data ethics, and the digital economy delivered directly to your inbox.</p>
                </div>
                <div className="w-full max-w-md">
                    <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your executive email" className="flex-grow bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white font-body placeholder:text-white/40 focus:bg-white/20 focus:ring-2 focus:ring-on-tertiary-container transition-all outline-none" required />
                        <button type="submit" className="bg-on-tertiary-container text-white font-headline font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all whitespace-nowrap shadow-lg">Subscribe</button>
                    </form>
                    <p className="font-label text-[10px] text-white/40 mt-4 text-center lg:text-left">By subscribing, you agree to our Data Ethics policy.</p>
                </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
             {posts.slice(1, 3).map((post) => (
                <div key={post.id} className="bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-outline-variant/10">
                    <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-lg">
                        {post.cover_image ? (
                          <img 
                              src={post.cover_image} 
                              alt={post.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                        ) : (
                          <img 
                              src={`https://api.dicebear.com/7.x/shapes/svg?seed=${post.id}&backgroundColor=002147`} 
                              alt={post.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                        )}
                    </div>
                    <div className="w-full md:w-2/3">
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-tertiary-fixed-variant bg-tertiary-fixed px-2 py-1 rounded">{post.category}</span>
                        <h4 className="font-headline text-xl font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h4>
                        <p className="font-body text-sm text-on-surface-variant mb-4 line-clamp-2">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:text-primary transition-colors">
                            {bp.readArticle} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </Link>
                    </div>
                </div>
             ))}
          </section>
        </FadeIn>

      </div>
    </main>
  );
}
