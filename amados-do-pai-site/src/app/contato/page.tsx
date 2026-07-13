import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import PageHero from '@/components/sections/PageHero';
import MapLocation from '@/components/sections/MapLocation';
import ContactForm from '@/components/forms/ContactForm';
import Accordion from '@/components/ui/Accordion';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { contact, organization } from '@/content/site';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = {
  title: 'Contato e Visitas',
  description: 'Fale com a Associação Amados do Pai pelo WhatsApp, telefone ou formulário e agende uma visita.',
  alternates: { canonical: '/contato' },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Início' }, { href: '/contato', label: 'Contato e Visitas' }]}
        title="Contato e Visitas"
        description="Estamos aqui para acolher você. Fale conosco, agende uma visita ou venha conhecer de perto nosso trabalho."
        imageIcon="chat"
        imageLabel="Fotografia oficial em preparação"
        actions={
          <>
            <Button href={contact.whatsappUrl('Olá! Gostaria de falar com a Associação Amados do Pai.')} variant="primary">
              Falar no WhatsApp
            </Button>
            <Button href={`tel:${contact.phoneE164}`} variant="outline">
              Ligar agora
            </Button>
          </>
        }
      />

      <section className="bg-ivory py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-evergreen">Envie uma mensagem</h2>
            <p className="mt-2 text-sm text-warm-gray">
              Preencha o formulário e nossa equipe entrará em contato o mais breve possível.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-evergreen">Fale conosco</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Icon name="whatsapp" className="mt-0.5 h-5 w-5 text-terracotta" />
                  <div>
                    <p className="font-medium text-graphite">WhatsApp</p>
                    <a href={contact.whatsappUrl()} className="text-warm-gray hover:text-evergreen">
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 text-terracotta" />
                  <div>
                    <p className="font-medium text-graphite">Telefone</p>
                    <a href={`tel:${contact.phoneE164}`} className="text-warm-gray hover:text-evergreen">
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </li>
                {contact.email && (
                  <li className="flex items-start gap-3">
                    <Icon name="mail" className="mt-0.5 h-5 w-5 text-terracotta" />
                    <div>
                      <p className="font-medium text-graphite">E-mail</p>
                      <a href={`mailto:${contact.email}`} className="text-warm-gray hover:text-evergreen">
                        {contact.email}
                      </a>
                    </div>
                  </li>
                )}
              </ul>
              <p className="mt-4 text-xs text-warm-gray">CNPJ {organization.cnpj}</p>
            </div>

            <MapLocation />
          </div>
        </Container>
      </section>

      <section className="bg-beige/40 py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-evergreen sm:text-4xl">Perguntas frequentes</h2>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <Accordion items={faqItems.slice(0, 4)} />
          </div>
          <div className="mt-8 flex justify-center">
            <Button href="/perguntas-frequentes" variant="primary">
              Ver todas as perguntas
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
