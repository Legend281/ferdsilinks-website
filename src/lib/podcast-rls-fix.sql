-- Fix RLS policies for podcasts table

-- Drop and recreate insert policies
DROP POLICY IF EXISTS "Allow authenticated inserts" ON podcasts;
DROP POLICY IF EXISTS "podcasts_insert_policy" ON podcasts;

-- Create insert policy that allows all inserts
CREATE POLICY "podcasts_insert_all" ON podcasts FOR INSERT TO authenticated WITH CHECK (true);

-- Make sure anon can also insert (for public form submissions)
CREATE POLICY "podcasts_insert_anon" ON podcasts FOR INSERT TO anon WITH CHECK (true);