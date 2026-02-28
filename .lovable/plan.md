

## Plano: Adicionar seção "Sobre a Empresa" com ícones e animação futurista

### Nova seção acima de "Nossas Localizações"

Criar um novo componente `AboutSection.tsx` com 3 cards de destaque, cada um com ícone Lucide e animação de entrada futurista (fade-in + scale + slide com stagger delay):

1. **+9 Anos de Experiência** — Ícone `Clock` ou `Award` — "Consultoria financeira atuando há mais de 9 anos em Parauapebas, com representações em Parauapebas e Canaã dos Carajás"
2. **Campeã Estadual em Vendas** — Ícone `Trophy` — "A campeã em vendas estadual"
3. **Top 10 Nacional** — Ícone `TrendingUp` ou `Star` — "Entre as 10 melhores da administradora a nível nacional"

### Animação futurista
- Adicionar keyframes customizados em `tailwind.config.ts`: `futuristic-in` combinando `translateY(40px) scale(0.9) opacity(0)` → `translateY(0) scale(1) opacity(1)` com `cubic-bezier` suave
- Cada card entra com delay escalonado (0s, 0.2s, 0.4s)
- Linha decorativa animada ou brilho sutil nos ícones

### Alterações em arquivos

1. **Criar `src/components/AboutSection.tsx`** — Componente com 3 cards em grid responsivo, ícones Lucide (Award, Trophy, TrendingUp), animação futurista escalonada
2. **Editar `tailwind.config.ts`** — Adicionar keyframe `futuristic-in` e animação correspondente
3. **Editar `src/pages/Index.tsx`** — Importar e inserir `<AboutSection />` antes de `<BenefitsSection />`

