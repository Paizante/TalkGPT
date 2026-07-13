import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import CTASection from '@/components/sections/CTASection';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { contact } from '@/content/site';
import { waysToHelp } from '@/data/how-to-help';

export const metadata: Metadata = {
  title: 'Como Ajudar',
  description: 'Conheça as formas de apoiar a Associação Amados do Pai: doação, voluntariado e parcerias.',
  alternates: { canonical: '/como-ajudar' },
};

export default function ComoAjudarPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/como-ajudar', label: 'Como Ajudar' }]}
        title="Como Ajudar"
        description="Pequenas atitudes, grandes transformações. Cada gesto de apoio fortalece nosso propósito."
        imageIcon="handshake"
        imageLabel="Fotografia oficial em preparação"
      />

      <section className="bg-ivory py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-evergreen sm:text-4xl">
              Existem muitas formas de transformar vidas
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {waysToHelp.map((way) => (
              <div key={way.title} className="rounded-2xl border border-bronze/20 bg-white/60 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-beige text-terracotta">
                  <Icon name={way.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-evergreen">{way.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">{way.text}</p>
                <Button href={contact.whatsappUrl(way.whatsappMessage)} variant="outline-accent" className="mt-4">
                  {way.cta}
                </Button>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-warm-gray">
            &ldquo;Tudo o que fazemos é movido pelo compromisso com a dignidade e com a possibilidade de novos
            começos.&rdquo;
          </p>
        </Container>
      </section>

      <CTASection
        title="Vamos juntos transformar vidas?"
        text="Cada gesto de apoio constrói um futuro com mais esperança."
        primaryHref={contact.whatsappUrl('Olá! Quero ajudar a Associação Amados do Pai.')}
        primaryLabel="Quero Ajudar"
        secondaryHref="/contato"
        secondaryLabel="Fale Conosco"
      />
    </>
  );
}
