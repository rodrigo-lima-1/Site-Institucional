/**
 * HEADER COMPONENT
 * Componente reutilizável para o cabeçalho do site
 * Inclui logo, navegação e menu mobile
 */

class Header {
  constructor() {
    this.init();
    this.bindEvents();
  }

  init() {
    const headerElement = document.getElementById('header');
    if (!headerElement) return;

    headerElement.innerHTML = this.render();
    this.setupScrollEffect();
  }

  render() {
    return `
      <header class="header">
        <div class="container">
          <div class="header-content">
            <!-- Logo -->
            <a href="#" class="logo" onclick="navigateTo('home')">
              <img src="public/icons/logo conexao.png" alt="Logo Conexão" width="338" height="69"/>
            </a>

            <!-- Desktop Navigation -->
            <nav class="navbar">
              <ul class="nav-menu">
                <li class="nav-item">
                  <a href="#" class="btn btn-primary nav-link active" data-page="home" onclick="navigateTo('home')">
                    Início
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="btn btn-primary nav-link" data-page="quem-somos" onclick="navigateTo('quem-somos')">
                    Quem Somos
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="btn btn-primary nav-link" data-page="eventos" onclick="navigateTo('eventos')">
                    Eventos
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="btn btn-primary nav-link" data-page="projetos" onclick="navigateTo('projetos')">
                    Projetos
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="btn btn-primary nav-link" data-page="associados" onclick="navigateTo('associados')">
                    Associados
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="btn btn-primary nav-link" data-page="contatos" onclick="navigateTo('contatos')">
                    Contatos
                  </a>
                </li>
              </ul>
            </nav>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div class="mobile-menu" id="mobile-menu">
            <ul class="mobile-nav-menu">
              <li class="mobile-nav-item">
                <a href="#" class="mobile-nav-link active" data-page="home" onclick="navigateTo('home'); closeMobileMenu();">
                  Início
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#" class="mobile-nav-link" data-page="quem-somos" onclick="navigateTo('quem-somos'); closeMobileMenu();">
                  Quem Somos
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#" class="mobile-nav-link" data-page="eventos" onclick="navigateTo('eventos'); closeMobileMenu();">
                  Eventos
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#" class="mobile-nav-link" data-page="projetos" onclick="navigateTo('projetos'); closeMobileMenu();">
                  Projetos
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#" class="mobile-nav-link" data-page="associados" onclick="navigateTo('associados'); closeMobileMenu();">
                  Associados
                </a>
              </li>
              <li class="mobile-nav-item">
                <a href="#" class="mobile-nav-link" data-page="contatos" onclick="navigateTo('contatos'); closeMobileMenu();">
                  Contatos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    `;
  }

  setupScrollEffect() {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  bindEvents() {
    // Eventos já são tratados via onclick nos elementos
    // Aqui podemos adicionar eventos adicionais se necessário
  }

  // Método para atualizar o link ativo
  updateActiveLink(currentPage) {
    // Remove active de todos os links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.classList.remove('active');
    });

    // Adiciona active ao link atual
    document.querySelectorAll(`[data-page="${currentPage}"]`).forEach(link => {
      link.classList.add('active');
    });
  }
}

// Funções globais para navegação e menu mobile
window.toggleMobileMenu = function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  mobileMenu.classList.toggle('active');
  toggle.classList.toggle('active');
};

window.closeMobileMenu = function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const toggle = document.querySelector('.mobile-menu-toggle');
  
  mobileMenu.classList.remove('active');
  toggle.classList.remove('active');
};

// Inicializar o componente quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  window.headerComponent = new Header();
});

