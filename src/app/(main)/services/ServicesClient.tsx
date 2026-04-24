"use client";

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function ServicesContent() {
  const { t } = useLanguage();
  return (
    <main className="pt-24 font-body">
      
      {/* Hero Section - Split Hero */}
      <FadeIn>
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#111827]">
          <div className="absolute inset-0 opacity-20">
            <img 
              className="w-full h-full object-cover" 
              alt="Tech visualization" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuQyIFL8A3nBg5h0cgZnMCaPi55zAUzwFxOkBoWHdqs01lW0RbbIWLjXAPewLyZ6TsgaEvn7qGIF1MCroqRmCrxvZRc7aM5z6VywNmZmfSkMNKRPLE7n2U_GMg4Q72wrEh0I8s9N2xtLWvj_vuLsZqzV3g_ehFAOief4tKmz37Rfqh8cnD7WW6vT9bRdduGGuynZtedV6N6tXVrT_1DYDoTlofMybr56R_t3VCioqPi0kGTshXy9lEGDMveXrXtz2ODmgjuXqEsKaw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/90 to-[#111827]/60"></div>
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
                  <span className="font-label text-tertiary-fixed text-xs font-bold uppercase tracking-widest">{t.services.innovationArchitecture}</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                  {t.services.ourExpertise}
                </h1>
                <p className="font-body text-on-primary-container text-lg md:text-xl max-w-xl leading-relaxed">
                  From Silicon Mountain to the world — we deliver AI-powered solutions, custom software, and OHADA-compliant ERP systems trusted by 1000+ businesses across Africa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
                    {t.services.getQuote} <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                  <Link href="/portfolio" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
                    {t.services.viewPortfolio}
                  </Link>
                </div>
                <div className="flex items-center gap-8 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-3xl font-bold font-headline text-white">1000+</p>
                    <p className="text-xs font-label uppercase text-white/60">Businesses Served</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline text-white">75%</p>
                    <p className="text-xs font-label uppercase text-white/60">Recommendation Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline text-white">6+</p>
                    <p className="text-xs font-label uppercase text-white/60">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-8 bg-secondary/20 rounded-full blur-3xl"></div>
                  <div className="relative grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                      <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-4 block">neurology</span>
                      <p className="font-bold text-white text-lg">AI & Data</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all mt-8">
                      <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">code</span>
                      <p className="font-bold text-white text-lg">Software</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                      <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4 block">cloud</span>
                      <p className="font-bold text-white text-lg">Cloud IT</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all mt-8">
                      <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4 block">school</span>
                      <p className="font-bold text-white text-lg">Training</p>
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

      {/* Service Categories (Bento Grid Style) */}
      <FadeIn>
          <section className="py-24 bg-surface">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                      {/* Data Science & AI */}
                      <Link href="/services/data-ai" className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                          <div>
                              <div className="flex items-center gap-3 mb-8">
                                  <span className="material-symbols-outlined text-on-tertiary-container text-4xl">neurology</span>
                                  <h2 className="font-headline text-3xl font-bold text-primary group-hover:text-secondary transition-colors">Data Science &amp; AI</h2>
                              </div>
                              <p className="font-body text-on-surface-variant text-lg mb-8 max-w-xl">
                                  Turn your data into decisions. We build machine learning models and AI solutions that solve real business problems across Africa.
                              </p>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-secondary">psychology</span>
                                      <span className="font-label text-xs uppercase tracking-wider font-bold">Machine Learning</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-secondary">insights</span>
                                      <span className="font-label text-xs uppercase tracking-wider font-bold">Predictive Analytics</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                                      <span className="font-label text-xs uppercase tracking-wider font-bold">Generative AI</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-secondary">analytics</span>
                                      <span className="font-label text-xs uppercase tracking-wider font-bold">Business Intelligence</span>
                                  </div>
                              </div>
                          </div>
                      </Link>

                      {/* OHADA Solutions (Solafide) */}
                      <Link href="/services/ohada-solutions" className="md:col-span-4 bg-primary-container p-10 rounded-xl flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all">
                          <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                  <span className="material-symbols-outlined text-tertiary-fixed text-4xl">account_balance</span>
                                  <h2 className="font-headline text-3xl font-bold text-white group-hover:text-tertiary-fixed transition-colors">OHADA Solutions</h2>
                              </div>
                              <p className="font-body text-primary-fixed-dim text-md mb-10">
                                  Africa's First AI-Powered OHADA-Compliant ERP. Trusted by 1000+ businesses across the continent.
                              </p>
                              <ul className="space-y-4">
                                  <li className="flex items-center gap-3 text-white">
                                      <span className="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>
                                      <span className="font-body font-semibold">Solafide ERP</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-white">
                                      <span className="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>
                                      <span className="font-body font-semibold">Accounting &amp; Finance</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-white">
                                      <span className="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>
                                      <span className="font-body font-semibold">Inventory Management</span>
                                  </li>
                              </ul>
                          </div>
                      </Link>

                      {/* Software Development */}
                      <Link href="/services/software-development" className="md:col-span-4 bg-surface-container-high p-10 rounded-xl group hover:shadow-md transition-all border border-transparent hover:border-outline-variant/30">
                          <div className="flex items-center gap-3 mb-6">
                              <span className="material-symbols-outlined text-on-tertiary-container text-4xl">code</span>
                              <h2 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Software Development</h2>
                          </div>
                          <p className="font-body text-on-surface-variant text-md mb-8">
                              Custom web and mobile applications built with modern frameworks. From startups to enterprises — we engineer solutions that scale.
                          </p>
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                              <h4 className="font-label text-xs font-bold text-on-tertiary-container uppercase mb-2">Focus Areas</h4>
                              <p className="font-body text-sm text-primary font-semibold">Web Apps, Mobile Apps, Cloud Infrastructure</p>
                          </div>
                      </Link>

                      {/* Tech Training */}
                      <Link href="/training" className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/15 flex gap-10 items-center group hover:shadow-lg transition-all">
                          <div className="flex-1">
                              <div className="flex items-center gap-3 mb-6">
                                  <span className="material-symbols-outlined text-on-tertiary-container text-4xl">school</span>
                                  <h2 className="font-headline text-3xl font-bold text-primary group-hover:text-secondary transition-colors">Ferdsilinks Academy</h2>
                              </div>
                              <p className="font-body text-on-surface-variant text-lg mb-6 max-w-xl">
                                  Train the next generation of African tech talent. Data science, software development, AI — from beginner to professional programs.
                              </p>
                              <span className="font-label text-sm font-bold text-secondary flex items-center gap-2">
                                  Explore Training <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                              </span>
                          </div>
                          <div className="hidden md:block w-48 h-48 rounded-xl overflow-hidden shadow-xl bg-surface-container-high">
                              <img alt="Ferdsilinks Academy Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply" src="https://api.dicebear.com/7.x/shapes/svg?seed=academy&backgroundColor=006a6a" />
</div>
            </Link>
          </div>
        </div>
      </section>
    </FadeIn>
    
    {/* Featured Services from Admin */}
    <FadeIn>
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-3xl font-bold text-primary mb-8">All Our Services</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-on-tertiary-container text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all">
            <span>Request a Quote</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>
    </FadeIn>

    </main>
  );
}
