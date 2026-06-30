# Riscos e Gaps

- Excesso de amarelo e cores pode prejudicar contraste se mal aplicado; UI atual usa fundo claro e azul como base para reduzir risco.
- Dados comerciais e legais não confirmados não devem ser publicados como fato.
- Formulário ainda não possui rate limit persistente ou integração real.
- WhatsApp usa placeholder até o número oficial ser definido.
- Catálogo PDF renderizado e pesado; imagens individuais otimizadas devem substituir assets temporarios.
- Vercel Analytics está preparado, mas eventos customizados ainda precisam ser conectados ao destino final de medição.
- Lighthouse ainda não foi executado; a validação atual cobre build, lint, typecheck, smoke HTTP e inspeção visual basica.
- Motion foi aplicado com respeito a `prefers-reduced-motion`, mas Lighthouse deve confirmar impacto real em performance.
