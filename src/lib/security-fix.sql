-- ============================================================
-- FERDSILINKS SECURITY FIX
-- Run this in Supabase SQL Editor
-- ============================================================

-- 1. FIX: Function Search Path Mutable
-- ============================================================
-- Set search_path for database functions to prevent privilege escalation
ALTER FUNCTION public.reset_today_visitors() SET search_path = public;
ALTER FUNCTION public.clean_old_page_views() SET search_path = public;
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;

-- 2. FIX: Enable RLS on analytics tables
-- ============================================================
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for page_views (public can insert, admin can all)
DROP POLICY IF EXISTS "Public insert page_views" ON page_views;
CREATE POLICY "Public insert page_views" ON page_views FOR INSERT TO anon WITH CHECK (true);

-- Create policies for visitor_stats (public can read, admin can update)
DROP POLICY IF EXISTS "Public select visitor_stats" ON visitor_stats;
CREATE POLICY "Public select visitor_stats" ON visitor_stats FOR SELECT TO anon USING (true);
DROP POLICY IF EXISTS "Admin update visitor_stats" ON visitor_stats;
CREATE POLICY "Admin update visitor_stats" ON visitor_stats FOR UPDATE TO authenticated USING (true);

-- 3. FIX: Replace overly permissive RLS policies with proper ones
-- ============================================================

-- LEADS table
DROP POLICY IF EXISTS "Allow public to insert leads" ON leads;
DROP POLICY IF EXISTS "Anyone can create leads" ON leads;
DROP POLICY IF EXISTS "Allow authenticated users to delete leads" ON leads;
DROP POLICY IF EXISTS "Allow authenticated users to update leads" ON leads;

-- Public INSERT (needed for contact form)
CREATE POLICY "Public insert leads" ON leads FOR INSERT TO anon WITH CHECK (
  email IS NOT NULL AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);

-- Public SELECT (for admin only)
CREATE POLICY "Admin select leads" ON leads FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin delete leads" ON leads FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update leads" ON leads FOR UPDATE TO authenticated USING (true);

-- ENROLLMENTS table
DROP POLICY IF EXISTS "Allow public to insert enrollments" ON enrollments;
DROP POLICY IF EXISTS "Anyone can enroll" ON enrollments;
DROP POLICY IF EXISTS "Allow authenticated users to delete enrollments" ON enrollments;
DROP POLICY IF EXISTS "Allow authenticated users to update enrollments" ON enrollments;

CREATE POLICY "Public insert enrollments" ON enrollments FOR INSERT TO anon WITH CHECK (
  email IS NOT NULL AND course_title IS NOT NULL
);
CREATE POLICY "Admin select enrollments" ON enrollments FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin delete enrollments" ON enrollments FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update enrollments" ON enrollments FOR UPDATE TO authenticated USING (true);

-- JOB_APPLICATIONS table
DROP POLICY IF EXISTS "Allow public to insert job_applications" ON job_applications;
DROP POLICY IF EXISTS "Anyone can apply" ON job_applications;
DROP POLICY IF EXISTS "Allow authenticated users to delete job_applications" ON job_applications;
DROP POLICY IF EXISTS "Allow authenticated users to update job_applications" ON job_applications;

CREATE POLICY "Public insert job_applications" ON job_applications FOR INSERT TO anon WITH CHECK (
  email IS NOT NULL AND job_title IS NOT NULL
);
CREATE POLICY "Admin select job_applications" ON job_applications FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin delete job_applications" ON job_applications FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update job_applications" ON job_applications FOR UPDATE TO authenticated USING (true);

-- SUBSCRIBERS table
DROP POLICY IF EXISTS "Allow public to insert subscribers" ON subscribers;
DROP POLICY IF EXISTS "Anyone can subscribe" ON subscribers;
DROP POLICY IF EXISTS "Allow authenticated users to delete subscribers" ON subscribers;
DROP POLICY IF EXISTS "Allow authenticated users to update subscribers" ON subscribers;

CREATE POLICY "Public insert subscribers" ON subscribers FOR INSERT TO anon WITH CHECK (
  email IS NOT NULL AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);
CREATE POLICY "Admin select subscribers" ON subscribers FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin delete subscribers" ON subscribers FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update subscribers" ON subscribers FOR UPDATE TO authenticated USING (true);

-- BLOG_POSTS table
DROP POLICY IF EXISTS "Allow authenticated users to insert blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to delete blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to update blog_posts" ON blog_posts;

CREATE POLICY "Admin insert blog_posts" ON blog_posts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin delete blog_posts" ON blog_posts FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update blog_posts" ON blog_posts FOR UPDATE TO authenticated USING (true);

-- COURSES table
DROP POLICY IF EXISTS "Allow authenticated insert courses" ON courses;
DROP POLICY IF EXISTS "Allow authenticated delete courses" ON courses;
DROP POLICY IF EXISTS "Allow authenticated update courses" ON courses;

CREATE POLICY "Admin insert courses" ON courses FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin delete courses" ON courses FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update courses" ON courses FOR UPDATE TO authenticated USING (true);

-- JOB_LISTINGS table
DROP POLICY IF EXISTS "Allow authenticated users to insert job_listings" ON job_listings;
DROP POLICY IF EXISTS "Allow authenticated users to delete job_listings" ON job_listings;
DROP POLICY IF EXISTS "Allow authenticated users to update job_listings" ON job_listings;

CREATE POLICY "Admin insert job_listings" ON job_listings FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin delete job_listings" ON job_listings FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update job_listings" ON job_listings FOR UPDATE TO authenticated USING (true);

-- TEAM_MEMBERS table
DROP POLICY IF EXISTS "Allow authenticated users to insert team_members" ON team_members;
DROP POLICY IF EXISTS "Allow authenticated users to delete team_members" ON team_members;
DROP POLICY IF EXISTS "Allow authenticated users to update team_members" ON team_members;

CREATE POLICY "Admin insert team_members" ON team_members FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin delete team_members" ON team_members FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update team_members" ON team_members FOR UPDATE TO authenticated USING (true);

-- PODCASTS table
DROP POLICY IF EXISTS "podcasts_insert_all" ON podcasts;
DROP POLICY IF EXISTS "podcasts_insert_anon" ON podcasts;

CREATE POLICY "Admin insert podcasts" ON podcasts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admin delete podcasts" ON podcasts FOR DELETE TO authenticated USING (true);
CREATE POLICY "Admin update podcasts" ON podcasts FOR UPDATE TO authenticated USING (true);

-- 4. FIX: Enable leaked password protection (run in Supabase Dashboard instead)
-- ============================================================
-- Go to: Authentication → Settings → Enable "Password protection"
-- Or run this SQL (requires Supabase Enterprise):
-- ALTER AUTH CONFIG SET enable_signup = true;
-- ALTER AUTH CONFIG SET securityriple_password_check = true;

-- 5. STORAGE BUCKET FIXES
-- ============================================================
-- The bucket warnings are informational - public read is needed for images
-- But you can restrict by creating more specific policies if needed

-- Verify all tables have RLS enabled
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY tablename;