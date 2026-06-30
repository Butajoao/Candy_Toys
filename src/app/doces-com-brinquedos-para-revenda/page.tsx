import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Doces com Brinquedos para Revenda",
  description: "Doces com brinquedos Candy Toy para revenda em lojas, mercados e bombonieres.",
};

export default function ResaleSweetsPage() {
  return (
    <SeoLanding
      eyebrow="Revenda"
      title="Doces com brinquedos para revenda"
      description="Produtos com apelo infantil e apresentação comercial para pontos de venda de alto fluxo."
      image="/catalog/catalog-page-3.png"
    />
  );
}
