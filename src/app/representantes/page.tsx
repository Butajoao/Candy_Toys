import type { Metadata } from "next";
import { BriefcaseBusiness, Handshake, MapPinned } from "lucide-react";
import { CatalogLeadForm } from "@/components/forms/CatalogLeadForm";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Representantes",
  description: "Atendimento comercial Candy Toy para lojistas, revendedores e interessados em representar a marca.",
};

export default function RepresentativesPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff200_0%,#fff2fb_50%,#dff8ff_100%)] py-16">
      <SectionBackdrop image="/catalog/catalog-page-3.png" tint="from-yellow-50/84 via-white/74 to-sky-50/70" opacity="opacity-20" />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Representantes"
              title="Atendimento comercial para lojistas e revendedores"
              description="Conecte sua loja ao time comercial Candy Toy ou cadastre interesse em representar a marca."
            />
            <div className="mt-8 grid gap-4">
              <FeatureCard icon={MapPinned} title="Encontre atendimento comercial" description="Informe cidade, UF e tipo de negócio para direcionamento do contato." />
              <FeatureCard icon={Handshake} title="Quero atendimento para minha loja" description="Receba catálogo e condições comerciais para iniciar uma cotação B2B." />
              <FeatureCard icon={BriefcaseBusiness} title="Seja representante Candy Toy" description="Cadastre interesse para avaliação comercial. Regiões disponíveis: [PENDENTE DE CONFIRMAÇÃO]." />
            </div>
            <Button className="mt-8" href={whatsappUrl(globalWhatsappMessage)}>
              Falar com representante
            </Button>
          </div>
          <CatalogLeadForm source="representantes" />
        </div>
      </Container>
    </section>
  );
}
