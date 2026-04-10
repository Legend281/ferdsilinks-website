'use client';

import { useState } from 'react';
import { Subscriber } from '@/types/database';
import { exportToCSV } from '@/lib/utils/export';
import toast from 'react-hot-toast';

interface SubscribersTableProps {
  initialSubscribers: Subscriber[];
}

export default function SubscribersTable({ initialSubscribers }: SubscribersTableProps) {
  const [subscribers, setSubscribers] = useState(initialSubscribers);
  const [filter, setFilter] = useState<'all' | 'active' | 'unsubscribed'>('all');
  const [search, setSearch] = useState('');

  const filteredSubscribers = subscribers.filter((subscriber) => {
    const matchesFilter = filter === 'all' || subscriber.status === filter;
    const matchesSearch = subscriber.email.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleExport = () => {
    if (filteredSubscribers.length === 0) {
      toast.error('No subscribers to export');
      return;
    }
    const exportData = filteredSubscribers.map((subscriber) => ({
      email: subscriber.email,
      name: subscriber.name || '',
      source: subscriber.source || 'website',
      status: subscriber.status,
      subscribed_at: new Date(subscriber.created_at).toLocaleString(),
    }));

    exportToCSV(exportData, 'subscribers');
    toast.success(`Exported ${filteredSubscribers.length} subscribers to CSV`);
  };

  const handleUnsubscribe = async (id: string) => {
    if (!confirm('Are you sure you want to unsubscribe this user?')) return;
    
    try {
      const response = await fetch(`/api/admin/newsletter/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'unsubscribed' }),
      });
      
      if (response.ok) {
        setSubscribers(subscribers.map(sub => 
          sub.id === id ? { ...sub, status: 'unsubscribed' } : sub
        ));
        toast.success('Subscriber unsubscribed');
      } else {
        toast.error('Failed to unsubscribe');
      }
    } catch (error) {
      console.error('Error unsubscribing:', error);
      toast.error('Failed to unsubscribe');
    }
  };

  const handleResubscribe = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/newsletter/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'active' }),
      });
      
      if (response.ok) {
        setSubscribers(subscribers.map(sub => 
          sub.id === id ? { ...sub, status: 'active' } : sub
        ));
        toast.success('Subscriber reactivated');
      } else {
        toast.error('Failed to reactivate');
      }
    } catch (error) {
      console.error('Error reactivating:', error);
      toast.error('Failed to reactivate');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to permanently delete this subscriber? This cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/admin/newsletter/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setSubscribers(subscribers.filter(sub => sub.id !== id));
        toast.success('Subscriber deleted');
      } else {
        toast.error('Failed to delete subscriber');
      }
    } catch (error) {
      console.error('Error deleting:', error);
      toast.error('Failed to delete subscriber');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'all' ? 'bg-[#002147] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All ({subscribers.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'active' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Active ({subscribers.filter(s => s.status === 'active').length})
          </button>
          <button
            onClick={() => setFilter('unsubscribed')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'unsubscribed' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Unsubscribed ({subscribers.filter(s => s.status === 'unsubscribed').length})
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-[#002147] text-white rounded-lg font-medium hover:bg-[#001a3a] transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">download</span>
            Export CSV
          </button>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input
              type="text"
              placeholder="Search subscribers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none w-full md:w-64"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Subscribed</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredSubscribers.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center">
                  <span className="material-symbols-outlined text-gray-300 text-4xl">mail</span>
                  <p className="text-gray-500 mt-2">No subscribers found</p>
                </td>
              </tr>
            ) : (
              filteredSubscribers.map((subscriber) => (
                <tr key={subscriber.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{subscriber.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600">
                      {subscriber.name || '—'}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {subscriber.source || 'website'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-500">
                      {new Date(subscriber.created_at).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                      subscriber.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {subscriber.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {subscriber.status === 'active' ? (
                        <button
                          onClick={() => handleUnsubscribe(subscriber.id)}
                          className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all"
                          title="Unsubscribe"
                        >
                          <span className="material-symbols-outlined text-lg">person_off</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleResubscribe(subscriber.id)}
                          className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                          title="Resubscribe"
                        >
                          <span className="material-symbols-outlined text-lg">person</span>
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(subscriber.id)}
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
  );
}
