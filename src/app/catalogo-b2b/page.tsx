import type { Metadata } from "next";
import Image from "next/image";
import { CatalogLeadForm } from "@/components/forms/CatalogLeadForm";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Catálogo B2B",
  description: "Receba o catálogo B2B Candy Toy para revenda em lojas, bombonieres, mercados e distribuidores.",
};

export default function CatalogPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff200_0%,#ffe4f1_45%,#d9fff1_100%)] py-16">
      <SectionBackdrop image="/catalog/catalog-page-1.png" tint="from-yellow-50/82 via-white/76 to-pink-50/72" opacity="opacity-25" />
      <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Catálogo B2B"
            title="Receba o catálogo B2B Candy Toy"
            description="Preencha seus dados comerciais para receber informações de produtos para revenda e atendimento do time comercial."
          />
          <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-primary/15 ring-4 ring-white/80">
            <Image
              src="/catalog/catalog-page-1.png"
              alt="Capa do catálogo Candy Toy 2025"
              width={980}
              height={1400}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <CatalogLeadForm source="catalogo-b2b" />
      </Container>
    </section>
  );
}
