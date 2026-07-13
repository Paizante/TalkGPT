# Guia de Entrega (para times não técnicos)

Este guia explica como fazer alterações comuns no site sem precisar entender
todo o código.

## Trocar um texto

A maior parte dos textos institucionais fica em dois lugares:

- `src/content/site.ts` — nome, CNPJ, endereço, telefone, itens de menu
- `src/data/*.ts` — conteúdo de cada seção (pilares, etapas de acolhimento,
  atividades, ambientes, formas de ajudar, perguntas frequentes)

Abra o arquivo correspondente, edite o texto entre aspas e salve. Não é
necessário mexer em nenhum outro arquivo.

## Trocar uma fotografia

1. Coloque o arquivo de imagem em `public/photos/` (crie a pasta se não
   existir), seguindo os nomes sugeridos em `public/placeholders/README.md`.
2. No componente da página correspondente, troque
   `<ImagePlaceholder ... />` por:
   ```tsx
   <Image src="/photos/nome-do-arquivo.jpg" alt="Descrição da foto" width={800} height={600} className="rounded-2xl object-cover" />
   ```
3. Sempre escreva uma descrição (`alt`) objetiva da imagem.

## Configurar o Instagram

1. Publique o link do perfil profissional em
   `NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/seuusuario`.
2. (Opcional, para mostrar posts automaticamente) obtenha um token de acesso
   de longa duração da Instagram Graph API e configure
   `INSTAGRAM_ACCESS_TOKEN` e `INSTAGRAM_USER_ID`.
3. Sem o token, a seção mostra apenas o botão "Seguir no Instagram".

## Configurar o e-mail de contato

1. Crie uma conta gratuita em [resend.com](https://resend.com) (ou outro
   provedor, adaptando `src/lib/contact.ts`).
2. Gere uma API key e configure `RESEND_API_KEY` e `CONTACT_EMAIL` (o e-mail
   que deve receber as mensagens).
3. Sem isso configurado, o formulário continua funcionando normalmente e o
   visitante sempre tem a opção de falar pelo WhatsApp.

## Publicar o site

Ver `DEPLOYMENT.md` para o passo a passo completo. Resumo: importe o
repositório na Vercel, configure as variáveis de ambiente e publique.

## Atualizar a marca (logotipo)

O símbolo atual (`public/brand/`) foi recortado das referências fornecidas
inicialmente — não é um arquivo vetorial oficial. Ao receber a arte final
da marca (idealmente em SVG):

1. Substitua os arquivos em `public/brand/symbol-light.png` e
   `public/brand/symbol-dark.png` pelas versões oficiais.
2. Regenere os ícones de favicon/PWA em `public/icons/` a partir do novo
   símbolo (qualquer ferramenta de geração de favicon serve).

## O que NÃO fazer

- Não adicionar login, área restrita, prontuário ou painel administrativo —
  ver proibições em `CLAUDE.md`.
- Não publicar nomes/fotos da equipe sem autorização por escrito e sem
  confirmação da direção institucional.
- Não inventar estatísticas, depoimentos, horários ou capacidade de
  atendimento — ver `CONTENT_VALIDATION.md`.

## Dúvidas técnicas

Consulte `README.md` para comandos de desenvolvimento e `CLAUDE.md` para as
regras persistentes do projeto.
