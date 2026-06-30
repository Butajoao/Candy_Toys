"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  "Escolha os produtos ou solicite o catalogo.",
  "Fale com um vendedor ou representante.",
  "Receba as condicoes comerciais.",
  "Faca seu pedido e acompanhe o atendimento.",
];

export function HowToBuySteps() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          className="rounded-2xl bg-white/92 p-5 shadow-lg shadow-brand-primary/10 ring-1 ring-white/80 backdrop-blur"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow font-black text-brand-navy">
              {index + 1}
            </span>
            <CheckCircle2 className="text-mint-green" size={22} />
          </div>
          <p className="mt-5 font-bold leading-6 text-brand-navy">{step}</p>
        </motion.div>
      ))}
    </div>
  );
}
