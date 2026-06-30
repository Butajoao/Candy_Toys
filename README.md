# Candy Toy B2B Site

Reconstrução do site Candy Toy como plataforma comercial B2B para lojistas, revendedores, atacadistas e distribuidores de brinquedos com doces.

## Stack

- Next.js App Router
- TypeScript strict
- Tailwind CSS com tokens semânticos
- Motion para animações sutis de UI
- `next/image` e `next/font`
- Server Actions com validação Zod
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
- `/lançamentos`

## Variáveis de ambiente

```env
NEXT_PUBLIC_SITE_URL=https://www.candytoy.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=5500000000000
```

## Assets

Os assets iniciais foram derivados do arquivo `Catalogo CandyToy.pdf` fornecido no workspace. As páginas renderizadas estão em `public/catalog/` e o PDF público em `public/catalog/catalogo-candytoy-2025.pdf`.

Pendência: substituir páginas inteiras por recortes oficiais de produto e logo transparente aprovado quando disponíveis.

## Motion e direção visual

- Hero com Motion, fade/zoom inicial, elementos flutuantes e parallax por movimento do mouse.
- Seções com reveal on scroll, backgrounds coloridos e imagens reais do catálogo em transparência.
- Cards de produto, categoria, etapas e galeria com microinterações de zoom/hover.
- Logo temporária tratada em `public/catalog/candytoy-logo-transparent.png` para remover o fundo amarelo do recorte original.

## Formulários

Os formulários usam Server Action e validação server-side com Zod. Nesta primeira versão, o lead validado é registrado no log do servidor.

Pendência antes de produção: integrar envio real para e-mail, CRM, planilha, webhook ou WhatsApp comercial, com antispam e política de privacidade validada.

## Validação

Comandos principais:

```bash
pnpm install
pnpm typecheck
pnpm build
pnpm dev
```

## Riscos e pendências

- Dados institucionais, telefone, e-mail, endereço, horário, política de privacidade e representantes estão como `[PENDENTE DE CONFIRMAÇÃO]`.
- Certificações, registros, EAN, idade recomendada e dimensões não foram inventados.
- WhatsApp usa placeholder enquanto o número oficial não for informado.
- Catálogo PDF não substitui uma experiência acessível completa; o HTML do catálogo deve evoluir.
- Lighthouse/QA visual devem ser executados em ambiente com build validado.

## Commit sugerido

```txt
feat: initialize candy toy b2b nextjs site
```
