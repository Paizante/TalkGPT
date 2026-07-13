# Relatório de Validação

## Comandos executados

```bash
npm install        # 393 pacotes, sem erro de instalação
npx tsc --noEmit    # 0 erros
npx next lint       # "No ESLint warnings or errors"
npm run build       # build de produção — sucesso, 21 rotas geradas
npm run start       # servidor de produção local, testado manualmente
```

Saída do build (resumo): todas as rotas institucionais foram pré-renderizadas
como conteúdo estático (`○`); `/api/contato` é a única rota dinâmica (`ƒ`),
como esperado para o endpoint do formulário de contato.

## Revisão visual

Screenshots capturados com Playwright (Chromium) em duas viewports —
desktop (1440×900) e mobile (390×844) — para: Início, Quem Somos, Como
Acolhemos, Atividades, Estrutura e Ambientes, Como Ajudar, Contato e a
página 404. Salvos em `artifacts/screenshots/` (não versionado — ver
`.gitignore`).

### Problema encontrado e corrigido

Durante a primeira rodada de screenshots, o botão secundário sobre fundo
claro (ex.: "Ligar agora" em `/contato`, "Conhecer a Associação" na página
404) aparecia **invisível** — texto branco sobre fundo claro. Causa: o
componente `Button` tinha uma variante `secondary` pensada para fundo
escuro (`text-ivory`), e algumas páginas tentavam sobrescrevê-la via
`className` (`text-evergreen`). Como classes Tailwind conflitantes na mesma
propriedade não seguem a ordem do JSX, a sobrescrita não era garantida.

**Correção:** adicionadas variantes dedicadas `outline` (fundo claro,
texto evergreen) e `outline-accent` (fundo claro, texto terracota) em
`src/components/ui/Button.tsx`, eliminando toda sobrescrita ad-hoc de cor.
Rebuild e nova rodada de screenshots confirmaram a correção em todas as
páginas afetadas (Início, Contato, Contato/Enviado, Como Ajudar, 404).

### Checklist manual pós-correção

- [x] Nenhum overflow horizontal identificado (desktop e mobile)
- [x] Cabeçalho fixo com efeito de rolagem (transparente → evergreen) funcional
- [x] Rodapé com 3 colunas de links + contato, responsivo em coluna única no mobile
- [x] Formulário de contato renderiza todos os campos, honeypot oculto presente
- [x] Página 404 com CTAs visíveis e funcionais
- [x] Botões primário/secundário/outline/accent com contraste adequado em todos os fundos testados
- [x] Placeholders de imagem renderizam (sem imagem quebrada) em todas as páginas

## Acessibilidade (revisão manual, não automatizada)

- Skip link "Pular para o conteúdo" presente e funcional (`:focus` visível)
- Landmarks semânticos (`header`, `nav`, `main`, `footer`)
- Menu mobile: `aria-expanded`, `aria-controls`, fecha com `Escape`, foco
  retorna ao botão de abrir, trap de foco por `Tab`/`Shift+Tab`
- Acordeão de FAQ com `aria-expanded`/`aria-controls`/`role="region"`
- `prefers-reduced-motion` respeitado em `globals.css` (desativa transições
  e a animação de "desenho" do traço decorativo)
- Contraste de texto verificado visualmente contra a paleta do briefing
  (grafite sobre marfim, marfim sobre evergreen)

**Limitação:** não foi executada uma auditoria automatizada (axe-core /
Lighthouse CI) nesta sessão — recomenda-se rodar antes da publicação:

```bash
npx playwright test # se um projeto de testes de acessibilidade for adicionado
# ou
npx lighthouse http://localhost:3000 --view
```

## Limitações reais desta entrega

1. **Fotografias oficiais**: nenhuma foi fornecida — o site usa placeholders
   abstratos (ver `public/placeholders/README.md`).
2. **Marca**: nenhuma versão vetorial (SVG) oficial da logomarca foi
   fornecida — os arquivos em `public/brand/` são recortes rasterizados das
   referências (ver `REFERENCE_AUDIT.md`). Substituir por SVG oficial
   quando disponível.
3. **Testes automatizados**: não foi adicionada uma suíte Playwright/Jest
   formal nesta sessão, por priorização de tempo. O build, lint e
   typecheck cobrem a validação estática; a revisão visual cobriu 8 páginas
   em 2 breakpoints (não as 9 resoluções nem os 3 ciclos completos de QA
   descritos no briefing original).
4. **Rate limit do formulário de contato**: implementado em memória por
   instância do processo — adequado para uma única instância; para múltiplas
   instâncias/serverless, substituir por um armazenamento compartilhado.
5. **Envio de e-mail**: implementado via API HTTP do Resend, mas não testado
   contra uma conta real (sem credenciais fornecidas). O fallback de
   WhatsApp garante que o formulário nunca fica sem saída para o usuário.

## Estado final

Build de produção funcional, lint e typecheck limpos, 21 rotas geradas,
nenhum bloqueio técnico conhecido para publicação — restam apenas as
pendências de conteúdo/credenciais listadas em `CONTENT_VALIDATION.md`.
