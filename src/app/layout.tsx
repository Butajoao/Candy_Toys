import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { siteConfig } from "@/data/site";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Candy Toy | Brinquedos com Doces para Lojistas e Revendedores",
    template: "%s | Candy Toy",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Candy Toy | Brinquedos com Doces para Revenda",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Candy Toy",
    images: [
      {
        url: "/catalog/catalog-page-1.png",
        width: 980,
        height: 1400,
        alt: "Catalogo Candy Toy 2025",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Candy Toy | Brinquedos com Doces para Revenda",
    description: siteConfig.description,
    images: ["/catalog/catalog-page-1.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${fredoka.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
