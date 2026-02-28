

## Plano: Corrigir animação marquee para loop infinito contínuo

O problema é que a animação atual move um único container com 16 imagens, e quando chega ao fim do container há um "gap" visível e a animação reinicia abruptamente.

### Solução: Técnica de duplicação para loop infinito real

**`src/components/Simulator.tsx`**:
- Usar dois conjuntos idênticos de imagens lado a lado dentro de um wrapper
- O primeiro conjunto se desloca exatamente o seu próprio comprimento (`translateX(-50%)`) e o segundo conjunto preenche o espaço, criando um ciclo contínuo sem gaps
- Adicionar classe responsiva para velocidade mais rápida no mobile

**`src/index.css`**:
- Manter o keyframe `marquee-scroll` de `translateX(0)` a `translateX(-50%)`
- Adicionar media query para mobile com duração mais rápida (ex: 8s ao invés de 15s)

**Estrutura do marquee corrigido**:
```text
[wrapper overflow-hidden]
  [flex w-max animate] ← move -50% do total
    [img img img img img img img img] ← conjunto A
    [img img img img img img img img] ← conjunto B (duplicata exata)
```

Quando o conjunto A sai pela esquerda, o conjunto B já o substituiu perfeitamente, e o CSS reinicia sem descontinuidade visual.

