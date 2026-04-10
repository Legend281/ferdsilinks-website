"use client";

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter?: string;
  email?: string;
  department?: string;
}

interface TeamClientProps {
  initialMembers?: TeamMember[];
}

export default function TeamContent({ initialMembers = [] }: TeamClientProps) {
  const { t } = useLanguage();
  
  const teamMembers = initialMembers.length > 0 ? initialMembers : [
    {
      id: 'placeholder',
      name: 'Tingom Ferdinand',
      role: 'Chief Executive Officer & Founder',
      bio: 'Data analysis expert and visionary leader. Founded Ferdsilinks in 2019 with a mission to transform African businesses through technology.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
      linkedin: 'https://cm.linkedin.com/in/tingom-ferdinand-1800a458',
    },
    {
      id: 'placeholder-2',
      name: 'Ngong Charlotte Nabain',
      role: 'Director, Ferdsilinks Academy',
      bio: 'Marketing Manager, Data Analyst, and Founder of WiDS Cameroon. Passionate about STEAM education and developing tech talent in Africa.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
      linkedin: 'https://cm.linkedin.com/in/ngong-charlotte-nabain-0b06861b0',
    },
    {
      id: 'placeholder-3',
      name: 'Ngong Marinus',
      role: 'Software Engineer',
      bio: 'Full-stack software engineer with expertise in building scalable web applications. 3+ years of experience in modern development.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/ngong-marinus-1a640b284',
    },
    {
      id: 'placeholder-4',
      name: 'Yuven Brian',
      role: 'Co-Founder',
      bio: 'Full-stack developer and tech lead. Building products that solve real problems across Africa.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
      linkedin: 'https://linkedin.com/in/yuven-brian-20636126b',
    },
  ];

  return (
    <main className="pt-24 space-y-4">
      
{/* Leadership Hero Section */}
<FadeIn>
  <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        className="w-full h-full object-cover opacity-40" 
        alt="Buea cityscape" 
        src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&h=1080&fit=crop"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
          <span className="w-2 h-2 bg-on-tertiary-container rounded-full animate-pulse"></span>
          <span className="font-label text-tertiary-fixed tracking-[0.2em] text-xs uppercase font-bold">{t.team.ourCollectiveVision}</span>
        </div>
        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8">
          {t.team.mindsShaping} <span className="text-on-tertiary-container">{t.team.innovation}</span>
        </h1>
        <p className="font-body text-xl text-on-primary-container max-w-2xl leading-relaxed mb-10">
          {t.team.buesaDescription}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="#team" className="bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
            {t.team.meetTheTeam} <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link href="/careers" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
            {t.team.joinUs}
          </Link>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
      <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
    </div>
  </section>
</FadeIn>
{/* Stats Impact Row */}
<FadeIn><section className="bg-surface-container-high py-16">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<span className="font-headline text-4xl font-black text-primary-container mb-2">2019</span>
<p className="font-label text-sm text-on-surface-variant uppercase tracking-widest">{t.team.combinedYears}</p>
</div>
<div>
<span className="font-headline text-4xl font-black text-primary-container mb-2">50+</span>
<p className="font-label text-sm text-on-surface-variant uppercase tracking-widest">{t.team.globalProjects}</p>
</div>
<div>
<span className="font-headline text-4xl font-black text-primary-container mb-2">1000+</span>
<p className="font-label text-sm text-on-surface-variant uppercase tracking-widest">Businesses Served</p>
</div>
<div>
<span className="font-headline text-4xl font-black text-primary-container mb-2">98%</span>
<p className="font-label text-sm text-on-surface-variant uppercase tracking-widest">{t.team.clientRetention}</p>
</div>
</div>
</div>
</section></FadeIn>
{/* Executive Leadership Grid */}
<FadeIn><section id="team" className="py-32 px-8 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl font-bold text-primary mb-6">{t.team.executiveGovernance}</h2>
<p className="text-on-surface-variant text-lg">{t.team.pioneeringExcellence}</p>
</div>
<div className="h-px bg-outline-variant flex-grow mb-4 hidden md:block opacity-30"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{teamMembers.map((member) => (
<div key={member.id} className="bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(0,33,71,0.08)] group">
<div className="aspect-[4/5] overflow-hidden rounded-lg mb-6">
<img 
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
  alt={member.name} 
  src={member.image}
/>
</div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline text-xl font-bold text-primary">{member.name}</h3>
<p className="font-label text-sm text-on-tertiary-container uppercase font-bold tracking-tight">{member.role}</p>
</div>
{member.linkedin && member.linkedin !== '#' && (
<a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
<span className="material-symbols-outlined">open_in_new</span>
</a>
)}
</div>
<p className="text-on-surface-variant text-sm leading-relaxed">{member.bio}</p>
</div>
))}
</div>
</section></FadeIn>
{/* Join CTA */}
<FadeIn><section className="py-24 bg-surface-container-low">
<div className="max-w-4xl mx-auto px-8 text-center">
<h2 className="font-headline text-4xl font-bold text-primary mb-6">Want to Join Our Team?</h2>
<p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
We&apos;re always looking for talented individuals who share our vision of transforming Africa through technology. If you&apos;re passionate about data, software, and innovation — we&apos;d love to hear from you.
</p>
<Link href="/careers" className="inline-flex items-center gap-2 bg-on-tertiary-container text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
View Open Positions <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
</section></FadeIn>

    </main>
  );
}
