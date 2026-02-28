
Objetivo: deixar a animação marquee no mobile exatamente na mesma velocidade do desktop.

1) Ajustar `src/index.css`:
- No bloco `@media (max-width: 768px)`, trocar:
  - `animation-duration: 4.5s;`
  - para `animation-duration: 20s;`
- Manter a mesma animação base já definida em `.marquee-track` (`marquee-scroll 20s linear infinite`).

2) Garantir consistência:
- Confirmar que não existe outro override de velocidade para `.marquee-track` em outros arquivos.
- Manter apenas um valor efetivo no mobile: `20s`.

3) Verificação final (obrigatória):
- Testar no preview em viewport mobile e desktop.
- Confirmar visualmente que a velocidade está igual nas duas versões.
- Confirmar que o loop continua contínuo (sem travar/saltar).

Detalhes técnicos:
- Arquivo: `src/index.css`
- Regra afetada: `@media (max-width: 768px) { .marquee-track { ... } }`
- Valor final esperado no mobile: `animation-duration: 20s`
