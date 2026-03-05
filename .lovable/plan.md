

## Plano: Cortar o vídeo para esconder a marca d'água

A marca d'água do Clideo aparece na parte inferior do vídeo. A solução é usar CSS para cortar (clip) a parte de baixo do vídeo em todas as proporções.

**`src/components/VideoSection.tsx`**:
- Adicionar `overflow-hidden` no container do vídeo (já existe)
- Usar escala (`scale-[1.08]`) no elemento `<video>` para ampliar levemente o vídeo, empurrando as bordas (incluindo a marca d'água) para fora da área visível
- Isso funciona tanto no mobile quanto no desktop sem alterar a estrutura

