# 📊 Configuração de Analytics - Guia Completo

## 🎯 Como Configurar Analytics no Seu Site

### 📁 Arquivo Principal:
- `src/app/layout.tsx` - Configuração dos scripts de analytics

---

## 🔧 Configuração do Google Analytics 4

### 1. **Criar Conta no Google Analytics:**
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Clique em "Começar a medir"
3. Configure sua conta e propriedade
4. Anote o **ID de medição** (G-XXXXXXXXXX)

### 2. **Substituir no Código:**
```typescript
// Em src/app/layout.tsx, linha 45
src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"

// Linha 52
gtag('config', 'G-XXXXXXXXXX', {
```

### 3. **Eventos Personalizados para Promoções:**
```typescript
// Adicione no PromotionPopup.tsx
const handlePromotionClick = () => {
  // Google Analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'promotion_click', {
      promotion_id: promotion.id,
      promotion_title: promotion.title,
      promotion_type: promotion.discount ? 'discount' : 'free_offer'
    });
  }
  
  // Facebook Pixel
  if (typeof fbq !== 'undefined') {
    fbq('track', 'Lead', {
      content_name: promotion.title,
      content_category: 'promotion'
    });
  }
};
```

---

## 📱 Configuração do Google Tag Manager

### 1. **Criar Conta no GTM:**
1. Acesse [tagmanager.google.com](https://tagmanager.google.com)
2. Crie uma nova conta
3. Anote o **Container ID** (GTM-XXXXXXX)

### 2. **Substituir no Código:**
```typescript
// Em src/app/layout.tsx, linha 60
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');

// Linha 75
src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
```

---

## 📘 Configuração do Facebook Pixel

### 1. **Criar Pixel no Facebook:**
1. Acesse [business.facebook.com](https://business.facebook.com)
2. Vá em "Pixels" > "Criar pixel"
3. Anote o **Pixel ID** (XXXXXXXXXX)

### 2. **Substituir no Código:**
```typescript
// Em src/app/layout.tsx, linha 85
fbq('init', 'XXXXXXXXXX'); // Replace with your Pixel ID

// Linha 95
src="https://www.facebook.com/tr?id=XXXXXXXXXX&ev=PageView&noscript=1"
```

### 3. **Eventos de Conversão:**
```typescript
// Quando alguém clica na promoção
fbq('track', 'Lead', {
  content_name: 'Free Landing Page Offer',
  content_category: 'promotion',
  value: 0,
  currency: 'USD'
});

// Quando alguém inicia conversa no WhatsApp
fbq('track', 'InitiateCheckout', {
  content_name: 'WhatsApp Contact',
  content_category: 'contact'
});
```

---

## 🔥 Configuração do Hotjar

### 1. **Criar Conta no Hotjar:**
1. Acesse [hotjar.com](https://hotjar.com)
2. Crie uma conta gratuita
3. Anote o **Site ID** (XXXXXXX)

### 2. **Substituir no Código:**
```typescript
// Em src/app/layout.tsx, linha 105
h._hjSettings={hjid:XXXXXXX,hjsv:6}; // Replace with your Hotjar ID
```

---

## 📈 Eventos Recomendados para Rastrear

### **Promoções:**
```typescript
// Pop-up apareceu
gtag('event', 'promotion_view', {
  promotion_id: 'free-landing-pages',
  promotion_type: 'free_offer'
});

// Pop-up fechado
gtag('event', 'promotion_dismiss', {
  promotion_id: 'free-landing-pages'
});

// Botão clicado
gtag('event', 'promotion_click', {
  promotion_id: 'free-landing-pages',
  button_text: 'Claim My Free Landing Page'
});
```

### **Navegação:**
```typescript
// Scroll em seções importantes
gtag('event', 'scroll', {
  section: 'portfolio',
  scroll_depth: '50%'
});

// Clique em links importantes
gtag('event', 'click', {
  link_text: 'Start Project',
  link_location: 'navigation'
});
```

### **Conversões:**
```typescript
// WhatsApp aberto
gtag('event', 'conversion', {
  send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
  value: 1.0,
  currency: 'USD'
});

// Formulário preenchido
gtag('event', 'generate_lead', {
  currency: 'USD',
  value: 100.0
});
```

---

## 🎯 Configuração de Conversões

### **Google Ads:**
1. No Google Ads, vá em "Ferramentas" > "Conversões"
2. Crie uma nova conversão
3. Use o código gerado no seu site

### **Facebook Ads:**
1. No Facebook Ads Manager, vá em "Eventos"
2. Configure eventos personalizados
3. Use o Pixel para rastrear conversões

---

## 📊 Dashboard Recomendado

### **Métricas Importantes:**
- **Visitas únicas** por dia/semana
- **Taxa de conversão** das promoções
- **Tempo na página** por seção
- **Origem do tráfego** (Google, Facebook, etc.)
- **Dispositivos** mais usados
- **Comportamento** dos usuários (Hotjar)

### **Relatórios Automáticos:**
- **Relatório semanal** de conversões
- **Alertas** quando conversões caem
- **Análise** de performance das promoções

---

## 🔒 Privacidade e LGPD

### **Cookie Banner:**
```typescript
// Adicione um banner de cookies
const [showCookieBanner, setShowCookieBanner] = useState(true);

// Só carrega analytics após aceitar
const acceptCookies = () => {
  setShowCookieBanner(false);
  localStorage.setItem('cookiesAccepted', 'true');
  // Carrega analytics aqui
};
```

### **Política de Privacidade:**
- Crie uma página de política de privacidade
- Explique quais dados são coletados
- Como os dados são usados
- Como o usuário pode solicitar exclusão

---

## 🚀 Implementação Rápida

### **1. Google Analytics (Obrigatório):**
```typescript
// Substitua G-XXXXXXXXXX pelo seu ID
gtag('config', 'G-XXXXXXXXXX');
```

### **2. Facebook Pixel (Recomendado):**
```typescript
// Substitua XXXXXXXXXX pelo seu Pixel ID
fbq('init', 'XXXXXXXXXX');
```

### **3. Hotjar (Opcional):**
```typescript
// Substitua XXXXXXX pelo seu Site ID
h._hjSettings={hjid:XXXXXXX,hjsv:6};
```

---

## 📞 Suporte

### **Problemas Comuns:**
1. **Analytics não aparece:** Verifique se o ID está correto
2. **Eventos não registram:** Verifique se o script carregou
3. **Conversões não contam:** Verifique se o código está no lugar certo

### **Ferramentas de Debug:**
- **Google Analytics Debugger** (Chrome extension)
- **Facebook Pixel Helper** (Chrome extension)
- **Hotjar Recordings** (ver comportamento dos usuários)

---

**🎯 Com essa configuração, você terá insights completos sobre o comportamento dos usuários e performance das suas promoções!** 