/**
 * FOOTER COMPONENT
 * Componente reutilizável para o rodapé do site
 * Inclui informações de contato, links úteis e redes sociais
 */

class Footer {
  constructor() {
    this.init();
  }

  init() {
    const footerElement = document.getElementById('footer');
    if (!footerElement) return;

    footerElement.innerHTML = this.render();
  }

  render() {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <!-- Seção Sobre -->
            <div class="footer-section">
              <h3>Instituto TechFuturo</h3>
              <p>
                Democratizando o acesso à educação tecnológica para jovens em situação de 
                vulnerabilidade social, construindo um futuro mais justo e inclusivo através da tecnologia.
              </p>
              <div class="social-links">
                <a href="#" class="social-link" title="Facebook">
                  <span>📘</span>
                </a>
                <a href="#" class="social-link" title="Instagram">
                  <span>📷</span>
                </a>
                <a href="#" class="social-link" title="LinkedIn">
                  <span>💼</span>
                </a>
                <a href="#" class="social-link" title="YouTube">
                  <span>📺</span>
                </a>
              </div>
            </div>

            <!-- Links Rápidos -->
            <div class="footer-section">
              <h3>Links Rápidos</h3>
              <ul class="footer-links">
                <li><a href="#" onclick="navigateTo('home')">Início</a></li>
                <li><a href="#" onclick="navigateTo('quem-somos')">Quem Somos</a></li>
                <li><a href="#" onclick="navigateTo('eventos')">Eventos</a></li>
                <li><a href="#" onclick="navigateTo('projetos')">Projetos</a></li>
                <li><a href="#" onclick="navigateTo('associados')">Associados</a></li>
                <li><a href="#" onclick="navigateTo('contatos')">Contatos</a></li>
              </ul>
            </div>

            <!-- Programas -->
            <div class="footer-section">
              <h3>Nossos Programas</h3>
              <ul class="footer-links">
                <li><a href="#" onclick="navigateTo('projetos')">Code for Change</a></li>
                <li><a href="#" onclick="navigateTo('projetos')">TechGirls</a></li>
                <li><a href="#" onclick="navigateTo('eventos')">Workshops</a></li>
                <li><a href="#" onclick="navigateTo('eventos')">Palestras</a></li>
                <li><a href="#" onclick="navigateTo('eventos')">Hackathons</a></li>
              </ul>
            </div>

            <!-- Contato -->
            <div class="footer-section">
              <h3>Contato</h3>
              <p>📍 Rua Celso Nogueira, 500, Sala Pop Shopping Coworking<br>
              Centro, Pacajus-CE<br> 
              CEP: 62.870-000<br></p>
              <p>📞 (85) 99697-4321</p>
              <p>✉️ contato.conexaometropolitana@gmail.com</p>
              <p>🕒 Segunda a Sexta: 8h às 18h</p>
              <p>CNPJ: 58.403.283/0001-00</p>
            </div>
          </div>

          <!-- Rodapé Inferior -->
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Instituto TechFuturo. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ para transformar vidas através da tecnologia.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

// Inicializar o componente quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  window.footerComponent = new Footer();
});

