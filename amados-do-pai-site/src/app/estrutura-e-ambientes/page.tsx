import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import PillarsGrid from '@/components/sections/PillarsGrid';
import CTASection from '@/components/sections/CTASection';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { environments } from '@/data/environments';
import { pillars } from '@/data/pillars';

export const metadata: Metadata = {
  title: 'Estrutura e Ambientes',
  description: 'Conheça os ambientes da sede da Associação Amados do Pai em Ravena, Sabará/MG.',
  alternates: { canonical: '/estrutura-e-ambientes' },
};

export default function EstruturaEAmbientesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/estrutura-e-ambientes', label: 'Estrutura e Ambientes' }]}
        title="Estrutura e Ambientes"
        description="Um espaço pensado para acolher, cuidar e transformar, com estrutura planejada para bem-estar e convivência."
        imageIcon="tree"
        imageLabel="Fotografia oficial em preparação"
      />

      <PillarsGrid items={pillars} tone="light" />

      <section className="bg-ivory py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Nossos Ambientes</p>
            <h2 className="mt-3 text-3xl font-semibold text-evergreen sm:text-4xl">Conheça nossos espaços</h2>
            <p className="mt-4 text-warm-gray">
              As imagens abaixo são composições ilustrativas enquanto preparamos o registro fotográfico oficial
              da sede.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {environments.map((env) => (
              <figure key={env.title} className="overflow-hidden rounded-2xl border border-bronze/20 bg-white/60">
                <ImagePlaceholder icon={env.icon} label={env.placeholder} className="h-48 w-full rounded-none" />
                <figcaption className="p-5">
                  <h3 className="font-display text-lg font-semibold text-evergreen">{env.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">{env.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Sua ajuda transforma vidas"
        text="Juntos, podemos oferecer acolhimento, cuidado e esperança para quem mais precisa."
        primaryHref="/como-ajudar"
        primaryLabel="Como Ajudar"
        secondaryHref="/contato"
        secondaryLabel="Fale Conosco"
      />
    </>
  );
}
