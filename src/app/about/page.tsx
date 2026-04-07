import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
{/* Hero: Our Story */}
<FadeIn><section className="relative overflow-hidden bg-primary py-32 md:py-48 architect-grid">
<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary opacity-90"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="md:w-3/5">
<span className="font-label text-tertiary-fixed text-sm uppercase tracking-widest mb-6 block">The Digital Architect</span>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
                            Our Story
                        </h1>
<p className="text-on-primary-container text-lg md:text-xl max-w-2xl leading-relaxed">
                            From the foothills of Mount Fako, we are engineering the future. Our mission is to lead Africa&apos;s tech revolution, transforming Buea into a global beacon of precision data science and innovative tech infrastructure.
                        </p>
</div>
<div className="md:w-2/5 relative">
<div className="aspect-square rounded-xl overflow-hidden shadow-2xl border-4 border-white/5">
<img className="w-full h-full object-cover" data-alt="modern tech office interior in Buea with panoramic mountain views and glass walls reflecting vibrant tropical sunset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpXKYjf0Nn13X-MVvNAZwGcFTE7ZONaxSMlxbi1vwruBcUidLxwxh0P7A27ywFRN6jgRoEUYcdUez9Y7mzJDoAbRYYGe3pOI3gy6o3GVPna9HTGO2nR_oJHCnxxe6Iusr29-Qhwgh4j1RLopLDX_Mngo5NWWIAu0HTJNOJyYeDL_VM9IhlQHAvEYtNs_vPhDbT7boVM-di4NIkHXK1MfDRvHE4NsCn2PiFyDDjK3lypzTUAevtUhAGKiDQwur3M3e7WJ6ii-p55Unl"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-on-tertiary-container p-8 rounded-lg shadow-xl hidden md:block">
<span className="text-white font-headline font-black text-4xl block">10+</span>
<span className="text-tertiary-fixed font-label text-xs uppercase tracking-tighter">Proprietary Assets</span>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Mission & Vision: Bento Grid */}
<FadeIn><section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
{/* Mission */}
<div className="bg-surface-container-lowest p-12 rounded-xl shadow-[0px_24px_48px_rgba(0,33,71,0.04)] flex flex-col gap-6">
<div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="rocket_launch">rocket_launch</span>
</div>
<h2 className="font-headline text-3xl font-extrabold text-primary">Our Mission</h2>
<p className="text-on-surface-variant text-lg leading-relaxed">
                            To empower organizations with architecturally sound data systems and innovative tech solutions that foster sustainable growth and technological sovereignty across the African continent.
                        </p>
</div>
{/* Vision */}
<div className="bg-primary-container p-12 rounded-xl flex flex-col gap-6">
<div className="w-16 h-16 bg-on-tertiary-container rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-white text-3xl" data-icon="visibility" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
</div>
<h2 className="font-headline text-3xl font-extrabold text-white">Our Vision</h2>
<p className="text-on-primary-container text-lg leading-relaxed">
                            To become the definitive authority in data excellence, establishing Buea as the "Silicon Mountain" heart of global technology where precision meets purpose.
                        </p>
</div>
</div>
</div>
</section></FadeIn>
{/* Our Journey: Vertical Timeline */}
<FadeIn><section className="py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center">
<span className="font-label text-on-tertiary-container text-sm uppercase tracking-widest mb-4">Chronicles of Tech</span>
<h2 className="font-headline text-4xl md:text-5xl font-black text-primary">Our Journey</h2>
</div>
<div className="relative">
{/* Timeline Line */}
<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-on-tertiary-container to-transparent opacity-20 hidden md:block"></div>
{/* Milestone 1 */}
<div className="relative mb-20 md:flex items-center justify-between">
<div className="md:w-5/12 text-right hidden md:block">
<h3 className="font-headline text-2xl font-bold text-primary mb-2">The Foundation</h3>
<p className="text-on-surface-variant">Founded in the tech hub of Buea, Cameroon, with a vision to bridge the gap between data research and industrial application.</p>
</div>
<div className="relative z-10 w-12 h-12 bg-on-tertiary-container rounded-full border-4 border-white mx-auto shadow-lg flex items-center justify-center mb-6 md:mb-0">
<span className="font-label text-white text-xs">2020</span>
</div>
<div className="md:w-5/12 md:hidden">
<h3 className="font-headline text-2xl font-bold text-primary mb-2">The Foundation</h3>
<p className="text-on-surface-variant">Founded in the tech hub of Buea, Cameroon, with a vision to bridge the gap between data research and industrial application.</p>
</div>
<div className="md:w-5/12 hidden md:block"></div>
</div>
{/* Milestone 2 */}
<div className="relative mb-20 md:flex items-center justify-between">
<div className="md:w-5/12 hidden md:block"></div>
<div className="relative z-10 w-12 h-12 bg-primary rounded-full border-4 border-white mx-auto shadow-lg flex items-center justify-center mb-6 md:mb-0">
<span className="font-label text-white text-xs">2021</span>
</div>
<div className="md:w-5/12">
<h3 className="font-headline text-2xl font-bold text-primary mb-2">First Major Project</h3>
<p className="text-on-surface-variant">Partnered with continental leaders to deploy a large-scale data architecture system, proving our precision-led approach.</p>
</div>
</div>
{/* Milestone 3 */}
<div className="relative mb-20 md:flex items-center justify-between">
<div className="md:w-5/12 text-right">
<h3 className="font-headline text-2xl font-bold text-primary mb-2">Training Hub Launch</h3>
<p className="text-on-surface-variant">Launched our specialized training wing to cultivate the next generation of Cameroon&apos;s top-tier digital architects.</p>
</div>
<div className="relative z-10 w-12 h-12 bg-on-tertiary-container rounded-full border-4 border-white mx-auto shadow-lg flex items-center justify-center mb-6 md:mb-0">
<span className="font-label text-white text-xs">2023</span>
</div>
<div className="md:w-5/12 hidden md:block"></div>
</div>
</div>
</div>
</section></FadeIn>
{/* Our Team: Editorial Grid */}
<FadeIn><section className="py-24 bg-surface">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-headline text-4xl font-black text-primary mb-4">Leadership &amp; Visionaries</h2>
<p className="text-on-surface-variant max-w-xl text-lg">A diverse collective of data scientists, software engineers, and strategic thinkers committed to African excellence.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
{/* Team Member 1 */}
<div className="group">
<div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover" data-alt="portrait of a professional African tech leader in a minimalist blazer, warm confident expression, studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOAtxm0Ms_tv9WrD4-5n0XzzZiEXlKR03PkpCLbsnpalHRQxKC1J2cqPHwAvuqHr2KwJijqHlCSu0fTCYFskQyEVE6-yxH_pLc3AWBWKudi44_MDQWQzp_5O8CHZsCcum3V2Vb7_JK0995skk7ogF0kdOF8BoT0ZNyQ-O6DXzizyrs3qGflNoSjwLIEYQsezGEpX-KMChy0g_1ZpDE-rTEfx9-LBQ89ETnmocfVvFv1pj6RGfEeOY-g5p43-RK_NUr7ScquXQ1-wwj"/>
<div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<Link className="w-10 h-10 bg-on-tertiary-container flex items-center justify-center rounded-lg text-white" href="#">
<span className="material-symbols-outlined text-sm" data-icon="link">link</span>
</Link>
</div>
</div>
<h4 className="font-headline font-extrabold text-xl text-primary">Dr. Ferdinand Ndip</h4>
<p className="text-on-tertiary-container font-label text-xs uppercase tracking-widest mt-1">Chief Digital Architect</p>
</div>
{/* Team Member 2 */}
<div className="group">
<div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover" data-alt="professional African woman software engineer in a modern office setting, smart casual attire, focused and professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXvzwN5IeEzvNo3exIVhXpDI0KWveyH_MnM53K_clHCy1PEgCPddEoWOswQHDt3rrqLUoP-7YmoigCaS6s5EPZYzD60U6oJ7Eh8EecCt-F4PaQlmrTrCaNe5Du3VWc9Uu9ZPyYEVnh6KOgvRogQaODVcQheOfNKDNdSjiHoUr7wlx6pahYMvLlfbWm5tNSzq-PrOQt9jx8l_H46CiRiS9FLV26DTdCZkpEcxoNdDHrFO8pHVUZwgEdfoyA6Fv_NNR1TB4GpuC94wmd"/>
<div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<Link className="w-10 h-10 bg-on-tertiary-container flex items-center justify-center rounded-lg text-white" href="#">
<span className="material-symbols-outlined text-sm" data-icon="link">link</span>
</Link>
</div>
</div>
<h4 className="font-headline font-extrabold text-xl text-primary">Elsa Bih</h4>
<p className="text-on-tertiary-container font-label text-xs uppercase tracking-widest mt-1">Lead Data Strategy</p>
</div>
{/* Team Member 3 */}
<div className="group">
<div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover" data-alt="portrait of a young African male tech professional with glasses, bright creative environment background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbMel_fVJW0Zj3fmJo-H1Ogxc7571fqH_8vG_fMPoScZya_Fs6HZxmy3wnFC-Y8DcUCk0jmzAy_HO4r8L9FOsJuPE4G1Af-X80iCp0tpPhspK0wxJodSyqa854I3ru8ZuqRbs_kSrlxCQavTeeVIX_6SLiAGAPvKDaIbNO_msFxLcT2pOMHF42usO5Ph9X0EKl3-U5csuZb38UaDRNgN2gkztiN7GfvAD7ua5BeOqkniimrxcE8f7mpZAdmDbu846egLl11abLWiyR"/>
<div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<Link className="w-10 h-10 bg-on-tertiary-container flex items-center justify-center rounded-lg text-white" href="#">
<span className="material-symbols-outlined text-sm" data-icon="link">link</span>
</Link>
</div>
</div>
<h4 className="font-headline font-extrabold text-xl text-primary">Mark Tita</h4>
<p className="text-on-tertiary-container font-label text-xs uppercase tracking-widest mt-1">Head of Engineering</p>
</div>
{/* Team Member 4 */}
<div className="group">
<div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden mb-6 relative grayscale hover:grayscale-0 transition-all duration-500">
<img className="w-full h-full object-cover" data-alt="confident professional woman in tech leadership, modern interior with soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnCI0CAhOzeRaEEUWiWum1kR3rA0xROds70m9Twtl8Prd2k6VtbugR83Jeb9-BrlPlm87hqzAADSo-5PO70A38ht7LmZIbjvzvlXK9LUZLTgAgK4WqmefctTjTuvzvkcldKaDrtG4UDQGRp4BBEGPaF6JhiuN5iHqg9cYxbjPwB1nScKa8R6b9Z6IBk2xopsQNxRyFEhISgMa0eN-71DsBUPdxsKYiI5C0EVe3LbuPvYbP4J3fsgzr4g0RCEXIp3XmUal0admizbVK"/>
<div className="absolute bottom-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<Link className="w-10 h-10 bg-on-tertiary-container flex items-center justify-center rounded-lg text-white" href="#">
<span className="material-symbols-outlined text-sm" data-icon="link">link</span>
</Link>
</div>
</div>
<h4 className="font-headline font-extrabold text-xl text-primary">Grace Ngalla</h4>
<p className="text-on-tertiary-container font-label text-xs uppercase tracking-widest mt-1">Chief Operations Officer</p>
</div>
</div>
</div>
</section></FadeIn>
{/* Why Choose Us */}
<FadeIn><section className="py-24 bg-primary-container text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<h2 className="font-headline text-4xl md:text-5xl font-black mb-8 leading-tight">The Ferdsilinks Advantage</h2>
<div className="space-y-10">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 bg-on-tertiary-container flex-shrink-0 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-white" data-icon="science">science</span>
</div>
<div>
<h4 className="font-headline font-bold text-xl mb-2">Research-Led Approach</h4>
<p className="text-on-primary-container leading-relaxed">Our solutions aren't just built; they are architected based on deep academic research and rigorous testing.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 bg-on-tertiary-container flex-shrink-0 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-white" data-icon="location_on">location_on</span>
</div>
<div>
<h4 className="font-headline font-bold text-xl mb-2">Local Expertise, Global Standards</h4>
<p className="text-on-primary-container leading-relaxed">Deep understanding of the African business landscape combined with international engineering protocols.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-12 h-12 bg-on-tertiary-container flex-shrink-0 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-white" data-icon="verified_user">verified_user</span>
</div>
<div>
<h4 className="font-headline font-bold text-xl mb-2">High-Trust Architecture</h4>
<p className="text-on-primary-container leading-relaxed">We prioritize data sovereignty and secure infrastructure, ensuring long-term institutional reliability.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2">
<div className="relative p-8 bg-primary rounded-xl border border-white/10 shadow-2xl overflow-hidden">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-on-tertiary-container/10 blur-[100px] rounded-full"></div>
<div className="relative z-10">
<span className="material-symbols-outlined text-5xl text-on-tertiary-container mb-6" data-icon="format_quote" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<p className="text-2xl font-headline italic leading-relaxed mb-8">
                                    "Ferdsilinks didn&apos;t just deliver software; they delivered a strategic blueprint that transformed how we process information across three countries."
                                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="headshot of a business executive in a dark suit with a warm and professional smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvN599kQmj0AXO_Xz3VCD9vpXvyVoJ_Tle_ECq9xIUuJ9ggpW3HneMU3flCf1Ls4dMsFzb5zNmsHY6aioYsTgrUb9rVa1MNWn6-DrRGqqgsvfZPBvRPEoAjnDLFoc2bEMfuhyiVL9pFIgMcPrb73mqMCzJjD_XTGLaFAH0vgGQQtXHUeAStGwlFvvdDatAzpBHv09cS2lTRItEpaObCdDsstIdd8FX46a9BfPFWfMNzet_hFLw1_WliPms2cJHZZgkCS6pOMX5-Yik"/>
</div>
<div>
<p className="font-bold">Samuel Eto'o</p>
<p className="text-xs font-label uppercase text-on-primary-container">Managing Director, CEMAC Tech</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* CTA: Join the Revolution */}
<FadeIn><section className="py-24 bg-surface">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-surface-container-high p-12 md:p-20 rounded-xl relative overflow-hidden flex flex-col items-center text-center">
<div className="absolute top-0 right-0 p-12 text-primary opacity-5">
<span className="material-symbols-outlined text-[200px]" data-icon="architecture">architecture</span>
</div>
<h2 className="font-headline text-4xl md:text-5xl font-black text-primary mb-6 relative z-10">Ready to build the future?</h2>
<p className="text-on-surface-variant text-lg max-w-2xl mb-10 relative z-10">Whether you&apos;re looking for a technology partner or want to join our growing team of digital architects, we&apos;re ready for you.</p>
<div className="flex flex-col sm:flex-row gap-4 relative z-10">
<button className="bg-on-tertiary-container text-white px-10 py-4 rounded font-headline font-extrabold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg">
                            Work With Us
                        </button>
<button className="bg-white border-2 border-primary text-primary px-10 py-4 rounded font-headline font-extrabold text-lg transition-colors hover:bg-primary hover:text-white">
                            Join Our Team
                        </button>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
    