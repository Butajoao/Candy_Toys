# PROMPT.MD — Reconstrução Completa do Site Candy Toy / Candy Toys

## 0. Papel deste arquivo

Este arquivo é o prompt operacional que deve guiar o ecossistema **Jarvis Enterprise** na reconstrução completa do site **Candy Toy / Candy Toys**.

Ele deve ser usado como fonte central de orientação para planejamento, arquitetura, implementação, validação, documentação e handoff entre agentes.

O objetivo não é apenas trocar o layout atual. O objetivo é transformar o site em uma experiência digital B2B moderna, comercial, performática, confiável e alinhada ao segmento de **brinquedos com doces para lojistas, revendedores, atacadistas e distribuidores**.

---

## 1. Contexto do projeto

A Candy Toy possui um site atual que aparenta estar vazio, sem vida, com estrutura genérica, linguagem pouco comercial e aparência de template WordPress amador.

A empresa possui logo existente e ela deve ser preservada. A nova identidade visual do site deve ser construída a partir das cores, formas e energia da logo.

A percepção estratégica é que o público principal do site não é o consumidor final, mas sim o público **B2B**:

- lojistas;
- bombonieres;
- mercados;
- minimercados;
- papelarias;
- lojas de festa;
- lojas de brinquedos;
- distribuidores;
- atacadistas;
- representantes comerciais;
- revendedores regionais;
- e-commerces que revendem produtos infantis.

O novo site deve deixar isso claro desde a primeira dobra.

### Posicionamento recomendado

> Candy Toy é uma marca brasileira de brinquedos com doces para lojistas que querem produtos coloridos, divertidos e de alto giro no ponto de venda.

### Ideia central da experiência

> O produto encanta a criança, mas o site precisa convencer o lojista.

---

## 2. Missão do Jarvis

Jarvis deve atuar como **Tech Lead Master, Product Lead e coordenador de agentes** para transformar esta visão em uma reconstrução completa, governada e pronta para produção.

Jarvis não deve executar tudo sozinho quando houver especialistas disponíveis. Deve orquestrar agentes, skills e quality gates.

### Responsabilidades centrais do Jarvis

1. Ler este `prompt.md` como fonte de verdade do projeto.
2. Criar ou atualizar memória local do projeto.
3. Mapear requisitos funcionais, visuais, técnicos e comerciais.
4. Definir plano de execução por fases.
5. Delegar para agentes especialistas.
6. Consolidar decisões arquiteturais.
7. Impedir soluções genéricas, pobres ou não verificáveis.
8. Validar qualidade antes de considerar entrega pronta.
9. Documentar decisões, trade-offs, riscos e próximos passos.
10. Garantir que a entrega esteja alinhada a B2B, conversão, UX, SEO, performance e identidade Candy Toy.

---

## 3. Stack técnica obrigatória

A reconstrução deve seguir a stack abaixo:

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

### Regras técnicas obrigatórias

- Usar **Next.js App Router**.
- Usar **TypeScript strict** sempre que possível.
- Usar **Tailwind CSS** com tokens semânticos.
- Usar **Server Components** por padrão.
- Usar **Client Components** apenas quando houver interação real.
- Usar `next/image` para imagens.
- Usar `next/font` para fontes.
- Usar `Metadata API` para SEO.
- Gerar `sitemap.ts` e `robots.ts`.
- Preparar Open Graph e Twitter Card.
- Implementar formulários com Server Action ou API Route.
- Preparar deploy na Vercel.
- Medir performance com Lighthouse.
- Buscar Lighthouse 95+ em Performance, Accessibility, Best Practices e SEO.
- Não usar bibliotecas pesadas sem justificativa.
- Não usar GSAP em componentes simples onde Motion resolve.
- Usar GSAP + ScrollTrigger apenas em seções cinematográficas planejadas.
- Usar Lenis com cuidado, sem prejudicar acessibilidade, performance ou comportamento nativo.

---

## 4. Handoffs obrigatórios do ecossistema Jarvis

Com base no `jarvis.toml`, Jarvis deve envolver os seguintes agentes quando aplicável:

### `frontend_master`

Responsável por:

- arquitetura visual;
- componentes;
- páginas;
- responsividade;
- Tailwind;
- Motion;
- GSAP;
- Lenis;
- acessibilidade de interface;
- performance visual;
- integração com `next/image` e `next/font`.

### `backend_architect`

Responsável por:

- Server Actions;
- API Routes;
- envio de formulário;
- validação de payload;
- integração com e-mail, CRM, planilha, webhook ou WhatsApp;
- modelagem inicial de dados de produto, categoria e lead.

### `dados_master`

Responsável por:

- estrutura de dados de produtos;
- catálogo;
- categorias;
- campos B2B;
- eventos de analytics;
- organização de dados para futura área administrativa ou CMS.

### `seguranca_master`

Acionar obrigatoriamente quando houver:

- formulário com dados pessoais;
- CNPJ;
- telefone;
- e-mail;
- integração externa;
- webhook;
- API;
- deploy;
- coleta de analytics;
- cookies;
- LGPD.

### `devops_cloud_master`

Responsável por:

- configuração Vercel;
- variáveis de ambiente;
- preview deployments;
- domínio;
- build;
- CI/CD;
- headers;
- caching;
- observabilidade básica.

### `qa_master`

Responsável por:

- plano de testes;
- validação visual;
- validação responsiva;
- validação de formulários;
- validação SEO;
- validação de acessibilidade;
- validação de performance;
- regressão antes do deploy.

### `observabilidade_master`

Responsável por:

- Vercel Analytics;
- Google Analytics/GA4 quando escolhido;
- eventos de conversão;
- monitoramento de Web Vitals;
- logs de erro;
- métricas comerciais.

### `governanca_arquitetura_master`

Responsável por:

- decisões arquiteturais;
- padrões de pasta;
- padrões de componente;
- limites de dependências;
- documentação técnica;
- Definition of Done.

### `produto_growth_master`

Responsável por:

- narrativa B2B;
- CTAs;
- funil de conversão;
- copywriting;
- arquitetura de informação;
- proposta de valor;
- estratégia de catálogo;
- WhatsApp e lead capture.

### `mobile_master`

Responsável por:

- experiência mobile-first;
- menu mobile;
- sticky CTA;
- performance em 4G;
- gestos e scroll;
- legibilidade;
- comportamento do WhatsApp.

### `ai_engineering_master`

Acionar apenas se houver necessidade real de:

- geração assistida de descrições de produto;
- classificação automática de produtos;
- recomendação inteligente;
- busca semântica;
- enriquecimento de catálogo.

Não usar IA sem necessidade nesta primeira versão.

---

## 5. Objetivo de negócio

O novo site deve atuar como máquina comercial B2B.

### Objetivos principais

1. Fazer o lojista entender rapidamente o que a Candy Toy vende.
2. Deixar evidente que a marca vende para revenda, atacado, lojistas e distribuidores.
3. Valorizar produtos em display e ponto de venda.
4. Gerar leads qualificados.
5. Incentivar contato via WhatsApp comercial.
6. Incentivar download de catálogo B2B.
7. Fortalecer percepção de marca brasileira confiável.
8. Melhorar SEO orgânico para buscas relacionadas a candy toys, brinquedos com doces e atacado.
9. Criar experiência visual viva, colorida, moderna e profissional.
10. Preparar base técnica escalável para evolução futura.

### Resultado esperado

O site deve sair de:

```txt
site institucional/e-commerce genérico e sem vida
```

para:

```txt
plataforma comercial B2B de brinquedos com doces para lojistas e revendedores
```

---

## 6. Princípios de produto e UX

### Princípio 1 — Clareza em 5 segundos

Na primeira dobra, o visitante deve entender:

- quem é a Candy Toy;
- o que ela vende;
- para quem vende;
- qual ação deve tomar.

### Princípio 2 — B2B antes de B2C

A navegação deve priorizar lojistas, representantes e revendedores.

Consumidor final pode existir como público secundário, mas não deve dominar a experiência.

### Princípio 3 — Produto visual, decisão racional

O produto é lúdico, colorido e emocional. Porém, o comprador é adulto e comercial.

A interface deve equilibrar:

- diversão;
- confiança;
- organização;
- dados técnicos;
- argumento de revenda;
- chamada para contato comercial.

### Princípio 4 — Todo caminho leva à conversão

Toda página importante deve ter CTA claro para:

- WhatsApp;
- catálogo;
- cotação;
- representante;
- formulário B2B.

### Princípio 5 — Produto não é só item, é solução de ponto de venda

Cada produto deve ser apresentado como oportunidade para o lojista:

- display pronto;
- compra por impulso;
- exposição fácil;
- apelo infantil;
- variedade;
- giro no balcão;
- reposição;
- revenda.

---

## 7. Direção criativa

A nova interface deve transmitir:

```txt
doce + brinquedo + varejo + diversão + confiança comercial
```

### Tom visual

- colorido;
- alegre;
- arredondado;
- moderno;
- vivo;
- comercial;
- organizado;
- com bastante imagem de produto;
- com displays em destaque;
- com microinterações suaves;
- com elementos gráficos inspirados em doces, confetes, bolhas, embalagens e movimento.

### Evitar

- aparência infantil demais;
- excesso de cor sem hierarquia;
- template genérico;
- layout frio de distribuidora;
- cara de WordPress amador;
- textos vazios;
- hero sem produto;
- CTA genérico;
- imagem pequena ou sem contexto;
- animação gratuita que atrapalha conversão.

---

## 8. Identidade visual

A logo existente deve ser usada como base.

### Tarefa obrigatória

Antes de finalizar a UI, o agente responsável deve extrair a paleta visual da logo real.

### Paleta provisória sugerida

Usar apenas como guia inicial até extrair as cores reais da logo:

- Azul Candy — cor institucional principal.
- Amarelo Doce — destaque e energia.
- Vermelho/Morango — CTA principal.
- Rosa Chiclete — elementos lúdicos.
- Verde Menta — apoio e categorias.
- Roxo Uva — produtos especiais ou lançamentos.
- Off-white/creme — fundo principal.
- Azul escuro/chocolate — texto e contraste.

### Regra de proporção visual

```txt
55% fundos claros
20% azul institucional
10% amarelo/destaque
10% cores de categoria
5% vermelho/rosa para CTAs fortes
```

### Regras de UI

- O botão principal deve sempre ter destaque claro.
- Cores de categoria não podem competir com CTA principal.
- Fundos devem respirar.
- Fotos de produto devem ter espaço e impacto.
- Usar contraste adequado para acessibilidade.
- Criar tokens semânticos no Tailwind.

---

## 9. Tipografia

Usar `next/font` com variable fonts.

### Títulos

Preferir fonte arredondada, forte e amigável:

- Fredoka;
- Baloo 2;
- Nunito;
- alternativa similar caso seja tecnicamente melhor.

### Texto, formulários e navegação

Preferir fonte limpa e legível:

- Inter;
- Nunito Sans;
- Open Sans;
- alternativa similar.

### Regra

Usar no máximo duas famílias tipográficas.

---

## 10. Arquitetura de informação

### Menu desktop recomendado

```txt
Produtos
  - Candy Toys
  - Doces com Brinquedos
  - Displays e Expositores
  - Lançamentos
  - Datas Comemorativas
  - Todos os Produtos

Catálogo B2B
Representantes
Sobre a Candy Toy
Onde Encontrar
Contato

CTA fixo: Comprar no Atacado
```

### Menu mobile recomendado

O mobile deve priorizar ação rápida:

```txt
Produtos
Catálogo B2B
Falar com Representante
Onde Encontrar
Sobre
Contato

CTA fixo inferior:
[WhatsApp] Falar com vendedor
[Catálogo] Baixar catálogo
```

---

## 11. Páginas obrigatórias

### 11.1 Home

Objetivo: apresentar marca, proposta B2B, categorias, lançamentos, diferenciais e CTA comercial.

Seções obrigatórias:

1. Hero principal.
2. Categorias de produtos.
3. Bloco “Feito para vender mais no balcão”.
4. Lançamentos e/ou mais vendidos.
5. Como comprar.
6. Diferenciais da marca.
7. Prova de confiança.
8. CTA final.

### 11.2 Produtos

Objetivo: catálogo navegável e filtrável.

Requisitos:

- listagem por categoria;
- busca simples;
- filtros básicos;
- cards com imagem grande;
- badge de quantidade por display/caixa;
- CTA “Pedir cotação”;
- CTA “Ver detalhes”.

### 11.3 Página de produto

Objetivo: transformar interesse em contato comercial.

Conteúdo obrigatório:

- nome do produto;
- galeria de imagens;
- resumo comercial B2B;
- categoria;
- quantidade por display;
- quantidade por caixa;
- tipo de doce;
- idade recomendada;
- dimensões, se disponíveis;
- peso, se disponível;
- SKU/código interno, se disponível;
- EAN, se disponível;
- certificação/registro, somente se confirmado;
- indicação de ponto de venda;
- produtos relacionados;
- CTA “Pedir cotação deste produto”;
- CTA “Falar com vendedor”.

### 11.4 Catálogo B2B

Objetivo: capturar lead qualificado.

Campos mínimos:

- nome;
- empresa;
- CNPJ, se aplicável;
- cidade/UF;
- WhatsApp;
- e-mail;
- tipo de negócio;
- volume aproximado de compra;
- mensagem opcional.

Ação após envio:

- agradecer;
- informar próximo passo;
- registrar evento de conversão;
- enviar lead para canal definido;
- liberar catálogo se o fluxo exigir.

### 11.5 Representantes

Objetivo:

- conectar lojistas ao atendimento comercial;
- captar interessados em representar a marca.

Blocos:

- “Encontre um representante Candy Toy”.
- “Quero atendimento comercial”.
- “Seja um representante Candy Toy”.

### 11.6 Sobre

Objetivo: reforçar confiança institucional.

Conteúdo:

- história;
- empresa brasileira;
- atuação nacional;
- segmento;
- compromisso com qualidade;
- público atendido;
- certificações/registros somente se confirmados;
- CTA comercial.

### 11.7 Onde encontrar

Objetivo: atender consumidor final sem quebrar foco B2B.

Funcionalidades possíveis:

- formulário para buscar loja parceira;
- orientação para falar no WhatsApp;
- lista de parceiros, se existir;
- chamada para lojistas interessados venderem Candy Toy.

### 11.8 Contato

Objetivo: centralizar canais comerciais e institucionais.

Deve incluir:

- WhatsApp;
- telefone;
- e-mail;
- endereço;
- formulário;
- redes sociais;
- horário de atendimento;
- CTA para catálogo B2B.

---

## 12. Home — copy base recomendada

### Hero

```txt
Brinquedos com doces que chamam atenção e giram rápido no ponto de venda
```

Subheadline:

```txt
A Candy Toy desenvolve produtos coloridos, divertidos e prontos para exposição em lojas, bombonieres, mercados, papelarias e distribuidores em todo o Brasil.
```

CTAs:

```txt
Quero comprar para minha loja
Ver catálogo B2B
```

Selos:

```txt
Empresa brasileira
Produtos para revenda
Displays prontos para exposição
Atendimento comercial
```

### Categorias

Título:

```txt
Escolha por tipo de produto
```

Categorias sugeridas:

- Displays e Expositores;
- Brinquedos com Doces;
- Lançamentos;
- Datas Comemorativas;
- Mais Vendidos;
- Todos os Produtos.

### Bloco comercial

Título:

```txt
Feito para vender mais no balcão
```

Texto:

```txt
Produtos coloridos, divertidos e pensados para gerar compra por impulso em pontos de venda com alto fluxo.
```

### Como comprar

Título:

```txt
Comprar Candy Toy para sua loja é simples
```

Etapas:

1. Escolha os produtos ou baixe o catálogo.
2. Fale com um vendedor ou representante.
3. Receba as condições comerciais.
4. Faça seu pedido e acompanhe a entrega.

### CTA final

```txt
Quer levar Candy Toy para sua loja?
```

Texto:

```txt
Fale com nosso time comercial e receba o catálogo de produtos para revenda.
```

Botões:

```txt
Falar no WhatsApp
Baixar catálogo B2B
```

---

## 13. CTAs oficiais

### CTA principal global

```txt
Comprar no atacado
```

### CTAs comerciais

```txt
Falar com representante
Pedir cotação
Baixar catálogo B2B
Quero Candy Toy na minha loja
Ver displays para revenda
Conhecer lançamentos
```

### CTAs de produto

```txt
Pedir cotação deste produto
Adicionar ao orçamento
Falar sobre este item
Ver produtos parecidos
```

### CTAs institucionais

```txt
Conheça nossa história
Ver certificações
Fale com a Candy Toy
```

---

## 14. Regras de conversão

### Regra 1 — CTA visível em toda jornada

Toda página estratégica deve ter um CTA comercial claro.

### Regra 2 — WhatsApp contextual

Não usar mensagem genérica.

Mensagem global:

```txt
Olá, tenho interesse em comprar Candy Toy para minha loja. Vim pelo site e gostaria de receber o catálogo B2B.
```

Mensagem por produto:

```txt
Olá, tenho interesse no produto [NOME_DO_PRODUTO] para revenda. Pode me enviar condições comerciais?
```

### Regra 3 — Catálogo captura lead

O catálogo B2B não deve ser apenas um PDF solto sem rastreamento.

Deve haver:

- formulário;
- evento de conversão;
- registro do lead;
- mensagem de confirmação.

### Regra 4 — Carrinho não é obrigatório

Para B2B, o fluxo prioritário pode ser:

```txt
Produto > Cotação > WhatsApp/Formulário > Atendimento comercial > Pedido
```

### Regra 5 — Mobile-first

O mobile precisa ter:

- menu simples;
- botão fixo de WhatsApp;
- botão fixo de catálogo;
- cards fáceis de tocar;
- formulário curto;
- carregamento rápido.

---

## 15. Eventos de analytics

Implementar eventos de conversão.

Eventos mínimos:

```txt
click_whatsapp_header
click_whatsapp_footer
click_whatsapp_product
click_download_catalog
submit_b2b_form
click_product_quote
click_representative
click_where_to_find
view_product
view_category
filter_product
search_product
click_instagram
click_cta_home_primary
click_cta_home_secondary
```

Cada evento deve carregar, quando possível:

- página de origem;
- categoria;
- produto;
- CTA clicado;
- dispositivo;
- campanha/referrer, se disponível.

---

## 16. SEO

### Páginas estratégicas

```txt
/
/produtos
/produtos/[slug]
/candy-toys
/brinquedos-com-doces
/displays-para-lojas
/doces-com-brinquedos-para-revenda
/catalogo-b2b
/representantes
/onde-encontrar
/lancamentos
/sobre
/contato
```

### Títulos SEO sugeridos

```txt
Candy Toy | Brinquedos com Doces para Lojistas e Revendedores
Brinquedos com Doces no Atacado | Candy Toy
Displays de Candy Toys para Lojas, Mercados e Bombonieres
Catálogo B2B Candy Toy | Produtos para Revenda
```

### SEO técnico obrigatório

- `metadata` por página;
- title único;
- description única;
- Open Graph;
- canonical;
- robots;
- sitemap;
- headings corretos;
- alt text descritivo;
- schema quando aplicável;
- URLs amigáveis;
- sem conteúdo duplicado relevante.

### FAQ sugerido

- A Candy Toy vende para consumidor final?
- Como comprar para minha loja?
- Tem pedido mínimo?
- Como falar com um representante?
- Entrega para todo o Brasil?
- Os produtos possuem certificação?
- Como receber o catálogo?
- Quais produtos são indicados para bombonieres?
- Quais produtos são indicados para mercados?
- Quais produtos são lançamentos?

---

## 17. Componentes obrigatórios

Criar um design system mínimo com:

```txt
Header
HeaderMobile
Footer
Button
Container
SectionTitle
HeroHome
HeroCategory
CategoryCard
ProductCard
ProductGrid
ProductGallery
ProductSpecs
ProductCTA
CatalogLeadForm
ContactForm
WhatsAppButton
StickyMobileCTA
Badge
TrustSeal
FAQAccordion
RepresentativeCTA
HowToBuySteps
FeatureCard
AnimatedSection
Breadcrumb
```

### Regras de componentes

- Componentes devem ser reutilizáveis.
- Props devem ser tipadas.
- Evitar componentes gigantes.
- Separar componentes server/client quando necessário.
- Usar `cn()` ou helper equivalente para classes condicionais.
- Evitar duplicação de markup.
- Manter acessibilidade como padrão.

---

## 18. Estrutura de pastas recomendada

A estrutura pode ser ajustada pelo agente de arquitetura, mas deve começar próxima disso:

```txt
src/
  app/
    layout.tsx
    page.tsx
    sitemap.ts
    robots.ts
    produtos/
      page.tsx
      [slug]/
        page.tsx
    catalogo-b2b/
      page.tsx
    representantes/
      page.tsx
    onde-encontrar/
      page.tsx
    sobre/
      page.tsx
    contato/
      page.tsx
  components/
    layout/
    sections/
    ui/
    product/
    forms/
    animations/
  data/
    products.ts
    categories.ts
    navigation.ts
    site.ts
  lib/
    analytics.ts
    seo.ts
    whatsapp.ts
    validations.ts
    utils.ts
  styles/
    globals.css
  types/
    product.ts
    lead.ts
```

---

## 19. Modelagem inicial de dados

### Produto

```ts
export type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  category: string
  images: ProductImage[]
  displayQuantity?: string
  boxQuantity?: string
  candyType?: string
  recommendedAge?: string
  dimensions?: string
  weight?: string
  sku?: string
  ean?: string
  certification?: string
  tags?: string[]
  featured?: boolean
  launch?: boolean
  bestSeller?: boolean
}
```

### Categoria

```ts
export type Category = {
  id: string
  slug: string
  name: string
  description: string
  image: string
  colorToken?: string
}
```

### Lead B2B

```ts
export type B2BLead = {
  name: string
  company: string
  cnpj?: string
  city: string
  state: string
  whatsapp: string
  email: string
  businessType: string
  estimatedVolume?: string
  message?: string
  source?: string
}
```

---

## 20. Formulários

### Validação

Usar validação server-side obrigatória.

Preferência:

- Zod ou validação equivalente;
- sanitização básica;
- tratamento de erro claro;
- mensagens amigáveis;
- proteção contra spam simples;
- honeypot ou rate limit se necessário.

### Formulários mínimos

1. Catálogo B2B.
2. Contato comercial.
3. Representante.
4. Onde encontrar.

### LGPD

Todo formulário que coleta dados deve ter aceite claro ou texto informativo:

```txt
Ao enviar, você concorda que a Candy Toy entre em contato usando os dados informados.
```

Não criar política legal falsa. Se não existir política real, criar placeholder técnico e marcar como pendência de conteúdo jurídico.

---

## 21. Animações

### Motion

Usar para:

- entrada de cards;
- hover states;
- menus;
- accordions;
- pequenas transições;
- feedback de formulário.

### GSAP + ScrollTrigger

Usar apenas para seções com valor visual real, como:

- hero cinematográfico;
- produtos flutuando;
- sequência de categorias;
- linha de produção ou jornada do produto;
- storytelling visual de ponto de venda.

### Lenis

Usar para smooth scroll global apenas se:

- não prejudicar acessibilidade;
- não causar bugs no mobile;
- não afetar âncoras;
- não degradar performance.

### Regra

Animação nunca pode ser mais importante que clareza, conversão e performance.

---

## 22. Performance

### Metas

- Lighthouse 95+ em Performance.
- Lighthouse 95+ em Accessibility.
- Lighthouse 95+ em Best Practices.
- Lighthouse 95+ em SEO.
- LCP otimizado.
- CLS próximo de zero.
- INP adequado.
- Imagens otimizadas.
- JS mínimo.

### Regras

- Não transformar tudo em Client Component.
- Não carregar GSAP em páginas que não usam animação cinematográfica.
- Não usar imagens sem dimensão.
- Não usar fontes externas sem `next/font`.
- Não usar vídeo pesado no hero sem fallback e controle.
- Não adicionar carrossel pesado sem necessidade.

---

## 23. Acessibilidade

Requisitos mínimos:

- HTML semântico;
- navegação por teclado;
- foco visível;
- contraste adequado;
- alt text útil;
- botões com nome acessível;
- formulários com labels;
- mensagens de erro associadas ao campo;
- menu mobile acessível;
- animações respeitando `prefers-reduced-motion`;
- links claros;
- headings em ordem lógica.

---

## 24. Segurança

Acionar `seguranca_master` obrigatoriamente antes de produção.

### Pontos obrigatórios

- validar dados de formulário no servidor;
- sanitizar entradas;
- proteger rotas de API;
- não expor secrets;
- usar variáveis de ambiente;
- evitar spam;
- revisar integrações externas;
- revisar LGPD;
- revisar cookies e analytics;
- não criar informações legais ou certificações não verificadas.

---

## 25. Conteúdo e verdade factual

Jarvis e agentes não devem inventar dados institucionais.

### Permitido

- propor textos comerciais;
- criar placeholders marcados;
- sugerir seções;
- estruturar narrativa;
- criar copy B2B;
- sugerir campos técnicos.

### Proibido

- inventar certificações;
- inventar números de clientes;
- inventar faturamento;
- inventar representantes;
- inventar presença nacional se não houver confirmação;
- inventar selos legais;
- inventar depoimentos;
- inventar marcas parceiras;
- usar imagens sem licença.

Quando houver informação não confirmada, marcar como:

```txt
[PENDENTE DE CONFIRMAÇÃO]
```

---

## 26. Plano de execução recomendado

### Fase 1 — Discovery técnico e visual

- Auditar site atual.
- Levantar páginas existentes.
- Levantar produtos existentes.
- Baixar/organizar imagens permitidas.
- Identificar logo oficial.
- Extrair paleta da logo.
- Mapear conteúdo aproveitável.
- Mapear gaps de conteúdo.

Entrega:

```txt
/docs/discovery.md
/docs/content-inventory.md
/docs/visual-direction.md
```

### Fase 2 — Estratégia e arquitetura

- Definir sitemap.
- Definir jornada B2B.
- Definir CTAs.
- Definir eventos de analytics.
- Definir modelagem de produto.
- Definir componentes.
- Definir padrões de SEO.

Entrega:

```txt
/docs/information-architecture.md
/docs/conversion-strategy.md
/docs/technical-architecture.md
```

### Fase 3 — Setup do projeto

- Criar projeto Next.js.
- Configurar TypeScript.
- Configurar Tailwind.
- Configurar ESLint/Prettier se aplicável.
- Configurar `next/font`.
- Configurar estrutura de pastas.
- Criar tokens de design.
- Criar base de metadata.

Entrega:

```txt
Projeto compilando localmente
README atualizado
```

### Fase 4 — Design system e layout base

- Header.
- Footer.
- Botões.
- Cards.
- Grid.
- Formulários.
- Badges.
- Seções reutilizáveis.
- Sticky CTA mobile.

Entrega:

```txt
Componentes reutilizáveis tipados e responsivos
```

### Fase 5 — Implementação das páginas

- Home.
- Produtos.
- Produto individual.
- Catálogo B2B.
- Representantes.
- Onde encontrar.
- Sobre.
- Contato.

Entrega:

```txt
Rotas principais implementadas
```

### Fase 6 — Conversão e integrações

- Formulários.
- WhatsApp contextual.
- Eventos analytics.
- Server Action/API Route.
- Validação.
- Mensagens de sucesso/erro.

Entrega:

```txt
Fluxo de lead funcional e rastreável
```

### Fase 7 — SEO, performance e acessibilidade

- Metadata.
- Open Graph.
- Sitemap.
- Robots.
- Alt text.
- Lighthouse.
- Core Web Vitals.
- Ajustes de imagens.
- Ajustes de bundle.
- Testes mobile.

Entrega:

```txt
Relatório de validação com métricas
```

### Fase 8 — QA, documentação e deploy

- Testes finais.
- Revisão Segurança.
- Revisão QA.
- Revisão DevOps.
- Deploy preview.
- Checklist final.
- README final.
- Memória Jarvis atualizada.

Entrega:

```txt
Deploy pronto para validação do cliente
```

---

## 27. Quality Gates obrigatórios

Jarvis não deve aprovar entrega sem validar:

### Gate de produto

- O site comunica B2B claramente?
- O lojista entende o que fazer?
- Há CTA comercial em todas as páginas importantes?
- O catálogo gera lead?
- A página de produto vende para revenda?

### Gate visual

- Usa logo corretamente?
- Cores derivam da identidade da marca?
- Parece vivo, moderno e profissional?
- Evita cara de template?
- Tem consistência visual?

### Gate técnico

- Build passa?
- TypeScript sem erros críticos?
- Rotas funcionando?
- Imagens otimizadas?
- Sem dependências desnecessárias?
- Sem excesso de Client Components?

### Gate SEO

- Metadata por página?
- Sitemap?
- Robots?
- Open Graph?
- Headings corretos?
- Alt text?

### Gate performance

- Lighthouse 95+ ou justificativa clara?
- LCP otimizado?
- CLS controlado?
- JS reduzido?
- Imagens dimensionadas?

### Gate segurança

- Formulários validados no servidor?
- Sem secrets no front?
- Variáveis de ambiente documentadas?
- LGPD considerada?
- Antispam básico?

### Gate QA

- Desktop validado?
- Mobile validado?
- Tablet validado?
- Formulários testados?
- WhatsApp testado?
- Links testados?
- Estados de erro testados?

---

## 28. Definition of Done

A reconstrução só pode ser considerada pronta quando:

- todas as páginas obrigatórias estiverem implementadas;
- o site estiver visualmente alinhado à Candy Toy;
- a proposta B2B estiver clara;
- os CTAs estiverem funcionando;
- os formulários estiverem validados;
- WhatsApp contextual estiver implementado;
- SEO técnico estiver implementado;
- analytics estiver configurado ou preparado;
- Lighthouse estiver em 95+ ou com relatório de exceções;
- QA tiver validado desktop, mobile e tablet;
- Segurança tiver validado formulários e dados;
- README estiver atualizado;
- documentação do projeto estiver atualizada;
- riscos e pendências estiverem declarados;
- deploy preview estiver disponível.

---

## 29. Saída esperada de cada agente

Cada agente deve responder no padrão:

```txt
1. Entendimento técnico
2. Decisões tomadas
3. Implementação realizada ou recomendada
4. Arquivos criados/alterados
5. Riscos e trade-offs
6. Critérios de validação
7. Pendências
8. Commit sugerido
```

---

## 30. Saída esperada do Jarvis ao final de cada fase

Jarvis deve consolidar:

```txt
1. Fase executada
2. Agentes acionados
3. Decisões aprovadas
4. Arquivos criados/alterados
5. Validações realizadas
6. Riscos identificados
7. Pendências
8. Próxima fase recomendada
9. Commit sugerido
```

---

## 31. Commits sugeridos

Usar commits claros e pequenos.

Exemplos:

```txt
chore: initialize candy toy nextjs project
feat: add design tokens and base layout
feat: implement b2b home page
feat: add product catalog structure
feat: add product detail page
feat: implement catalog lead form
feat: add contextual whatsapp conversion flow
feat: add seo metadata sitemap and robots
feat: configure analytics events
perf: optimize images and reduce client bundle
fix: improve mobile navigation and sticky cta
```

---

## 32. Regras finais para Jarvis

- Não entregar solução genérica.
- Não copiar estrutura amadora do site atual.
- Não tratar como simples loja B2C.
- Não criar visual infantil desorganizado.
- Não priorizar animação acima de conversão.
- Não inventar dados institucionais.
- Não ignorar SEO.
- Não ignorar mobile.
- Não ignorar acessibilidade.
- Não ignorar segurança.
- Não considerar pronto sem QA.
- Sempre declarar riscos, trade-offs e pendências.
- Sempre preservar a identidade da Candy Toy.
- Sempre orientar a experiência para venda B2B.

---

## 33. Comando inicial recomendado para Jarvis

Ao iniciar a execução, Jarvis deve responder com:

```txt
1. Entendimento técnico da reconstrução Candy Toy
2. Classificação da demanda
3. Agentes que serão acionados
4. Fases de execução
5. Primeiros arquivos/documentos a criar
6. Riscos iniciais
7. Dependências de conteúdo
8. Próximo passo imediato
```

Em seguida, Jarvis deve começar pela **Fase 1 — Discovery técnico e visual**.

---

## 34. Norte final do projeto

A experiência final deve fazer o usuário pensar:

> “Essa marca entende ponto de venda, tem produtos atrativos para revenda e facilita meu contato comercial.”

O site precisa ser bonito, vivo e memorável, mas acima de tudo precisa converter lojistas em oportunidades comerciais reais.
