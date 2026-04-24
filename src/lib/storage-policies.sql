-- Run this in Supabase SQL Editor (one at a time)

-- Make bucket public
UPDATE storage.buckets SET public = true WHERE id = 'resumes';

-- View policy
DROP POLICY IF EXISTS "Anyone can view resumes" ON storage.objects;
CREATE POLICY "Anyone can view resumes" ON storage.objects FOR SELECT TO anon USING (bucket_id = 'resumes');

-- Upload policy  
DROP POLICY IF EXISTS "Anyone can upload resumes" ON storage.objects;
CREATE POLICY "Anyone can upload resumes" ON storage.objects FOR INSERT TO anon WITH CHECK (bucket_id = 'resumes');