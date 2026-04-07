import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="bg-surface font-body text-on-surface architect-grid selection:bg-tertiary-fixed selection:text-on-tertiary-fixed-variant">
      
{/* Hero Section */}
<header className="relative pt-32 pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="z-10">
<span className="font-label text-sm uppercase tracking-widest text-on-tertiary-container mb-6 block font-bold">Innovation Hub: Buea, Cameroon</span>
<h1 className="font-headline font-extrabold text-5xl md:text-7xl text-primary leading-[1.1] mb-8 tracking-tighter">
                    Empowering Africa&apos;s <span className="text-on-tertiary-container">Digital Future</span>{" "}with Data &amp; Innovation
                </h1>
<p className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                    Driving transformative growth through precision data science, elite tech training, and cutting-edge software solutions tailored for the global market.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-on-tertiary-container/20 hover:-translate-y-1 transition-transform">
                        Get a Quote
                    </button>
<button className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-colors">
                        Explore Our Training
                    </button>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary/30 rounded-full blur-[100px] opacity-20 -z-10"></div>
<div className="rounded-xl overflow-hidden shadow-2xl shadow-primary-container/10 aspect-video lg:aspect-square relative group">
<img alt="Modern Office Buea" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" data-alt="Modern collaborative tech office interior with diverse software developers working on high-end laptops in a bright, minimalist workspace in Buea" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuQyIFL8A3nBg5h0cgZnMCaPi55zAUzwFxOkBoWHdqs01lW0RbbIWLjXAPewLyZ6TsgaEvn7qGIF1MCroqRmCrxvZRc7aM5z6VywNmZmfSkMNKRPLE7n2U_GMg4Q72wrEh0I8s9N2xtLWvj_vuLsZqzV3g_ehFAOief4tKmz37Rfqh8cnD7WW6vT9bRdduGGuynZtedV6N6tXVrT_1DYDoTlofMybr56R_t3VCioqPi0kGTshXy9lEGDMveXrXtz2ODmgjuXqEsKaw"/>
<div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white/20 dark:bg-[#000a1e]/40 backdrop-blur-md border border-white/30 p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-pulse-slow z-20">
    <div className="w-12 h-12 bg-[#cf7000] rounded-full flex items-center justify-center text-white font-bold text-xl drop-shadow-lg">
        +
    </div>
    <div>
        <p className="font-headline font-black text-2xl text-primary dark:text-white leading-none mb-1">142%</p>
        <p className="font-label text-xs uppercase text-on-surface-variant dark:text-gray-300 tracking-wider font-bold">Projected Growth</p>
    </div>
</div>

</div>
</div>
</header>
{/* Social Proof Bar */}
<FadeIn><section className="bg-surface-container-low py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center font-label text-xs uppercase tracking-widest text-on-surface-variant/60 mb-8 font-bold">Trusted by Industry Leaders &amp; Partners</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-headline font-black text-2xl tracking-tighter">SILICON MOUNTAIN</span>
<span className="font-headline font-black text-2xl tracking-tighter">DATA LABS AI</span>
<span className="font-headline font-black text-2xl tracking-tighter">AFRICA TECH NETWORK</span>
<span className="font-headline font-black text-2xl tracking-tighter">BUEA INNOVATE</span>
<span className="font-headline font-black text-2xl tracking-tighter">GLOBAL IT GROUP</span>
</div>
</div>
</section></FadeIn>
{/* Stats Section */}
<FadeIn><section className="py-24">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="font-headline font-extrabold text-5xl text-on-tertiary-container mb-2 tracking-tighter">500+</div>
<div className="font-label text-sm uppercase font-bold text-on-surface-variant">Students Trained</div>
</div>
<div className="text-center">
<div className="font-headline font-extrabold text-5xl text-on-tertiary-container mb-2 tracking-tighter">50+</div>
<div className="font-label text-sm uppercase font-bold text-on-surface-variant">Successful Projects</div>
</div>
<div className="text-center">
<div className="font-headline font-extrabold text-5xl text-on-tertiary-container mb-2 tracking-tighter">10+</div>
<div className="font-label text-sm uppercase font-bold text-on-surface-variant">Years Experience</div>
</div>
<div className="text-center">
<div className="font-headline font-extrabold text-5xl text-on-tertiary-container mb-2 tracking-tighter">98%</div>
<div className="font-label text-sm uppercase font-bold text-on-surface-variant">Client Satisfaction</div>
</div>
</div>
</section></FadeIn>
{/* Services Bento Grid */}
<FadeIn><section className="py-24 bg-surface-container-high/30">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="font-label text-sm uppercase tracking-widest text-on-tertiary-container font-bold mb-4 block">Our Expertise</span>
<h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary tracking-tighter">Architecting Data-Driven Solutions</h2>
</div>
<Link className="text-secondary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">
                    All Services <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
<div className="grid md:grid-cols-3 gap-6">
{/* IT Services */}
<div className="bg-surface-container-lowest p-10 rounded-xl border-l-4 border-on-tertiary-container shadow-sm hover:shadow-xl transition-shadow group">
<div className="bg-tertiary-fixed w-16 h-16 rounded-lg flex items-center justify-center mb-8 text-on-tertiary-container">
<span className="material-symbols-outlined !text-4xl" data-weight="fill">cloud_sync</span>
</div>
<h3 className="font-headline font-bold text-2xl text-primary mb-4">IT Services</h3>
<p className="text-on-surface-variant mb-8">Robust cloud infrastructure and managed IT operations designed for enterprise scalability.</p>
<Link className="font-bold text-primary inline-flex items-center gap-2 group-hover:text-on-tertiary-container transition-colors" href="#">Learn More <span className="material-symbols-outlined">chevron_right</span></Link>
</div>
{/* Data Science & AI */}
<div className="md:col-span-2 bg-primary-container p-10 rounded-xl text-white relative overflow-hidden group">
<div className="relative z-10">
<div className="bg-white/10 w-16 h-16 rounded-lg flex items-center justify-center mb-8 text-tertiary-fixed">
<span className="material-symbols-outlined !text-4xl">neurology</span>
</div>
<h3 className="font-headline font-bold text-3xl mb-4">Data Science &amp; AI</h3>
<p className="text-on-primary-container max-w-md text-lg mb-8">Leveraging machine learning and advanced analytics to turn raw data into actionable business intelligence.</p>
<Link className="bg-on-tertiary-container text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity inline-block" href="#">Explore AI Laboratory</Link>
</div>
<div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
<span className="material-symbols-outlined !text-[300px]">hub</span>
</div>
</div>
{/* Software Development */}
<div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-xl transition-all">
<div className="flex flex-col md:flex-row gap-10">
<div className="flex-1">
<div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-8 text-secondary">
<span className="material-symbols-outlined !text-4xl">terminal</span>
</div>
<h3 className="font-headline font-bold text-2xl text-primary mb-4">Software Development</h3>
<p className="text-on-surface-variant">Custom web and mobile applications built with modern frameworks and user-centric design principles.</p>
</div>
<div className="flex-1 bg-surface-container-low rounded-lg p-6 flex flex-col justify-center">
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span className="font-bold text-primary">Scalable Architecture</span>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span className="font-bold text-primary">Agile Methodology</span>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span className="font-bold text-primary">DevOps Integration</span>
</div>
</div>
</div>
</div>
</div>
{/* Tech Consulting */}
<div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm border-b-4 border-secondary hover:shadow-xl transition-all">
<div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-8 text-secondary">
<span className="material-symbols-outlined !text-4xl">query_stats</span>
</div>
<h3 className="font-headline font-bold text-2xl text-primary mb-4">Consulting</h3>
<p className="text-on-surface-variant mb-8">Strategic technology roadmaps to align your digital investments with core business goals.</p>
<Link className="font-bold text-primary inline-flex items-center gap-2 transition-colors" href="#">Book a Session <span className="material-symbols-outlined">chevron_right</span></Link>
</div>
</div>
</div>
</section></FadeIn>
{/* Featured Training */}
<FadeIn><section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="font-label text-sm uppercase tracking-widest text-secondary font-bold mb-4 block">Training Hub</span>
<h2 className="font-headline font-extrabold text-4xl md:text-5xl text-primary tracking-tighter mb-6">Build Your Future in Tech</h2>
<p className="text-on-surface-variant text-lg">Elite professional courses led by industry practitioners in Cameroon's premier tech ecosystem.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
{/* Course 1 */}
<div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row h-full">
<div className="w-full md:w-2/5 relative">
<img alt="Data Science Course" className="w-full h-full object-cover" data-alt="Close up of a computer screen showing complex data visualizations and code with a person's hand using a mouse in a tech lab environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKacQ7YvJjA5O92OMH98V5kR5hENVDFfEVTxwTABmG90ggettGszRZEpDlrcLN_nXNv4_xzSI8bDVt01n89DGrEFCBdNEI6wdk0rfjVn0Ge7PxU0BHNYP7ilMBOS9NvbJy7xvcN1qOswTfxh97G3B9X_OZ-Fp8j5LOIGrnPVtnyhKLb7cIrTYuB5jOOkooiQ3GPfi0Bv9TJ26Ro4-MKE-UlGsz6AJ8QW-X2ZxmQnIc_DHtwPeVUVQAvbith72Hej42PvZNwUDzGHkn"/>
<span className="absolute top-4 left-4 bg-on-tertiary-container text-white px-4 py-1 text-xs font-bold rounded-full uppercase tracking-tighter">Bestseller</span>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<h3 className="font-headline font-extrabold text-2xl text-primary mb-2">Mastering Data Science &amp; Big Data</h3>
<div className="flex items-center gap-4 mb-4 text-sm text-on-surface-variant font-medium">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 12 Weeks</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">groups</span> 15 Seats</span>
</div>
<p className="text-on-surface-variant mb-6 text-sm">Comprehensive hands-on training from Python basics to advanced predictive modeling.</p>
</div>
<button className="w-full py-3 rounded-lg border-2 border-primary font-bold hover:bg-primary hover:text-white transition-all">Enroll Now</button>
</div>
</div>
{/* Course 2 */}
<div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row h-full">
<div className="w-full md:w-2/5 relative">
<img alt="Fullstack Course" className="w-full h-full object-cover" data-alt="Digital art of source code and programming syntax elements glowing in blue and orange against a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD1WQ0o9FAX8U0RJO4tjzXa36dVjTumGot8-m5wVjInZpzlNWW-4YFUOq8wE2poHB5MMRxGvf-BbMwT_qm2RXafs6W_pLpqxXDtOMUHmonBzLkjL_TCSZ8otMgR1_0t8wPBVq3cjxH0i-_Yhc2jqThe0ReatWvVZ2hR36MT88DygQNHAiQbpq7tgDJPEBSwPY8AVYCjFjO0ZtbFV6Cw7us0GC2sxjhGSxlY-BCyl2hHyRwrIkEtgxvclpG-b2u0dnjYN21DwBkt8Kn"/>
<span className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 text-xs font-bold rounded-full uppercase tracking-tighter">New Course</span>
</div>
<div className="p-8 flex-1 flex flex-col justify-between">
<div>
<h3 className="font-headline font-extrabold text-2xl text-primary mb-2">Advanced Fullstack Development</h3>
<div className="flex items-center gap-4 mb-4 text-sm text-on-surface-variant font-medium">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 16 Weeks</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">layers</span> Project-Based</span>
</div>
<p className="text-on-surface-variant mb-6 text-sm">Build production-ready applications using React, Node.js, and modern DevOps tools.</p>
</div>
<button className="w-full py-3 rounded-lg border-2 border-primary font-bold hover:bg-primary hover:text-white transition-all">Enroll Now</button>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Podcast Feature */}
<FadeIn><section className="py-24 bg-primary text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-on-tertiary-container via-transparent to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="aspect-video bg-primary-container rounded-xl flex items-center justify-center border border-white/10 group cursor-pointer relative">
<img alt="Podcast Studio" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" data-alt="Vintage microphone in a professional podcasting studio with moody low light and soundproofing foam in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-tB4tkhzMxdTHiurA0Ljw_kjpkY1c3hrPGE-knpAVkpSylJ6fm3cogIxUQYRbzahFy2fL0G-swpbWeENMc8RKttZ2SpamcadEjNW52vK48twBOW9yl7T--rc62vA69w-jcApKRGblCEQ7V34Vk5I5-uZU2AOY2pe63pwz_TONwUEVPG5iGVytMu_qJCLzKG1MJ0xzx05_2cEAetoVzfOeHPHgHXfuXriOBIJr0maAJds4g3sGZYRH6XZJSbN7iR5hhx747yRrQ44k"/>
<div className="w-20 h-20 bg-on-tertiary-container rounded-full flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined !text-4xl">play_arrow</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="font-label text-sm uppercase tracking-widest text-on-tertiary-container font-bold mb-6 block">Podcast Feature</span>
<h2 className="font-headline font-extrabold text-4xl md:text-5xl mb-6 tracking-tighter leading-tight">Navigating the African AI Renaissance</h2>
<p className="text-on-primary-container text-lg mb-10 leading-relaxed">Join Ferdinand S. as he talks with Silicon Mountain pioneers about the challenges and massive opportunities for Data Science in Central Africa.</p>
<div className="flex items-center gap-6">
<button className="bg-white text-primary px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-tertiary-fixed transition-colors">
<span className="material-symbols-outlined">podcasts</span> Listen on Spotify
                        </button>
<span className="text-white/40 font-label text-sm font-bold uppercase tracking-widest">EPISODE 42 • 45 MINS</span>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Blog Posts */}
<FadeIn><section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<h2 className="font-headline font-extrabold text-4xl text-primary tracking-tighter">Latest from the Lab</h2>
<Link className="text-secondary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">View All Posts <span className="material-symbols-outlined">trending_flat</span></Link>
</div>
<div className="grid md:grid-cols-3 gap-8">
{/* Post 1 */}
<div className="group">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-6">
<img alt="Cybersecurity" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Highly technological abstract background with blue circuit patterns and digital safety lock icon representing cybersecurity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJCz3jUUoTXx3ftUntoJOwzLGVnM6PRq5Bp3BGILvyNT0uOPPeyg2kUAUNNS79jLXX1ZG3X7xHtQb37IcF74NRBJQxXEUU1x_vlCX2Ic72QDPAdJROJ4ZNAmD0fqHKlWYxb8E-bLoGXB0rydrJNq4gx_ehN_ggS4KQQdaJNl3Did03bNl4AW_1ZETKrxVMYsxRy2nh_n0Y74jS7zkBdGehhbTxjD9reYlg5swiGJo5-1HCSbbnffyXwkXl4_Lv--EG_WEquOXIxqJH"/>
</div>
<span className="text-on-tertiary-container font-label text-xs font-bold uppercase mb-3 block tracking-widest">Cybersecurity</span>
<h3 className="font-headline font-bold text-xl text-primary mb-4 group-hover:text-secondary transition-colors">Securing Digital Assets in the Cameroonian Fintech Space</h3>
<p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Exploring the unique security challenges faced by emerging startups in Central Africa's banking sector.</p>
<button className="text-primary font-bold text-sm underline decoration-on-tertiary-container decoration-2 underline-offset-4">Read Article</button>
</div>
{/* Post 2 */}
<div className="group">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-6">
<img alt="Data Viz" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A clean laptop screen displaying multiple colorful bar graphs and pie charts for business data analysis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZwtp9ek6-bYpryD6VASeA9_yJY4Qk7hFxSBVGL0tEn_ae993_x7HygWgSu6tvzbzFG3qP6w5pGqYp-Bm33eJV9bimjJWfpVYB-OyO03j2izyKsKiRpn6k5oMgfopYuqPLfvzuO7L_ozvzwwJqA8zicvEsPx9EFhZ-RIt4yTQxPpTxyayRGP0u5UN5vocG_C3OKyxbC4OjdogqkEqPNt-GfWTJtLLQo0zphDGiUg2Dr2lo1Vv1QPuklBPMCy2lsANotFJ-IaosnNzB"/>
</div>
<span className="text-on-tertiary-container font-label text-xs font-bold uppercase mb-3 block tracking-widest">Data Science</span>
<h3 className="font-headline font-bold text-xl text-primary mb-4 group-hover:text-secondary transition-colors">5 Data Myths Every African Executive Needs to Unlearn</h3>
<p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Breaking down the misconceptions that hinder data-driven decision making in local organizations.</p>
<button className="text-primary font-bold text-sm underline decoration-on-tertiary-container decoration-2 underline-offset-4">Read Article</button>
</div>
{/* Post 3 */}
<div className="group">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-6">
<img alt="Tech Career" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Wide shot of a young man speaking passionately at a tech conference with a large screen in the background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU-WxjFJfUZ6wEPQJbBW2zZqII5iFsFsGZCNunuqN-u2whhEc5qgt-IIwarnmB6YVq9XvAPxme3Z6Evr1A7bw1_gukRv0KG35RtgGK0qCQ53bywPBhuYUjqdpD4i-Ed-XedSP89GKfcbwA_iqcCEWliryykbcITvtjMQPMdJSsq4K_vz5_YCCQQQkG2eElG1uFsnJz363ZurPQyYJGZ69t1ISO4narieuwtFg7VoVfsv_38Hrt_QmfOKQns2stEeX3JrzPoNVW1urD"/>
</div>
<span className="text-on-tertiary-container font-label text-xs font-bold uppercase mb-3 block tracking-widest">Tech Culture</span>
<h3 className="font-headline font-bold text-xl text-primary mb-4 group-hover:text-secondary transition-colors">The Rise of Silicon Mountain: Buea's Tech Evolution</h3>
<p className="text-on-surface-variant text-sm mb-6 line-clamp-2">A historical perspective on how a small university town became Cameroon's Silicon Valley.</p>
<button className="text-primary font-bold text-sm underline decoration-on-tertiary-container decoration-2 underline-offset-4">Read Article</button>
</div>
</div>
</div>
</section></FadeIn>
{/* Testimonials */}
<FadeIn><section className="py-24 bg-surface-container-low overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12 items-center">
<div>
<h2 className="font-headline font-extrabold text-4xl text-primary tracking-tighter mb-6 leading-tight">Stories of Impact &amp; Excellence</h2>
<p className="text-on-surface-variant mb-8">Direct feedback from the professionals and organizations we have helped scale.</p>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined">west</span>
</button>
<button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
<span className="material-symbols-outlined">east</span>
</button>
</div>
</div>
<div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
<div className="flex text-on-tertiary-container mb-6">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="text-primary font-medium italic mb-8 leading-relaxed">"The Data Science course at Ferdsilinks changed my career trajectory. Within three months of completion, I landed a remote role with a European tech firm."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-fixed"></div>
<div>
<div className="font-bold text-primary">Samuel Njume</div>
<div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">Data Analyst, Remote</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-black/5">
<div className="flex text-on-tertiary-container mb-6">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="text-primary font-medium italic mb-8 leading-relaxed">"Their consulting team helped us restructure our entire IT infrastructure. The resulting efficiency gains were immediate and measurable. True professionals."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed"></div>
<div>
<div className="font-bold text-primary">Marie Claire</div>
<div className="text-xs text-on-surface-variant uppercase tracking-wider font-bold">CTO, African Logistics</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Lead Capture Section */}
<FadeIn><section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute -top-24 -left-24 w-64 h-64 bg-on-tertiary-container opacity-10 rounded-full blur-[80px]"></div>
<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary opacity-10 rounded-full blur-[80px]"></div>
<h2 className="font-headline font-extrabold text-4xl md:text-5xl text-white tracking-tighter mb-6 relative z-10">Ready to Transform Your Digital Potential?</h2>
<p className="text-on-primary-container text-lg mb-12 max-w-2xl mx-auto relative z-10">Whether you're a student looking to upskill or a CEO looking to modernize, let's talk about your next big move.</p>
<form className="max-w-md mx-auto flex flex-col md:flex-row gap-4 relative z-10">
<input className="flex-1 bg-white/10 border-0 text-white placeholder:text-on-primary-container rounded-lg px-6 py-4 focus:ring-2 focus:ring-on-tertiary-container" placeholder="Enter your email address" type="email"/>
<button className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity whitespace-nowrap">Join Our Network</button>
</form>
</div>
</div>
</section></FadeIn>
{/* Footer */}

    </main>
  );
}
