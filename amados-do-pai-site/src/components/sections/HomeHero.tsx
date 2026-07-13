import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Icon from '@/components/ui/Icon';
import { address, organization, contact } from '@/content/site';

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <h1 className="text-4xl font-semibold leading-tight text-evergreen sm:text-5xl lg:text-6xl">
            Um lugar para recomeçar.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-warm-gray">
            Acolhimento, dignidade e novos caminhos para pessoas que buscam reconstruir suas histórias.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-warm-gray">
            Em Ravena, distrito de Sabará/MG, a {organization.legalName} desenvolve uma atuação voltada ao
            acolhimento, à assistência psicossocial e ao fortalecimento humano.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/quem-somos" variant="primary">
              Conheça a Associação
            </Button>
            <Button href="/como-acolhemos" variant="outline">
              Como Acolhemos
            </Button>
            <Button href={contact.whatsappUrl()} variant="accent">
              Fale Conosco
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-warm-gray">
            <span className="flex items-center gap-2">
              <Icon name="mapPin" className="h-4 w-4 text-bronze" />
              {address.region}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="heart" className="h-4 w-4 text-bronze" />
              Utilidade pública municipal
            </span>
          </div>
        </div>

        <ImagePlaceholder icon="tree" label="Fotografia oficial em preparação" className="h-80 w-full lg:h-[26rem]" />
      </Container>
    </section>
  );
}
