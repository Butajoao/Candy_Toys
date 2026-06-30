import { FileDown, MessageCircle } from "lucide-react";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-brand-navy/10 bg-white p-3 shadow-2xl lg:hidden">
      <a
        href={whatsappUrl(globalWhatsappMessage)}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-action-primary text-sm font-black text-white"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
      <a
        href="/catalogo-b2b"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-yellow text-sm font-black text-brand-navy"
      >
        <FileDown size={18} />
        Catálogo
      </a>
    </div>
  );
}
