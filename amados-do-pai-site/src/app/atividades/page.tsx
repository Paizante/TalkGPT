import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CardGrid from '@/components/sections/CardGrid';
import CTASection from '@/components/sections/CTASection';
import { activityCategories } from '@/data/activities';

export const metadata: Metadata = {
  title: 'Atividades',
  description: 'Conheça os tipos de atividades terapêuticas promovidas pela Associação Amados do Pai.',
  alternates: { canonical: '/atividades' },
};

export default function AtividadesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/atividades', label: 'Atividades' }]}
        title="Atividades Terapêuticas"
        description="Caminhos de cuidado que promovem acolhimento, transformação e uma vida com propósito."
        imageIcon="music"
        imageLabel="Fotografia oficial em preparação"
      />

      <CardGrid
        eyebrow="Nossas Atividades"
        title="Cada atividade é um passo em direção à transformação"
        intro="As atividades efetivamente realizadas variam conforme a programação da Associação. Apenas atividades confirmadas pela equipe são divulgadas oficialmente."
        items={activityCategories}
      />

      <CTASection
        title="Um lugar de acolhimento, cuidado e transformação"
        text="Aqui, cada atividade é mais que uma ação — é um convite para recomeçar com dignidade e esperança."
        primaryHref="/quem-somos"
        primaryLabel="Conheça a Associação"
        secondaryHref="/como-acolhemos"
        secondaryLabel="Como Acolhemos"
      />
    </>
  );
}
