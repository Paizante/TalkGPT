import { Pillar } from '@/types/content';

/**
 * Missão, visão e valores propostos institucionalmente. Pendentes de
 * ratificação formal pela direção da Associação — ver CONTENT_VALIDATION.md.
 */
export const mission =
  'Promover acolhimento, dignidade, fortalecimento humano e novos caminhos, respeitando a singularidade de cada pessoa.';

export const vision =
  'Ser reconhecida por uma atuação responsável, humana, transparente e comprometida com a reconstrução de trajetórias.';

export const values = [
  'Acolhimento',
  'Dignidade',
  'Respeito',
  'Responsabilidade',
  'Esperança',
  'Transparência',
  'Comunidade',
  'Proteção de direitos',
];

export const identityPillars: Pillar[] = [
  { icon: 'hands', title: 'Nossa Missão', text: mission },
  { icon: 'sun', title: 'Nossa Visão', text: vision },
  {
    icon: 'sprout',
    title: 'Nossos Valores',
    text: 'Acolhimento, respeito, esperança, responsabilidade, transparência e solidariedade.',
  },
  {
    icon: 'people',
    title: 'Nossa Essência',
    text: 'Acreditamos que cada vida tem valor e pode recomeçar.',
  },
];
