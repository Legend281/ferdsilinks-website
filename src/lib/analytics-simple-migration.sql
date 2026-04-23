-- Simple Visitor Tracking Tables for Supabase
-- Run this in your Supabase SQL Editor

-- Drop existing tables
DROP TABLE IF EXISTS page_views CASCADE;
DROP TABLE IF EXISTS visitors CASCADE;
DROP TABLE IF EXISTS daily_visitors CASCADE;
DROP TABLE IF EXISTS visitor_stats CASCADE;

-- 1. Page views table
CREATE TABLE page_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  visitor_id VARCHAR(255) NOT NULL,
  page VARCHAR(500) NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  referrer VARCHAR(500),
  visited_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Visitor stats
CREATE TABLE visitor_stats (
  id INT PRIMARY KEY DEFAULT 1,
  total_page_views INT DEFAULT 0,
  last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- Initialize stats
INSERT INTO visitor_stats (id, total_page_views) VALUES (1, 0);

-- DISABLE RLS FOR TESTING (enable later if needed)
ALTER TABLE page_views DISABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_stats DISABLE ROW LEVEL SECURITY;
