"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { useLanguage } from '@/components/LanguageProvider';
import { serviceCategories } from '@/data/services';
import { courses } from '@/data/training';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  cover_image: string | null;
  author_name: string;
  published_at: string;
}

export default function Home() {
  const { t } = useLanguage();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const res = await fetch('/api/public/blog');
        const data = await res.json();
        setBlogPosts(data.posts || []);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogPosts();
  }, []);

  return (
    <main className="bg-surface font-body text-on-surface architect-grid selection:bg-tertiary-fixed selection:text-on-tertiary-fixed-variant">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="font-label text-sm uppercase tracking-widest text-on-tertiary-container mb-6 block font-bold">{t.hero.innovationHub}</span>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary leading-[1.1] mb-8 tracking-tighter">
              {t.hero.empoweringAfrica} <span className="text-on-tertiary-container">{t.hero.digitalFuture}</span> {t.hero.withData}
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-on-tertiary-container/20 hover:-translate-y-1 transition-transform inline-block text-center">
                {t.hero.getQuote}
              </Link>
              <Link href="/training" className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-colors inline-block text-center">
                {t.hero.exploreTraining}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary/30 rounded-full blur-[100px] opacity-20 -z-10"></div>
            <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary-container/10 aspect-video lg:aspect-square relative group">
              <img alt="Ferdsilinks Team - Data Science & AI Experts" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop"/>
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-2xl flex items-center gap-4 z-20">
              <div className="w-12 h-12 bg-[#cf7000] rounded-full flex items-center justify-center text-white font-bold text-xl drop-shadow-lg">
                +
              </div>
              <div>
                <p className="font-headline font-black text-2xl text-primary leading-none mb-1">50+</p>
                <p className="font-label text-xs uppercase text-on-surface-variant tracking-wider font-bold">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Bar */}
      <FadeIn>
        <section className="bg-surface-container-low py-12">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center font-label text-xs uppercase tracking-widest text-on-surface-variant/60 mb-8 font-bold">Trusted by Clients Across Cameroon &amp; Central Africa</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-headline font-black text-2xl tracking-tighter">CAMEROON TECH</span>
              <span className="font-headline font-black text-2xl tracking-tighter">CEMAC BUSINESS</span>
              <span className="font-headline font-black text-2xl tracking-tighter">BUEA STARTUPS</span>
              <span className="font-headline font-black text-2xl tracking-tighter">SILICON MTN</span>
              <span className="font-headline font-black text-2xl tracking-tighter">AFRIKA TECH</span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Stats Section */}
      <FadeIn>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-headline font-extrabold text-5xl text-on-tertiary-container mb-2 tracking-tighter">2019</div>
              <div className="font-label text-sm uppercase font-bold text-on-surface-variant">{t.stats.yearsExperience}</div>
            </div>
            <div className="text-center">
              <div className="font-headline font-extrabold text-5xl text-on-tertiary-container mb-2 tracking-tighter">50+</div>
              <div className="font-label text-sm uppercase font-bold text-on-surface-variant">{t.stats.successfulProjects}</div>
            </div>
            <div className="text-center">
              <div className="font-headline font-extrabold text-5xl text-on-tertiary-container mb-2 tracking-tighter">200+</div>
              <div className="font-label text-sm uppercase font-bold text-on-surface-variant">{t.stats.studentsTrained}</div>
            </div>
            <div className="text-center">
              <div className="font-headline font-extrabold text-5xl text-on-tertiary-container mb-2 tracking-tighter">98%</div>
              <div className="font-label text-sm uppercase font-bold text-on-surface-variant">{t.stats.clientSatisfaction}</div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Services Bento Grid */}
      <FadeIn>
        <section className="py-24 bg-surface-container-high/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="font-label text-sm uppercase tracking-widest text-on-tertiary-container font-bold mb-4 block">Our Expertise</span>
                <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary tracking-tighter">Architecting Data-Driven Solutions</h2>
              </div>
              <Link href="/services" className="text-secondary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                {t.services.allServices} <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* IT Services */}
              <Link href="/services/it-software" className="bg-surface-container-lowest p-10 rounded-xl border-l-4 border-on-tertiary-container shadow-sm hover:shadow-xl transition-shadow group">
                <div className="bg-tertiary-fixed w-16 h-16 rounded-lg flex items-center justify-center mb-8 text-on-tertiary-container">
                  <span className="material-symbols-outlined !text-4xl">cloud_sync</span>
                </div>
                <h3 className="font-headline font-bold text-2xl text-primary mb-4">{t.services.itSoftware}</h3>
                <p className="text-on-surface-variant mb-8">{t.services.itSoftwareDesc}</p>
                <span className="font-bold text-primary inline-flex items-center gap-2 group-hover:text-on-tertiary-container transition-colors">
                  {t.services.learnMore} <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </Link>

              {/* Data Science & AI - Featured Large Card */}
              <Link href="/services/data-ai" className="md:col-span-2 bg-primary-container p-10 rounded-xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-8 text-tertiary-fixed">
                    <span className="material-symbols-outlined !text-4xl">neurology</span>
                  </div>
                  <h3 className="font-headline font-bold text-3xl mb-4">{t.services.dataScience}</h3>
                  <p className="text-on-primary-container max-w-md text-lg mb-8">{t.services.dataScienceDesc}</p>
                  <span className="bg-on-tertiary-container text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity inline-block">
                    {t.services.exploreAILab}
                  </span>
                </div>
                <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                  <span className="material-symbols-outlined !text-[300px]">hub</span>
                </div>
              </Link>

              {/* Software Development */}
              <Link href="/services/it-software" className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex-1">
                    <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-8 text-secondary">
                      <span className="material-symbols-outlined !text-4xl">terminal</span>
                    </div>
                    <h3 className="font-headline font-bold text-2xl text-primary mb-4">{t.services.softwareDev}</h3>
                    <p className="text-on-surface-variant">{t.services.softwareDevDesc}</p>
                  </div>
                  <div className="flex-1 bg-surface-container-low rounded-lg p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
                        <span className="font-bold text-primary">Scalable Architecture</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
                        <span className="font-bold text-primary">Agile Methodology</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
                        <span className="font-bold text-primary">DevOps Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Consulting */}
              <Link href="/services/consulting-print" className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border-b-4 border-secondary hover:shadow-xl transition-all">
                <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-8 text-secondary">
                  <span className="material-symbols-outlined !text-4xl">query_stats</span>
                </div>
                <h3 className="font-headline font-bold text-2xl text-primary mb-4">{t.services.consulting}</h3>
                <p className="text-on-surface-variant mb-8">{t.services.consultingDesc}</p>
                <span className="font-bold text-primary inline-flex items-center gap-2 transition-colors">
                  {t.services.bookSession} <span className="material-symbols-outlined">chevron_right</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Featured Training */}
      <FadeIn>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-label text-sm uppercase tracking-widest text-secondary font-bold mb-4 block">{t.training.trainingHub}</span>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary tracking-tighter mb-6">{t.training.buildYourFuture}</h2>
              <p className="text-on-surface-variant text-lg">Elite professional courses led by industry practitioners in Cameroon&apos;s premier tech ecosystem.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Course 1 */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row h-full">
                <div className="w-full md:w-2/5 relative">
                  <img alt="Data Science Course" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKacQ7YvJjA5O92OMH98V5kR5hENVDFfEVTxwTABmG90ggettGszRZEpDlrcLN_nXNv4_xzSI8bDVt01n89DGrEFCBdNEI6wdk0rfjVn0Ge7PxU0BHNYP7ilMBOS9NvbJy7xvcN1qOswTfxh97G3B9X_OZ-Fp8j5LOIGrnPVtnyhKLb7cIrTYuB5jOOkooiQ3GPfi0Bv9TJ26Ro4-MKE-UlGsz6AJ8QW-X2ZxmQnIc_DHtwPeVUVQAvbith72Hej42PvZNwUDzGHkn"/>
                  <span className="absolute top-4 left-4 bg-on-tertiary-container text-white px-4 py-1 text-xs font-bold rounded-full uppercase tracking-tighter">Bestseller</span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline font-extrabold text-2xl text-primary mb-2">Mastering Data Science &amp; Big Data</h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-on-surface-variant font-medium">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 12 Weeks</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">groups</span> 15 Seats</span>
                    </div>
                    <p className="text-on-surface-variant mb-6 text-sm">Comprehensive hands-on training from Python basics to advanced predictive modeling.</p>
                  </div>
                  <Link href="/training/applied-data-science-bootcamp" className="w-full py-3 rounded-lg border-2 border-primary font-bold hover:bg-primary hover:text-white transition-all text-center">
                    {t.training.enrollNow}
                  </Link>
                </div>
              </div>

              {/* Course 2 */}
              <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row h-full">
                <div className="w-full md:w-2/5 relative">
                  <img alt="Fullstack Course" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD1WQ0o9FAX8U0RJO4tjzXa36dVjTumGot8-m5wVjInZpzlNWW-4YFUOq8wE2poHB5MMRxGvf-BbMwT_qm2RXafs6W_pLpqxXDtOMUHmonBzLkjL_TCSZ8otMgR1_0t8wPBVq3cjxH0i-_Yhc2jqThe0ReatWvVZ2hR36MT88DygQNHAiQbpq7tgDJPEBSwPY8AVYCjFjO0ZtbFV6Cw7us0GC2sxjhGSxlY-BCyl2hHyRwrIkEtgxvclpG-b2u0dnjYN21DwBkt8Kn"/>
                  <span className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 text-xs font-bold rounded-full uppercase tracking-tighter">New Course</span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline font-extrabold text-2xl text-primary mb-2">Advanced Fullstack Development</h3>
                    <div className="flex items-center gap-4 mb-4 text-sm text-on-surface-variant font-medium">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 16 Weeks</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">layers</span> Project-Based</span>
                    </div>
                    <p className="text-on-surface-variant mb-6 text-sm">Build production-ready applications using React, Node.js, and modern DevOps tools.</p>
                  </div>
                  <Link href="/training/fullstack-nextjs-engineering" className="w-full py-3 rounded-lg border-2 border-primary font-bold hover:bg-primary hover:text-white transition-all text-center">
                    {t.training.enrollNow}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Podcast Feature */}
      <FadeIn>
        <section className="py-24 bg-[#111827] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-on-tertiary-container via-transparent to-transparent"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-video bg-primary-container rounded-xl flex items-center justify-center border border-white/10 group cursor-pointer relative overflow-hidden">
                  <img alt="Silicon Mountain Pulse Podcast" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=450&fit=crop"/>
                  <div className="w-20 h-20 bg-on-tertiary-container rounded-full flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined !text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="font-label text-sm uppercase tracking-widest text-on-tertiary-container font-bold mb-6 block">{t.podcast.newEpisode}</span>
                <h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-6 tracking-tighter leading-tight">{t.podcast.africanAI} <span className="text-on-tertiary-container">{t.podcast.renaissance}</span></h2>
                <p className="text-on-primary-container text-lg mb-10 leading-relaxed">Join CEO Tingom Ferdinand as he discusses data science, AI innovation, and building tech solutions from Cameroon&apos;s Silicon Mountain.</p>
                <div className="flex items-center gap-6">
                  <Link href="/podcast" className="bg-white text-primary px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-tertiary-fixed transition-colors">
                    <span className="material-symbols-outlined">podcasts</span> {t.podcast.listenNow}
                  </Link>
                  <span className="text-white/40 font-label text-sm font-bold uppercase tracking-widest">SEASON 1 &bull; 45 MINS</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Blog Posts */}
      <FadeIn>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tighter">{t.blog.latestFromLab}</h2>
              <Link href="/blog" className="text-secondary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                {t.blog.viewAllPosts} <span className="material-symbols-outlined">trending_flat</span>
              </Link>
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="aspect-[16/10] bg-surface-container-high rounded-xl mb-6"></div>
                    <div className="h-4 bg-surface-container-high rounded w-20 mb-3"></div>
                    <div className="h-6 bg-surface-container-high rounded w-full mb-2"></div>
                    <div className="h-6 bg-surface-container-high rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-surface-container-high rounded w-full"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="group">
                    <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6">
                      <img 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        src={post.cover_image || `https://api.dicebear.com/7.x/shapes/svg?seed=${post.id}&backgroundColor=002147`}
                      />
                    </div>
                    <span className="text-on-tertiary-container font-label text-xs font-bold uppercase mb-3 block tracking-widest">{post.category}</span>
                    <h3 className="font-headline font-bold text-xl text-primary mb-4 group-hover:text-secondary transition-colors">{post.title}</h3>
                    <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="text-primary font-bold text-sm underline decoration-on-tertiary-container decoration-2 underline-offset-4">{t.blog.readArticle}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </FadeIn>

      {/* Testimonials */}
      <FadeIn>
        <section className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div>
                <h2 className="font-headline font-extrabold text-4xl text-primary tracking-tighter mb-6 leading-tight">{t.testimonials.storiesImpact}</h2>
                <p className="text-on-surface-variant mb-8">{t.testimonials.directFeedback}</p>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined">west</span>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined">east</span>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                  <div className="flex text-on-tertiary-container mb-6">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-primary font-medium italic mb-8 leading-relaxed">&quot;Ferdsilinks transformed how we use data. Their team built a predictive analytics system that helped us reduce costs by 30% in just 6 months.&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-fixed overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Client" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <div className="font-bold text-primary">Business Executive</div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Yaoundé, Cameroon</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
                  <div className="flex text-on-tertiary-container mb-6">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="text-primary font-medium italic mb-8 leading-relaxed">&quot;The training program gave me practical skills I use every day. From zero experience to landing my first tech job in Douala - all thanks to Ferdsilinks.&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-tertiary-fixed overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="Graduate" className="w-full h-full object-cover"/>
                    </div>
                    <div>
                      <div className="font-bold text-primary">Training Graduate</div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Software Developer, Douala</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Lead Capture Section */}
      <FadeIn>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-on-tertiary-container opacity-10 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary opacity-10 rounded-full blur-[80px]"></div>
              <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-white tracking-tighter mb-6 relative z-10">{t.cta.readyToTransform}</h2>
              <p className="text-on-primary-container text-lg mb-12 max-w-2xl mx-auto relative z-10">{t.cta.studentOrCEO}</p>
              <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4 relative z-10">
                <input className="flex-1 bg-white/10 border-0 text-white placeholder:text-on-primary-container rounded-lg px-6 py-4 focus:ring-2 focus:ring-on-tertiary-container" placeholder={t.cta.enterEmail} type="email"/>
                <button className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity whitespace-nowrap">{t.cta.joinNetwork}</button>
              </form>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/237676817339" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-[100] group"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.893-11.893 11.893-2.007 0-3.974-.509-5.718-1.472l-6.275 1.69zm6.114-3.814c1.553.921 3.09 1.398 4.735 1.398 5.404 0 9.801-4.397 9.801-9.802 0-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.311-2.872-6.93-2.872-5.405 0-9.803 4.398-9.803 9.802 0 1.794.493 3.547 1.427 5.07l-.95 3.473 3.621-.939zm12.164-10.741c-.244-.122-1.442-.711-1.666-.793-.224-.082-.387-.122-.55.122-.163.244-.633.793-.773.957-.142.163-.284.183-.528.061-.244-.122-1.028-.38-1.958-1.21-.724-.647-1.213-1.446-1.355-1.69-.142-.244-.015-.376.107-.497.111-.11.244-.285.366-.427.122-.143.163-.244.244-.407.082-.163.041-.305-.02-.427-.061-.122-.55-1.324-.753-1.812-.198-.475-.399-.411-.55-.419-.142-.007-.305-.008-.468-.008s-.427.061-.65.285c-.224.224-.854.835-.854 2.036 0 1.201.875 2.361 1.002 2.53.122.163 1.722 2.628 4.171 3.687.583.252 1.037.403 1.392.516.585.186 1.119.16 1.541.098.47-.07 1.442-.589 1.646-1.159.204-.57.204-1.058.142-1.159-.061-.1-.224-.163-.468-.285z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-primary text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat with us</span>
      </a>

    </main>
  );
}
