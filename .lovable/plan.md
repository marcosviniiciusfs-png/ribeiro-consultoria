

## Plano: Ajustar velocidade marquee mobile + trocar logo do rodapé

### Alterações

1. **Copiar imagem** `Design_sem_nome_30.png` para `src/assets/ribeiro-logo-footer.png` (substituir a existente)

2. **`src/index.css`**: No media query mobile, alterar `animation-duration` de `8s` para `5.5s` (8 / 1.45 ≈ 5.5s — mais rápido em 1.45x)

3. **`src/components/Footer.tsx`**: Trocar o import de `ribeiro-logo.png` por `ribeiro-logo-footer.png` (a nova imagem enviada) — já existe um asset com esse nome, será substituído pela nova imagem

