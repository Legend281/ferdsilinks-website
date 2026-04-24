# Ferdsilinks Group Website - Technical Documentation

## Project Overview
**Company:** Ferdsilinks Group  
**Location:** Silicon Mountain, Buea, Cameroon  
**Type:** Corporate website with content management system and e-commerce capabilities  
**Mission:** Driving African innovation through data science, AI solutions, software development, and tech education  
**Founded:** 2019  
**Website:** https://ferdsilinks.com

---

## Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.2 | React framework for server-side rendering, API routes, and optimized builds |
| React | 19.2.4 | UI library with latest features |
| TypeScript | 5 | Type-safe development |
| Tailwind CSS | 4 | Utility-first styling |
| Supabase | 2.103.0 | Backend-as-a-service: database, auth, storage, realtime |

### Key Libraries
| Library | Purpose |
|---------|---------|
| @supabase/ssr | Server components authentication |
| @supabase/supabase-js | Browser client |
| Framer Motion | Smooth animations (FadeIn components) |
| TipTap | Rich text editor for blog admin |
| Zod | Form validation schemas |
| React Hot Toast | User notifications |
| Resend | Email delivery service |
| Lucide React | Icon library |
| clsx / tailwind-merge | Conditional class utilities |

### Why This Stack?
- **Next.js 16**: Latest app router, server actions, partial prerendering - maximum performance and SEO
- **Supabase**: Open-source Firebase alternative, perfect for African market with growing cloud presence in Africa
- **Tailwind CSS v4**: Latest version with improved performance, CSS-first configuration
- **Zod**: Schema validation catches errors at API level, not runtime
- **Resend**: Modern email API, better deliverability than传统 SMTP

**Why not other options?**
- WordPress: Security issues, slower, less scalable
- Other CMS: Limited customization for this specific use case
- Custom Express: Next.js provides same + better SEO

---

## Database Schema (Supabase)

### Tables & Purposes
```sql
leads                  -- Contact form submissions, quote requests
enrollments            -- Course enrollment data with payment status
job_applications       -- Career applications with PDF resume upload
subscribers           -- Newsletter signups with status management
courses               -- Training programs with curriculum
services              -- Company services offerings
portfolio             -- Project showcase with images
podcasts               -- YouTube podcast integration
blog_posts            -- Blog content with rich HTML
team_members          -- Leadership team with social links
job_listings          -- Open positions with metadata
page_views            -- Analytics: daily page tracking
visitor_stats        -- Analytics: daily visitor counts
site_settings         -- Admin configurable settings
```

### Row Level Security (RLS) - Security by Design
- All tables have RLS **enabled**
- Public role can INSERT (with email validation)
- Only authenticated (admin) role can SELECT/UPDATE/DELETE
- Prevents unauthorized data access

### Storage Buckets
- `portfolio` - Project images
- `resumes` - Job application CV uploads (5MB limit, PDF/Word)

---

## Features Overview

### Public Website
| Page | Features |
|------|-----------|
| Home | Hero, services overview, stats, newsletter signup, WhatsApp chat |
| About | Company story, timeline, team grid |
| Services | Service categories, features, contact CTAs |
| Training Hub | Course listings, enrollment, YouTube integration |
| Blog | Articles with rich text, featured posts, pagination |
| Podcast | YouTube embeds, modal player, episode list |
| Portfolio | Project showcase with filtering |
| Careers | Job listings, culture section, CV upload modal |
| Contact | Multi-field form, map, social links |
| Team | Leadership grid with bios |

### Admin Dashboard
| Section | Features |
|---------|----------|
| Dashboard | Stats cards, quick actions |
| Leads | Table view, search, filter, export CSV |
| Enrollments | Table view, status management |
| Applications | CV download, status pipeline |
| Courses | CRUD, curriculum builder, pricing |
| Services | CRUD, featured toggle |
| Portfolio | CRUD, links management |
| Podcasts | CRUD with YouTube URL sync |
| Blog | TipTap editor, drafts, featured toggle |
| Team | CRUD with order management |
| Jobs | CRUD with application link |
| Newsletter | Subscribers, CSV export |
| Analytics | Page views, visitor trends |
| Settings | Site preferences, email alerts |

---

## API Endpoints Architecture

### Public Form APIs (Rate Limited)
```
POST /api/contact       → Rate limited (3/min), saves to leads table, emails admin
POST /api/newsletter    → Rate limited (3/min), saves to subscribers
POST /api/enroll       → Rate limited (3/min), saves to enrollments
POST /api/apply        → Rate limited (3/min), saves with PDF upload to Supabase Storage
```

### Public Data APIs
```
GET /api/public/services   → Active services for public display
GET /api/public/courses    → Published courses
GET /api/public/portfolio  → Active projects
GET /api/public/podcasts   → Published episodes
GET /api/public/blog      → Published posts
```

### Private Admin APIs
```
CRUD for all entities via /api/admin/*
- /api/admin/services, /api/admin/courses, etc.
- Authentication via Supabase auth session
```

### Analytics APIs
```
POST /api/analytics/track   → Records page view
GET  /api/analytics/stats  → Returns visitor data
```

---

## Security Implementation

### 1. Rate Limiting (Per-IP)
```typescript
// 3 requests per minute per IP on forms
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 1000;
```

### 2. Security Headers (next.config.ts)
- X-Frame-Options: DENY
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options

### 3. Supabase RLS Policies
- Email format validation on public inserts
- Service role bypass for admin operations only
- No direct client access to sensitive operations

### 4. Input Validation (Zod Schemas)
```typescript
// Example: Contact form validation
email: z.string().email('Please enter a valid email address')
message: z.string().min(10).max(5000)
```

### 5. Middleware Protection
- Directory traversal prevention
- Security headers injection

---

## Key Feature Implementations

### 1. Podcast System
- **Database**: Stores episode metadata in Supabase
- **Player**: YouTube embed via iframe API
- **Modal**: Custom modal with keyboard controls
- **Admin**: Add episodes with YouTube URL, auto-fetches thumbnail

### 2. Blog System (TipTap Editor)
- **Rich Text**: Bold, italic, headings, lists, blockquotes
- **Features**: Featured toggle for homepage hero
- **Pagination**: 6 posts per page with pagination controls

### 3. Career Application with PDF Upload
- **Frontend**: File input with validation (PDF/Word, 5MB)
- **Storage**: Supabase.Storage with `resumes` bucket
- **Admin**: Download/view button in applications table

### 4. Email Notifications (Resend)
- **HTML Templates**: Professional branded templates
- **Notifications**: Contact, Quote, Enrollment, Newsletter, Application
- **Subscriber Welcome**: Automated welcome email on signup

### 5. Translation System
- **Implementation**: React Context + EN/FR translation files
- **Toggle**: Brand-styled floating button in header
- **Coverage**: All labeled UI text translatable

### 6. Analytics (TrackVisitor)
- **Component**: Client-side page tracking on mount
- **Storage**: page_views and visitor_stats tables
- **Admin**: Dashboard stats card

---

## Growth Roadmap

### Phase 1: MVP (Current) ✅
- Corporate website with CMS
- Admin dashboard
- Form submissions
- Email notifications
- Analytics

### Phase 2: Enhanced UX (Near Term)
- [ ] Dynamic services page (currently static for SEO)
- [ ] User accounts with dashboard
- [ ] Course progress tracking
- [ ] Wishlist/favorites

### Phase 3: Revenue Features
- [ ] MoMo payment integration (MTN Cameroon)
- [ ] Service quotes workflow
- [ ] Course purchases
- [ ] Subscription for premium content

### Phase 4: Scale Features
- [ ] Multi-language expansion
- [ ] AI chatbot support
- [ ] Mobile app (React Native)
- [ ] WhatsApp Business bot
- [ ] Partner portal

---

## Project Structure
```
src/
├── app/
│   ├── (main)/              # Route group for public pages
│   │   ├── page.tsx          # Home
│   │   ├── about/
│   │   ├── services/
│   │   ├── training/
│   │   ├── blog/
│   │   ├── podcast/
│   │   ├── portfolio/
│   │   ├── careers/
│   │   ├── contact/
│   │   └── team/
│   ├── admin/               # Admin dashboard
│   │   ├── (auth)/         # Login
│   │   └── (protected)/    # Protected routes
│   ├── api/                # API routes
│   │   ├── admin/
│   │   ├── public/
│   │   └── analytics/
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Tailwind + custom
├── components/
│   ├── admin/              # Admin components
│   │   ├── AdminSidebar
│   │   ├── AdminHeader
│   │   ├── Pagination
│   │   ├── RichTextEditor
│   │   └── ImageUpload
│   ├── layout/             # Layout components
│   │   ├── Header
│   │   └── Footer
│   ├── FadeIn              # Animation wrapper
│   ├── LanguageProvider   # Translation context
│   └── TrackVisitor        # Analytics component
├── lib/
│   ├── translations/
│   │   ├── en.ts          # English translations
│   │   └── fr.ts           # French translations
│   ├── supabase/
│   │   ├── supabase-browser-client.ts
│   │   └── supabase-server-client.ts
│   ├── email.ts            # Resend integration
│   ├── validation.ts      # Zod schemas
│   ├── security.ts        # Security utilities
│   └── translations.ts     # Translation utilities
└── types/
    └── database.ts         # Supabase type definitions
```

---

## Deployment

### Environment Variables Required
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_SITE_URL=https://ferdsilinks.com
```

### Platform Recommendations
- **Frontend**: Vercel (optimal Next.js hosting)
- **Database**: Supabase Cloud (free tier available)
- **Email**: Resend (free tier: 3,000 emails/month)
- **CDN**: Built into Vercel/Supabase

---

## Impact Assessment

### Current State
- Fully functional corporate website
- Admin CMS for content management
- Working forms with email notifications
- Analytics tracking

### Business Value
- **Lead Generation**: Contact forms capture interested clients
- **Recruitment**: Easy job application process
- **Education**: Course enrollment system
- **Brand**: Professional web presence for Silicon Mountain tech company

### Growth Readiness
- **Scalable**: Supabase handles growth, easy to upgrade
- **Payment-Ready**: Architecture supports MoMo integration
- **Multi-language**: Foundation for more languages
- **Mobile**: Responsive design works on all devices

---

## Summary

This is a **modern, full-stack web application** built with:
- Next.js 16 (latest) for performance and SEO
- Supabase for complete backend (DB, Auth, Storage, Realtime)
- Tailwind CSS v4 for efficient styling
- Enterprise security (headers, RLS, validation)
- Professional design system

The architecture clearly supports **significant growth** from corporate website to:
- Learning management system (LMS)
- E-commerce with MoMo payments
- Member portal with accounts
- Partner network

Built specifically to serve the **Cameroon and African market** with local payment integration (MoMo) and bilingual support (English/French).

---

*Generated: April 2026*
*Last Updated: April 2026*