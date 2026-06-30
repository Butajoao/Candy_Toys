"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

const trustSeals = ["Produtos para revenda", "Displays prontos para exposicao", "Atendimento comercial", "Catalogo B2B"];

const textVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const floaters = [
  "bg-brand-yellow left-[5%] top-[18%] h-12 w-12",
  "bg-bubble-pink right-[9%] top-[14%] h-16 w-16",
  "bg-mint-green left-[47%] top-[8%] h-10 w-10",
  "bg-orange-pop right-[28%] bottom-[14%] h-12 w-12",
  "bg-brand-sky left-[38%] bottom-[8%] h-14 w-14",
];

export function HeroMotion() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20, mass: 0.25 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20, mass: 0.25 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      className="relative isolate overflow-hidden bg-[linear-gradient(125deg,#fff200_0%,#fff7a4_24%,#fff1e9_52%,#c9f3ff_100%)]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="absolute inset-0 -z-10 opacity-60">
        <Image
          src="/catalog/catalog-page-2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(239,35,60,.32),transparent_24%),radial-gradient(circle_at_76%_18%,rgba(229,47,119,.28),transparent_20%),radial-gradient(circle_at_70%_82%,rgba(91,189,135,.35),transparent_26%)]" />
      </div>

      {!reduceMotion
        ? floaters.map((classes, index) => (
            <motion.span
              key={classes}
              className={`absolute -z-10 hidden rounded-[30%] opacity-75 blur-[1px] lg:block ${classes}`}
              animate={{ y: [0, -18, 0], rotate: [0, 12, -6, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 5.5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
              aria-hidden
            />
          ))
        : null}

      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-10 py-10 lg:grid-cols-[1fr_0.92fr] lg:py-16">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.span
            variants={textVariants}
            className="inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-black text-brand-primary shadow-lg shadow-brand-yellow/25 ring-1 ring-brand-navy/10 backdrop-blur"
          >
            Candy Toy para lojistas, revendedores e distribuidores
          </motion.span>
          <motion.h1
            variants={textVariants}
            className="mt-6 font-display text-4xl font-black leading-[0.98] text-brand-navy drop-shadow-sm sm:text-6xl lg:text-7xl"
          >
            Brinquedos com doces que chamam atencao e giram rapido no ponto de venda
          </motion.h1>
          <motion.p variants={textVariants} className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">
            Produtos coloridos, divertidos e prontos para exposicao em lojas, bombonieres, mercados,
            papelarias e distribuidores.
          </motion.p>
          <motion.div variants={textVariants} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl(globalWhatsappMessage)} size="lg">
              Quero comprar para minha loja <MessageCircle size={20} />
            </Button>
            <Button href="/catalogo-b2b" size="lg" variant="secondary">
              Ver catalogo B2B <ArrowRight size={20} />
            </Button>
          </motion.div>
          <motion.div variants={textVariants} className="mt-8 hidden gap-3 sm:grid sm:grid-cols-2">
            {trustSeals.map((seal) => (
              <motion.div
                key={seal}
                className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-black text-brand-navy shadow-sm ring-1 ring-brand-navy/10 backdrop-blur"
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                {seal}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="relative perspective-distant" style={{ x: imageX, y: imageY }}>
          <motion.div
            className="absolute inset-6 rounded-full bg-brand-yellow blur-3xl"
            animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <motion.div
            className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-brand-primary/25 ring-4 ring-white/80"
            initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <Image
              src="/catalog/catalog-page-3.png"
              alt="Linha Candy Espadas em display para ponto de venda"
              width={980}
              height={1400}
              priority
              className="h-auto w-full object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
