'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/supabase-browser-client';

interface Stats {
  totalLeads: number;
  leadsThisWeek: number;
  totalSubscribers: number;
  totalEnrollments: number;
  recentEnrollments: number;
  totalApplications: number;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  status: string;
  message: string;
  created_at: string;
}

interface Enrollment {
  id: string;
  full_name: string;
  email: string;
  status: string;
  course_title: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentLeads, setRecentLeads] = useState<Lead[]>([]);
  const [recentEnrollments, setRecentEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      // Fetch stats concurrently to improve dashboard load time
      const [
        leadsCount,
        leadsWeekCount,
        subscribersCount,
        enrollmentsCount,
        enrollmentsWeekCount,
        applicationsCount
      ] = await Promise.all([
        supabase.from('leads').select('*', { count: 'exact', head: true }),
        supabase.from('leads').select('*', { count: 'exact', head: true }).gte('created_at', weekAgo.toISOString()),
        supabase.from('subscribers').select('*', { count: 'exact', head: true }).eq('status', 'active'),
        supabase.from('enrollments').select('*', { count: 'exact', head: true }),
        supabase.from('enrollments').select('*', { count: 'exact', head: true }).gte('created_at', weekAgo.toISOString()),
        supabase.from('job_applications').select('*', { count: 'exact', head: true })
      ]);

      setStats({
        totalLeads: leadsCount.count || 0,
        leadsThisWeek: leadsWeekCount.count || 0,
        totalSubscribers: subscribersCount.count || 0,
        totalEnrollments: enrollmentsCount.count || 0,
        recentEnrollments: enrollmentsWeekCount.count || 0,
        totalApplications: applicationsCount.count || 0,
      });

      // Fetch recent data
      const [leadsData, enrollmentsData] = await Promise.all([
        supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(5),
        supabase.from('enrollments').select('*').order('created_at', { ascending: false }).limit(5),
      ]);

      setRecentLeads(leadsData.data || []);
      setRecentEnrollments(enrollmentsData.data || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#ef0d11] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const statCards = [
    { label: 'Total Leads', value: stats?.totalLeads || 0, subtext: `${stats?.leadsThisWeek || 0} this week`, icon: 'inbox', color: 'bg-[#0302cb]' },
    { label: 'Subscribers', value: stats?.totalSubscribers || 0, subtext: 'Newsletter members', icon: 'mail', color: 'bg-[#006a6a]' },
    { label: 'Enrollments', value: stats?.totalEnrollments || 0, subtext: `${stats?.recentEnrollments || 0} this week`, icon: 'school', color: 'bg-[#ef0d11]' },
    { label: 'Applications', value: stats?.totalApplications || 0, subtext: 'Job applications', icon: 'work', color: 'bg-[#6b7280]' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Dashboard</h1>
          <p className="text-slate-500">Welcome back! Here&apos;s an overview of your site.</p>
        </div>
        <button
          onClick={fetchDashboardData}
          className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-lg">refresh</span>
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <div className={`${card.color} p-3 rounded-lg`}>
                <span className="material-symbols-outlined text-white">{card.icon}</span>
              </div>
            </div>
            <h3 className="text-3xl font-headline font-bold text-[#0302cb]">{card.value}</h3>
            <p className="text-sm font-medium text-slate-900">{card.label}</p>
            <p className="text-xs text-slate-500">{card.subtext}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-headline font-bold text-[#0302cb]">Recent Leads</h2>
            <Link href="/admin/leads" className="text-sm text-[#ef0d11] hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-slate-100">
            {recentLeads.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-slate-300 text-4xl">inbox</span>
                <p className="text-slate-500 mt-2">No leads yet</p>
              </div>
            ) : (
              recentLeads.map((lead) => (
                <div key={lead.id} className="px-6 py-4 hover:bg-slate-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{lead.name}</p>
                      <p className="text-sm text-slate-500">{lead.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        lead.status === 'new' ? 'bg-green-100 text-green-700' :
                        lead.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {lead.status}
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        {new Date(lead.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-1">{lead.message}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-headline font-bold text-[#0302cb]">Recent Enrollments</h2>
            <Link href="/admin/enrollments" className="text-sm text-[#ef0d11] hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-slate-100">
            {recentEnrollments.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-slate-300 text-4xl">school</span>
                <p className="text-slate-500 mt-2">No enrollments yet</p>
              </div>
            ) : (
              recentEnrollments.map((enrollment) => (
                <div key={enrollment.id} className="px-6 py-4 hover:bg-slate-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{enrollment.full_name}</p>
                      <p className="text-sm text-slate-500">{enrollment.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        enrollment.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        enrollment.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {enrollment.status}
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        {new Date(enrollment.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">{enrollment.course_title}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}