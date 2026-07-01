import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { products } from "@/data/products";
import { normalizeSearch } from "@/lib/utils";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export function SeoLanding({
  eyebrow,
  title,
  description,
  image,
  productFilter,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  productFilter?: string;
}) {
  const selectedProducts = productFilter
    ? products.filter((product) => normalizeSearch(product.category).includes(normalizeSearch(productFilter)))
    : products.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff200_0%,#fff2fb_48%,#d8fff0_100%)] py-16">
        <SectionBackdrop image={image} tint="from-yellow-50/84 via-white/74 to-emerald-50/70" opacity="opacity-25" />
        <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <SectionTitle eyebrow={eyebrow} title={title} description={description} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl(globalWhatsappMessage)}>
                Falar com vendedor <MessageCircle size={18} />
              </Button>
              <Button href="/catalogo-b2b" variant="secondary">
                Catálogo B2B <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-brand-primary/15 ring-4 ring-white/80">
            <Image src={image} alt={title} width={980} height={1400} className="h-auto w-full object-cover object-top" />
          </div>
        </Container>
      </section>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fffad1_48%,#dff8ff_100%)] py-16">
        <SectionBackdrop image="/catalog/catalog-page-5.png" tint="from-white/90 via-yellow-50/76 to-sky-50/70" opacity="opacity-15" />
        <Container className="relative z-10">
          <SectionTitle
            eyebrow="Produtos"
            title="Opções para cotação B2B"
            description="Veja itens do catálogo e avance para atendimento comercial."
          />
          <div className="mt-10">
            <ProductGrid products={selectedProducts.length ? selectedProducts : products.slice(0, 6)} />
          </div>
        </Container>
      </section>
    </>
  );
}
