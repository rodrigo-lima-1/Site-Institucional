/**
 * CARD COMPONENT
 * Componente reutilizável para exibir cards de eventos, projetos e associados
 * Suporta diferentes tipos e layouts
 */

class Card {
  constructor() {
    this.init();
  }

  init() {
    // Este componente é usado para renderizar cards dinamicamente
    // Não precisa de inicialização específica
  }

  /**
   * Renderiza um card de evento
   * @param {Object} event - Dados do evento
   * @returns {string} HTML do card
   */
  renderEventCard(event) {
    return `
      <div class="card fade-in">
        <img src="${event.image}" alt="${event.title}" class="card-image" loading="lazy">
        <div class="card-content">
          <h3 class="card-title">${event.title}</h3>
          <div class="card-meta">
            <span>📅 ${event.date}</span>
            ${event.time ? `<span>🕒 ${event.time}</span>` : ''}
            ${event.location ? `<span>📍 ${event.location}</span>` : ''}
          </div>
          <p class="card-description">${event.description}</p>
          <div class="card-actions">
            <button class="btn btn-primary" onclick="showEventDetails('${event.id}')">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Renderiza um card de projeto
   * @param {Object} project - Dados do projeto
   * @returns {string} HTML do card
   */
  renderProjectCard(project) {
    const tagsHtml = project.tags ? 
      `<div class="card-tags">
        ${project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
      </div>` : '';

    const statusClass = project.status === 'Em Andamento' ? 'status-active' : 'status-completed';

    return `
      <div class="card fade-in">
        <img src="${project.image}" alt="${project.title}" class="card-image" loading="lazy">
        <div class="card-content">
          <h3 class="card-title">${project.title}</h3>
          <div class="card-meta">
            <span class="project-status ${statusClass}">
              ${project.status === 'Em Andamento' ? '🔄' : '✅'} ${project.status}
            </span>
          </div>
          <p class="card-description">${project.description}</p>
          ${tagsHtml}
          <div class="card-actions">
            <button class="btn btn-secondary" onclick="showProjectDetails('${project.id}')">
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Renderiza um card de associado/parceiro
   * @param {Object} partner - Dados do parceiro
   * @returns {string} HTML do card
   */
  renderPartnerCard(partner) {
    return `
      <div class="card fade-in">
        <div class="partner-logo-container">
          <img src="${partner.logo}" alt="${partner.name}" class="partner-logo" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">${partner.name}</h3>
          <p class="card-description">${partner.description}</p>
          <div class="card-actions">
            <button class="btn btn-outline" onclick="showPartnerDetails('${partner.id}')">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Renderiza um card de voluntário
   * @param {Object} volunteer - Dados do voluntário
   * @returns {string} HTML do card
   */
  renderVolunteerCard(volunteer) {
    return `
      <div class="card fade-in">
        <div class="volunteer-photo-container">
          <img src="${volunteer.photo}" alt="${volunteer.name}" class="volunteer-photo" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">${volunteer.name}</h3>
          <p class="volunteer-role">${volunteer.role}</p>
          <p class="card-description">${volunteer.description}</p>
        </div>
      </div>
    `;
  }

  /**
   * Renderiza um card de depoimento
   * @param {Object} testimonial - Dados do depoimento
   * @returns {string} HTML do card
   */
  renderTestimonialCard(testimonial) {
    return `
      <div class="card testimonial-card fade-in">
        <div class="card-content">
          <div class="testimonial-quote">
            <span class="quote-mark">"</span>
            <p class="testimonial-text">${testimonial.text}</p>
            <span class="quote-mark">"</span>
          </div>
          <div class="testimonial-author">
            <h4 class="author-name">${testimonial.name}</h4>
            <p class="author-role">${testimonial.role}</p>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Renderiza um card simples com título e descrição
   * @param {Object} item - Dados do item
   * @returns {string} HTML do card
   */
  renderSimpleCard(item) {
    return `
      <div class="card fade-in">
        ${item.image ? `<img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">` : ''}
        <div class="card-content">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-description">${item.description}</p>
          ${item.action ? 
            `<div class="card-actions">
              <button class="btn btn-primary" onclick="${item.action}">
                ${item.actionText || 'Saiba Mais'}
              </button>
            </div>` : ''
          }
        </div>
      </div>
    `;
  }

  /**
   * Renderiza múltiplos cards em um grid
   * @param {Array} items - Array de itens
   * @param {string} type - Tipo do card (event, project, partner, etc.)
   * @param {number} columns - Número de colunas (opcional)
   * @returns {string} HTML do grid de cards
   */
  renderCardGrid(items, type, columns = 3) {
    const gridClass = `grid grid-${columns}`;
    
    const cardsHtml = items.map(item => {
      switch(type) {
        case 'event':
          return this.renderEventCard(item);
        case 'project':
          return this.renderProjectCard(item);
        case 'partner':
          return this.renderPartnerCard(item);
        case 'volunteer':
          return this.renderVolunteerCard(item);
        case 'testimonial':
          return this.renderTestimonialCard(item);
        default:
          return this.renderSimpleCard(item);
      }
    }).join('');

    return `
      <div class="${gridClass}">
        ${cardsHtml}
      </div>
    `;
  }
}

// Funções globais para interações com cards
window.showEventDetails = function(eventId) {
  // Implementar modal ou navegação para detalhes do evento
  console.log('Mostrar detalhes do evento:', eventId);
  // Aqui você pode implementar um modal ou redirecionar para uma página de detalhes
};

window.showProjectDetails = function(projectId) {
  // Implementar modal ou navegação para detalhes do projeto
  console.log('Mostrar detalhes do projeto:', projectId);
};

window.showPartnerDetails = function(partnerId) {
  // Implementar modal ou navegação para detalhes do parceiro
  console.log('Mostrar detalhes do parceiro:', partnerId);
};

// Inicializar o componente quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  window.cardComponent = new Card();
});

