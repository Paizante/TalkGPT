# Guia de Publicação

## Pré-requisitos antes de publicar

1. Definir o domínio definitivo e configurar `NEXT_PUBLIC_SITE_URL` (usado
   pelo `sitemap.xml`, `robots.txt` e URLs absolutas de Open Graph).
2. Preencher as pendências de `CONTENT_VALIDATION.md` que já estiverem
   confirmadas (e-mail, Instagram, horários, PIX).
3. Substituir os placeholders de `public/placeholders/` por fotografias
   oficiais, se disponíveis (opcional — o site funciona sem elas).

## Vercel (recomendado)

1. Importe o repositório no painel da Vercel.
2. Framework preset: **Next.js** (detectado automaticamente).
3. Configure as variáveis de ambiente do `.env.example` em
   *Project Settings → Environment Variables*.
4. Deploy. A Vercel cuida de HTTPS, CDN e cache automaticamente.

## Hospedagem Node genérica

```bash
npm install
npm run build
npm run start -- -p 3000
```

Coloque um proxy reverso (Nginx/Caddy) na frente para TLS e domínio próprio.
Variáveis de ambiente devem ser exportadas no processo antes de `npm start`
(ou via arquivo `.env.production.local`, carregado automaticamente pelo
Next.js).

## Cloudflare Pages

Compatível com o modo de exportação padrão do Next.js App Router usando o
adaptador `@cloudflare/next-on-pages`, caso a hospedagem final seja
Cloudflare. Não incluído por padrão nesta entrega — adicionar apenas se essa
for a hospedagem escolhida, para não introduzir dependência desnecessária.

## Variáveis de ambiente em produção

Ver `.env.example` para a lista completa. Nenhuma é obrigatória para o site
funcionar — todas têm fallback gracioso (ver `CONTENT_VALIDATION.md`).

## Cache e revalidação

- Todas as páginas institucionais são estáticas (geradas no build).
- A busca de posts do Instagram (quando configurada) revalida a cada 60
  minutos (`next: { revalidate: 3600 }` em `src/lib/instagram.ts`).
- `/api/contato` é sempre dinâmica (nunca cacheada).

## Checklist pós-deploy

- [ ] Acessar o domínio final via HTTPS e conferir o certificado
- [ ] Testar o formulário de contato em produção (com e sem e-mail configurado)
- [ ] Testar os links de WhatsApp em um celular real
- [ ] Validar `https://SEU_DOMINIO/sitemap.xml` e `/robots.txt`
- [ ] Rodar Lighthouse/PageSpeed Insights no domínio final
- [ ] Submeter o sitemap no Google Search Console
