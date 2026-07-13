# Amados do Pai — Site Institucional

Site institucional da **Associação Amados do Pai**, comunidade terapêutica
sediada em Ravena, distrito de Sabará/MG.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router, TypeScript estrito)
- [Tailwind CSS](https://tailwindcss.com/) + `@tailwindcss/typography`
- `next/font` (Cormorant Garamond + Montserrat) e `next/image`
- Sem banco de dados, sem CMS pago, sem painel administrativo — conteúdo
  editável diretamente no código (`src/content/site.ts` e `src/data/`)

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
# http://localhost:3000
```

## Validação

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # build de produção (gera todas as rotas estáticas)
npm run start      # serve o build de produção localmente
```

## Variáveis de ambiente

Nenhuma é obrigatória para rodar localmente. Veja `.env.example` para a lista
completa e o comportamento de fallback de cada uma (Instagram, e-mail de
contato, URL pública do site).

## Instagram

A seção "Acontece na Amados do Pai" só aparece quando
`NEXT_PUBLIC_INSTAGRAM_URL` está definida. Com `INSTAGRAM_ACCESS_TOKEN` e
`INSTAGRAM_USER_ID` configurados, a seção também exibe uma grade com as 6
publicações mais recentes (Graph API, revalidada a cada 60 minutos). Sem
essas duas variáveis, a seção mostra apenas o botão para seguir o perfil.

## Formulário de contato

`POST /api/contato` valida e sanitiza os dados no servidor, aplica um
honeypot e um rate limit simples por IP. Se `RESEND_API_KEY` e
`CONTACT_EMAIL` estiverem configurados, tenta enviar um e-mail via API HTTP
do Resend. Em qualquer caso — com ou sem e-mail configurado — o envio bem
sucedido redireciona para `/contato/enviado`, e a página sempre oferece o
fallback de WhatsApp.

## Imagens e marca

- `public/brand/` — símbolo da marca recortado das referências fornecidas
  (ver `REFERENCE_AUDIT.md`).
- `public/icons/` — favicon, apple-touch-icon e ícones PWA gerados a partir
  da marca.
- `public/placeholders/README.md` — guia para substituir as composições
  abstratas por fotografias oficiais quando disponíveis.

## Edição de conteúdo

- `src/content/site.ts` — fonte única de dados institucionais (nome, CNPJ,
  endereço, telefone, navegação, links do rodapé).
- `src/data/*.ts` — listas de conteúdo por página (pilares, etapas de
  acolhimento, atividades, ambientes, formas de ajudar, FAQ).

Ver `CLAUDE.md` para as regras persistentes de conteúdo e marca, e
`CONTENT_VALIDATION.md` para a lista de informações pendentes de
confirmação institucional.

## Documentação relacionada

- `CLAUDE.md` — regras persistentes do projeto (identidade, proibições, direção visual)
- `REFERENCE_AUDIT.md` — auditoria das imagens de referência fornecidas
- `CONTENT_VALIDATION.md` — dados confirmados vs. pendentes
- `VALIDATION_REPORT.md` — comandos executados e resultado das validações
- `DEPLOYMENT.md` — guia de publicação
- `HANDOFF.md` — guia de entrega para times não técnicos
