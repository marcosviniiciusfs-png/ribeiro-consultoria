

## Plano: Atualizar webhook do formulário

### Alteração

**`src/components/Simulator.tsx`** (linha 62):
- Substituir a URL do webhook atual (`https://hook.us1.make.com/n17eiuxj1wybbp2mhy6o64lmv1fbjd3c`) pela nova URL: `https://hook.us1.make.com/9nlkmpsmdc786fznp6wu02qidsdou6p7`
- Manter o mesmo formato JSON, método POST e estrutura de dados já existente

A estrutura JSON enviada continuará sendo:
```json
{
  "Data de Entrada": "DD-MM-YYYY",
  "Nome": "...",
  "Idade": "...",
  "Telefone": "...",
  "WhatsApp": "...",
  "Cidade": "...",
  "Bairro": "...",
  "Observação": "..."
}
```

O envio já ocorre quando o usuário finaliza o formulário (botão "Enviar Candidatura" na etapa 3).

