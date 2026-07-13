import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import Accordion from '@/components/ui/Accordion';
import CTASection from '@/components/sections/CTASection';
import { faqItems } from '@/data/faq';
import { organization } from '@/content/site';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes',
  description: 'Tire suas dúvidas sobre acolhimento, doações, voluntariado e visitas à Associação Amados do Pai.',
  alternates: { canonical: '/perguntas-frequentes' },
};

export default function PerguntasFrequentesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/perguntas-frequentes', label: 'Perguntas Frequentes' }]}
        title="Perguntas Frequentes"
        description={`Dúvidas comuns sobre a ${organization.legalName} e como buscar acolhimento ou ajudar.`}
        imageIcon="chat"
        imageLabel="Fotografia oficial em preparação"
      />

      <section className="bg-ivory py-16">
        <Container className="mx-auto max-w-2xl">
          <Accordion items={faqItems} />
        </Container>
      </section>

      <CTASection
        title="Não encontrou sua resposta?"
        text="Fale diretamente com nossa equipe pelo WhatsApp ou pelo formulário de contato."
        primaryHref="/contato"
        primaryLabel="Fale Conosco"
        secondaryHref="/quem-somos"
        secondaryLabel="Conheça a Associação"
      />
    </>
  );
}
