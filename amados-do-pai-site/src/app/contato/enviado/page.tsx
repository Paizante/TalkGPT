import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { contact } from '@/content/site';

export const metadata: Metadata = {
  title: 'Mensagem enviada',
  robots: { index: false, follow: true },
  alternates: { canonical: '/contato/enviado' },
};

export default function MensagemEnviadaPage() {
  return (
    <section className="bg-ivory py-24">
      <Container className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-evergreen text-ivory">
          <Icon name="heart" className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-3xl font-semibold text-evergreen sm:text-4xl">Mensagem enviada com sucesso</h1>
        <p className="mt-4 leading-relaxed text-warm-gray">
          Obrigado por entrar em contato com a Associação Amados do Pai. Nossa equipe irá analisar sua
          mensagem e retornar o quanto antes. Se preferir uma resposta mais rápida, fale conosco também pelo
          WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={contact.whatsappUrl()} variant="accent">
            Falar no WhatsApp
          </Button>
          <Button href="/" variant="outline">
            Voltar ao início
          </Button>
        </div>
      </Container>
    </section>
  );
}
