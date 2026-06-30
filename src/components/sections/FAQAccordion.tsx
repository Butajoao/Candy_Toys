"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A Candy Toy vende para consumidor final?",
    answer:
      "O site prioriza atendimento comercial para lojistas, revendedores e distribuidores. Consumidores podem usar a página Onde encontrar.",
  },
  {
    question: "Como comprar para minha loja?",
    answer:
      "Solicite o catálogo B2B, escolha os produtos de interesse e fale com o atendimento comercial para receber condições.",
  },
  {
    question: "Tem pedido mínimo?",
    answer: "[PENDENTE DE CONFIRMAÇÃO] O pedido mínimo deve ser validado pelo time comercial.",
  },
  {
    question: "Os produtos possuem certificação?",
    answer:
      "[PENDENTE DE CONFIRMAÇÃO] Certificações e registros não devem ser publicados sem documento oficial confirmado.",
  },
];

export function FAQAccordion() {
  return (
    <div className="divide-y divide-brand-navy/10 overflow-hidden rounded-2xl bg-white ring-1 ring-brand-navy/10">
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-brand-navy">
            {faq.question}
            <ChevronDown size={20} className="shrink-0 transition group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm leading-6 text-ink/70">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
