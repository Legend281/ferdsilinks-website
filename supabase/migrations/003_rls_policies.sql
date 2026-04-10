-- RLS policies for Ferdsilinks tables
-- Run this in Supabase Dashboard > SQL Editor

-- Enable RLS on blog_posts (if not already enabled)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access for blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to insert blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to update blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated users to delete blog_posts" ON blog_posts;

-- Public read access for blog posts
CREATE POLICY "Allow public read access for blog_posts"
ON blog_posts FOR SELECT
USING (true);

-- Allow authenticated users to insert blog posts
CREATE POLICY "Allow authenticated users to insert blog_posts"
ON blog_posts FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users to update blog posts
CREATE POLICY "Allow authenticated users to update blog_posts"
ON blog_posts FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users to delete blog posts
CREATE POLICY "Allow authenticated users to delete blog_posts"
ON blog_posts FOR DELETE
TO authenticated
USING (true);

-- Enable RLS on team_members (if not already enabled)
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for team_members
DROP POLICY IF EXISTS "Allow public read access for team_members" ON team_members;
DROP POLICY IF EXISTS "Allow authenticated users to insert team_members" ON team_members;
DROP POLICY IF EXISTS "Allow authenticated users to update team_members" ON team_members;
DROP POLICY IF EXISTS "Allow authenticated users to delete team_members" ON team_members;

-- Public read access for team members
CREATE POLICY "Allow public read access for team_members"
ON team_members FOR SELECT
USING (true);

-- Allow authenticated users to manage team members
CREATE POLICY "Allow authenticated users to insert team_members"
ON team_members FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update team_members"
ON team_members FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete team_members"
ON team_members FOR DELETE
TO authenticated
USING (true);

-- Enable RLS on job_listings (if not already enabled)
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for job_listings
DROP POLICY IF EXISTS "Allow public read access for job_listings" ON job_listings;
DROP POLICY IF EXISTS "Allow authenticated users to insert job_listings" ON job_listings;
DROP POLICY IF EXISTS "Allow authenticated users to update job_listings" ON job_listings;
DROP POLICY IF EXISTS "Allow authenticated users to delete job_listings" ON job_listings;

-- Public read access for job listings
CREATE POLICY "Allow public read access for job_listings"
ON job_listings FOR SELECT
USING (true);

-- Allow authenticated users to manage job listings
CREATE POLICY "Allow authenticated users to insert job_listings"
ON job_listings FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update job_listings"
ON job_listings FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete job_listings"
ON job_listings FOR DELETE
TO authenticated
USING (true);

-- Enable RLS on enrollments (if not already enabled)
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for enrollments
DROP POLICY IF EXISTS "Allow public read access for enrollments" ON enrollments;
DROP POLICY IF EXISTS "Allow authenticated users to insert enrollments" ON enrollments;
DROP POLICY IF EXISTS "Allow authenticated users to update enrollments" ON enrollments;
DROP POLICY IF EXISTS "Allow authenticated users to delete enrollments" ON enrollments;

-- Public read access for enrollments (admin only - no public access needed)
CREATE POLICY "Allow authenticated users to read enrollments"
ON enrollments FOR SELECT
TO authenticated
USING (true);

-- Allow public to submit enrollments
CREATE POLICY "Allow public to insert enrollments"
ON enrollments FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to manage enrollments
CREATE POLICY "Allow authenticated users to update enrollments"
ON enrollments FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete enrollments"
ON enrollments FOR DELETE
TO authenticated
USING (true);

-- Enable RLS on leads (if not already enabled)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for leads
DROP POLICY IF EXISTS "Allow public read access for leads" ON leads;
DROP POLICY IF EXISTS "Allow authenticated users to insert leads" ON leads;
DROP POLICY IF EXISTS "Allow authenticated users to update leads" ON leads;
DROP POLICY IF EXISTS "Allow authenticated users to delete leads" ON leads;

-- Public read access for leads (admin only)
CREATE POLICY "Allow authenticated users to read leads"
ON leads FOR SELECT
TO authenticated
USING (true);

-- Allow public to submit leads
CREATE POLICY "Allow public to insert leads"
ON leads FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to manage leads
CREATE POLICY "Allow authenticated users to update leads"
ON leads FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete leads"
ON leads FOR DELETE
TO authenticated
USING (true);

-- Enable RLS on subscribers (if not already enabled)
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for subscribers
DROP POLICY IF EXISTS "Allow public read access for subscribers" ON subscribers;
DROP POLICY IF EXISTS "Allow authenticated users to insert subscribers" ON subscribers;
DROP POLICY IF EXISTS "Allow authenticated users to update subscribers" ON subscribers;
DROP POLICY IF EXISTS "Allow authenticated users to delete subscribers" ON subscribers;

-- Public read access for subscribers (admin only)
CREATE POLICY "Allow authenticated users to read subscribers"
ON subscribers FOR SELECT
TO authenticated
USING (true);

-- Allow public to subscribe
CREATE POLICY "Allow public to insert subscribers"
ON subscribers FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to manage subscribers
CREATE POLICY "Allow authenticated users to update subscribers"
ON subscribers FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete subscribers"
ON subscribers FOR DELETE
TO authenticated
USING (true);

-- Enable RLS on job_applications (if not already enabled)
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Drop existing policies for job_applications
DROP POLICY IF EXISTS "Allow public read access for job_applications" ON job_applications;
DROP POLICY IF EXISTS "Allow authenticated users to insert job_applications" ON job_applications;
DROP POLICY IF EXISTS "Allow authenticated users to update job_applications" ON job_applications;
DROP POLICY IF EXISTS "Allow authenticated users to delete job_applications" ON job_applications;

-- Public read access for job_applications (admin only)
CREATE POLICY "Allow authenticated users to read job_applications"
ON job_applications FOR SELECT
TO authenticated
USING (true);

-- Allow public to submit applications
CREATE POLICY "Allow public to insert job_applications"
ON job_applications FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to manage job_applications
CREATE POLICY "Allow authenticated users to update job_applications"
ON job_applications FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to delete job_applications"
ON job_applications FOR DELETE
TO authenticated
USING (true);
