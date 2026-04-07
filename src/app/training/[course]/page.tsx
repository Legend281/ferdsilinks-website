import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
{/* Left Column: Content */}
<div className="lg:col-span-8 space-y-16">
{/* Hero Section */}
<FadeIn><section className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-xs font-label uppercase tracking-widest">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                        Advanced Specialization
                    </div>
<h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary tracking-tighter leading-[1.1]">
                        Mastering <span className="text-on-tertiary-container">Data Science</span> &amp; Big Data
                    </h1>
<p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                        Architect the future of tech. Master advanced analytics, scalable big data pipelines, and machine learning models designed for the next generation of African digital innovation.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all">Enroll Now - $499</button>
<button className="outline outline-2 outline-outline-variant px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-high transition-all">Download Syllabus</button>
</div>
</section></FadeIn>
{/* What You'll Learn: Bento Style */}
<FadeIn><section className="space-y-8">
<h2 className="font-headline text-3xl font-bold text-primary">What You'll Learn</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 flex gap-4 items-start">
<span className="material-symbols-outlined text-on-tertiary-container text-3xl">javascript</span>
<div>
<h3 className="font-bold text-primary mb-1">Advanced Python</h3>
<p className="text-sm text-on-surface-variant">Functional programming and production-grade data scripts.</p>
</div>
</div>
<div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 flex gap-4 items-start">
<span className="material-symbols-outlined text-on-tertiary-container text-3xl">hub</span>
<div>
<h3 className="font-bold text-primary mb-1">Machine Learning</h3>
<p className="text-sm text-on-surface-variant">Neural networks, clustering, and predictive modeling at scale.</p>
</div>
</div>
<div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 flex gap-4 items-start">
<span className="material-symbols-outlined text-on-tertiary-container text-3xl">monitoring</span>
<div>
<h3 className="font-bold text-primary mb-1">Data Visualization</h3>
<p className="text-sm text-on-surface-variant">Creating executive-level insights with D3.js and PowerBI.</p>
</div>
</div>
<div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 flex gap-4 items-start">
<span className="material-symbols-outlined text-on-tertiary-container text-3xl">database</span>
<div>
<h3 className="font-bold text-primary mb-1">Big Data Ecosystems</h3>
<p className="text-sm text-on-surface-variant">Hadoop, Spark, and cloud-native data warehousing architectures.</p>
</div>
</div>
</div>
</section></FadeIn>
{/* Curriculum Section */}
<FadeIn><section className="space-y-8">
<div className="flex justify-between items-end">
<h2 className="font-headline text-3xl font-bold text-primary">Curriculum</h2>
<span className="font-label text-sm text-on-surface-variant uppercase tracking-widest">12 Comprehensive Modules</span>
</div>
<div className="space-y-4">
{/* Module 1 */}
<div className="bg-surface-container-low rounded-xl overflow-hidden">
<div className="p-6 flex justify-between items-center cursor-pointer">
<div className="flex gap-6 items-center">
<span className="text-on-tertiary-container font-label font-bold">01</span>
<h4 className="font-bold text-lg text-primary">Foundations of Data Architecture</h4>
</div>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
{/* Module 2 (Expanded State Simulation) */}
<div className="bg-surface-container-lowest rounded-xl border-l-4 border-on-tertiary-container shadow-sm overflow-hidden">
<div className="p-6 flex justify-between items-center">
<div className="flex gap-6 items-center">
<span className="text-on-tertiary-container font-label font-bold">02</span>
<h4 className="font-bold text-lg text-primary">Python for Big Data Processing</h4>
</div>
<span className="material-symbols-outlined">expand_less</span>
</div>
<div className="px-6 pb-6 pt-0 ml-12 space-y-4">
<ul className="space-y-3 text-on-surface-variant border-t border-outline-variant/20 pt-4">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">play_circle</span> Vectorized Operations with NumPy</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">play_circle</span> High-performance DataFrames with Pandas</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-sm">description</span> Assignment: Real-world Logistics Optimization</li>
</ul>
</div>
</div>
{/* Module 3 */}
<div className="bg-surface-container-low rounded-xl overflow-hidden">
<div className="p-6 flex justify-between items-center cursor-pointer">
<div className="flex gap-6 items-center">
<span className="text-on-tertiary-container font-label font-bold">03</span>
<h4 className="font-bold text-lg text-primary">Statistical Modeling &amp; Inference</h4>
</div>
<span className="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
</section></FadeIn>
{/* Instructor Section */}
<FadeIn><section className="bg-primary-container text-white rounded-xl p-8 md:p-12 relative overflow-hidden">
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
<div className="col-span-1">
<img className="w-full aspect-square object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" data-alt="professional portrait of a confident tech instructor with glasses against a clean architectural background, soft cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzEzAIA6CfN3sIUGLqgkRawgDOBoHpCqzXIeZbPDu8ZMf4W-KDyT2jjav5ZMLDqlmPZcndzoPhcqA8Yd0nygZbcjcvt5kY30eLEG5gpcVpxuVGTSDqk0MCJyCvPbSEEmiXBkxFUYBEIlEM2WyutszMzBxgXuCWlYQyJjpe9hDmL2wMdUQexB-5yJZFUMdG63MTa2tb6LktJ8huOls4LqlCEUuhknJtABGBkDOksZi2cE5s4kyHUuGxvpk_tzrPbRGqkp0A5h7Pjl07"/>
</div>
<div className="col-span-2 space-y-4">
<h2 className="font-headline text-3xl font-extrabold tracking-tight">Meet Your Instructor</h2>
<h3 className="text-tertiary-fixed text-xl font-bold">Dr. Emmanuel Fongoh</h3>
<p className="text-on-primary-container text-lg leading-relaxed">
                                Lead Data Scientist at Silicon Mountain Hub. With over 15 years of experience architecting large-scale data systems for global fintech firms, Dr. Fongoh brings practical, battle-tested expertise to the classroom.
                            </p>
<div className="flex gap-4 pt-2">
<span className="text-xs font-label uppercase tracking-tighter bg-white/10 px-3 py-1 rounded">Ex-Google DeepMind</span>
<span className="text-xs font-label uppercase tracking-tighter bg-white/10 px-3 py-1 rounded">Stanford Alum</span>
</div>
</div>
</div>
{/* Decorative Element */}
<div className="absolute top-0 right-0 w-64 h-64 bg-on-tertiary-container opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
</section></FadeIn>
{/* Testimonials */}
<FadeIn><section className="space-y-8 pb-12">
<h2 className="font-headline text-3xl font-bold text-primary">Student Impact</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-surface-container-high p-8 rounded-xl space-y-4">
<div className="flex gap-1 text-on-tertiary-container">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="italic text-primary font-medium leading-relaxed">"The Big Data module completely changed how I approach backend architecture. The local context provided by the instructors is invaluable."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary">JM</div>
<div>
<p className="text-sm font-bold text-primary">Junior Mbah</p>
<p className="text-xs text-on-surface-variant">Data Engineer, Fintech Buea</p>
</div>
</div>
</div>
<div className="bg-surface-container-high p-8 rounded-xl space-y-4">
<div className="flex gap-1 text-on-tertiary-container">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="italic text-primary font-medium leading-relaxed">"High-end curriculum with a focus on real-world application. I landed a senior role before I even finished the Capstone project."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-primary">SN</div>
<div>
<p className="text-sm font-bold text-primary">Sarah Ngassa</p>
<p className="text-xs text-on-surface-variant">ML Researcher</p>
</div>
</div>
</div>
</div>
</section></FadeIn>
</div>
{/* Right Column: Sticky Sidebar */}
<aside className="lg:col-span-4">
<div className="sticky top-28 space-y-6">
<div className="bg-surface-container-lowest rounded-xl shadow-[0px_24px_48px_rgba(0,33,71,0.08)] border border-outline-variant/10 overflow-hidden">
<div className="aspect-video relative group overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="clean high-tech dashboard displaying glowing data visualizations and charts on a dark interface, modern tech aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX7iz0Wv2BRIfnBOtT55ua8ja2q3oV6ZBAGgk3xlBWdvKEGwu-vcT1MiE0kHI_b5QnUM-iSoTVOGmPtkyrffFe_quk1pDMKSP2uDvqritck67naa1gottc73No46kpSq-gRXhwXSMXeoqFYbzUVqa6b1_O67_LgiEHaut-1Nia8LRp-xf1xL3PpDULZAKgGe-U_fQ30dmyqPqKViJ1Ok52uFMTEBeondBLPMkvNcxuu5Ws7NUWcVQcFczpZOi6vYTZMc6nhGDwJQn_"/>
<div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
<button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-container shadow-xl hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
</button>
</div>
</div>
<div className="p-8 space-y-6">
<div className="flex justify-between items-center">
<span className="text-3xl font-black text-primary">$499</span>
<span className="text-on-surface-variant line-through">$899</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined">calendar_today</span>
<div>
<p className="text-xs uppercase font-label tracking-widest">Start Date</p>
<p className="text-primary font-bold">Oct 15, 2024</p>
</div>
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined">schedule</span>
<div>
<p className="text-xs uppercase font-label tracking-widest">Duration</p>
<p className="text-primary font-bold">12 Weeks / 80+ Hours</p>
</div>
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined">bar_chart</span>
<div>
<p className="text-xs uppercase font-label tracking-widest">Skill Level</p>
<p className="text-primary font-bold">Intermediate to Advanced</p>
</div>
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined">verified</span>
<div>
<p className="text-xs uppercase font-label tracking-widest">Certification</p>
<p className="text-primary font-bold">Professional Certificate</p>
</div>
</div>
</div>
<button className="w-full bg-on-tertiary-container text-white py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-md">Enroll Now</button>
<p className="text-center text-xs text-on-surface-variant font-label">30-Day Money Back Guarantee</p>
</div>
</div>
{/* Additional Sidebar Info */}
<div className="bg-primary p-8 rounded-xl text-white space-y-4">
<h4 className="font-bold text-lg">Group Enrollment?</h4>
<p className="text-sm text-slate-300 leading-relaxed">Corporate training packages available for teams of 5 or more. Build a data-driven culture in your organization.</p>
<Link className="inline-block font-label text-xs text-[#ffdcc3] uppercase tracking-widest border-b border-[#ffdcc3] pb-1" href="#">Contact Enterprise Sales</Link>
</div>
</div>
</aside>
</div>

    </main>
  );
}
    