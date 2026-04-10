-- Create courses table for Ferdsilinks Academy
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_description TEXT,
  description TEXT,
  cover_image TEXT,
  price DECIMAL(10, 2) DEFAULT 0,
  currency TEXT DEFAULT 'XAF',
  duration TEXT,
  level TEXT DEFAULT 'Beginner',
  category TEXT,
  curriculum TEXT[],
  instructor_id UUID,
  instructor_name TEXT,
  max_students INTEGER,
  start_date TIMESTAMPTZ,
  end_date TIMESTAMPTZ,
  enrollment_deadline TIMESTAMPTZ,
  location TEXT,
  is_online BOOLEAN DEFAULT true,
  certificate_provided BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_courses_status ON courses(status);
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);

-- Enable RLS
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- RLS policies for courses
DROP POLICY IF EXISTS "Allow public read courses" ON courses;
DROP POLICY IF EXISTS "Allow authenticated insert courses" ON courses;
DROP POLICY IF EXISTS "Allow authenticated update courses" ON courses;
DROP POLICY IF EXISTS "Allow authenticated delete courses" ON courses;

-- Public can read published courses
CREATE POLICY "Allow public read courses"
ON courses FOR SELECT
USING (status = 'published' OR true); -- Allow all for now, can restrict later

-- Admin can manage courses
CREATE POLICY "Allow authenticated insert courses"
ON courses FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated update courses"
ON courses FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Allow authenticated delete courses"
ON courses FOR DELETE
TO authenticated
USING (true);
