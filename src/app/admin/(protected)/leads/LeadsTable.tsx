'use client';

import { useState, useMemo } from 'react';
import { Lead } from '@/types/database';
import { exportToCSV } from '@/lib/utils/export';
import toast from 'react-hot-toast';
import { Pagination } from '@/components/admin/Pagination';

interface LeadsTableProps {
  initialLeads: Lead[];
}

const ITEMS_PER_PAGE = 10;

export default function LeadsTable({ initialLeads }: LeadsTableProps) {
  const [leads, setLeads] = useState(initialLeads);
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'qualified'>('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesFilter = filter === 'all' || lead.status === filter;
      const matchesSearch = 
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase()) ||
        lead.message.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [leads, filter, search]);

  const paginatedLeads = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredLeads.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredLeads, currentPage]);

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
    if (filteredLeads.length === 0) {
      toast.error('No leads to export');
      return;
    }
    const exportData = filteredLeads.map((lead) => ({
      name: lead.name,
      email: lead.email,
      phone: lead.phone || '',
      company: lead.company || '',
      service_interest: lead.service_interest || 'General Inquiry',
      message: lead.message,
      status: lead.status,
      created_at: new Date(lead.created_at).toLocaleString(),
    }));

    exportToCSV(exportData, 'leads');
    toast.success(`Exported ${filteredLeads.length} leads to CSV`);
  };

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      
      if (response.ok) {
        setLeads(leads.map(lead => 
          lead.id === id ? { ...lead, status: status as Lead['status'] } : lead
        ));
        toast.success('Lead status updated');
      } else {
        toast.error('Failed to update lead status');
      }
    } catch (error) {
      console.error('Failed to update lead status:', error);
      toast.error('Failed to update lead status');
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    
    try {
      const response = await fetch(`/api/admin/leads/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setLeads(leads.filter(lead => lead.id !== id));
        toast.success('Lead deleted');
      } else {
        toast.error('Failed to delete lead');
      }
    } catch (error) {
      console.error('Failed to delete lead:', error);
      toast.error('Failed to delete lead');
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
            All ({leads.length})
          </button>
          <button
            onClick={() => handleFilterChange('new')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'new' ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            New ({leads.filter(l => l.status === 'new').length})
          </button>
          <button
            onClick={() => handleFilterChange('contacted')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'contacted' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Contacted ({leads.filter(l => l.status === 'contacted').length})
          </button>
          <button
            onClick={() => handleFilterChange('qualified')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              filter === 'qualified' ? 'bg-[#ef0d11] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Qualified ({leads.filter(l => l.status === 'qualified').length})
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
              placeholder="Search leads..."
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
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Service Interest</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Message</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedLeads.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center">
                  <span className="material-symbols-outlined text-slate-300 text-4xl">inbox</span>
                  <p className="text-slate-500 mt-2">No leads found</p>
                </td>
              </tr>
            ) : (
              paginatedLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-all">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-slate-900">{lead.name}</p>
                      {lead.company && (
                        <p className="text-sm text-slate-500">{lead.company}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-900">{lead.email}</p>
                    {lead.phone && (
                      <p className="text-sm text-slate-500">{lead.phone}</p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-600">
                      {lead.service_interest || 'General Inquiry'}
                    </span>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <p className="text-sm text-slate-600 line-clamp-2">{lead.message}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-500">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-xs text-slate-400">
                      {new Date(lead.created_at).toLocaleTimeString()}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border-0 cursor-pointer ${
                        lead.status === 'new' ? 'bg-green-100 text-green-700' :
                        lead.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                        lead.status === 'qualified' ? 'bg-[#ef0d11]/10 text-[#ef0d11]' :
                        lead.status === 'converted' ? 'bg-green-100 text-green-700' :
                        'bg-red-100 text-red-700'
                      }`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="qualified">Qualified</option>
                      <option value="converted">Converted</option>
                      <option value="lost">Lost</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.location.href = `mailto:${lead.email}`}
                        className="p-2 text-slate-400 hover:text-[#ef0d11] hover:bg-[#ef0d11]/10 rounded-lg transition-all"
                        title="Send email"
                      >
                        <span className="material-symbols-outlined text-lg">mail</span>
                      </button>
                      <button
                        onClick={() => deleteLead(lead.id)}
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
        totalItems={filteredLeads.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
