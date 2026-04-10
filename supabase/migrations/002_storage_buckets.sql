-- Create storage buckets for Ferdsilinks
-- Run this in Supabase Dashboard > SQL Editor

-- Enable storage
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-covers', 'blog-covers', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public)
VALUES ('team-photos', 'team-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for public read access (drop existing first, then create)
DROP POLICY IF EXISTS "Public read access for blog covers" ON storage.objects;
CREATE POLICY "Public read access for blog covers"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-covers');

DROP POLICY IF EXISTS "Public read access for team photos" ON storage.objects;
CREATE POLICY "Public read access for team photos"
ON storage.objects FOR SELECT
USING (bucket_id = 'team-photos');

-- Storage policies for authenticated users (admin) to upload
DROP POLICY IF EXISTS "Admin upload blog covers" ON storage.objects;
CREATE POLICY "Admin upload blog covers"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-covers');

DROP POLICY IF EXISTS "Admin upload team photos" ON storage.objects;
CREATE POLICY "Admin upload team photos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'team-photos');

-- Allow admins to update/delete their uploads
DROP POLICY IF EXISTS "Admin update blog covers" ON storage.objects;
CREATE POLICY "Admin update blog covers"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-covers');

DROP POLICY IF EXISTS "Admin update team photos" ON storage.objects;
CREATE POLICY "Admin update team photos"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'team-photos');

DROP POLICY IF EXISTS "Admin delete blog covers" ON storage.objects;
CREATE POLICY "Admin delete blog covers"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-covers');

DROP POLICY IF EXISTS "Admin delete team photos" ON storage.objects;
CREATE POLICY "Admin delete team photos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'team-photos');
