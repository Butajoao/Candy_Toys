import type { Product } from "@/types/product";

export function ProductSpecs({ product }: { product: Product }) {
  const specs = [
    ["Categoria", product.category],
    ["Quantidade por display", product.displayQuantity],
    ["Quantidade por caixa", product.boxQuantity],
    ["Tipo de doce", product.candyType],
    ["Idade recomendada", product.recommendedAge ?? "[PENDENTE DE CONFIRMACAO]"],
    ["Dimensoes", product.dimensions ?? "[PENDENTE DE CONFIRMACAO]"],
    ["Peso", product.weight ?? "[PENDENTE DE CONFIRMACAO]"],
    ["SKU / Codigo", product.sku],
    ["EAN", product.ean ?? "[PENDENTE DE CONFIRMACAO]"],
    ["Certificacao / registro", product.certification ?? "[PENDENTE DE CONFIRMACAO]"],
  ];

  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {specs.map(([label, value]) => (
        <div key={label} className="rounded-2xl bg-white p-4 ring-1 ring-brand-navy/10">
          <dt className="text-xs font-black uppercase tracking-wide text-brand-primary">{label}</dt>
          <dd className="mt-2 text-sm font-semibold text-ink/80">{value ?? "Consultar"}</dd>
        </div>
      ))}
    </dl>
  );
}
