import { Card } from '../../src/components/card';

const card = new Card({
  title: 'Projeto Exemplo',
  description: 'Descrição do projeto exemplo.',
  image: 'public/images/projetos/projeto_image_1.png',
  imageWebp: 'public/images/projetos/projeto_image_1.webp'
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('card-example');
  if (container) {
    container.innerHTML = card.render();
  }
});
