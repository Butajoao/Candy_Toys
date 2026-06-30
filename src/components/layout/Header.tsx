"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-surface-warm/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Candy Toy home">
          <motion.span
            className="relative flex h-16 w-36 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-brand-sky/20 ring-1 ring-brand-sky/25"
            whileHover={{ scale: 1.04, rotate: -1.5 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-yellow text-brand-navy shadow-md">
              <Sparkles size={15} />
            </span>
            <Image
              src="/catalog/candytoy-logo-transparent.png"
              width={128}
              height={88}
              alt="Candy Toy"
              priority
              className="h-auto w-28 drop-shadow-md"
            />
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold text-brand-navy lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-action-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={whatsappUrl(globalWhatsappMessage)} size="sm">
            Comprar no atacado
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-navy ring-1 ring-brand-navy/15 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand-navy/10 bg-white px-4 py-5 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4 text-base font-bold text-brand-navy">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button className="mt-5 w-full" href={whatsappUrl(globalWhatsappMessage)}>
            Comprar no atacado
          </Button>
        </div>
      ) : null}
    </header>
  );
}
