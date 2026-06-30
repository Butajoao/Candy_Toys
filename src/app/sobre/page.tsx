import type { Metadata } from "next";
import Image from "next/image";
import { Award, Factory, ShieldCheck } from "lucide-react";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheca a proposta da Candy Toy para brinquedos com doces no varejo e revenda.",
};

export default function AboutPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff4b8_0%,#ffffff_48%,#dff8ff_100%)] py-16">
      <SectionBackdrop image="/catalog/catalog-page-8.png" tint="from-yellow-50/84 via-white/78 to-sky-50/72" opacity="opacity-20" />
      <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow="Sobre"
            title="Candy Toy: brinquedos com doces para o varejo"
            description="Uma marca brasileira focada em produtos coloridos, divertidos e comerciais para pontos de venda. Confirmar historia, estrutura, registros e cobertura antes da publicacao final."
          />
          <div className="mt-8 grid gap-4">
            <FeatureCard icon={Factory} title="Empresa brasileira" description="[PENDENTE DE CONFIRMACAO] Usar somente apos validacao institucional." />
            <FeatureCard icon={Award} title="Compromisso com qualidade" description="Publicar detalhes tecnicos e certificacoes apenas com documentos confirmados." />
            <FeatureCard icon={ShieldCheck} title="Confiança comercial" description="Site preparado para catalogo B2B, cotacao e contato com atendimento." />
          </div>
          <Button className="mt-8" href="/catalogo-b2b">
            Solicitar catalogo B2B
          </Button>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-brand-primary/15 ring-4 ring-white/80">
          <Image
            src="/catalog/catalog-page-8.png"
            alt="Catalogo Candy Toy com informacoes finais"
            width={980}
            height={1400}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </Container>
    </section>
  );
}
