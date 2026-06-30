"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Product } from "@/types/product";

export function ProductGallery({ product }: { product: Product }) {
  const mainImage = product.images[0];

  return (
    <motion.div
      className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-primary/20 ring-4 ring-white/80"
      initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.018, rotate: 0.4 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[4/5] bg-surface-soft">
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover object-top transition duration-700 hover:scale-105"
        />
      </div>
    </motion.div>
  );
}
