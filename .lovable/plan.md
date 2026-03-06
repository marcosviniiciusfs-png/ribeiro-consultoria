
## Plano: Atualizar Meta Pixel para novo ID

O pixel antigo (1972802536840318) está configurado no `index.html`. Não há pixel específico no componente `Obrigado.tsx` - ele reutiliza o pixel global do index.html via roteamento React.

### Alterações necessárias:

**`index.html`** (linhas 20-43):
1. Linha 30: Substituir `fbq('init', '1972802536840318');` por `fbq('init', '938073072505710');`
2. Linha 42: Substituir o parâmetro `id=1972802536840318` por `id=938073072505710` na URL da tag `<noscript>`

Isso garante que:
- A página inicial carrega o novo pixel
- A página de obrigado (/obrigado) herda o mesmo pixel global
- Ambas as páginas usam exclusivamente o novo pixel ID: 938073072505710
