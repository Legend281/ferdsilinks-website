-- Portfolio table for Ferdsilinks
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  short_description TEXT,
  description TEXT,
  client_name TEXT,
  industry TEXT,
  cover_image TEXT,
  images TEXT[],
  technologies TEXT[],
  project_url TEXT,
  category TEXT,
  featured BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_portfolio_status ON portfolio(status);
CREATE INDEX IF NOT EXISTS idx_portfolio_slug ON portfolio(slug);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio(featured);
CREATE INDEX IF NOT EXISTS idx_portfolio_order ON portfolio(order_index);

ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active portfolio" ON portfolio FOR SELECT TO anon USING (status = 'active');
CREATE POLICY "Service role can manage portfolio" ON portfolio FOR ALL TO service_role USING (true);
