"use client";

import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';
import { Podcast } from '@/types/database';

function getYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^?&]+)/);
  return match ? match[1] : url;
}

export default function PodcastContent() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEpisode, setSelectedEpisode] = useState<Podcast | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetchPodcasts();
  }, []);

  // Close modal on ESC key and disable body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedEpisode(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    if (selectedEpisode) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedEpisode]);

  const fetchPodcasts = async () => {
    try {
      const res = await fetch('/api/public/podcasts');
      const data = await res.json();
      setPodcasts(data || []);
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    } finally {
      setLoading(false);
    }
  };

  const featured = podcasts.find(p => p.featured) || podcasts[0];
  const filteredPodcast = filter === 'all' 
    ? podcasts 
    : podcasts.filter(p => p.category === filter);
  
  const categories = ['all', ...new Set(podcasts.map(p => p.category || 'General').filter(Boolean))];

  // Handle playing an episode
  const selectedVideoId = selectedEpisode?.youtube_url ? getYouTubeId(selectedEpisode.youtube_url) : selectedEpisode?.video_id || '';

  if (loading) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  if (podcasts.length === 0) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-6xl text-slate-300">podcasts</span>
          <h2 className="text-2xl font-bold mt-4">No Podcasts Yet</h2>
          <p className="text-slate-500 mt-2">Check back soon for new episodes!</p>
        </div>
      </main>
    );
  }

  const videoId = featured?.youtube_url ? getYouTubeId(featured.youtube_url) : featured?.video_id || '';

  return (
    <main className="pt-24 space-y-4">
      {/* Video Modal Player */}
      {isClient && selectedEpisode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedEpisode(null)}>
          <div 
            className="relative w-full max-w-3xl bg-surface rounded-2xl overflow-hidden shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEpisode(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-2 text-sm transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
              <span>ESC</span>
            </button>
            
            {/* Video */}
            <div className="aspect-video bg-black">
              {selectedVideoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                  title={selectedEpisode.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <a
                    href={selectedEpisode.youtube_url || `https://www.youtube.com/watch?v=${selectedEpisode.video_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined">play_circle</span>
                    Watch on YouTube
                  </a>
                </div>
              )}
            </div>
            
            {/* Info */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 bg-on-tertiary-container text-white text-xs font-bold rounded">
                  S{selectedEpisode.season_number || 1}:E{selectedEpisode.episode_number || 1}
                </span>
                <span className="text-on-surface-variant text-sm">
                  {selectedEpisode.duration || '45 min'}
                </span>
              </div>
              <h3 className="text-xl font-headline font-bold text-primary">
                {selectedEpisode.title}
              </h3>
              {selectedEpisode.description && (
                <p className="text-on-surface-variant text-sm mt-2 line-clamp-2">
                  {selectedEpisode.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with YouTube Embed */}
      <FadeIn>
        <section className="relative bg-primary overflow-hidden min-h-[85vh] flex items-center">
          <div className="absolute inset-0 opacity-30">
            {featured?.cover_image ? (
              <img src={featured.cover_image} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-secondary"></div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
          
          <div className="relative max-w-[1440px] mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-on-tertiary-container/80 backdrop-blur-sm rounded-full w-fit">
                  <span className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse"></span>
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-white">New Episode</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                  <span className="font-label text-xs font-bold text-white/80">
                    Season {featured?.season_number || 1}, Ep {featured?.episode_number || 1}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-white leading-[1] tracking-tight">
                  {featured?.title || 'Silicon Mountain Pioneers'}
                </h1>
                
                <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed line-clamp-3">
                  {featured?.description || 'Join us for weekly insights from Africa\'s most innovative tech minds.'}
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="https://www.youtube.com/@Ferdsilinks" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-3 transition-colors backdrop-blur-md border border-white/10"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.013 3.013 0 0 0-2.182-2.186C19.867 3.125 12 3.125 12 3.125s-7.867 0-9.316.875A3.013 3.013 0 0 0 .502 6.186C0 8.06 0 12 0 12s0 3.94.502 5.814a3.013 3.013 0 0 0 2.182 2.186c1.449.875 8.316.875 8.316.875s7.867 0 9.316-.875a3.013 3.013 0 0 0 2.182-2.186C24 15.94 24 12 24 12s0-3.94-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="font-bold">Subscribe on YouTube</span>
                  </a>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-4 bg-on-tertiary-container/20 rounded-full blur-3xl"></div>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black">
                    {videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                        title={featured?.title || 'Podcast'}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-800">
                        <div className="text-center text-white">
                          <span className="material-symbols-outlined text-6xl">play_circle</span>
                          <p className="mt-2">Watch on YouTube</p>
                        </div>
                      </div>
                    )}
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

      {/* Episode Library */}
      <FadeIn>
        <section className="py-24 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-headline font-bold text-primary-container mb-4">Episode Archive</h2>
                <p className="text-on-surface-variant text-lg">Dive deep into the insights from Africa&apos;s most innovative tech minds.</p>
              </div>
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded font-label text-sm uppercase tracking-wider transition-colors ${
                    filter === cat 
                      ? 'bg-primary text-white' 
                      : 'bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant'
                  }`}
                >
                  {cat === 'all' ? 'All Episodes' : cat}
                </button>
              ))}
            </div>
            
            {/* Bento Grid of Episodes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPodcast.slice(0, 9).map((episode) => {
                const epVideoId = episode.youtube_url ? getYouTubeId(episode.youtube_url) : episode.video_id || '';
                return (
                  <div 
                    key={episode.id} 
                    className="group bg-surface-container-lowest rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px]"
                    onClick={() => setSelectedEpisode(episode)}
                  >
                    <div className="aspect-video relative overflow-hidden bg-black cursor-pointer">
                      {epVideoId ? (
                        <img 
                          src={`https://img.youtube.com/vi/${epVideoId}/hqdefault.jpg`}
                          alt={episode.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                          <span className="material-symbols-outlined text-4xl text-white">play_circle</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                      <div className="absolute top-4 left-4 bg-on-tertiary-container text-white px-3 py-1 rounded font-label text-[10px] font-bold uppercase tracking-widest">
                        {episode.category || 'Tech'}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="material-symbols-outlined text-4xl text-primary">play_arrow</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-label text-xs text-on-surface-variant">
                          S{episode.season_number || '?'}:E{episode.episode_number || '?'}
                        </span>
                        <span className="font-label text-xs text-on-surface-variant flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span> 
                          {episode.duration || '45 min'}
                        </span>
                      </div>
                      <h3 className="text-xl font-headline font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                        {episode.title}
                      </h3>
                      {episode.guest_name && (
                        <p className="text-sm text-on-surface-variant mb-2">with {episode.guest_name}</p>
                      )}
                      <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">
                        {episode.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {filteredPodcast.length > 9 && (
              <div className="mt-20 text-center">
                <button className="px-12 py-5 border border-primary-container text-primary-container font-headline font-bold rounded-lg hover:bg-primary-container hover:text-white transition-all">
                  Load More Episodes
                </button>
              </div>
            )}
          </div>
        </section>
      </FadeIn>

      {/* Newsletter Signup Section */}
      <FadeIn>
        <section className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="bg-primary-container rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img alt="Pattern" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALuWnggBXSFdEw_Tv1vFjlyw8sea3JoxC1S850f5e0f5A6BrFYsmu_GkPfT93YCHP5ACFbxNFafmIhHoIi7FPxO8J7rVRZsAt_gmt9s0DDeWFwZna6HZy-03dMWCrC2ArzojIzfd3xF1MTrBM-z5TymOCk3iPuv3kPXSVZ922sGiaCkuAOk8VMy_eBOXl_1nf3Ov4KkxRQxH9tLnha1NvIzG4D0cHW0zbwVAw24efqn9C6Z6NaXpXefUyMS4EOiCx03ryIv-LU4GUi"/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 p-16 md:p-24 items-center">
              <div className="space-y-8 z-10">
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white leading-tight">
                  Silicon Mountain Pulse
                </h2>
                <p className="text-primary-fixed/70 text-lg md:text-xl leading-relaxed">
                  Join over 5,000 tech professionals receiving weekly insights, exclusive podcast outtakes, and data-driven trends from Buea&apos;s thriving tech hub.
                </p>
                <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input className="flex-grow bg-white/5 border border-white/20 rounded px-6 py-4 text-white placeholder:text-white/40 focus:ring-secondary focus:border-secondary" placeholder="Enter your business email" type="email"/>
                  <button className="bg-on-tertiary-container text-white px-10 py-4 rounded font-headline font-bold hover:bg-tertiary-fixed hover:text-on-tertiary-fixed transition-all">
                    Subscribe Now
                  </button>
                </form>
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
        </section>
      </FadeIn>
    </main>
  );
}