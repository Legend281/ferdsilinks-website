"use client";

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { courses } from '@/data/training';
import { useLanguage } from '@/components/LanguageProvider';

export default function TrainingHubPage() {
  const { t } = useLanguage();
  const [activeLevel, setActiveLevel] = useState<string>('All Levels');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const levels = [t.trainingPage.levels.all, t.trainingPage.levels.beginner, t.trainingPage.levels.intermediate, t.trainingPage.levels.advanced];

  const filteredCourses = courses.filter(course => {
    return activeLevel === t.trainingPage.levels.all || course.level === activeLevel;
  });

  return (
    <main className="min-h-screen pt-24 font-body">
      
      {/* Hero Section - Split Hero */}
      <FadeIn>
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary text-white mt-6 mb-12">
          <div className="absolute inset-0 opacity-40">
            <img 
              alt="Silicon Mountain Tech Hub" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpO9zYhEcGMgAYMktxWHb0nu-nconoqUqywSwULWpxGHEeJed0UjoFr0RksialLR5KNi2NwO-6xSMhFbNmCsGa7ZqscSjxy3qJ6zvkeyR4AVCJW7_ptyVT1df9BET4N-wrgxdY3L4JXEW5Qp8BjFyppPG58yvRYtzO11WiZieUXbt3ZZ53BsmQNax9cTXSy-Fcab48hxYbWBEa5jD6x32IonEOcLj8mKPVqG5hCo4NIx991afMsxyElWg6B4zDTS9OIdpjuBG3IG-T"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <span className="material-symbols-outlined text-tertiary-fixed text-sm">school</span>
                  <span className="font-label text-tertiary-fixed text-xs font-bold uppercase tracking-widest">{t.trainingPage.heroTag}</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                  {t.trainingPage.heroTitlePart1}<span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed to-on-tertiary-container">{t.trainingPage.heroTitlePart2}</span>
                </h1>
                <p className="text-lg md:text-xl text-on-primary-container max-w-xl leading-relaxed">
                  {t.trainingPage.heroDesc}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="#courses" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
                    {t.trainingPage.exploreBtn} <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                    {t.trainingPage.instructorsBtn}
                  </Link>
                </div>
                <div className="flex items-center gap-8 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-bold font-headline">{t.trainingPage.stats.alumniNum}</p>
                    <p className="text-xs font-label uppercase text-white/60">{t.trainingPage.stats.alumniLabel}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline">{t.trainingPage.stats.partnersNum}</p>
                    <p className="text-xs font-label uppercase text-white/60">{t.trainingPage.stats.partnersLabel}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline">{t.trainingPage.stats.hireNum}</p>
                    <p className="text-xs font-label uppercase text-white/60">{t.trainingPage.stats.hireLabel}</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-on-tertiary-container/20 rounded-full blur-3xl"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 rotate-3 hover:rotate-0 transition-transform duration-700">
                    <img 
                      alt="Tech Hub" 
                      className="w-full h-[450px] object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpO9zYhEcGMgAYMktxWHb0nu-nconoqUqywSwULWpxGHEeJed0UjoFr0RksialLR5KNi2NwO-6xSMhFbNmCsGa7ZqscSjxy3qJ6zvkeyR4AVCJW7_ptyVT1df9BET4N-wrgxdY3L4JXEW5Qp8BjFyppPG58yvRYtzO11WiZieUXbt3ZZ53BsmQNax9cTXSy-Fcab48hxYbWBEa5jD6x32IonEOcLj8mKPVqG5hCo4NIx991afMsxyElWg6B4zDTS9OIdpjuBG3IG-T"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-2xl flex items-center gap-4 border border-surface-container-high">
                    <div className="w-12 h-12 bg-on-tertiary-container rounded-full flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">trending_up</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-primary">{t.trainingPage.cohortStarts}</p>
                      <p className="text-xs text-on-surface-variant">{t.trainingPage.cohortDate}</p>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-tertiary-fixed p-4 rounded-lg shadow-xl">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-on-tertiary-fixed">workspace_premium</span>
                      <span className="font-label text-xs font-bold text-primary uppercase">{t.trainingPage.certifiedPrograms}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
            <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
          </div>
        </section>
      </FadeIn>

      {/* Course Filter & Grid */}
      <FadeIn>
        <section className="py-24 bg-surface px-8">
            <div className="container max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-xl">
                        <span className="font-label text-on-tertiary-container font-bold text-sm tracking-widest uppercase">{t.trainingPage.catalogTag}</span>
                        <h2 className="font-headline text-4xl font-extrabold text-primary-container mt-2">{t.trainingPage.catalogTitle}</h2>
                    </div>
                    <div className="flex bg-surface-container-high p-1 rounded-lg overflow-x-auto [scrollbar-width:none]">
                        {levels.map(level => (
                            <button 
                                key={level}
                                onClick={() => setActiveLevel(level)}
                                className={`px-6 py-2 rounded-md font-semibold text-sm transition-all whitespace-nowrap ${
                                    activeLevel === level 
                                        ? 'bg-white shadow-sm text-primary'
                                        : 'text-on-surface-variant hover:text-primary'
                                }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredCourses.length > 0 ? filteredCourses.map(course => (
                        <div key={course.id} className="group bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 transition-all hover:-translate-y-2 hover:shadow-xl flex flex-col">
                            <Link href={`/training/${course.slug}`}>
                                <div className="h-48 overflow-hidden rounded-t-xl relative">
                                    <img 
                                        alt={course.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                        src={`https://api.dicebear.com/7.x/shapes/svg?seed=${course.id}&backgroundColor=002147`} 
                                    />
                                    {course.level === 'Advanced' && (
                                        <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white text-[10px] font-label font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {t.trainingPage.topRated}
                                        </div>
                                    )}
                                </div>
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <Link href={`/training/${course.slug}`}>
                                    <h3 className="font-headline text-xl font-bold text-primary mb-2 line-clamp-2 min-h-[56px]">{course.title}</h3>
                                </Link>
                                <p className="text-sm text-on-surface-variant mb-6 flex-grow line-clamp-3">{course.short_description}</p>
                                <div className="flex items-center justify-between mb-6 pt-4 border-t border-surface-container-low">
                                    <div className="flex items-center gap-1 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        <span className="text-xs font-medium">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-on-surface-variant">
                                        <span className="material-symbols-outlined text-sm">bar_chart</span>
                                        <span className="text-xs font-medium">{course.level}</span>
                                    </div>
                                </div>
                                <Link href={`/training/${course.slug}`}>
                                    <button className="w-full bg-surface-container-high text-primary font-bold py-3 rounded-md group-hover:bg-on-tertiary-container group-hover:text-white transition-all">{t.trainingPage.enrollBtn}</button>
                                </Link>
                            </div>
                        </div>
                    )) : (
                        <div className="col-span-full text-center py-24 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                            <span className="material-symbols-outlined text-4xl text-outline-variant mb-2">search_off</span>
                            <p className="font-headline font-bold text-xl text-primary mt-4">{t.trainingPage.noCourses}</p>
                            <button onClick={() => setActiveLevel(t.trainingPage.levels.all)} className="mt-4 text-on-tertiary-container font-bold hover:underline">{t.trainingPage.clearFilters}</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
      </FadeIn>

      {/* Why Learn Section */}
      <FadeIn>
        <section className="py-24 bg-primary-container architect-grid relative">
            <div className="container max-w-[1440px] mx-auto px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 space-y-6">
                        <span className="font-label text-tertiary-fixed text-sm font-bold tracking-[0.2em] uppercase">{t.trainingPage.advantagesTag}</span>
                        <h2 className="font-headline text-4xl font-extrabold text-white leading-tight">{t.trainingPage.advantagesTitle}</h2>
                        <p className="text-on-primary-container text-lg leading-relaxed">{t.trainingPage.advantagesDesc}</p>
                        <div className="space-y-6 pt-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-lg"><span className="material-symbols-outlined text-[#cf7000]">groups</span></div>
                                <div><h4 className="text-white font-bold mb-1">{t.trainingPage.advantages.community}</h4><p className="text-sm text-on-primary-container">{t.trainingPage.advantages.communityDesc}</p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-lg"><span className="material-symbols-outlined text-[#cf7000]">psychology</span></div>
                                <div><h4 className="text-white font-bold mb-1">{t.trainingPage.advantages.experts}</h4><p className="text-sm text-on-primary-container">{t.trainingPage.advantages.expertsDesc}</p></div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-lg"><span className="material-symbols-outlined text-[#cf7000]">terminal</span></div>
                                <div><h4 className="text-white font-bold mb-1">{t.trainingPage.advantages.projectBased}</h4><p className="text-sm text-on-primary-container">{t.trainingPage.advantages.projectBasedDesc}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="bg-primary p-8 rounded-xl border border-white/5 shadow-2xl">
                                <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-4">workspace_premium</span>
                                <p className="text-white font-headline text-lg font-bold">{t.trainingPage.features.cert}</p>
                                <p className="text-xs text-on-primary-container mt-2">{t.trainingPage.features.certDesc}</p>
                            </div>
                            <div className="bg-primary/50 p-8 rounded-xl border border-white/5">
                                <span className="material-symbols-outlined text-4xl text-[#cf7000] mb-4">rocket_launch</span>
                                <p className="text-white font-headline text-lg font-bold">{t.trainingPage.features.career}</p>
                                <p className="text-xs text-on-primary-container mt-2">{t.trainingPage.features.careerDesc}</p>
                            </div>
                        </div>
                        <div className="space-y-4 sm:mt-8">
                            <div className="bg-primary/50 p-8 rounded-xl border border-white/5">
                                <span className="material-symbols-outlined text-4xl text-[#cf7000] mb-4">hub</span>
                                <p className="text-white font-headline text-lg font-bold">{t.trainingPage.features.hub}</p>
                                <p className="text-xs text-on-primary-container mt-2">{t.trainingPage.features.hubDesc}</p>
                            </div>
                            <div className="bg-primary p-8 rounded-xl border border-white/5 shadow-2xl">
                                <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-4">diversity_3</span>
                                <p className="text-white font-headline text-lg font-bold">{t.trainingPage.features.alumni}</p>
                                <p className="text-xs text-on-primary-container mt-2">{t.trainingPage.features.alumniDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </FadeIn>

      {/* Newsletter Section */}
      <FadeIn>
        <section className="py-24 bg-white px-8">
            <div className="container mx-auto max-w-4xl bg-surface-container-low rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl"></div>
                <div className="relative z-10 text-center space-y-6">
                    <span className="font-label text-on-tertiary-container font-bold text-sm tracking-widest uppercase">{t.trainingPage.newsletterTag}</span>
                    <h2 className="font-headline text-4xl font-extrabold text-primary">{t.trainingPage.newsletterTitle}</h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto">{t.trainingPage.newsletterDesc}</p>
                    
                    {newsletterStatus === 'success' && (
                      <div className="max-w-lg mx-auto p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center justify-center gap-2 text-green-700">
                          <span className="material-symbols-outlined">check_circle</span>
                          <span className="font-medium">{newsletterMessage}</span>
                        </div>
                      </div>
                    )}
                    
                    {newsletterStatus === 'error' && (
                      <div className="max-w-lg mx-auto p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center justify-center gap-2 text-red-700">
                          <span className="material-symbols-outlined">error</span>
                          <span className="font-medium">{newsletterMessage}</span>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setNewsletterStatus('loading');
                      setNewsletterMessage('');
                      
                      try {
                        const response = await fetch('/api/newsletter', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ email: newsletterEmail }),
                        });
                        
                        const result = await response.json();
                        
                        if (response.ok) {
                          setNewsletterStatus('success');
                          setNewsletterMessage(result.message || 'Successfully subscribed!');
                          setNewsletterEmail('');
                        } else {
                          setNewsletterStatus('error');
                          setNewsletterMessage(result.error || 'Something went wrong');
                        }
                      } catch {
                        setNewsletterStatus('error');
                        setNewsletterMessage('Network error. Please try again.');
                      }
                    }} className="flex flex-col sm:flex-row gap-4 mt-8 max-w-lg mx-auto">
                        <input 
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          className="flex-grow px-6 py-4 rounded-md bg-white border border-outline-variant focus:ring-2 focus:ring-secondary focus:outline-none transition-all" 
                          placeholder={t.trainingPage.emailPlaceholder} 
                          type="email" 
                          required 
                        />
                        <button 
                          disabled={newsletterStatus === 'loading'}
                          className="bg-on-tertiary-container text-white px-8 py-4 rounded-md font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg whitespace-nowrap disabled:opacity-50 flex items-center justify-center gap-2" 
                          type="submit"
                        >
                          {newsletterStatus === 'loading' ? (
                            <>
                              <span className="material-symbols-outlined animate-spin">progress_activity</span>
                            </>
                          ) : (
                            t.trainingPage.subscribeBtn
                          )}
                        </button>
                    </form>
                    <p className="text-[10px] text-on-surface-variant uppercase font-label tracking-tighter mt-4">{t.trainingPage.noSpam}</p>
                </div>
            </div>
        </section>
      </FadeIn>

    </main>
  );
}