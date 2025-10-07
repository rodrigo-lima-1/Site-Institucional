/**
 * NAVBAR COMPONENT
 * Componente reutilizável para navegação
 * Gerencia estados ativos e navegação entre páginas
 */

class Navbar {
  constructor() {
    this.currentPage = 'home';
    this.init();
  }

  init() {
    // A navbar é renderizada como parte do Header
    // Este componente gerencia apenas a lógica de navegação
    this.bindEvents();
  }

  bindEvents() {
    // Escuta mudanças de página para atualizar links ativos
    document.addEventListener('pageChanged', (event) => {
      this.updateActiveLinks(event.detail.page);
    });
  }

  updateActiveLinks(page) {
    this.currentPage = page;
    
    // Remove classe active de todos os links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Adiciona classe active aos links da página atual
    document.querySelectorAll(`[data-page="${page}"]`).forEach(link => {
      link.classList.add('active');
    });
  }

  // Método para obter a página atual
  getCurrentPage() {
    return this.currentPage;
  }

  // Método para navegar programaticamente
  navigateTo(page) {
    if (typeof window.navigateTo === 'function') {
      window.navigateTo(page);
    }
  }

  // Método para verificar se uma página está ativa
  isPageActive(page) {
    return this.currentPage === page;
  }

  // Método para obter todos os links de navegação
  getNavigationItems() {
    return [
      { page: 'home', label: 'Início' },
      { page: 'quem-somos', label: 'Quem Somos' },
      { page: 'eventos', label: 'Eventos' },
      { page: 'projetos', label: 'Projetos' },
      { page: 'associados', label: 'Associados' },
      { page: 'contatos', label: 'Contatos' },
      { page: 'jornal-digital', label: 'Jornal Digital' }
    ];
  }

  // Método para renderizar breadcrumbs (se necessário)
  renderBreadcrumbs(currentPage) {
    const pageNames = {
      'home': 'Início',
      'quem-somos': 'Quem Somos',
      'eventos': 'Eventos',
      'projetos': 'Projetos',
      'associados': 'Associados',
      'contatos': 'Contatos',
      'jornal-digital': 'Jornal Digital'
    };

    return `
      <nav class="breadcrumbs">
        <a href="#" onclick="navigateTo('home')">Início</a>
        ${currentPage !== 'home' ? `<span> / </span><span>${pageNames[currentPage]}</span>` : ''}
      </nav>
    `;
  }
}

// Inicializar o componente quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  window.navbarComponent = new Navbar();
});

