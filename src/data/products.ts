import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "turbo-helice",
    slug: "turbo-helice",
    name: "Turbo Hélice",
    shortDescription: "Display de balcão com hélices coloridas e tubo de doces.",
    description:
      "Produto visual para balcão, indicado para exposição de impulso em lojas, mercados, bombonieres e papelarias.",
    category: "Displays e expositores",
    images: [{ src: "/catalog/catalog-page-2.png", alt: "Catálogo Candy Toy com display Turbo Hélice" }],
    displayQuantity: "15 x 22g",
    boxQuantity: "Embarque: 6 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2000",
    tags: ["Display balcão", "Exposição garantida"],
    featured: true,
    bestSeller: true,
  },
  {
    id: "turbo-star",
    slug: "turbo-star",
    name: "Turbo Star",
    shortDescription: "Brinquedo com hélice estrela e tubo de confeitos coloridos.",
    description:
      "Item com formato chamativo e cores fortes para mix de brinquedos com doces no varejo.",
    category: "Brinquedos com doces",
    images: [{ src: "/catalog/catalog-page-2.png", alt: "Catálogo Candy Toy com produto Turbo Star" }],
    displayQuantity: "15 x 22g",
    boxQuantity: "Embarque: 6 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2005",
    tags: ["Display balcão"],
    featured: true,
  },
  {
    id: "bengala",
    slug: "bengala",
    name: "Bengala",
    shortDescription: "Bengala colorida com tubo de doces para exposição em display.",
    description:
      "Formato de fácil reconhecimento, pensado para exposição rápida e alto impacto visual no ponto de venda.",
    category: "Brinquedos com doces",
    images: [{ src: "/catalog/catalog-page-2.png", alt: "Catálogo Candy Toy com produto Bengala" }],
    displayQuantity: "15 x 42g",
    boxQuantity: "Embarque: 4 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2010",
    tags: ["Display balcão"],
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
    images: [{ src: "/catalog/catalog-page-2.png", alt: "Catálogo Candy Toy com produto Porquinho Cofre" }],
    displayQuantity: "15 x 20g",
    boxQuantity: "Embarque: 4 displays",
    candyType: "Confeitos coloridos",
    sku: "Ref. 2100",
    tags: ["Display balcão"],
  },
  {
    id: "candy-espadas",
    slug: "candy-espadas",
    name: "Candy Espadas",
    shortDescription: "Coleção de espadas plastificadas e montadas para PDV.",
    description:
      "Linha com modelos sortidos, forte apelo visual e display de berço pronto para exposição.",
    category: "Lançamentos",
    images: [{ src: "/catalog/catalog-page-3.png", alt: "Catálogo Candy Toy com linha Candy Espadas" }],
    displayQuantity: "15 x 30g",
    boxQuantity: "Embarque: 6 displays",
    candyType: "Confeitos coloridos",
    sku: "Refs. 3500 a 3630",
    tags: ["Novo", "10 modelos", "Display berço"],
    featured: true,
    launch: true,
  },
  {
    id: "display-visor-helicóptero",
    slug: "display-visor-helicóptero",
    name: "Display Visor Helicóptero",
    shortDescription: "Display visor com brinquedos sortidos em formato helicóptero.",
    description:
      "Linha plastificada e montada pronta para PDV, com visual colorido e exposição em caixa display.",
    category: "Displays e expositores",
    images: [{ src: "/catalog/catalog-page-4.png", alt: "Catálogo Candy Toy com Display Visor Helicóptero" }],
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
    shortDescription: "Display sortido com personagens temáticos e tubo de doces.",
    description:
      "Linha temática com abóbora, caveira, fantasma, frank e morcego para campanhas e datas sazonais.",
    category: "Datas comemorativas",
    images: [{ src: "/catalog/catalog-page-4.png", alt: "Catálogo Candy Toy com display Monsters Happy" }],
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
      "Produto de forte apelo sazonal e infantil, com displays para balcão e versão júnior.",
    category: "Datas comemorativas",
    images: [{ src: "/catalog/catalog-page-5.png", alt: "Catálogo Candy Toy com linha Candy Coelhos" }],
    displayQuantity: "20 x 15g / 20 x 20g / 20 x 24g",
    boxQuantity: "Embarque: 4 displays",
    candyType: "Confeitos, balas ou ovinhos",
    sku: "Refs. 2200 a 3002",
    tags: ["Display balcão", "Display júnior"],
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
