import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CatalogLeadForm } from "@/components/forms/CatalogLeadForm";
import { SectionBackdrop } from "@/components/sections/SectionBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Candy Toy para atendimento comercial, catálogo B2B, representantes ou informações institucionais.",
};

const contactItems = [
  { icon: Phone, label: "Telefone", value: siteConfig.contact.phone },
  { icon: Mail, label: "E-mail", value: siteConfig.contact.email },
  { icon: MapPin, label: "Endereço", value: siteConfig.contact.address },
  { icon: MessageCircle, label: "Horário", value: siteConfig.contact.hours },
];

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff200_0%,#fffce8_44%,#cfefff_100%)] py-16">
      <SectionBackdrop image="/catalog/catalog-page-2.png" tint="from-yellow-50/84 via-white/76 to-sky-50/72" opacity="opacity-20" />
      <Container className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Contato"
            title="Fale com a Candy Toy"
            description="Entre em contato para atendimento comercial, catálogo B2B, representantes ou informações institucionais."
          />
          <div className="mt-8 grid gap-4">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-4 rounded-2xl bg-white/92 p-5 shadow-lg shadow-brand-primary/10 ring-1 ring-white/80 backdrop-blur">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-navy">
                  <item.icon size={20} />
                </div>
                <div>
                  <h2 className="font-black text-brand-navy">{item.label}</h2>
                  <p className="mt-1 text-sm text-ink/70">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-8" href={whatsappUrl(globalWhatsappMessage)}>
            WhatsApp comercial
          </Button>
        </div>
        <CatalogLeadForm source="contato" />
      </Container>
    </section>
  );
}
