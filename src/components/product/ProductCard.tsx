"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { productWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  const mainImage = product.images[0];

  return (
    <motion.article
      className="group overflow-hidden rounded-2xl bg-white/94 shadow-lg shadow-brand-primary/10 ring-1 ring-white/80 backdrop-blur transition hover:shadow-2xl"
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, scale: 1.018 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/produtos/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-surface-soft">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-top transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/18 via-transparent to-transparent" />
        </div>
      </Link>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-2">
          {product.launch ? <Badge className="bg-bubble-pink text-white">Novo</Badge> : null}
          {product.tags?.slice(0, 2).map((tag) => (
            <Badge key={tag} className="bg-brand-yellow">
              {tag}
            </Badge>
          ))}
        </div>
        <div>
          <p className="text-sm font-bold text-brand-primary">{product.category}</p>
          <h3 className="mt-1 font-display text-2xl font-black text-brand-navy">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/70">{product.shortDescription}</p>
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-surface-warm p-3">
            <dt className="font-bold text-brand-navy">Display</dt>
            <dd className="mt-1 text-ink/70">{product.displayQuantity ?? "Consultar"}</dd>
          </div>
          <div className="rounded-xl bg-surface-warm p-3">
            <dt className="font-bold text-brand-navy">Caixa</dt>
            <dd className="mt-1 text-ink/70">{product.boxQuantity ?? "Consultar"}</dd>
          </div>
        </dl>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={`/produtos/${product.slug}`} variant="dark" className="flex-1">
            Ver detalhes <ArrowRight size={17} />
          </Button>
          <Button
            href={whatsappUrl(productWhatsappMessage(product.name))}
            variant="secondary"
            className="flex-1"
          >
            <MessageCircle size={17} />
            Cotar
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
