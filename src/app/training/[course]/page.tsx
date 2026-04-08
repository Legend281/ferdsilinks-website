import { courses } from '@/data/training';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/FadeIn';

export function generateStaticParams() {
  return courses.map((course) => ({
    course: course.slug,
  }));
}

export default async function CourseDetailPage({ params }: { params: Promise<{ course: string }> }) {
  const { course: courseSlug } = await params;
  const course = courses.find((c) => c.slug === courseSlug);

  if (!course) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-24 font-body min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Content */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Hero Section */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-label uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">terminal</span>
              {course.category} Specialization
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary tracking-tighter leading-[1.1]">
              <span className="text-on-tertiary-container">{course.title.split(' ')[0]}</span> {course.title.split(' ').slice(1).join(' ')}
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              {course.long_description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all">Enroll Now - $499</button>
              <button className="outline outline-2 outline-outline-variant px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-high transition-all">Download Syllabus</button>
            </div>
          </section>

          {/* What You'll Learn: Bento Style */}
          <section className="space-y-8 mt-12 bg-surface-container-low p-8 rounded-2xl">
            <h2 className="font-headline text-3xl font-bold text-primary">Target Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {course.skills_gained.map(skill => (
                  <div key={skill} className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 flex gap-4 items-start shadow-sm">
                      <span className="material-symbols-outlined text-on-tertiary-container text-3xl">bolt</span>
                      <div>
                          <h3 className="font-bold text-primary mb-1">{skill}</h3>
                      </div>
                  </div>
               ))}
            </div>
          </section>

          {/* Curriculum Section */}
          <section className="space-y-8 mt-12">
            <div className="flex justify-between items-end">
                <h2 className="font-headline text-3xl font-bold text-primary">Curriculum</h2>
                <span className="font-label text-sm text-on-surface-variant uppercase tracking-widest">{course.curriculum.length} Comprehensive Modules</span>
            </div>
            <div className="space-y-4">
               {course.curriculum.map((mod, index) => (
                  <div key={index} className="bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-sm overflow-hidden group hover:border-on-tertiary-container transition-colors">
                      <div className="p-6 flex justify-between items-center cursor-pointer">
                          <div className="flex gap-6 items-center">
                              <span className="text-on-tertiary-container font-label font-bold">0{index + 1}</span>
                              <h4 className="font-bold text-lg text-primary">{mod.title}</h4>
                          </div>
                      </div>
                      <div className="px-6 pb-6 pt-0 ml-12 space-y-4">
                          <ul className="space-y-3 text-on-surface-variant border-t border-outline-variant/20 pt-4">
                              {mod.topics.map(topic => (
                                  <li key={topic} className="flex items-center gap-3"><span className="material-symbols-outlined text-sm text-on-tertiary-container">play_circle</span> {topic}</li>
                              ))}
                          </ul>
                      </div>
                  </div>
               ))}
            </div>
          </section>

          {/* Instructor Section */}
          <section className="bg-primary-container text-white rounded-xl p-8 md:p-12 relative overflow-hidden mt-12">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="col-span-1">
                    <img className="w-full aspect-square object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl bg-white" src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.id}`} />
                </div>
                <div className="col-span-2 space-y-4">
                    <h2 className="font-headline text-3xl font-extrabold tracking-tight">Meet Your Instructor</h2>
                    <h3 className="text-tertiary-fixed text-xl font-bold">Expert Platform Instructors</h3>
                    <p className="text-on-primary-container text-lg leading-relaxed">
                        Industry veterans with over 15 years of experience architecting large-scale digital systems for global firms. Bringing practical, battle-tested expertise directly to the Ferdsilinks classroom.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <span className="text-xs font-label uppercase tracking-tighter bg-white/10 px-3 py-1 rounded">Ex-Silicon Mountain Lead</span>
                        <span className="text-xs font-label uppercase tracking-tighter bg-white/10 px-3 py-1 rounded">Global Architect</span>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-on-tertiary-container opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl shadow-[0px_24px_48px_rgba(0,33,71,0.08)] border border-outline-variant/10 overflow-hidden">
                <div className="aspect-video relative group overflow-hidden bg-surface-container-high">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 mix-blend-multiply" src={`https://api.dicebear.com/7.x/shapes/svg?seed=${course.id}&backgroundColor=002147`} />
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                        <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-container shadow-xl hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-4xl">play_arrow</span>
                        </button>
                    </div>
                </div>
                <div className="p-8 space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-3xl font-black text-primary">$499</span>
                        <span className="text-on-surface-variant line-through border border-on-surface-variant/20 px-2 rounded">$899</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-on-surface-variant border-b border-outline-variant/10 pb-2">
                            <span className="material-symbols-outlined">schedule</span>
                            <div>
                                <p className="text-xs uppercase font-label tracking-widest text-outline">Duration</p>
                                <p className="text-primary font-bold">{course.duration}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-on-surface-variant border-b border-outline-variant/10 pb-2">
                            <span className="material-symbols-outlined">bar_chart</span>
                            <div>
                                <p className="text-xs uppercase font-label tracking-widest text-outline">Skill Level</p>
                                <p className="text-primary font-bold">{course.level}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-on-surface-variant">
                            <span className="material-symbols-outlined text-on-tertiary-container">verified</span>
                            <div>
                                <p className="text-xs uppercase font-label tracking-widest text-outline">Certification</p>
                                <p className="text-primary font-bold">Professional Certificate</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-on-tertiary-container text-white py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-md">Enroll Now</button>
                    <p className="text-center text-xs text-outline font-label">30-Day Money Back Guarantee</p>
                </div>
            </div>

            {/* Additional Sidebar Info */}
            <div className="bg-primary p-8 rounded-xl text-white space-y-4 mt-6">
                <h4 className="font-bold text-lg text-tertiary-fixed">Group Enrollment?</h4>
                <p className="text-sm text-slate-300 leading-relaxed">Corporate training packages available for teams of 5 or more. Build a data-driven culture in your organization.</p>
                <a className="inline-block font-label text-xs text-[#ffdcc3] uppercase tracking-widest border-b border-[#ffdcc3] pb-1 hover:text-white transition-colors" href="/contact">Contact Enterprise Sales</a>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}