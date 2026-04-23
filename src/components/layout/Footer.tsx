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

      <footer className="bg-[#111827] w-full pt-20 pb-10 text-tertiary-fixed font-body text-sm leading-relaxed">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 border-t border-white/10 pt-16">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-black text-white mb-4 block">Ferdsilinks</span>
<p className="text-slate-400 mb-6">Leading the digital transformation of Cameroon through precision tech solutions and elite education.</p>
<div className="flex gap-4">
<a href="https://www.facebook.com/share/1Zn5gjt5PA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-on-tertiary-container transition-colors cursor-pointer text-white hover:text-[#ffdcc3]">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
</a>
<a href="https://cm.linkedin.com/company/ferdsilinks-group" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-on-tertiary-container transition-colors cursor-pointer text-white hover:text-[#ffdcc3]">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
</a>
<a href="https://www.instagram.com/ferdsilinks?igsh=MTF1MGRiNjE4ZTFtMg==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-on-tertiary-container transition-colors cursor-pointer text-white hover:text-[#ffdcc3]">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
</a>
</div>
</div>
<div>
<h4 className="font-headline font-bold text-white mb-6 uppercase tracking-widest text-xs">Services</h4>
<ul className="space-y-4 text-slate-400">
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/services/data-ai">Data Science & AI</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/services/it-software">IT & Software</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/services/training-research">Training & Research</Link></li>
<li><Link className="hover:text-[#ffdcc3] transition-colors hover:translate-x-1 inline-block transition-transform duration-200" href="/services/consulting-print">Consulting</Link></li>
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
<p className="text-slate-400 mb-2">Ferdsilinks, Sosoliso, Molyko</p>
<p className="text-slate-400 mb-4">Buea, SW Region, Cameroon</p>
<a href="https://www.google.com/maps/dir//4.159040,9.285237" target="_blank" rel="noopener noreferrer" className="text-on-tertiary-container font-bold underline underline-offset-4">Get Directions</a>
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
