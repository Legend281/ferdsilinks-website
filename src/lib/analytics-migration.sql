-- Visitor Tracking Tables for Supabase
-- Run this in your Supabase SQL Editor

-- Drop existing tables if they exist (to reset)
DROP TABLE IF EXISTS page_views CASCADE;
DROP TABLE IF EXISTS visitors CASCADE;
DROP TABLE IF EXISTS daily_visitors CASCADE;
DROP TABLE IF EXISTS visitor_stats CASCADE;

-- 1. Visitors table - stores unique visitor records
CREATE TABLE visitors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id VARCHAR(255) UNIQUE NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  first_visit TIMESTAMPTZ DEFAULT NOW(),
  last_visit TIMESTAMPTZ DEFAULT NOW(),
  visit_count INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX visitors_visitor_id_idx ON visitors(visitor_id);
CREATE INDEX visitors_created_at_idx ON visitors(created_at);

-- 2. Page views table - stores each page view
CREATE TABLE page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id VARCHAR(255) NOT NULL,
  page VARCHAR(500) NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  referrer VARCHAR(500),
  visited_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX page_views_visitor_id_idx ON page_views(visitor_id);
CREATE INDEX page_views_page_idx ON page_views(page);
CREATE INDEX page_views_visited_at_idx ON page_views(visited_at);

-- 3. Daily visitors - counts unique visitors per day
CREATE TABLE daily_visitors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  visitor_id VARCHAR(255) NOT NULL,
  ip_address VARCHAR(45),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(date, visitor_id)
);

CREATE INDEX daily_visitors_date_idx ON daily_visitors(date);

-- 4. Visitor stats - aggregate statistics
CREATE TABLE visitor_stats (
  id INT PRIMARY KEY DEFAULT 1,
  total_visitors INT DEFAULT 0,
  today_visitors INT DEFAULT 0,
  total_page_views INT DEFAULT 0,
  last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Initialize stats
INSERT INTO visitor_stats (id, total_visitors, today_visitors, total_page_views)
VALUES (1, 0, 0, 0);

-- Enable RLS
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_visitors ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_stats ENABLE ROW LEVEL SECURITY;

-- Public insert policies (for tracking)
CREATE POLICY "Public insert visitors" ON visitors FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Public insert page_views" ON page_views FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Public insert daily_visitors" ON daily_visitors FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Public update visitor_stats" ON visitor_stats FOR UPDATE TO anon USING (true);

-- Public read policies (for dashboard)
CREATE POLICY "Public select visitors" ON visitors FOR SELECT TO anon USING (true);
CREATE POLICY "Public select page_views" ON page_views FOR SELECT TO anon USING (true);
CREATE POLICY "Public select daily_visitors" ON daily_visitors FOR SELECT TO anon USING (true);
CREATE POLICY "Public select visitor_stats" ON visitor_stats FOR SELECT TO anon USING (true);

-- Enable realtime for page_views (optional, for live dashboards)
-- ALTER PUBLICATION supabase_realtime ADD TABLE page_views;
