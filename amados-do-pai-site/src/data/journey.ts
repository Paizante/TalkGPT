import { Step } from '@/types/content';

/**
 * Etapas gerais de acolhimento. Disponibilidade, critérios e duração devem
 * ser confirmados diretamente com a equipe — ver aviso exibido junto ao
 * componente que consome esta lista.
 */
export const journeySteps: Step[] = [
  { icon: 'chat', title: 'Primeiro contato', text: 'Escuta acolhedora para entender cada história com respeito e empatia.' },
  { icon: 'hands', title: 'Orientação inicial', text: 'Explicamos como funciona a Associação e tiramos as primeiras dúvidas.' },
  { icon: 'people', title: 'Compreensão da situação', text: 'Buscamos entender o contexto e as necessidades de quem procura ajuda.' },
  { icon: 'compass', title: 'Análise institucional', text: 'Avaliação da possibilidade de acolhimento conforme a disponibilidade da Associação.' },
  { icon: 'sun', title: 'Acolhimento, quando possível', text: 'Recepção com cuidado, respeito e atenção à dignidade de cada pessoa.' },
  { icon: 'sprout', title: 'Participação na rotina', text: 'Integração gradual às atividades e à convivência comunitária.' },
  { icon: 'heart', title: 'Desenvolvimento da autonomia', text: 'Estímulo à responsabilidade, aos vínculos e a hábitos saudáveis.' },
  { icon: 'arrowRight', title: 'Preparação para novos caminhos', text: 'Construção gradual de uma trajetória com mais dignidade e esperança.' },
];
