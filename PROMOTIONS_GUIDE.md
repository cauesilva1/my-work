# 🎉 Sistema de Promoções - Guia Completo

## Como Usar o Sistema de Promoções

### 📁 Arquivos Principais:
- `src/components/PromotionPopup.tsx` - Componente do pop-up
- `src/components/PromotionBanner.tsx` - Componente do banner
- `src/data/promotions.ts` - Configuração das promoções
- `src/app/page.tsx` - Integração na página principal

---

## 🚀 Como Configurar Promoções

### 1. **Editar Promoções** (`src/data/promotions.ts`)

```typescript
{
  id: 'minha-promocao',
  title: '🎉 Título da Promoção',
  description: 'Descrição da promoção aqui...',
  discount: '50% OFF', // ou
  offer: 'FREE', // para ofertas gratuitas
  endDate: '2024-12-31T23:59:59', // Data de fim (opcional)
  maxClients: 10, // Máximo de clientes (opcional)
  currentClients: 3, // Clientes atuais (opcional)
  buttonText: 'Aproveitar Oferta',
  buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Oi! Quero a promoção!',
  backgroundColor: 'bg-gradient-to-br from-purple-600 to-pink-600',
  textColor: 'text-white',
  isActive: true, // true = ativa, false = desativada
  showDelay: 3, // Delay em segundos antes de aparecer
  showFrequency: 'daily', // 'once' | 'daily' | 'weekly' | 'always'
  priority: 10 // Número maior = prioridade maior
}
```

---

## 🎯 Tipos de Promoções Exemplos

### 1. **Promoção Gratuita (Diária)**
```typescript
{
  id: 'free-landing-pages',
  title: '🎉 FREE Landing Pages!',
  description: 'First 5 clients get a complete landing page absolutely FREE!',
  offer: 'FREE',
  maxClients: 5,
  currentClients: 2,
  buttonText: 'Claim My Free Landing Page',
  buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Hi! I want my FREE landing page! 🎉',
  backgroundColor: 'bg-gradient-to-br from-purple-600 to-pink-600',
  textColor: 'text-white',
  isActive: true,
  showDelay: 3,
  showFrequency: 'daily', // Aparece todo dia
  priority: 10 // Prioridade máxima
}
```

### 2. **Promoção Black Friday (Uma vez)**
```typescript
{
  id: 'black-friday-50-off',
  title: '🖤 Black Friday Special',
  description: 'Get 50% OFF on all landing pages!',
  discount: '50% OFF',
  endDate: '2024-11-30T23:59:59',
  buttonText: 'Get 50% OFF Now',
  buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Hi! I want the Black Friday deal! 🖤',
  backgroundColor: 'bg-gradient-to-br from-gray-900 to-red-600',
  textColor: 'text-white',
  isActive: true,
  showDelay: 2,
  showFrequency: 'once', // Aparece apenas uma vez
  priority: 9
}
```

### 3. **Promoção Semanal**
```typescript
{
  id: 'weekly-special',
  title: '✨ Weekly Special!',
  description: 'New deals every week! 20% OFF.',
  discount: '20% OFF',
  buttonText: 'Get Weekly Discount',
  buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Hi! I want the weekly special! ✨',
  backgroundColor: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  textColor: 'text-white',
  isActive: true,
  showDelay: 4,
  showFrequency: 'weekly', // Aparece uma vez por semana
  priority: 8
}
```

---

## 🎨 Personalização Visual

### **Cores Disponíveis:**
- `bg-gradient-to-br from-purple-600 to-pink-600` - Roxo/Rosa
- `bg-gradient-to-br from-gray-900 to-red-600` - Preto/Vermelho
- `bg-gradient-to-br from-blue-600 to-cyan-500` - Azul/Ciano
- `bg-gradient-to-br from-orange-500 to-yellow-500` - Laranja/Amarelo
- `bg-gradient-to-br from-green-500 to-emerald-500` - Verde/Esmeralda

### **Criar Nova Cor:**
```typescript
backgroundColor: 'bg-gradient-to-br from-[#sua-cor] to-[#sua-cor-2]'
```

---

## ⚙️ Funcionalidades

### **Frequências de Aparição:**
- **`once`** - Aparece apenas uma vez por usuário
- **`daily`** - Aparece uma vez por dia
- **`weekly`** - Aparece uma vez por semana
- **`always`** - Aparece sempre

### **Sistema de Prioridade:**
- **Número maior = Prioridade maior**
- Se múltiplas promoções estiverem ativas, a de maior prioridade aparece
- Exemplo: `priority: 10` > `priority: 5`

### **Contador Regressivo:**
- Aparece automaticamente se `endDate` estiver definido
- Mostra dias, horas, minutos e segundos
- Para automaticamente quando a data expira

### **Contador de Clientes:**
- Mostra progresso se `maxClients` e `currentClients` estiverem definidos
- Barra de progresso visual
- Atualize `currentClients` conforme clientes se inscrevem

### **Delay Personalizado:**
- `showDelay: 3` = aparece após 3 segundos
- `showDelay: 0` = aparece imediatamente
- Recomendado: 2-5 segundos

### **Sistema Inteligente:**
- **Pop-up:** Aparece na primeira visita (conforme frequência)
- **Banner:** Aparece nas visitas subsequentes
- **LocalStorage:** Controle individual por promoção
- **Reset automático:** Baseado na frequência configurada

---

## 🔧 Como Ativar/Desativar

### **Ativar Promoção:**
```typescript
// Em src/data/promotions.ts
{
  // ... outras configurações
  isActive: true // Mude para true
}
```

### **Desativar Promoção:**
```typescript
// Em src/data/promotions.ts
{
  // ... outras configurações
  isActive: false // Mude para false
}
```

### **Múltiplas Promoções:**
```typescript
// Você pode ter várias ativas ao mesmo tempo
// A de maior prioridade será mostrada
{
  id: 'promocao-1',
  isActive: true,
  priority: 10 // Esta aparecerá primeiro
},
{
  id: 'promocao-2', 
  isActive: true,
  priority: 5 // Esta aparecerá depois
}
```

---

## 📱 WhatsApp Integration

### **Link Personalizado:**
```typescript
buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Oi! Quero a promoção [NOME_DA_PROMOCAO]! 🎉'
```

### **Variáveis Úteis:**
- `phone=5199186506` - Seu número do WhatsApp
- `text=` - Mensagem pré-formatada
- Emojis para chamar atenção

---

## 🎯 Dicas de Marketing

### **1. Urgência:**
- Use contadores regressivos
- Limite o número de clientes
- Datas específicas de fim

### **2. Escassez:**
- "Apenas 5 vagas restantes"
- "Oferta por tempo limitado"
- "Primeiros 10 clientes"

### **3. Valor:**
- "Economize R$ 500"
- "Valor normal: R$ 1000"
- "Por apenas R$ 500"

### **4. Social Proof:**
- "Já 50 clientes aproveitaram"
- "4.9/5 estrelas de satisfação"
- "100% de clientes satisfeitos"

---

## 🚨 Troubleshooting

### **Pop-up não aparece:**
1. Verifique se `isActive: true`
2. Limpe localStorage: `localStorage.removeItem('promotion_[ID]')`
3. Verifique se há erro no console
4. Confirme se `showFrequency` está correto

### **Banner não aparece:**
1. Verifique se o usuário já viu o pop-up
2. O banner aparece quando pop-up não pode ser mostrado
3. Verifique se `isActive: true`

### **Contador não funciona:**
1. Verifique formato da data: `YYYY-MM-DDTHH:mm:ss`
2. Use timezone correto
3. Teste com data futura

### **Link do WhatsApp não funciona:**
1. Verifique o número: `5199186506`
2. Teste o link manualmente
3. Verifique se o texto está codificado

### **Múltiplas promoções:**
1. Verifique a prioridade (`priority`)
2. A de maior número aparece primeiro
3. Use `getAllActivePromotions()` para ver todas

---

## 📈 Analytics (Futuro)

Para rastrear performance das promoções:
- Google Analytics Events
- Facebook Pixel
- Hotjar para heatmaps
- A/B testing entre promoções

---

## 🎉 Exemplos Prontos para Usar

### **Black Friday:**
```typescript
{
  id: 'black-friday-2024',
  title: '🖤 BLACK FRIDAY - 70% OFF!',
  description: 'Maior desconto do ano! Apenas hoje.',
  discount: '70% OFF',
  endDate: '2024-11-29T23:59:59',
  buttonText: 'APROVEITAR 70% OFF',
  buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=BLACK FRIDAY 70% OFF! 🖤',
  backgroundColor: 'bg-gradient-to-br from-gray-900 to-red-600',
  textColor: 'text-white',
  isActive: true,
  showDelay: 1,
  showFrequency: 'once',
  priority: 10
}
```

### **Ano Novo:**
```typescript
{
  id: 'new-year-2024',
  title: '✨ 2024 - Novo Site, Novo Sucesso!',
  description: 'Comece o ano com o pé direito! 40% OFF.',
  discount: '40% OFF',
  endDate: '2024-01-15T23:59:59',
  buttonText: 'Começar 2024 com Desconto',
  buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Quero começar 2024 com 40% OFF! ✨',
  backgroundColor: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  textColor: 'text-white',
  isActive: true,
  showDelay: 2,
  showFrequency: 'once',
  priority: 9
}
```

### **Promoção Diária:**
```typescript
{
  id: 'daily-deal',
  title: '🔥 Daily Deal - 15% OFF!',
  description: 'Novo desconto todo dia! Aproveite hoje.',
  discount: '15% OFF',
  buttonText: 'Pegar Desconto Diário',
  buttonLink: 'https://api.whatsapp.com/send?phone=5199186506&text=Quero o desconto diário! 🔥',
  backgroundColor: 'bg-gradient-to-br from-orange-500 to-yellow-500',
  textColor: 'text-white',
  isActive: true,
  showDelay: 3,
  showFrequency: 'daily',
  priority: 8
}
```

---

## 🔄 Como Funciona o Sistema

### **Primeira Visita:**
1. ✅ Verifica se há promoção ativa
2. ✅ Verifica se deve mostrar (frequência)
3. ✅ Mostra pop-up após delay
4. ✅ Marca como vista no localStorage

### **Visitas Subsequentes:**
1. ✅ Verifica se há promoção ativa
2. ✅ Verifica se deve mostrar (frequência)
3. ✅ Se não pode mostrar pop-up → mostra banner
4. ✅ Se pode mostrar pop-up → mostra pop-up

### **Múltiplas Promoções:**
1. ✅ Filtra promoções ativas
2. ✅ Ordena por prioridade (maior primeiro)
3. ✅ Mostra a de maior prioridade
4. ✅ Outras ficam em espera

---

**🎯 Agora você tem um sistema completo e inteligente de promoções! Basta editar o arquivo `promotions.ts` e ativar as promoções desejadas!** 