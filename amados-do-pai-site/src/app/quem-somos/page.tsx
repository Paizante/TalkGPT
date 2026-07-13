import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import PageHero from '@/components/sections/PageHero';
import PillarsGrid from '@/components/sections/PillarsGrid';
import CTASection from '@/components/sections/CTASection';
import MapLocation from '@/components/sections/MapLocation';
import Icon from '@/components/ui/Icon';
import { identityPillars } from '@/data/values';
import { timeline } from '@/data/timeline';
import { organization } from '@/content/site';

export const metadata: Metadata = {
  title: 'Quem Somos',
  description:
    'Conheça a identidade, a missão e a trajetória institucional da Associação Amados do Pai, em Ravena, Sabará/MG.',
  alternates: { canonical: '/quem-somos' },
};

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/quem-somos', label: 'Quem Somos' }]}
        eyebrow="A Associação"
        title="Quem Somos"
        description="Uma comunidade terapêutica com propósito, atuação institucional e compromisso com a dignidade humana."
        imageIcon="people"
        imageLabel="Fotografia oficial em preparação"
      />

      <PillarsGrid items={identityPillars} tone="light" />

      <section className="bg-ivory py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Nossa História</p>
            <h2 className="mt-3 text-3xl font-semibold text-evergreen sm:text-4xl">
              Uma associação construída para acolher
            </h2>
            <p className="mt-4 leading-relaxed text-warm-gray">
              A {organization.legalName} é uma {organization.legalNature.toLowerCase()}, constituída em{' '}
              {organization.foundedLabel} e sediada em Ravena, no Município de Sabará/MG. {organization.recognition}
            </p>
            <p className="mt-4 leading-relaxed text-warm-gray">{organization.activity}</p>
          </div>
          <MapLocation />
        </Container>
      </section>

      <section className="bg-beige/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Nossa Trajetória</p>
            <h2 className="mt-3 text-3xl font-semibold text-evergreen sm:text-4xl">Cada passo com propósito</h2>
          </div>
          <ol className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
            {timeline.map((entry) => (
              <li key={entry.year} className="rounded-2xl bg-white/70 p-6 text-center shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-evergreen text-ivory mx-auto">
                  <Icon name="sun" className="h-5 w-5" />
                </span>
                <p className="mt-3 font-display text-2xl font-semibold text-evergreen">{entry.year}</p>
                <h3 className="mt-1 text-sm font-semibold text-mid-green">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">{entry.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <div className="flex justify-center bg-ivory pb-16 pt-4">
        <Button href="/equipe-e-diferenciais" variant="primary">
          Conheça nossa equipe e diferenciais
        </Button>
      </div>

      <CTASection
        title="Faça parte desta missão"
        text="Juntos, podemos oferecer acolhimento, cuidado e esperança para quem mais precisa."
        primaryHref="/como-ajudar"
        primaryLabel="Como Ajudar"
        secondaryHref="/contato"
        secondaryLabel="Fale Conosco"
      />
    </>
  );
}
