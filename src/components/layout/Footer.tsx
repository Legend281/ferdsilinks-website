import Link from 'next/link';

export function Footer() {
  return (
    <>
      {/* Floating WhatsApp */}
      <Link className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-[100] group" href="https://wa.me/237676817339" target="_blank">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.893-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.893-11.893 11.893-2.007 0-3.974-.509-5.718-1.472l-6.275 1.69zm6.114-3.814c1.553.921 3.09 1.398 4.735 1.398 5.404 0 9.801-4.397 9.801-9.802 0-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.311-2.872-6.93-2.872-5.405 0-9.803 4.398-9.803 9.802 0 1.794.493 3.547 1.427 5.07l-.95 3.473 3.621-.939zm12.164-10.741c-.244-.122-1.442-.711-1.666-.793-.224-.082-.387-.122-.55.122-.163.244-.633.793-.773.957-.142.163-.284.183-.528.061-.244-.122-1.028-.38-1.958-1.21-.724-.647-1.213-1.446-1.355-1.69-.142-.244-.015-.376.107-.497.111-.11.244-.285.366-.427.122-.143.163-.244.244-.407.082-.163.041-.305-.02-.427-.061-.122-.55-1.324-.753-1.812-.198-.475-.399-.411-.55-.419-.142-.007-.305-.008-.468-.008s-.427.061-.65.285c-.224.224-.854.835-.854 2.036 0 1.201.875 2.361 1.002 2.53.122.163 1.722 2.628 4.171 3.687.583.252 1.037.403 1.392.516.585.186 1.119.16 1.541.098.47-.07 1.442-.589 1.646-1.159.204-.57.204-1.058.142-1.159-.061-.1-.224-.163-.468-.285z"></path>
        </svg>
        <span className="absolute right-full mr-4 bg-primary text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Chat with us</span>
      </Link>

      <footer className="bg-primary-container w-full pt-20 pb-10 text-tertiary-fixed font-body text-sm leading-relaxed">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 border-t border-white/10 pt-16">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-black text-white mb-4 block">Ferdsilinks</span>
<p className="text-slate-400 mb-6">Leading the digital transformation of Cameroon through precision tech solutions and elite education.</p>
<div className="flex gap-4">
<span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-on-tertiary-container transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">language</span></span>
<span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-on-tertiary-container transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">alternate_email</span></span>
<span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-on-tertiary-container transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">share</span></span>
</div>
</div>
<div>
<h4 className="font-headline font-bold text-white mb-6 uppercase tracking-widest text-xs">Services</h4>
<ul className="space-y-4 text-slate-400">
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/services/data-science">Data Science Lab</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/services/ai-integration">AI Integration</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/services/cloud-systems">Cloud Systems</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/services/software-architecture">Software Architecture</Link></li>
</ul>
</div>
<div>
<h4 className="font-headline font-bold text-white mb-6 uppercase tracking-widest text-xs">Company & Resources</h4>
<ul className="space-y-4 text-slate-400">
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/about">About Us</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/team">Leadership Team</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/careers">Careers</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/portfolio">Portfolio</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/training">Training Hub</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/blog">Blog & Insights</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/podcast">Podcasts</Link></li>
</ul>
</div>
<div>
<h4 className="font-headline font-bold text-white mb-6 uppercase tracking-widest text-xs">Office</h4>
<p className="text-slate-400 mb-4">Tech District, Molyko<br/>Buea, SW Region<br/>Cameroon</p>
<Link className="text-on-tertiary-container font-bold underline underline-offset-4" href="#">Get Directions</Link>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-slate-500 font-medium">
                © 2024 Ferdsilinks. Precision in Data, Excellence in Tech. Buea, Cameroon.
            </div>
<div className="flex gap-8 text-slate-400">
<Link className="hover:text-white" href="#">Privacy Policy</Link>
<Link className="hover:text-white" href="#">Terms of Service</Link>
</div>
</div>
</footer>
    </>
  );
}
