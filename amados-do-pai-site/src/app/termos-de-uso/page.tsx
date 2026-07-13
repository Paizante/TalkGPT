import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/sections/Breadcrumbs';
import { organization, address } from '@/content/site';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso do site institucional da Associação Amados do Pai.',
  alternates: { canonical: '/termos-de-uso' },
};

export default function TermosDeUsoPage() {
  return (
    <section className="bg-ivory py-16">
      <Container className="mx-auto max-w-3xl">
        <Breadcrumbs crumbs={[{ href: '/', label: 'Início' }, { href: '/termos-de-uso', label: 'Termos de Uso' }]} />
        <h1 className="mt-4 text-4xl font-semibold text-evergreen">Termos de Uso</h1>
        <p className="mt-2 text-sm text-warm-gray">Última atualização: 2026.</p>

        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-headings:text-evergreen">
          <p>
            Este site é mantido pela {organization.legalName} (CNPJ {organization.cnpj}), sediada em{' '}
            {address.full}. Ao utilizar este site, você concorda com os termos descritos a seguir.
          </p>

          <h2>1. Finalidade do site</h2>
          <p>
            Este site tem finalidade exclusivamente institucional: apresentar a Associação Amados do Pai, sua
            atuação, formas de contato e maneiras de apoiar a causa. Não constitui canal de atendimento clínico,
            emergência ou urgência.
          </p>

          <h2>2. Conteúdo institucional</h2>
          <p>
            Buscamos manter as informações publicadas atualizadas e precisas. Dados como capacidade de
            acolhimento, critérios de admissão, equipe e metodologia estão sujeitos a confirmação direta com a
            equipe da Associação e podem não estar refletidos integralmente neste site.
          </p>

          <h2>3. Uso permitido</h2>
          <p>
            O conteúdo deste site pode ser acessado e compartilhado para fins informativos e não comerciais,
            desde que a fonte seja citada. É vedada a reprodução da marca, símbolo ou identidade visual da
            Associação Amados do Pai sem autorização prévia.
          </p>

          <h2>4. Links externos</h2>
          <p>
            Este site pode conter links para redes sociais ou serviços de terceiros (como WhatsApp e
            Instagram). Não nos responsabilizamos pelo conteúdo ou pelas políticas de privacidade desses
            serviços externos.
          </p>

          <h2>5. Limitação de responsabilidade</h2>
          <p>
            As informações deste site não configuram promessa de vaga, prazo, resultado terapêutico ou
            resultado de qualquer natureza. Decisões sobre acolhimento dependem de avaliação institucional
            direta.
          </p>

          <h2>6. Alterações destes termos</h2>
          <p>
            Estes termos podem ser atualizados periodicamente. A data da última atualização é sempre indicada
            no topo desta página.
          </p>

          <h2>7. Contato</h2>
          <p>
            Dúvidas sobre estes termos podem ser encaminhadas pela página de{' '}
            <a href="/contato" className="text-mid-green underline">
              Contato
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
