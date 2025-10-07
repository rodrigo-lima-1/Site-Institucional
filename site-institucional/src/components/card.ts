export interface CardProps {
  title: string;
  description: string;
  image: string;
  imageWebp?: string;
}

export class Card {
  props: CardProps;
  constructor(props: CardProps) {
    this.props = props;
  }

  render(): string {
    // Usa WebP se disponível, senão PNG/JPG
    return `
      <div class="card">
        <picture>
          ${this.props.imageWebp ? `<source srcset="${this.props.imageWebp}" type="image/webp">` : ''}
          <img src="${this.props.image}" alt="${this.props.title}" loading="lazy" class="card-img" />
        </picture>
        <div class="card-content">
          <h3>${this.props.title}</h3>
          <p>${this.props.description}</p>
        </div>
      </div>
    `;
  }
}
