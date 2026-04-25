-- Site Settings Table for Ferdsilinks Website
-- Run this in Supabase Dashboard → SQL Editor

-- Site Settings Table
CREATE TABLE IF NOT EXISTS site_settings (
  id INT PRIMARY KEY DEFAULT 1,
  site_name VARCHAR(255) DEFAULT 'Ferdsilinks',
  site_description TEXT,
  contact_email VARCHAR(255),
  phone VARCHAR(100),
  address TEXT,
  social_links JSONB DEFAULT '{"linkedin": "", "twitter": "", "facebook": "", "instagram": ""}',
  notification_preferences JSONB DEFAULT '{"new_lead": true, "new_application": true, "new_enrollment": true, "newsletter_signup": false}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default settings
INSERT INTO site_settings (id, site_name, site_description, contact_email, phone, address)
VALUES (1, 'Ferdsilinks', 'Innovation & Digital Architecture', 'contact@ferdsilinks.com', '+237 676 817 339', 'Silicon Mountain, Buea, Cameroon')
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to read
CREATE POLICY "Authenticated users can read settings" ON site_settings FOR SELECT TO authenticated USING (true);

-- Allow authenticated users to update
CREATE POLICY "Authenticated users can update settings" ON site_settings FOR UPDATE TO authenticated USING (true);

-- Allow service role full access
CREATE POLICY "Service role full access" ON site_settings FOR ALL TO service_role USING (true);