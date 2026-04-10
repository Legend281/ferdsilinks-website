"use client";

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function PortfolioContent() {
  const { t } = useLanguage();
  const tp = t.portfolioPage;

  return (
    <main className="pt-24 space-y-4">
      
{/* Hero Section - Split Hero */}
<FadeIn>
  <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface">
    <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-surface-container-low/50"></div>
    <div className="absolute -right-20 top-20 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-3xl -z-10"></div>
    <div className="absolute -left-20 bottom-20 w-[400px] h-[400px] bg-on-tertiary-container/5 rounded-full blur-3xl -z-10"></div>
    
    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary-container/10 rounded-full border border-primary-container/20">
            <span className="material-symbols-outlined text-on-tertiary-container text-sm">architecture</span>
            <span className="font-label text-on-tertiary-container text-xs font-bold uppercase tracking-widest">{tp.heroTag}</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tighter leading-[1.05]">
            {tp.heroTitlePart1} <span className="text-on-tertiary-container">{tp.heroTitlePart2}</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            {tp.heroDesc}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#case-studies" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              {tp.caseStudiesBtn} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link href="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all">
              {tp.startProjectBtn}
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-primary-container p-8 rounded-2xl text-white space-y-4">
                <span className="material-symbols-outlined text-4xl text-tertiary-fixed">neurology</span>
                <p className="font-bold text-lg">{tp.categories.dataScienceTitle}</p>
                <p className="text-sm text-white/70">{tp.categories.dataScienceDesc}</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 mt-8">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">code</span>
                <p className="font-bold text-lg text-primary">{tp.categories.softwareTitle}</p>
                <p className="text-sm text-on-surface-variant">{tp.categories.softwareDesc}</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4 block">cloud</span>
                <p className="font-bold text-lg text-primary">{tp.categories.cloudTitle}</p>
                <p className="text-sm text-on-surface-variant">{tp.categories.cloudDesc}</p>
              </div>
              <div className="bg-primary-container p-8 rounded-2xl text-white mt-8">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4 block">analytics</span>
                <p className="font-bold text-lg">{tp.categories.analyticsTitle}</p>
                <p className="text-sm text-white/70">{tp.categories.analyticsDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</FadeIn>
{/* Case Studies Bento Grid */}
<FadeIn><section id="case-studies" className="px-8 py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Featured Card - Solafide */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-2xl transition-all duration-500">
<div className="aspect-[16/9] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Solafide ERP Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhOhWGD42-Nbnb0WUyVaG2e4Ri9smjO9lfEAARXcamQam6_15CvL5Af9LK9ct6KcAHr3IfFy34k12mxbqvPMjPw72Bl62pQtcN3RdmnMJl_igQn4dSGWdnkTTI17kOMwFmxKVtmLFL3mcoT-5dqCVm8mbbExnXsjdm6QfvREb3xDSSIFnu6V5irNWBcB4Bdc8hhALtG0tOgDYh4ErUWu-fjISREqG9iCokLgp-nSMNvMSYl2RzU7mg4oV1sOP1HFKb8VrXjjGr-wzl"/>
</div>
<div className="p-8">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">{tp.featuredTitle}</span>
<h3 className="mt-3 font-headline text-3xl font-bold text-primary tracking-tight">{tp.featuredName}</h3>
<p className="mt-4 text-on-surface-variant max-w-xl">{tp.featuredDesc}</p>
<div className="mt-4 flex flex-wrap gap-3">
<span className="px-3 py-1 bg-primary-container/20 text-on-tertiary-container text-xs font-bold rounded-full">{tp.tags.ohada}</span>
<span className="px-3 py-1 bg-primary-container/20 text-on-tertiary-container text-xs font-bold rounded-full">{tp.tags.ai}</span>
<span className="px-3 py-1 bg-primary-container/20 text-on-tertiary-container text-xs font-bold rounded-full">{tp.tags.businesses}</span>
</div>
<Link className="mt-6 inline-flex items-center gap-2 text-on-tertiary-container font-bold group/link" href="https://solafideonline.com" target="_blank">
                        {tp.visitSite} 
                        <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
{/* Small Card 1 - Data Science */}
<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-2xl transition-all duration-500">
<div className="aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Data Science" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeMjXdve5Ka1li_Vy7sDF0vcB30sQa6Ur_dDdECGDIOzsFgOk-JNFCfckf-R4XhnL1HILMAfubypKayPOvTZtoBMRcqBj-l9LnSPLANXZSffQptQp3_J3EEAjTmnI9NgwSbxkFnJ1OdADaoRPfBmETaV7N92NUtNL1mU5Zv9F-XW227WhPz1Ka_PIF7HjKe1BXJBK-n3fcSpGV1TE_WjBdMs6pldKlOEdvgGDN55P3ZSHFofFG7_us8oLEp46Yraf2upj7Om8AOsaE"/>
</div>
<div className="p-6">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">{tp.card1.category}</span>
<h3 className="mt-3 font-headline text-xl font-bold text-primary tracking-tight leading-tight">{tp.card1.title}</h3>
<p className="mt-2 text-on-surface-variant text-sm">{tp.card1.desc}</p>
<Link className="mt-4 inline-flex items-center gap-2 text-on-tertiary-container font-bold text-sm" href="/services">
                        {tp.card1.link} 
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
{/* Small Card 2 - WiDS Partnership */}
<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-2xl transition-all duration-500">
<div className="aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="WiDS Cameroon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuQyIFL8A3nBg5h0cgZnMCaPi55zAUzwFxOkBoWHdqs01lW0RbbIWLjXAPewLyZ6TsgaEvn7qGIF1MCroqRmCrxvZRc7aM5z6VywNmZmfSkMNKRPLE7n2U_GMg4Q72wrEh0I8s9N2xtLWvj_vuLsZqzV3g_ehFAOief4tKmz37Rfqh8cnD7WW6vT9bRdduGGuynZtedV6N6tXVrT_1DYDoTlofMybr56R_t3VCioqPi0kGTshXy9lEGDMveXrXtz2ODmgjuXqEsKaw"/>
</div>
<div className="p-6">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">{tp.card2.category}</span>
<h3 className="mt-3 font-headline text-xl font-bold text-primary tracking-tight leading-tight">{tp.card2.title}</h3>
<p className="mt-2 text-on-surface-variant text-sm">{tp.card2.desc}</p>
<Link className="mt-4 inline-flex items-center gap-2 text-on-tertiary-container font-bold text-sm" href="/training">
                        {tp.card2.link} 
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
{/* Small Card 3 - Tech Training */}
<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-2xl transition-all duration-500">
<div className="aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Training Programs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhOhWGD42-Nbnb0WUyVaG2e4Ri9smjO9lfEAARXcamQam6_15CvL5Af9LK9ct6KcAHr3IfFy34k12mxbqvPMjPw72Bl62pQtcN3RdmnMJl_igQn4dSGWdnkTTI17kOMwFmxKVtmLFL3mcoT-5dqCVm8mbbExnXsjdm6QfvREb3xDSSIFnu6V5irNWBcB4Bdc8hhALtG0tOgDYh4ErUWu-fjISREqG9iCokLgp-nSMNvMSYl2RzU7mg4oV1sOP1HFKb8VrXjjGr-wzl"/>
</div>
<div className="p-6">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">{tp.card3.category}</span>
<h3 className="mt-3 font-headline text-xl font-bold text-primary tracking-tight leading-tight">{tp.card3.title}</h3>
<p className="mt-2 text-on-surface-variant text-sm">{tp.card3.desc}</p>
<Link className="mt-4 inline-flex items-center gap-2 text-on-tertiary-container font-bold text-sm" href="/training">
                        {tp.card3.link} 
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Our Process Section */}
<FadeIn><section className="px-8 py-32 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-[0.2em] uppercase">{tp.methodologyTag}</span>
<h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">{tp.methodologyTitle}</h2>
</div>
<p className="text-on-surface-variant max-w-sm font-light">{tp.methodologyDesc}</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">01</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">{tp.process.discovery}</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">{tp.process.discoveryDesc}</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">02</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">{tp.process.architecture}</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">{tp.process.architectureDesc}</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">03</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">{tp.process.execution}</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">{tp.process.executionDesc}</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">04</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">{tp.process.evolution}</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">{tp.process.evolutionDesc}</p>
</div>
</div>
</div>
</section></FadeIn>
{/* Impact by the Numbers */}
<FadeIn><section className="px-8 py-24 bg-primary text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-5 architect-grid pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">{tp.stats.businessesNum}</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">{tp.stats.businessesLabel}</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">{tp.stats.rateNum}</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">{tp.stats.rateLabel}</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">{tp.stats.foundedNum}</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">{tp.stats.foundedLabel}</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">{tp.stats.expNum}</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">{tp.stats.expLabel}</p>
</div>
</div>
</div>
</section></FadeIn>
{/* CTA Section */}
<FadeIn><section className="px-8 py-32 bg-surface-container-highest flex items-center justify-center text-center">
<div className="max-w-3xl">
<h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tighter leading-tight">{tp.ctaTitle}</h2>
<p className="mt-8 text-xl text-on-surface-variant font-light">{tp.ctaDesc}</p>
<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
<Link href="/contact" className="bg-on-tertiary-container text-white px-10 py-5 rounded-lg font-headline font-bold text-lg tracking-tight hover:scale-95 active:duration-100 transition-all shadow-xl shadow-on-tertiary-container/30">
                        {tp.ctaQuote}
                    </Link>
<Link href="/services" className="bg-transparent border-2 border-primary text-primary px-10 py-5 rounded-lg font-headline font-bold text-lg tracking-tight hover:bg-surface-container-high transition-all">
                        {tp.ctaServices}
                    </Link>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
