# Notas da Atualização do Catálogo

## Decisões Tomadas

- O arquivo `catalogo candytoys atualizado.pdf` foi tratado como fonte única de verdade.
- O PDF novo substituiu o PDF antigo no site público.
- Produtos foram cadastrados conforme aparecem nas páginas 2 a 7 do catálogo.
- `Candy Espadas` foi mantido como produto/linha comercial única, com modelos listados em tags e nota de origem.
- A linha `Coelhos` foi separada em quatro produtos porque o catálogo apresenta quantidades, referências e embalagens diferentes.
- `Mini Turbo Hélice` e `Mini Turbo Star` foram marcados como lançamentos porque o catálogo usa o selo `Novo`.
- Nenhum produto foi marcado como mais vendido, pois o catálogo atualizado não informa best-sellers.

## Campos Ausentes

- EAN
- Certificações e registros
- Idade recomendada
- Peso individual fora das quantidades comerciais
- Dimensões completas de embalagem
- Informações legais e regulatórias completas

## Campos Com Informação Parcial

- `Balas Mastigáveis Mamadeira`: altura visual indicada como 9,3 cm.
- `Mini Turbo Hélice` e `Mini Turbo Star`: altura visual indicada como 24,0 cm.
- `Candy Espadas`: refs. 3500 a 3630 agrupadas na linha comercial.

## Produtos Sem Imagem Individual

Todos os produtos usam a página do catálogo onde aparecem como imagem principal. Recortes individuais ainda estão pendentes.

## Slugs Criados

- `balas-mastigaveis-mamadeira`
- `mini-turbo-helice`
- `mini-turbo-star`
- `espada-big`
- `bengala-big`
- `coelhinho-balas`
- `coelhinho-ovinhos`
- `coelho-jr-balas`
- `coelho-funny`

## Redirects

Nenhum redirect foi criado nesta etapa. A rota antiga `/produtos/candy-coelhos` deixa de existir e cai no `not-found` padrão. Se houver tráfego indexado para essa URL, criar redirect para `/produtos?categoria=coelhos`.

## Pendências

- Criar recortes individuais otimizados por produto.
- Confirmar se os 10 modelos de Candy Espadas devem virar SKUs/páginas separadas.
- Confirmar se `Coelhos` deve aparecer também como subcategoria de `Datas comemorativas`.
- Confirmar telefone, e-mail, endereço, WhatsApp e dados institucionais.
- Rodar QA visual em browser e Lighthouse antes de produção.

## Validações Executadas

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- Smoke HTTP em `/`, `/produtos`, `/produtos/mini-turbo-helice`, `/produtos/coelho-funny`, `/catalogo-b2b` e `/sitemap.xml`
