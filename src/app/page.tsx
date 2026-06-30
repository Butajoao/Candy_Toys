import Image from "next/image";
import { ArrowRight, Boxes, Handshake, MessageCircle, PackageCheck, Sparkles, Store } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { HeroMotion } from "@/components/animations/HeroMotion";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CategoryCard } from "@/components/sections/CategoryCard";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HowToBuySteps } from "@/components/sections/HowToBuySteps";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <HeroMotion />

      <AnimatedSection className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fff9b8_42%,#ffc5dd_100%)] py-20">
        <SectionBackdrop image="/catalog/catalog-page-5.png" tint="from-white/88 via-white/72 to-yellow-100/60" opacity="opacity-25" />
        <Container className="relative z-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionTitle
              eyebrow="Categorias"
              title="Escolha por tipo de produto"
              description="Organize seu mix por displays, brinquedos com doces, lancamentos e campanhas sazonais."
            />
            <Button href="/produtos" variant="dark">
              Ver todos os produtos <ArrowRight size={18} />
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="relative isolate overflow-hidden bg-[linear-gradient(145deg,#dbf8ff_0%,#fff200_50%,#ffd9aa_100%)] py-20">
        <SectionBackdrop image="/catalog/catalog-page-2.png" tint="from-cyan-50/82 via-yellow-50/65 to-orange-100/70" opacity="opacity-30" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Ponto de venda"
              title="Feito para vender mais no balcao"
              description="Produtos pensados para compra por impulso, exposicao facil e impacto visual em pontos com alto fluxo."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <FeatureCard icon={Store} title="Exposicao facil" description="Displays e caixas expositoras ajudam a colocar o produto no balcao com rapidez." />
              <FeatureCard icon={Sparkles} title="Apelo visual" description="Cores fortes, formatos ludicos e doces coloridos chamam a atencao no PDV." />
              <FeatureCard icon={PackageCheck} title="Mix para revenda" description="Linhas com referencias e quantidades comerciais para cotacao B2B." />
              <FeatureCard icon={Handshake} title="Contato comercial" description="Jornada voltada a representante, catalogo, cotacao e atendimento." />
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-brand-navy/10">
            <Image
              src="/catalog/catalog-page-2.png"
              alt="Display Candy Toy para balcao com brinquedos e doces"
              width={980}
              height={1400}
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffeff7_0%,#ffffff_36%,#d8fff0_100%)] py-20">
        <SectionBackdrop image="/catalog/catalog-page-3.png" tint="from-white/86 via-pink-50/72 to-emerald-50/64" opacity="opacity-20" />
        <Container className="relative z-10">
          <SectionTitle
            eyebrow="Destaques"
            title="Produtos com forte presenca no ponto de venda"
            description="Cards comerciais com informacoes do catalogo e caminho direto para cotacao."
          />
          <div className="mt-10">
            <ProductGrid products={featuredProducts} />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff200_0%,#fffce8_48%,#cbefff_100%)] py-20">
        <SectionBackdrop image="/catalog/catalog-page-4.png" tint="from-yellow-50/82 via-white/72 to-sky-100/68" opacity="opacity-20" />
        <Container className="relative z-10">
          <SectionTitle
            eyebrow="Como comprar"
            title="Comprar Candy Toy para sua loja e simples"
            description="O fluxo B2B prioriza catalogo, atendimento comercial e cotacao."
          />
          <div className="mt-10">
            <HowToBuySteps />
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="relative isolate overflow-hidden bg-[linear-gradient(140deg,#ffffff_0%,#e8f5ff_42%,#ffe7f3_100%)] py-20">
        <SectionBackdrop image="/catalog/catalog-page-6.png" tint="from-white/88 via-sky-50/70 to-pink-50/72" opacity="opacity-15" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <SectionTitle
            eyebrow="Perguntas"
            title="Informacoes para comprar com seguranca"
            description="Marcamos dados nao confirmados como pendencia para evitar afirmacoes comerciais ou legais sem validacao."
          />
          <FAQAccordion />
        </Container>
      </AnimatedSection>

      <section className="relative isolate overflow-hidden bg-brand-navy py-20 text-white">
        <SectionBackdrop image="/catalog/catalog-page-1.png" tint="from-brand-navy/88 via-brand-primary/78 to-action-primary/70" opacity="opacity-30" />
        <Container className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-navy">
              Catalogo e cotacao
            </span>
            <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-5xl">
              Quer levar Candy Toy para sua loja?
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
              Fale com nosso time comercial e receba o catalogo de produtos para revenda.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl(globalWhatsappMessage)} size="lg">
              Falar no WhatsApp <MessageCircle size={20} />
            </Button>
            <Button href="/catalogo-b2b" size="lg" variant="secondary">
              Baixar catalogo B2B <Boxes size={20} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
