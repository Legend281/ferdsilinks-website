import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
{/* Hero Section */}
<FadeIn><section className="relative px-8 py-20 md:py-32 overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
<div className="inline-block px-4 py-1.5 mb-6 bg-primary-container text-tertiary-fixed rounded-full">
<span className="font-label text-xs font-bold tracking-widest uppercase">Silicon Mountain Reserve</span>
</div>
<h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary tracking-tighter max-w-4xl leading-[0.95]">
                    Silicon Mountain Impact: Case Studies in <span className="text-on-tertiary-container">Innovation</span>.
                </h1>
<p className="mt-8 text-xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
                    Meticulously engineered solutions bridging the gap between raw data and transformative business growth across the African continent.
                </p>
</div>
<div className="absolute -right-20 top-20 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-3xl -z-10"></div>
</section></FadeIn>
{/* Case Studies Bento Grid */}
<FadeIn><section className="px-8 py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Featured Card */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-2xl transition-all duration-500">
<div className="aspect-[16/9] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Modern high-tech data visualization dashboard on a large screen in a dark, sophisticated command center room with blue neon accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhOhWGD42-Nbnb0WUyVaG2e4Ri9smjO9lfEAARXcamQam6_15CvL5Af9LK9ct6KcAHr3IfFy34k12mxbqvPMjPw72Bl62pQtcN3RdmnMJl_igQn4dSGWdnkTTI17kOMwFmxKVtmLFL3mcoT-5dqCVm8mbbExnXsjdm6QfvREb3xDSSIFnu6V5irNWBcB4Bdc8hhALtG0tOgDYh4ErUWu-fjISREqG9iCokLgp-nSMNvMSYl2RzU7mg4oV1sOP1HFKb8VrXjjGr-wzl"/>
</div>
<div className="p-8">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">Data Science</span>
<h3 className="mt-3 font-headline text-3xl font-bold text-primary tracking-tight">Predictive Analytics for AgTech in Cameroon</h3>
<p className="mt-4 text-on-surface-variant max-w-xl">Optimizing crop yields and supply chain logistics for over 50,000 smallholder farmers using localized weather data and soil sensors.</p>
<Link className="mt-6 inline-flex items-center gap-2 text-on-tertiary-container font-bold group/link" href="#">
                                Read Case Study 
                                <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
{/* Small Card 1 */}
<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-2xl transition-all duration-500">
<div className="aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Digital representation of financial network connections with glowing nodes and data streams against a dark blue background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeMjXdve5Ka1li_Vy7sDF0vcB30sQa6Ur_dDdECGDIOzsFgOk-JNFCfckf-R4XhnL1HILMAfubypKayPOvTZtoBMRcqBj-l9LnSPLANXZSffQptQp3_J3EEAjTmnI9NgwSbxkFnJ1OdADaoRPfBmETaV7N92NUtNL1mU5Zv9F-XW227WhPz1Ka_PIF7HjKe1BXJBK-n3fcSpGV1TE_WjBdMs6pldKlOEdvgGDN55P3ZSHFofFG7_us8oLEp46Yraf2upj7Om8AOsaE"/>
</div>
<div className="p-6">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">FinTech</span>
<h3 className="mt-3 font-headline text-xl font-bold text-primary tracking-tight leading-tight">Scaling FinTech Infrastructure for African Markets</h3>
<Link className="mt-4 inline-flex items-center gap-2 text-on-tertiary-container font-bold text-sm" href="#">
                                Read Case Study 
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
{/* Small Card 2 */}
<div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-2xl transition-all duration-500">
<div className="aspect-square overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Futuristic artificial intelligence circuit brain glowing with golden and white light on a dark navy abstract background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv07ejolJf_EMic7nIjL8Pm4JYTuDz72cD0gV3-8sxi2xXekEyBYVFP4qQcFCxw5RSJtHj8ua9RyugcHUuHfrmYeMfYCcLoW5isxdRCPIEYraPFk02_A3r3MmwoVBLnZYx9fs1zUlkXg_5wm47aOpO5yo_rO9KwlHYT063KJnFeHekc7D5aRVxxlqwhr9OMKnUBgsRxZw9CCcdT4A3d5MG73QaxSjGkwDL58lfzrD04TSkHvhESAqeJdwto7b15flc7FJwkWjb6IO3"/>
</div>
<div className="p-6">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-widest uppercase">AI &amp; Automation</span>
<h3 className="mt-3 font-headline text-xl font-bold text-primary tracking-tight leading-tight">Intelligent Logistics for CEMAC Export Hubs</h3>
<Link className="mt-4 inline-flex items-center gap-2 text-on-tertiary-container font-bold text-sm" href="#">
                                Read Case Study 
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
{/* Wide Card */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-primary-container text-white shadow-sm hover:shadow-2xl transition-all duration-500">
<div className="flex flex-col md:flex-row h-full">
<div className="p-8 flex flex-col justify-center order-2 md:order-1">
<span className="font-label text-xs font-bold text-tertiary-fixed tracking-widest uppercase">Software Dev</span>
<h3 className="mt-3 font-headline text-3xl font-bold tracking-tight">Enterprise ERP for Central African Retailers</h3>
<p className="mt-4 text-primary-fixed opacity-80">Unified inventory, payroll, and point-of-sale systems built for low-bandwidth environments.</p>
<Link className="mt-6 inline-flex items-center gap-2 text-tertiary-fixed font-bold group/link" href="#">
                                    Read Case Study 
                                    <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
<div className="md:w-1/2 order-1 md:order-2 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60" data-alt="Close-up of sleek laptop screen showing complex code and data graphs with reflections of a modern office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbcCg_aDTfo4z7BlsA79QVXpnHfkxvxvsjJrI8hGNWJKqzO_T9aTTU3YQsmXxE_DuepOAZ8N3D4CvwglbF6Jzd5Eb2MfTQDrrzEA9oHfoXOUWWX4CXtmZKidsplw1FPxa1hFZm6q1qyJneQhUzfI3y1UYC1iyUujsO2WN0XqxNft89XkpPhhLlRiZSfoMMqleEnQko_9voM-gu5dX7xLVmwH-mI0oif39wMDCiOfg_XK7kyhTpQv_S9Qo1rbV3n9zYspJ9TtO3O2zc"/>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Our Process Section */}
<FadeIn><section className="px-8 py-32 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<span className="font-label text-xs font-bold text-on-tertiary-container tracking-[0.2em] uppercase">Methodology</span>
<h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">Our Process: From Research to Results</h2>
</div>
<p className="text-on-surface-variant max-w-sm font-light">A scientific approach to building digital solutions that survive and thrive in real-world conditions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">01</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">Discovery</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Deep immersion into your business logic, market dynamics, and operational bottlenecks.</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">02</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">Architecture</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Designing the technical blueprint and data structures that ensure infinite scalability.</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">03</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">Execution</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Agile development cycles with rigorous testing and continuous performance tuning.</p>
</div>
<div className="relative">
<div className="font-headline text-6xl font-black text-surface-container-highest mb-6">04</div>
<h4 className="font-headline text-xl font-bold text-primary mb-4">Evolution</h4>
<p className="text-on-surface-variant text-sm leading-relaxed">Data-driven optimization and support to ensure your solution grows with your impact.</p>
</div>
</div>
</div>
</section></FadeIn>
{/* Impact by the Numbers */}
<FadeIn><section className="px-8 py-24 bg-primary text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-5 architect-grid pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">50+</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">Projects Delivered</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">20+</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">Industries Transformed</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">12</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">Countries Reached</p>
</div>
<div>
<div className="font-headline text-5xl md:text-6xl font-extrabold text-on-tertiary-container">98%</div>
<p className="mt-4 font-label text-xs font-bold tracking-widest text-primary-fixed uppercase">Client Retention</p>
</div>
</div>
</div>
</section></FadeIn>
{/* CTA Section */}
<FadeIn><section className="px-8 py-32 bg-surface-container-highest flex items-center justify-center text-center">
<div className="max-w-3xl">
<h2 className="font-headline text-4xl md:text-6xl font-extrabold text-primary tracking-tighter leading-tight">Ready to Start Your Innovation Journey?</h2>
<p className="mt-8 text-xl text-on-surface-variant font-light">Partner with The Digital Architect to engineer your next breakthrough.</p>
<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
<button className="bg-[#cf7000] text-white px-10 py-5 rounded-lg font-headline font-bold text-lg tracking-tight hover:scale-95 active:duration-100 transition-all shadow-xl shadow-on-tertiary-container/30">
                        Get a Quote
                    </button>
<button className="bg-transparent border-2 border-primary text-primary px-10 py-5 rounded-lg font-headline font-bold text-lg tracking-tight hover:bg-surface-container-high transition-all">
                        View Services
                    </button>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
    