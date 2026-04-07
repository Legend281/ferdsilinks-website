import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
{/* Hero Section */}
<FadeIn><section className="relative px-8 py-20 lg:py-32 max-w-7xl mx-auto overflow-hidden">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="z-10">
<span className="font-label text-on-tertiary-container tracking-widest text-sm font-bold uppercase mb-4 block">Silicon Mountain Pioneers</span>
<h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-primary leading-tight mb-6">
                        Connect with the <br/> <span className="text-on-tertiary-container">Digital Architects</span>
</h1>
<p className="text-on-surface-variant text-lg lg:text-xl max-w-xl leading-relaxed">
                        We are building the future of Africa through precision data science and architectural tech solutions. Let&apos;s start a conversation about your next breakthrough.
                    </p>
</div>
<div className="relative hidden lg:block">
<div className="absolute -inset-4 bg-primary-container/5 rounded-full blur-3xl"></div>
<img alt="Team collaborating" className="rounded-xl shadow-2xl relative z-10 w-full h-[500px] object-cover" data-alt="Modern tech office with diverse team of professionals collaborating around a large screen showing data visualizations and architectural blueprints" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIZ3tkENK4WuN_iqXaOXCWxuGFBK-JPuLHAeQplZM04HzpKeBk4pe4DVMMJERBYxOkyLFKj_9RYbJtglnnJQUyL2of-XzZGKaSIz-IGbkOtQZhW1Ba1RvqT3-RmDGhycei0ikmzHU25eKTF8uO4cEgkyB7QF5TrQktgY1N1F03ONII1iGDj2py6E6YwMu45m7bNtdK6fDUrgn_UY0gRH5NmkxHIurLQDH3DHVTouFxqKcNYbcB_mCw0XM0KqcDpZF55vjYnTYrkRJK"/>
<div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-lg shadow-xl z-20 border-l-4 border-on-tertiary-container">
<p className="font-headline font-bold text-primary">Buea, Cameroon</p>
<p className="text-sm text-on-surface-variant">Silicon Mountain Hub</p>
</div>
</div>
</div>
</section></FadeIn>
{/* Form & Details Section */}
<FadeIn><section className="px-8 py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
{/* Contact Form */}
<div className="lg:col-span-7 bg-surface-container-lowest p-8 lg:p-12 rounded-xl shadow-sm">
<h2 className="font-headline text-3xl font-bold text-primary mb-8">Send a Message</h2>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Full Name</label>
<input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Email Address</label>
<input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Subject</label>
<input className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="Data Strategy Inquiry" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label text-xs font-bold uppercase text-on-surface-variant">Message</label>
<textarea className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/20 transition-all outline-none resize-none" placeholder="Tell us about your project or inquiry..." rows={5}></textarea>
</div>
<button className="w-full md:w-auto px-10 py-4 bg-on-tertiary-container text-white font-headline font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-on-tertiary-container/20" type="submit">
                                Send Message
                            </button>
</form>
</div>
{/* Contact Details Sidebar */}
<div className="lg:col-span-5 space-y-12">
<div>
<h2 className="font-headline text-3xl font-bold text-primary mb-8">Get in Touch</h2>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-lg text-white">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<h4 className="font-headline font-bold text-primary">Office Address</h4>
<p className="text-on-surface-variant leading-relaxed">Molyko, Buea<br/>Silicon Mountain, Cameroon</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-lg text-white">
<span className="material-symbols-outlined">mail</span>
</div>
<div>
<h4 className="font-headline font-bold text-primary">Email Us</h4>
<p className="text-on-surface-variant">hello@ferdsilinks.com</p>
<p className="text-on-surface-variant">support@ferdsilinks.com</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="bg-primary-container p-3 rounded-lg text-white">
<span className="material-symbols-outlined">call</span>
</div>
<div>
<h4 className="font-headline font-bold text-primary">Call Us</h4>
<p className="text-on-surface-variant">+237 6XX XXX XXX</p>
<p className="text-xs font-label uppercase text-on-tertiary-container font-bold mt-1">Available 24/7</p>
</div>
</div>
</div>
</div>
{/* Trust Signals */}
<div className="p-8 bg-primary-container rounded-xl text-white relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<h4 className="font-headline text-xl font-bold mb-4">Unmatched Support</h4>
<p className="text-on-primary-container mb-6 leading-relaxed">Our architects are on standby. Expect a strategic response within 4 working hours of your inquiry.</p>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-primary-container bg-slate-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-primary-container bg-slate-400"></div>
<div className="w-8 h-8 rounded-full border-2 border-primary-container bg-slate-500"></div>
</div>
<span className="text-sm font-label uppercase tracking-wider">Expert Team Standing By</span>
</div>
</div>
{/* Socials */}
<div className="pt-4">
<h4 className="font-label text-xs font-bold uppercase text-on-surface-variant mb-6 tracking-widest">Connect with our community</h4>
<div className="flex gap-4">
<Link className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
</Link>
<Link className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
</Link>
<Link className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-full text-primary hover:bg-on-tertiary-container hover:text-white transition-all" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
</Link>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Interactive Map Placeholder */}
<FadeIn><section className="px-8 py-20">
<div className="max-w-7xl mx-auto">
<div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-xl">
<div className="absolute inset-0 bg-slate-200" data-location="Buea">
<img alt="Map of Buea" className="w-full h-full object-cover grayscale opacity-60" data-alt="Minimalist grayscale satellite map showing the streets of Molyko, Buea with a prominent location pin near the university area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE1-6O2vShpq3dHYk4rpco3UiVfRspvpH5QvtLiXIrXLsk5nyw2eNvMueWWXas68JpwMrTsvmEQLQG_Vz3a4wI_BJgSJTqx_5k0DJZyWvmCKc-tpSwxFQS0vp0-UYJy7qPTRdCJ6KhAd-0vZn3GQGeN4PVffkMnWggxqN6tkaR8l_f6AaspBiwE2HcECc_7F1H0VEh3MNq8Jx4-XE3eVuuZBm-2jfQkx8b3EP1gQyWpywezRwoxCSXmcMGhBBKA9KkHJCfB-AIS_aq"/>
</div>
<div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
<div className="bg-white p-4 rounded-full shadow-2xl mb-4 inline-block animate-bounce">
<span className="material-symbols-outlined text-on-tertiary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
</div>
<div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
<p className="font-headline font-bold text-primary">Ferdsilinks HQ, Silicon Mountain</p>
</div>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
    