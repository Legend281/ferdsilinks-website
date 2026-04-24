-- Storage policies for resumes bucket
-- Run this in Supabase SQL Editor

-- Make bucket public readable
UPDATE storage.buckets SET public = true WHERE id = 'resumes';

-- Allow anyone to view resumes (public access)
CREATE POLICY "Public can view resumes"
ON storage.objects FOR SELECT
TO anon
USING (bucket_id = 'resumes')
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload
CREATE POLICY "Authenticated can upload resumes"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'resumes')
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to delete
CREATE POLICY "Authenticated can delete resumes"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'resumes')
ON CONFLICT (id) DO NOTHING;

-- Allow service role full access
CREATE POLICY "Service can manage resumes"
ON storage.objects FOR ALL
TO service_role
USING (bucket_id = 'resumes')
ON CONFLICT (id) DO NOTHING;