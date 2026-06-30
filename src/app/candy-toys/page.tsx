import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Candy Toys para Lojistas",
  description: "Candy Toys com doces para revenda, displays e exposicao comercial no ponto de venda.",
};

export default function CandyToysPage() {
  return (
    <SeoLanding
      eyebrow="Candy Toys"
      title="Candy Toys para lojistas e revendedores"
      description="Produtos coloridos com doces e brinquedos para montar um mix de alto impacto visual no varejo."
      image="/catalog/catalog-page-2.png"
    />
  );
}
