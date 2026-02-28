

## Plano: Reformular Site para Captação de Parceiros

### Visão Geral
Transformar o site de simulação de crédito em uma landing page de recrutamento para a Ribeiro Consultoria, com foto da equipe, banner estilizado em CSS, informações da empresa e formulário de candidatura.

### Steps

1. **Copiar imagem da equipe** para `src/assets/team-photo.jpg`

2. **Adicionar Google Font cursiva** (Great Vibes) no `index.html` e atualizar título/meta descriptions

3. **Reformular `HeroSection.tsx`**:
   - Lado esquerdo: texto "FAÇA PARTE DO NOSSO TIME" (bold, sans-serif, #003399) + "Ribeiro Consultoria" (fonte cursiva Great Vibes, preta) + botão CTA "Candidate-se agora"
   - Lado direito: foto da equipe no lugar do hero-banner

4. **Reformular `BenefitsSection.tsx`** para seção "Sobre a Empresa":
   - Empresa de consultoria financeira há mais de 9 anos em Parauapebas
   - Duas representações: Parauapebas e Canaã
   - Campeã em vendas estadual
   - Entre as 10 melhores da administradora a nível nacional
   - Espaço para imagem do endereço (placeholder por enquanto, o usuário enviará depois)

5. **Reformular `Simulator.tsx`** para formulário de candidatura:
   - Título: "Para se candidatar preencha as perguntas abaixo, entraremos em contato"
   - Campos: Nome, Idade, Número de ligação, WhatsApp, Cidade, Bairro, Observação (1 linha max)
   - Formulário simples em uma página (não multi-step)
   - Manter envio via webhook

6. **Remover `TestimonialsSection`** da página Index (não relevante para recrutamento)

7. **Atualizar `Header.tsx`**: ajustar links de navegação para as novas seções (Início, Sobre, Candidatura, Contato)

8. **Atualizar `Obrigado.tsx`**: mensagem adequada ao contexto de candidatura

### Detalhes Técnicos

- Google Font: `<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">`
- O banner de texto será feito em HTML/CSS puro para controle total e escalabilidade
- Formulário de candidatura usará campos simples com `Input` e `Textarea` (obs. com `maxLength`)
- Máscaras de telefone mantidas com `react-input-mask`

