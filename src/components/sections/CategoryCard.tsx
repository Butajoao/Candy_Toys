"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import type { Category } from "@/types/product";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <Link
        href={`/produtos?categoria=${category.slug}`}
        className="group block overflow-hidden rounded-2xl bg-white/92 shadow-lg shadow-brand-primary/10 ring-1 ring-white/80 backdrop-blur transition hover:shadow-2xl"
      >
        <div className="relative aspect-[4/3] bg-surface-soft">
          <Image
            src={category.image}
            alt={`Categoria ${category.name} Candy Toy`}
            fill
            sizes="(min-width: 1024px) 25vw, 100vw"
            className="object-cover object-top transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
        </div>
        <div className="p-5">
          <span className={`mb-4 block h-2 w-16 rounded-full ${category.colorToken ?? "bg-brand-primary"}`} />
          <h3 className="font-display text-2xl font-black text-brand-navy">{category.name}</h3>
          <p className="mt-2 min-h-16 text-sm leading-6 text-ink/70">{category.description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-action-primary">
            Ver produtos <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
