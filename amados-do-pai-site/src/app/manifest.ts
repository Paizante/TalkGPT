import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Amados do Pai',
    description: siteConfig.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF7F1',
    theme_color: '#1F3D34',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
