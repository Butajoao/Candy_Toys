import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/produtos",
    "/catalogo-b2b",
    "/representantes",
    "/onde-encontrar",
    "/lancamentos",
    "/sobre",
    "/contato",
    "/candy-toys",
    "/brinquedos-com-doces",
    "/displays-para-lojas",
    "/doces-com-brinquedos-para-revenda",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/produtos/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
