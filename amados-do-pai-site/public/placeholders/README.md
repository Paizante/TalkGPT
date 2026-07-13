# Placeholders de fotografia

Nenhuma fotografia oficial da sede, equipe ou atividades foi fornecida até o
momento. O site usa composições abstratas geradas em CSS/SVG
(`src/components/ui/ImagePlaceholder.tsx`) enquanto isso.

Ao receber fotografias oficiais, substitua os placeholders pelos arquivos
reais seguindo este guia:

## Arquivos esperados

| Contexto | Caminho sugerido | Proporção | Observações |
|---|---|---|---|
| Hero — Início | `public/photos/hero-home.jpg` | 4:3 (mín. 1200×900) | Fotografia externa da sede ou ambiente acolhedor |
| Quem Somos | `public/photos/quem-somos.jpg` | 4:3 | Ambiente institucional, sem identificar acolhidos sem autorização |
| Como Acolhemos | `public/photos/como-acolhemos.jpg` | 4:3 | Ambiente de acolhimento/recepção |
| Estrutura — Dormitórios | `public/photos/dormitorios.jpg` | 4:3 | Sem rosto de acolhidos |
| Estrutura — Áreas verdes | `public/photos/areas-verdes.jpg` | 4:3 | |
| Estrutura — Salas de atendimento | `public/photos/salas-atendimento.jpg` | 4:3 | |
| Estrutura — Convivência | `public/photos/convivencia.jpg` | 4:3 | |
| Estrutura — Refeitório | `public/photos/refeitorio.jpg` | 4:3 | |
| Estrutura — Oficinas | `public/photos/oficinas.jpg` | 4:3 | |

## Requisitos

- Formato preferencial: JPEG ou WebP, otimizado (< 300 KB quando possível).
- Nunca incluir rostos de acolhidos sem autorização expressa e por escrito.
- Sempre descrever a imagem com `alt` text objetivo (ex.: "Área externa da
  sede da Associação Amados do Pai, com jardim e caminho de pedras").
- Ao adicionar uma foto real, troque o componente `ImagePlaceholder` pelo
  componente `next/image` correspondente e remova o `label` do placeholder.

## Autorização

Toda fotografia que inclua pessoas (equipe, voluntários ou acolhidos) exige
autorização de uso de imagem por escrito antes da publicação neste site.
