"use server";

import { b2bLeadSchema } from "@/lib/validations";

export type LeadFormState = {
  ok: boolean;
  message: string;
  fields?: Record<string, string>;
  errors?: Record<string, string[] | undefined>;
};

export async function submitLeadForm(
  _previousState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const fields = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
  );

  const parsed = b2bLeadSchema.safeParse(fields);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Revise os campos destacados para enviar sua solicitacao.",
      fields,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  console.info("B2B lead received", {
    source: parsed.data.source,
    company: parsed.data.company,
    city: parsed.data.city,
    state: parsed.data.state,
  });

  return {
    ok: true,
    message:
      "Recebemos seus dados. O proximo passo e o atendimento comercial retornar com catalogo e condicoes para revenda.",
  };
}
