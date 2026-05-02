# App Android: Consulta de Publicações por Nome ou CPF

Este projeto agora consulta **todas as fontes disponíveis** configuradas no app, consolidando resultados por nome ou CPF.

## Fontes atualmente cadastradas

- Diário Oficial da União
- Diário Oficial Estadual
- Diário Oficial Municipal
- Tribunais

> Você pode incluir novas fontes adicionando entradas no enum `FonteDisponivel`.

## O que já está pronto

- Tela com seleção de tipo de busca (Nome/CPF)
- Consulta paralela em todas as fontes
- Consolidação de resultados em uma única resposta
- Relatório de fontes com falha
- Aviso de conformidade LGPD

## Contrato de API esperado

Endpoint único com parâmetro de fonte:

`GET /publicacoes?tipo=nome|cpf&termo=...&fonte=dou|doe|dom|tribunais`

Resposta esperada por item:

- `titulo` (string)
- `data` (string)
- `resumo` (string)

## O que você precisa configurar

1. Criar ou contratar a API que suporte o parâmetro `fonte`.
2. Alterar a URL base em:
   - `app/src/main/java/br/com/publicacoeschecker/PublicacaoServiceFactory.kt`
3. Ajustar autenticação (token, API key, OAuth), se necessário.

## Execução

1. Abra a pasta `android-publicacoes-checker` no Android Studio.
2. Aguarde sync do Gradle.
3. Rode no emulador/dispositivo Android.

## Observação legal

CPF é dado pessoal. Verifique base legal, finalidade e controles de acesso conforme LGPD antes de consultar dados reais.
