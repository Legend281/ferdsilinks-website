"use client";

import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function PodcastContent() {
  const { t } = useLanguage();
  const tp = t.podcastPage;

  return (
    <main className="pt-24 space-y-4">
       
{/* Hero Section: Featured Episode - Background Image Hero */}
<FadeIn>
  <section className="relative bg-primary overflow-hidden min-h-[85vh] flex items-center">
    <div className="absolute inset-0 opacity-30">
      <img 
        alt="Recording studio" 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsNqAQek_KFXaR33Zw4lX2IJG2oBzMNR4x198_WIvwm-wxsrtqSV5cih4aBOrVESstIEj6Pivy99XfnamG-PCccDrAfKUM3tnpXpyxGZ-CvlLH8y49MyK_m2pA6Eg2o9H7rzXuJ-20PIyzUqwKgUAOtNyNC68ZBfMcdhuJ6UZZH3ObjbrHxwyxbJS5fW-OE2MybXW_C3HazKur4mpdfaVVUIjU33gc_Nx9cjvHGOqWjfZ1YPCxoXYid-DhQ8T7gdAEtECeLCcat48p"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
    
    <div className="relative max-w-[1440px] mx-auto px-6 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-on-tertiary-container/80 backdrop-blur-sm rounded-full w-fit">
            <span className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse"></span>
            <span className="font-label text-xs font-bold uppercase tracking-widest text-white">{tp.newEpisode}</span>
            <span className="w-1 h-1 bg-white/40 rounded-full"></span>
            <span className="font-label text-xs font-bold text-white/80">Season 4, Ep 12</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1] tracking-tight">
            {tp.titlePart1} <br/> <span className="text-on-tertiary-container">{tp.titlePart2}</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
            {tp.heroDesc}
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <button className="w-20 h-20 rounded-full bg-on-tertiary-container text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl hover:shadow-on-tertiary-container/50">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </button>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">{tp.listenNow}</span>
              <span className="text-white/60 text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {tp.duration}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-3 transition-colors backdrop-blur-md border border-white/10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13.85 17c-1.25-1.32-2.97-2.1-4.85-2.1-2.65 0-4.99 1.54-6.2 3.77l-1.05-1.05c1.7-2.5 4.55-4.02 7.75-4.02 3.65 0 6.72 2.4 7.7 5.7l2.05-2.05c-1.4-1.77-3.31-3.06-5.52-3.62z"/></svg>
              <span className="font-bold">Apple Podcasts</span>
            </button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-3 transition-colors backdrop-blur-md border border-white/10">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              <span className="font-bold">Listen on Spotify</span>
            </button>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-on-tertiary-container/20 rounded-full blur-3xl"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-4 border-white/10">
              <img 
                alt="Silicon Mountain Pioneers" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1OKI4kCx4_s4MzFknCuyJeYu_lAiWPLk4zre_iY_u5OPsm8daid2Wvv-HqTncNw19Kq9lVsqTvbnaTc8VgtWk_UkMl8hNhZGw7rJlV1_uhcA6e05eQctTCfgKE3J4xOUxvv0GyM1f_CkFJ1V33ER35ZC54-Jgd_gnlhB4_y6_t3jbXTR21rrHbOBYJ1DdSZTEJip2Th6N8lHJM4aE5jyEbFPov_AGxXSDA5vpPVBpPMid7lxaJHkWTZUv96L4kc248MwZRdqMk4HR"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-on-tertiary-container p-6 rounded-xl shadow-2xl -rotate-2">
              <p className="text-white font-headline font-bold text-xl">#BueaTech</p>
              <p className="text-white/70 text-sm">Innovating at the peak</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-tertiary-fixed p-4 rounded-lg shadow-xl">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-tertiary-fixed text-lg">podcasts</span>
                <span className="font-label text-xs font-bold text-primary">12K+ Listeners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
      <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
    </div>
  </section>
</FadeIn>
{/* Subscription Bar */}
<FadeIn><section className="bg-surface-container-low py-8">
<div className="max-w-[1440px] mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
<p className="font-label text-sm font-bold tracking-[0.2em] text-on-surface-variant uppercase">Available Platforms</p>
<div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<Link className="flex items-center gap-2 font-headline font-bold text-primary" href="#">
<span className="material-symbols-outlined">google</span>
                        Google Podcasts
                    </Link>
<Link className="flex items-center gap-2 font-headline font-bold text-primary" href="#">
<span className="material-symbols-outlined">rss_feed</span>
                        RSS Feed
                    </Link>
<Link className="flex items-center gap-2 font-headline font-bold text-primary" href="#">
<span className="material-symbols-outlined">play_circle</span>
                        YouTube
                    </Link>
</div>
<div className="h-8 w-[1px] bg-outline-variant hidden md:block"></div>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-surface bg-gray-200">
<img alt="User" className="w-full h-full object-cover rounded-full" data-alt="Portrait of a smiling young African tech developer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsTX4j9goZYmc3vx7tiN6goxv78M18BNQ7LrPlHQTmxMwbd_i8ObykdDhZnG5XdLKLRR6cbeOUk_Npjfwu0rUjZmmSunp2cYTELELwJjAnum5PypJoeR3MLvfBDqGpFVcl2YZQ5XrboXo0G7QK16FEFgQ_Fa6fs_iqFsQU8OTfadnWobcJKkPtmZcLikZsX95hosI7TN0LEJpd8c4LCRVij4w70sMd-Bs3sGIopFJP9F4CnEdBKKV7d53IeDkiw9Sqj9kflqYrYkSY"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface bg-gray-300">
<img alt="User" className="w-full h-full object-cover rounded-full" data-alt="Close up portrait of a confident female tech executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe79eM3N9zIjkf9OzmOz6Z-20KkJWCshYc4CrTFVP5naTV23ti6B-SQOZDo-MUF1VvNza3jyJOQeffnEYCRq1I2y7dPNtDsQB1n2IhK9xaJKvBHl-ulTi8fgfsYT3OG6iAe5d42FXZ0sy6yTPL57KEYNWkMsankyDOjiR5sjYNQAA31dFZFEweq0_XpvuLE9AVN5v2luzvKCh-EF0ZGVIxlNaKef-YGyl9EvHiVypW6tnVdnrdlxgexWHLIIObzJ8Vx2kPPA4wSy9I"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface bg-on-tertiary-container flex items-center justify-center text-white text-xs font-bold">+12k</div>
</div>
<p className="text-xs font-label font-bold text-on-surface-variant">Active Listeners</p>
</div>
</div>
</section></FadeIn>
{/* Episode Library */}
<FadeIn><section className="py-24 bg-surface">
<div className="max-w-[1440px] mx-auto px-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-5xl font-headline font-bold text-primary-container mb-4">Episode Archive</h2>
<p className="text-on-surface-variant text-lg">Dive deep into the insights from Africa&apos;s most innovative tech minds.</p>
</div>
<div className="w-full md:w-auto">
<div className="bg-surface-container-high rounded-lg p-2 flex items-center gap-4">
<span className="material-symbols-outlined pl-4 text-on-surface-variant">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full md:w-64 font-body text-on-surface" placeholder="Search topics, guests..." type="text"/>
</div>
</div>
</div>
{/* Filters */}
<div className="flex flex-wrap gap-3 mb-12">
<button className="px-6 py-2 bg-primary text-white rounded font-label text-sm uppercase tracking-wider">All Episodes</button>
<button className="px-6 py-2 bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded font-label text-sm uppercase tracking-wider">Data Science</button>
<button className="px-6 py-2 bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded font-label text-sm uppercase tracking-wider">Tech Culture</button>
<button className="px-6 py-2 bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded font-label text-sm uppercase tracking-wider">Entrepreneurship</button>
<button className="px-6 py-2 bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded font-label text-sm uppercase tracking-wider">AI Ethics</button>
</div>
{/* Bento Grid of Episodes */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Episode Card 1 */}
<div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px]">
<div className="aspect-video relative overflow-hidden">
<img alt="Data Visualization" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Digital representation of complex data networks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPB_HGEK0kFBMdjINJO4oA2mpLYNOzOIE-cr__ZrgB4MSRqsIRsEBa1U3YJhqG5OOnrywPB7Qv3guxPLR_hGaNlXqnj_vr4dywLQZ-FajpQ6tk28305MK9w24acQmusZvXFQ3Thk9BN4EpijmChCHVAAdn3iGApaVXGfe5USEkYug5H8ygjtPjOxuDuVEwrxyTwmSL8HvU0bGQNJ63dlaSHdNGimoj7q_EbGV5KQ8SlXXzsaALBodIgT5LL8_bf7q6i4wSCfGCoPwX"/>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 left-4 bg-on-tertiary-container text-white px-3 py-1 rounded font-label text-[10px] font-bold uppercase tracking-widest">Data Science</div>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4">
<span className="font-label text-xs text-on-surface-variant">May 14, 2024</span>
<span className="font-label text-xs text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 42 min</span>
</div>
<h3 className="text-2xl font-headline font-bold text-primary group-hover:text-secondary transition-colors mb-4">The Truth About Data Sovereignty in Cameroon</h3>
<p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Exploring the legal and ethical framework for protecting local data while fostering open-source innovation.</p>
<button className="mt-6 flex items-center gap-2 text-on-tertiary-container font-bold group-hover:gap-4 transition-all">
<span>Listen to Episode</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/* Episode Card 2 */}
<div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px]">
<div className="aspect-video relative overflow-hidden">
<img alt="Tech Startup Culture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Bright modern office space in Buea tech hub" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRb1EF1NvIEG5nvnruwPZhNHXARNBWOrCdNN5P1mbD13PKNdPQ70XCHIyu285HBNUHNv7nBDBIq3VWBvgF0kGBjmWGVlMeOCzeuEWbyIjv8nbtKWX7ScenCnkBvJFqkGQvUDiHmgpYQdS7D3f9nwosUbjS1cmSVmpjW6tzAa5aPW8Y4eBarwYB8k1ed14wE9_R_lJTatuwNdN3Mw6MDySkzv6emZpJaHmTkGdiYJmSkZe8Zk_z5TctZPjsStlipLzRSO3S2yARO-Cj"/>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded font-label text-[10px] font-bold uppercase tracking-widest">Tech Culture</div>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4">
<span className="font-label text-xs text-on-surface-variant">April 28, 2024</span>
<span className="font-label text-xs text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 55 min</span>
</div>
<h3 className="text-2xl font-headline font-bold text-primary group-hover:text-secondary transition-colors mb-4">Beyond Buea: Scaling Silicon Mountain Startups</h3>
<p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Lessons from three founders who successfully expanded their Buea-based tech firms to international markets.</p>
<button className="mt-6 flex items-center gap-2 text-on-tertiary-container font-bold group-hover:gap-4 transition-all">
<span>Listen to Episode</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/* Episode Card 3 */}
<div className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px]">
<div className="aspect-video relative overflow-hidden">
<img alt="Artificial Intelligence" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Abstract visualization of AI using binary code" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ugs5eRK1THw6Sl3GagIVpXJc6FgoZuAwdNsbyCZ8D12WbHY7q1DPqmvIdefW410PsU7IVqiLCQiYBzPQga4zmzkjHa7oOcR_GQlIl1M6hGf0jJp1cXEhpBMzakunu_YVHG8DqkD7Nx428g87VOnwn_YkbX1a5G0DsLNfj6pEIvbyERg6c2hZ3YITzZXtvTTUskt8U9xcmxwNcexps7e_hpJFZYier64IG8mI1s1TzKjHHuKYWU8W54qJDF3B4rluCeYdTFVHXWls"/>
<div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute top-4 left-4 bg-tertiary text-white px-3 py-1 rounded font-label text-[10px] font-bold uppercase tracking-widest">AI Ethics</div>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4">
<span className="font-label text-xs text-on-surface-variant">April 12, 2024</span>
<span className="font-label text-xs text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 38 min</span>
</div>
<h3 className="text-2xl font-headline font-bold text-primary group-hover:text-secondary transition-colors mb-4">Bias in the Machine: Decolonizing AI Datasets</h3>
<p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Why cultural context matters in model training and how African researchers are correcting historical biases.</p>
<button className="mt-6 flex items-center gap-2 text-on-tertiary-container font-bold group-hover:gap-4 transition-all">
<span>Listen to Episode</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="mt-20 text-center">
<button className="px-12 py-5 border border-primary-container text-primary-container font-headline font-bold rounded-lg hover:bg-primary-container hover:text-white transition-all">
                        Load More Episodes
                    </button>
</div>
</div>
</section></FadeIn>
{/* Newsletter Signup Section */}
<FadeIn><section className="max-w-[1440px] mx-auto px-12 pb-24">
<div className="bg-primary-container rounded-3xl overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<img alt="Pattern" className="w-full h-full object-cover" data-alt="Intricate geometric digital pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALuWnggBXSFdEw_Tv1vFjlyw8sea3JoxC1S850f5e0f5A6BrFYsmu_GkPfT93YCHP5ACFbxNFafmIhHoIi7FPxO8J7rVRZsAt_gmt9s0DDeWFwZna6HZy-03dMWCrC2ArzojIzfd3xF1MTrBM-z5TymOCk3iPuv3kPXSVZ922sGiaCkuAOk8VMy_eBOXl_1nf3Ov4KkxRQxH9tLnha1NvIzG4D0cHW0zbwVAw24efqn9C6Z6NaXpXefUyMS4EOiCx03ryIv-LU4GUi"/>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-16 md:p-24 items-center">
<div className="space-y-8 z-10">
<h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white leading-tight">
                            Silicon Mountain Pulse
                        </h2>
<p className="text-primary-fixed/70 text-lg md:text-xl leading-relaxed">
                            Join over 5,000 tech professionals receiving weekly insights, exclusive podcast outtakes, and data-driven trends from Buea&apos;s thriving tech hub.
                        </p>
<div className="flex flex-col md:flex-row gap-4">
<input className="flex-grow bg-white/5 border border-white/20 rounded px-6 py-4 text-white focus:ring-secondary focus:border-secondary" placeholder="Enter your business email" type="email"/>
<button className="bg-on-tertiary-container text-white px-10 py-4 rounded font-headline font-bold hover:bg-tertiary-fixed hover:text-on-tertiary-fixed transition-all">
                                Subscribe Now
                            </button>
</div>
<p className="text-white/40 text-xs font-label uppercase tracking-widest">
                            No spam. Unsubscribe anytime.
                        </p>
</div>
<div className="hidden lg:flex justify-end">
<div className="bg-white/5 border border-white/10 p-12 rounded-2xl backdrop-blur-sm max-w-sm">
<div className="space-y-6">
<div className="flex items-center gap-4 text-white">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span className="font-bold">Weekly Tech Digests</span>
</div>
<div className="flex items-center gap-4 text-white">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span className="font-bold">Exclusive Data Reports</span>
</div>
<div className="flex items-center gap-4 text-white">
<span className="material-symbols-outlined text-on-tertiary-container">check_circle</span>
<span className="font-bold">Event Invitations</span>
</div>
<div className="pt-6">
<p className="text-white/60 italic">"The definitive guide to innovation in Silicon Mountain."</p>
<p className="text-on-tertiary-container font-bold mt-2">— TechAfrica Quarterly</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section></FadeIn>

    </main>
  );
}
