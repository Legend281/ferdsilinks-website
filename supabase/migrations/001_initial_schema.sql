-- Ferdsilinks Website Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- LEADS TABLE (Contact form & Quote requests)
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service_interest VARCHAR(100),
  message TEXT NOT NULL,
  source VARCHAR(100) DEFAULT 'website',
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Public can insert, only auth users can read/update
CREATE POLICY "Anyone can create leads" ON leads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anyone can view leads" ON leads FOR SELECT TO anon USING (true);
CREATE POLICY "Service role can update leads" ON leads FOR UPDATE TO service_role USING (true);

-- ============================================
-- SUBSCRIBERS TABLE (Newsletter)
-- ============================================
CREATE TABLE IF NOT EXISTS subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  source VARCHAR(100) DEFAULT 'website',
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for subscribers
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe" ON subscribers FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anyone can view active subscribers" ON subscribers FOR SELECT TO anon USING (status = 'active');
CREATE POLICY "Service role can manage subscribers" ON subscribers FOR ALL TO service_role USING (true);

-- ============================================
-- JOB LISTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS job_listings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  department VARCHAR(100),
  location VARCHAR(255) DEFAULT 'Buea, Cameroon',
  type VARCHAR(50) DEFAULT 'full-time' CHECK (type IN ('full-time', 'part-time', 'contract', 'internship')),
  remote BOOLEAN DEFAULT false,
  description TEXT NOT NULL,
  requirements JSONB DEFAULT '[]',
  responsibilities JSONB DEFAULT '[]',
  salary_range VARCHAR(100),
  status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for job_listings
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published jobs" ON job_listings FOR SELECT TO anon USING (status = 'published');
CREATE POLICY "Service role can manage jobs" ON job_listings FOR ALL TO service_role USING (true);

-- ============================================
-- JOB APPLICATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  job_id UUID REFERENCES job_listings(id) ON DELETE SET NULL,
  job_title VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  linkedin_url TEXT,
  portfolio_url TEXT,
  cover_letter TEXT NOT NULL,
  resume_url TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interview', 'rejected', 'accepted')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for job_applications
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can apply" ON job_applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anyone can view their own application" ON job_applications FOR SELECT TO anon USING (true);
CREATE POLICY "Service role can manage applications" ON job_applications FOR ALL TO service_role USING (true);

-- ============================================
-- ENROLLMENTS TABLE (Course enrollments)
-- ============================================
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  course_id VARCHAR(100) NOT NULL,
  course_title VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  education_level VARCHAR(100),
  experience_level VARCHAR(100),
  motivation TEXT,
  payment_method VARCHAR(100),
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for enrollments
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can enroll" ON enrollments FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Service role can manage enrollments" ON enrollments FOR ALL TO service_role USING (true);

-- ============================================
-- BLOG POSTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  author_id UUID REFERENCES auth.users(id),
  author_name VARCHAR(255),
  category VARCHAR(100),
  tags JSONB DEFAULT '[]',
  status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for blog_posts
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published posts" ON blog_posts FOR SELECT TO anon USING (status = 'published');
CREATE POLICY "Service role can manage posts" ON blog_posts FOR ALL TO service_role USING (true);

-- ============================================
-- TEAM MEMBERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS team_members (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  department VARCHAR(100),
  bio TEXT,
  image_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  email VARCHAR(255),
  "order" INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS for team_members
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active team members" ON team_members FOR SELECT TO anon USING (status = 'active');
CREATE POLICY "Service role can manage team members" ON team_members FOR ALL TO service_role USING (true);

-- ============================================
-- STORAGE BUCKETS
-- ============================================
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('blog-images', 'blog-images', true),
  ('team-photos', 'team-photos', true),
  ('portfolio', 'portfolio', true),
  ('resumes', 'resumes', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Anyone can view blog images" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'blog-images');
CREATE POLICY "Service role can upload blog images" ON storage.objects FOR ALL TO service_role USING (bucket_id = 'blog-images');

CREATE POLICY "Anyone can view team photos" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'team-photos');
CREATE POLICY "Service role can upload team photos" ON storage.objects FOR ALL TO service_role USING (bucket_id = 'team-photos');

CREATE POLICY "Anyone can view portfolio" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'portfolio');
CREATE POLICY "Service role can manage portfolio" ON storage.objects FOR ALL TO service_role USING (bucket_id = 'portfolio');

CREATE POLICY "Anyone can upload resumes" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'resumes');
CREATE POLICY "Service role can manage resumes" ON storage.objects FOR ALL TO service_role USING (bucket_id = 'resumes');

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON leads FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_job_applications_updated_at BEFORE UPDATE ON job_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON enrollments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
