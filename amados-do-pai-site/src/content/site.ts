/**
 * Fonte única de dados institucionais da Associação Amados do Pai.
 * Apenas informações confirmadas no briefing do projeto. Campos pendentes
 * ficam `null` e os componentes devem ocultar-se graciosamente quando ausentes
 * (ver CONTENT_VALIDATION.md para a lista de pendências).
 */

export const organization = {
  legalName: 'Associação Amados do Pai',
  tradeName: 'Grupo Amados do Pai',
  brandName: 'AMADOS DO PAI',
  signature: 'Associação e Comunidade Terapêutica',
  slogan: 'Um lugar para recomeçar',
  cnpj: '22.693.320/0001-07',
  legalNature: 'Associação privada sem fins lucrativos',
  foundedAt: '2015-06-01',
  foundedLabel: '1º de junho de 2015',
  recognition:
    'Entidade reconhecida como de utilidade pública municipal por meio da Lei Municipal nº 3.206/2025 do Município de Sabará/MG.',
  activity:
    'Atividades de assistência psicossocial e à saúde destinadas a pessoas com transtornos psíquicos, deficiência mental, dependência química e grupos similares.',
} as const;

export const address = {
  street: 'Rua Lava Pés, nº 359',
  neighborhood: 'Ravena',
  city: 'Sabará',
  state: 'MG',
  zip: '34516-427',
  full: 'Rua Lava Pés, nº 359, Ravena, Sabará/MG, CEP 34516-427',
  region: 'Ravena, Sabará/MG',
} as const;

export const contact = {
  phoneDisplay: '(31) 98879-6071',
  phoneE164: '+5531988796071',
  whatsappNumber: '5531988796071',
  whatsappUrl: (message?: string) =>
    `https://wa.me/5531988796071${message ? `?text=${encodeURIComponent(message)}` : ''}`,
  // Pendente de confirmação institucional — mantenha `null` até ser validado.
  email: null as string | null,
  hours: null as string | null,
  pixKey: null as string | null,
} as const;

export const social = {
  // Pendente de confirmação — defina NEXT_PUBLIC_INSTAGRAM_URL quando o
  // perfil oficial for confirmado (ver .env.example e CONTENT_VALIDATION.md).
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || null,
  instagramUsername: process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || null,
} as const;

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/quem-somos', label: 'A Associação' },
  { href: '/como-acolhemos', label: 'Como Acolhemos' },
  { href: '/atividades', label: 'Atividades' },
  { href: '/como-ajudar', label: 'Como Ajudar' },
  { href: '/contato', label: 'Contato' },
] as const;

export const footerColumns = [
  {
    title: 'A Associação',
    links: [
      { href: '/quem-somos', label: 'Quem Somos' },
      { href: '/equipe-e-diferenciais', label: 'Equipe e Diferenciais' },
      { href: '/estrutura-e-ambientes', label: 'Estrutura e Ambientes' },
    ],
  },
  {
    title: 'Comunidade Terapêutica',
    links: [
      { href: '/como-acolhemos', label: 'Como Acolhemos' },
      { href: '/rotina-e-abordagem', label: 'Rotina e Abordagem' },
      { href: '/atividades', label: 'Atividades' },
    ],
  },
  {
    title: 'Participe',
    links: [
      { href: '/como-ajudar', label: 'Como Ajudar' },
      { href: '/contato', label: 'Contato e Visitas' },
      { href: '/perguntas-frequentes', label: 'Perguntas Frequentes' },
    ],
  },
] as const;

export const legalLinks = [
  { href: '/politica-de-privacidade', label: 'Política de Privacidade' },
  { href: '/termos-de-uso', label: 'Termos de Uso' },
] as const;

export const siteConfig = {
  name: `${organization.brandName} | ${organization.signature}`,
  domain: null as string | null,
  defaultTitle: 'Associação Amados do Pai | Comunidade Terapêutica em Ravena',
  defaultDescription:
    'Conheça a Associação Amados do Pai, entidade sediada em Ravena, Sabará/MG, dedicada ao acolhimento, à assistência psicossocial, à dignidade e à construção de novos caminhos.',
  locale: 'pt_BR',
} as const;
