"use client";

import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { FadeIn } from '@/components/FadeIn';

interface Course {
  id: string;
  slug: string;
  title: string;
  short_description?: string;
  description?: string;
  cover_image?: string;
  duration?: string;
  level?: string;
  category?: string;
  curriculum?: string[];
  price: number;
  currency: string;
  instructor_name?: string;
  max_students?: number;
  certificate_provided?: boolean;
  is_online?: boolean;
  location?: string;
  enrollment_deadline?: string;
  start_date?: string;
  end_date?: string;
}

interface CourseDetailClientProps {
  course: Course;
}

export default function CourseDetailClient({ course }: CourseDetailClientProps) {
  const [enrollmentStatus, setEnrollmentStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    education_level: '',
    experience_level: '',
    motivation: '',
  });

  const formatPrice = (price: number, currency: string) => {
    if (price === 0) return 'Free';
    if (currency === 'XAF') return `${currency} ${price.toLocaleString()}`;
    return `$${price}`;
  };

  const handleEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.full_name || !formData.email || !formData.motivation) {
      toast.error('Please fill in all required fields');
      return;
    }

    setEnrollmentStatus('loading');

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          course_id: course.id,
          course_title: course.title,
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setEnrollmentStatus('success');
        toast.success('Enrollment submitted successfully!');
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          education_level: '',
          experience_level: '',
          motivation: '',
        });
      } else {
        setEnrollmentStatus('error');
        toast.error(result.error || 'Failed to submit enrollment');
      }
    } catch (error) {
      setEnrollmentStatus('error');
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-16">
          <FadeIn>
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-label uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">terminal</span>
                {course.category || 'Advanced Specialization'}
              </div>
              <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary tracking-tighter leading-[1.1]">
                {course.title}
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                {course.short_description || course.description?.slice(0, 200)}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all"
                >
                  Enroll Now - {formatPrice(course.price, course.currency)}
                </button>
                <button className="outline outline-2 outline-outline-variant px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-high transition-all">
                  Download Syllabus
                </button>
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="space-y-8">
              <h2 className="font-headline text-3xl font-bold text-primary">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.curriculum && course.curriculum.length > 0 ? (
                  course.curriculum.slice(0, 4).map((item, index) => (
                    <div key={index} className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 flex gap-4 items-start">
                      <span className="material-symbols-outlined text-on-tertiary-container text-3xl">bolt</span>
                      <div>
                        <h3 className="font-bold text-primary mb-1">{item}</h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 flex gap-4 items-start col-span-2">
                    <span className="material-symbols-outlined text-on-tertiary-container text-3xl">school</span>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Comprehensive Curriculum</h3>
                      <p className="text-sm text-on-surface-variant">Learn industry-relevant skills through hands-on projects and expert guidance.</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="space-y-8">
              <div className="flex justify-between items-end">
                <h2 className="font-headline text-3xl font-bold text-primary">Curriculum</h2>
                <span className="font-label text-sm text-on-surface-variant uppercase tracking-widest">
                  {course.curriculum?.length || 0} Modules
                </span>
              </div>
              <div className="space-y-4">
                {course.curriculum && course.curriculum.length > 0 ? (
                  course.curriculum.map((item, index) => (
                    <div 
                      key={index}
                      className={`rounded-xl overflow-hidden transition-all ${
                        expandedModule === index + 1 
                          ? 'bg-surface-container-lowest border-l-4 border-on-tertiary-container shadow-sm' 
                          : 'bg-surface-container-low'
                      }`}
                    >
                      <div 
                        className="p-6 flex justify-between items-center cursor-pointer"
                        onClick={() => setExpandedModule(expandedModule === index + 1 ? null : index + 1)}
                      >
                        <div className="flex gap-6 items-center">
                          <span className="text-on-tertiary-container font-label font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <h4 className="font-bold text-lg text-primary">{item}</h4>
                        </div>
                        <span className="material-symbols-outlined">
                          {expandedModule === index + 1 ? 'expand_less' : 'expand_more'}
                        </span>
                      </div>
                      {expandedModule === index + 1 && (
                        <div className="px-6 pb-6 pt-0 ml-12 space-y-4">
                          <ul className="space-y-3 text-on-surface-variant border-t border-outline-variant/20 pt-4">
                            <li className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-sm text-on-tertiary-container">play_circle</span>
                              Core concepts and fundamentals
                            </li>
                            <li className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-sm text-on-tertiary-container">description</span>
                              Hands-on project assignment
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="bg-surface-container-low rounded-xl p-6 text-center">
                    <p className="text-on-surface-variant">Full curriculum details coming soon.</p>
                  </div>
                )}
              </div>
            </section>
          </FadeIn>

          <FadeIn>
            <section className="bg-primary-container text-white rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="col-span-1">
                  <div className="w-full aspect-square bg-white/10 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-tertiary-fixed">
                      person
                    </span>
                  </div>
                </div>
                <div className="col-span-2 space-y-4">
                  <h2 className="font-headline text-3xl font-extrabold tracking-tight">Meet Your Instructor</h2>
                  <h3 className="text-tertiary-fixed text-xl font-bold">
                    {course.instructor_name || 'Expert Platform Instructors'}
                  </h3>
                  <p className="text-on-primary-container text-lg leading-relaxed">
                    Industry veterans with over 15 years of experience architecting large-scale digital systems for global firms. 
                    Bringing practical, battle-tested expertise directly to the Ferdsilinks classroom.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <span className="text-xs font-label uppercase tracking-tighter bg-white/10 px-3 py-1 rounded">
                      Ex-Silicon Mountain Lead
                    </span>
                    <span className="text-xs font-label uppercase tracking-tighter bg-white/10 px-3 py-1 rounded">
                      Global Architect
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-on-tertiary-container opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </section>
          </FadeIn>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <FadeIn>
              <div className="bg-surface-container-lowest rounded-xl shadow-[0px_24px_48px_rgba(0,33,71,0.08)] border border-outline-variant/10 overflow-hidden">
                <div className="aspect-video relative group overflow-hidden bg-surface-container-high">
                  {course.cover_image ? (
                    <img 
                      src={course.cover_image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-white">play_circle</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-container shadow-xl hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-4xl">play_arrow</span>
                    </button>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-black text-primary">{formatPrice(course.price, course.currency)}</span>
                    {course.price > 0 && (
                      <span className="text-on-surface-variant line-through">2x Price</span>
                    )}
                  </div>
                  <div className="space-y-4">
                    {course.start_date && (
                      <div className="flex items-center gap-4 text-on-surface-variant">
                        <span className="material-symbols-outlined">calendar_today</span>
                        <div>
                          <p className="text-xs uppercase font-label tracking-widest">Start Date</p>
                          <p className="text-primary font-bold">Coming Soon</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center gap-4 text-on-surface-variant">
                      <span className="material-symbols-outlined">schedule</span>
                      <div>
                        <p className="text-xs uppercase font-label tracking-widest">Duration</p>
                        <p className="text-primary font-bold">{course.duration || '8 Weeks'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-on-surface-variant">
                      <span className="material-symbols-outlined">bar_chart</span>
                      <div>
                        <p className="text-xs uppercase font-label tracking-widest">Skill Level</p>
                        <p className="text-primary font-bold">{course.level || 'Beginner'}</p>
                      </div>
                    </div>
                    {course.certificate_provided && (
                      <div className="flex items-center gap-4 text-on-surface-variant">
                        <span className="material-symbols-outlined text-on-tertiary-container">verified</span>
                        <div>
                          <p className="text-xs uppercase font-label tracking-widest">Certification</p>
                          <p className="text-primary font-bold">Professional Certificate</p>
                        </div>
                      </div>
                    )}
                    {course.is_online && (
                      <div className="flex items-center gap-4 text-on-surface-variant">
                        <span className="material-symbols-outlined">wifi</span>
                        <div>
                          <p className="text-xs uppercase font-label tracking-widest">Format</p>
                          <p className="text-primary font-bold">Online</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => document.getElementById('enroll-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-on-tertiary-container text-white py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-md"
                  >
                    Enroll Now
                  </button>
                  <p className="text-center text-xs text-on-surface-variant font-label">30-Day Money Back Guarantee</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-primary p-8 rounded-xl text-white space-y-4">
                <h4 className="font-bold text-lg">Group Enrollment?</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Corporate training packages available for teams of 5 or more. Build a data-driven culture in your organization.
                </p>
                <Link className="inline-block font-label text-xs text-[#ffdcc3] uppercase tracking-widest border-b border-[#ffdcc3] pb-1 hover:text-white transition-colors" href="/contact">
                  Contact Enterprise Sales
                </Link>
              </div>
            </FadeIn>
          </div>
        </aside>
      </div>

      <FadeIn>
        <section id="enroll-form" className="mt-16 pt-16 border-t border-outline-variant/20">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-primary text-center mb-8">Enroll in This Course</h2>
            
            {enrollmentStatus === 'success' ? (
              <div className="bg-surface-container-lowest rounded-xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-green-600 text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Enrollment Submitted!</h3>
                <p className="text-on-surface-variant">We'll be in touch soon with next steps.</p>
              </div>
            ) : (
              <form onSubmit={handleEnroll} className="bg-surface-container-lowest rounded-xl p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
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
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                    placeholder="+237 676 817 339"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education Level
                    </label>
                    <select
                      value={formData.education_level}
                      onChange={(e) => setFormData(prev => ({ ...prev, education_level: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                    >
                      <option value="">Select...</option>
                      <option value="high-school">High School</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <select
                      value={formData.experience_level}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience_level: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                    >
                      <option value="">Select...</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to join? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none resize-none"
                    placeholder="Tell us about your goals and what you hope to achieve..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={enrollmentStatus === 'loading'}
                  className="w-full bg-on-tertiary-container text-white font-bold py-4 rounded-lg hover:brightness-110 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {enrollmentStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit Enrollment'
                  )}
                </button>
              </form>
            )}
          </div>
        </section>
      </FadeIn>
    </main>
  );
}
