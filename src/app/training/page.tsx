import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
{/* Hero Section */}
<FadeIn><section className="relative min-h-[870px] flex items-center bg-primary text-white architect-grid overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary/80 opacity-90 z-0"></div>
<div className="container mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16 py-20">
<div className="lg:w-3/5 space-y-8">
<span className="font-label text-tertiary-fixed uppercase tracking-[0.3em] text-sm font-bold">The Digital Architect Academy</span>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
                        Master the Future of Tech in <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed to-on-tertiary-container">Silicon Mountain</span>
</h1>
<p className="text-lg md:text-xl text-on-primary-container max-w-2xl font-light leading-relaxed">
                        Expert-led intensives in Data Science, AI, and Software Engineering. Built for the next generation of African tech leaders in the heart of Buea&apos;s ecosystem.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-on-tertiary-container text-white px-8 py-4 rounded-md font-bold text-lg hover:scale-105 transition-all shadow-xl">Explore Curriculum</button>
<button className="border border-outline-variant hover:bg-white/5 text-white px-8 py-4 rounded-md font-bold text-lg transition-all">Meet Instructors</button>
</div>
<div className="flex items-center gap-8 pt-8 border-t border-white/10">
<div>
<p className="text-2xl font-bold font-headline">500+</p>
<p className="text-xs font-label uppercase text-on-primary-container">Alumni</p>
</div>
<div>
<p className="text-2xl font-bold font-headline">40+</p>
<p className="text-xs font-label uppercase text-on-primary-container">Tech Partners</p>
</div>
<div>
<p className="text-2xl font-bold font-headline">92%</p>
<p className="text-xs font-label uppercase text-on-primary-container">Hire Rate</p>
</div>
</div>
</div>
<div className="lg:w-2/5 relative">
<div className="relative rounded-xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
<img alt="Silicon Mountain Tech Hub" className="w-full h-[500px] object-cover" data-alt="dynamic young tech professionals collaborating in a modern office with large windows showing lush green mountains in the distance, high-end tech aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpO9zYhEcGMgAYMktxWHb0nu-nconoqUqywSwULWpxGHEeJed0UjoFr0RksialLR5KNi2NwO-6xSMhFbNmCsGa7ZqscSjxy3qJ6zvkeyR4AVCJW7_ptyVT1df9BET4N-wrgxdY3L4JXEW5Qp8BjFyppPG58yvRYtzO11WiZieUXbt3ZZ53BsmQNax9cTXSy-Fcab48hxYbWBEa5jD6x32IonEOcLj8mKPVqG5hCo4NIx991afMsxyElWg6B4zDTS9OIdpjuBG3IG-T"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
</div>
<div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-2xl flex items-center gap-4 text-on-background border border-surface-container-high">
<div className="w-12 h-12 bg-on-tertiary-container rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined">trending_up</span>
</div>
<div>
<p className="font-bold text-sm">Next Cohort Starts</p>
<p className="text-xs text-on-surface-variant">October 15th, 2024</p>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Course Filter & Grid */}
<FadeIn><section className="py-24 bg-surface px-8">
<div className="container mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
<div className="max-w-xl">
<span className="font-label text-on-tertiary-container font-bold text-sm tracking-widest uppercase">Course Catalog</span>
<h2 className="font-headline text-4xl font-extrabold text-primary-container mt-2">Architecture for Every Discipline</h2>
</div>
<div className="flex bg-surface-container-high p-1 rounded-lg">
<button className="px-6 py-2 bg-white shadow-sm rounded-md font-semibold text-sm">All Levels</button>
<button className="px-6 py-2 text-on-surface-variant font-semibold text-sm hover:text-primary transition-colors">Beginner</button>
<button className="px-6 py-2 text-on-surface-variant font-semibold text-sm hover:text-primary transition-colors">Advanced</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Card 1 */}
<div className="group bg-surface-container-lowest rounded-xl shadow-sm border-0 transition-all hover:-translate-y-2 hover:shadow-xl flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="Data Science" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="abstract data visualization with glowing orange lines and deep blue clusters on a dark background, high-tech aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9l_2PIxubn37aZ8VGxcG_Dc6A9jw6xh4wt2VDq_0CQIiwP6UIe6AM4jwrrBfs5eOjKzyZkGh7FlACz3Wfz5r2-Oo6yZXYH3Wp4L_TC1E3TroYtYLncPM9vIvC6O3ApFy_4YuXpQBoNezrzs-Ul_b1KddRepyaTP42empO92d0hC48rD9uqGgrRDkPeiZva0_niKml9iWyxlXnH2Xso4Vvsjdfjs50lgLOKUSIjuOyk5T0shDMROqUwDshLTDunL1VBJGJBZFhyd3B"/>
<div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-md text-white text-[10px] font-label font-bold px-3 py-1 rounded-full uppercase tracking-wider">Top Rated</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-headline text-xl font-bold text-primary mb-2">Data Science &amp; Big Data</h3>
<p className="text-sm text-on-surface-variant mb-6 flex-grow">Master the art of predictive modeling and massive dataset manipulation using Python and Spark.</p>
<div className="flex items-center justify-between mb-6 pt-4 border-t border-surface-container-low">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-xs font-medium">12 Weeks</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">bar_chart</span>
<span className="text-xs font-medium">Intermediate</span>
</div>
</div>
<button className="w-full bg-surface-container-high text-primary font-bold py-3 rounded-md group-hover:bg-on-tertiary-container group-hover:text-white transition-all">Enroll Now</button>
</div>
</div>
{/* Card 2 */}
<div className="group bg-surface-container-lowest rounded-xl shadow-sm border-0 transition-all hover:-translate-y-2 hover:shadow-xl flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="Fullstack Development" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="close up of lines of clean code on a monitor with soft blue and purple lighting reflections on the screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDszVk87reylrxvlFOQDPOJ8CCgnXGEk9V49uXTgueoX2YIWUj9EoraEEeFdf5L6NpMbjVMtEVEDKTgM1nuhNd9Wm75xRx7ZQQInki_tlFcZQe73hZ1hCADwp8EngIIm-D08ZK9R7mq2BCMw83SgKTfyrdude7l5Fkqln0ztoWH9YiUOdLwiJeJpZi0FXs_XH4j7-qEaUEAWXGTHyC4Vfcen9BVC-7LKVteVoyTYVdQ1WTSRMd0g8cHqIxX-IwZdrImobDLO70OGFFa"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-headline text-xl font-bold text-primary mb-2">Advanced Fullstack Development</h3>
<p className="text-sm text-on-surface-variant mb-6 flex-grow">Scalable architecture training focused on React, Node.js, and Cloud-native deployments.</p>
<div className="flex items-center justify-between mb-6 pt-4 border-t border-surface-container-low">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-xs font-medium">16 Weeks</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">bar_chart</span>
<span className="text-xs font-medium">Advanced</span>
</div>
</div>
<button className="w-full bg-surface-container-high text-primary font-bold py-3 rounded-md group-hover:bg-on-tertiary-container group-hover:text-white transition-all">Enroll Now</button>
</div>
</div>
{/* Card 3 */}
<div className="group bg-surface-container-lowest rounded-xl shadow-sm border-0 transition-all hover:-translate-y-2 hover:shadow-xl flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="Cybersecurity" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="server room with glowing blue status lights and silhouettes of network cables, symbolizing digital security and infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzrcoC5GVvR0_duoqQeKbb7Ma9hFy-wNTydSK76goWykiXHSGHLHtFystmKJ_lV179mT2y1fdaZX0MeBXCcCtgrETnhK9b1DvoozeovKG-wWAQ6z92oIvr8A4C8iTfhBTQKIva-O7qb_R7b41_BRf1AIswGqvFXdr_Uxdd8Q2_0cVY4kyclqqdWZRM2uegiM5h435RhLnhBLHk_IA36AC00dQecjgKtuzN56LxM2Sr4capDWDEayAGlmAtUP7O7v94x5khCu6Kbe54"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-headline text-xl font-bold text-primary mb-2">Cybersecurity Essentials</h3>
<p className="text-sm text-on-surface-variant mb-6 flex-grow">Protecting the digital frontier. Hands-on labs covering network security and ethical hacking.</p>
<div className="flex items-center justify-between mb-6 pt-4 border-t border-surface-container-low">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-xs font-medium">8 Weeks</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">bar_chart</span>
<span className="text-xs font-medium">Beginner</span>
</div>
</div>
<button className="w-full bg-surface-container-high text-primary font-bold py-3 rounded-md group-hover:bg-on-tertiary-container group-hover:text-white transition-all">Enroll Now</button>
</div>
</div>
{/* Card 4 */}
<div className="group bg-surface-container-lowest rounded-xl shadow-sm border-0 transition-all hover:-translate-y-2 hover:shadow-xl flex flex-col">
<div className="h-48 overflow-hidden rounded-t-xl relative">
<img alt="UI/UX" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="top view of designer's desk with a minimalist digital tablet, sketches of mobile app interfaces, and clean white aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATptNqrUNN1zyF-6T3ec_WKLVP97QoVswlK1JOResf4ajOX1vF3V3viEKTyqKGmnwaWRne7v_hJ6CHfb987kPGwUnzl0ztcxE0Kv8DPnpp62cCl10o4Az07yLLSiwJmYInBI4y1iV8i5ON9y92vRLJM54Tov38_GjelZaMBpHQmDq3LjtBixw5a5OdnetQBdP2VmGNd-S9_XwZ2LBYdyHCHM9OmVxnAawE5mt9MpQQGPOsZVAmSYV9VrKSb51yBRm9DfejK3Fbf7OI"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-headline text-xl font-bold text-primary mb-2">UI/UX Design Strategy</h3>
<p className="text-sm text-on-surface-variant mb-6 flex-grow">Go beyond pixels. Master product thinking, user psychology, and design system creation.</p>
<div className="flex items-center justify-between mb-6 pt-4 border-t border-surface-container-low">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">schedule</span>
<span className="text-xs font-medium">10 Weeks</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">bar_chart</span>
<span className="text-xs font-medium">Intermediate</span>
</div>
</div>
<button className="w-full bg-surface-container-high text-primary font-bold py-3 rounded-md group-hover:bg-on-tertiary-container group-hover:text-white transition-all">Enroll Now</button>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Why Learn Section */}
<FadeIn><section className="py-24 bg-primary-container architect-grid relative">
<div className="container mx-auto px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 space-y-6">
<span className="font-label text-tertiary-fixed text-sm font-bold tracking-[0.2em] uppercase">The Architect's Advantage</span>
<h2 className="font-headline text-4xl font-extrabold text-white leading-tight">Why Learn with Ferdsilinks?</h2>
<p className="text-on-primary-container text-lg leading-relaxed">We don&apos;t just teach tools; we craft architects of the digital future. Our methodology is rooted in the unique challenges and opportunities of the African tech landscape.</p>
<div className="space-y-6 pt-8">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-[#cf7000]">groups</span>
</div>
<div>
<h4 className="text-white font-bold mb-1">Elite Community</h4>
<p className="text-sm text-on-primary-container">Join a curated network of Buea&apos;s most ambitious engineers and designers.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-[#cf7000]">psychology</span>
</div>
<div>
<h4 className="text-white font-bold mb-1">Industry Experts</h4>
<p className="text-sm text-on-primary-container">Mentorship from leads at top Silicon Mountain firms and global tech giants.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-[#cf7000]">terminal</span>
</div>
<div>
<h4 className="text-white font-bold mb-1">Project-Based Learning</h4>
<p className="text-sm text-on-primary-container">Build real-world solutions that tackle local infrastructure and business needs.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="bg-primary p-8 rounded-xl border border-white/5 shadow-2xl">
<span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-4">workspace_premium</span>
<p className="text-white font-headline text-lg font-bold">Global Certification</p>
<p className="text-xs text-on-primary-container mt-2">Recognized by major tech employers worldwide.</p>
</div>
<div className="bg-primary/50 p-8 rounded-xl border border-white/5">
<span className="material-symbols-outlined text-4xl text-[#cf7000] mb-4">rocket_launch</span>
<p className="text-white font-headline text-lg font-bold">Career Launchpad</p>
<p className="text-xs text-on-primary-container mt-2">Dedicated placement services and portfolio reviews.</p>
</div>
</div>
<div className="space-y-4 mt-8">
<div className="bg-primary/50 p-8 rounded-xl border border-white/5">
<span className="material-symbols-outlined text-4xl text-[#cf7000] mb-4">hub</span>
<p className="text-white font-headline text-lg font-bold">Innovation Hub</p>
<p className="text-xs text-on-primary-container mt-2">24/7 access to our physical tech labs in Buea.</p>
</div>
<div className="bg-primary p-8 rounded-xl border border-white/5 shadow-2xl">
<span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-4">diversity_3</span>
<p className="text-white font-headline text-lg font-bold">Alumni Network</p>
<p className="text-xs text-on-primary-container mt-2">Direct referrals and lifelong career support.</p>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Newsletter Section */}
<FadeIn><section className="py-24 bg-white px-8">
<div className="container mx-auto max-w-4xl bg-surface-container-low rounded-2xl p-12 relative overflow-hidden">
<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl"></div>
<div className="relative z-10 text-center space-y-6">
<span className="font-label text-on-tertiary-container font-bold text-sm tracking-widest uppercase">Stay Informed</span>
<h2 className="font-headline text-4xl font-extrabold text-primary">Join the Silicon Mountain Pulse</h2>
<p className="text-on-surface-variant max-w-xl mx-auto">Get notified about new curriculum drops, exclusive scholarship opportunities, and local tech ecosystem events.</p>
<form className="flex flex-col sm:flex-row gap-4 mt-8 max-w-lg mx-auto">
<input className="flex-grow px-6 py-4 rounded-md bg-white border border-outline-variant focus:ring-2 focus:ring-secondary focus:outline-none transition-all" placeholder="Your professional email" type="email"/>
<button className="bg-on-tertiary-container text-white px-8 py-4 rounded-md font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg whitespace-nowrap" type="submit">Subscribe Now</button>
</form>
<p className="text-[10px] text-on-surface-variant uppercase font-label tracking-tighter mt-4">Zero spam. Only high-value tech updates.</p>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
    