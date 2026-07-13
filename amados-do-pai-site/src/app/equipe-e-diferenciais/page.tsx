import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import CardGrid from '@/components/sections/CardGrid';
import CTASection from '@/components/sections/CTASection';
import Icon from '@/components/ui/Icon';

export const metadata: Metadata = {
  title: 'Equipe e Diferenciais',
  description: 'Conheça o compromisso institucional e os diferenciais da Associação Amados do Pai.',
  alternates: { canonical: '/equipe-e-diferenciais' },
};

const differentiators = [
  { icon: 'hands' as const, title: 'Acolhimento respeitoso', text: 'Atuação voltada à escuta e à dignidade de cada pessoa.' },
  { icon: 'heart' as const, title: 'Compromisso com a dignidade', text: 'Cuidado que preserva a individualidade e os direitos de cada acolhido.' },
  { icon: 'people' as const, title: 'Convivência comunitária', text: 'Vínculos e apoio mútuo como parte do processo de fortalecimento.' },
  { icon: 'tree' as const, title: 'Contato com a natureza', text: 'Ambiente de Ravena favorece tranquilidade e equilíbrio.' },
  { icon: 'sprout' as const, title: 'Fortalecimento humano', text: 'Ações voltadas ao desenvolvimento pessoal e à autonomia.' },
  { icon: 'sun' as const, title: 'Utilidade pública municipal', text: 'Reconhecimento institucional pela Lei Municipal nº 3.206/2025 de Sabará/MG.' },
];

export default function EquipeEDiferenciaisPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/equipe-e-diferenciais', label: 'Equipe e Diferenciais' }]}
        title="Equipe e Diferenciais"
        description="Uma equipe comprometida com o acolhimento responsável."
        imageIcon="people"
        imageLabel="Fotografia oficial em preparação"
      />

      <section className="bg-ivory py-16">
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-bronze/40 bg-beige/30 p-8 text-center">
            <Icon name="people" className="mx-auto h-8 w-8 text-terracotta" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-evergreen">
              Apresentação da equipe em preparação
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">
              Nomes, funções, formações e registros profissionais serão publicados somente após confirmação da
              direção institucional. Este espaço está pronto para receber fotografias, nomes e funções reais
              quando disponibilizados.
            </p>
          </div>
        </Container>
      </section>

      <CardGrid
        eyebrow="Diferenciais"
        title="O que orienta nossa atuação"
        items={differentiators}
        columns={3}
      />

      <CTASection
        title="Quer conhecer nosso trabalho de perto?"
        text="Fale com nossa equipe e agende uma visita à Associação Amados do Pai."
        primaryHref="/contato"
        primaryLabel="Fale Conosco"
        secondaryHref="/quem-somos"
        secondaryLabel="Conheça a Associação"
      />
    </>
  );
}
