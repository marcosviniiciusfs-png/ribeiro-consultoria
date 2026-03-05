

## Plano: Adicionar vídeo de convite entre o Hero e a seção "Quem Somos"

### O que será feito
Adicionar o vídeo enviado entre a seção "Faça parte do nosso time" (Hero) e a seção "Quem Somos" (About), com um player de vídeo estilizado.

### Alterações

1. **Copiar o vídeo** para `src/assets/vaga-video.mp4`

2. **Criar `src/components/VideoSection.tsx`**:
   - Seção com fundo suave (gradiente claro)
   - Título como "Conheça a oportunidade" ou similar
   - Player `<video>` com controles nativos, `autoPlay`, `muted`, `playsInline` (para funcionar no mobile)
   - Container com `max-w-3xl`, `rounded-2xl`, `shadow` para visual profissional
   - Responsivo para mobile e desktop

3. **Atualizar `src/pages/Index.tsx`**:
   - Importar `VideoSection`
   - Inserir entre `<HeroSection />` e `<AboutSection />`

### Detalhes técnicos
- O vídeo será importado como asset ES6 para bundling otimizado
- Atributos `muted` e `playsInline` garantem autoplay no iOS/Safari
- Controles nativos permitem o usuário pausar, ajustar volume, tela cheia

