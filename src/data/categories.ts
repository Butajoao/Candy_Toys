import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "displays",
    slug: "displays-e-expositores",
    name: "Displays e expositores",
    description: "Produtos em display para balcão, gôndola e compra por impulso.",
    image: "/catalog/catalog-page-2.png",
    colorToken: "bg-brand-yellow",
  },
  {
    id: "brinquedos-com-doces",
    slug: "brinquedos-com-doces",
    name: "Brinquedos com doces",
    description: "Linhas coloridas que combinam brinquedo, tubo de doces e apelo visual.",
    image: "/catalog/catalog-page-5.png",
    colorToken: "bg-mint-green",
  },
  {
    id: "lancamentos",
    slug: "lancamentos",
    name: "Lancamentos",
    description: "Novidades e modelos com destaque para exposicao no ponto de venda.",
    image: "/catalog/catalog-page-3.png",
    colorToken: "bg-bubble-pink",
  },
  {
    id: "datas",
    slug: "datas-comemorativas",
    name: "Datas comemorativas",
    description: "Produtos sazonais para campanhas e vitrines tematicas.",
    image: "/catalog/catalog-page-4.png",
    colorToken: "bg-grape-purple",
  },
];
