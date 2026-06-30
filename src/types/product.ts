export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  images: ProductImage[];
  displayQuantity?: string;
  boxQuantity?: string;
  candyType?: string;
  recommendedAge?: string;
  dimensions?: string;
  weight?: string;
  sku?: string;
  ean?: string;
  certification?: string;
  tags?: string[];
  featured?: boolean;
  launch?: boolean;
  bestSeller?: boolean;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  colorToken?: string;
};
