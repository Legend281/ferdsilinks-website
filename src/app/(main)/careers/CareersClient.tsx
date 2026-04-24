"use client";

import { useState, useEffect, useRef } from 'react';
import { FadeIn } from '@/components/FadeIn';
import { useLanguage } from '@/components/LanguageProvider';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  remote?: boolean;
  compensation: string;
  description?: string;
  requirements?: string[];
  responsibilities?: string[];
}

interface CareersClientProps {
  initialJobs: Job[];
}

export default function CareersClient({ initialJobs }: CareersClientProps) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showCVModal, setShowCVModal] = useState(false);
  const [cvFormData, setCvFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    linkedin_url: '',
    cover_letter: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  
  const jobs = initialJobs.length > 0 ? initialJobs : [];

  const departments = ["All", ...new Set(jobs.map(job => job.department))];
  const filters = departments.slice(0, 5);

  const filteredJobs = jobs.filter(job => activeFilter === "All" || job.department === activeFilter);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowCVModal(false);
    };
    if (showCVModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showCVModal]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size must be less than 5MB');
        return;
      }
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        toast.error('Please upload a PDF or Word document');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleCVSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        ...cvFormData,
        job_title: 'General Application',
        resume_url: resumeFile ? `File: ${resumeFile.name}` : ''
      };
      console.log('Sending payload:', payload);
      
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Response:', data);

      if (response.ok) {
        toast.success('Application submitted successfully! We will be in touch.');
        setShowCVModal(false);
        setCvFormData({ full_name: '', email: '', phone: '', linkedin_url: '', cover_letter: '' });
        setResumeFile(null);
      } else {
        const data = await response.json();
        toast.error(data.error || 'Failed to submit application');
      }
    } catch {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="font-body text-on-surface antialiased bg-surface min-h-screen">
      {/* Hero Section */}
      <FadeIn>
          <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-primary">
              <div className="absolute inset-0 z-0 opacity-40">
                  <img className="w-full h-full object-cover" alt="Silicon Mountain Buea" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
              <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                  <div className="md:w-8/12 lg:w-7/12">
                      <span className="font-label text-tertiary-fixed text-sm tracking-[0.2em] mb-6 block font-bold">{t.careers.careersAt}</span>
                      <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tighter mb-8">
                          {t.careers.buildFuture} <span className="text-on-tertiary-container">{t.careers.african}</span> {t.careers.innovation}
                      </h1>
                      <p className="text-primary-fixed text-lg md:text-xl leading-relaxed mb-10 max-w-2xl opacity-80">
                          {t.careers.joinSilicon}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                          <a className="bg-on-tertiary-container text-white px-10 py-5 rounded font-bold text-center hover:shadow-xl hover:-translate-y-1 transition-all" href="#open-roles">
                              {t.careers.viewOpenRoles}
                          </a>
                          <a className="border border-outline-variant text-white px-10 py-5 rounded font-bold text-center hover:bg-white/10 transition-all cursor-pointer" href="#culture">
                              {t.careers.architectsCulture}
                          </a>
                      </div>
                  </div>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
                  <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
              </div>
          </section>
      </FadeIn>

      {/* Why Join Us (Culture) */}
      <FadeIn>
          <section id="culture" className="py-32 bg-surface">
              <div className="max-w-7xl mx-auto px-8">
                  <div className="mb-20 text-center md:text-left">
                      <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">{t.careers.architectsCulture}</h2>
                      <div className="w-24 h-2 bg-on-tertiary-container mb-6 md:mx-0 mx-auto"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-surface-container-lowest p-10 rounded-xl transition-all border border-outline-variant/10 hover:-translate-y-2 hover:border-on-tertiary-container/30 group shadow-sm hover:shadow-xl">
                          <div className="mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform origin-left text-5xl">
                              <span className="material-symbols-outlined">bolt</span>
                          </div>
                          <h3 className="font-headline text-2xl font-bold mb-4 text-primary">{t.careers.innovationFirst}</h3>
                          <p className="text-on-surface-variant leading-relaxed">{t.careers.innovationFirstDesc}</p>
                      </div>
                      <div className="bg-surface-container-lowest p-10 rounded-xl transition-all border border-outline-variant/10 hover:-translate-y-2 hover:border-on-tertiary-container/30 group shadow-sm hover:shadow-xl">
                          <div className="mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform origin-left text-5xl">
                              <span className="material-symbols-outlined">hub</span>
                          </div>
                          <h3 className="font-headline text-2xl font-bold mb-4 text-primary">{t.careers.communityRoots}</h3>
                          <p className="text-on-surface-variant leading-relaxed">{t.careers.communityRootsDesc}</p>
                      </div>
                      <div className="bg-surface-container-lowest p-10 rounded-xl transition-all border border-outline-variant/10 hover:-translate-y-2 hover:border-on-tertiary-container/30 group shadow-sm hover:shadow-xl">
                          <div className="mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform origin-left text-5xl">
                              <span className="material-symbols-outlined">public</span>
                          </div>
                          <h3 className="font-headline text-2xl font-bold mb-4 text-primary">{t.careers.globalImpact}</h3>
                          <p className="text-on-surface-variant leading-relaxed">{t.careers.globalImpactDesc}</p>
                      </div>
                      <div className="bg-surface-container-lowest p-10 rounded-xl transition-all border border-outline-variant/10 hover:-translate-y-2 hover:border-on-tertiary-container/30 group shadow-sm hover:shadow-xl">
                          <div className="mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform origin-left text-5xl">
                              <span className="material-symbols-outlined">menu_book</span>
                          </div>
                          <h3 className="font-headline text-2xl font-bold mb-4 text-primary">{t.careers.continuousLearning}</h3>
                          <p className="text-on-surface-variant leading-relaxed">{t.careers.continuousLearningDesc}</p>
                      </div>
                  </div>
              </div>
          </section>
      </FadeIn>

      {/* Our Ecosystem: Silicon Mountain */}
      <FadeIn>
          <section className="relative py-32 overflow-hidden bg-primary-container mx-4 lg:mx-8 rounded-2xl">
              <div className="max-w-7xl mx-auto px-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                      <div className="md:col-span-12 lg:col-span-5 text-white">
                          <span className="font-label text-on-tertiary-container text-sm tracking-widest block mb-4 font-bold">{t.careers.ourEcosystem}</span>
                          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8">{t.careers.silionMountain}</h2>
                          <p className="text-primary-fixed-dim text-lg leading-relaxed mb-8">
                              {t.careers.buesaDescription}
                          </p>
                          <ul className="space-y-4 mb-10">
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
                                  <span>{t.careers.premierUni}</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
                                  <span>{t.careers.vibrantCommunity}</span>
                              </li>
                              <li className="flex items-center gap-3">
                                  <span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
                                  <span>{t.careers.unrivaledLifestyle}</span>
                              </li>
                          </ul>
                      </div>
                      <div className="md:col-span-12 lg:col-span-7">
                          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                              <img className="w-full h-full object-cover" alt="Buea cityscape at Mount Fako" src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=450&fit=crop" />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent"></div>
                              <div className="absolute bottom-8 left-8">
                                  <p className="font-label text-white text-xs tracking-[0.2em] uppercase font-bold">Buea, Cameroon • 4.1550° N</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </FadeIn>

      {/* Open Roles */}
      <FadeIn>
          <section id="open-roles" className="py-32 bg-surface">
              <div className="max-w-5xl mx-auto px-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-outline-variant/20 pb-8">
                      <div>
                          <h2 className="font-headline text-4xl font-extrabold text-primary mb-4">{t.careers.openPositions}</h2>
                          <p className="text-on-surface-variant text-lg">{t.careers.joinTeam}</p>
                      </div>
                      <div className="flex gap-2 p-1.5 bg-surface-container-high rounded-lg overflow-x-auto [scrollbar-width:none]">
                          {filters.map(filter => (
                              <button 
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 font-bold rounded shadow-sm text-sm transition-all whitespace-nowrap ${
                                    activeFilter === filter 
                                    ? "bg-white text-primary" 
                                    : "text-on-surface-variant hover:text-primary bg-transparent"
                                }`}
                              >
                                {filter}
                              </button>
                          ))}
                      </div>
                  </div>
                  
                  <div className="space-y-4">
                      {filteredJobs.length > 0 ? filteredJobs.map((job) => (
                          <div 
                            key={job.id} 
                            id={job.id}
                            className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center transition-all cursor-pointer border border-transparent hover:border-outline-variant/30 hover:shadow-xl"
                            onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                          >
                              <div>
                                  <div className="flex flex-wrap items-center gap-3 mb-3">
                                      <span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded font-label text-[10px] uppercase tracking-[0.1em] font-bold">{job.department}</span>
                                      <span className="text-on-tertiary-container font-label text-[10px] uppercase tracking-[0.1em] font-bold">{job.type}</span>
                                      {job.remote && (
                                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">Remote</span>
                                      )}
                                  </div>
                                  <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-4">{job.title}</h3>
                                  <div className="flex flex-wrap items-center gap-6 text-on-surface-variant text-sm font-medium">
                                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">location_on</span> {job.location}</span>
                                      <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg text-secondary">payments</span> {job.compensation}</span>
                                  </div>
                              </div>
                              <span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-on-tertiary-container group-hover:translate-x-2 transition-transform duration-300 mt-6 md:mt-0">
                                {selectedJob?.id === job.id ? 'expand_less' : 'arrow_forward'}
                              </span>
                          </div>
                      )) : (
                          <div className="text-center py-20 bg-surface-container-low rounded-xl">
                              <span className="material-symbols-outlined text-4xl text-outline mb-4">search_off</span>
                              <p className="font-headline text-2xl font-bold text-primary mb-2">{t.careers.noRoles}</p>
                              <p className="text-on-surface-variant">{t.careers.checkBackLater}</p>
                          </div>
                      )}
                  </div>
              </div>
          </section>
      </FadeIn>

      {/* Benefits Grid */}
      <FadeIn>
          <section className="py-32 bg-surface-container-low">
              <div className="max-w-7xl mx-auto px-8">
                  <div className="mb-16 text-center max-w-2xl mx-auto">
                      <h2 className="font-headline text-4xl font-extrabold text-primary mb-6">{t.careers.builtForGrowth}</h2>
                      <p className="text-on-surface-variant text-lg">We provide the environment and resources you need to do your best work and live your best life.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                      <div className="text-center p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-lg transition-shadow">
                          <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 text-on-tertiary-container">
                              <span className="material-symbols-outlined text-3xl">school</span>
                          </div>
                          <h4 className="font-headline font-bold text-lg mb-4 text-primary">{t.careers.professionalDev}</h4>
                          <p className="text-sm text-on-surface-variant leading-relaxed">{t.careers.professionalDevDesc}</p>
                      </div>
                      <div className="text-center p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-lg transition-shadow">
                          <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 text-on-tertiary-container">
                              <span className="material-symbols-outlined text-3xl">payments</span>
                          </div>
                          <h4 className="font-headline font-bold text-lg mb-4 text-primary">{t.careers.competitiveSalary}</h4>
                          <p className="text-sm text-on-surface-variant leading-relaxed">{t.careers.competitiveSalaryDesc}</p>
                      </div>
                      <div className="text-center p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-lg transition-shadow">
                          <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 text-on-tertiary-container">
                              <span className="material-symbols-outlined text-3xl">home_work</span>
                          </div>
                          <h4 className="font-headline font-bold text-lg mb-4 text-primary">{t.careers.flexibleWork}</h4>
                          <p className="text-sm text-on-surface-variant leading-relaxed">{t.careers.flexibleWorkDesc}</p>
                      </div>
                      <div className="text-center p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm hover:shadow-lg transition-shadow">
                          <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 text-on-tertiary-container">
                              <span className="material-symbols-outlined text-3xl">favorite</span>
                          </div>
                          <h4 className="font-headline font-bold text-lg mb-4 text-primary">{t.careers.healthWellness}</h4>
                          <p className="text-sm text-on-surface-variant leading-relaxed">{t.careers.healthWellnessDesc}</p>
                      </div>
                  </div>
              </div>
          </section>
      </FadeIn>

      {/* CTA Section */}
      <FadeIn>
          <section className="py-24 bg-primary relative overflow-hidden">
              <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                      <img className="w-full h-full object-cover" alt="Team collaboration" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-transparent"></div>
              </div>
              
              <div className="max-w-7xl mx-auto px-8 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <div>
                          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
                              Open Applications
                          </span>
                          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                              Don&apos;t see a<br />
                              <span className="text-on-tertiary-container">perfect fit?</span>
                          </h2>
                          <p className="text-lg text-white/80 mb-10 max-w-xl leading-relaxed">
                              We&apos;re always looking for exceptional talent. Send your CV and tell us how you can contribute to our mission.
                          </p>
                          <button 
                              onClick={() => setShowCVModal(true)}
                              className="group inline-flex items-center justify-center gap-3 bg-on-tertiary-container text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl shadow-on-tertiary-container/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                          >
                              <span className="material-symbols-outlined text-2xl">upload_file</span>
                              Send Your CV
                              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                          </button>
                      </div>
                      
                      <div className="hidden lg:block">
                          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6">
                              <div className="flex items-center gap-4">
                                  <div className="w-14 h-14 bg-on-tertiary-container rounded-xl flex items-center justify-center flex-shrink-0">
                                      <span className="material-symbols-outlined text-white text-2xl">lightbulb</span>
                                  </div>
                                  <div>
                                      <h4 className="text-white font-bold text-lg">Share Your Vision</h4>
                                      <p className="text-white/60 text-sm">Tell us about your goals and aspirations</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-14 h-14 bg-on-tertiary-container rounded-xl flex items-center justify-center flex-shrink-0">
                                      <span className="material-symbols-outlined text-white text-2xl">description</span>
                                  </div>
                                  <div>
                                      <h4 className="text-white font-bold text-lg">Show Your Skills</h4>
                                      <p className="text-white/60 text-sm">Attach your CV and portfolio work</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-4">
                                  <div className="w-14 h-14 bg-on-tertiary-container rounded-xl flex items-center justify-center flex-shrink-0">
                                      <span className="material-symbols-outlined text-white text-2xl">handshake</span>
                                  </div>
                                  <div>
                                      <h4 className="text-white font-bold text-lg">Join the Team</h4>
                                      <p className="text-white/60 text-sm">We&apos;ll review and get back to you</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </FadeIn>

      {/* CV Submission Modal */}
      {showCVModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCVModal(false)}
          />
          <div 
            ref={modalRef}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="font-headline text-2xl font-bold text-primary">Submit Your CV</h3>
                <p className="text-sm text-gray-500 mt-1">Join the Ferdsilinks team</p>
              </div>
              <button 
                onClick={() => setShowCVModal(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-gray-600">close</span>
              </button>
            </div>

            <form onSubmit={handleCVSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={cvFormData.full_name}
                    onChange={(e) => setCvFormData(prev => ({ ...prev, full_name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={cvFormData.email}
                    onChange={(e) => setCvFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={cvFormData.phone}
                    onChange={(e) => setCvFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="+237 676 817 339"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={cvFormData.linkedin_url}
                    onChange={(e) => setCvFormData(prev => ({ ...prev, linkedin_url: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume / CV <span className="text-red-500">*</span>
                </label>
                <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  resumeFile ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-primary'
                }`}>
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                        <div className="text-left">
                          <p className="font-medium text-green-700">{resumeFile.name}</p>
                          <p className="text-sm text-green-600">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-gray-400 text-4xl mb-3">upload_file</span>
                        <p className="text-gray-600 font-medium">Click to upload your CV</p>
                        <p className="text-sm text-gray-400 mt-1">PDF or Word document (max 5MB)</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={cvFormData.cover_letter}
                  onChange={(e) => setCvFormData(prev => ({ ...prev, cover_letter: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell us about yourself and why you'd like to join Ferdsilinks..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <span className="material-symbols-outlined">send</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowCVModal(false)}
                  className="px-8 py-4 border-2 border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
