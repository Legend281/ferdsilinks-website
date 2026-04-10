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
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
          <div className="absolute inset-0 opacity-20">
            <img 
              className="w-full h-full object-cover" 
              alt="Tech visualization" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuQyIFL8A3nBg5h0cgZnMCaPi55zAUzwFxOkBoWHdqs01lW0RbbIWLjXAPewLyZ6TsgaEvn7qGIF1MCroqRmCrxvZRc7aM5z6VywNmZmfSkMNKRPLE7n2U_GMg4Q72wrEh0I8s9N2xtLWvj_vuLsZqzV3g_ehFAOief4tKmz37Rfqh8cnD7WW6vT9bRdduGGuynZtedV6N6tXVrT_1DYDoTlofMybr56R_t3VCioqPi0kGTshXy9lEGDMveXrXtz2ODmgjuXqEsKaw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
                  <span className="font-label text-tertiary-fixed text-xs font-bold uppercase tracking-widest">{t.servicesPage.innovationArchitecture}</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                  {t.servicesPage.ourExpertise}
                </h1>
                <p className="font-body text-on-primary-container text-lg md:text-xl max-w-xl leading-relaxed">
                  {t.servicesPage.heroDesc}
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
                    <p className="text-xs font-label uppercase text-white/60">{t.servicesPage.stats.businesses}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline text-white">75%</p>
                    <p className="text-xs font-label uppercase text-white/60">{t.servicesPage.stats.rate}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold font-headline text-white">6+</p>
                    <p className="text-xs font-label uppercase text-white/60">{t.servicesPage.stats.experience}</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-8 bg-secondary/20 rounded-full blur-3xl"></div>
                  <div className="relative grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                      <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-4 block">neurology</span>
                      <p className="font-bold text-white text-lg">{t.servicesPage.categories.aiData}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all mt-8">
                      <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">code</span>
                      <p className="font-bold text-white text-lg">{t.servicesPage.categories.software}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                      <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4 block">cloud</span>
                      <p className="font-bold text-white text-lg">{t.servicesPage.categories.cloudIT}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all mt-8">
                      <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4 block">school</span>
                      <p className="font-bold text-white text-lg">{t.servicesPage.categories.training}</p>
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
                                  <h2 className="font-headline text-3xl font-bold text-primary group-hover:text-secondary transition-colors">{t.servicesPage.categories.aiData}</h2>
                              </div>
                              <p className="font-body text-on-surface-variant text-lg mb-8 max-w-xl">
                                  {t.servicesPage.dataScience.desc}
                              </p>
                              <div className="grid grid-cols-2 gap-4">
                                  <div className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-secondary">psychology</span>
                                      <span className="font-label text-xs uppercase tracking-wider font-bold">{t.servicesPage.dataScience.ml}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-secondary">insights</span>
                                      <span className="font-label text-xs uppercase tracking-wider font-bold">{t.servicesPage.dataScience.predictive}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-secondary">auto_awesome</span>
                                      <span className="font-label text-xs uppercase tracking-wider font-bold">{t.servicesPage.dataScience.genAi}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <span className="material-symbols-outlined text-secondary">analytics</span>
                                      <span className="font-label text-xs uppercase tracking-wider font-bold">{t.servicesPage.dataScience.bi}</span>
                                  </div>
                              </div>
                          </div>
                      </Link>

                      {/* OHADA Solutions (Solafide) */}
                      <Link href="/services/ohada-solutions" className="md:col-span-4 bg-primary-container p-10 rounded-xl flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all">
                          <div className="relative z-10">
                              <div className="flex items-center gap-3 mb-6">
                                  <span className="material-symbols-outlined text-tertiary-fixed text-4xl">account_balance</span>
                                  <h2 className="font-headline text-3xl font-bold text-white group-hover:text-tertiary-fixed transition-colors">{t.servicesPage.ohada.title}</h2>
                              </div>
                              <p className="font-body text-primary-fixed-dim text-md mb-10">
                                  {t.servicesPage.ohada.desc}
                              </p>
                              <ul className="space-y-4">
                                  <li className="flex items-center gap-3 text-white">
                                      <span className="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>
                                      <span className="font-body font-semibold">{t.servicesPage.ohada.erp}</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-white">
                                      <span className="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>
                                      <span className="font-body font-semibold">{t.servicesPage.ohada.finance}</span>
                                  </li>
                                  <li className="flex items-center gap-3 text-white">
                                      <span className="material-symbols-outlined text-tertiary-fixed text-sm">check_circle</span>
                                      <span className="font-body font-semibold">{t.servicesPage.ohada.inventory}</span>
                                  </li>
                              </ul>
                          </div>
                      </Link>

                      {/* Software Development */}
                      <Link href="/services/software-development" className="md:col-span-4 bg-surface-container-high p-10 rounded-xl group hover:shadow-md transition-all border border-transparent hover:border-outline-variant/30">
                          <div className="flex items-center gap-3 mb-6">
                              <span className="material-symbols-outlined text-on-tertiary-container text-4xl">code</span>
                              <h2 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">{t.servicesPage.softwareDev.title}</h2>
                          </div>
                          <p className="font-body text-on-surface-variant text-md mb-8">
                              {t.servicesPage.softwareDev.desc}
                          </p>
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                              <h4 className="font-label text-xs font-bold text-on-tertiary-container uppercase mb-2">{t.servicesPage.softwareDev.focus}</h4>
                              <p className="font-body text-sm text-primary font-semibold">{t.servicesPage.softwareDev.focusItems}</p>
                          </div>
                      </Link>

                      {/* Tech Training */}
                      <Link href="/training" className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/15 flex gap-10 items-center group hover:shadow-lg transition-all">
                          <div className="flex-1">
                              <div className="flex items-center gap-3 mb-6">
                                  <span className="material-symbols-outlined text-on-tertiary-container text-4xl">school</span>
                                  <h2 className="font-headline text-3xl font-bold text-primary group-hover:text-secondary transition-colors">{t.servicesPage.academy.title}</h2>
                              </div>
                              <p className="font-body text-on-surface-variant text-lg mb-6 max-w-xl">
                                  {t.servicesPage.academy.desc}
                              </p>
                              <span className="font-label text-sm font-bold text-secondary flex items-center gap-2">
                                  {t.servicesPage.academy.explore} <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
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

      {/* Our Process */}
      <FadeIn>
          <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="text-center mb-20">
                      <span className="font-label text-on-tertiary-container tracking-widest uppercase text-sm font-bold">{t.servicesPage.process.blueprint}</span>
                      <h2 className="font-headline text-4xl md:text-5xl font-black text-primary mt-4 tracking-tight">{t.servicesPage.process.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
                      {/* Connector Line (Desktop) */}
                      <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-outline-variant/30 -z-10"></div>
                      
                      {/* Step 1 */}
                      <div className="flex flex-col items-center text-center group">
                          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-surface-container-low group-hover:border-on-tertiary-container transition-all duration-300 mb-6 relative">
                              <span className="absolute -top-2 -right-2 bg-on-tertiary-container text-white text-xs font-bold px-2 py-1 rounded">01</span>
                              <span className="material-symbols-outlined text-on-tertiary-container text-3xl">search</span>
                          </div>
                          <h3 className="font-headline text-xl font-bold text-primary mb-3">{t.servicesPage.process.discovery}</h3>
                          <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t.servicesPage.process.discoveryDesc}</p>
                      </div>
                      
                      {/* Step 2 */}
                      <div className="flex flex-col items-center text-center group">
                          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-surface-container-low group-hover:border-on-tertiary-container transition-all duration-300 mb-6 relative">
                              <span className="absolute -top-2 -right-2 bg-on-tertiary-container text-white text-xs font-bold px-2 py-1 rounded">02</span>
                              <span className="material-symbols-outlined text-on-tertiary-container text-3xl">architecture</span>
                          </div>
                          <h3 className="font-headline text-xl font-bold text-primary mb-3">{t.servicesPage.process.strategy}</h3>
                          <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t.servicesPage.process.strategyDesc}</p>
                      </div>
                      
                      {/* Step 3 */}
                      <div className="flex flex-col items-center text-center group">
                          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-surface-container-low group-hover:border-on-tertiary-container transition-all duration-300 mb-6 relative">
                              <span className="absolute -top-2 -right-2 bg-on-tertiary-container text-white text-xs font-bold px-2 py-1 rounded">03</span>
                              <span className="material-symbols-outlined text-on-tertiary-container text-3xl">code</span>
                          </div>
                          <h3 className="font-headline text-xl font-bold text-primary mb-3">{t.servicesPage.process.implementation}</h3>
                          <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t.servicesPage.process.implementationDesc}</p>
                      </div>
                      
                      {/* Step 4 */}
                      <div className="flex flex-col items-center text-center group">
                          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-surface-container-low group-hover:border-on-tertiary-container transition-all duration-300 mb-6 relative">
                              <span className="absolute -top-2 -right-2 bg-on-tertiary-container text-white text-xs font-bold px-2 py-1 rounded">04</span>
                              <span className="material-symbols-outlined text-on-tertiary-container text-3xl">speed</span>
                          </div>
                          <h3 className="font-headline text-xl font-bold text-primary mb-3">{t.servicesPage.process.optimization}</h3>
                          <p className="font-body text-sm text-on-surface-variant leading-relaxed">{t.servicesPage.process.optimizationDesc}</p>
                      </div>
                  </div>
              </div>
          </section>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
          <section className="py-24">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                  <div className="bg-primary rounded-xl p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#002147] -z-10"></div>
                      <div className="absolute -right-24 -top-24 w-96 h-96 bg-on-tertiary-container/10 rounded-full blur-3xl"></div>
                      <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tighter">{t.servicesPage.cta.title}</h2>
                      <p className="font-body text-primary-fixed-dim text-lg mb-12 max-w-2xl leading-relaxed">
                          {t.servicesPage.cta.desc}
                      </p>
                      <div className="flex flex-col md:flex-row gap-4">
                          <Link href="/contact">
                              <button className="bg-on-tertiary-container text-white px-10 py-4 rounded-lg font-headline font-black text-lg transition-all duration-300 hover:shadow-xl hover:shadow-on-tertiary-container/20 hover:scale-[1.02] active:scale-95 w-full">
                                  {t.services.getQuote}
                              </button>
                          </Link>
                          <Link href="/contact">
                              <button className="border border-white/20 text-white px-10 py-4 rounded-lg font-headline font-black text-lg hover:bg-white/10 transition-all duration-300 w-full">
                                  {t.services.bookSession}
                              </button>
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
      </FadeIn>

    </main>
  );
}
