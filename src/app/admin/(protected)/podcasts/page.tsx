'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Podcast } from '@/types/database';
import toast from 'react-hot-toast';

export default function PodcastsManagementPage() {
  const [items, setItems] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft' | 'archived'>('all');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/admin/podcasts');
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        toast.error('Failed to fetch podcasts');
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
      toast.error('Failed to fetch podcasts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this podcast? This action cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/admin/podcasts/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
        toast.success('Podcast deleted');
      } else {
        toast.error('Failed to delete podcast');
      }
    } catch (error) {
      console.error('Error deleting podcast:', error);
      toast.error('Failed to delete podcast');
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'draft' | 'published' | 'archived') => {
    try {
      const response = await fetch(`/api/admin/podcasts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        setItems(items.map(item => 
          item.id === id ? { ...item, status: newStatus } : item
        ));
        toast.success(`Podcast ${newStatus === 'published' ? 'published' : 'unpublished'}`);
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const handleFeaturedChange = async (id: string, featured: boolean) => {
    try {
      const response = await fetch(`/api/admin/podcasts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured }),
      });
      
      if (response.ok) {
        setItems(items.map(item => 
          item.id === id ? { ...item, featured } : item
        ));
        toast.success(featured ? 'Podcast featured' : 'Podcast unfeatured');
      } else {
        toast.error('Failed to update');
      }
    } catch (error) {
      console.error('Error updating:', error);
      toast.error('Failed to update');
    }
  };

  const filteredItems = items.filter(item => {
    const matchesFilter = filter === 'all' || item.status === filter;
    const matchesSearch = 
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.guest_name && item.guest_name.toLowerCase().includes(search.toLowerCase())) ||
      (item.category && item.category.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#cf7000] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#002147]">Podcasts</h1>
          <p className="text-gray-500">Manage your podcast episodes</p>
        </div>
        <Link
          href="/admin/podcasts/new"
          className="px-4 py-2 bg-[#cf7000] text-white rounded-lg font-medium hover:bg-[#b86300] transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Add Episode
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-[#002147] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All ({items.length})
            </button>
            <button
              onClick={() => setFilter('published')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'published' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Published ({items.filter(i => i.status === 'published').length})
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'draft' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Drafts ({items.filter(i => i.status === 'draft').length})
            </button>
          </div>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input
              type="text"
              placeholder="Search podcasts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none w-full md:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Episode</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <span className="material-symbols-outlined text-gray-300 text-4xl">podcasts</span>
                    <p className="text-gray-500 mt-2">No podcasts found</p>
                    <Link
                      href="/admin/podcasts/new"
                      className="text-[#cf7000] hover:underline text-sm mt-1 inline-block"
                    >
                      Add your first episode
                    </Link>
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-10 bg-[#002147] rounded-lg flex items-center justify-center overflow-hidden">
                          {item.cover_image ? (
                            <img src={item.cover_image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="material-symbols-outlined text-white text-lg">podcasts</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">
                            S{item.season_number || '?'}:E{item.episode_number || '?'} - {item.title}
                          </p>
                          <p className="text-sm text-gray-500 line-clamp-1">{item.description || ''}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">
                        {item.guest_name || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-500">
                        {item.duration || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleFeaturedChange(item.id, !item.featured)}
                        className={`p-2 rounded-lg transition-all ${
                          item.featured ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-400 hover:bg-yellow-50'
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">star</span>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        item.status === 'published' ? 'bg-green-100 text-green-700' :
                        item.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/admin/podcasts/${item.id}`}
                          className="p-2 text-gray-400 hover:text-[#cf7000] hover:bg-[#cf7000]/10 rounded-lg transition-all"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </Link>
                        {item.status === 'draft' && (
                          <button
                            onClick={() => handleStatusChange(item.id, 'published')}
                            className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            title="Publish"
                          >
                            <span className="material-symbols-outlined text-lg">publish</span>
                          </button>
                        )}
                        {item.status === 'published' && (
                          <button
                            onClick={() => handleStatusChange(item.id, 'draft')}
                            className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all"
                            title="Unpublish"
                          >
                            <span className="material-symbols-outlined text-lg">unpublished</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
