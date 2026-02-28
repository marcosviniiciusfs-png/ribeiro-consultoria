

## Plano: Substituir seção "Sobre Nós" por seção de Localizações

### Alterações

1. **Copiar as 2 imagens de localização** para `src/assets/`
   - `location-parauapebas.jpeg` (imagem 2)
   - `location-canaa.jpeg` (imagem 3)

2. **Reescrever `BenefitsSection.tsx`** como seção de localizações:
   - Título "Nossas Localizações"
   - Duas linhas, cada uma com:
     - **Imagem da localização** (lado esquerdo)
     - **Google Maps embed iframe** (lado direito) usando os links fornecidos convertidos para embeds
   - Localização 1: Parauapebas — Av dos Ipês, QD 02, L06, Segundo Piso
   - Localização 2: Canaã dos Carajás — Av. Rio Branco, QD 011, L17, Ponto B, Novo Horizonte
   - Layout responsivo (empilhado no mobile, lado a lado no desktop)

