-- Analytics Tables for Ferdsilinks Website
-- Run this in Supabase Dashboard → SQL Editor

-- Page Views Table
CREATE TABLE IF NOT EXISTS page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id VARCHAR(255) NOT NULL,
  page VARCHAR(500) NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  referrer VARCHAR(500),
  visited_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS page_views_visitor_id_idx ON page_views(visitor_id);
CREATE INDEX IF NOT EXISTS page_views_page_idx ON page_views(page);
CREATE INDEX IF NOT EXISTS page_views_visited_at_idx ON page_views(visited_at);

-- Enable RLS
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Allow public insert (for tracking)
CREATE POLICY "Allow public insert page_views" ON page_views FOR INSERT TO anon WITH CHECK (true);

-- Allow public select (for dashboard)
CREATE POLICY "Allow public select page_views" ON page_views FOR SELECT TO anon USING (true);