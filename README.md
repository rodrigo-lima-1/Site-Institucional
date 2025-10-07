# Conexão Metropolitana - Site Institucional

## 📋 Descrição do Projeto

Este é um site institucional completo desenvolvido para o Conexão Metropolitana, uma organização fictícia dedicada à democratização do acesso à educação tecnológica.

## 🎯 Características Principais

### ✅ Estrutura Modular
- Componentes reutilizáveis (Header, Footer, Navbar, Card)
- Páginas organizadas em arquivos separados
- CSS modularizado por funcionalidade
- JavaScript organizado em utilitários e funcionalidades específicas

### ✅ Design Responsivo
- Layout totalmente adaptável (desktop, tablet, mobile)
- Breakpoints otimizados para diferentes dispositivos
- Tipografia escalável e legível
- Imagens responsivas com lazy loading

### ✅ Funcionalidades Avançadas
- Sistema de navegação SPA (Single Page Application)
- Animações suaves e transições
- Formulários funcionais com validação
- Otimização de performance

### ✅ Acessibilidade
- Estrutura semântica HTML5
- Suporte a leitores de tela
- Navegação por teclado
- Contraste adequado de cores

## 📁 Estrutura de Arquivos

```
site-institucional/
├── index.html                 # Ponto de entrada principal
├── index_simple.html         # Versão simplificada para testes
├── README.md                 # Documentação do projeto
├── public/                   # Recursos públicos
│   ├── icons/               # Ícones e favicon
│   │   └── favicon.svg
│   └── images/              # Imagens do site
│       ├── hero/            # Imagens da seção hero
│       ├── eventos/         # Imagens de eventos
│       ├── projetos/        # Imagens de projetos
│       └── associados/      # Imagens de associados
├── src/                     # Código fonte
│   ├── components/          # Componentes reutilizáveis
│   │   ├── header.js        # Componente do cabeçalho
│   │   ├── footer.js        # Componente do rodapé
│   │   ├── navbar.js        # Componente de navegação
│   │   └── card.js          # Componente de cards
│   ├── pages/               # Páginas do site
│   │   ├── home.html        # Página inicial
│   │   ├── quem-somos.html  # Página sobre a instituição
│   │   ├── eventos.html     # Página de eventos
│   │   ├── projetos.html    # Página de projetos
│   │   ├── associados.html  # Página de associados
│   │   └── contatos.html    # Página de contatos
│   ├── styles/              # Estilos CSS
│   │   ├── main.css         # Estilos principais e variáveis
│   │   ├── components.css   # Estilos dos componentes
│   │   └── responsive.css   # Media queries e responsividade
│   ├── data/                # Dados e conteúdo
│   │   ├── home_content.js  # Conteúdo da página inicial
│   │   ├── quem_somos_content.js
│   │   ├── eventos_content.js
│   │   ├── projetos_content.js
│   │   └── associados_content.js
│   └── utils/               # Utilitários JavaScript
│       └── helpers.js       # Funções auxiliares
└── assets/                  # Recursos adicionais
    └── js/                  # JavaScript principal
        └── main.js          # Lógica principal da aplicação
```

## 🎨 Paleta de Cores

O site utiliza uma paleta de cores moderna e profissional:

- **Primária**: #2563eb (Azul)
- **Secundária**: #10b981 (Verde)
- **Accent**: #f59e0b (Amarelo)
- **Cinza Escuro**: #1f2937
- **Cinza Médio**: #374151
- **Cinza Claro**: #f9fafb
- **Branco**: #ffffff

## 📱 Páginas Incluídas

### 1. **Página Inicial (Home)**
- Seção hero com call-to-action
- Apresentação da instituição
- Estatísticas de impacto
- Eventos e projetos em destaque
- Call-to-action para engajamento

### 2. **Quem Somos**
- História da instituição
- Missão, visão e valores
- Equipe e liderança
- Conquistas e reconhecimentos

### 3. **Eventos**
- Lista de eventos futuros e passados
- Sistema de filtros por categoria
- Formulário de inscrição em newsletter
- Detalhes completos de cada evento

### 4. **Projetos**
- Projetos ativos e concluídos
- Filtros por status e categoria
- Métricas de impacto
- Depoimentos de beneficiários
- Formas de participação

### 5. **Associados**
- Parceiros institucionais
- Empresas apoiadoras
- Voluntários da organização
- Depoimentos de parceiros
- Benefícios de ser parceiro
- Formas de parceria

### 6. **Contatos**
- Formulário de contato funcional
- Informações de localização
- Mapa e instruções de transporte
- FAQ (Perguntas Frequentes)
- Links para redes sociais

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada com Flexbox e Grid
- **JavaScript ES6+**: Funcionalidades interativas
- **Google Fonts**: Tipografia (Inter e Poppins)
- **SVG**: Ícones e favicon
- **Responsive Design**: Mobile-first approach

## 🚀 Como Executar o Projeto

### Opção 1: Servidor Local Simples
```bash
# Navegue até a pasta do projeto
cd site-institucional

# Inicie um servidor HTTP simples
python3 -m http.server 8000

# Acesse no navegador
http://localhost:8000
```

### Opção 2: Servidor Node.js
```bash
# Instale um servidor estático global
npm install -g http-server

# Execute na pasta do projeto
http-server -p 8000

# Acesse no navegador
http://localhost:8000
```

### Opção 3: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com o botão direito no arquivo `index.html`
3. Selecione "Open with Live Server"

## 📋 Funcionalidades Implementadas

### ✅ Navegação
- [x] Menu responsivo com hamburger mobile
- [x] Navegação SPA (Single Page Application)
- [x] Links ativos destacados
- [x] Scroll suave entre seções
- [x] Botão "voltar ao topo"

### ✅ Interatividade
- [x] Formulários com validação
- [x] Filtros dinâmicos (eventos/projetos)
- [x] Modais e pop-ups informativos
- [x] Animações de entrada
- [x] Hover effects e transições

### ✅ Performance
- [x] Lazy loading de imagens
- [x] CSS e JS otimizados
- [x] Compressão de imagens
- [x] Carregamento assíncrono

### ✅ SEO e Acessibilidade
- [x] Meta tags otimizadas
- [x] Estrutura semântica
- [x] Alt text em imagens
- [x] Navegação por teclado
- [x] Contraste adequado

## 🎯 Pontos de Customização

### 📝 Conteúdo
Para personalizar o conteúdo do site, edite os arquivos em `src/data/`:
- Textos e descrições
- Informações de contato
- Dados de eventos e projetos
- Informações da equipe

### 🎨 Visual
Para personalizar o visual, edite `src/styles/main.css`:
- Variáveis de cores (seção `:root`)
- Tipografia e tamanhos de fonte
- Espaçamentos e margens
- Efeitos e animações

### 🖼️ Imagens
Substitua as imagens em `public/images/`:
- Mantenha as mesmas dimensões para melhor resultado
- Use formatos otimizados (WebP, PNG, JPG)
- Nomeie os arquivos de forma descritiva

### ⚙️ Funcionalidades
Para adicionar novas funcionalidades:
1. Crie novos componentes em `src/components/`
2. Adicione estilos em `src/styles/components.css`
3. Implemente a lógica em `assets/js/main.js`

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e inclui breakpoints para:

- **Mobile**: até 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Desktop Grande**: 1200px+

### Características Responsivas:
- Grid flexível que se adapta ao tamanho da tela
- Imagens responsivas com srcset
- Menu mobile com hamburger
- Tipografia escalável
- Botões e formulários otimizados para touch

## 🔧 Manutenção e Atualizações

### Adicionando Novos Eventos
1. Edite `src/data/eventos_content.js`
2. Adicione as imagens em `public/images/eventos/`
3. O sistema carregará automaticamente

### Adicionando Novos Projetos
1. Edite `src/data/projetos_content.js`
2. Adicione as imagens em `public/images/projetos/`
3. Configure tags e status apropriados

### Atualizando Informações de Contato
1. Edite o componente footer em `src/components/footer.js`
2. Atualize a página de contatos em `src/pages/contatos.html`
3. Verifique links e informações de localização

## 🚀 Próximos Passos (Sugestões)

### Funcionalidades Avançadas
- [ ] Sistema de blog/notícias
- [ ] Área administrativa (CMS)
- [ ] Integração com redes sociais
- [ ] Sistema de newsletter
- [ ] Chat online
- [ ] Múltiplos idiomas

### Integrações
- [ ] Google Analytics
- [ ] Google Maps API
- [ ] Sistema de pagamentos
- [ ] CRM integration
- [ ] Email marketing
- [ ] Sistema de inscrições online

### Performance
- [ ] Service Worker para cache offline
- [ ] Compressão Gzip
- [ ] CDN para imagens
- [ ] Otimização de Core Web Vitals

## 📞 Suporte

Para dúvidas sobre implementação ou customização:

1. Consulte a documentação inline no código
2. Verifique os comentários nos arquivos CSS e JS
3. Teste sempre em diferentes dispositivos
4. Valide o HTML e CSS antes de publicar

## 📄 Licença

Este projeto foi desenvolvido como exemplo educacional. Sinta-se livre para usar, modificar e distribuir conforme necessário.

---

**Desenvolvido com ❤️ para transformar vidas através da tecnologia.**

