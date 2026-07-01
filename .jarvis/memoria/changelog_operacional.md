# Changelog Operacional

## 2026-06-30

- Lido `prompt.md`.
- Renderizado `Catalogo CandyToy.pdf` para PNG.
- Criado scaffold Next.js manualmente devido a restrição de nome da pasta com letra maiúscula no `create-next-app`.
- Criados componentes, dados, rotas, formulários, SEO técnico, README, AGENTS local e memória Jarvis.
- Corrigida cópia dos PNGs renderizados do catálogo para `public/catalog/`.
- Ajustada primeira dobra mobile para mostrar produto mais cedo.
- Validados `eslint`, `tsc --noEmit`, `next build` e smoke test HTTP das rotas principais.
- Adicionada camada de Motion: hero com mouse tracking/parallax, entradas fade/zoom, cards com hover/zoom e etapas animadas.
- Aplicados backgrounds coloridos com imagens reais do catálogo em transparência nas seções e páginas principais.
- Criado `public/catalog/candytoy-logo-transparent.png` com remoção do fundo amarelo do recorte da logo.
- Publicado projeto no GitHub `Butajoao/Candy_Toys`, com validação de `pnpm typecheck` e `pnpm build`.
- Revisados acentuação, gramática e textos em português no site, README, AGENTS local e memória Jarvis; revalidados `pnpm typecheck` e `pnpm build`.
- Incorporado `catalogo candytoys atualizado.pdf` como nova fonte de verdade do catálogo, substituindo produtos/categorias antigos por 16 produtos ativos e criando `CATALOG_UPDATE_PLAN.md`, `CATALOG_UPDATE_NOTES.md` e `CATALOG_QA_CHECKLIST.md`.
- Corrigido script `pnpm lint` para executar `eslint .`; validações `pnpm lint`, `pnpm typecheck`, `pnpm build` e smoke HTTP passaram após a atualização do catálogo.
