'use client';

import { useState, useMemo } from 'react';
import { JobApplication } from '@/types/database';
import { exportToCSV } from '@/lib/utils/export';
import toast from 'react-hot-toast';
import { Pagination } from '@/components/admin/Pagination';

interface ApplicationsTableProps {
  initialApplications: JobApplication[];
}

const ITEMS_PER_PAGE = 10;

export default function ApplicationsTable({ initialApplications }: ApplicationsTableProps) {
  const [applications, setApplications] = useState(initialApplications);
  const [filter, setFilter] = useState<'all' | 'pending' | 'reviewing' | 'interview'>('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesFilter = filter === 'all' || app.status === filter;
      const matchesSearch = 
        app.full_name.toLowerCase().includes(search.toLowerCase()) ||
        app.email.toLowerCase().includes(search.toLowerCase()) ||
        app.job_title.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [applications, filter, search]);

  const paginatedApplications = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredApplications.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredApplications, currentPage]);

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

  const handleExport = () => {
    if (filteredApplications.length === 0) {
      toast.error('No applications to export');
      return;
    }
    const exportData = filteredApplications.map((app) => ({
      name: app.full_name,
      email: app.email,
      phone: app.phone || '',
      position: app.job_title,
      linkedin: app.linkedin_url || '',
      portfolio: app.portfolio_url || '',
      cover_letter: app.cover_letter,
      status: app.status,
      applied_at: new Date(app.created_at).toLocaleString(),
    }));

    exportToCSV(exportData, 'applications');
    toast.success(`Exported ${filteredApplications.length} applications to CSV`);
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/applications/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      
      if (response.ok) {
        setApplications(applications.map(app => 
          app.id === id ? { ...app, status: status as JobApplication['status'] } : app
        ));
        toast.success('Application status updated');
      } else {
        toast.error('Failed to update application status');
      }
    } catch (error) {
      console.error('Failed to update application status:', error);
      toast.error('Failed to update application status');
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm('Are you sure you want to delete this application?')) return;
    
    try {
      const response = await fetch(`/api/admin/applications/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setApplications(applications.filter(app => app.id !== id));
        toast.success('Application deleted');
      } else {
        toast.error('Failed to delete application');
      }
    } catch (error) {
      console.error('Failed to delete application:', error);
      toast.error('Failed to delete application');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'reviewing': return 'bg-blue-100 text-blue-700';
      case 'interview': return 'bg-purple-100 text-purple-700';
      case 'accepted': return 'bg-green-100 text-green-700';
      case 'rejected': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100">
      <div className="px-6 py-4 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'all' ? 'bg-[#0302cb] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({applications.length})
          </button>
          <button
            onClick={() => handleFilterChange('pending')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Pending ({applications.filter(a => a.status === 'pending').length})
          </button>
          <button
            onClick={() => handleFilterChange('reviewing')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'reviewing' ? 'bg-blue-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Reviewing ({applications.filter(a => a.status === 'reviewing').length})
          </button>
          <button
            onClick={() => handleFilterChange('interview')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'interview' ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Interview ({applications.filter(a => a.status === 'interview').length})
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-[#0302cb] text-white rounded-lg font-medium hover:bg-[#001a3a] transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined"> download</span>
            Export CSV
          </button>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              type="text"
              placeholder="Search applications..."
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none w-full md:w-64"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="overflow-x-auto w-full">
              <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Candidate</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Cover Letter</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Resume</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Applied</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedApplications.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-6 py-12 text-center">
                  <span className="material-symbols-outlined text-slate-300 text-4xl">work_off</span>
                  <p className="text-slate-500 mt-2">No applications found</p>
                </td>
              </tr>
            ) : (
              paginatedApplications.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50 transition-all">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0302cb] rounded-full flex items-center justify-center text-white font-medium">
                        {app.full_name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{app.full_name}</p>
                        {app.phone && (
                          <p className="text-sm text-slate-500">{app.phone}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">{app.job_title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-900">{app.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {app.linkedin_url && (
                        <a
                          href={app.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline"
                        >
                          LinkedIn
                        </a>
                      )}
                      {app.portfolio_url && (
                        <a
                          href={app.portfolio_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:underline"
                        >
                          Portfolio
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <p className="text-sm text-slate-600 line-clamp-2">{app.cover_letter}</p>
                  </td>
                  <td className="px-6 py-4">
                    {app.resume_url ? (
                      <a
                        href={app.resume_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
                      >
                        <span className="material-symbols-outlined text-lg">download</span>
                        <span>Download CV</span>
                      </a>
                    ) : (
                      <span className="text-sm text-slate-400">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-500">
                      {new Date(app.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(app.created_at).toLocaleTimeString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={app.status}
                      onChange={(e) => updateApplicationStatus(app.id, e.target.value)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border-0 cursor-pointer ${getStatusColor(app.status)}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewing">Reviewing</option>
                      <option value="interview">Interview</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.location.href = `mailto:${app.email}`}
                        className="p-2 text-slate-400 hover:text-[#ef0d11] hover:bg-[#ef0d11]/10 rounded-lg transition-all"
                        title="Send email"
                      >
                        <span className="material-symbols-outlined text-lg">mail</span>
                      </button>
                      <button
                        onClick={() => deleteApplication(app.id)}
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

      <Pagination
        currentPage={currentPage}
        totalItems={filteredApplications.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
