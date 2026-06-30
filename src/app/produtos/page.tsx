import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Produtos para Revenda",
  description: "Catalogo navegavel de brinquedos com doces Candy Toy para lojistas e revendedores.",
};

type Search = Promise<Record<string, string | string[] | undefined>>;

export default async function ProductsPage({ searchParams }: { searchParams?: Search }) {
  const params = (await searchParams) ?? {};
  const query = typeof params.busca === "string" ? params.busca.toLowerCase() : "";
  const category = typeof params.categoria === "string" ? params.categoria : "";
  const selectedCategory = categories.find((item) => item.slug === category);

  const filteredProducts = products.filter((product) => {
    const matchesQuery = query
      ? `${product.name} ${product.category} ${product.shortDescription} ${product.sku ?? ""}`
          .toLowerCase()
          .includes(query)
      : true;
    const matchesCategory = selectedCategory ? product.category.toLowerCase().includes(selectedCategory.name.split(" ")[0].toLowerCase()) : true;
    return matchesQuery && matchesCategory;
  });

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff200_0%,#fffce8_45%,#dff8ff_100%)] py-16">
      <SectionBackdrop image="/catalog/catalog-page-2.png" tint="from-yellow-50/82 via-white/74 to-sky-100/70" opacity="opacity-25" />
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <SectionTitle
            eyebrow="Produtos"
            title="Produtos Candy Toy para revenda"
            description="Explore brinquedos com doces, displays e lancamentos preparados para pontos de venda."
          />
          <form className="rounded-2xl bg-white/92 p-4 shadow-xl shadow-brand-primary/10 ring-1 ring-white/80 backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-[1fr_220px_auto]">
              <input
                name="busca"
                defaultValue={query}
                placeholder="Buscar por produto, referencia ou categoria"
                className="h-12 rounded-xl border border-brand-navy/15 px-4 outline-none focus:border-action-primary"
              />
              <select
                name="categoria"
                defaultValue={category}
                className="h-12 rounded-xl border border-brand-navy/15 bg-white px-4 outline-none focus:border-action-primary"
              >
                <option value="">Todas as categorias</option>
                {categories.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
              <Button type="submit">Filtrar</Button>
            </div>
          </form>
        </div>

        <div className="mt-10">
          {filteredProducts.length ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-brand-navy/10">
              <h2 className="font-display text-2xl font-black text-brand-navy">Nenhum produto encontrado</h2>
              <p className="mt-2 text-ink/70">Ajuste a busca ou fale com o comercial para receber o catalogo completo.</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
