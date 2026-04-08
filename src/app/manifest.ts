import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ferdsilinks Group',
    short_name: 'Ferdsilinks',
    description: 'A tech and data-focused company based in Silicon Mountain, Cameroon, driving African innovation through data and applied tech solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000a1e',
    theme_color: '#cf7000',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  };
}
