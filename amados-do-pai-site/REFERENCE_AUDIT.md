# Auditoria de Referências Visuais — Amados do Pai

Este documento audita as 20 imagens enviadas em dois arquivos ZIP e define o que
foi efetivamente aproveitado na implementação. As imagens foram parcialmente
geradas por inteligência artificial e contêm textos, dados e composições que
**não são informação institucional real** — apenas direção visual.

Extraídas para `.references/amados-do-pai/` (pasta ignorada no build público e
no Git, ver `.gitignore`).

## 1. Logos (`68e4e64d-AMADOS_DO_PAI_10_LOGOS_PARA_SITE.zip` → `.references/amados-do-pai/logos/`)

| Arquivo | Classificação | Uso |
|---|---|---|
| `01_LOGO_PRINCIPAL_CLARO.png` | Logotipo (símbolo + wordmark) | Texto "ASSOCIAÇÃO" e assinatura ilegíveis/deformados. **Não utilizado como imagem completa.** Direção de composição (símbolo acima do nome) informou o lockup vertical em HTML. |
| `02_LOGO_AMADOS_DO_PAI_REFERENCIA.png` | Referência de logotipo | Redundante com `01`. Não utilizado. |
| `03_SIMBOLO_PRINCIPAL_CLARO.png` | Símbolo | Aproveitado. Cortado para `public/brand/symbol-light.png` (símbolo sobre fundo claro/creme — uso em cabeçalho sobre `ivory` e menu mobile). |
| `04_SIMBOLO_MONOCROMATICO.png` | Símbolo monocromático | Aproveitado. Cortado para `public/brand/symbol-mono.png` (uso pontual em marca d'água/impressão de baixo contraste). |
| `05_SIMBOLO_NEGATIVO.png` | Símbolo (fundo escuro) | Aproveitado. Cortado para `public/brand/symbol-dark.png` (uso em cabeçalho ao rolar e no rodapé, fundo `evergreen`). |
| `06_FAVICON_CLARO.png` | Ícone/favicon | Aproveitado como fonte. Cortado para `public/brand/favicon-source.png` e reamostrado em `public/icons/favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` e `app/favicon.ico`. |
| `07_ICONE_PWA_ESCURO.png` | Ícone PWA | Aproveitado como fonte. Reamostrado para `public/icons/icon-192.png`, `icon-512.png` e `icon-512-maskable.png`. |
| `08_ASSINATURA_REDUZIDA.png` | Assinatura reduzida | Texto ilegível ("AMADOS DO PAL" e subtítulo deformado). **Não utilizado.** A assinatura reduzida é composta em HTML (símbolo + `<span>AMADOS DO PAI</span>`). |
| `09_LOGO_HORIZONTAL.png` | Logotipo horizontal | Wordmark tem erro de leitura ("AMADOS DO PAL" com "L" em vez de "I" em alguns frames). **Não utilizado como imagem.** Confirma o lockup horizontal (símbolo à esquerda + nome à direita), recriado em HTML/CSS com o símbolo real. |
| `10_ICONE_CIRCULAR.png` | Ícone circular / mockup de interface | Simula uma janela de videochamada com legenda ilegível ("Anaadps do Pan Gomundade Terapoimica"). **Não utilizado.** Apenas confirma que o símbolo funciona bem em moldura circular (aplicado via `border-radius` em CSS, não como imagem). |

**Regra crítica aplicada:** em nenhum lugar do site o texto "AMADOS DO PAI",
"ASSOCIAÇÃO" ou "Comunidade Terapêutica" é renderizado a partir de um recorte
de imagem. Todo texto de marca é HTML real, com a tipografia definida na seção
de tipografia do `CLAUDE.md`, garantindo legibilidade, SEO e acessibilidade.

## 2. Mockups de página (`f14bca02-AMADOS_DO_PAI_10_IMAGENS_REFERENCIA_SITE.zip` → `.references/amados-do-pai/imagens-referencia/`)

Todos os 10 arquivos são **mockups de composição** (não fotografias reais, não
telas finais). Todos seguem o mesmo sistema visual: cabeçalho verde-escuro
fixo, hero em painel creme com borda orgânica sobre fotografia, faixa de 4
pilares com ícone, seções alternando fundo `ivory`/`beige`, CTA final em
`evergreen` com padrão decorativo dourado, rodapé verde com 4 colunas de links.

| Arquivo | Página de referência | Elementos aproveitáveis | Elementos descartados |
|---|---|---|---|
| `03_REFERENCIA_PAGINA_INICIAL.png` | Início | Estrutura: hero + pilares + apresentação + "como acolhemos" resumido + atividades + CTA + rodapé. Paleta e tipografia. | Fotografias (pessoas/prédio sintéticos), telefone `(31) 99905-4321` e e-mail `contato@amadosdopai.org.br` fictícios — **não usar**. |
| `04_REFERENCIA_QUEM_SOMOS.png` | Quem Somos | Estrutura: hero + 4 pilares (Missão/Visão/Valores/Essência) + história + linha do tempo + localização + CTA. | Texto "com base em princípios cristãos e em uma metodologia terapêutica eficaz", datas de linha do tempo (2010–2022) e fundação fictícias — **não usar** (a única data confirmada é 01/06/2015). Foto de igreja/prédio não é a sede real. |
| `05_REFERENCIA_COMO_ACOLHEMOS.png` | Como Acolhemos | Estrutura de jornada em 6 etapas com ícones, faixa de fotos, bloco de "acreditamos". | Fotos de pessoas/ambientes sintéticas; itens de lista ("Equipe multidisciplinar qualificada", "Espiritualidade como base do cuidado") tratados como **prováveis, não confirmados** — reescritos com linguagem prudente. |
| `06_REFERENCIA_ROTINA_E_ABORDAGEM.png` | Rotina e Abordagem | Estrutura de linha do tempo horária. | Horários exatos (07h–19h) são fictícios — **não usar como grade fixa**; texto reescrito como "pode incluir", sem cronograma cravado. |
| `07_REFERENCIA_ATIVIDADES.png` | Atividades | Grade de 8 categorias de atividades com ícone + foto. | Fotos sintéticas de pessoas. Categorias mantidas como *tipos* genéricos de atividade (educativas, laborterapia, convivência etc.), não como atividades "confirmadas". |
| `08_REFERENCIA_ESTRUTURA_E_AMBIENTES.png` | Estrutura e Ambientes | Estrutura de galeria por ambiente (dormitórios, áreas verdes, salas, convivência, refeitório, oficinas) + CTA de tour. | Fotografias não são a sede real — substituídas por placeholders com composição abstrata; "tour virtual 360°" removido (recurso não confirmado/disponível). |
| `09_REFERENCIA_COMO_AJUDAR.png` | Como Ajudar | 5 formas de ajudar (doação, voluntariado, parcerias, empresas, divulgação) + citação final. | Citação atribuída sem fonte — tratada como texto institucional genérico, não depoimento. Nenhuma chave PIX ou valor sugerido (não confirmados). |
| `10_REFERENCIA_CONTATO_E_VISITAS.png` | Contato e Visitas | Estrutura: formulário + canais de contato + mapa + horários + FAQ. | Telefone fixo `(31) 99905-4321`, e-mail e endereço (`Rua das Acácias, 320`, CEP `34505-000`) são **fictícios e divergem dos dados reais confirmados** — descartados integralmente em favor dos dados do briefing. Mapa com marcador fixo substituído por endereço + botão "Ver rota" (sem coordenadas não confirmadas). |

## 3. Erros e inconsistências identificados

- Wordmark deformado em praticamente todos os logos com texto (`01`, `02`,
  `08`, `09`, `10`) — nunca renderiza "AMADOS DO PAI" de forma limpa.
- Dados de contato fictícios nos mockups de página divergem dos dados reais
  fornecidos no briefing (telefone, e-mail, endereço). Os mockups usam
  `(31) 99905-4321` / `(31) 98796-4321`; o número real confirmado é
  `(31) 98879-6071`.
- Datas de fundação/linha do tempo nos mockups (2010, 2012, 2018, 2022) não
  batem com a data real confirmada (01/06/2015).
- Metodologia terapêutica, composição da equipe e estatísticas presentes nos
  mockups não têm confirmação institucional e foram tratadas como não
  utilizáveis, conforme regra crítica do briefing.
- Fotografias de pessoas, prédios e ambientes em todos os 10 mockups são
  sintéticas (geradas por IA) e **não representam a sede, equipe ou acolhidos
  reais** — nenhuma foi usada como se fosse fotografia oficial.

## 4. Decisão sobre a marca

Nenhuma versão da logomarca com texto está perfeitamente legível. Conforme a
regra de fallback do briefing:

- O site usa apenas o **símbolo** (recortado de `03`/`05`/`04`/`06`/`07`);
- "AMADOS DO PAI" e "ASSOCIAÇÃO AMADOS DO PAI" são compostos em HTML real;
- A estrutura (símbolo + texto) está pronta para substituição por um SVG
  oficial da marca quando disponível — ver `HANDOFF.md`.
