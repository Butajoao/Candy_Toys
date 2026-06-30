# Candy Toy B2B Site

Reconstrucao do site Candy Toy como plataforma comercial B2B para lojistas, revendedores, atacadistas e distribuidores de brinquedos com doces.

## Stack

- Next.js App Router
- TypeScript strict
- Tailwind CSS com tokens semanticos
- Motion para animacoes sutis de UI
- `next/image` e `next/font`
- Server Actions com validacao Zod
- Vercel Analytics preparado

## Rotas

- `/`
- `/produtos`
- `/produtos/[slug]`
- `/catalogo-b2b`
- `/representantes`
- `/onde-encontrar`
- `/sobre`
- `/contato`
- `/candy-toys`
- `/brinquedos-com-doces`
- `/displays-para-lojas`
- `/doces-com-brinquedos-para-revenda`
- `/lancamentos`

## Variaveis de ambiente

```env
NEXT_PUBLIC_SITE_URL=https://www.candytoy.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5500000000000
```

## Assets

Os assets iniciais foram derivados do arquivo `Catalogo CandyToy.pdf` fornecido no workspace. As paginas renderizadas estao em `public/catalog/` e o PDF publico em `public/catalog/catalogo-candytoy-2025.pdf`.

Pendencia: substituir paginas inteiras por recortes oficiais de produto e logo transparente aprovado quando disponiveis.

## Motion e direcao visual

- Hero com Motion, fade/zoom inicial, elementos flutuantes e parallax por movimento do mouse.
- Secoes com reveal on scroll, backgrounds coloridos e imagens reais do catalogo em transparencia.
- Cards de produto, categoria, etapas e galeria com microinteracoes de zoom/hover.
- Logo temporaria tratada em `public/catalog/candytoy-logo-transparent.png` para remover o fundo amarelo do recorte original.

## Formularios

Os formularios usam Server Action e validacao server-side com Zod. Nesta primeira versao, o lead validado e registrado no log do servidor.

Pendencia antes de producao: integrar envio real para e-mail, CRM, planilha, webhook ou WhatsApp comercial, com antispam e politica de privacidade validada.

## Validacao

Comandos principais:

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm dev
```

## Riscos e pendencias

- Dados institucionais, telefone, e-mail, endereco, horario, politica de privacidade e representantes estao como `[PENDENTE DE CONFIRMACAO]`.
- Certificacoes, registros, EAN, idade recomendada e dimensoes nao foram inventados.
- WhatsApp usa placeholder enquanto o numero oficial nao for informado.
- Catalogo PDF nao substitui uma experiencia acessivel completa; o HTML do catalogo deve evoluir.
- Lighthouse/QA visual devem ser executados em ambiente com build validado.

## Commit sugerido

```txt
feat: initialize candy toy b2b nextjs site
```
