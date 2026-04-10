'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import ImageUpload from '@/components/admin/ImageUpload';
import { Service } from '@/types/database';

export default function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [service, setService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    short_description: '',
    description: '',
    icon: '',
    category: '',
    features: '',
    benefits: '',
    cover_image: '',
    order_index: 0,
    highlight: false,
    status: 'active',
  });

  useEffect(() => {
    const loadService = async () => {
      const { id } = await params;
      try {
        const response = await fetch(`/api/admin/services/${id}`);
        if (response.ok) {
          const data = await response.json();
          setService(data);
          setFormData({
            title: data.title || '',
            slug: data.slug || '',
            short_description: data.short_description || '',
            description: data.description || '',
            icon: data.icon || '',
            category: data.category || '',
            features: Array.isArray(data.features) ? data.features.join('\n') : '',
            benefits: Array.isArray(data.benefits) ? data.benefits.join('\n') : '',
            cover_image: data.cover_image || '',
            order_index: data.order_index || 0,
            highlight: data.highlight || false,
            status: data.status || 'active',
          });
        } else {
          toast.error('Service not found');
          router.push('/admin/services');
        }
      } catch (error) {
        console.error('Error loading service:', error);
        toast.error('Failed to load service');
      } finally {
        setFetching(false);
      }
    };

    loadService();
  }, [params, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (name === 'order_index') {
      setFormData(prev => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.slug) {
      toast.error('Please fill in title');
      return;
    }

    setLoading(true);

    try {
      const { id } = await params;
      const featuresArray = formData.features
        ? formData.features.split('\n').map(f => f.trim()).filter(Boolean)
        : [];
      const benefitsArray = formData.benefits
        ? formData.benefits.split('\n').map(b => b.trim()).filter(Boolean)
        : [];

      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          features: featuresArray,
          benefits: benefitsArray,
        }),
      });

      if (response.ok) {
        toast.success('Service updated successfully');
        router.push('/admin/services');
      } else {
        const error = await response.json();
        toast.error(error.error || 'Failed to update service');
      }
    } catch (error) {
      console.error('Error updating service:', error);
      toast.error('Failed to update service');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#cf7000] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!service) {
    return null;
  }

  const iconOptions = [
    'neurology', 'code', 'cloud', 'school', 'analytics', 
    'psychology', 'auto_awesome', 'insights', 'account_balance',
    'inventory', 'shopping_cart', 'payments', 'work', 'groups'
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#002147]">Edit Service</h1>
          <p className="text-gray-500">Update service details</p>
        </div>
        <Link
          href="/admin/services"
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to Services
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                    placeholder="Data Science & AI"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                    placeholder="data-science-ai"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Short Description
                </label>
                <input
                  type="text"
                  name="short_description"
                  value={formData.short_description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                  placeholder="Brief summary for service cards"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none resize-none"
                  placeholder="Detailed service description..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Features
                  </label>
                  <textarea
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none resize-none"
                    placeholder="Enter each feature on a new line..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Benefits
                  </label>
                  <textarea
                    name="benefits"
                    value={formData.benefits}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none resize-none"
                    placeholder="Enter each benefit on a new line..."
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Image
                </label>
                <ImageUpload
                  bucket="blog-covers"
                  value={formData.cover_image}
                  onChange={(url) => setFormData(prev => ({ ...prev, cover_image: url }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                >
                  <option value="">Select category</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Software">Software Development</option>
                  <option value="Cloud">Cloud & IT</option>
                  <option value="Training">Training</option>
                  <option value="ERP">ERP Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Icon
                </label>
                <select
                  name="icon"
                  value={formData.icon}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                >
                  <option value="">Select icon</option>
                  {iconOptions.map(icon => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Display Order
                </label>
                <input
                  type="number"
                  name="order_index"
                  value={formData.order_index}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="highlight"
                  id="highlight"
                  checked={formData.highlight}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-gray-300 text-[#cf7000] focus:ring-[#cf7000]"
                />
                <label htmlFor="highlight" className="text-sm font-medium text-gray-700">
                  Featured Service
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-500">
                  Created: {new Date(service.created_at).toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-500">
                  Last updated: {new Date(service.updated_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-3">
          <Link
            href="/admin/services"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[#cf7000] text-white rounded-lg font-medium hover:bg-[#b86300] transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Saving...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-lg">save</span>
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
