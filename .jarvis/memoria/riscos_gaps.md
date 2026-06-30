# Riscos e Gaps

- Excesso de amarelo e cores pode prejudicar contraste se mal aplicado; UI atual usa fundo claro e azul como base para reduzir risco.
- Dados comerciais e legais nao confirmados nao devem ser publicados como fato.
- Formulario ainda nao possui rate limit persistente ou integracao real.
- WhatsApp usa placeholder ate o numero oficial ser definido.
- Catalogo PDF renderizado e pesado; imagens individuais otimizadas devem substituir assets temporarios.
- Vercel Analytics esta preparado, mas eventos customizados ainda precisam ser conectados ao destino final de medicao.
- Lighthouse ainda nao foi executado; a validacao atual cobre build, lint, typecheck, smoke HTTP e inspecao visual basica.
- Motion foi aplicado com respeito a `prefers-reduced-motion`, mas Lighthouse deve confirmar impacto real em performance.
