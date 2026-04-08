import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <FadeIn>
          <div className="mb-8">
            <span className="font-headline font-black text-[200px] md:text-[280px] leading-none text-surface-container-high select-none">
              404
            </span>
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container/20 rounded-full">
              <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
              <span className="font-label text-xs font-bold uppercase tracking-widest text-on-tertiary-container">
                Page Not Found
              </span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Something went wrong
            </h1>
            
            <p className="text-on-surface-variant text-lg max-w-xl mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Let&apos;s get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link 
                href="/"
                className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined">home</span>
                Back to Home
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined">support_agent</span>
                Contact Support
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-on-tertiary-container/5 rounded-full blur-[100px] -z-10"></div>
        </FadeIn>
        
        {/* Quick Links */}
        <FadeIn delay={0.2}>
          <div className="mt-20 pt-12 border-t border-outline-variant/20">
            <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6 font-bold">
              Quick Links
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/services" className="text-primary hover:text-on-tertiary-container transition-colors font-medium">
                Services
              </Link>
              <Link href="/training" className="text-primary hover:text-on-tertiary-container transition-colors font-medium">
                Training
              </Link>
              <Link href="/blog" className="text-primary hover:text-on-tertiary-container transition-colors font-medium">
                Blog
              </Link>
              <Link href="/portfolio" className="text-primary hover:text-on-tertiary-container transition-colors font-medium">
                Portfolio
              </Link>
              <Link href="/careers" className="text-primary hover:text-on-tertiary-container transition-colors font-medium">
                Careers
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
