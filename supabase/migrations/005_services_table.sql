-- Services table for Ferdsilinks
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_description TEXT,
  description TEXT,
  icon TEXT,
  features TEXT[],
  benefits TEXT[],
  cover_image TEXT,
  category TEXT,
  order_index INTEGER DEFAULT 0,
  highlight BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_services_status ON services(status);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(order_index);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active services" ON services FOR SELECT TO anon USING (status = 'active');
CREATE POLICY "Service role can manage services" ON services FOR ALL TO service_role USING (true);
