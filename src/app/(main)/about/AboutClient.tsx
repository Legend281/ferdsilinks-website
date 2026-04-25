"use client";

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { User } from 'lucide-react';

export default function AboutContent() {
  const { t } = useLanguage();
  
  const milestones = [
    { year: '2019', title: 'The Foundation', description: 'Ferdsilinks founded in Buea, Cameroon by Tingom Ferdinand with a vision to bridge data research and industrial application.' },
    { year: '2020', title: 'First Major Project', description: 'Partnered with regional leaders to deploy large-scale data architecture systems, proving our precision-led approach.' },
    { year: '2022', title: 'Training Hub Launch', description: 'Launched specialized training programs to cultivate the next generation of Cameroon\'s tech professionals.' },
    { year: '2024', title: 'Silicon Mountain Leader', description: 'Established as a key player in Cameroon\'s tech ecosystem, expanding services across Central Africa.' },
  ];

  return (
    <main className="pt-24 space-y-4">
      
{/* Hero: Our Story - Split Hero */}
<FadeIn>
  <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden bg-[#111827]">
    <div className="absolute inset-0 opacity-30">
      <img 
        className="w-full h-full object-cover" 
        alt="Buea technology hub" 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-0 relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
            <span className="font-label text-tertiary-fixed text-xs font-bold uppercase tracking-widest">{t.about.theDigitalArchitect}</span>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            {t.about.ourStory}
          </h1>
          <p className="text-on-primary-container text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">
            From the foothills of Mount Fako, we engineer the future. Our mission is to lead Africa&apos;s tech revolution, transforming Buea into a global beacon of precision data science and innovative tech infrastructure.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-on-tertiary-container text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              {t.about.workWithUs} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link href="/team" className="border-2 border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-white/10 transition-all">
              {t.about.meetTheTeam}
            </Link>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-on-tertiary-container/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                className="w-full h-[450px] object-cover" 
                alt="Ferdsilinks team at work" 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-on-tertiary-container p-6 rounded-xl shadow-2xl">
              <span className="text-white font-headline font-black text-4xl block">{t.about.founded}</span>
              <span className="text-tertiary-fixed font-label text-xs uppercase tracking-tighter">{t.about.foundedIn}</span>
            </div>
            <div className="absolute -top-4 -right-4 bg-surface-container-lowest p-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-container">verified</span>
                <span className="font-label text-xs font-bold text-primary uppercase">Certified Excellence</span>
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
{/* Mission & Vision: Bento Grid */}
<FadeIn><section className="py-16 md:py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
{/* Mission */}
<div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_24px_48px_rgba(0,33,71,0.04)] flex flex-col gap-4 md:gap-6">
<div className="w-14 h-14 md:w-16 md:h-16 bg-primary-fixed rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-2xl md:text-3xl">rocket_launch</span>
</div>
<h2 className="font-headline text-2xl md:text-3xl font-extrabold text-primary">{t.about.mission}</h2>
<p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
{t.about.missionText}
                        </p>
</div>
{/* Vision */}
<div className="bg-primary-container p-8 md:p-12 rounded-xl flex flex-col gap-4 md:gap-6">
<div className="w-14 h-14 md:w-16 md:h-16 bg-on-tertiary-container rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-white text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
</div>
<h2 className="font-headline text-2xl md:text-3xl font-extrabold text-white">{t.about.vision}</h2>
<p className="text-on-primary-container text-base md:text-lg leading-relaxed">
{t.about.visionText}
                        </p>
</div>
</div>
</div>
</section></FadeIn>
{/* Our Journey: Vertical Timeline */}
<FadeIn><section className="py-16 md:py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-12 md:mb-16 text-center">
<span className="font-label text-on-tertiary-container text-xs md:text-sm uppercase tracking-widest mb-4">{t.about.founded}</span>
<h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-primary">{t.about.ourJourney}</h2>
</div>
<div className="relative">
{/* Timeline Line */}
<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-on-tertiary-container to-transparent opacity-20 hidden md:block"></div>
{milestones.map((milestone, index) => (
<div key={index} className={`relative mb-12 md:mb-20 md:flex items-center justify-between ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
<div className={`md:w-5/12 ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
<h3 className="font-headline text-xl md:text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
<p className="text-on-surface-variant text-sm md:text-base">{milestone.description}</p>
</div>
<div className={`relative z-10 w-12 h-12 rounded-full border-4 border-white mx-auto my-4 md:my-0 shadow-lg flex items-center justify-center ${index % 2 === 0 ? 'bg-on-tertiary-container' : 'bg-primary'}`}>
<span className="font-label text-white text-xs">{milestone.year}</span>
</div>
<div className="md:w-5/12"></div>
</div>
))}
</div>
</div>
</section></FadeIn>
{/* Why Choose Us */}
<FadeIn><section className="py-16 md:py-24 bg-primary-container text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
<div className="lg:w-1/2">
<h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight">{t.about.ferdsilinksAdvantage}</h2>
<div className="space-y-8 md:space-y-10">
<div className="flex gap-4 md:gap-6 items-start">
<div className="w-11 h-11 md:w-12 md:h-12 bg-on-tertiary-container flex-shrink-0 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-white text-xl md:text-2xl">science</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg md:text-xl mb-2">{t.about.researchLed}</h4>
<p className="text-on-primary-container leading-relaxed text-sm md:text-base">Our solutions are architected based on deep research and rigorous testing, not just assumptions.</p>
</div>
</div>
<div className="flex gap-4 md:gap-6 items-start">
<div className="w-11 h-11 md:w-12 md:h-12 bg-on-tertiary-container flex-shrink-0 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-white text-xl md:text-2xl">location_on</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg md:text-xl mb-2">{t.about.localExpertise}</h4>
<p className="text-on-primary-container leading-relaxed text-sm md:text-base">Deep understanding of the African business landscape combined with international engineering standards.</p>
</div>
</div>
<div className="flex gap-4 md:gap-6 items-start">
<div className="w-11 h-11 md:w-12 md:h-12 bg-on-tertiary-container flex-shrink-0 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-white text-xl md:text-2xl">verified_user</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg md:text-xl mb-2">{t.about.highTrust}</h4>
<p className="text-on-primary-container leading-relaxed text-sm md:text-base">We prioritize data sovereignty and secure infrastructure for long-term institutional reliability.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="relative p-6 md:p-8 bg-primary rounded-xl border border-white/10 shadow-2xl overflow-hidden">
<div className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-on-tertiary-container/10 blur-[100px] rounded-full"></div>
<div className="relative z-10">
<span className="material-symbols-outlined text-4xl md:text-5xl text-on-tertiary-container mb-4 md:mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<p className="text-lg md:text-2xl font-headline italic leading-relaxed mb-6 md:mb-8">
                                    "Ferdsilinks transformed our data infrastructure. Their precision and expertise helped us make better decisions faster."
                                </p>
<div className="flex items-center gap-3 md:gap-4">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface-container-high flex items-center justify-center">
<User className="w-5 h-5 md:w-6 md:h-6 text-on-surface-variant" />
</div>
<div>
<p className="font-bold text-sm md:text-base">Business Client</p>
<p className="text-xs md:text-sm font-label uppercase text-on-primary-container">Regional Enterprise, Cameroon</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* CTA: Join the Revolution */}
<FadeIn><section className="py-16 md:py-24 bg-surface">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-surface-container-high p-8 md:p-12 lg:p-20 rounded-xl relative overflow-hidden flex flex-col items-center text-center">
<div className="absolute top-0 right-0 p-8 md:p-12 text-primary opacity-5">
<span className="material-symbols-outlined text-[150px] md:text-[200px]">architecture</span>
</div>
<h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-4 md:mb-6 relative z-10">{t.about.readyToBuild}</h2>
<p className="text-on-surface-variant text-base md:text-lg max-w-2xl mb-8 md:mb-10 relative z-10">{t.about.whetherLooking}</p>
<div className="flex flex-col sm:flex-row gap-3 md:gap-4 relative z-10 w-full sm:w-auto">
<Link href="/contact" className="bg-on-tertiary-container text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-headline font-extrabold text-base md:text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto text-center">
                            {t.about.workWithUsCTA}
                        </Link>
<Link href="/careers" className="bg-white border-2 border-primary text-primary px-8 py-3 md:px-10 md:py-4 rounded-lg font-headline font-extrabold text-base md:text-lg transition-colors hover:bg-primary hover:text-white w-full sm:w-auto text-center">
                            {t.about.joinOurTeam}
                        </Link>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
