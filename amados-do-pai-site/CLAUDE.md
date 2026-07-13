# CLAUDE.md — Associação Amados do Pai (site institucional)

Instruções persistentes para qualquer sessão que edite este projeto. Leia
antes de alterar conteúdo, marca ou estrutura de páginas.

## Identidade

- Nome jurídico: **Associação Amados do Pai**
- Nome fantasia: Grupo Amados do Pai
- Nome de comunicação: **AMADOS DO PAI**
- Assinatura: Associação e Comunidade Terapêutica
- Slogan: "Um lugar para recomeçar"
- CNPJ: 22.693.320/0001-07 — associação privada sem fins lucrativos, constituída em 1º de junho de 2015
- Sede: Rua Lava Pés, nº 359, Ravena, Sabará/MG, CEP 34516-427
- Telefone/WhatsApp: (31) 98879-6071 — link `wa.me/5531988796071`
- Reconhecida como entidade de utilidade pública municipal (Lei Municipal nº 3.206/2025, Sabará/MG)
- Atuação cadastrada: assistência psicossocial e à saúde para pessoas com transtornos psíquicos, deficiência mental, dependência química e grupos similares

Todos esses dados vivem em **`src/content/site.ts`** — fonte única. Nunca
duplique telefone/endereço/CNPJ espalhados em outros arquivos; importe de lá.

## Proibições absolutas

- **Não invente** dados institucionais além dos listados acima (nada de
  capacidade de acolhimento, número de vagas/atendidos, taxas de sucesso,
  mensalidade, nomes de fundadores/equipe/cargos, metodologia terapêutica
  específica, convênios, prêmios, depoimentos, estatísticas).
- **Não prometa** cura, vaga, recuperação garantida ou prazo de resultado.
- **Não crie** Portal da Família, login, cadastro de usuários, área privada
  ou restrita, prontuário, dashboard, painel administrativo, intranet,
  central de documentos/downloads, área financeira, ou qualquer sistema que
  dependa de dado sensível de saúde.
- **Não use** dados de contato, fotografias, textos ou datas presentes nos
  mockups de referência (`.references/`) que divirjam dos dados confirmados
  acima — ver `REFERENCE_AUDIT.md` para a lista completa de divergências.
- **Não trate** imagens do ZIP de referência como fotografias reais da sede,
  equipe ou acolhidos — são geradas por IA e servem só de direção visual.
- **Não disponibilize** a pasta `.references/` no build público (está no
  `.gitignore` e fora de `src/`/`public/`).
- Quando um dado estiver pendente (e-mail, Instagram, horário, PIX, domínio,
  coordenadas), **não invente nem mostre placeholder visível** — omita o
  componente e registre a pendência em `CONTENT_VALIDATION.md`.

## Direção visual

Conceito: **Luz e Refúgio — um lugar para recomeçar.** Acolhimento, caminho,
proteção, serenidade, dignidade. Não deve parecer clínica, prisão, dashboard
de software ou site institucional genérico.

Paleta (tokens CSS em `src/app/globals.css`, classes Tailwind em
`tailwind.config.js`):

| Token | Hex | Uso |
|---|---|---|
| `evergreen` | `#1F3D34` | cabeçalho, rodapé, CTA final |
| `deep-green` | `#132F29` | variações escuras |
| `mid-green` | `#385D50` | acentos |
| `soft-green` | `#A8BCAE` | textos sobre fundo escuro |
| `beige` | `#E7DCC6` | cards |
| `ivory` | `#FAF7F1` | fundo predominante |
| `bronze` | `#C9A276` | linhas, ícones, detalhes |
| `terracotta` | `#C56A4D` | botões de call-to-action |
| `graphite` | `#29312F` | texto |
| `warm-gray` | `#777873` | texto secundário |

Tipografia: títulos em Cormorant Garamond (`--font-display`), corpo/menu em
Montserrat (`--font-sans`), carregadas via `next/font` com `display: swap`.

Marca: apenas o símbolo (mão/luz/folha) é usado como imagem
(`public/brand/symbol-*.png`, `public/icons/*`). O nome "AMADOS DO PAI" é
sempre HTML real — nunca texto embutido em imagem. Ver `REFERENCE_AUDIT.md`.

## Acessibilidade e performance

- WCAG 2.2 AA: skip link, landmarks, foco visível, contraste, `alt` em todas
  as imagens, `prefers-reduced-motion` respeitado (ver `.reveal-path` e
  animações em `globals.css`).
- `next/image` para todas as imagens de conteúdo; `next/font` para fontes.
- Renderização estática (App Router, sem client components desnecessários).

## SEO

- Idioma `pt-BR`, um `<h1>` por página, `metadata` exclusiva por rota,
  `sitemap.xml`, `robots.txt`, Open Graph, JSON-LD (`Organization`, `WebSite`,
  `BreadcrumbList`, `FAQPage` na página de FAQ).
- Palavras-chave naturais: Associação Amados do Pai, Amados do Pai Ravena,
  comunidade terapêutica em Ravena/Sabará, acolhimento em Sabará, assistência
  psicossocial em Sabará.

## Regras de imagens

- Fotografias oficiais (sede, atividades) ainda não foram fornecidas.
  Enquanto isso, use os placeholders documentados em
  `public/placeholders/README.md` (composições abstratas, nunca uma imagem
  sintética do ZIP apresentada como foto real).
- Ao receber fotografias oficiais, siga `public/placeholders/README.md` para
  nomes de arquivo e proporções esperadas.

## Comandos de validação

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run dev        # http://localhost:3000
```

## Estrutura do projeto

```
src/
├── app/                  # rotas (App Router)
├── components/
│   ├── layout/           # Header, Footer, MobileNav
│   ├── sections/         # blocos de página (Hero, Pillars, CTA, etc.)
│   ├── ui/                # primitives (Button, Card, Container)
│   ├── forms/             # ContactForm
│   └── instagram/         # seção Instagram com fallback
├── content/site.ts        # fonte única de dados institucionais
├── data/                  # listas de conteúdo (atividades, FAQ, etc.)
├── lib/                   # instagram.ts, contato (envio de e-mail)
├── types/
└── utils/
public/
├── brand/                 # símbolo recortado das referências
├── icons/                 # favicon, apple-touch-icon, ícones PWA
├── illustrations/
├── placeholders/
└── social/
```

Este arquivo é a fonte persistente para futuras sessões — mantenha-o
atualizado sempre que uma decisão de conteúdo, marca ou dado institucional
mudar.
