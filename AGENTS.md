# AGENTS.md Local - Candy Toy

## Objetivo local

Reconstruir o site Candy Toy como experiencia comercial B2B para brinquedos com doces, priorizando conversao de lojistas, revendedores, distribuidores e representantes.

## Fonte de verdade

- `prompt.md`
- `Catalogo CandyToy.pdf`
- `.jarvis/memoria/*`

## Regras especificas

- Nao tratar o site como e-commerce B2C.
- Nao inventar certificacoes, numeros, representantes, cobertura nacional, EAN, registros ou dados legais.
- Marcar informacoes nao confirmadas como `[PENDENTE DE CONFIRMACAO]`.
- Preservar identidade visual do catalogo: amarelo Candy, azul institucional, vermelho de CTA e cores de categoria com respiro.
- Priorizar CTA B2B em todas as paginas estrategicas.
- Usar `next/image`, `next/font`, Metadata API, sitemap e robots.
- Formularios devem ter validacao server-side e texto LGPD minimo.
- Antes de producao, acionar seguranca, QA, observabilidade e devops.

## Definition of Done local

- Build passa.
- Rotas principais funcionam.
- Formularios validam no servidor.
- WhatsApp contextual esta configurado.
- Metadata, sitemap e robots existem.
- README e memoria Jarvis atualizados.
- Riscos e pendencias declarados.
