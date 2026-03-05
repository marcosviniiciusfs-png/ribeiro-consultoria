

## Plano: Reduzir altura do vídeo no desktop

O vídeo está em formato vertical (celular), então no desktop ocupa muita altura. A solução é limitar a altura máxima no desktop e centralizar o vídeo.

**`src/components/VideoSection.tsx`**:
- Adicionar `md:max-h-[500px]` e `object-contain` ao elemento `<video>` para limitar a altura em telas maiores
- Adicionar `bg-black` ao container do vídeo para preencher o espaço ao redor quando o vídeo não ocupa toda a largura
- Reduzir o `max-w` do container para `max-w-2xl` no desktop

