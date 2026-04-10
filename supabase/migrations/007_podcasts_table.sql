-- Podcast table for Ferdsilinks
CREATE TABLE IF NOT EXISTS podcasts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  episode_number INTEGER,
  season_number INTEGER,
  duration TEXT,
  audio_url TEXT,
  cover_image TEXT,
  guest_name TEXT,
  guest_role TEXT,
  guest_bio TEXT,
  guest_image TEXT,
  published_date TIMESTAMPTZ,
  category TEXT,
  tags TEXT[],
  featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_podcasts_status ON podcasts(status);
CREATE INDEX IF NOT EXISTS idx_podcasts_slug ON podcasts(slug);
CREATE INDEX IF NOT EXISTS idx_podcasts_featured ON podcasts(featured);
CREATE INDEX IF NOT EXISTS idx_podcasts_published ON podcasts(published_date);

ALTER TABLE podcasts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published podcasts" ON podcasts FOR SELECT TO anon USING (status = 'published');
CREATE POLICY "Service role can manage podcasts" ON podcasts FOR ALL TO service_role USING (true);
