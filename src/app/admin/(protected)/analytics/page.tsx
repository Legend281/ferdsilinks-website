import { createClient } from '@/lib/supabase/supabase-server-client';

async function getAnalyticsStats() {
  const supabase = await createClient();
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayISO = today.toISOString();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const sevenDaysAgoISO = sevenDaysAgo.toISOString();
  
  try {
    const { data: allPageViews } = await supabase
      .from('page_views')
      .select('visitor_id, visited_at, page');

    const { data: recentPageViews } = await supabase
      .from('page_views')
      .select('visitor_id, page, visited_at')
      .order('visited_at', { ascending: false })
      .limit(20);

    if (!allPageViews) {
      return {
        totalVisitors: 0,
        todayVisitors: 0,
        weekVisitors: 0,
        totalPageViews: 0,
        todayPageViews: 0,
        topPages: [],
        recentPageViews: [],
      };
    }

    const uniqueVisitors = new Set(allPageViews.map(v => v.visitor_id));
    const todayViews = allPageViews.filter(v => v.visited_at >= todayISO);
    const weekViews = allPageViews.filter(v => v.visited_at >= sevenDaysAgoISO);
    const todayUniqueVisitors = new Set(todayViews.map(v => v.visitor_id));
    const weekUniqueVisitors = new Set(weekViews.map(v => v.visitor_id));

    const pageCounts: Record<string, number> = {};
    weekViews.forEach((view) => {
      const page = view.page || '/';
      pageCounts[page] = (pageCounts[page] || 0) + 1;
    });

    const topPagesList = Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);

    return {
      totalVisitors: uniqueVisitors.size,
      todayVisitors: todayUniqueVisitors.size,
      weekVisitors: weekUniqueVisitors.size,
      totalPageViews: allPageViews.length,
      todayPageViews: todayViews.length,
      topPages: topPagesList,
      recentPageViews: recentPageViews || [],
    };
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return {
      totalVisitors: 0,
      todayVisitors: 0,
      weekVisitors: 0,
      totalPageViews: 0,
      todayPageViews: 0,
      topPages: [],
      recentPageViews: [],
    };
  }
}

export default async function AnalyticsPage() {
  const stats = await getAnalyticsStats();

  const statCards = [
    { label: 'Total Visitors', value: stats.totalVisitors, subtext: 'All time', icon: 'group', color: 'bg-[#0302cb]' },
    { label: "Today's Visitors", value: stats.todayVisitors, subtext: new Date().toLocaleDateString(), icon: 'today', color: 'bg-[#006a6a]' },
    { label: 'This Week', value: stats.weekVisitors, subtext: 'Unique visitors', icon: 'date_range', color: 'bg-[#ef0d11]' },
    { label: 'Total Page Views', value: stats.totalPageViews, subtext: `${stats.todayPageViews} today`, icon: 'visibility', color: 'bg-[#6b7280]' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Analytics</h1>
          <p className="text-slate-500">Track your website visitor statistics</p>
        </div>
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
            {stats.topPages.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-slate-300 text-4xl">analytics</span>
                <p className="text-slate-500 mt-2">No page data yet</p>
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
            {stats.recentPageViews.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <span className="material-symbols-outlined text-slate-300 text-4xl">visibility</span>
                <p className="text-slate-500 mt-2">No page views yet</p>
              </div>
            ) : (
              stats.recentPageViews.map((view: any, index: number) => (
                <div key={index} className="px-6 py-4 hover:bg-slate-50 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{view.page}</p>
                      <p className="text-xs text-slate-500">{view.visitor_id}</p>
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
