import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import CardGrid from '@/components/sections/CardGrid';
import CTASection from '@/components/sections/CTASection';
import Container from '@/components/ui/Container';
import { routineConcepts } from '@/data/routine';

export const metadata: Metadata = {
  title: 'Rotina e Abordagem',
  description: 'Conheça os conceitos gerais de rotina e abordagem institucional da Associação Amados do Pai.',
  alternates: { canonical: '/rotina-e-abordagem' },
};

export default function RotinaEAbordagemPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/rotina-e-abordagem', label: 'Rotina e Abordagem' }]}
        title="Rotina e Abordagem"
        description="Uma rotina estruturada com propósito, cuidado e respeito à história de cada pessoa."
        imageIcon="sun"
        imageLabel="Fotografia oficial em preparação"
      />

      <CardGrid
        eyebrow="Nossa Rotina"
        title="Conceitos que orientam o dia a dia"
        intro="A programação pode variar conforme as necessidades e orientações da instituição. Horários e cronogramas detalhados devem ser confirmados diretamente com a equipe."
        items={routineConcepts}
      />

      <section className="bg-beige/40 py-12">
        <Container>
          <p className="mx-auto max-w-2xl rounded-xl border border-bronze/30 bg-white/70 p-6 text-center text-sm leading-relaxed text-warm-gray">
            A rotina institucional combina acolhimento, atividades, convivência e momentos de reflexão, sempre
            com respeito, responsabilidade e dignidade. Nenhum horário fixo ou cronograma detalhado é
            garantido nesta página — fale com a equipe para informações atualizadas.
          </p>
        </Container>
      </section>

      <CTASection
        title="Quer saber mais sobre como acolhemos?"
        text="Fale com nossa equipe e conheça de perto nossa rotina e abordagem."
        primaryHref="/contato"
        primaryLabel="Fale Conosco"
        secondaryHref="/como-acolhemos"
        secondaryLabel="Como Acolhemos"
      />
    </>
  );
}
