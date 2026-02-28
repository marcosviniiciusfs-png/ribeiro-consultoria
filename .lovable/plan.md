

## Plano: Centralizar texto e reformular formulário em steps

### 1. Centralizar "Ribeiro Consultoria" em `HeroSection.tsx`
- Mudar o container de texto para `text-center` (remover `md:text-left`)
- Centralizar ambos os textos horizontalmente para que "Ribeiro Consultoria" fique centralizado sob "FAÇA PARTE DO NOSSO TIME"

### 2. Reformular `Simulator.tsx` para formulário multi-step (2 em 2)
- Adicionar state `step` (1, 2, 3)
- **Step 1**: Nome completo + Idade (lado a lado em grid 2 colunas)
- **Step 2**: Telefone + WhatsApp (lado a lado)
- **Step 3**: Cidade + Bairro (lado a lado) + Observação (1 linha, abaixo)
- Botões "Próximo" nos steps 1 e 2, "Enviar Candidatura" no step 3
- Botão "Voltar" nos steps 2 e 3
- Indicador de progresso (step 1/3, 2/3, 3/3)

