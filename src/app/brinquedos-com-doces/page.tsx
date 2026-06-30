import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Brinquedos com Doces no Atacado",
  description: "Brinquedos com doces Candy Toy para lojas, mercados, bombonieres e distribuidores.",
};

export default function SweetToysPage() {
  return (
    <SeoLanding
      eyebrow="Brinquedos com doces"
      title="Brinquedos com doces no atacado"
      description="Linhas com formatos chamativos, tubos de confeitos e displays pensados para compra por impulso."
      image="/catalog/catalog-page-5.png"
      productFilter="Brinquedos"
    />
  );
}
