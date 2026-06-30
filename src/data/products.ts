import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "turbo-helice",
    slug: "turbo-helice",
    name: "Turbo Helice",
    shortDescription: "Display de balcão com helices coloridas e tubo de doces.",
    description:
      "Produto visual para balcão, indicado para exposicao de impulso em lojas, mercados, bombonieres e papelarias.",
    category: "Displays e expositores",
    images: [{ src: "/catalog/catalog-page-2.png", alt: "Catalogo Candy Toy com display Turbo Helice" }],
    displayQuantity: "15 x 22g",
    boxQuantity: "Embarque: 6 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2000",
    tags: ["Display balcao", "Exposicao garantida"],
    featured: true,
    bestSeller: true,
  },
  {
    id: "turbo-star",
    slug: "turbo-star",
    name: "Turbo Star",
    shortDescription: "Brinquedo com helice estrela e tubo de confeitos coloridos.",
    description:
      "Item com formato chamativo e cores fortes para mix de brinquedos com doces no varejo.",
    category: "Brinquedos com doces",
    images: [{ src: "/catalog/catalog-page-2.png", alt: "Catalogo Candy Toy com produto Turbo Star" }],
    displayQuantity: "15 x 22g",
    boxQuantity: "Embarque: 6 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2005",
    tags: ["Display balcao"],
    featured: true,
  },
  {
    id: "bengala",
    slug: "bengala",
    name: "Bengala",
    shortDescription: "Bengala colorida com tubo de doces para exposicao em display.",
    description:
      "Formato de facil reconhecimento, pensado para exposicao rapida e alto impacto visual no ponto de venda.",
    category: "Brinquedos com doces",
    images: [{ src: "/catalog/catalog-page-2.png", alt: "Catalogo Candy Toy com produto Bengala" }],
    displayQuantity: "15 x 42g",
    boxQuantity: "Embarque: 4 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2010",
    tags: ["Display balcao"],
    featured: true,
  },
  {
    id: "porquinho-cofre",
    slug: "porquinho-cofre",
    name: "Porquinho Cofre",
    shortDescription: "Produto com cofre em formato de porquinho e tubo de doces.",
    description:
      "Combina brinquedo funcional e doces em um item de destaque para vitrines, gôndolas e balcões.",
    category: "Brinquedos com doces",
    images: [{ src: "/catalog/catalog-page-2.png", alt: "Catalogo Candy Toy com produto Porquinho Cofre" }],
    displayQuantity: "15 x 20g",
    boxQuantity: "Embarque: 4 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2100",
    tags: ["Display balcao"],
  },
  {
    id: "candy-espadas",
    slug: "candy-espadas",
    name: "Candy Espadas",
    shortDescription: "Colecao de espadas plastificadas e montadas para PDV.",
    description:
      "Linha com modelos sortidos, forte apelo visual e display de berco pronto para exposicao.",
    category: "Lancamentos",
    images: [{ src: "/catalog/catalog-page-3.png", alt: "Catalogo Candy Toy com linha Candy Espadas" }],
    displayQuantity: "15 x 30g",
    boxQuantity: "Embarque: 6 displays",
    candyType: "Confeitos coloridos",
    sku: "Refs. 3500 a 3630",
    tags: ["Novo", "10 modelos", "Display berco"],
    featured: true,
    launch: true,
  },
  {
    id: "display-visor-helicoptero",
    slug: "display-visor-helicoptero",
    name: "Display Visor Helicoptero",
    shortDescription: "Display visor com brinquedos sortidos em formato helicoptero.",
    description:
      "Linha plastificada e montada pronta para PDV, com visual colorido e exposicao em caixa display.",
    category: "Displays e expositores",
    images: [{ src: "/catalog/catalog-page-4.png", alt: "Catalogo Candy Toy com Display Visor Helicoptero" }],
    displayQuantity: "20 x 15g",
    boxQuantity: "Embarque: 5 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2050",
    tags: ["Pronto para PDV"],
    launch: true,
  },
  {
    id: "monsters-happy",
    slug: "monsters-happy",
    name: "Monsters Happy",
    shortDescription: "Display sortido com personagens tematicos e tubo de doces.",
    description:
      "Linha tematica com abobora, caveira, fantasma, frank e morcego para campanhas e datas sazonais.",
    category: "Datas comemorativas",
    images: [{ src: "/catalog/catalog-page-4.png", alt: "Catalogo Candy Toy com display Monsters Happy" }],
    displayQuantity: "20 x 15g",
    boxQuantity: "Embarque: 4 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2903",
    tags: ["Sortidos", "Data comemorativa"],
    featured: true,
  },
  {
    id: "candy-coelhos",
    slug: "candy-coelhos",
    name: "Candy Coelhos",
    shortDescription: "Linha de coelhos coloridos com confeitos, balas ou ovinhos.",
    description:
      "Produto de forte apelo sazonal e infantil, com displays para balcão e versao junior.",
    category: "Datas comemorativas",
    images: [{ src: "/catalog/catalog-page-5.png", alt: "Catalogo Candy Toy com linha Candy Coelhos" }],
    displayQuantity: "20 x 15g / 20 x 20g / 20 x 24g",
    boxQuantity: "Embarque: 4 displays",
    candyType: "Confeitos, balas ou ovinhos",
    sku: "Refs. 2200 a 3002",
    tags: ["Display balcao", "Display junior"],
    featured: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getRelatedProducts(product: Product) {
  return products
    .filter((candidate) => candidate.slug !== product.slug && candidate.category === product.category)
    .slice(0, 3);
}
