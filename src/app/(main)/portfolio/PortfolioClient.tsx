"use client";

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function PortfolioContent() {
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
            <span className="font-label text-on-tertiary-container text-xs font-bold uppercase tracking-widest">Our Work</span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary tracking-tighter leading-[1.05]">
            Real Solutions for Real Businesses: <span className="text-on-tertiary-container">Our Impact</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            From AI-powered accounting to data analytics platforms — see how we're transforming African enterprises with technology built in Silicon Mountain.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#case-studies" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              View Case Studies <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link href="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all">
              Start a Project
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-primary-container p-8 rounded-2xl text-white space-y-4">
                <span className="material-symbols-outlined text-4xl text-tertiary-fixed">neurology</span>
                <p className="font-bold text-lg">Data Science</p>
                <p className="text-sm text-white/70">AI & ML Solutions</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20 mt-8">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4 block">code</span>
                <p className="font-bold text-lg text-primary">Software Dev</p>
                <p className="text-sm text-on-surface-variant">Custom Applications</p>
              </div>
              <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/20">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4 block">cloud</span>
                <p className="font-bold text-lg text-primary">Cloud & IT</p>
                <p className="text-sm text-on-surface-variant">Infrastructure Setup</p>
              </div>
              <div className="bg-primary-container p-8 rounded-2xl text-white mt-8">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4 block">analytics</span>
                <p className="font-bold text-lg">Analytics</p>
                <p className="text-sm text-white/70">Business Intelligence</p>
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
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">Featured Project</span>
<h3 className="mt-3 font-headline text-3xl font-bold text-primary tracking-tight">Solafide ERP — Africa's First AI-Powered OHADA-Compliant Platform</h3>
<p className="mt-4 text-on-surface-variant max-w-xl">Built by Ferdsilinks, Solafide is transforming financial management for 1000+ businesses across Africa with AI-powered accounting, inventory, and compliance tools designed for the OHADA accounting system.</p>
<div className="mt-4 flex flex-wrap gap-3">
<span className="px-3 py-1 bg-primary-container/20 text-on-tertiary-container text-xs font-bold rounded-full">OHADA Compliant</span>
<span className="px-3 py-1 bg-primary-container/20 text-on-tertiary-container text-xs font-bold rounded-full">AI-Powered</span>
<span className="px-3 py-1 bg-primary-container/20 text-on-tertiary-container text-xs font-bold rounded-full">1000+ Businesses</span>
</div>
<Link className="mt-6 inline-flex items-center gap-2 text-on-tertiary-container font-bold group/link" href="https://solafideonline.com" target="_blank">
                                Visit Solafide 
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
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">Data Science</span>
<h3 className="mt-3 font-headline text-xl font-bold text-primary tracking-tight leading-tight">AI & Machine Learning Solutions</h3>
<p className="mt-2 text-on-surface-variant text-sm">Custom ML models and AI solutions for African businesses.</p>
<Link className="mt-4 inline-flex items-center gap-2 text-on-tertiary-container font-bold text-sm" href="/services">
                                View Services 
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
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">Community Impact</span>
<h3 className="mt-3 font-headline text-xl font-bold text-primary tracking-tight leading-tight">WiDS Cameroon Partnership</h3>
<p className="mt-2 text-on-surface-variant text-sm">Empowering women in data science across Cameroon.</p>
<Link className="mt-4 inline-flex items-center gap-2 text-on-tertiary-container font-bold text-sm" href="/training">
                                Learn More 
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
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">Training</span>
<h3 className="mt-3 font-headline text-xl font-bold text-primary tracking-tight leading-tight">Ferdsilinks Academy</h3>
<p className="mt-2 text-on-surface-variant text-sm">Building the next generation of African tech talent.</p>
<Link className="mt-4 inline-flex items-center gap-2 text-on-tertiary-container font-bold text-sm" href="/training">
                                Explore Courses 
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
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-[0.2em] uppercase">Methodology</span>
<h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">Our Process: From Research to Results</h2>
</div>
<p className="text-on-surface-variant max-w-sm font-light">A scientific approach to building digital solutions that survive and thrive in real-world conditions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">01</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">Discovery</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Deep immersion into your business logic, market dynamics, and operational bottlenecks.</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">02</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">Architecture</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Designing the technical blueprint and data structures that ensure infinite scalability.</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">03</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">Execution</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Agile development cycles with rigorous testing and continuous performance tuning.</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">04</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">Evolution</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Data-driven optimization and support to ensure your solution grows with your impact.</p>
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
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">1000+</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">Businesses Served</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">75%</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">Recommendation Rate</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">2019</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">Founded</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">6+</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">Years Experience</p>
</div>
</div>
</div>
</section></FadeIn>
{/* CTA Section */}
<FadeIn><section className="px-8 py-32 bg-surface-container-highest flex items-center justify-center text-center">
<div className="max-w-3xl">
<h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tighter leading-tight">Ready to Start Your Project?</h2>
<p className="mt-8 text-xl text-on-surface-variant font-light">Let's discuss how we can help solve your technology challenges — from AI solutions to custom software and tech training.</p>
<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
<Link href="/contact" className="bg-on-tertiary-container text-white px-10 py-5 rounded-lg font-headline font-bold text-lg tracking-tight hover:scale-95 active:duration-100 transition-all shadow-xl shadow-on-tertiary-container/30">
                        Get a Quote
                    </Link>
<Link href="/services" className="bg-transparent border-2 border-primary text-primary px-10 py-5 rounded-lg font-headline font-bold text-lg tracking-tight hover:bg-surface-container-high transition-all">
                        View Services
                    </Link>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
