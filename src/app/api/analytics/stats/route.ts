import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/supabase-server-client';

export async function GET() {
  try {
    const supabase = await createClient();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayISO = today.toISOString();

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const sevenDaysAgoISO = sevenDaysAgo.toISOString();

    const { data: allPageViews } = await supabase
      .from('page_views')
      .select('visitor_id, visited_at, page');

    const { data: recentPageViews } = await supabase
      .from('page_views')
      .select('visitor_id, page, visited_at')
      .order('visited_at', { ascending: false })
      .limit(20);

    if (!allPageViews) {
      return NextResponse.json({
        success: true,
        stats: {
          totalVisitors: 0,
          todayVisitors: 0,
          weekVisitors: 0,
          totalPageViews: 0,
          todayPageViews: 0,
        },
        topPages: [],
        recentPageViews: [],
      });
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

    const topPages = Object.entries(pageCounts)
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    return NextResponse.json({
      success: true,
      stats: {
        totalVisitors: uniqueVisitors.size,
        todayVisitors: todayUniqueVisitors.size,
        weekVisitors: weekUniqueVisitors.size,
        totalPageViews: allPageViews.length,
        todayPageViews: todayViews.length,
      },
      topPages,
      recentPageViews: recentPageViews || [],
    });
  } catch (error: any) {
    console.error('Analytics stats error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
