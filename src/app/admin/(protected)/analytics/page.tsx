'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/supabase-browser-client';

interface PageView {
  id: string;
  visitor_id: string;
  page: string;
  visited_at: string;
}

interface AnalyticsStats {
  totalVisitors: number;
  todayVisitors: number;
  weekVisitors: number;
  totalPageViews: number;
  todayPageViews: number;
  topPages: { page: string; views: number }[];
  recentPageViews: PageView[];
}

export default function AnalyticsPage() {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayISO = today.toISOString();

      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const sevenDaysAgoISO = sevenDaysAgo.toISOString();

      const { data: allPageViews, error: fetchError } = await supabase
        .from('page_views')
        .select('visitor_id, visited_at, page')
        .order('visited_at', { ascending: false });

      if (fetchError) {
        console.error('Fetch error:', fetchError);
        setError(`Database error: ${fetchError.message}. Make sure the analytics tables are created in Supabase.`);
        setLoading(false);
        return;
      }

      if (!allPageViews || allPageViews.length === 0) {
        setStats({
          totalVisitors: 0,
          todayVisitors: 0,
          weekVisitors: 0,
          totalPageViews: 0,
          todayPageViews: 0,
          topPages: [],
          recentPageViews: [],
        });
        setLoading(false);
        return;
      }

      const uniqueVisitors = new Set(allPageViews.map((v: any) => v.visitor_id));
      const todayViews = allPageViews.filter((v: any) => v.visited_at >= todayISO);
      const weekViews = allPageViews.filter((v: any) => v.visited_at >= sevenDaysAgoISO);
      const todayUniqueVisitors = new Set(todayViews.map((v: any) => v.visitor_id));
      const weekUniqueVisitors = new Set(weekViews.map((v: any) => v.visitor_id));

      const pageCounts: Record<string, number> = {};
      weekViews.forEach((view: any) => {
        const page = view.page || '/';
        pageCounts[page] = (pageCounts[page] || 0) + 1;
      });

      const topPagesList = Object.entries(pageCounts)
        .map(([page, views]) => ({ page, views }))
        .sort((a, b) => b.views - a.views)
        .slice(0, 5);

      const recentPageViews = allPageViews.slice(0, 20).map((v: any) => ({
        id: v.id,
        visitor_id: v.visitor_id,
        page: v.page,
        visited_at: v.visited_at,
      }));

      setStats({
        totalVisitors: uniqueVisitors.size,
        todayVisitors: todayUniqueVisitors.size,
        weekVisitors: weekUniqueVisitors.size,
        totalPageViews: allPageViews.length,
        todayPageViews: todayViews.length,
        topPages: topPagesList,
        recentPageViews: recentPageViews,
      });
    } catch (err: any) {
      console.error('Analytics error:', err);
      setError(`Error: ${err.message}`);
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

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Analytics</h1>
            <p className="text-slate-500">Track your website visitor statistics</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-red-500 text-2xl">warning</span>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Setup Required</h3>
              <p className="text-sm text-slate-500">The analytics system needs to be configured</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-slate-600 mb-2">{error}</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2">How to fix:</h4>
            <ol className="text-sm text-slate-600 space-y-1 list-decimal list-inside">
              <li>Go to your Supabase Dashboard</li>
              <li>Open the SQL Editor</li>
              <li>Run the migration from <code className="bg-slate-200 px-1 rounded">src/lib/analytics-migration.sql</code></li>
              <li>Refresh this page</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  const statCards = [
    { label: 'Total Visitors', value: stats?.totalVisitors || 0, subtext: 'All time', icon: 'group', color: 'bg-[#0302cb]' },
    { label: "Today's Visitors", value: stats?.todayVisitors || 0, subtext: new Date().toLocaleDateString(), icon: 'today', color: 'bg-[#006a6a]' },
    { label: 'This Week', value: stats?.weekVisitors || 0, subtext: 'Unique visitors', icon: 'date_range', color: 'bg-[#ef0d11]' },
    { label: 'Total Page Views', value: stats?.totalPageViews || 0, subtext: `${stats?.todayPageViews || 0} today`, icon: 'visibility', color: 'bg-[#6b7280]' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Analytics</h1>
          <p className="text-slate-500">Track your website visitor statistics</p>
        </div>
        <button
          onClick={fetchAnalytics}
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
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-headline font-bold text-[#0302cb]">Top Pages</h2>
            <p className="text-sm text-slate-500">Most viewed pages this week</p>
          </div>
          <div className="divide-y divide-slate-100">
            {!stats?.topPages || stats.topPages.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-slate-300 text-4xl">analytics</span>
                <p className="text-slate-500 mt-2">No page data yet</p>
                <p className="text-xs text-slate-400 mt-1">Tracking will begin once visitors browse your site</p>
              </div>
            ) : (
              stats.topPages.map((item, index) => (
                <div key={index} className="px-6 py-4 hover:bg-slate-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#0302cb]/10 text-[#0302cb] text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="font-medium text-slate-900">{item.page}</span>
                    </div>
                    <span className="text-sm text-slate-500">{item.views} views</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100">
          <div className="px-6 py-4 border-b border-slate-100">
            <h2 className="font-headline font-bold text-[#0302cb]">Recent Page Views</h2>
            <p className="text-sm text-slate-500">Latest page views</p>
          </div>
          <div className="divide-y divide-slate-100">
            {!stats?.recentPageViews || stats.recentPageViews.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-slate-300 text-4xl">visibility</span>
                <p className="text-slate-500 mt-2">No page views yet</p>
                <p className="text-xs text-slate-400 mt-1">Share your website to start tracking visitors</p>
              </div>
            ) : (
              stats.recentPageViews.map((view, index) => (
                <div key={index} className="px-6 py-4 hover:bg-slate-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{view.page}</p>
                      <p className="text-xs text-slate-500 font-mono">{view.visitor_id.slice(0, 15)}...</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">
                        {new Date(view.visited_at).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-slate-400">
                        {new Date(view.visited_at).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}