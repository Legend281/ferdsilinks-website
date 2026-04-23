// Security configuration
// This file should NOT be imported in client components

// Check that required environment variables are set in production
if (process.env.NODE_ENV === 'production') {
  const requiredVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
  ];

  const missing = requiredVars.filter(v => !process.env[v]);
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
  }
}

// Security headers to be applied at edge/next.config.js
export const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; img-src 'self' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
};

// API protection settings
export const apiConfig = {
  rateLimit: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 100, // per window
  },
  corsOrigins: process.env.ALLOWED_ORIGINS?.split(',') || ['https://ferdsilinks.com', 'http://localhost:3000'],
};