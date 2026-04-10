'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { TeamMember } from '@/types/database';
import toast from 'react-hot-toast';
import { Pagination } from '@/components/admin/Pagination';

const ITEMS_PER_PAGE = 10;

export default function TeamManagementPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await fetch('/api/admin/team');
      if (response.ok) {
        const data = await response.json();
        setMembers(data);
      } else {
        toast.error('Failed to fetch team members');
      }
    } catch (error) {
      console.error('Error fetching members:', error);
      toast.error('Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member? This action cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/admin/team/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setMembers(members.filter(m => m.id !== id));
        toast.success('Team member deleted');
      } else {
        toast.error('Failed to delete team member');
      }
    } catch (error) {
      console.error('Error deleting member:', error);
      toast.error('Failed to delete team member');
    }
  };

  const handleStatusChange = async (id: string, newStatus: 'active' | 'inactive') => {
    try {
      const response = await fetch(`/api/admin/team/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (response.ok) {
        setMembers(members.map(m => 
          m.id === id ? { ...m, status: newStatus } : m
        ));
        toast.success(`Team member ${newStatus === 'active' ? 'activated' : 'deactivated'}`);
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      const matchesFilter = filter === 'all' || member.status === filter;
      const matchesSearch = 
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.role.toLowerCase().includes(search.toLowerCase()) ||
        (member.department && member.department.toLowerCase().includes(search.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [members, filter, search]);

  const paginatedMembers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMembers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMembers, currentPage]);

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
          <h1 className="text-2xl font-headline font-bold text-[#002147]">Team Members</h1>
          <p className="text-gray-500">Manage team member profiles</p>
        </div>
        <Link
          href="/admin/content/team/new"
          className="px-4 py-2 bg-[#cf7000] text-white rounded-lg font-medium hover:bg-[#b86300] transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Add Member
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
              All ({members.length})
            </button>
            <button
              onClick={() => handleFilterChange('active')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'active' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Active ({members.filter(m => m.status === 'active').length})
            </button>
            <button
              onClick={() => handleFilterChange('inactive')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === 'inactive' ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Inactive ({members.filter(m => m.status === 'inactive').length})
            </button>
          </div>
          
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
            <input
              type="text"
              placeholder="Search team members..."
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
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedMembers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <span className="material-symbols-outlined text-gray-300 text-4xl">groups</span>
                    <p className="text-gray-500 mt-2">No team members found</p>
                    <Link
                      href="/admin/content/team/new"
                      className="text-[#cf7000] hover:underline text-sm mt-1 inline-block"
                    >
                      Add your first team member
                    </Link>
                  </td>
                </tr>
              ) : (
                paginatedMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#002147] rounded-full flex items-center justify-center overflow-hidden">
                          {member.image_url ? (
                            <img src={member.image_url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-white font-medium">{member.name.charAt(0)}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          {member.email && (
                            <p className="text-sm text-gray-500">{member.email}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-900">{member.role}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        {member.department || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                        member.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/admin/content/team/${member.id}`}
                          className="p-2 text-gray-400 hover:text-[#cf7000] hover:bg-[#cf7000]/10 rounded-lg transition-all"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </Link>
                        {member.status === 'active' ? (
                          <button
                            onClick={() => handleStatusChange(member.id, 'inactive')}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                            title="Deactivate"
                          >
                            <span className="material-symbols-outlined text-lg">person_off</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStatusChange(member.id, 'active')}
                            className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                            title="Activate"
                          >
                            <span className="material-symbols-outlined text-lg">person</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(member.id)}
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
          totalItems={filteredMembers.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
