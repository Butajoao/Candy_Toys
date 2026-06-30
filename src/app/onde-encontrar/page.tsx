import type { Metadata } from "next";
import { MapPin, MessageCircle, Store } from "lucide-react";
import { CatalogLeadForm } from "@/components/forms/CatalogLeadForm";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Onde Encontrar",
  description: "Consulte canais de venda Candy Toy ou fale com a marca para encontrar lojas parceiras.",
};

export default function WhereToFindPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#dffff4_0%,#fffce8_48%,#ffe2ef_100%)] py-16">
      <SectionBackdrop image="/catalog/catalog-page-5.png" tint="from-emerald-50/82 via-white/76 to-pink-50/72" opacity="opacity-20" />
      <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Onde encontrar"
            title="Onde encontrar Candy Toy"
            description="Esta página atende consumidores e também lojistas interessados em vender Candy Toy, sem tirar o foco B2B do site."
          />
          <div className="mt-8 grid gap-4">
            <FeatureCard icon={MapPin} title="Buscar loja parceira" description="Lista de parceiros e cobertura regional: [PENDENTE DE CONFIRMAÇÃO]." />
            <FeatureCard icon={MessageCircle} title="Falar no WhatsApp" description="Use o atendimento comercial para consultar canais ou solicitar indicação." />
            <FeatureCard icon={Store} title="Quero vender Candy Toy" description="Lojistas podem preencher o formulário para receber o catálogo de revenda." />
          </div>
          <Button className="mt-8" href={whatsappUrl(globalWhatsappMessage)}>
            Quero vender Candy Toy
          </Button>
        </div>
        <CatalogLeadForm source="onde-encontrar" />
      </Container>
    </section>
  );
}
