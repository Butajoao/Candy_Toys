# Checklist de QA da Atualização do Catálogo

## Catálogo

- [x] Novo PDF localizado: `catalogo candytoys atualizado.pdf`
- [x] PDF renderizado visualmente em 8 páginas
- [x] Produtos antigos revisados contra o novo catálogo
- [x] Produtos ativos do site substituídos pelo catálogo atualizado
- [x] Produto agregado antigo `Candy Coelhos` removido
- [x] Categorias vazias evitadas

## Dados

- [x] Produtos possuem `id`, `slug`, `name`, `category`, `description` e `images`
- [x] Slugs limpos e sem acentos
- [x] Produtos relacionados continuam baseados em categoria
- [x] Campos ausentes documentados
- [x] Dados técnicos não foram inventados

## Imagens

- [x] PDF público atualizado
- [x] Páginas renderizadas do catálogo atualizadas em `public/catalog`
- [x] Componentes continuam usando `next/image`
- [ ] Recortes individuais por produto criados
- [ ] QA visual em browser concluído

## UI/UX

- [x] Grid de produtos usa o novo dataset
- [x] Página de produto usa o novo dataset
- [x] Home usa categorias/produtos atualizados
- [x] Landing de lançamentos aponta para Mini Turbo
- [x] Busca e filtro normalizam acentos
- [ ] Validação mobile em browser concluída

## SEO e Conversão

- [x] Sitemap dinâmico passa a usar os novos slugs
- [x] Metadata de produto deriva do novo dataset
- [x] WhatsApp contextual menciona produto Candy Toy para revenda
- [x] Página de catálogo aponta para o PDF atualizado
- [ ] Redirect da antiga rota `candy-coelhos` avaliado com dados de tráfego

## Validações Técnicas

- [x] `pnpm lint`
- [x] `pnpm typecheck`
- [x] `pnpm build`
- [x] Smoke test HTTP
- [ ] Lighthouse
