-- Create storage bucket for resumes
-- Run this in Supabase SQL Editor

-- Create resumes bucket (if not exists)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed MIME types)
VALUES ('resumes', 'resumes', true, 5242880, ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
ON CONFLICT (id) DO NOTHING;

-- Allow public to upload resumes
CREATE POLICY "Public can upload resumes"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (
  bucket_id = 'resumes' 
);

-- Allow authenticated users to access resumes  
CREATE POLICY "Anyone can view resumes"
ON storage.objects FOR SELECT
TO anon
USING (bucket_id = 'resumes');

-- Allow authenticated to delete their own uploads
CREATE POLICY "Users can delete own resumes"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'resumes');