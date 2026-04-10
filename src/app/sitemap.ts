import { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/supabase-server-client';

const BASE_URL = 'https://ferdsilinks.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/training`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/podcast`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = [];

  try {
    const supabase = await createClient();

    const [courses, blogPosts, services, portfolioItems, podcasts] = await Promise.all([
      supabase.from('courses').select('slug, updated_at').eq('status', 'published'),
      supabase.from('blog_posts').select('slug, updated_at').eq('status', 'published'),
      supabase.from('services').select('slug, updated_at').eq('status', 'active'),
      supabase.from('portfolio').select('slug, updated_at').eq('status', 'active'),
      supabase.from('podcasts').select('slug, updated_at').eq('status', 'published'),
    ]);

    if (courses.data) {
      dynamicRoutes.push(
        ...courses.data.map((item) => ({
          url: `${BASE_URL}/training/${item.slug}`,
          lastModified: new Date(item.updated_at),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        }))
      );
    }

    if (blogPosts.data) {
      dynamicRoutes.push(
        ...blogPosts.data.map((item) => ({
          url: `${BASE_URL}/blog/${item.slug}`,
          lastModified: new Date(item.updated_at),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      );
    }

    if (services.data) {
      dynamicRoutes.push(
        ...services.data.map((item) => ({
          url: `${BASE_URL}/services/${item.slug}`,
          lastModified: new Date(item.updated_at),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      );
    }

    if (portfolioItems.data) {
      dynamicRoutes.push(
        ...portfolioItems.data.map((item) => ({
          url: `${BASE_URL}/portfolio/${item.slug}`,
          lastModified: new Date(item.updated_at),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      );
    }

    if (podcasts.data) {
      dynamicRoutes.push(
        ...podcasts.data.map((item) => ({
          url: `${BASE_URL}/podcast/${item.slug}`,
          lastModified: new Date(item.updated_at),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
      );
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  return [...staticPages, ...dynamicRoutes];
}
