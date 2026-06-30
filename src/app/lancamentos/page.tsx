import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Lancamentos Candy Toy",
  description: "Lancamentos Candy Toy para revenda, displays e novas linhas comerciais.",
};

export default function LaunchesPage() {
  return (
    <SeoLanding
      eyebrow="Lancamentos"
      title="Lancamentos Candy Toy para revenda"
      description="Novidades do catalogo para renovar seu mix com produtos coloridos e prontos para exposicao."
      image="/catalog/catalog-page-3.png"
      productFilter="Lancamentos"
    />
  );
}
