import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Displays de Candy Toys para Lojas",
  description: "Displays e expositores Candy Toy para balcões, gôndolas e pontos de venda.",
};

export default function DisplaysPage() {
  return (
    <SeoLanding
      eyebrow="Displays"
      title="Displays de Candy Toys para lojas"
      description="Displays de balcão e caixas expositoras para lojistas que precisam de produtos prontos para o PDV."
      image="/catalog/catalog-page-4.png"
      productFilter="Displays"
    />
  );
}
