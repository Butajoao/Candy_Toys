import { z } from "zod";

const phoneRegex = /^[0-9+()\-\s]{8,20}$/;

export const b2bLeadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  company: z.string().trim().min(2, "Informe a empresa."),
  cnpj: z.string().trim().max(24).optional(),
  city: z.string().trim().min(2, "Informe a cidade."),
  state: z.string().trim().min(2, "Informe a UF."),
  whatsapp: z.string().trim().regex(phoneRegex, "Informe um WhatsApp válido."),
  email: z.string().trim().email("Informe um e-mail válido."),
  businessType: z.string().trim().min(2, "Informe o tipo de negócio."),
  estimatedVolume: z.string().trim().max(80).optional(),
  message: z.string().trim().max(600).optional(),
  source: z.string().trim().max(80).optional(),
  website: z.string().max(0, "Envio bloqueado."),
});

export type B2BLeadInput = z.infer<typeof b2bLeadSchema>;
