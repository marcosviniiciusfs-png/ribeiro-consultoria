

## Plano: Ajustar texto do Hero em linha única

### Alteração em `src/components/HeroSection.tsx`

- Reduzir o tamanho da fonte do h1 "FAÇA PARTE DO NOSSO TIME" para caber em uma única linha (de `text-4xl md:text-5xl lg:text-6xl` para algo como `text-2xl md:text-3xl lg:text-4xl`)
- Adicionar `whitespace-nowrap` ao h1 para forçar linha única
- Ajustar o tamanho do texto cursivo proporcionalmente para que ambos tenham largura similar
- Aumentar a margem negativa para a sobreposição ficar como na imagem 2 de referência

