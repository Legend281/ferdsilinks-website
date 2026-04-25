'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Portfolio } from '@/types/database';
import toast from 'react-hot-toast';

export default function PortfolioManagementPage() {
  const [items, setItems] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/api/admin/portfolio');
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        toast.error('Failed to fetch portfolio items');
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      toast.error('Failed to fetch portfolio items');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this portfolio item? This action cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setItems(items.filter(item => item.id !== id));
        toast.success('Portfolio item deleted');
      } else {
        toast.error('Failed to delete portfolio item');
      }
    } catch (error) {
      console.error('Error deleting portfolio item:', error);
      toast.error('Failed to delete portfolio item');
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'active' | 'inactive') => {
    try {
      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        setItems(items.map(item => 
          item.id === id ? { ...item, status: newStatus } : item
        ));
        toast.success(`Portfolio item ${newStatus === 'active' ? 'activated' : 'deactivated'}`);
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const filteredItems = items.filter(item => {
    const matchesFilter = filter === 'all' || item.status === filter;
    const matchesSearch = 
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      (item.client_name && item.client_name.toLowerCase().includes(search.toLowerCase())) ||
      (item.category && item.category.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#ef0d11] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Portfolio</h1>
          <p className="text-slate-500">Manage your portfolio projects</p>
        </div>
        <Link
          href="/admin/portfolio/new"
          className="px-4 py-2 bg-[#ef0d11] text-white rounded-lg font-medium hover:bg-[#b90000] transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Add Project
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100">
        <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-[#0302cb] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All ({items.length})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'active' ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Active ({items.filter(i => i.status === 'active').length})
            </button>
            <button
              onClick={() => setFilter('inactive')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'inactive' ? 'bg-slate-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Inactive ({items.filter(i => i.status === 'inactive').length})
            </button>
          </div>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              type="text"
              placeholder="Search portfolio..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none w-full md:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Project</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Featured</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <span className="material-symbols-outlined text-slate-300 text-4xl">folder_open</span>
                    <p className="text-slate-500 mt-2">No portfolio items found</p>
                    <Link
                      href="/admin/portfolio/new"
                      className="text-[#ef0d11] hover:underline text-sm mt-1 inline-block"
                    >
                      Add your first project
                    </Link>
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-24 h-16 bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                          {item.cover_image ? (
                            <img src={item.cover_image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="material-symbols-outlined text-slate-400 text-2xl">image</span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-slate-900 line-clamp-1">{item.title}</p>
                          <p className="text-sm text-slate-500 line-clamp-1">{item.short_description || ''}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {item.client_name || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded">
                        {item.category || 'General'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        item.featured ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {item.featured ? 'Featured' : 'Normal'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        item.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/admin/portfolio/${item.id}`}
                          className="p-2 text-slate-400 hover:text-[#ef0d11] hover:bg-[#ef0d11]/10 rounded-lg transition-all"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </Link>
                        {item.status === 'active' ? (
                          <button
                            onClick={() => handleStatusChange(item.id, 'inactive')}
                            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
                            title="Deactivate"
                          >
                            <span className="material-symbols-outlined text-lg">visibility_off</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStatusChange(item.id, 'active')}
                            className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            title="Activate"
                          >
                            <span className="material-symbols-outlined text-lg">visibility</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
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
    </div>
  );
}
