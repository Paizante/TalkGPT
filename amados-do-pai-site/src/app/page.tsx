import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import HomeHero from '@/components/sections/HomeHero';
import PillarsGrid from '@/components/sections/PillarsGrid';
import StepsTimeline from '@/components/sections/StepsTimeline';
import CardGrid from '@/components/sections/CardGrid';
import CTASection from '@/components/sections/CTASection';
import InstagramSection from '@/components/instagram/InstagramSection';
import { pillars } from '@/data/pillars';
import { journeySteps } from '@/data/journey';
import { activityCategories } from '@/data/activities';
import { organization } from '@/content/site';

export const metadata: Metadata = {
  title: 'Início',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PillarsGrid items={pillars} />

      <section className="bg-ivory py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Sobre Nós</p>
            <h2 className="mt-3 text-3xl font-semibold text-evergreen sm:text-4xl">
              Uma comunidade terapêutica com propósito
            </h2>
            <p className="mt-4 leading-relaxed text-warm-gray">
              A {organization.legalName} é uma {organization.legalNature.toLowerCase()}, constituída em{' '}
              {organization.foundedLabel} e sediada em Ravena, no Município de Sabará/MG. {organization.recognition}
            </p>
            <Button href="/quem-somos" variant="primary" className="mt-6">
              Conheça nossa história
            </Button>
          </div>
        </Container>
      </section>

      <StepsTimeline
        eyebrow="Como Acolhemos"
        title="Um caminho de cuidado e transformação"
        intro="As etapas, os critérios e a disponibilidade devem ser confirmados diretamente com a equipe."
        steps={journeySteps.slice(0, 4)}
        notice="Quer conhecer o caminho completo de acolhimento?"
      />
      <div className="-mt-10 flex justify-center pb-16">
        <Button href="/como-acolhemos" variant="primary">
          Ver todas as etapas
        </Button>
      </div>

      <CardGrid
        eyebrow="Atividades que transformam"
        title="Cuidado que vai além do acolhimento"
        intro="Práticas que promovem autonomia, convivência e esperança para um novo começo."
        items={activityCategories.slice(0, 4)}
      />

      <InstagramSection />

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
