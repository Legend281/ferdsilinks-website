import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
{/* Hero Section */}
<FadeIn><section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-primary">
<div className="absolute inset-0 z-0 opacity-40">
<img className="w-full h-full object-cover" data-alt="abstract geometric mesh of glowing data points and lines flowing across a deep navy background with atmospheric depth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq1CiVfhsVykFppPFNfi1xinJf2jXH4mYE8yLS-7AznD_JK8JQf27sTwEhssWlx5T3NXc0R2czdDu7hk0vTdDSLE7UcLskwG3lA4w7MisPOfE4zjdte_tFteJabygq6XGIfsjCTZFp6XOUXVDoGYEzKnv51JyDn5D88E-Pbyj46UwY34bOMETstUkf5XQjOu87jc9yUIurcnvX8B4lKRTZlMnnqyToTDApgeoc5ilEIbPldbrxrSphDeNofgcrs0hSVNVCS9TYx0UE"/>
</div>
<div className="max-w-7xl mx-auto px-8 w-full relative z-10 architect-grid">
<div className="col-span-12 md:col-span-8 lg:col-span-7">
<span className="font-label text-tertiary-fixed text-sm tracking-[0.2em] mb-6 block">CAREERS AT FERDSILINKS</span>
<h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none tracking-tighter mb-8">
                        Build the Future of <span className="text-on-tertiary-container">African</span> Innovation
                    </h1>
<p className="text-primary-fixed text-lg md:text-xl leading-relaxed mb-10 max-w-2xl opacity-80">
                        Join the Silicon Mountain ecosystem in Buea. We are looking for the architects of the next digital revolution. Join a team where data science meets cultural impact.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<Link className="bg-on-tertiary-container text-white px-10 py-5 rounded font-bold text-center hover:shadow-xl hover:shadow-orange-950/20 transition-all" href="#open-roles">
                            View Open Roles
                        </Link>
<Link className="border border-outline-variant text-white px-10 py-5 rounded font-bold text-center hover:bg-white/10 transition-all" href="#">
                            Our Process
                        </Link>
</div>
</div>
</div>
{/* Scroll Indicator */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
<span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
</div>
</section></FadeIn>
{/* Why Join Us (Culture) */}
<FadeIn><section className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-20 text-center md:text-left">
<h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary mb-4">The Architect's Culture</h2>
<div className="w-24 h-2 bg-on-tertiary-container mb-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Card 1 */}
<div className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:-translate-y-2 group shadow-sm">
<div className="mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Innovation First</h3>
<p className="text-on-surface-variant leading-relaxed">We push the boundaries of what's possible in tech, prioritizing creative problem-solving over traditional methods.</p>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:-translate-y-2 group shadow-sm">
<div className="mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Community Roots</h3>
<p className="text-on-surface-variant leading-relaxed">Deeply embedded in Buea&apos;s tech scene, we build solutions that empower local and regional growth.</p>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:-translate-y-2 group shadow-sm">
<div className="mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Global Impact</h3>
<p className="text-on-surface-variant leading-relaxed">From the foot of Mount Cameroon, our code and data insights reach clients and users across the globe.</p>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest p-10 rounded-xl transition-all hover:-translate-y-2 group shadow-sm">
<div className="mb-8 text-on-tertiary-container group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4">Continuous Learning</h3>
<p className="text-on-surface-variant leading-relaxed">The architecture of tech evolves daily. We invest heavily in our team's mastery of new domains.</p>
</div>
</div>
</div>
</section></FadeIn>
{/* Our Ecosystem: Silicon Mountain */}
<FadeIn><section className="relative py-32 overflow-hidden">
<div className="absolute inset-0 bg-primary-container z-0"></div>
<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="architect-grid items-center">
<div className="col-span-12 lg:col-span-5 text-white">
<span className="font-label text-on-tertiary-container text-sm tracking-widest block mb-4">OUR ECOSYSTEM</span>
<h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8">Silicon Mountain</h2>
<p className="text-primary-fixed-dim text-lg leading-relaxed mb-8">
                            Buea is not just a city; it&apos;s a pulse. Nestled at the foot of Mount Cameroon, our hub combines a cool highland climate with the high-intensity energy of a blooming tech revolution. 
                        </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span>Premier University ecosystem</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span>A vibrant community of 100+ tech startups</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span>Unrivaled lifestyle &amp; natural beauty</span>
</li>
</ul>
</div>
<div className="col-span-12 lg:col-span-7">
<div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Modern tech office space in Buea with large windows overlooking the misty slopes of Mount Cameroon during sunrise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMliR_y83wYHHuuqOOHl5viW4rhrumja-9nfjF5jfE6xiSpkXz3lpYLcibw8KSDD3xhLrtoQfX2avAAJHAnquYss0rUqxekrQOaNL4zgX8LqAST9EmCPxkr1TI9-3QZFTaMPXi1pca2Ed2MHj1-fAkrxUSI54U8dEFUNkKmh3ganpG90_Wyrkj8PZ9yK2W5WNpqgrqVt0_OaB_wmSxrCgIjUmn0sKRzPz1KZs49-iNux4JkukXD1mXOPNB04VQmDKuGQSFOJ3kgcsX"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<p className="font-label text-white text-xs tracking-tighter uppercase">Office View // Latitude: 4.1550° N</p>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Open Roles */}
<FadeIn><section className="py-32 bg-surface" id="open-roles">
<div className="max-w-5xl mx-auto px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-headline text-4xl font-extrabold text-primary mb-4">Open Positions</h2>
<p className="text-on-surface-variant">Join a team of visionaries and builders.</p>
</div>
<div className="flex gap-2 p-1 bg-surface-container-high rounded-lg">
<button className="px-6 py-2 bg-white text-primary font-bold rounded shadow-sm text-sm">All</button>
<button className="px-6 py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Engineering</button>
<button className="px-6 py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Design</button>
<button className="px-6 py-2 text-on-surface-variant hover:text-primary font-bold text-sm">Data</button>
</div>
</div>
<div className="space-y-4">
{/* Job Item 1 */}
<div className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center transition-all cursor-pointer">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded font-label text-[10px] uppercase tracking-wider">Engineering</span>
<span className="text-on-tertiary-container font-label text-[10px] uppercase tracking-wider">Full-Time</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Senior Data Scientist</h3>
<div className="flex items-center gap-4 mt-2 text-on-surface-variant text-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Buea / Remote</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Competitive Salary</span>
</div>
</div>
<span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-on-tertiary-container group-hover:translate-x-2 transition-all mt-4 md:mt-0">arrow_forward</span>
</div>
{/* Job Item 2 */}
<div className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center transition-all cursor-pointer">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded font-label text-[10px] uppercase tracking-wider">Engineering</span>
<span className="text-on-tertiary-container font-label text-[10px] uppercase tracking-wider">Remote Possible</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">Software Engineer (Full Stack)</h3>
<div className="flex items-center gap-4 mt-2 text-on-surface-variant text-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Buea, Cameroon</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Competitive Salary</span>
</div>
</div>
<span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-on-tertiary-container group-hover:translate-x-2 transition-all mt-4 md:mt-0">arrow_forward</span>
</div>
{/* Job Item 3 */}
<div className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center transition-all cursor-pointer">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded font-label text-[10px] uppercase tracking-wider">Design</span>
<span className="text-on-tertiary-container font-label text-[10px] uppercase tracking-wider">Full-Time</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">UI/UX Designer</h3>
<div className="flex items-center gap-4 mt-2 text-on-surface-variant text-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Buea / Remote</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Competitive Salary</span>
</div>
</div>
<span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-on-tertiary-container group-hover:translate-x-2 transition-all mt-4 md:mt-0">arrow_forward</span>
</div>
{/* Job Item 4 */}
<div className="group bg-surface-container-low hover:bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center transition-all cursor-pointer">
<div>
<div className="flex items-center gap-3 mb-2">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded font-label text-[10px] uppercase tracking-wider">Operations</span>
<span className="text-on-tertiary-container font-label text-[10px] uppercase tracking-wider">On-Site</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary group-hover:text-secondary transition-colors">IT Support Specialist</h3>
<div className="flex items-center gap-4 mt-2 text-on-surface-variant text-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Buea HQ</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">payments</span> Market Leading</span>
</div>
</div>
<span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-on-tertiary-container group-hover:translate-x-2 transition-all mt-4 md:mt-0">arrow_forward</span>
</div>
</div>
</div>
</section></FadeIn>
{/* Benefits Grid */}
<FadeIn><section className="py-32 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="font-headline text-4xl font-extrabold text-primary mb-6">Built For Your Growth</h2>
<p className="text-on-surface-variant">We provide the environment and resources you need to do your best work and live your best life.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center p-8">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-on-tertiary-container">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
</div>
<h4 className="font-headline font-bold text-lg mb-2">Professional Development</h4>
<p className="text-sm text-on-surface-variant">Budget for courses, books, and global tech conferences.</p>
</div>
<div className="text-center p-8">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-on-tertiary-container">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>universal_currency</span>
</div>
<h4 className="font-headline font-bold text-lg mb-2">Competitive Salary</h4>
<p className="text-sm text-on-surface-variant">Top-tier compensation reflecting your expertise and impact.</p>
</div>
<div className="text-center p-8">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-on-tertiary-container">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>home_work</span>
</div>
<h4 className="font-headline font-bold text-lg mb-2">Flexible Work</h4>
<p className="text-sm text-on-surface-variant">Hybrid options to help you balance deep focus and collaboration.</p>
</div>
<div className="text-center p-8">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-on-tertiary-container">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</div>
<h4 className="font-headline font-bold text-lg mb-2">Health &amp; Wellness</h4>
<p className="text-sm text-on-surface-variant">Comprehensive health cover and mental wellness support.</p>
</div>
</div>
</div>
</section></FadeIn>
{/* CTA Section */}
<FadeIn><section className="py-24">
<div className="max-w-7xl mx-auto px-8">
<div className="bg-primary rounded-3xl p-12 md:p-20 relative overflow-hidden text-center md:text-left">
<div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
<img className="w-full h-full object-cover" data-alt="abstract flowing data lines pattern with subtle texture on deep blue background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyRJvrZxVU6BjfKx7BnIUCHSNLcr3XVnTcqfmeo30WfZOavqNCaLB8qxlTwyHAERnBP-J9IGAskCbyn0bU3pSg7ZAxHmItcLM8TEaUiOBsr7WolMoU7mgfPeHMMZd-r_HPzCf9Ctzil4BcE6wQmOZxfkIQ6ftftCWTAvjK1yrSEpdBt1Gie388wFRKnzoZHUIYmNHCciUAvhsaCdZIEYUsJK86LlsVthxdbYBjxBoAOSnCgMxpCdwHfRtRWG4Au-0VqhsLulrEwKTw"/>
</div>
<div className="relative z-10 architect-grid items-center">
<div className="col-span-12 lg:col-span-8">
<h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-6">Don't see a fit?</h2>
<p className="text-primary-fixed-dim text-lg md:text-xl mb-10 max-w-xl">
                                We are always looking for exceptional talent to join our architectural journey. Send us your CV for future opportunities.
                            </p>
<Link className="inline-block bg-on-tertiary-container text-white px-10 py-5 rounded font-bold hover:scale-105 transition-transform" href="mailto:careers@ferdsilinks.com">
                                Send us your CV
                            </Link>
</div>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
    