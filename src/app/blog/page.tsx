import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
{/* Hero Section: Featured Article */}
<FadeIn><section className="mb-20">
<div className="relative group overflow-hidden rounded-xl bg-primary-container min-h-[600px] flex items-end">
<img alt="Featured Article" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Professional African tech team collaborating in a modern glass office overlooking Buea mountains with cinematic lighting and deep contrast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0r-VRi7JJ8TibGT3hVYEa41NcRdmTRJWO9gHC6ID6YZ35oVNLx_gveDgJaSnAyBHyKDpg64jdSb_C940nxauXC2zNCiZO6_y_Ev8FVeMTSiWimFyWP_9DwF-HnzZQHGIo-9nXHetYCSWBPufNYwpsAGjBrE0BJG6gWZW8QD3MRmAa1nCvp2BX0hSMtZGUt2f6HQHJgHvw5SD7dbzrURr_zxyTJ8dRSikUyBv2jOtX02l6ppV3xYeLbYKLlFyTpDomCWr18oRv6POl"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
<div className="relative p-12 lg:p-20 max-w-4xl">
<span className="font-label text-xs uppercase tracking-widest text-tertiary-fixed bg-tertiary-container/50 px-4 py-2 rounded-full mb-6 inline-block">Featured Insight</span>
<h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">Architecting Silicon Mountain: The Future of Data in Africa</h1>
<p className="font-body text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">How localized data ecosystems are driving the next wave of industrial revolution across Central Africa, starting from the slopes of Mount Fako.</p>
<div className="flex items-center gap-6">
<button className="bg-on-tertiary-container text-white font-headline font-bold px-8 py-4 rounded-lg flex items-center gap-2 group/btn transition-all">
                            Read Full Story
                            <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
</button>
<span className="font-label text-sm text-slate-400">12 Min Read • Oct 24, 2024</span>
</div>
</div>
</div>
</section></FadeIn>
{/* Category Filter Bar */}
<FadeIn><section className="mb-16">
<div className="flex flex-wrap items-center justify-between gap-6 border-b border-outline-variant/20 pb-6">
<div className="flex flex-wrap gap-3">
<button className="px-6 py-2 rounded-full font-label text-sm font-bold bg-primary text-white">All</button>
<button className="px-6 py-2 rounded-full font-label text-sm font-bold bg-surface-container-high text-on-surface hover:bg-primary-fixed transition-colors">Data Science</button>
<button className="px-6 py-2 rounded-full font-label text-sm font-bold bg-surface-container-high text-on-surface hover:bg-primary-fixed transition-colors">AI</button>
<button className="px-6 py-2 rounded-full font-label text-sm font-bold bg-surface-container-high text-on-surface hover:bg-primary-fixed transition-colors">Tech Culture</button>
<button className="px-6 py-2 rounded-full font-label text-sm font-bold bg-surface-container-high text-on-surface hover:bg-primary-fixed transition-colors">Software Development</button>
<button className="px-6 py-2 rounded-full font-label text-sm font-bold bg-surface-container-high text-on-surface hover:bg-primary-fixed transition-colors">Business Growth</button>
</div>
<div className="flex items-center gap-2 text-outline">
<span className="material-symbols-outlined">search</span>
<input className="bg-transparent border-none focus:ring-0 font-body text-sm" placeholder="Search insights..." type="text"/>
</div>
</div>
</section></FadeIn>
{/* Recent Blog Posts Grid */}
<FadeIn><section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
{/* Article 1 */}
<article className="group flex flex-col h-full">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
<img alt="Data Analytics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Modern data dashboard on multiple monitors in a dark room with blue ambient light and tech aesthetics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzVfkwwhadCdEU6jS7UJDWkfxvvMPhn1YbEiLBzTODl5svXv9sH7CiTxLKStUiqDfdKt4-ACLOQlsxT8yUmsRjoo5vJU0k6NnGqh-xa5mzXx5PRSL95zeDgjGEns18RR8StuUwpUvAEKgrb8Tl9rO4VLXntcrFO3xR34igkpV59glfOa1ntm1zXs5CGqHrkK3HWn7K0Q3scoa1dcrzhVczI9MnZUuJ6tSdggGuYABLtJMLswItdFm9WThGVOyS0nrQU29JEKdkbRzY"/>
</div>
<div className="flex items-center justify-between mb-4">
<span className="font-label text-[10px] uppercase tracking-widest text-on-secondary-container bg-secondary-fixed px-2 py-1 rounded">Data Science</span>
<span className="font-body text-xs text-outline">Oct 18, 2024</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Visualizing Growth: The Power of Predictive Analytics</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">A deep dive into how startups in Cameroon are leveraging data to predict market shifts before they happen.</p>
<Link className="font-headline font-bold text-sm text-on-tertiary-container flex items-center gap-2 group/link" href="#">
                    Read Story
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</article>
{/* Article 2 */}
<article className="group flex flex-col h-full">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
<img alt="AI Networks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Digital representation of artificial intelligence neural networks glowing in vibrant orange and blue tones on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_c72Ko8DRmys4iCVKhYzhY2f-Z564NljzgLFYbcIoDEDewNIbtA7E8Z3LzzjiXMeyq2U8G6czalBSjaJMQzdvTQ8qAWB5i8ytnByVEoTfYj2SXGyx4IFkd5HNwq8CTx784bokSjcn6aIcl4eF7j8LsnJrRFShHHVwshES-0IWmWaPwJtNuUZjG8-3oaMhbzZGe3g6XM1FXCY1S7CsbRgXNaOeGKKxcwjri7C_6kOlZwENx0wqyMPsddlNoq2dR-x4fIbDi59vk7Wj"/>
</div>
<div className="flex items-center justify-between mb-4">
<span className="font-label text-[10px] uppercase tracking-widest text-on-secondary-container bg-secondary-fixed px-2 py-1 rounded">AI</span>
<span className="font-body text-xs text-outline">Oct 12, 2024</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">Ethical AI in Emerging Markets</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">Addressing the unique challenges of implementing ethical artificial intelligence frameworks in diverse cultural contexts.</p>
<Link className="font-headline font-bold text-sm text-on-tertiary-container flex items-center gap-2 group/link" href="#">
                    Read Story
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</article>
{/* Article 3 */}
<article className="group flex flex-col h-full">
<div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-surface-container-low">
<img alt="Collab Tech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Close-up of diverse hands typing on high-end laptops in a brightly lit collaborative workspace" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrvMZEWin18DpN0y9d40X8QNv8fMyOjmhBswFiD3WvQ90BNRiaGwiG_QAHII7WDqZ_1aZh1f80qT25pPhF0aEBVqxnbnI2LXV6StlPL2s2qbZn8aDnV6s6-ZbFM3IZo_jid4jIa5FgNQBsTN1zAIb-WFSozSN6VlTMKb2NRCxBiMHG6JvN5pnaj-aEWJBJyd4R22cfcC3JFPFRWIoDjUDmo_FAgVnamCoNwf-vMH6NqWwjvdTzUwiJW8xFOK4AWKChkfsrkz4VStt1"/>
</div>
<div className="flex items-center justify-between mb-4">
<span className="font-label text-[10px] uppercase tracking-widest text-on-secondary-container bg-secondary-fixed px-2 py-1 rounded">Tech Culture</span>
<span className="font-body text-xs text-outline">Oct 05, 2024</span>
</div>
<h3 className="font-headline text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">The Buea Blueprint: Community over Competition</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6 flex-grow">Exploring the collaborative DNA that makes the Silicon Mountain tech hub a global outlier in startup success.</p>
<Link className="font-headline font-bold text-sm text-on-tertiary-container flex items-center gap-2 group/link" href="#">
                    Read Story
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</article>
</section></FadeIn>
{/* Newsletter Section */}
<FadeIn><section className="relative bg-primary overflow-hidden rounded-2xl mb-20">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 right-0 w-96 h-96 bg-on-tertiary-container rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[80px]"></div>
</div>
<div className="relative px-8 py-20 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="max-w-xl text-center lg:text-left">
<span className="font-label text-xs uppercase tracking-widest text-tertiary-fixed mb-4 inline-block">Stay Ahead</span>
<h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-white mb-4">Join the Silicon Mountain Pulse</h2>
<p className="font-body text-slate-300 text-lg leading-relaxed">Bi-weekly architectural insights into tech, data ethics, and the digital economy delivered directly to your inbox.</p>
</div>
<div className="w-full max-w-md">
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-grow bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white font-body placeholder:text-white/40 focus:bg-white/20 focus:ring-2 focus:ring-on-tertiary-container transition-all outline-none" placeholder="Your executive email" type="email"/>
<button className="bg-on-tertiary-container text-white font-headline font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all whitespace-nowrap" type="submit">
                            Subscribe
                        </button>
</form>
<p className="font-label text-[10px] text-white/40 mt-4 text-center lg:text-left">By subscribing, you agree to our Data Ethics policy.</p>
</div>
</div>
</section></FadeIn>
{/* Secondary Grid (More Articles) */}
<FadeIn><section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
{/* Big Card 1 */}
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-xl transition-all duration-300">
<div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-lg">
<img alt="Business Growth" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" data-alt="Minimalist business growth charts and analytics on a bright clean screen with professional stationery nearby" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrMm21UJP-_O2zYPHwbNwhyZMZkHUKWkN4py8qjsw8Ifu5nm70nH57Yyy117PanapQEvoOWfwz5DFHxg8dja7mhgosfGWWaOFofVFoz5zyhwkkpG7oabzJktbuB5arL1W_hsRS2LIs7Ng4tE23KtsgTG5z-6vZG8wEnT-c3so5pDvU8mpNU5mYwBtUK8Blynsn0wFUthHhlinvAKdxgQkB3jf_zvDZfty9q972xJTMer678GYo77Jv6BYrT4mwnH9CPwsXBXZTPfTQ"/>
</div>
<div className="w-full md:w-2/3">
<span className="font-label text-[10px] uppercase tracking-widest text-on-tertiary-fixed-variant bg-tertiary-fixed px-2 py-1 rounded">Business Growth</span>
<h4 className="font-headline text-xl font-bold text-primary mt-3 mb-2">Scaling Lean: From Buea to the World</h4>
<p className="font-body text-sm text-on-surface-variant mb-4">Effective strategies for bootstrapping tech ventures in high-potential markets.</p>
<Link className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest" href="#">Read Article</Link>
</div>
</div>
{/* Big Card 2 */}
<div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-xl transition-all duration-300">
<div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-lg">
<img alt="Software Dev" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" data-alt="Futuristic glowing circuits and microchips representing high-performance software engineering and security" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYahZok6-R9Mw7oRzhOXLV8Ry5UyRM_7akZdMT_vZNkRJe4EzJ9GkdlXpl_zIxjsNT9CswEFlJzBF_RMsT2v5dw_1--pXne94hcjK-PFYfhwKbYzNoI53bvsQCwQvo0QWVNyEWg96XaPRM4tIMne6a17FJ2Y-uMHJCV1pEHzc4JdZecgHhd0bZKpdXRLg8mZxG08O_nuelkLD1k8pFPISzPQfL7_vwfYUJtxH4dTsoAgyLU2uYQVI0PoNk3K4piKkPiAGRZzvZ8u5w"/>
</div>
<div className="w-full md:w-2/3">
<span className="font-label text-[10px] uppercase tracking-widest text-on-secondary-fixed-variant bg-secondary-fixed px-2 py-1 rounded">Software Dev</span>
<h4 className="font-headline text-xl font-bold text-primary mt-3 mb-2">Clean Code in the Age of Co-Pilots</h4>
<p className="font-body text-sm text-on-surface-variant mb-4">Maintaining architectural integrity when AI is writing your boilerplate.</p>
<Link className="text-on-tertiary-container font-bold text-xs uppercase tracking-widest" href="#">Read Article</Link>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
    