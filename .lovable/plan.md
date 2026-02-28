

## Plano: Adicionar barra marquee azul acima do formulário

### Alterações

1. **Copiar imagem** `Design_sem_nome_29.png` para `src/assets/marquee-logo.png`

2. **Adicionar keyframe CSS** em `src/index.css` para animação marquee infinita movendo para a esquerda

3. **Editar `Simulator.tsx`**: Antes da seção `#candidatura`, adicionar uma barra full-width com `bg-primary`, contendo a imagem repetida ~8 vezes em uma fila, animada com CSS `marquee` loop infinito para a esquerda. A barra fica acima do texto "CANDIDATE-SE".

