"use client";

import { useState } from 'react';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function ContactContent() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || undefined,
      company: formData.get('company') || undefined,
      service_interest: formData.get('service_interest'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormMessage('Thank you! Your message has been sent. We will get back to you within 24 hours.');
        e.currentTarget.reset();
      } else {
        setFormStatus('error');
        setFormMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setFormMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
            <a href="tel:+237676817339" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2">
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

{formStatus === 'success' && (
  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
    <div className="flex items-center gap-2 text-green-700">
      <span className="material-symbols-outlined">check_circle</span>
      <span className="font-medium">{formMessage}</span>
    </div>
  </div>
)}

{formStatus === 'error' && (
  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
    <div className="flex items-center gap-2 text-red-700">
      <span className="material-symbols-outlined">error</span>
      <span className="font-medium">{formMessage}</span>
    </div>
  </div>
)}

<form onSubmit={handleSubmit} className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Your Name *</label>
<input name="name" required className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Email Address *</label>
<input name="email" required className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="john@company.cm" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Phone</label>
<input name="phone" className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="+237 676 817 339" type="tel"/>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Company</label>
<input name="company" className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="Your Company Ltd" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Service Interest</label>
<select name="service_interest" className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none">
<option value="">Select a service...</option>
<option>Data Science & AI Solutions</option>
<option>Software Development</option>
<option>OHADA Solutions (Solafide ERP)</option>
<option>Training Programs</option>
<option>General Inquiry</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Your Message *</label>
<textarea name="message" required className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none resize-none" placeholder="Tell us about your project or inquiry..." rows={5}></textarea>
</div>
<button disabled={isLoading} className="w-full md:w-auto px-10 py-4 bg-on-tertiary-container text-white font-headline font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-on-tertiary-container/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2" type="submit">
{isLoading ? (
  <>
    <span className="material-symbols-outlined animate-spin">progress_activity</span>
    Sending...
  </>
) : (
  <>
    {t.contact.submitMessage}
    <span className="material-symbols-outlined">send</span>
  </>
)}
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
<p className="text-on-surface-variant">+237 676 817 339</p>
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
<a className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="https://www.facebook.com/share/1Zn5gjt5PA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
</a>
<a className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="https://cm.linkedin.com/company/ferdsilinks-group" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
</a>
<a className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="https://www.instagram.com/ferdsilinks?igsh=MTF1MGRiNjE4ZTFtMg==" target="_blank" rel="noopener noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>

{/* Map Section */}
<FadeIn><section className="px-8 py-20">
<div className="max-w-7xl mx-auto">
<div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.886468084674!2d9.285237!3d4.159040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDg4JzE3LjYiTiA5wrAxNic3LjQiRQ!5e0!3m2!1sen!2sCM!4v1600000000000!5m2!1sen!2sCM"
  width="100%" 
  height="100%" 
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-full"
></iframe>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
