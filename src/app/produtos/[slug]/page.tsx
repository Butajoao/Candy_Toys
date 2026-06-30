import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { productWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produto não encontrado" };
  }

  return {
    title: `${product.name} para Revenda`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} para Revenda | Candy Toy`,
      description: product.shortDescription,
      images: [product.images[0].src],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff200_0%,#fff7d6_45%,#dff8ff_100%)] py-16">
        <SectionBackdrop image={product.images[0].src} tint="from-yellow-50/84 via-white/76 to-sky-50/72" opacity="opacity-20" />
        <Container className="relative z-10">
          <Button href="/produtos" variant="ghost" size="sm">
            <ArrowLeft size={16} />
            Voltar para produtos
          </Button>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
            <ProductGallery product={product} />
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>{product.category}</Badge>
                {product.launch ? <Badge className="bg-bubble-pink text-white">Lançamento</Badge> : null}
              </div>
              <h1 className="mt-5 font-display text-5xl font-black leading-tight text-brand-navy">
                {product.name} para revenda
              </h1>
              <p className="mt-5 text-lg leading-8 text-ink/75">{product.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={whatsappUrl(productWhatsappMessage(product.name))} size="lg">
                  <MessageCircle size={20} />
                  Pedir cotação deste produto
                </Button>
                <Button href="/catalogo-b2b" size="lg" variant="secondary">
                  Receber catálogo B2B
                </Button>
              </div>
              <div className="mt-8">
                <ProductSpecs product={product} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fff2fb_45%,#dff8ff_100%)] py-16">
        <SectionBackdrop image="/catalog/catalog-page-5.png" tint="from-white/90 via-pink-50/72 to-sky-50/70" opacity="opacity-15" />
        <Container className="relative z-10">
          <SectionTitle
            eyebrow="Relacionados"
            title="Produtos parecidos para montar seu mix"
            description="Continue a cotação com linhas da mesma categoria ou solicite o catálogo completo."
          />
          <div className="mt-10">
            <ProductGrid products={relatedProducts.length ? relatedProducts : products.slice(0, 3)} />
          </div>
        </Container>
      </section>
    </>
  );
}
