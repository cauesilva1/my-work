# Landing Page Developer - Portfolio

Uma landing page moderna e profissional para desenvolvedores de landing pages, construída com Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Características

### 🎨 Design Moderno
- **Gradientes e Efeitos Visuais**: Design com gradientes modernos e efeitos de glass morphism
- **Animações Suaves**: Animações fluidas com Framer Motion
- **Responsivo**: Totalmente adaptável para todos os dispositivos
- **Tipografia Profissional**: Hierarquia visual bem definida

### 🚀 Performance
- **Next.js 15**: Framework mais recente com App Router
- **TypeScript**: Tipagem estática para melhor desenvolvimento
- **Tailwind CSS 4**: CSS utility-first com configuração otimizada
- **Lazy Loading**: Carregamento otimizado de imagens
- **SEO Otimizado**: Meta tags e estrutura semântica

### 🛠️ Funcionalidades
- **Navegação Fixa**: Menu de navegação com scroll transparente
- **Seções Modulares**: Componentes reutilizáveis e organizados
- **FAQ Interativo**: Accordion com animações
- **Formulário de Contato**: Integração com WhatsApp
- **Portfólio Dinâmico**: Showcase de projetos com hover effects

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e animações
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── Navigation.tsx       # Navegação fixa
│   ├── HeroSection.tsx      # Seção hero
│   ├── ShowcaseSection.tsx  # Portfólio
│   ├── BenefitsSection.tsx  # Benefícios
│   ├── FAQSection.tsx       # FAQ interativo
│   ├── Footer.tsx           # Rodapé
│   └── LoadingSpinner.tsx   # Componente de loading
├── data/
│   └── content.ts           # Dados centralizados
├── hooks/
│   └── useScrollAnimation.ts # Hooks personalizados
├── types/
│   └── index.ts             # Tipos TypeScript
└── utils/
    └── constants.ts         # Constantes da aplicação
```

## 🚀 Como Usar

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seuusuario/my-landing.git

# Entre no diretório
cd my-landing

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

### Configuração

1. **Edite os dados pessoais** em `src/data/content.ts`:
   ```typescript
   export const contactInfo: ContactInfo = {
     whatsapp: '5511999999999', // Seu WhatsApp
     email: 'seu@email.com',    // Seu email
     name: 'Seu Nome'           // Seu nome
   };
   ```

2. **Personalize as cores** em `src/app/globals.css`:
   ```css
   :root {
     --primary-color: #3b82f6;
     --secondary-color: #8b5cf6;
   }
   ```

3. **Adicione suas imagens** na pasta `public/`

## 🎯 Melhorias Implementadas

### Código
- ✅ **Componentização**: Separação em componentes reutilizáveis
- ✅ **TypeScript**: Tipagem completa e interfaces
- ✅ **Hooks Personalizados**: Reutilização de lógica
- ✅ **Constantes Centralizadas**: Configurações organizadas
- ✅ **Acessibilidade**: ARIA labels e navegação por teclado

### Design
- ✅ **Gradientes Modernos**: Paleta de cores profissional
- ✅ **Animações Avançadas**: Efeitos de entrada e hover
- ✅ **Responsividade Aprimorada**: Mobile-first design
- ✅ **Micro-interações**: Feedback visual em interações
- ✅ **Loading States**: Estados de carregamento elegantes

### Performance
- ✅ **Lazy Loading**: Carregamento otimizado
- ✅ **CSS Otimizado**: Classes utilitárias eficientes
- ✅ **Bundle Size**: Código modular e leve
- ✅ **SEO**: Meta tags e estrutura semântica

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS
- **Framer Motion** - Animações
- **React 19** - Biblioteca UI

## 📱 Responsividade

- 📱 Mobile: 320px - 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: 1024px+

## 🎨 Paleta de Cores

- **Primária**: Azul (#3b82f6)
- **Secundária**: Roxo (#8b5cf6)
- **Neutra**: Cinza (#6b7280)
- **Background**: Branco (#ffffff)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as [diretrizes de contribuição](CONTRIBUTING.md) antes de submeter um pull request.

---

**Desenvolvido com ❤️ usando Next.js e Tailwind CSS**
