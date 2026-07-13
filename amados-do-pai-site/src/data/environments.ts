import { IconName } from '@/components/ui/Icon';

export interface EnvironmentItem {
  icon: IconName;
  title: string;
  text: string;
  placeholder: string;
}

/**
 * Ambientes descritos em termos gerais. Fotografias oficiais ainda não
 * fornecidas — usar os placeholders documentados em public/placeholders/README.md
 * até a substituição por fotos reais da sede.
 */
export const environments: EnvironmentItem[] = [
  { icon: 'bed', title: 'Dormitórios', text: 'Espaços organizados pensados para descanso e privacidade.', placeholder: 'dormitorios' },
  { icon: 'tree', title: 'Áreas Verdes', text: 'Jardins e espaços ao ar livre que favorecem contato com a natureza.', placeholder: 'areas-verdes' },
  { icon: 'chat', title: 'Salas de Atendimento', text: 'Ambientes reservados para conversas individuais e em grupo.', placeholder: 'salas-atendimento' },
  { icon: 'people', title: 'Convivência', text: 'Espaços de convívio que fortalecem vínculos e apoio mútuo.', placeholder: 'convivencia' },
  { icon: 'utensils', title: 'Refeitório', text: 'Espaço para refeições, promovendo cuidado e bem-estar.', placeholder: 'refeitorio' },
  { icon: 'tools', title: 'Oficinas e Atividades', text: 'Ambientes equipados para atividades práticas e de capacitação.', placeholder: 'oficinas' },
];
