/**
 * MAIN JAVASCRIPT FILE
 * Arquivo principal que gerencia a navegação SPA e funcionalidades globais do site
 */

// Estado global da aplicação
const AppState = {
  // Inicialmente null para que a primeira navegação force o carregamento
  // da página inicial. Se definido como 'home' a chamada inicial de
  // navigateTo('home') é ignorada devido à checagem de igualdade.
  currentPage: null,
  isLoading: false,
  pages: {
    home: "src/pages/home.html",
    "quem-somos": "src/pages/quem-somos.html",
    eventos: "src/pages/eventos.html",
    projetos: "src/pages/projetos.html",
    associados: "src/pages/associados.html",
    contatos: "src/pages/contatos.html",
  },
};

// Inicialização da aplicação
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Conexão Metropolitana - Site carregado com sucesso!");

  // Inicializar aplicação
  initializeApp();

  // Configurar navegação
  setupNavigation();

  // Configurar scroll to top
  setupScrollToTop();

  // Configurar lazy loading de imagens
  setupLazyLoading();

  // Configurar animações de scroll
  setupScrollAnimations();

  // Carregar página inicial
  let initialPage = URLUtils.getCurrentPageFromURL();
  if (!initialPage || !AppState.pages[initialPage]) {
    initialPage = "home";
    console.log("Página inicial detectada:", initialPage); // <-- Verificação adicional
  }
  navigateTo(initialPage);
});

/**
 * Inicializa a aplicação
 */
function initializeApp() {
  // Adicionar classe de JavaScript habilitado
  document.documentElement.classList.add("js-enabled");

  // Configurar tratamento de erros globais
  window.addEventListener("error", function (e) {
    console.error("Erro na aplicação:", e.error);
  });

  // Configurar eventos de resize
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250);
  });

  // Configurar eventos de scroll
  let scrollTimeout;
  window.addEventListener("scroll", function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScroll, 10);
  });
}

/**
 * Configura a navegação SPA
 */
function setupNavigation() {
  // Escutar mudanças no histórico do navegador
  window.addEventListener("popstate", function (e) {
    if (e.state && e.state.page) {
      loadPage(e.state.page, false);
    } else {
      loadPage("home", false);
    }
  });

  // Interceptar cliques em links internos
  document.addEventListener("click", function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      const page = link.getAttribute("href").slice(1) || "home";
      navigateTo(page);
    }
  });
}

/**
 * Navega para uma página específica
 * @param {string} page - Nome da página
 * @param {boolean} updateHistory - Se deve atualizar o histórico
 */
window.navigateTo = function (page, updateHistory = true) {
  if (AppState.isLoading || page === AppState.currentPage) {
    return;
  }

  // Validar se a página existe
  if (!AppState.pages[page]) {
    console.warn(`Página '${page}' não encontrada. Redirecionando para home.`);
    page = "home";
  }

  // Carregar página
  loadPage(page, updateHistory);
};

/**
 * Carrega uma página específica
 * @param {string} page - Nome da página
 * @param {boolean} updateHistory - Se deve atualizar o histórico
 */
async function loadPage(page, updateHistory = true) {
  try {
    // Definir estado de loading
    AppState.isLoading = true;
    showPageLoading();

    // Carregar conteúdo da página
    const response = await fetch(AppState.pages[page]);
    if (!response.ok) {
      throw new Error(`Erro ao carregar página: ${response.status}`);
    }

    const content = await response.text();

    // Atualizar conteúdo
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.innerHTML = content;
    }

    // Atualizar estado
    AppState.currentPage = page;
    AppState.isLoading = false;

    // Atualizar navegação ativa
    updateActiveNavigation(page);

    // Atualizar URL e histórico
    if (updateHistory) {
      URLUtils.updateURL(page);
    }

    // Executar scripts da página
    executePageScripts();

    // Disparar evento de mudança de página
    dispatchPageChangeEvent(page);

    // Scroll para o topo
    ScrollUtils.scrollToTop();

    // Esconder loading
    hidePageLoading();

    // Configurar animações da nova página
    setupScrollAnimations();
  } catch (error) {
    console.error("Erro ao carregar página:", error);
    AppState.isLoading = false;
    hidePageLoading();
    showErrorMessage("Erro ao carregar a página. Tente novamente.");
  }
}

/**
 * Mostra indicador de loading da página
 */
function showPageLoading() {
  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    LoadingUtils.show(mainContent);
  }
}

/**
 * Esconde indicador de loading da página
 */
function hidePageLoading() {
  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    LoadingUtils.hide(mainContent);
  }
}

/**
 * Atualiza a navegação ativa
 * @param {string} currentPage - Página atual
 */
function updateActiveNavigation(currentPage) {
  // Atualizar links do header
  if (window.headerComponent) {
    window.headerComponent.updateActiveLink(currentPage);
  }

  // Atualizar navbar
  if (window.navbarComponent) {
    window.navbarComponent.updateActiveLinks(currentPage);
  }
}

/**
 * Executa scripts específicos da página carregada
 */
function executePageScripts() {
  // Executar scripts inline da página: criamos novos elementos <script>
  // e os injetamos no documento para que sejam executados no contexto
  // correto. Em seguida disparamos um evento 'DOMContentLoaded' sintético
  // e um evento customizado 'pageContentLoaded' para compatibilidade.
  const scripts = Array.from(document.querySelectorAll("#main-content script"));
  scripts.forEach((oldScript) => {
    try {
      const newScript = document.createElement("script");
      // Preservar tipo se informado
      if (oldScript.type) newScript.type = oldScript.type;
      // Copiar conteúdo
      newScript.text = oldScript.textContent;
      // Copiar atributos (src, async, defer) se houver - se for src, ele fará fetch automaticamente
      for (let i = 0; i < oldScript.attributes.length; i++) {
        const attr = oldScript.attributes[i];
        if (attr.name !== "type") newScript.setAttribute(attr.name, attr.value);
      }
      // Inserir e executar
      document.body.appendChild(newScript);
      // Remover script original para evitar reexecução futura
      oldScript.remove();
    } catch (error) {
      console.error("Erro ao executar script da p\u00e1gina:", error);
    }
  });

  // Disparar evento customizado indicando que o conteúdo da página foi carregado
  const pageLoadedEvent = new CustomEvent("pageContentLoaded", {
    detail: { page: AppState.currentPage },
  });
  document.dispatchEvent(pageLoadedEvent);

  // Alguns scripts nas páginas podem registrar listeners para DOMContentLoaded.
  // Como o evento real já ocorreu, podemos disparar um evento sintético para
  // acionar esses callbacks quando a página é carregada via SPA.
  try {
    const domContentEvent = new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(domContentEvent);
  } catch (e) {
    // Falha silenciosa — não crítico
  }
}

/**
 * Dispara evento de mudança de página
 * @param {string} page - Nova página
 */
function dispatchPageChangeEvent(page) {
  const event = new CustomEvent("pageChanged", {
    detail: { page },
  });
  document.dispatchEvent(event);
}

/**
 * Configura o botão de scroll to top
 */
function setupScrollToTop() {
  // Criar botão se não existir
  let scrollBtn = document.querySelector(".scroll-to-top");
  if (!scrollBtn) {
    scrollBtn = document.createElement("button");
    scrollBtn.className = "scroll-to-top";
    scrollBtn.innerHTML = "↑";
    scrollBtn.setAttribute("aria-label", "Voltar ao topo");
    scrollBtn.addEventListener("click", ScrollUtils.scrollToTop);
    document.body.appendChild(scrollBtn);
  }

  // Mostrar/esconder baseado no scroll
  function toggleScrollButton() {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleScrollButton);
  toggleScrollButton(); // Verificar estado inicial
}

/**
 * Configura lazy loading de imagens
 */
function setupLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    // Observar todas as imagens com loading="lazy"
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Configura animações de scroll
 */
function setupScrollAnimations() {
  if ("IntersectionObserver" in window) {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observar elementos com classes de animação
    document
      .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
      .forEach((el) => {
        animationObserver.observe(el);
      });
  }
}

/**
 * Manipula eventos de resize
 */
function handleResize() {
  // Fechar menu mobile se estiver aberto
  const mobileMenu = document.getElementById("mobile-menu");
  const toggle = document.querySelector(".mobile-menu-toggle");

  if (
    window.innerWidth > 768 &&
    mobileMenu &&
    mobileMenu.classList.contains("active")
  ) {
    mobileMenu.classList.remove("active");
    if (toggle) toggle.classList.remove("active");
  }

  // Reconfigurar animações se necessário
  setupScrollAnimations();
}

/**
 * Manipula eventos de scroll
 */
function handleScroll() {
  // Adicionar classe scrolled ao header
  const header = document.querySelector(".header");
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
}

/**
 * Mostra mensagem de erro
 * @param {string} message - Mensagem de erro
 */
function showErrorMessage(message) {
  // Criar elemento de erro se não existir
  let errorDiv = document.querySelector(".error-message");
  if (!errorDiv) {
    errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ef4444;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10000;
      max-width: 300px;
    `;
    document.body.appendChild(errorDiv);
  }

  errorDiv.textContent = message;
  errorDiv.style.display = "block";

  // Esconder após 5 segundos
  setTimeout(() => {
    errorDiv.style.display = "none";
  }, 5000);
}

/**
 * Utilitário para debounce de funções
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function}
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Utilitário para throttle de funções
 * @param {Function} func - Função a ser executada
 * @param {number} limit - Limite de tempo em ms
 * @returns {Function}
 */
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Exportar funções globais
window.AppState = AppState;
window.debounce = debounce;
window.throttle = throttle;

// Log de inicialização
console.log("✅ Sistema de navegação SPA inicializado");
console.log("📱 Site responsivo ativo");
console.log("🎨 Animações e transições configuradas");
console.log("⚡ Performance otimizada com lazy loading");

// Service Worker (opcional - para cache offline)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Implementar service worker se necessário
    console.log("🔧 Service Worker disponível (não implementado nesta versão)");
  });
}
