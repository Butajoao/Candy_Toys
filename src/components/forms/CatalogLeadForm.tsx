"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { submitLeadForm, type LeadFormState } from "@/lib/actions";
import { Button } from "@/components/ui/Button";

const initialState: LeadFormState = {
  ok: false,
  message: "",
};

const businessTypes = [
  "Loja de doces / bomboniere",
  "Mercado / minimercado",
  "Papelaria",
  "Loja de brinquedos",
  "Distribuidor / atacadista",
  "E-commerce",
  "Representante comercial",
];

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) {
    return null;
  }

  return <p className="mt-2 text-sm font-semibold text-action-primary">{errors[0]}</p>;
}

export function CatalogLeadForm({ source = "catalogo-b2b" }: { source?: string }) {
  const [state, formAction, pending] = useActionState(submitLeadForm, initialState);

  return (
    <form action={formAction} className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-brand-navy/10 sm:p-8">
      <input type="hidden" name="source" value={source} />
      <input className="hidden" type="text" name="website" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-black text-brand-navy">Nome</span>
          <input
            name="name"
            defaultValue={state.fields?.name}
            className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 px-4 text-ink outline-none focus:border-action-primary"
            required
          />
          <FieldError errors={state.errors?.name} />
        </label>
        <label className="block">
          <span className="text-sm font-black text-brand-navy">Empresa</span>
          <input
            name="company"
            defaultValue={state.fields?.company}
            className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 px-4 text-ink outline-none focus:border-action-primary"
            required
          />
          <FieldError errors={state.errors?.company} />
        </label>
        <label className="block">
          <span className="text-sm font-black text-brand-navy">CNPJ</span>
          <input
            name="cnpj"
            defaultValue={state.fields?.cnpj}
            className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 px-4 text-ink outline-none focus:border-action-primary"
          />
          <FieldError errors={state.errors?.cnpj} />
        </label>
        <label className="block">
          <span className="text-sm font-black text-brand-navy">WhatsApp</span>
          <input
            name="whatsapp"
            defaultValue={state.fields?.whatsapp}
            className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 px-4 text-ink outline-none focus:border-action-primary"
            required
          />
          <FieldError errors={state.errors?.whatsapp} />
        </label>
        <label className="block">
          <span className="text-sm font-black text-brand-navy">E-mail</span>
          <input
            type="email"
            name="email"
            defaultValue={state.fields?.email}
            className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 px-4 text-ink outline-none focus:border-action-primary"
            required
          />
          <FieldError errors={state.errors?.email} />
        </label>
        <div className="grid grid-cols-[1fr_96px] gap-3">
          <label className="block">
            <span className="text-sm font-black text-brand-navy">Cidade</span>
            <input
              name="city"
              defaultValue={state.fields?.city}
              className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 px-4 text-ink outline-none focus:border-action-primary"
              required
            />
            <FieldError errors={state.errors?.city} />
          </label>
          <label className="block">
            <span className="text-sm font-black text-brand-navy">UF</span>
            <input
              name="state"
              defaultValue={state.fields?.state}
              maxLength={2}
              className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 px-4 text-ink outline-none focus:border-action-primary"
              required
            />
            <FieldError errors={state.errors?.state} />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-black text-brand-navy">Tipo de negocio</span>
          <select
            name="businessType"
            defaultValue={state.fields?.businessType ?? ""}
            className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 bg-white px-4 text-ink outline-none focus:border-action-primary"
            required
          >
            <option value="" disabled>
              Selecione
            </option>
            {businessTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <FieldError errors={state.errors?.businessType} />
        </label>
        <label className="block">
          <span className="text-sm font-black text-brand-navy">Volume aproximado</span>
          <input
            name="estimatedVolume"
            defaultValue={state.fields?.estimatedVolume}
            placeholder="Ex.: compra mensal, caixas, displays"
            className="mt-2 h-12 w-full rounded-xl border border-brand-navy/15 px-4 text-ink outline-none focus:border-action-primary"
          />
          <FieldError errors={state.errors?.estimatedVolume} />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-black text-brand-navy">Mensagem</span>
          <textarea
            name="message"
            defaultValue={state.fields?.message}
            rows={4}
            className="mt-2 w-full rounded-xl border border-brand-navy/15 px-4 py-3 text-ink outline-none focus:border-action-primary"
          />
          <FieldError errors={state.errors?.message} />
        </label>
      </div>

      <p className="mt-5 text-xs leading-5 text-ink/60">
        Ao enviar, voce concorda que a Candy Toy entre em contato usando os dados informados. Politica de
        privacidade oficial: [PENDENTE DE CONFIRMACAO].
      </p>

      {state.message ? (
        <div
          className={`mt-5 rounded-2xl p-4 text-sm font-bold ${
            state.ok ? "bg-mint-green/15 text-brand-navy" : "bg-red-50 text-action-primary"
          }`}
        >
          {state.message}
        </div>
      ) : null}

      <Button type="submit" className="mt-6 w-full" size="lg" disabled={pending}>
        <Send size={18} />
        {pending ? "Enviando..." : "Receber catalogo B2B"}
      </Button>
    </form>
  );
}
