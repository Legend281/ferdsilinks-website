'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { JobListing } from '@/types/database';
import toast from 'react-hot-toast';
import { Pagination } from '@/components/admin/Pagination';

const ITEMS_PER_PAGE = 10;

export default function JobsManagementPage() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft' | 'closed'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/admin/jobs');
      if (response.ok) {
        const data = await response.json();
        setJobs(data);
      } else {
        toast.error('Failed to fetch jobs');
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast.error('Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job listing? This action cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/admin/jobs/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setJobs(jobs.filter(job => job.id !== id));
        toast.success('Job listing deleted');
      } else {
        toast.error('Failed to delete job listing');
      }
    } catch (error) {
      console.error('Error deleting job:', error);
      toast.error('Failed to delete job listing');
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'published' | 'draft' | 'closed') => {
    try {
      const response = await fetch(`/api/admin/jobs/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        setJobs(jobs.map(job => 
          job.id === id ? { ...job, status: newStatus } : job
        ));
        toast.success(`Job ${newStatus === 'published' ? 'published' : newStatus === 'draft' ? 'unpublished' : 'closed'}`);
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesFilter = filter === 'all' || job.status === filter;
      const matchesSearch = 
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.department.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [jobs, filter, search]);

  const paginatedJobs = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (newFilter: typeof filter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-700';
      case 'draft': return 'bg-yellow-100 text-yellow-700';
      case 'closed': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      'full-time': 'bg-blue-100 text-blue-700',
      'part-time': 'bg-purple-100 text-purple-700',
      'contract': 'bg-orange-100 text-orange-700',
      'internship': 'bg-pink-100 text-pink-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

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
          <h1 className="text-2xl font-headline font-bold text-[#002147]">Job Listings</h1>
          <p className="text-gray-500">Manage career opportunities</p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="px-4 py-2 bg-[#cf7000] text-white rounded-lg font-medium hover:bg-[#b86300] transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Add Job
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'all' ? 'bg-[#002147] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All ({jobs.length})
            </button>
            <button
              onClick={() => handleFilterChange('published')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'published' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Published ({jobs.filter(j => j.status === 'published').length})
            </button>
            <button
              onClick={() => handleFilterChange('draft')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'draft' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Drafts ({jobs.filter(j => j.status === 'draft').length})
            </button>
            <button
              onClick={() => handleFilterChange('closed')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'closed' ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Closed ({jobs.filter(j => j.status === 'closed').length})
            </button>
          </div>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#cf7000]/20 focus:border-[#cf7000] outline-none w-full md:w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedJobs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <span className="material-symbols-outlined text-gray-300 text-4xl">work_off</span>
                    <p className="text-gray-500 mt-2">No job listings found</p>
                    <Link
                      href="/admin/jobs/new"
                      className="text-[#cf7000] hover:underline text-sm mt-1 inline-block"
                    >
                      Create your first job listing
                    </Link>
                  </td>
                </tr>
              ) : (
                paginatedJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-gray-900">{job.title}</p>
                        <p className="text-sm text-gray-500 line-clamp-1">{job.description}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        {job.department}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="material-symbols-outlined text-sm">{job.remote ? 'home_work' : 'location_on'}</span>
                        {job.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${getTypeBadge(job.type)}`}>
                        {job.type.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${getStatusColor(job.status)}`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/admin/jobs/${job.id}`}
                          className="p-2 text-gray-400 hover:text-[#cf7000] hover:bg-[#cf7000]/10 rounded-lg transition-all"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </Link>
                        {job.status === 'draft' && (
                          <button
                            onClick={() => handleStatusChange(job.id, 'published')}
                            className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            title="Publish"
                          >
                            <span className="material-symbols-outlined text-lg">publish</span>
                          </button>
                        )}
                        {job.status === 'published' && (
                          <button
                            onClick={() => handleStatusChange(job.id, 'draft')}
                            className="p-2 text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-lg transition-all"
                            title="Unpublish"
                          >
                            <span className="material-symbols-outlined text-lg">unpublished</span>
                          </button>
                        )}
                        {job.status !== 'closed' && (
                          <button
                            onClick={() => handleStatusChange(job.id, 'closed')}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                            title="Close"
                          >
                            <span className="material-symbols-outlined text-lg">lock</span>
                          </button>
                        )}
                        <Link
                          href={`/careers#${job.id}`}
                          target="_blank"
                          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="View"
                        >
                          <span className="material-symbols-outlined text-lg">visibility</span>
                        </Link>
                        <button
                          onClick={() => handleDelete(job.id)}
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

        <Pagination
          currentPage={currentPage}
          totalItems={filteredJobs.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
