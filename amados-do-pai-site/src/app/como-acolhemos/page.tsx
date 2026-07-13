import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import PillarsGrid from '@/components/sections/PillarsGrid';
import StepsTimeline from '@/components/sections/StepsTimeline';
import CTASection from '@/components/sections/CTASection';
import { pillars } from '@/data/pillars';
import { journeySteps } from '@/data/journey';

export const metadata: Metadata = {
  title: 'Como Acolhemos',
  description:
    'Entenda o caminho institucional de acolhimento da Associação Amados do Pai, com respeito, cuidado e responsabilidade.',
  alternates: { canonical: '/como-acolhemos' },
};

export default function ComoAcolhemosPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/como-acolhemos', label: 'Como Acolhemos' }]}
        title="Como acolhemos e caminhamos junto"
        description="Um caminho de cuidado, respeito e esperança para quem busca recomeçar."
        imageIcon="hands"
        imageLabel="Fotografia oficial em preparação"
      />

      <PillarsGrid items={pillars} />

      <StepsTimeline
        eyebrow="Nosso Caminho de Cuidado"
        title="Uma jornada de acolhimento e transformação"
        intro="Cada etapa é conduzida com respeito à história e ao ritmo de cada pessoa."
        steps={journeySteps}
        notice="As etapas, os critérios e a disponibilidade devem ser confirmados diretamente com a equipe da Associação Amados do Pai. Nenhuma etapa aqui descrita garante vaga, prazo ou resultado."
      />

      <CTASection
        title="Quer saber mais ou conversar?"
        text="Estamos aqui para ouvir e caminhar ao seu lado."
        primaryHref="/contato"
        primaryLabel="Fale Conosco"
        secondaryHref="/quem-somos"
        secondaryLabel="Conheça a Associação"
      />
    </>
  );
}
