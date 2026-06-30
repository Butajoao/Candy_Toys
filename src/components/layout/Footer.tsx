import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { globalWhatsappMessage, whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-brand-navy pb-24 pt-14 text-white lg:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Image src="/catalog/candytoy-logo.png" width={130} height={90} alt="Candy Toy" />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            Brinquedos com doces para lojistas, revendedores e distribuidores. Dados institucionais,
            canais oficiais e políticas legais devem ser confirmados antes do deploy.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={whatsappUrl(globalWhatsappMessage)} size="sm">
              Falar no WhatsApp
            </Button>
            <Button href="/catalogo-b2b" size="sm" variant="secondary">
              Catálogo B2B
            </Button>
          </div>
        </div>
        <div>
          <h2 className="font-display text-xl font-black">Mapa do site</h2>
          <nav className="mt-4 grid gap-3 text-sm text-white/75">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="font-display text-xl font-black">Contato comercial</h2>
          <dl className="mt-4 space-y-3 text-sm text-white/75">
            <div>
              <dt className="font-bold text-white">Telefone</dt>
              <dd>{siteConfig.contact.phone}</dd>
            </div>
            <div>
              <dt className="font-bold text-white">E-mail</dt>
              <dd>{siteConfig.contact.email}</dd>
            </div>
            <div>
              <dt className="font-bold text-white">Endereço</dt>
              <dd>{siteConfig.contact.address}</dd>
            </div>
          </dl>
        </div>
      </div>
    </footer>
  );
}
