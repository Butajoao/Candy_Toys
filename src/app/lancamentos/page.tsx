import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Lançamentos Candy Toy",
  description: "Lançamentos Candy Toy para revenda, displays e novas linhas comerciais.",
};

export default function LaunchesPage() {
  return (
    <SeoLanding
      eyebrow="Lançamentos"
      title="Lançamentos Candy Toy para revenda"
      description="Novidades do catálogo para renovar seu mix com produtos coloridos e prontos para exposição."
      image="/catalog/catalog-page-3.png"
      productFilter="Lançamentos"
    />
  );
}
