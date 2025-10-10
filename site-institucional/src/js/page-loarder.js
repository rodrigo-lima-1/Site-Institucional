// page-loader.js - Sistema de carregamento de páginas
// Adicione este arquivo no HTML principal antes dos scripts das páginas

// Garantir que ValidationUtils existe
if (!window.ValidationUtils) {
  window.ValidationUtils = {
    isValidEmail: function(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isValidPhone: function(phone) {
      const phoneRegex = /^[\d\s\-\(\)]+$/;
      return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }
  };
}

// Garantir que cardComponent existe
if (!window.cardComponent) {
  window.cardComponent = {
    renderCardGrid: function(items, type, columns = 3) {
      if (!items || items.length === 0) {
        return '<p class="no-items">Nenhum item encontrado.</p>';
      }
      
      const gridClass = `grid grid-${columns}`;
      return `<div class="${gridClass}">${items.map(item => this.renderCard(item, type)).join('')}</div>`;
    },
    
    renderCard: function(item, type) {
      if (type === 'event') {
        return this.renderEventCard(item);
      } else if (type === 'project') {
        return this.renderProjectCard(item);
      }
      return '';
    },
    
    renderEventCard: function(event) {
      const typeLabels = {
        workshop: 'Workshop',
        palestra: 'Palestra',
        hackathon: 'Hackathon',
        feira: 'Feira'
      };
      
      return `
        <div class="card event-card fade-in">
          <div class="event-type-badge">${typeLabels[event.type] || event.type}</div>
          <div class="event-date-badge">${event.date}</div>
          <img src="${event.image}" alt="${event.title}" class="card-image" loading="lazy">
          <div class="card-content">
            <h3 class="card-title">${event.title}</h3>
            <div class="card-meta">
              <span>🕒 ${event.time}</span>
              <span>📍 ${event.location}</span>
              <span class="event-status ${event.status}">
                ${event.status === 'upcoming' ? '📅 Próximo' : '✅ Realizado'}
              </span>
            </div>
            <p class="card-description">${event.description}</p>
            <div class="card-actions">
              ${event.status === 'upcoming' ? 
                `<button class="btn btn-primary" onclick="registerForEvent('${event.id}')">
                  Inscrever-se
                </button>` :
                `<button class="btn btn-outline" onclick="viewEventGallery('${event.id}')">
                  Ver Galeria
                </button>`
              }
            </div>
          </div>
        </div>
      `;
    },
    
    renderProjectCard: function(project) {
      const tagsHtml = project.tags ? 
        `<div class="card-tags">
          ${project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>` : '';

      const statusClass = project.status === 'active' ? 'active' : 'completed';
      const statusText = project.status === 'active' ? '🔄 Em Andamento' : '✅ Concluído';

      return `
        <div class="card fade-in">
          <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy">
          <div class="card-content">
            <h3 class="card-title">${project.title}</h3>
            <div class="card-meta">
              <span class="project-status ${statusClass}">${statusText}</span>
              <span>👥 ${project.participants} participantes</span>
              <span>⏱️ ${project.duration}</span>
            </div>
            <p class="card-description">${project.description}</p>
            ${tagsHtml}
            <div class="card-actions">
              <button class="btn btn-primary" onclick="viewProjectDetails('${project.id}')">
                Ver Detalhes
              </button>
              ${project.status === 'active' ? 
                `<button class="btn btn-outline" onclick="joinProject('${project.id}')">
                  Participar
                </button>` : ''
              }
            </div>
          </div>
        </div>
      `;
    }
  };
}

// Sistema de carregamento de páginas
class PageLoader {
  constructor() {
    this.currentPage = null;
    this.pageScripts = new Map();
    this.isInitialized = false;
  }
  
  init() {
    if (this.isInitialized) return;
    
    // Aguardar DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
    } else {
      this.onDOMReady();
    }
    
    this.isInitialized = true;
  }
  
  onDOMReady() {
    console.log('PageLoader: DOM pronto');
    
    // Detectar página atual
    this.detectCurrentPage();
    
    // Inicializar página
    this.initializePage();
    
    // Observer para detectar mudanças de página
    this.setupPageObserver();
  }
  
  detectCurrentPage() {
    // Verificar qual página está visível
    const pages = ['eventos-page', 'projetos-page', 'home-page', 'sobre-page', 'contatos-page'];
    
    for (const pageId of pages) {
      const pageElement = document.getElementById(pageId);
      if (pageElement && pageElement.style.display !== 'none') {
        this.currentPage = pageId;
        console.log('PageLoader: Página detectada:', pageId);
        break;
      }
    }
    
    // Fallback: detectar por URL ou classe
    if (!this.currentPage) {
      const bodyClasses = document.body.className;
      if (bodyClasses.includes('eventos')) this.currentPage = 'eventos-page';
      else if (bodyClasses.includes('projetos')) this.currentPage = 'projetos-page';
    }
  }
  
  initializePage() {
    console.log('PageLoader: Inicializando página:', this.currentPage);
    
    // Pequeno delay para garantir que todos os scripts foram carregados
    setTimeout(() => {
      if (this.currentPage === 'eventos-page') {
        this.initEventosPage();
      } else if (this.currentPage === 'projetos-page') {
        this.initProjetosPage();
      }
    }, 100);
  }
  
  initEventosPage() {
    console.log('PageLoader: Inicializando Eventos');
    
    // Verificar se funções necessárias existem
    if (typeof loadAllEvents === 'function') {
      loadAllEvents();
    } else {
      console.warn('PageLoader: loadAllEvents não encontrada, tentando novamente...');
      setTimeout(() => {
        if (typeof loadAllEvents === 'function') {
          loadAllEvents();
        }
      }, 500);
    }
    
    if (typeof setupNewsletterForm === 'function') {
      setupNewsletterForm();
    }
    
    if (typeof observeElements === 'function') {
      observeElements();
    }
  }
  
  initProjetosPage() {
    console.log('PageLoader: Inicializando Projetos');
    
    // Verificar se funções necessárias existem
    if (typeof loadAllProjects === 'function') {
      loadAllProjects();
    } else {
      console.warn('PageLoader: loadAllProjects não encontrada, tentando novamente...');
      setTimeout(() => {
        if (typeof loadAllProjects === 'function') {
          loadAllProjects();
        }
      }, 500);
    }
    
    if (typeof loadTestimonials === 'function') {
      loadTestimonials();
    }
    
    if (typeof observeElements === 'function') {
      observeElements();
    }
  }
  
  setupPageObserver() {
    // Observer para detectar quando a página muda
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target;
          if (target.id && target.id.includes('-page')) {
            const isVisible = window.getComputedStyle(target).display !== 'none';
            if (isVisible && this.currentPage !== target.id) {
              console.log('PageLoader: Mudança de página detectada:', target.id);
              this.currentPage = target.id;
              this.initializePage();
            }
          }
        }
      });
    });
    
    // Observar todas as páginas
    const pages = document.querySelectorAll('[id$="-page"]');
    pages.forEach(page => {
      observer.observe(page, { attributes: true, attributeFilter: ['style'] });
    });
  }
  
  // Método para forçar reinicialização de uma página
  reinitPage(pageId) {
    console.log('PageLoader: Forçando reinicialização de:', pageId);
    this.currentPage = pageId;
    this.initializePage();
  }
}

// Criar instância global
window.pageLoader = new PageLoader();

// Inicializar automaticamente
window.pageLoader.init();

// Exportar para uso em outros scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PageLoader;
}