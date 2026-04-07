import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
{/* Hero Section */}
<FadeIn><section className="relative bg-primary overflow-hidden py-32 md:py-48">
<div className="absolute inset-0 opacity-20" data-alt="abstract geometric data visualization patterns with deep navy and subtle glowing orange lines and nodes">
<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-[#00152b]"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="flex flex-col items-start gap-4">
<span className="font-label text-tertiary-fixed tracking-[0.2em] uppercase text-sm font-bold">Innovation Architecture</span>
<h1 className="font-headline text-5xl md:text-8xl font-extrabold text-white leading-[1.1] tracking-tighter max-w-4xl">
                        Our Expertise
                    </h1>
<p className="font-body text-on-primary-container text-lg md:text-xl max-w-2xl leading-relaxed mt-4">
                        We build the digital infrastructure of tomorrow. From precision data science to scalable software architecture, we help global businesses thrive in the era of intelligence.
                    </p>
</div>
</div>
</section></FadeIn>
{/* Service Categories (Bento Grid Style) */}
<FadeIn><section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* IT & Software */}
<div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/15 flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
<div>
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl" data-icon="developer_mode">developer_mode</span>
<h2 className="font-headline text-3xl font-bold text-primary">IT &amp; Software</h2>
</div>
<p className="font-body text-on-surface-variant text-lg mb-8 max-w-xl">
                                Engineering high-performance digital products from conceptual architecture to global deployment. We don&apos;t just build apps; we architect ecosystems.
                            </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="cloud_done">cloud_done</span>
<span className="font-label text-xs uppercase tracking-wider font-bold">Cloud Computing</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="terminal">terminal</span>
<span className="font-label text-xs uppercase tracking-wider font-bold">Custom App Dev</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="security">security</span>
<span className="font-label text-xs uppercase tracking-wider font-bold">Cyber Security</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="database">database</span>
<span className="font-label text-xs uppercase tracking-wider font-bold">Database Design</span>
</div>
</div>
</div>
</div>
{/* Data & AI */}
<div className="md:col-span-4 bg-primary-container p-10 rounded-xl flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-tertiary-fixed text-4xl" data-icon="neurology">neurology</span>
<h2 className="font-headline text-3xl font-bold text-white">Data &amp; AI</h2>
</div>
<p className="font-body text-primary-fixed-dim text-md mb-10">
                                Harnessing the power of predictive analytics and generative AI to drive decision-making.
                            </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<span className="material-symbols-outlined text-tertiary-fixed text-sm" data-icon="check_circle">check_circle</span>
<span className="font-body font-semibold">Machine Learning</span>
</li>
<li className="flex items-center gap-3 text-white">
<span className="material-symbols-outlined text-tertiary-fixed text-sm" data-icon="check_circle">check_circle</span>
<span className="font-body font-semibold">Big Data Analytics</span>
</li>
<li className="flex items-center gap-3 text-white">
<span className="material-symbols-outlined text-tertiary-fixed text-sm" data-icon="check_circle">check_circle</span>
<span className="font-body font-semibold">Natural Language Processing</span>
</li>
</ul>
</div>
</div>
{/* Training & Research */}
<div className="md:col-span-4 bg-surface-container-high p-10 rounded-xl">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl" data-icon="school">school</span>
<h2 className="font-headline text-2xl font-bold text-primary">Training &amp; Research</h2>
</div>
<p className="font-body text-on-surface-variant text-md mb-8">
                            Cultivating the next generation of tech leaders through industry-aligned training programs.
                        </p>
<div className="bg-white p-6 rounded-lg shadow-sm">
<h4 className="font-label text-xs font-bold text-on-tertiary-container uppercase mb-2">Focus Areas</h4>
<p className="font-body text-sm text-primary font-semibold">Applied Tech Research &amp; Corporate Upskilling</p>
</div>
</div>
{/* Consulting & Print */}
<div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/15 flex gap-10 items-center">
<div className="flex-1">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl" data-icon="strategy">strategy</span>
<h2 className="font-headline text-3xl font-bold text-primary">Consulting &amp; Print</h2>
</div>
<p className="font-body text-on-surface-variant text-lg mb-6">
                                Strategic digital transformation and high-end printing services for corporate identity and documentation.
                            </p>
<button className="font-label text-sm font-bold text-secondary flex items-center gap-2 group">
                                Learn More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="hidden md:block w-48 h-48 rounded-xl overflow-hidden shadow-2xl" data-alt="professional modern office interior in Buea with blueprints and high-end tech equipment on a sleek desk">
<img alt="Consulting Office" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA86nDnk9sJBqHgyWq0d3K-7cQ241xb7Wo2MVKl1wqwarAVZ2TOlfCNgOH5_AMaOAKe8g0IGPLbybdSPhhxpJRmKCqTqFnzrYAK8MMOdESNrzvlifRr3_Fd-b4Zb4x6saNYNDDQITVFqzmd6EsM6E_ET7d2_aU8mt4f_7AzGbwwyxtlJlbLDUi4klth5azIaPKnXsZPq30HgMg2Z9fvGibN18FMVYQWHRassOlYJVzg2gkbytrSy_ooWWOCSqaOoq44EKOZvTMh1nl"/>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Our Process */}
<FadeIn><section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="font-label text-on-tertiary-container tracking-widest uppercase text-sm font-bold">The Blueprint</span>
<h2 className="font-headline text-4xl md:text-5xl font-black text-primary mt-4 tracking-tight">Our Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
{/* Connector Line (Desktop) */}
<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-outline-variant/30 -z-10"></div>
{/* Step 1 */}
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-surface-container-low group-hover:border-on-tertiary-container transition-all duration-300 mb-6 relative">
<span className="absolute -top-2 -right-2 bg-on-tertiary-container text-white text-xs font-bold px-2 py-1 rounded">01</span>
<span className="material-symbols-outlined text-on-tertiary-container text-3xl" data-icon="search">search</span>
</div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">Discovery</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Deep diving into your business ecosystem to identify gaps and opportunities.</p>
</div>
{/* Step 2 */}
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-surface-container-low group-hover:border-on-tertiary-container transition-all duration-300 mb-6 relative">
<span className="absolute -top-2 -right-2 bg-on-tertiary-container text-white text-xs font-bold px-2 py-1 rounded">02</span>
<span className="material-symbols-outlined text-on-tertiary-container text-3xl" data-icon="architecture">architecture</span>
</div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">Strategy</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Architecting a technical roadmap aligned with your long-term growth goals.</p>
</div>
{/* Step 3 */}
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-surface-container-low group-hover:border-on-tertiary-container transition-all duration-300 mb-6 relative">
<span className="absolute -top-2 -right-2 bg-on-tertiary-container text-white text-xs font-bold px-2 py-1 rounded">03</span>
<span className="material-symbols-outlined text-on-tertiary-container text-3xl" data-icon="code">code</span>
</div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">Implementation</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Agile development and execution with a focus on precision and performance.</p>
</div>
{/* Step 4 */}
<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm border-4 border-surface-container-low group-hover:border-on-tertiary-container transition-all duration-300 mb-6 relative">
<span className="absolute -top-2 -right-2 bg-on-tertiary-container text-white text-xs font-bold px-2 py-1 rounded">04</span>
<span className="material-symbols-outlined text-on-tertiary-container text-3xl" data-icon="speed">speed</span>
</div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">Optimization</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Continuous data monitoring and refinement to ensure peak efficiency.</p>
</div>
</div>
</div>
</section></FadeIn>
{/* CTA Section */}
<FadeIn><section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-primary rounded-xl p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
<div className="absolute inset-0 bg-gradient-to-tr from-primary to-[#002147] -z-10"></div>
<div className="absolute -right-24 -top-24 w-96 h-96 bg-on-tertiary-container/10 rounded-full blur-3xl"></div>
<h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tighter">Ready to architect your digital future?</h2>
<p className="font-body text-primary-fixed-dim text-lg mb-12 max-w-2xl leading-relaxed">
                        Join the ranks of innovative companies leveraging Cameroonian excellence for global impact. Let&apos;s discuss your next breakthrough project.
                    </p>
<div className="flex flex-col md:flex-row gap-4">
<button className="bg-on-tertiary-container text-white px-10 py-4 rounded-lg font-headline font-black text-lg transition-all duration-300 hover:shadow-xl hover:shadow-on-tertiary-container/20 hover:scale-[1.02] active:scale-95">
                            Request a Custom Quote
                        </button>
<button className="border border-white/20 text-white px-10 py-4 rounded-lg font-headline font-black text-lg hover:bg-white/10 transition-all duration-300">
                            Book a Consultation
                        </button>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
    