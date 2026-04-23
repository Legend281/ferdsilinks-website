'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import ImageUpload from '@/components/admin/ImageUpload';

function getYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^?&]+)/);
  return match ? match[1] : '';
}

function getYouTubeThumbnail(videoId: string, quality: 'hqdefault' | 'mqdefault' | 'sddefault' = 'hqdefault'): string {
  if (!videoId) return '';
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

function getYouTubeThumbnailWithFallback(videoId: string, setter: (url: string) => void): string {
  if (!videoId) return '';
  // First try maxresdefault
  const maxres = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
  // Test if it loads, if not use hqdefault
  const img = new Image();
  img.onload = () => setter(maxres);
  img.onerror = () => setter(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
  img.src = maxres;
  
  return maxres;
}

export default function NewPodcastPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetchingThumb, setFetchingThumb] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    youtube_url: '',
    video_id: '',
    episode_number: '',
    season_number: '1',
    duration: '',
    cover_image: '',
    guest_name: '',
    guest_role: '',
    guest_bio: '',
    guest_image: '',
    published_date: '',
    category: '',
    featured: false,
    status: 'draft',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleYouTubeUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const youtubeUrl = e.target.value;
    setFormData(prev => ({ ...prev, youtube_url: youtubeUrl }));
    
    const videoId = getYouTubeId(youtubeUrl);
    
    if (videoId) {
      // hqdefault always exists for all videos - no 404 errors
      const thumbnail = getYouTubeThumbnail(videoId, 'hqdefault');
      setFormData(prev => ({ 
        ...prev, 
        youtube_url: youtubeUrl,
        video_id: videoId,
        cover_image: thumbnail 
      }));
      toast.success('Video found: ' + videoId);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = generateSlug(title);
    setFormData(prev => ({ ...prev, title, slug }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.slug) {
      toast.error('Please fill in title');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/admin/podcasts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          episode_number: formData.episode_number ? parseInt(formData.episode_number) : null,
          season_number: formData.season_number ? parseInt(formData.season_number) : null,
          published_date: formData.published_date || null,
        }),
      });

      if (response.ok) {
        toast.success('Podcast created successfully');
        router.push('/admin/podcasts');
      } else {
        const error = await response.json();
        toast.error(error.error || 'Failed to create podcast');
      }
    } catch (error) {
      console.error('Error creating podcast:', error);
      toast.error('Failed to create podcast');
    } finally {
      setLoading(false);
    }
  };

  const categoryOptions = [
    'Technology',
    'Data Science',
    'AI & Machine Learning',
    'Tech Culture',
    'Entrepreneurship',
    'Career',
    'Interview',
    'Other'
  ];

  const videoId = formData.video_id || getYouTubeId(formData.youtube_url);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Add Podcast Episode</h1>
          <p className="text-slate-500">Create a new podcast episode</p>
        </div>
        <Link
          href="/admin/podcasts"
          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Podcasts
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* YouTube URL - Most Important */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <label className="block text-sm font-medium text-red-700 mb-2">
                  <span className="material-symbols-outlined text-lg align-middle mr-1">smart_display</span>
                  YouTube Video URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    name="youtube_url"
                    value={formData.youtube_url}
                    onChange={handleYouTubeUrlChange}
                    className="flex-grow px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                    placeholder="https://www.youtube.com/watch?v=RykXjgJPldw"
                  />
                </div>
                <p className="text-xs text-red-600 mt-1">
                  Paste a YouTube URL - we'll auto-fetch the thumbnail!
                </p>
                
                {videoId && (
                  <div className="mt-3 flex items-center gap-4">
                    <img 
                      src={getYouTubeThumbnail(videoId, 'hqdefault')} 
                      alt="Preview" 
                      className="w-32 h-18 object-cover rounded border"
                    />
                    <div className="text-sm text-green-600">
                      <span className="material-symbols-outlined text-sm align-middle">check_circle</span>
                      Video ID: {videoId}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Season Number
                  </label>
                  <input
                    type="number"
                    name="season_number"
                    value={formData.season_number}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Episode Number
                  </label>
                  <input
                    type="number"
                    name="episode_number"
                    value={formData.episode_number}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    placeholder="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    placeholder="45 min"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Episode Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleTitleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    placeholder="Building AI-Powered Applications"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    URL Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    placeholder="building-ai-powered-applications"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none resize-none"
                  placeholder="Episode description..."
                />
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-medium text-slate-900 mb-4">Guest Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Guest Name
                    </label>
                    <input
                      type="text"
                      name="guest_name"
                      value={formData.guest_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Guest Role/Title
                    </label>
                    <input
                      type="text"
                      name="guest_role"
                      value={formData.guest_role}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                      placeholder="CEO at TechCorp"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Cover Image - Auto from YouTube */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Cover Image {formData.cover_image && <span className="text-green-600">(Auto-fetched from YouTube!)</span>}
                </label>
                {formData.cover_image ? (
                  <div className="relative">
                    <img 
                      src={formData.cover_image} 
                      alt="Cover" 
                      className="w-full aspect-video object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, cover_image: '' }))}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                    <span className="material-symbols-outlined text-4xl text-slate-300">image</span>
                    <p className="text-sm text-slate-500 mt-2">Add YouTube URL above to auto-fetch</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                >
                  <option value="">Select category</option>
                  {categoryOptions.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Published Date
                </label>
                <input
                  type="date"
                  name="published_date"
                  value={formData.published_date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="featured"
                  id="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-slate-300 text-[#ef0d11] focus:ring-[#ef0d11]"
                />
                <label htmlFor="featured" className="text-sm font-medium text-slate-700">
                  Featured Episode
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <Link
            href="/admin/podcasts"
            className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[#ef0d11] text-white rounded-lg font-medium hover:bg-[#b90000] transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Creating...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">save</span>
                Create Episode
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}