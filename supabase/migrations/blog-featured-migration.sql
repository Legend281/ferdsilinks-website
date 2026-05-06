-- Add featured column to blog_posts table
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT FALSE;

-- Add RLS policies if needed
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read
DROP POLICY IF EXISTS "Public select blog_posts" ON blog_posts;
CREATE POLICY "Public select blog_posts" ON blog_posts FOR SELECT TO anon USING (true);