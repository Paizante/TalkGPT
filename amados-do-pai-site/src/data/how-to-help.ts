export interface HelpWay {
  icon: import('@/components/ui/Icon').IconName;
  title: string;
  text: string;
  cta: string;
  whatsappMessage: string;
}

export const waysToHelp: HelpWay[] = [
  {
    icon: 'hands',
    title: 'Doação',
    text: 'Sua doação ajuda a manter nossa estrutura, atividades e o cuidado diário com os acolhidos.',
    cta: 'Quero doar',
    whatsappMessage: 'Olá! Gostaria de saber como fazer uma doação para a Associação Amados do Pai.',
  },
  {
    icon: 'heart',
    title: 'Voluntariado',
    text: 'Doe seu tempo e talento e seja parte da mudança na vida de quem está recomeçando.',
    cta: 'Quero ser voluntário',
    whatsappMessage: 'Olá! Tenho interesse em ser voluntário na Associação Amados do Pai.',
  },
  {
    icon: 'handshake',
    title: 'Parcerias',
    text: 'Parcerias que somam propósitos e ampliam nosso impacto na comunidade.',
    cta: 'Seja nosso parceiro',
    whatsappMessage: 'Olá! Gostaria de propor uma parceria com a Associação Amados do Pai.',
  },
  {
    icon: 'briefcase',
    title: 'Empresas Apoiadoras',
    text: 'Empresas que apoiam transformam realidades e constroem um futuro melhor.',
    cta: 'Apoiar como empresa',
    whatsappMessage: 'Olá! Represento uma empresa interessada em apoiar a Associação Amados do Pai.',
  },
  {
    icon: 'megaphone',
    title: 'Divulgação da Causa',
    text: 'Compartilhe nossa missão e ajude a levar esperança a ainda mais pessoas.',
    cta: 'Quero divulgar',
    whatsappMessage: 'Olá! Gostaria de ajudar a divulgar a causa da Associação Amados do Pai.',
  },
];
