# Validação de Conteúdo

## Confirmado (usado no site)

- Nome jurídico, nome fantasia, nome de comunicação, assinatura e slogan
- CNPJ, natureza jurídica, data de constituição
- Endereço completo (Ravena, Sabará/MG)
- Telefone/WhatsApp
- Reconhecimento como utilidade pública municipal (Lei nº 3.206/2025)
- Atuação institucional cadastrada (assistência psicossocial)
- Missão, visão, valores e essência **sugeridos no briefing do projeto**
  (ver `src/data/values.ts`) — publicados, mas com nota nesta seção sobre
  ratificação formal.

## Pendente de confirmação institucional

Estes campos estão como `null`/omitidos em `src/content/site.ts` e nos
componentes correspondentes. Preencha as variáveis de ambiente ou o arquivo
de conteúdo quando a informação for confirmada:

| Informação | Onde configurar | Comportamento atual |
|---|---|---|
| E-mail institucional | `src/content/site.ts` → `contact.email` | Item de e-mail oculto no rodapé e na página de Contato |
| Instagram oficial (URL e usuário) | `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_INSTAGRAM_USERNAME` | Seção do Instagram totalmente oculta no site |
| Token/ID da API do Instagram | `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_USER_ID` | Sem eles, a seção do Instagram (quando a URL existe) mostra apenas o botão de perfil, sem grade de posts |
| Horário de atendimento | `src/content/site.ts` → `contact.hours` | Não exibido em nenhuma página |
| Chave PIX | `src/content/site.ts` → `contact.pixKey` | Não exibida; "Como Ajudar" direciona para contato direto |
| Domínio definitivo | `NEXT_PUBLIC_SITE_URL` | `sitemap.xml`, `robots.txt` e Open Graph usam `http://localhost:3000` como fallback |
| Coordenadas da sede | `src/components/sections/MapLocation.tsx` | Mostra endereço + botão "Ver rota" por busca textual, sem marcador fixo |
| E-mail/SMTP ou Resend para envio de contato | `RESEND_API_KEY`, `CONTACT_EMAIL` | Formulário funciona e confirma o envio, mas sem enviar e-mail; fallback de WhatsApp sempre disponível |

## Fotografias pendentes

Nenhuma fotografia oficial (sede, equipe, atividades) foi fornecida. Ver
`public/placeholders/README.md` para os arquivos esperados e como
substituí-los.

## Equipe

Nomes, funções, formações e registros profissionais da equipe **não foram
fornecidos e não foram inventados**. A página `/equipe-e-diferenciais`
possui um componente pronto para receber essas informações quando a direção
institucional confirmar.

## Atividades e rotina

As categorias de atividades (`src/data/activities.ts`) e os conceitos de
rotina (`src/data/routine.ts`) são descrições genéricas e prudentes — não
representam uma grade horária ou lista de atividades oficialmente
confirmada. Substitua por conteúdo real assim que a equipe validar quais
atividades e horários são efetivamente oferecidos.

## Linha do tempo institucional

Apenas dois marcos têm data confirmada: constituição (01/06/2015) e
utilidade pública municipal (Lei nº 3.206/2025). Qualquer marco adicional
deve ser validado antes de ser adicionado a `src/data/timeline.ts`.
