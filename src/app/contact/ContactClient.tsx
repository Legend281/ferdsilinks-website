"use client";

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function ContactContent() {
  const { t } = useLanguage();
  return (
    <main className="pt-24 space-y-4">
      
{/* Hero Section - Split Hero */}
<FadeIn>
  <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-surface">
    <div className="absolute -right-40 top-20 w-[700px] h-[700px] bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
    <div className="absolute -left-40 bottom-20 w-[500px] h-[500px] bg-on-tertiary-container/5 rounded-full blur-3xl -z-10"></div>
    
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary-container/10 rounded-full border border-primary-container/20 w-fit">
            <span className="material-symbols-outlined text-primary-container text-sm">location_on</span>
            <span className="font-label text-primary-container tracking-widest text-xs font-bold uppercase">{t.contact.silionMountainPioneers}</span>
          </div>
          <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-primary leading-[1.05] tracking-tight">
            {t.contact.connectWith} <span className="text-on-tertiary-container">{t.contact.digitalArchitects}</span>
          </h1>
          <p className="text-on-surface-variant text-lg lg:text-xl max-w-xl leading-relaxed">
            {t.contact.buildingFuture}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact-form" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              {t.contact.sendMessage} <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a href="tel:+237600000000" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2">
              <span className="material-symbols-outlined">call</span> {t.contact.callUs}
            </a>
          </div>
          <div className="flex items-center gap-6 pt-6 border-t border-outline-variant/20">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-tertiary-container">schedule</span>
              <span className="text-sm text-on-surface-variant font-medium">{t.contact.available24}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-tertiary-container">verified</span>
              <span className="text-sm text-on-surface-variant font-medium">{t.contact.unmatchedSupport}</span>
            </div>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary-container/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-surface-container-low">
              <img 
                alt="Ferdsilinks Team" 
                className="w-full h-[500px] object-cover" 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-2xl z-20 border-l-4 border-on-tertiary-container">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">location_on</span>
                </div>
                <div>
                  <p className="font-headline font-bold text-primary">{t.contact.buesaCameroon}</p>
                  <p className="text-sm text-on-surface-variant">{t.contact.silionMountainHub}</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-on-tertiary-container p-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-white text-lg">hub</span>
                <span className="font-label text-xs font-bold text-white uppercase">Since 2019</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</FadeIn>
{/* Form & Details Section */}
<FadeIn><section id="contact-form" className="px-8 py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
{/* Contact Form */}
<div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-12 rounded-xl shadow-sm">
<h2 className="font-headline text-3xl font-bold text-primary mb-2">{t.contact.sendMessage}</h2>
<p className="text-on-surface-variant mb-8">We typically respond within 24 hours.</p>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">{t.contact.fullName}</label>
<input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">{t.contact.emailAddress}</label>
<input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="john@company.cm" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">{t.contact.subject}</label>
<select className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none">
<option>Data Science & AI Solutions</option>
<option>Software Development</option>
<option>IT Consulting</option>
<option>Training Programs</option>
<option>General Inquiry</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">{t.contact.message}</label>
<textarea className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none resize-none" placeholder="Tell us about your project or inquiry..." rows={5}></textarea>
</div>
<button className="w-full md:w-auto px-10 py-4 bg-on-tertiary-container text-white font-headline font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-on-tertiary-container/20" type="submit">
                                {t.contact.submitMessage}
                            </button>
</form>
</div>
{/* Contact Details Sidebar */}
<div className="lg:col-span-5 space-y-12">
<div>
<h2 className="font-headline text-3xl font-bold text-primary mb-8">{t.contact.getInTouch}</h2>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-lg text-white">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<h4 className="font-headline font-bold text-primary">{t.contact.officeAddress}</h4>
<p className="text-on-surface-variant leading-relaxed">Molyko, Buea<br/>Southwest Region, Cameroon</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-lg text-white">
<span className="material-symbols-outlined">mail</span>
</div>
<div>
<h4 className="font-headline font-bold text-primary">{t.contact.emailUs}</h4>
<p className="text-on-surface-variant">info@ferdsilinks.com</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-lg text-white">
<span className="material-symbols-outlined">call</span>
</div>
<div>
<h4 className="font-headline font-bold text-primary">{t.contact.callUs}</h4>
<p className="text-on-surface-variant">+237 6XX XXX XXX</p>
<p className="text-xs font-label uppercase text-on-tertiary-container font-bold mt-1">{t.contact.available24}</p>
</div>
</div>
</div>
</div>
{/* Trust Signals */}
<div className="p-8 bg-primary-container rounded-xl text-white relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<h4 className="font-headline text-xl font-bold mb-4">{t.contact.unmatchedSupport}</h4>
<p className="text-on-primary-container mb-6 leading-relaxed">{t.contact.supportDescription}</p>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="Team" className="w-8 h-8 rounded-full border-2 border-primary-container object-cover"/>
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" alt="Team" className="w-8 h-8 rounded-full border-2 border-primary-container object-cover"/>
<img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" alt="Team" className="w-8 h-8 rounded-full border-2 border-primary-container object-cover"/>
</div>
<span className="text-sm font-label uppercase tracking-wider">{t.contact.expertTeam}</span>
</div>
</div>
{/* Socials */}
<div className="pt-4">
<h4 className="font-label text-xs font-bold uppercase text-on-surface-variant mb-6 tracking-widest">{t.contact.connectCommunity}</h4>
<div className="flex gap-4">
<a className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="https://www.facebook.com/ferdsilinks" target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
</a>
<a className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="https://cm.linkedin.com/company/ferdsilinks-group" target="_blank" rel="noopener noreferrer">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
</a>
<a className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Interactive Map Placeholder */}
<FadeIn><section className="px-8 py-20">
<div className="max-w-7xl mx-auto">
<div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
<div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-surface-container-low">
<img alt="Map of Buea - Silicon Mountain" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"/>
</div>
<div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
<div className="bg-white p-4 rounded-full shadow-2xl mb-4 inline-block animate-bounce">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
</div>
<div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
<p className="font-headline font-bold text-primary">Ferdsilinks HQ, Silicon Mountain, Buea</p>
</div>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
