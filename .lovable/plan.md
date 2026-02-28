

## Problema
No mobile, a animação marquee para ou fica com glitch durante o scroll porque o navegador pausa animações CSS fora da viewport ou não usa GPU compositing.

## Solução

**`src/index.css`** — Adicionar propriedades de performance à `.marquee-track`:
- `will-change: transform` — informa ao navegador para otimizar a camada
- `backface-visibility: hidden` — força composição GPU
- `-webkit-backface-visibility: hidden` — compatibilidade Safari/iOS
- `transform: translateZ(0)` — cria uma nova camada de composição (hack GPU)

Também adicionar `overflow: hidden` e `will-change` no container pai (no componente `Simulator.tsx`, a div que envolve o marquee já tem `overflow-hidden`).

**Alteração em `src/index.css`:**
```css
.marquee-track {
  animation: marquee-scroll 20s linear infinite;
  will-change: transform;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
```

Remover o media query separado (já é 20s igual ao desktop — não precisa mais do override).

