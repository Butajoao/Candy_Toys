# PROMPT.MD — Atualização de Produtos e Categorias pelo Novo Catálogo Candy Toy

## 0. Papel deste arquivo

Este arquivo deve guiar o **Jarvis Enterprise** e seus agentes na atualização completa dos **produtos, categorias, famílias comerciais, imagens, descrições e dados de catálogo** do novo site Candy Toy.

Este prompt **não substitui a documentação estratégica da reconstrução do site**. Ele complementa a refatoração já planejada com uma missão específica: **trocar completamente o catálogo antigo pelo novo catálogo oficial `catalogo candytoys atualizado` anexado à pasta do projeto**, preservando tudo que já foi definido como correto na arquitetura, UX, UI, conversão B2B, identidade visual, SEO e performance.

A diretriz central é:

> Não reinventar a roda. Atualizar produtos e categorias com base no novo catálogo oficial, mantendo o que já funciona e corrigindo apenas o que for necessário para refletir o catálogo atual.

---

## 1. Missão do Jarvis

Jarvis deve atuar como **coordenador técnico, Product Lead e guardião da consistência comercial** para garantir que o novo catálogo da Candy Toy seja incorporado ao site de forma limpa, rastreável, validada e pronta para produção.

A missão não é redesenhar o site inteiro. A missão é atualizar a camada de conteúdo/produto/categoria para que o site passe a representar corretamente o portfólio atual da Candy Toy.

### Resultado esperado

Ao final da execução, o site deve conter:

1. Somente produtos do novo catálogo oficial.
2. Somente categorias/famílias derivadas do novo catálogo oficial.
3. Produtos antigos removidos, arquivados ou desativados, nunca exibidos indevidamente.
4. Imagens atualizadas e associadas corretamente aos produtos.
5. Descrições, slugs, metadados, CTAs, rotas e páginas compatíveis com o novo catálogo.
6. Estrutura B2B preservada: catálogo para lojistas, revendedores, distribuidores, representantes e atacadistas.
7. SEO e sitemap atualizados.
8. QA final validando que não restaram produtos/categorias antigos visíveis.

---

## 2. Contexto estratégico preservado

O projeto Candy Toy já possui uma direção estratégica definida:

- site B2B;
- foco em lojistas, bombonieres, mercados, papelarias, lojas de festa, atacadistas, distribuidores e representantes;
- experiência visual colorida, lúdica e profissional;
- uso da logo atual;
- cores derivadas da logo;
- CTAs comerciais fortes;
- formulários e WhatsApp contextualizados;
- arquitetura em Next.js com TypeScript e Tailwind;
- performance alta;
- SEO técnico;
- foco em conversão.

Esta atualização deve respeitar esse direcionamento.

### O que não deve mudar sem autorização explícita

Jarvis e os agentes **não devem alterar** sem necessidade:

- identidade visual principal;
- design system;
- tokens de cor;
- tipografia;
- estrutura geral da Home;
- estratégia B2B;
- componentes já aprovados;
- regras principais de CTA;
- arquitetura base do projeto;
- stack técnica;
- formulários comerciais;
- animações globais;
- layout aprovado;
- copy institucional geral, exceto quando fizer referência a produtos/categorias antigos.

---

## 3. Stack técnica obrigatória preservada

A atualização deve respeitar a stack do projeto:

```txt
Framework: Next.js
Linguagem: TypeScript
Estilização: Tailwind CSS
Arquitetura: App Router
Deploy: Vercel
Animações de UI: Motion
Animações cinematográficas: GSAP + ScrollTrigger
Smooth scroll: Lenis
Imagens: next/image
Fontes: next/font + Variable Fonts
SEO: Metadata API, Sitemap, Robots, Open Graph
Formulário: Server Action / API Route
Analytics: Vercel Analytics ou Google Analytics
Performance: Lighthouse 95+, Core Web Vitals
```

### Regras técnicas

- Manter **Next.js App Router**.
- Manter **TypeScript strict** quando possível.
- Manter dados de catálogo fortemente tipados.
- Usar `next/image` para imagens de produto.
- Atualizar `sitemap.ts`, metadados e Open Graph quando houver mudança de rotas.
- Não adicionar dependências novas para resolver problemas simples de catálogo.
- Não criar CMS do zero, exceto se já estiver previsto no projeto ou for explicitamente solicitado.
- Não transformar a atualização de catálogo em redesign completo.

---

## 4. Fonte de verdade do catálogo

O novo catálogo oficial informado pelo usuário se chama exatamente:

```txt
catalogo candytoys atualizado
```

Jarvis deve tratar qualquer pasta, arquivo, diretório compactado ou conjunto de arquivos com esse nome como a **fonte única de verdade** para esta atualização. Ao buscar o material no projeto, priorizar explicitamente esse nome antes de qualquer outro caminho genérico.

O **novo catálogo `catalogo candytoys atualizado`, anexado na pasta do projeto**, passa a ser a única fonte de verdade para produtos e categorias.

Jarvis deve localizar e inspecionar os arquivos de catálogo disponíveis no projeto, especialmente em caminhos prováveis como:

```txt
/catalogo candytoys atualizado
/catalogo-candytoys-atualizado
/catalogo
/catalogo-novo
/new-catalog
/docs/catalogo
/docs/catalogo-novo
/assets/catalogo
/public/catalogo
/public/products
/public/produtos
/data
/src/data
```

Formatos possíveis:

```txt
.pdf
.xlsx
.xls
.csv
.json
.docx
.png
.jpg
.jpeg
.webp
.zip
```

### Regras de interpretação

1. O catálogo novo prevalece sobre qualquer dado antigo do site.
2. Não misturar produtos antigos com produtos novos.
3. Não deduzir produtos que não estejam no catálogo.
4. Não inventar sabores, quantidades, EAN, medidas, categorias ou certificações.
5. Quando uma informação estiver ausente, registrar como `null`, `undefined`, `Sob consulta` ou `A confirmar`, conforme o padrão de dados do projeto.
6. Quando houver conflito entre arquivo antigo e novo catálogo, usar o novo catálogo.
7. Quando houver conflito dentro do próprio novo catálogo, registrar em `CATALOG_UPDATE_NOTES.md` e aplicar a opção mais conservadora.
8. Manter nomes comerciais conforme o catálogo, corrigindo apenas erros óbvios de acentuação, capitalização ou espaçamento quando necessário.
9. Preservar rastreabilidade: cada produto deve ter referência ao arquivo/página/linha/imagem de origem sempre que possível.

---

## 5. Escopo exato da atualização

### Dentro do escopo

Jarvis deve atualizar:

- lista de produtos;
- categorias;
- subcategorias;
- famílias comerciais;
- slugs;
- imagens;
- descrições comerciais;
- descrições técnicas;
- dados B2B;
- páginas de categoria;
- páginas de produto;
- cards de produto;
- carrosséis de lançamentos;
- seção de mais vendidos, se o catálogo indicar;
- seção de destaques, se o catálogo indicar;
- filtros de produto;
- busca, se existir;
- sitemap;
- metadados SEO;
- Open Graph de produto/categoria;
- mensagens de WhatsApp contextualizadas;
- eventos de analytics ligados a produtos/categorias;
- testes relacionados a catálogo.

### Fora do escopo

Jarvis não deve alterar, salvo necessidade técnica clara:

- layout global aprovado;
- estratégia B2B;
- identidade visual;
- animações globais;
- fluxo de formulário comercial;
- infraestrutura de deploy;
- stack;
- política de analytics;
- regras de LGPD;
- design system inteiro;
- componentes que funcionam corretamente;
- página institucional, exceto textos que mencionem produtos/categorias antigas.

---

## 6. Handoffs obrigatórios

Jarvis deve coordenar os agentes abaixo.

### 6.1 `dados_master` — obrigatório

Responsável por:

- localizar e interpretar o novo catálogo;
- extrair produtos, categorias e atributos;
- normalizar os dados;
- definir schema final;
- mapear produtos antigos para remoção/desativação;
- gerar arquivo estruturado de produtos;
- gerar arquivo estruturado de categorias;
- criar relatório de inconsistências.

Saída esperada:

```txt
CATALOG_UPDATE_PLAN.md
CATALOG_UPDATE_NOTES.md
products.ts | products.json | products.yaml
categories.ts | categories.json | categories.yaml
```

### 6.2 `produto_growth_master` — obrigatório

Responsável por:

- validar nomes comerciais;
- ajustar descrições B2B;
- garantir linguagem para lojistas;
- definir categorias com lógica comercial;
- revisar CTAs por tipo de produto;
- garantir que a nova organização ajude conversão.

Saída esperada:

```txt
copy comercial de produtos
copy de categorias
regras de destaque
sugestões de produtos relacionados
```

### 6.3 `frontend_master` — obrigatório

Responsável por:

- adaptar componentes existentes aos novos dados;
- atualizar cards de produto;
- atualizar páginas de categoria;
- atualizar página de produto;
- validar imagens com `next/image`;
- ajustar filtros e grids;
- preservar responsividade.

### 6.4 `backend_architect` — se houver API, Server Action, orçamento ou CMS

Responsável por:

- ajustar endpoints de produto;
- ajustar Server Actions ligadas a cotação;
- garantir que formulário receba produto/categoria atual;
- ajustar payload do WhatsApp, CRM, e-mail ou webhook;
- validar tipos e schema.

### 6.5 `qa_master` — obrigatório

Responsável por:

- validar que produtos antigos sumiram;
- validar que produtos novos aparecem;
- validar links, imagens e rotas;
- validar mobile;
- validar SEO;
- validar performance;
- validar CTAs.

### 6.6 `observabilidade_master` — recomendado

Responsável por:

- revisar eventos de analytics de produto/categoria;
- garantir tracking dos novos CTAs;
- validar `view_product`, `view_category`, `click_product_quote` e `click_whatsapp_product`.

### 6.7 `governanca_arquitetura_master` — obrigatório se houver mudança de padrão

Responsável por:

- garantir que a atualização siga a arquitetura já definida;
- impedir soluções improvisadas;
- validar impacto em documentação;
- revisar Definition of Done.

---

## 7. Modelo de dados recomendado

Jarvis deve adaptar ao padrão real do projeto. Caso ainda não exista schema, usar um modelo semelhante ao abaixo.

```ts
export type ProductStatus = 'active' | 'inactive' | 'draft';

export type ProductAudience =
  | 'lojistas'
  | 'bombonieres'
  | 'mercados'
  | 'papelarias'
  | 'lojas-de-festa'
  | 'atacadistas'
  | 'distribuidores'
  | 'representantes';

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  status: ProductStatus;
  categorySlug: string;
  subcategorySlug?: string;
  family?: string;
  line?: string;
  description: string;
  b2bDescription?: string;
  technicalDescription?: string;
  displayQuantity?: number | null;
  boxQuantity?: number | null;
  unitQuantity?: number | null;
  candyType?: string | null;
  flavors?: string[];
  recommendedAge?: string | null;
  sku?: string | null;
  ean?: string | null;
  dimensions?: {
    width?: number | null;
    height?: number | null;
    depth?: number | null;
    unit?: 'cm' | 'mm' | 'm';
  } | null;
  weight?: {
    value?: number | null;
    unit?: 'g' | 'kg';
  } | null;
  certification?: {
    type?: string | null;
    number?: string | null;
    notes?: string | null;
  } | null;
  images: ProductImage[];
  badges?: string[];
  tags?: string[];
  targetAudience?: ProductAudience[];
  isLaunch?: boolean;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  relatedProductSlugs?: string[];
  source?: {
    file?: string;
    page?: string | number;
    row?: string | number;
    notes?: string;
  };
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
};

export type ProductImage = {
  src: string;
  alt: string;
  type?: 'product' | 'display' | 'package' | 'lifestyle' | 'technical';
  width?: number;
  height?: number;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  b2bDescription?: string;
  image?: string;
  icon?: string;
  order: number;
  isVisible: boolean;
  seo: {
    title: string;
    description: string;
    ogImage?: string;
  };
};
```

### Regras para campos ausentes

- Não inventar dados técnicos.
- Não preencher EAN/SKU sem fonte.
- Não inserir certificação sem fonte.
- Não definir `isBestSeller` se o catálogo não indicar.
- Não definir `isLaunch` se o catálogo não indicar ou se não houver validação comercial.
- Quando a quantidade por display/caixa não estiver clara, usar `null` e registrar em `CATALOG_UPDATE_NOTES.md`.

---

## 8. Regras para categorias

Categorias devem nascer do novo catálogo e da lógica comercial B2B.

### Objetivo das categorias

As categorias devem ajudar o lojista a encontrar rapidamente produtos por:

- tipo de produto;
- forma de exposição;
- linha/família;
- ocasião de venda;
- tipo de doce;
- potencial de ponto de venda.

### Exemplos possíveis

Usar apenas se forem compatíveis com o novo catálogo:

```txt
Displays e Expositores
Brinquedos com Doces
Pirulitos Divertidos
Ovos Surpresa
Datas Comemorativas
Lançamentos
Mais Vendidos
Linha Sortida
Produtos para Bomboniere
Produtos para Mercado
Produtos para Papelaria
```

### Regras obrigatórias

1. Não manter categoria antiga sem produto novo associado.
2. Não criar categoria vazia.
3. Não criar categoria com apenas um produto, exceto quando ela for estrategicamente necessária.
4. Não criar categorias redundantes.
5. Não usar nomes genéricos demais como `Diversos` ou `Outros`, salvo temporariamente em modo draft.
6. Toda categoria visível precisa ter descrição B2B.
7. Toda categoria precisa ter slug limpo, estável e amigável para SEO.

### Slug de categoria

Padrão:

```txt
Nome: Displays e Expositores
Slug: displays-e-expositores
```

---

## 9. Regras para produtos

### Produto antigo

Qualquer produto que exista no site atual, mas não exista no novo catálogo, deve ser:

- removido da navegação pública; ou
- marcado como `inactive`; ou
- movido para arquivo de legado, se necessário para histórico.

Não deixar produto antigo visível no site final.

### Produto novo

Todo produto do novo catálogo deve ser cadastrado com:

- nome;
- slug;
- categoria;
- imagem principal;
- descrição curta;
- descrição B2B;
- CTA de cotação;
- SEO básico;
- status `active`, salvo se o catálogo indicar produto futuro/draft.

### Slug de produto

Padrão:

```txt
Nome: Turbo Hélice com Doce
Slug: turbo-helice-com-doce
```

Regras:

- sem acentos;
- minúsculo;
- separado por hífen;
- sem caracteres especiais;
- estável;
- não incluir código interno no slug, exceto se necessário para diferenciar produtos homônimos.

### Descrição B2B padrão

Quando o catálogo trouxer apenas dados básicos, criar descrição comercial curta, sem inventar dados técnicos.

Modelo:

```txt
Produto colorido e divertido da linha Candy Toy, indicado para exposição em lojas, mercados, bombonieres, papelarias e pontos de venda com foco em compra por impulso. Consulte condições comerciais para revenda.
```

Se houver display/quantidade:

```txt
Display pronto para exposição, ideal para lojas, mercados, bombonieres e papelarias. Produto pensado para gerar atratividade no ponto de venda e facilitar a reposição no balcão.
```

---

## 10. Regras para imagens

### Prioridade

1. Imagens oficiais do novo catálogo.
2. Imagens anexadas na pasta junto ao catálogo.
3. Imagens já existentes no projeto, apenas se corresponderem exatamente ao produto novo.
4. Placeholder temporário somente em ambiente de desenvolvimento, com TODO explícito.

### Regras obrigatórias

- Usar `next/image`.
- Criar `alt` descritivo e comercial.
- Não usar imagem de produto antigo em produto novo sem conferência.
- Não usar imagem genérica para produto final.
- Otimizar nomes dos arquivos.
- Evitar espaços, acentos e caracteres especiais nos nomes.
- Preferir `.webp` quando houver pipeline de otimização.

### Padrão de nome de imagem

```txt
/public/products/<product-slug>/principal.webp
/public/products/<product-slug>/display.webp
/public/products/<product-slug>/embalagem.webp
```

### Alt text

Modelo:

```txt
Produto [Nome do Produto] da Candy Toy para exposição em lojas e revenda
```

---

## 11. Regras para páginas afetadas

### Home

Atualizar somente áreas que exibem produtos/categorias:

- categorias em destaque;
- lançamentos;
- mais vendidos;
- produtos destacados;
- imagens de produto;
- links para categorias;
- CTAs contextuais se mencionarem linha antiga.

Não redesenhar a Home inteira sem necessidade.

### Página de produtos

Atualizar:

- grid;
- filtros;
- ordenação;
- categorias;
- cards;
- empty states;
- SEO.

### Página de categoria

Atualizar:

- nome;
- descrição;
- produtos associados;
- imagem da categoria;
- metadados;
- breadcrumb;
- CTA.

### Página de produto

Atualizar:

- nome;
- galeria;
- informações técnicas;
- descrição B2B;
- produtos relacionados;
- mensagem de WhatsApp;
- JSON-LD se existir;
- metadata.

### Catálogo B2B

Atualizar:

- PDF ou material de download;
- formulário, se ele mencionar linhas antigas;
- texto de apoio;
- origem do lead;
- evento de analytics.

---

## 12. SEO e rotas

### Regras SEO

- Atualizar `sitemap.ts` para refletir produtos e categorias novos.
- Remover produtos antigos do sitemap.
- Atualizar metadata de produtos e categorias.
- Atualizar Open Graph quando houver imagem nova.
- Evitar páginas 404 em massa sem tratamento.
- Criar redirects se rotas antigas tiverem tráfego ou indexação relevante.

### Redirects

Se um produto antigo deixar de existir:

1. Redirecionar para categoria equivalente nova, se houver.
2. Redirecionar para `/produtos`, se não houver equivalente.
3. Registrar decisão em `CATALOG_UPDATE_NOTES.md`.

Exemplo:

```ts
{
  source: '/produto/produto-antigo',
  destination: '/produtos',
  permanent: false,
}
```

### Metadata padrão para produto

```ts
title: `${product.name} | Candy Toy`,
description: product.seo.description,
openGraph: {
  title: `${product.name} | Candy Toy`,
  description: product.seo.description,
  images: [product.seo.ogImage ?? product.images[0]?.src],
}
```

---

## 13. CTAs e WhatsApp contextual

Os CTAs já definidos na refatoração devem ser preservados, mas conectados aos novos produtos.

### CTAs de produto

```txt
Pedir cotação
Falar com vendedor
Adicionar ao orçamento
Ver produtos relacionados
```

### CTAs de categoria

```txt
Ver produtos da linha
Solicitar catálogo da categoria
Falar com representante
Comprar para minha loja
```

### Mensagem de WhatsApp para produto

```txt
Olá, tenho interesse no produto [NOME_DO_PRODUTO] da Candy Toy para revenda. Pode me enviar condições comerciais?
```

### Mensagem de WhatsApp para categoria

```txt
Olá, tenho interesse nos produtos da categoria [NOME_DA_CATEGORIA] da Candy Toy para minha loja. Pode me enviar o catálogo e condições comerciais?
```

### Mensagem geral

```txt
Olá, tenho interesse em comprar produtos Candy Toy para minha loja. Vim pelo site e gostaria de receber o catálogo B2B.
```

---

## 14. Analytics

Atualizar eventos para refletir os novos produtos e categorias.

### Eventos obrigatórios

```txt
view_product
view_category
click_product_quote
click_whatsapp_product
click_whatsapp_category
click_download_catalog
submit_b2b_form
filter_product
search_product
click_related_product
```

### Payload recomendado

```ts
{
  product_id?: string;
  product_slug?: string;
  product_name?: string;
  category_slug?: string;
  category_name?: string;
  source: 'catalog_update';
  page_path: string;
}
```

### Regra

Não expor dados pessoais em eventos de analytics.

---

## 15. Documentação obrigatória da atualização

Jarvis deve criar ou atualizar os seguintes arquivos:

```txt
CATALOG_UPDATE_PLAN.md
CATALOG_UPDATE_NOTES.md
CATALOG_QA_CHECKLIST.md
README.md, se houver impacto relevante
AGENTS.md, se existir no projeto
```

### `CATALOG_UPDATE_PLAN.md`

Deve conter:

- arquivos de catálogo encontrados;
- produtos identificados;
- categorias identificadas;
- estratégia de migração;
- dados antigos a remover/desativar;
- páginas afetadas;
- riscos;
- ordem de execução.

### `CATALOG_UPDATE_NOTES.md`

Deve conter:

- campos ausentes;
- conflitos;
- produtos sem imagem;
- produtos sem categoria clara;
- slugs alterados;
- redirects criados;
- decisões tomadas;
- pendências.

### `CATALOG_QA_CHECKLIST.md`

Deve conter checklist de validação final.

---

## 16. Plano de execução obrigatório

Jarvis deve seguir as fases abaixo.

### Fase 1 — Inventário

1. Localizar novo catálogo.
2. Listar todos os arquivos relevantes.
3. Identificar formato dos dados.
4. Identificar imagens associadas.
5. Identificar dados antigos do projeto.
6. Criar `CATALOG_UPDATE_PLAN.md`.

### Fase 2 — Extração e normalização

1. Extrair produtos.
2. Extrair categorias/famílias.
3. Normalizar nomes.
4. Gerar slugs.
5. Mapear imagens.
6. Identificar campos faltantes.
7. Criar/atualizar schema.
8. Criar `CATALOG_UPDATE_NOTES.md`.

### Fase 3 — Substituição dos dados antigos

1. Desativar/remover produtos antigos.
2. Remover categorias antigas sem produto.
3. Inserir produtos novos.
4. Inserir categorias novas.
5. Associar produtos às categorias.
6. Atualizar destaques, lançamentos e relacionados.

### Fase 4 — Integração com UI

1. Atualizar grids.
2. Atualizar cards.
3. Atualizar páginas de produto.
4. Atualizar páginas de categoria.
5. Atualizar Home somente onde houver produto/categoria.
6. Validar mobile.
7. Validar imagens.

### Fase 5 — SEO, rotas e analytics

1. Atualizar sitemap.
2. Atualizar metadata.
3. Atualizar Open Graph.
4. Criar redirects necessários.
5. Atualizar eventos de analytics.
6. Validar mensagens de WhatsApp.

### Fase 6 — QA final

1. Rodar lint.
2. Rodar typecheck.
3. Rodar build.
4. Validar páginas principais.
5. Validar produtos novos.
6. Validar ausência de produtos antigos.
7. Validar responsividade.
8. Validar SEO.
9. Validar Lighthouse.
10. Criar `CATALOG_QA_CHECKLIST.md`.

---

## 17. Critérios de aceite

A tarefa só pode ser considerada pronta quando todos os critérios abaixo forem verdadeiros.

### Catálogo

- [ ] Todos os produtos do novo catálogo foram identificados.
- [ ] Todos os produtos ativos do site pertencem ao novo catálogo.
- [ ] Produtos antigos não aparecem publicamente.
- [ ] Categorias antigas vazias foram removidas ou desativadas.
- [ ] Categorias novas refletem o catálogo atual.
- [ ] Não existem produtos sem categoria pública, salvo draft documentado.

### Dados

- [ ] Todos os produtos têm `id`, `slug`, `name`, `categorySlug`, `description`, `images` e `seo`.
- [ ] Campos ausentes foram documentados.
- [ ] Nenhum dado técnico foi inventado.
- [ ] Slugs são limpos e únicos.
- [ ] Produtos relacionados apontam para produtos existentes.

### Imagens

- [ ] Produto ativo possui imagem principal.
- [ ] Imagens usam `next/image`.
- [ ] `alt` text foi preenchido.
- [ ] Não há imagem quebrada.
- [ ] Não há imagem antiga associada incorretamente a produto novo.

### UI/UX

- [ ] Cards renderizam corretamente.
- [ ] Página de produto renderiza corretamente.
- [ ] Página de categoria renderiza corretamente.
- [ ] Home não exibe produto/categoria antiga.
- [ ] CTAs continuam funcionando.
- [ ] Mobile validado.

### SEO

- [ ] Sitemap atualizado.
- [ ] Metadata atualizada.
- [ ] Open Graph atualizado.
- [ ] Redirects criados quando necessário.
- [ ] Não existem links internos quebrados.

### Conversão

- [ ] WhatsApp recebe produto/categoria correta na mensagem.
- [ ] Formulário de cotação recebe produto/categoria correta, se aplicável.
- [ ] Eventos de analytics carregam produto/categoria correta.

### Qualidade técnica

- [ ] `npm run lint` passa.
- [ ] `npm run typecheck` passa, se existir.
- [ ] `npm run build` passa.
- [ ] Lighthouse segue meta do projeto.
- [ ] Nenhuma dependência desnecessária foi adicionada.
- [ ] Documentação da atualização foi criada.

---

## 18. Comandos sugeridos

Jarvis deve adaptar aos scripts reais do projeto.

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run test
npm run dev
```

Se o projeto usar `pnpm` ou `yarn`, seguir o gerenciador já existente no lockfile.

---

## 19. Estratégia de commits

Usar commits pequenos, rastreáveis e objetivos.

Sugestão:

```txt
chore(catalog): inventory new candy toy catalog files
feat(catalog): replace product and category dataset
feat(products): update product and category pages with new catalog
feat(seo): refresh product metadata sitemap and redirects
test(catalog): add catalog update QA checklist
```

Se a atualização for feita em uma única branch:

```txt
branch: refactor/catalog-update-new-candy-toy
```

---

## 20. Riscos e cuidados

### Risco 1 — Catálogo incompleto

Se o catálogo não tiver todos os dados técnicos, não inventar. Documentar pendências.

### Risco 2 — Imagens sem correspondência

Se não houver imagem clara para algum produto, marcar como pendência e usar placeholder apenas em ambiente de desenvolvimento.

### Risco 3 — SEO antigo indexado

Criar redirects para evitar perda brusca de tráfego.

### Risco 4 — Categorias artificiais

Não criar categorias apenas para preencher menu. Categoria precisa fazer sentido comercial.

### Risco 5 — Mistura entre catálogo antigo e novo

Proibido manter produto antigo visível sem confirmação explícita.

### Risco 6 — Mudança visual fora do escopo

Não transformar atualização de catálogo em novo redesign.

---

## 21. Formato de resposta esperado do Jarvis

Ao concluir, Jarvis deve responder no padrão abaixo:

```txt
1. Entendimento técnico
2. Arquivos de catálogo encontrados
3. Produtos e categorias identificados
4. Decisões tomadas
5. Implementação realizada
6. Produtos/categorias removidos ou desativados
7. Pendências e inconsistências
8. Validações executadas
9. Riscos restantes
10. Commits sugeridos
```

---

## 22. Comando principal para o Jarvis

Jarvis, execute a atualização do catálogo Candy Toy seguindo estas regras:

1. Leia este `prompt.md`.
2. Localize o novo catálogo anexado à pasta do projeto.
3. Trate o novo catálogo como fonte única de verdade.
4. Faça inventário dos produtos, categorias e imagens atuais.
5. Faça inventário do novo catálogo.
6. Substitua completamente produtos e categorias antigos pelos novos.
7. Preserve a arquitetura, UI, UX, estratégia B2B, CTAs e stack já definidas.
8. Atualize páginas, dados, imagens, SEO, sitemap, analytics e mensagens de WhatsApp conforme necessário.
9. Não invente dados ausentes.
10. Documente inconsistências e pendências.
11. Rode validações técnicas e QA.
12. Só considere pronto quando os critérios de aceite forem cumpridos.

---

## 23. Princípio final

A atualização deve ser simples, limpa e comercialmente correta.

> O site já tem uma estratégia de refatoração. Agora o trabalho é fazer o catálogo novo entrar com precisão, sem bagunçar o que já foi definido, sem manter resquícios antigos e sem criar complexidade desnecessária.
