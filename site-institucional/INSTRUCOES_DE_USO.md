# 🚀 Instruções de Uso - Site Conexão Metropolitana

## ⚡ Início Rápido

### 1. **Executar o Site Localmente**
```bash
# Opção 1: Python (mais simples)
cd site-institucional
python3 -m http.server 8000

# Opção 2: Node.js
npx http-server -p 8000

# Acesse: http://localhost:8000
```

### 2. **Arquivos Principais**
- `index.html` - Página principal com navegação SPA
- `index_simple.html` - Versão simplificada (recomendada para testes)
- `README.md` - Documentação completa

## 🎯 Onde Personalizar

### 📝 **Textos e Conteúdo**
```
src/data/
├── home_content.js      # Textos da página inicial
├── eventos_content.js   # Lista de eventos
├── projetos_content.js  # Lista de projetos
└── associados_content.js # Parceiros e voluntários
```

### 🎨 **Cores e Visual**
```
src/styles/main.css
# Edite a seção :root para mudar cores:
--primary-color: #2563eb;    # Cor principal
--secondary-color: #10b981;  # Cor secundária
--accent-color: #f59e0b;     # Cor de destaque
```

### 🖼️ **Imagens**
```
public/images/
├── hero/        # Imagem principal
├── eventos/     # Imagens de eventos
├── projetos/    # Imagens de projetos
└── associados/  # Logos e fotos de pessoas
```

### 📞 **Informações de Contato**
- Edite `src/components/footer.js`
- Edite `src/pages/contatos.html`

## 🔧 Customizações Rápidas

### **Mudar Nome da Instituição**
1. Procure por "Conexão Metropolitana" nos arquivos
2. Substitua pelo nome desejado
3. Atualize o logo em `src/components/header.js`

### **Adicionar Nova Página**
1. Crie arquivo em `src/pages/nova-pagina.html`
2. Adicione link no menu em `src/components/header.js`
3. Adicione rota em `assets/js/main.js`

### **Mudar Paleta de Cores**
Edite as variáveis CSS em `src/styles/main.css`:
```css
:root {
  --primary-color: #sua-cor-aqui;
  --secondary-color: #sua-cor-aqui;
  --accent-color: #sua-cor-aqui;
}
```

## 📱 Responsividade

O site se adapta automaticamente a:
- 📱 **Mobile**: até 768px
- 📱 **Tablet**: 768px - 1024px  
- 💻 **Desktop**: 1024px+

## ✅ Checklist de Personalização

- [ ] Alterar nome da instituição
- [ ] Substituir logo e favicon
- [ ] Atualizar informações de contato
- [ ] Personalizar cores da marca
- [ ] Adicionar conteúdo real (textos)
- [ ] Substituir imagens por fotos reais
- [ ] Configurar formulário de contato
- [ ] Testar em diferentes dispositivos
- [ ] Validar links e funcionalidades

## 🆘 Problemas Comuns

### **Site não carrega**
- Verifique se o servidor está rodando
- Teste com `index_simple.html` primeiro

### **Imagens não aparecem**
- Verifique os caminhos em `public/images/`
- Certifique-se que os arquivos existem

### **Cores não mudam**
- Limpe o cache do navegador (Ctrl+F5)
- Verifique se editou o arquivo CSS correto

### **Menu mobile não funciona**
- Teste com `index_simple.html`
- Verifique se o JavaScript está carregando

## 📞 Suporte

Para dúvidas técnicas:
1. Consulte o `README.md` completo
2. Verifique os comentários no código
3. Teste sempre em diferentes navegadores

---

**💡 Dica**: Comece sempre testando com `index_simple.html` para verificar se o visual está correto, depois migre para `index.html` para funcionalidades avançadas.

