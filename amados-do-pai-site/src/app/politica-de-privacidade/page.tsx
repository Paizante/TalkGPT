import type { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/sections/Breadcrumbs';
import { organization, address, contact } from '@/content/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade da Associação Amados do Pai sobre o tratamento de dados pessoais.',
  alternates: { canonical: '/politica-de-privacidade' },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="bg-ivory py-16">
      <Container className="mx-auto max-w-3xl">
        <Breadcrumbs
          crumbs={[{ href: '/', label: 'Início' }, { href: '/politica-de-privacidade', label: 'Política de Privacidade' }]}
        />
        <h1 className="mt-4 text-4xl font-semibold text-evergreen">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-warm-gray">Última atualização: 2026.</p>

        <div className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-headings:text-evergreen">
          <p>
            Esta Política de Privacidade descreve como a {organization.legalName} (CNPJ {organization.cnpj}),
            sediada em {address.full}, trata os dados pessoais coletados por meio deste site, em conformidade
            com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
          </p>

          <h2>1. Quais dados coletamos</h2>
          <p>
            Coletamos apenas os dados fornecidos voluntariamente pelo visitante ao preencher o formulário de
            contato: nome, telefone/WhatsApp, e-mail (quando informado), assunto e mensagem. Não solicitamos
            CPF, RG, dados de saúde, diagnósticos ou qualquer documento sensível por meio deste formulário.
          </p>

          <h2>2. Finalidade do tratamento</h2>
          <p>
            Os dados enviados pelo formulário de contato são utilizados exclusivamente para responder à
            solicitação do visitante — informações institucionais, agendamento de visita, doação, voluntariado
            ou parcerias.
          </p>

          <h2>3. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos, vendemos ou cedemos os dados coletados a terceiros, exceto quando exigido por
            lei ou ordem judicial, ou para o funcionamento técnico do próprio formulário (por exemplo, o
            serviço de envio de e-mail, quando configurado).
          </p>

          <h2>4. Cookies</h2>
          <p>
            Este site utiliza apenas cookies essenciais ao funcionamento técnico da aplicação. Nenhum cookie de
            rastreamento ou publicidade é utilizado por padrão. Caso ferramentas de análise não essenciais
            sejam adicionadas no futuro, o consentimento do visitante será solicitado previamente.
          </p>

          <h2>5. Seus direitos</h2>
          <p>
            Nos termos da LGPD, você pode solicitar a qualquer momento a confirmação, o acesso, a correção ou a
            eliminação dos seus dados pessoais tratados por este site. Para exercer esses direitos, entre em
            contato pelo WhatsApp {contact.phoneDisplay} ou pelo formulário da página de{' '}
            <a href="/contato" className="text-mid-green underline">
              Contato
            </a>
            .
          </p>

          <h2>6. Segurança</h2>
          <p>
            Adotamos medidas técnicas razoáveis para proteger os dados coletados contra acesso não autorizado,
            perda ou uso indevido, incluindo transmissão via conexão segura (HTTPS) e validação dos dados no
            servidor.
          </p>

          <h2>7. Alterações desta política</h2>
          <p>
            Esta política pode ser atualizada periodicamente para refletir melhorias no site ou mudanças
            legais. A data da última atualização é sempre indicada no topo desta página.
          </p>
        </div>
      </Container>
    </section>
  );
}
