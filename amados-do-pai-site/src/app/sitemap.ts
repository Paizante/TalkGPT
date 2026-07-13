import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/quem-somos',
  '/como-acolhemos',
  '/rotina-e-abordagem',
  '/atividades',
  '/estrutura-e-ambientes',
  '/equipe-e-diferenciais',
  '/como-ajudar',
  '/contato',
  '/perguntas-frequentes',
  '/politica-de-privacidade',
  '/termos-de-uso',
];

// Domínio ainda não definido (ver CONTENT_VALIDATION.md). Configure
// NEXT_PUBLIC_SITE_URL antes de publicar para gerar URLs absolutas corretas.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
