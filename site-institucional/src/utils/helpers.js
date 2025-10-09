/**
 * HELPER FUNCTIONS
 * Funções auxiliares para funcionalidades comuns do site
 */

// Utilitários de DOM
const DOMUtils = {
  /**
   * Seleciona um elemento do DOM
   * @param {string} selector - Seletor CSS
   * @returns {Element|null}
   */
  $(selector) {
    return document.querySelector(selector);
  },

  /**
   * Seleciona múltiplos elementos do DOM
   * @param {string} selector - Seletor CSS
   * @returns {NodeList}
   */
  $$(selector) {
    return document.querySelectorAll(selector);
  },

  /**
   * Cria um elemento HTML
   * @param {string} tag - Tag do elemento
   * @param {Object} attributes - Atributos do elemento
   * @param {string} content - Conteúdo do elemento
   * @returns {Element}
   */
  createElement(tag, attributes = {}, content = '') {
    const element = document.createElement(tag);
    
    Object.keys(attributes).forEach(key => {
      if (key === 'className') {
        element.className = attributes[key];
      } else {
        element.setAttribute(key, attributes[key]);
      }
    });
    
    if (content) {
      element.innerHTML = content;
    }
    
    return element;
  },

  /**
   * Remove todos os filhos de um elemento
   * @param {Element} element - Elemento pai
   */
  clearChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
};

// Utilitários de animação
const AnimationUtils = {
  /**
   * Adiciona classe de animação a um elemento
   * @param {Element} element - Elemento a ser animado
   * @param {string} animationClass - Classe de animação
   * @param {Function} callback - Callback após animação
   */
  animate(element, animationClass, callback) {
    element.classList.add(animationClass);
    
    const handleAnimationEnd = () => {
      element.classList.remove(animationClass);
      element.removeEventListener('animationend', handleAnimationEnd);
      if (callback) callback();
    };
    
    element.addEventListener('animationend', handleAnimationEnd);
  },

  /**
   * Fade in de um elemento
   * @param {Element} element - Elemento
   * @param {number} duration - Duração em ms
   */
  fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      element.style.opacity = Math.min(progress / duration, 1);
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  },

  /**
   * Fade out de um elemento
   * @param {Element} element - Elemento
   * @param {number} duration - Duração em ms
   */
  fadeOut(element, duration = 300) {
    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      element.style.opacity = Math.max(1 - (progress / duration), 0);
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = 'none';
      }
    };
    
    requestAnimationFrame(animate);
  }
};

// Utilitários de validação
const ValidationUtils = {
  /**
   * Valida email
   * @param {string} email - Email a ser validado
   * @returns {boolean}
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Valida telefone brasileiro
   * @param {string} phone - Telefone a ser validado
   * @returns {boolean}
   */
  isValidPhone(phone) {
    const phoneRegex = /^(\(?\d{2}\)?\s?)?(\d{4,5}-?\d{4})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  /**
   * Valida se campo não está vazio
   * @param {string} value - Valor a ser validado
   * @returns {boolean}
   */
  isNotEmpty(value) {
    return value && value.trim().length > 0;
  },

  /**
   * Valida comprimento mínimo
   * @param {string} value - Valor a ser validado
   * @param {number} minLength - Comprimento mínimo
   * @returns {boolean}
   */
  hasMinLength(value, minLength) {
    return value && value.length >= minLength;
  }
};

// Utilitários de formatação
const FormatUtils = {
  /**
   * Formata data para exibição
   * @param {string|Date} date - Data a ser formatada
   * @returns {string}
   */
  formatDate(date) {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  },

  /**
   * Formata telefone
   * @param {string} phone - Telefone a ser formatado
   * @returns {string}
   */
  formatPhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    } else if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  },

  /**
   * Trunca texto
   * @param {string} text - Texto a ser truncado
   * @param {number} maxLength - Comprimento máximo
   * @returns {string}
   */
  truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  }
};

// Utilitários de localStorage
const StorageUtils = {
  /**
   * Salva dados no localStorage
   * @param {string} key - Chave
   * @param {any} data - Dados a serem salvos
   */
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error);
    }
  },

  /**
   * Carrega dados do localStorage
   * @param {string} key - Chave
   * @returns {any}
   */
  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Erro ao carregar do localStorage:', error);
      return null;
    }
  },

  /**
   * Remove dados do localStorage
   * @param {string} key - Chave
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Erro ao remover do localStorage:', error);
    }
  }
};

// Utilitários de URL e navegação
const URLUtils = {
  /**
   * Obtém parâmetros da URL
   * @returns {Object}
   */
  getURLParams() {
    const params = {};
    const urlParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlParams) {
      params[key] = value;
    }
    return params;
  },

  /**
   * Atualiza URL sem recarregar a página
   * @param {string} page - Nome da página
   */
  updateURL(page) {
    const newURL = page === 'home' ? '/' : `/#${page}`;
    window.history.pushState({ page }, '', newURL);
  },

  /**
   * Obtém página atual da URL
   * @returns {string}
   */
  getCurrentPageFromURL() {
    const hash = window.location.hash.slice(1);
    return hash || 'home';
  }
};

// Utilitários de loading
const LoadingUtils = {
  /**
   * Mostra indicador de loading
   * @param {Element} container - Container onde mostrar o loading
   */
  show(container) {
    const loadingHTML = `
      <div class="loading-indicator">
        <div class="loading-spinner"></div>
        <p>Carregando...</p>
      </div>
    `;
    container.innerHTML = loadingHTML;
  },

  /**
   * Remove indicador de loading
   * @param {Element} container - Container do loading
   */
  hide(container) {
    const loadingIndicator = container.querySelector('.loading-indicator');
    if (loadingIndicator) {
      loadingIndicator.remove();
    }
  }
};

// Utilitários de scroll
const ScrollUtils = {
  /**
   * Scroll suave para elemento
   * @param {string|Element} target - Seletor ou elemento alvo
   */
  scrollTo(target) {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  },

  /**
   * Scroll para o topo da página
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  },

  /**
   * Verifica se elemento está visível na viewport
   * @param {Element} element - Elemento a ser verificado
   * @returns {boolean}
   */
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

// Exportar utilitários para uso global
window.DOMUtils = DOMUtils;
window.AnimationUtils = AnimationUtils;
window.ValidationUtils = ValidationUtils;
window.FormatUtils = FormatUtils;
window.StorageUtils = StorageUtils;
window.URLUtils = URLUtils;
window.LoadingUtils = LoadingUtils;
window.ScrollUtils = ScrollUtils;

