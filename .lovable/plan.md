

## Plano: Ajustar sobreposição do texto no Hero Section

O usuário quer que o texto cursivo "Ribeiro Consultoria" sobreponha parcialmente o texto "FAÇA PARTE DO NOSSO TIME", como mostrado na imagem 2 de referência.

### Alteração em `src/components/HeroSection.tsx`

- Remover o `space-y-2` do container dos textos
- Adicionar margem negativa superior (`-mt-4` ou similar) no texto cursivo "Ribeiro Consultoria" para que ele sobreponha parcialmente o texto azul acima
- Aumentar o tamanho da fonte cursiva para ficar mais proporcional ao título (similar à referência)
- Ajustar line-height do título para permitir a sobreposição natural

