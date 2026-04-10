"use client";

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { useLanguage } from '@/components/LanguageProvider';

export default function BlogPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(t.blogPage.categories.all);

  const categories = [t.blogPage.categories.all, t.blogPage.categories.dataScience, t.blogPage.categories.ai, t.blogPage.categories.techCulture, t.blogPage.categories.softwareDevelopment, t.blogPage.categories.businessGrowth, t.blogPage.categories.companyNews, t.blogPage.categories.engineering, t.blogPage.categories.insights];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === t.blogPage.categories.all || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured Post is the first one in the mock data, or first matching
  const featuredPost = blogPosts[0];

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section: Featured Article - Background Image Hero (Full Width) */}
      <FadeIn>
        <section className="mb-16">
          <Link href={`/blog/${featuredPost.slug}`} className="block relative group overflow-hidden bg-primary min-h-[70vh] flex items-end">
            <img 
              alt="Featured Article" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" 
              src={`https://api.dicebear.com/7.x/shapes/svg?seed=${featuredPost.id}&backgroundColor=002147`} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent"></div>
            
            <div className="relative p-12 lg:p-20 max-w-5xl w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-on-tertiary-container/80 backdrop-blur-sm rounded-full mb-6">
                <span className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse"></span>
                <span className="font-label text-xs uppercase tracking-widest text-white font-bold">{t.blogPage.featuredInsight}</span>
              </div>
              <h1 className="font-headline text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                {featuredPost.title}
              </h1>
              <p className="font-body text-lg text-white/80 mb-8 max-w-3xl leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="bg-on-tertiary-container text-white font-headline font-bold px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-tertiary-fixed hover:text-on-tertiary-container transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                  {t.blogPage.readFullStory}
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <span className="font-label text-sm text-white/60 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {featuredPost.readTime} • {featuredPost.date}
                </span>
              </div>
            </div>
            
            <div className="absolute top-8 right-8 flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                {featuredPost.category}
              </div>
            </div>
          </Link>
        </section>
      </FadeIn>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12">

        {/* Category Filter Bar */}
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
                  placeholder={t.blogPage.searchPlaceholder} 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 font-body text-sm text-on-surface flex-grow focus:outline-none"
                />
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Recent Blog Posts Grid */}
        <FadeIn>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                    <article key={post.id} className="group flex flex-col h-full bg-surface-container-lowest p-0 rounded-xl overflow-hidden transition-all duration-300">
                        <Link href={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-surface-container-low relative">
                            <img 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                src={`https://api.dicebear.com/7.x/shapes/svg?seed=${post.id}&backgroundColor=002147`} 
                            />
                        </Link>
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-label text-[10px] uppercase tracking-widest text-on-secondary-container bg-secondary-fixed px-2 py-1 rounded">{post.category}</span>
                            <span className="font-body text-xs text-outline">{post.date}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                            <h3 className="font-headline text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h3>
                        </Link>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="font-headline font-bold text-sm text-on-tertiary-container flex items-center gap-2 group/link hover:text-primary transition-colors">
                            {t.blogPage.readArticle}
                            <span className="material-symbols-outlined text-sm transform group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </article>
                ))
            ) : (
                <div className="col-span-full text-center py-24 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">search_off</span>
                  <p className="font-headline font-bold text-lg text-primary">{t.blogPage.noInsights}</p>
                  <p className="text-on-surface-variant text-sm">{t.blogPage.tryAdjusting}</p>
                </div>
            )}
          </section>
        </FadeIn>

        {/* Newsletter Section */}
        <FadeIn>
          <section className="relative bg-primary overflow-hidden rounded-2xl mb-20 mx-auto">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-on-tertiary-container rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[80px]"></div>
            </div>
            <div className="relative px-8 py-20 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-center lg:text-left">
                    <span className="font-label text-xs uppercase tracking-widest text-tertiary-fixed mb-4 inline-block">{t.blogPage.newsletterTag}</span>
                    <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-white mb-4">{t.blogPage.newsletterTitle}</h2>
                    <p className="font-body text-slate-300 text-lg leading-relaxed">{t.blogPage.newsletterDesc}</p>
                </div>
                <div className="w-full max-w-md">
                    <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder={t.blogPage.emailPlaceholder} className="flex-grow bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white font-body placeholder:text-white/40 focus:bg-white/20 focus:ring-2 focus:ring-on-tertiary-container transition-all outline-none" required />
                        <button type="submit" className="bg-on-tertiary-container text-white font-headline font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all whitespace-nowrap shadow-lg">{t.blogPage.subscribeBtn}</button>
                    </form>
                    <p className="font-label text-[10px] text-white/40 mt-4 text-center lg:text-left">{t.blogPage.dataEthicsPolicy}</p>
                </div>
            </div>
          </section>
        </FadeIn>

        {/* Secondary Grid (More Articles) */}
        <FadeIn>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
             {blogPosts.slice(1, 3).map((post) => (
                <div key={post.id} className="bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-outline-variant/10">
                    <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-lg">
                        <img 
                            src={`https://api.dicebear.com/7.x/shapes/svg?seed=${post.id}&backgroundColor=002147`} 
                            alt={post.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <span className="font-label text-[10px] uppercase tracking-widest text-on-tertiary-fixed-variant bg-tertiary-fixed px-2 py-1 rounded">{post.category}</span>
                        <h4 className="font-headline text-xl font-bold text-primary mt-3 mb-2 group-hover:text-secondary transition-colors line-clamp-2">{post.title}</h4>
                        <p className="font-body text-sm text-on-surface-variant mb-4 line-clamp-2">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest flex items-center gap-1 hover:text-primary transition-colors">
                            {t.blogPage.readArticle} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
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