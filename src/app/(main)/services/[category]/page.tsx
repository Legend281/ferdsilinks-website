import { notFound } from 'next/navigation';
import Link from 'next/link';
import { serviceCategories } from '@/data/services';
import { FadeIn } from '@/components/FadeIn';

export async function generateStaticParams() {
    return serviceCategories.map((cat) => ({
        category: cat.slug,
    }));
}

export default async function ServiceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const service = serviceCategories.find(c => c.slug === category);

    if (!service) {
        notFound();
    }

    return (
        <main className="font-body text-on-surface antialiased bg-surface min-h-screen">
            {/* Hero Section - Full Width */}
            <FadeIn>
                <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary architect-grid">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-90"></div>
                    <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
                        <img className="w-full h-full object-cover" alt={service.title} src={service.heroImage} />
                    </div>
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
                        <div className="lg:w-8/12">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                                <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
                                <span className="font-label text-on-tertiary-container tracking-[0.2em] uppercase text-xs font-bold">Domain: {service.domain}</span>
                            </div>
                            <h1 className="font-headline text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] tracking-tighter mb-8">
                                {service.title}
                            </h1>
                            <p className="font-body text-xl text-on-primary-container max-w-2xl mb-12 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
                                    Consult an Architect <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                                <Link href="#capabilities" className="border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center gap-2">
                                    <span className="material-symbols-outlined">description</span> View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
                        <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
                    </div>
                </section>
            </FadeIn>

            {/* Overview: Methodology */}
            <FadeIn>
                <section className="py-32 bg-surface">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                            <div className="max-w-2xl">
                                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Ferdsilinks Methodology</h2>
                                <p className="text-on-surface-variant text-lg leading-relaxed">Our data architecture process is rigorous, scientific, and designed for scalability in emerging markets.</p>
                            </div>
                            <div className="font-label text-sm text-outline tracking-widest mt-4 md:mt-0 font-bold uppercase">EST. BUEA SILICON MOUNTAIN</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.methodology.map((step) => (
                                <div key={step.number} className="bg-surface-container-low p-10 group hover:bg-primary transition-all duration-500 rounded-xl hover:shadow-2xl">
                                    <span className="font-label text-5xl font-black text-primary/20 group-hover:text-on-tertiary-container mb-8 block transition-colors">{step.number}</span>
                                    <h3 className="font-headline text-xl font-bold text-primary group-hover:text-white mb-4 transition-colors">{step.title}</h3>
                                    <p className="text-on-surface-variant group-hover:text-primary-fixed-dim text-sm leading-relaxed transition-colors">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Core Capabilities */}
            <FadeIn>
                <section id="capabilities" className="py-32 bg-primary-container relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="grid grid-cols-12 h-full w-full architect-grid"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="mb-20 text-center">
                            <span className="bg-on-tertiary-container/20 text-on-tertiary-container font-label text-xs tracking-widest px-4 py-2 rounded-full mb-6 inline-block uppercase font-bold backdrop-blur-sm">Technical Proficiency</span>
                            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight">Advanced Computational Capabilities</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {service.capabilities.map((cap, index) => (
                                <div key={index} className="bg-[#000a1e] p-10 md:p-12 rounded-xl flex items-start gap-8 border border-white/5 group hover:border-[#cf7000]/50 hover:shadow-2xl hover:shadow-on-tertiary-container/10 transition-all duration-300">
                                    <div className="w-16 h-16 bg-[#cf7000]/10 rounded-xl flex items-center justify-center text-[#cf7000] flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl">{cap.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-headline text-2xl font-bold text-white mb-4">{cap.title}</h3>
                                        <p className="text-slate-400 leading-relaxed mb-6 font-light">{cap.description}</p>
                                        <ul className="text-sm text-slate-500 space-y-3">
                                            {cap.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex items-center gap-3 font-label font-bold text-xs tracking-wider">
                                                    <span className="min-w-2 min-h-2 w-2 h-2 bg-[#cf7000] rounded-full shadow-[0_0_10px_rgba(207,112,0,0.8)]"></span> 
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Tech Stack */}
            <FadeIn>
                <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h4 className="font-label text-xs tracking-widest text-outline uppercase font-bold mb-4">Systems &amp; Integration</h4>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 grayscale opacity-50 hover:grayscale-0 transition-all duration-700">
                            {service.techStack.map((tech, i) => (
                                <span key={i} className="font-headline font-black text-2xl md:text-3xl lg:text-4xl hover:opacity-100 hover:text-primary transition-colors cursor-default">{tech}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Case Study Teaser */}
            <FadeIn>
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                            <div className="relative group">
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" alt="Case Study Highlight" src={service.caseStudy.image} />
                                </div>
                                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-[#cf7000] p-8 md:p-10 rounded-xl text-white max-w-xs shadow-2xl z-10 group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="font-headline font-black text-5xl md:text-6xl tracking-tighter mb-3">{service.caseStudy.metric}</div>
                                    <p className="font-body text-sm font-medium leading-relaxed">{service.caseStudy.metricText}</p>
                                </div>
                            </div>
                            <div className="lg:pl-8 mt-12 lg:mt-0">
                                <span className="font-label text-sm text-[#cf7000] font-bold tracking-[0.2em] block mb-4 uppercase">Results in Action</span>
                                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-8 leading-tight tracking-tight">{service.caseStudy.title}</h2>
                                <p className="text-on-surface-variant text-lg leading-relaxed mb-10 font-light">
                                    {service.caseStudy.description}
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold group border border-outline-variant/30 px-6 py-3 rounded-lg hover:bg-surface-container-low transition-colors">
                                    <span>Discuss Similar Projects</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[#cf7000]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Expert Lead */}
            <FadeIn>
                <section className="py-24 md:py-32 bg-surface-container-high">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl border border-outline-variant/5 group">
                            <div className="md:w-5/12 lg:w-4/12 overflow-hidden aspect-square md:aspect-auto">
                                <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" alt={service.expert.name} src={service.expert.image} />
                            </div>
                            <div className="p-10 md:p-16 md:w-7/12 lg:w-8/12 flex flex-col justify-center">
                                <span className="font-label text-xs tracking-[0.2em] text-[#cf7000] font-bold mb-6 block uppercase">Project Principal</span>
                                <h3 className="font-headline text-3xl md:text-5xl font-black text-primary mb-3 tracking-tight">{service.expert.name}</h3>
                                <p className="font-label text-outline mb-10 text-sm font-bold tracking-widest uppercase">{service.expert.role}</p>
                                <p className="text-on-surface-variant text-lg md:text-xl italic leading-relaxed mb-10 border-l-4 border-on-tertiary-container pl-6 md:pl-8 font-light py-2">
                                    {service.expert.quote}
                                </p>
                                <Link href="/contact" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2 w-fit">
                                    Schedule a Call <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Final CTA */}
            <FadeIn>
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
                        <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Ready to Transform Your Business?</h2>
                        <p className="text-on-primary-container text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Start a conversation with our engineering team to discover how our {service.title.toLowerCase()} solutions can drive your success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="bg-on-tertiary-container text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2">
                                Request a Technical Audit <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                            <Link href="/services" className="border-2 border-white/30 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
                                Explore All Services
                            </Link>
                        </div>
                    </div>
                </section>
            </FadeIn>
        </main>
    );
}
