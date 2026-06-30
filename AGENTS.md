# AGENTS.md Local - Candy Toy

## Objetivo local

Reconstruir o site Candy Toy como experiência comercial B2B para brinquedos com doces, priorizando conversão de lojistas, revendedores, distribuidores e representantes.

## Fonte de verdade

- `prompt.md`
- `Catalogo CandyToy.pdf`
- `.jarvis/memoria/*`

## Regras especificas

- Não tratar o site como e-commerce B2C.
- Não inventar certificações, números, representantes, cobertura nacional, EAN, registros ou dados legais.
- Marcar informações não confirmadas como `[PENDENTE DE CONFIRMAÇÃO]`.
- Preservar identidade visual do catálogo: amarelo Candy, azul institucional, vermelho de CTA e cores de categoria com respiro.
- Priorizar CTA B2B em todas as páginas estratégicas.
- Usar `next/image`, `next/font`, Metadata API, sitemap e robots.
- Formulários devem ter validação server-side e texto LGPD mínimo.
- Antes de produção, acionar segurança, QA, observabilidade e devops.

## Definition of Done local

- Build passa.
- Rotas principais funcionam.
- Formulários validam no servidor.
- WhatsApp contextual esta configurado.
- Metadata, sitemap e robots existem.
- README e memória Jarvis atualizados.
- Riscos e pendências declarados.
