-- Add YouTube columns and fix RLS policies for podcasts table

-- Add YouTube columns if they don't exist
ALTER TABLE podcasts ADD COLUMN IF NOT EXISTS youtube_url TEXT;
ALTER TABLE podcasts ADD COLUMN IF NOT EXISTS video_id TEXT;

-- Enable RLS if not already enabled
ALTER TABLE podcasts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies that might be blocking inserts
DROP POLICY IF EXISTS "Allow public insert" ON podcasts;
DROP POLICY IF EXISTS "Allow authenticated insert" ON podcasts;
DROP POLICY IF EXISTS "Allow service role insert" ON podcasts;

-- Create proper insert policy
CREATE POLICY "Allow authenticated inserts" ON podcasts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Allow anon inserts" ON podcasts FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public select" ON podcasts FOR SELECT TO anon USING (true);
CREATE POLICY "Allow authenticated select" ON podcasts FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated update" ON podcasts FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Allow authenticated delete" ON podcasts FOR DELETE TO authenticated USING (true);