# Plano de Atualização do Catálogo Candy Toy

## Fonte de Verdade

- Arquivo principal encontrado: `catalogo candytoys atualizado.pdf`
- Formato: PDF visual, sem texto extraível por `pdfplumber`
- Páginas renderizadas para inspeção: `tmp/catalog-update/rendered/page-01.png` a `page-08.png`
- PDF público atualizado: `public/catalog/catalogo-candytoy-atualizado.pdf`
- Imagens públicas atualizadas: `public/catalog/catalog-page-1.png` a `catalog-page-8.png`

## Produtos Identificados

| Produto | Ref. | Quantidade | Embarque | Página |
| --- | --- | --- | --- | --- |
| Turbo Hélice | 2000 | 15 x 22g | 6 displays | 2 |
| Turbo Star | 2005 | 15 x 22g | 6 displays | 2 |
| Bengala | 2010 | 15 x 42g | 4 displays | 2 |
| Porquinho Cofre | 2100 | 15 x 20g | 4 displays | 2 |
| Candy Espadas | 3500 a 3630 | 15 x 30g | 6 displays | 3 |
| Balas Mastigáveis Mamadeira | 4001 | 9 x 30g | 18 displays | 4 |
| Mini Turbo Hélice | 3010 | 12 x 5g | 20 displays | 5 |
| Mini Turbo Star | 3011 | 12 x 5g | 20 displays | 5 |
| Display Visor Helicóptero | 2050 | 20 x 15g | 5 displays | 6 |
| Monsters Happy | 2903 | 20 x 15g | 4 displays | 6 |
| Espada Big | 2821 | 20 x 45g | 1 x 20 unid. | 6 |
| Bengala Big | 2810 | 20 x 45g | 1 x 20 unid. | 6 |
| Coelhinho Balas | 2200 | 15 x 20g | 4 displays | 7 |
| Coelhinho Ovinhos | 2202 | 20 x 24g | 4 displays | 7 |
| Coelho Jr. Balas | 3001 | 30 x 5g | 6 displays | 7 |
| Coelho Funny | 2220 | 20 x 15g | 4 displays | 7 |

## Categorias Identificadas

- Displays e expositores
- Brinquedos com doces
- Candy Espadas
- Balas mastigáveis
- Lançamentos Mini Turbo
- Super BIG
- Coelhos
- Datas comemorativas

## Estratégia de Migração

1. Substituir o PDF público antigo pelo novo catálogo atualizado.
2. Re-renderizar as páginas do catálogo e manter os nomes públicos já usados pela UI.
3. Substituir `src/data/products.ts` por produtos derivados apenas do novo PDF.
4. Substituir `src/data/categories.ts` por categorias comerciais coerentes com o novo PDF.
5. Remover produto agregado antigo `Candy Coelhos` e cadastrar os quatro produtos de Coelhos individualmente.
6. Preservar rotas, layout, componentes, CTAs e estrutura B2B existentes.
7. Atualizar busca/filtros para comparação sem acentos.
8. Atualizar PDF do catálogo B2B, WhatsApp contextual, sitemap dinâmico e documentação.

## Páginas Afetadas

- `/`
- `/produtos`
- `/produtos/[slug]`
- `/catalogo-b2b`
- `/lancamentos`
- landings que usam `SeoLanding`
- `sitemap.xml`

## Dados Antigos Removidos ou Substituídos

- `public/catalog/catalogo-candytoy-2025.pdf` removido.
- `Catalogo CandyToy.pdf` removido da raiz do projeto.
- Produto genérico `Candy Coelhos` substituído por:
  - `Coelhinho Balas`
  - `Coelhinho Ovinhos`
  - `Coelho Jr. Balas`
  - `Coelho Funny`

## Riscos

- O PDF é visual e não possui camada de texto; a extração foi feita por inspeção visual.
- Imagens de produto ainda usam páginas inteiras do catálogo, não recortes individuais.
- EAN, certificações, idade recomendada, peso unitário e dados legais não aparecem no PDF e permanecem sem preenchimento.
- Produtos Candy Espadas foram tratados como uma linha/display B2B com 10 modelos, não como 10 produtos independentes.
