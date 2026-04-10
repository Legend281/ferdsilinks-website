'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Service } from '@/types/database';
import toast from 'react-hot-toast';

export default function ServicesManagementPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/admin/services');
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      } else {
        toast.error('Failed to fetch services');
      }
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service? This action cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setServices(services.filter(s => s.id !== id));
        toast.success('Service deleted');
      } else {
        toast.error('Failed to delete service');
      }
    } catch (error) {
      console.error('Error deleting service:', error);
      toast.error('Failed to delete service');
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'active' | 'inactive') => {
    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        setServices(services.map(s => 
          s.id === id ? { ...s, status: newStatus } : s
        ));
        toast.success(`Service ${newStatus === 'active' ? 'activated' : 'deactivated'}`);
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const filteredServices = services.filter(service => {
    const matchesFilter = filter === 'all' || service.status === filter;
    const matchesSearch = 
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      (service.category && service.category.toLowerCase().includes(search.toLowerCase()));
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
          <h1 className="text-2xl font-headline font-bold text-[#002147]">Services</h1>
          <p className="text-gray-500">Manage your service offerings</p>
        </div>
        <Link
          href="/admin/services/new"
          className="px-4 py-2 bg-[#cf7000] text-white rounded-lg font-medium hover:bg-[#b86300] transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Add Service
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
              All ({services.length})
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'active' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Active ({services.filter(s => s.status === 'active').length})
            </button>
            <button
              onClick={() => setFilter('inactive')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'inactive' ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Inactive ({services.filter(s => s.status === 'inactive').length})
            </button>
          </div>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input
              type="text"
              placeholder="Search services..."
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
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredServices.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <span className="material-symbols-outlined text-gray-300 text-4xl">miscellaneous_services</span>
                    <p className="text-gray-500 mt-2">No services found</p>
                    <Link
                      href="/admin/services/new"
                      className="text-[#cf7000] hover:underline text-sm mt-1 inline-block"
                    >
                      Add your first service
                    </Link>
                  </td>
                </tr>
              ) : (
                filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#002147] rounded-lg flex items-center justify-center overflow-hidden">
                          {service.icon ? (
                            <span className="material-symbols-outlined text-white text-xl">{service.icon}</span>
                          ) : service.cover_image ? (
                            <img src={service.cover_image} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="material-symbols-outlined text-white">miscellaneous_services</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 line-clamp-1">{service.title}</p>
                          <p className="text-sm text-gray-500 line-clamp-1">{service.short_description || service.description?.slice(0, 50)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        {service.category || 'General'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        service.highlight ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {service.highlight ? 'Featured' : 'Normal'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        service.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/admin/services/${service.id}`}
                          className="p-2 text-gray-400 hover:text-[#cf7000] hover:bg-[#cf7000]/10 rounded-lg transition-all"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </Link>
                        {service.status === 'active' ? (
                          <button
                            onClick={() => handleStatusChange(service.id, 'inactive')}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                            title="Deactivate"
                          >
                            <span className="material-symbols-outlined text-lg">visibility_off</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStatusChange(service.id, 'active')}
                            className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            title="Activate"
                          >
                            <span className="material-symbols-outlined text-lg">visibility</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(service.id)}
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
