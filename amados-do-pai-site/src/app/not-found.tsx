import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function NotFound() {
  return (
    <section className="bg-ivory py-24">
      <Container className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-beige text-terracotta">
          <Icon name="compass" className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-3xl font-semibold text-evergreen sm:text-4xl">
          Nem todo caminho leva ao destino esperado.
        </h1>
        <p className="mt-4 leading-relaxed text-warm-gray">
          Esta página não foi encontrada. Escolha um novo caminho para continuar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary">
            Voltar ao início
          </Button>
          <Button href="/quem-somos" variant="outline">
            Conhecer a Associação
          </Button>
          <Button href="/contato" variant="accent">
            Falar Conosco
          </Button>
        </div>
      </Container>
    </section>
  );
}
