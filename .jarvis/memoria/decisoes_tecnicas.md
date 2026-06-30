# Decisoes Técnicas

- Stack adotada: Next.js App Router, TypeScript, Tailwind CSS, Motion, Zod e Vercel Analytics.
- Server Components por padrão; Client Components apenas para menu mobile, animações e formulário interativo.
- Formulário B2B usa Server Action com validação Zod.
- Paleta inicial derivada do catálogo/logo:
  - `#F3EF00` amarelo Candy
  - `#24469B` azul institucional
  - `#40A0DE` azul claro
  - `#202B60` azul escuro
  - `#EF233C` CTA principal
  - `#E52F77`, `#5BBD87`, `#5E3D7C`, `#FF8A00` apoio e categorias
- PDF renderizado virou asset inicial em `public/catalog/`.
- Landings SEO foram implementadas como rotas reais para intenções estratégicas.
