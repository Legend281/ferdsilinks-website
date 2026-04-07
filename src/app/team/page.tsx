import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="pt-24 space-y-4">
      
{/* Leadership Hero Section */}
<FadeIn><section className="relative min-h-[716px] flex items-center overflow-hidden bg-primary-container">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-30 mix-blend-overlay" data-alt="Wide shot of modern Buea cityscape with Silicon Mountain looming in the background under clear blue sky with tech overlay elements" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbAVFYEJdgAlKKjFsJavyOFnWVON7DF5Px3AbQTI2gZf-yW_2YHVosjuAJJCZHSMMrw1AgvnL7IYeUilVdaIRrd64MbvqbjXXQ48UTATE3gZ_ECj8zj0lWPcqMU-HL-NxSfyTErE2L08f7Pq4Z97DRB238rB7CTjXru9-wgSOZVZ3fg0DtwjornyJ0fHulxdKnDhwimlfr_NkoKZfMryfykAcx-u9kUuJq1bsrCGHB1ceTLXQklFjQvkedj6nfNkMB5YNhm32rMpWC"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary-container to-transparent opacity-90"></div>
</div>
<div className="max-w-7xl mx-auto px-8 py-24 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-8">
<span className="font-label text-tertiary-fixed tracking-[0.2em] text-sm uppercase mb-6 block">Our Collective Vision</span>
<h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                        The Minds Shaping African <span className="text-on-tertiary-container">Innovation</span>
</h1>
<p className="font-body text-xl text-on-primary-container max-w-2xl leading-relaxed">
                        Based in Buea, we are a fusion of data scientists, software architects, and researchers dedicated to building high-integrity digital infrastructure for the continent.
                    </p>
</div>
</div>
</section></FadeIn>
{/* Stats Impact Row */}
<FadeIn><section className="bg-surface-container-high py-16">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center md:items-start">
<span className="font-headline text-4xl font-black text-primary-container mb-2">100+</span>
<span className="font-label text-sm text-on-surface-variant uppercase tracking-widest">Combined Years of Expertise</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="font-headline text-4xl font-black text-primary-container mb-2">50+</span>
<span className="font-label text-sm text-on-surface-variant uppercase tracking-widest">Global Projects Delivered</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="font-headline text-4xl font-black text-primary-container mb-2">15+</span>
<span className="font-label text-sm text-on-surface-variant uppercase tracking-widest">PhDs &amp; Domain Specialists</span>
</div>
</div>
</div>
</section></FadeIn>
{/* Executive Leadership Grid */}
<FadeIn><section className="py-32 px-8 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-2xl">
<h2 className="font-headline text-4xl font-bold text-primary mb-6">Executive Governance</h2>
<p className="text-on-surface-variant text-lg">Pioneering excellence through a combination of academic rigor and industrial grit.</p>
</div>
<div className="h-px bg-outline-variant flex-grow mb-4 hidden md:block opacity-30"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* CEO */}
<div className="bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(0,33,71,0.08)] group">
<div className="aspect-[4/5] overflow-hidden rounded-lg mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of a confident male CEO in a tailored blazer, smiling warmly in a modern minimalist office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNtJt1MWike21cHTnDSmVmTibf-B2hOCaX_m_jJ6iAZR619XFMaDO1kAqJx2ZSK6hCBzM92OcOqNxSUxb__ESgJuGxwJvGYkbJldcxslO6M8qZmCE46w0Ng60wgseXY2q48B4DC_m6VTdYPEnbo9lENn1NGhjr2yN2WSEVqXLconbbPG9pXoGqQAYoUUkTngFyR3DD7vcCGIkwAOwRpPh6swjSAfDQKAmzcKrA9EvFniDENRHkuOWeXXpfpyi6fJPb4VkpyOfkhghP"/>
</div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline text-2xl font-bold text-primary">Dr. Ferdinand L.</h3>
<p className="font-label text-sm text-on-tertiary-container uppercase font-bold tracking-tight">Chief Executive Officer</p>
</div>
<Link className="text-primary hover:text-on-tertiary-container transition-colors" href="#">
<span className="material-symbols-outlined text-2xl">link</span>
</Link>
</div>
<p className="text-on-surface-variant text-sm leading-relaxed">
                        A visionary strategist with over 20 years in digital transformation across the EMENA and African regions.
                    </p>
</div>
{/* CTO */}
<div className="bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(0,33,71,0.08)] group">
<div className="aspect-[4/5] overflow-hidden rounded-lg mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Portrait of a young female tech executive with glasses, intelligent expression, in a high-tech lab environment with soft blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7DD0E8V6Z_CVQZaMbqzi8hGTMYSH2knKtSHsjjKHgTgLs-17hUR5NR_9GDf7Vrv2Ba975LWJlrUrkCH2IgaugBtGs1r6SMHLKgYtNzWrzJJKRr1LLDiNcD-kL5S7Q4or-tD6rvMY8xcZG_OZ6SO_ZdbWoh95ENbP3xjY2HBzBgRhl-RJUpz0m6Sp0HnOI6bMYQ0FjHpmg57bw-BeMBlQ_WMMPmMLwkruL6Ygh3IW-e05kn1586NXBCOMnabwA9k84cQrxtgbt9r0n"/>
</div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline text-2xl font-bold text-primary">Engr. Sarah M.</h3>
<p className="font-label text-sm text-on-tertiary-container uppercase font-bold tracking-tight">Chief Technology Officer</p>
</div>
<Link className="text-primary hover:text-on-tertiary-container transition-colors" href="#">
<span className="material-symbols-outlined text-2xl">link</span>
</Link>
</div>
<p className="text-on-surface-variant text-sm leading-relaxed">
                        Architect of high-scale cloud systems and former lead engineer for pan-African fintech infrastructure.
                    </p>
</div>
{/* Head of Data Science */}
<div className="bg-surface-container-lowest rounded-xl p-6 transition-all duration-300 hover:shadow-[0px_24px_48px_rgba(0,33,71,0.08)] group">
<div className="aspect-[4/5] overflow-hidden rounded-lg mb-6">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Mid-shot of a distinguished African man looking at a data visualization screen, soft architectural lighting in a research studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBOzf31wpliR6YSBL8jdZ-9j51uqGVfJhV-djOIZjb7QAMDDbaDu-Ctr1j1bBJpshZi3TriDV47TL0kfMXI06vyVYIpiZwpXf_Mf4L60X4xBA023G8vQeIpHmzWLNYONeJDemYg2jo3oGMUwS-JlNvDVkExpiBkmbQ8-iQ1_Am3lXNo5iBOUtVzA4UeTLA7l3U8q6sh-QihxVY4dXRSf_GmE6RrmWS5327QuLuqi-Q67dDZpTUFBOoLqmmWANF_JSxt6dxhuEMYcLc"/>
</div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline text-2xl font-bold text-primary">Dr. Ambe T.</h3>
<p className="font-label text-sm text-on-tertiary-container uppercase font-bold tracking-tight">Head of Data Science</p>
</div>
<Link className="text-primary hover:text-on-tertiary-container transition-colors" href="#">
<span className="material-symbols-outlined text-2xl">link</span>
</Link>
</div>
<p className="text-on-surface-variant text-sm leading-relaxed">
                        Pioneer in localized AI models, focusing on NLP for African dialects and predictive agricultural analytics.
                    </p>
</div>
</div>
</section></FadeIn>
{/* Departmental Experts (Bento Grid Style) */}
<FadeIn><section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="mb-16">
<h2 className="font-headline text-3xl font-bold text-primary mb-2">Our Specialized Cells</h2>
<p className="text-on-surface-variant">The engine room of Silicon Mountain innovation.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/* Software Engineering */}
<div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-on-tertiary-container">terminal</span>
<h3 className="font-headline text-xl font-bold">Software Engineering</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center">
<img className="w-16 h-16 rounded-full mx-auto mb-3 object-cover grayscale hover:grayscale-0" data-alt="Close up portrait of a male software developer in a tech office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjKAXhtilyPC1pC84sacIDgfcZcPQcnMV4p3W39_F64C8sdGdybSc6VMBEng4KzhRMNmLIwjinrsqE_Qt7Z7KqoDDW_MFELByyvmFuEktjoyMoB7eComn10_I1AGdmn2Vs3wy29A4ddENA55G4WK-3Q42rP_tgHbKQF7CYxD0E_mT_fBKHLjxRAAAgA2JvFs6WekL2nzGK26_GYVuIkd_KT1LEO7DJ59TXp9b06BqDR_eHslHIJmncx9E45EG890zNZJq5U373D4r7"/>
<p className="font-headline text-sm font-bold text-primary">Kevin N.</p>
<p className="text-[10px] text-on-surface-variant uppercase font-label">Lead Backend</p>
</div>
<div className="text-center">
<img className="w-16 h-16 rounded-full mx-auto mb-3 object-cover grayscale hover:grayscale-0" data-alt="Portrait of a female UI/UX designer smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZgILp3JpGeAphfGvaUY6GeJYgqtU9K8WKte3sX9rpMnWafh6Hi3V8stQP4XWnB2TX947GefV7Y7jhDK7bVki_WzU3kjJFPSRei8rWrf5eteMI3Bs0IMgAqXoKxYECb-lZFY-EG36CY2SbcQrspXwdg9pO8_jY3tuOHc99nHlnkO5SomdBS_6UvTnnI95pvP-uly7jD5vWb5pzHd-l7arWUIhDLzX-i94lY1I6x7VnBx-sb90CAz6H_Pgx70zB46Pj4W0T-V94_MFA"/>
<p className="font-headline text-sm font-bold text-primary">Diane W.</p>
<p className="text-[10px] text-on-surface-variant uppercase font-label">UX Architect</p>
</div>
<div className="text-center">
<img className="w-16 h-16 rounded-full mx-auto mb-3 object-cover grayscale hover:grayscale-0" data-alt="Portrait of a young male devops engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_51-j-e1ltoQJkJAuYSjsJaJON0YPzI_5UJlYel_9lBgHAYEJ5TYC1oV3rfI-Qu5OvXKx5AiGiqw17ed8NoyeusplXcV86Qw5jDrJSdthbeQYEWZhYyalA5Vjza574JGp3CN2pJk0jCb5b8ROHzzyRPXS-FN2bZ0Bgf6S78DeJ0Hbp3TeI9WSacWEq3fbq7I6psofmZfB189GxoyPNIIzWr6LQYX1INTn2QGm-16i2FobIjcWgQkrvMOEp1C1YPNei2SiEylACz8r"/>
<p className="font-headline text-sm font-bold text-primary">Emmanuel T.</p>
<p className="text-[10px] text-on-surface-variant uppercase font-label">DevOps</p>
</div>
<div className="text-center">
<img className="w-16 h-16 rounded-full mx-auto mb-3 object-cover grayscale hover:grayscale-0" data-alt="Portrait of a female frontend engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp0eWUXq58sog-T0ScppXgy9s2KAaRV1YBJoLc6vXD6xdVMDlSSiwqVktUevEZ085grXvs98C0Q5XhAFgJ-v9HCgDwgKBNvwoQ1FAwh-U9LJI-DedSMeJSZsPs-E_fSce1fCn0WYVVmw2Nq1A8VzEac1tr-QE_MvUcDATY2Zm_edGcK0bdxzuDfdW6u9hX4xzrA8OyxCbNXy1ApW669HM1bgveLZrKG_y4CuLr9psRw_kd83ng_aWQIhZXhpNoA1HslcYTdm2uW3pH"/>
<p className="font-headline text-sm font-bold text-primary">Sandra B.</p>
<p className="text-[10px] text-on-surface-variant uppercase font-label">Frontend Lead</p>
</div>
</div>
</div>
{/* Data Science & AI */}
<div className="lg:col-span-4 bg-primary text-white p-8 rounded-xl flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-8 text-on-tertiary-container">
<span className="material-symbols-outlined">analytics</span>
<h3 className="font-headline text-xl font-bold text-white">Data Science &amp; AI</h3>
</div>
<p className="text-sm text-on-primary-container leading-relaxed mb-8">Specialists in deep learning, satellite imagery analysis, and predictive modeling for the emerging markets.</p>
</div>
<div className="flex -space-x-4">
<img className="w-12 h-12 rounded-full border-4 border-primary object-cover" data-alt="Close up of researcher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaQSvYZFppCsEQPP0Ytp1pRIY_yCziwxYVmgsC1vjaYjqKXdf_JStTi1bZN2B_Tw3oEO37VuBHETOweh4pnQlwdyP3WTs7dcr8bur3D9lQuBMUMa6n7Wadcg8wWk0SjL1Mh6u9c9xfiRLoXBIlO0o4Deq6Lu6_TriYyxvQO9a-Sdbmv_YiKq2LFNQkpQQkDkwA-qPCZFE8yAItf-lC4q12J4HskfCk3WRMw8jSk_l_VwuRY0oUUXH6VKp7QxPJ_lkYzerGT2f0NOKi"/>
<img className="w-12 h-12 rounded-full border-4 border-primary object-cover" data-alt="Close up of researcher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrul1mcVw9cEN46JukablWN6chVhLBAuGsQnXsZ08W2Fu9T7RWURVnoIw9-h6O0iRyNeFOij_idZO5ReOMmLkjv8ryLV_4gRD1Uzt2FN_QOUFnw0r8T08XEP8sAk1xKB6QkAD_m5o3bVIQADouHbjMXeC8RZgHhx18YAaC9ARkD8sfnjgWjJ5eDf8qaK9Z4-hkwTWObSO8Yus3hv24TYP_KU5-iY9_CapGONG-rGXGnxD25_K41P42ZhXRC9D28mAlwq4wonXWEmOh"/>
<img className="w-12 h-12 rounded-full border-4 border-primary object-cover" data-alt="Close up of researcher" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2svzsnJYJxyi5O3ivQf34PKQFAzjT7utP9zBSmDnyOjRenz5FyJhJ1zoDr_7briTWCtmV9W5wW1yk7nMCnBq453ArZCtApb6ejeGe3IEJZH6KGz6b34uSPxGse6kHDRYYZ-vpLeYcMquAgElKATwpPgMgqjQhJgiGD2Z0hKA3arjjd3-aaILMeEuxnwd03IRi3aF0_8wDwo1gfdCWmnyep-KCOD_emtIvcV-1EYa5tFDKRgsxUzmwxD_rGCdevNAG1OwiJj05QGrH"/>
<div className="w-12 h-12 rounded-full border-4 border-primary bg-on-tertiary-container flex items-center justify-center text-xs font-bold">+8</div>
</div>
</div>
{/* Research & Consulting */}
<div className="lg:col-span-4 bg-surface-container-highest p-8 rounded-xl">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary">insights</span>
<h3 className="font-headline text-xl font-bold">Research &amp; Consulting</h3>
</div>
<p className="text-sm text-on-surface-variant mb-6">Bridging the gap between raw data and actionable government/NGO policy.</p>
<div className="flex items-center gap-4">
<img className="w-10 h-10 rounded-lg object-cover" data-alt="Professional consultant in a library setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvOlXcExkEQVSnUhG5GRiVm79wBGxbyMFAj3KkkNJSY2TeuZY0mTwki41nW6_3bAPuumCbiQro4wCYofOOt06G_oImtVMWBRSkv8Uxa5FS5ermj1KtXLp3fVt1-kJZuOu6fNTby94I5ABCgsExgeh-YZ2R_FcYs4OUZsgp_iLIr0ZcE11zsxsrKJufzfMdvK7jbLjzkLINtg2lsOWizJOkc1ktRfgYGnevx-VrB7cOYjLS9U5Lg7H-d1xPCmWurEkk-6ksvfuvdwJ6"/>
<div>
<p className="font-bold text-sm">Prof. Simon L.</p>
<p className="text-[10px] font-label text-on-tertiary-container">Strategic Advisor</p>
</div>
</div>
</div>
{/* Training & Academy */}
<div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-8xl opacity-5 text-primary group-hover:scale-110 transition-transform">school</span>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-on-tertiary-container">school</span>
<h3 className="font-headline text-xl font-bold">Training &amp; Academy</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<p className="text-sm text-on-surface-variant leading-relaxed">
                                    Our academy has trained over 500+ engineers in the Buea ecosystem, fostering the next generation of Cameroon&apos;s tech leadership.
                                </p>
<button className="bg-surface-container-high px-6 py-3 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-all">
                                    Explore Academy Programs
                                </button>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>
{/* Advisory Board */}
<FadeIn><section className="py-24 max-w-7xl mx-auto px-8">
<h2 className="font-label text-xs uppercase tracking-[0.3em] text-on-surface-variant text-center mb-16">Global Advisory Council</h2>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">hub</span>
<span className="font-headline font-extrabold tracking-tighter">TECH AFRICA PARTNERS</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">token</span>
<span className="font-headline font-extrabold tracking-tighter">BUEA DATA LABS</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">public</span>
<span className="font-headline font-extrabold tracking-tighter">GLOBAL AI CONSORTIUM</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl">verified</span>
<span className="font-headline font-extrabold tracking-tighter">DIGITAL IMPACT GROUP</span>
</div>
</div>
</section></FadeIn>
{/* "Join the Innovation" CTA */}
<FadeIn><section className="py-32 px-8">
<div className="max-w-7xl mx-auto bg-primary-container rounded-3xl overflow-hidden relative">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20" data-alt="Blurred background of a modern collaborative office space with glass walls and neon 'Silicon Mountain' signs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKDOt96Htdx3S7w2nYuUuxcXonPr9_IndYqsTAybTHIOw0okRJqte1XbkkqN6HOX0w2jepzZOHQBGlImN6I-EGQeKd6whY26wk2M5DzfR6Grn2CmTTm8tvVkop4YT4ndGvr7dIKuN2Ly2Y7FaVcZc81NE6DCKF7r5OCtJuXn02BrboIQR3gc-aAtww7Z4-0ump7-NyIH8LShe4nFWBLobcNbc8I2x75CcFDBVmbmikFbH5ywVXc0z83nvg6_Ld9dSlUZhAfxbie-U_"/>
<div className="absolute inset-0 bg-gradient-to-r from-primary-container to-transparent"></div>
</div>
<div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12">
<div className="max-w-xl text-center md:text-left">
<h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to build the future of Africa?</h2>
<p className="text-on-primary-container text-lg">We are always looking for bold thinkers and precise executors to join our mission in Buea.</p>
</div>
<div>
<Link className="inline-flex items-center gap-4 bg-on-tertiary-container text-white px-10 py-5 rounded-xl font-headline font-bold text-lg hover:bg-tertiary-fixed hover:text-on-tertiary-fixed transition-all shadow-xl" href="#">
                            View Open Roles
                            <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
    