'use client';

import { useState, useMemo } from 'react';
import { Enrollment } from '@/types/database';
import { exportToCSV } from '@/lib/utils/export';
import toast from 'react-hot-toast';
import { Pagination } from '@/components/admin/Pagination';

interface EnrollmentsTableProps {
  initialEnrollments: Enrollment[];
}

const ITEMS_PER_PAGE = 10;

export default function EnrollmentsTable({ initialEnrollments }: EnrollmentsTableProps) {
  const [enrollments, setEnrollments] = useState(initialEnrollments);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEnrollments = useMemo(() => {
    return enrollments.filter((enrollment) => {
      const matchesFilter = filter === 'all' || enrollment.status === filter;
      const matchesSearch = 
        enrollment.full_name.toLowerCase().includes(search.toLowerCase()) ||
        enrollment.email.toLowerCase().includes(search.toLowerCase()) ||
        enrollment.course_title.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [enrollments, filter, search]);

  const paginatedEnrollments = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEnrollments.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredEnrollments, currentPage]);

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
    if (filteredEnrollments.length === 0) {
      toast.error('No enrollments to export');
      return;
    }
    const exportData = filteredEnrollments.map((enrollment) => ({
      name: enrollment.full_name,
      email: enrollment.email,
      phone: enrollment.phone || '',
      course: enrollment.course_title,
      education: enrollment.education_level || '',
      experience: enrollment.experience_level || '',
      motivation: enrollment.motivation || '',
      status: enrollment.status,
      enrolled_at: new Date(enrollment.created_at).toLocaleString(),
    }));

    exportToCSV(exportData, 'enrollments');
    toast.success(`Exported ${filteredEnrollments.length} enrollments to CSV`);
  };

  const updateEnrollmentStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/enrollments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      
      if (response.ok) {
        setEnrollments(enrollments.map(enrollment => 
          enrollment.id === id ? { ...enrollment, status: status as Enrollment['status'] } : enrollment
        ));
        toast.success('Enrollment status updated');
      } else {
        toast.error('Failed to update enrollment status');
      }
    } catch (error) {
      console.error('Failed to update enrollment status:', error);
      toast.error('Failed to update enrollment status');
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
            All ({enrollments.length})
          </button>
          <button
            onClick={() => handleFilterChange('pending')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Pending ({enrollments.filter(e => e.status === 'pending').length})
          </button>
          <button
            onClick={() => handleFilterChange('confirmed')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'confirmed' ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Confirmed ({enrollments.filter(e => e.status === 'confirmed').length})
          </button>
          <button
            onClick={() => handleFilterChange('completed')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Completed ({enrollments.filter(e => e.status === 'completed').length})
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-[#0302cb] text-white rounded-lg font-medium hover:bg-[#001a3a] transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">download</span>
            Export CSV
          </button>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              type="text"
              placeholder="Search enrollments..."
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
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Course</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Background</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedEnrollments.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center">
                  <span className="material-symbols-outlined text-slate-300 text-4xl">school</span>
                  <p className="text-slate-500 mt-2">No enrollments found</p>
                </td>
              </tr>
            ) : (
              paginatedEnrollments.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-slate-50 transition-all">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#ef0d11] rounded-full flex items-center justify-center text-white font-medium">
                        {enrollment.full_name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{enrollment.full_name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">{enrollment.course_title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-900">{enrollment.email}</p>
                    {enrollment.phone && (
                      <p className="text-sm text-slate-500">{enrollment.phone}</p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600">
                      {enrollment.education_level || 'N/A'}
                    </p>
                    <p className="text-xs text-slate-400">
                      {enrollment.experience_level || 'N/A'}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-500">
                      {new Date(enrollment.created_at).toLocaleDateString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={enrollment.status}
                      onChange={(e) => updateEnrollmentStatus(enrollment.id, e.target.value)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border-0 cursor-pointer ${
                        enrollment.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        enrollment.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                        enrollment.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.location.href = `mailto:${enrollment.email}`}
                        className="p-2 text-slate-400 hover:text-[#ef0d11] hover:bg-[#ef0d11]/10 rounded-lg transition-all"
                        title="Send email"
                      >
                        <span className="material-symbols-outlined text-lg">mail</span>
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
        totalItems={filteredEnrollments.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
