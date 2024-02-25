import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('guvam-carousel')
export class Carousel extends LitElement {
  @property({ type: Number, reflect: true }) index = -1;

  private slides!: HTMLElement[];

  private indicators!: HTMLElement[];

  private controlPrev!: HTMLElement | null;

  private controlNext!: HTMLElement | null;

  connectedCallback(): void {
    super.connectedCallback();

    this.slides = Array.from(this.querySelectorAll("[data-target='carousel-slide']"));
    this.indicators = Array.from(this.querySelectorAll("[data-target='carousel-indicator']"));
    this.controlPrev = this.querySelector("[data-target='carousel-control-prev']");
    this.controlNext = this.querySelector("[data-target='carousel-control-next']");

    this.controlPrev?.addEventListener('click', () => this.setIndex(this.calcIndex(-1)));
    this.controlNext?.addEventListener('click', () => this.setIndex(this.calcIndex(1)));
    this.indicators?.forEach((el) =>
      el.addEventListener('click', (ev) => {
        const index = this.indicators.findIndex((indicator) => indicator === ev.target);
        this.setIndex(index);
      }),
    );

    if (this.index === -1) {
      const index = this.slides.findIndex((el) => el.classList.contains('active'));
      this.index = index === -1 ? 0 : index;
    }

    this.setIndex(this.index);
  }

  private calcIndex(change: number) {
    return (this.slides.length + this.index + change) % this.slides.length;
  }

  setIndex(index: number) {
    this.index = index;

    this.slides.forEach((_, i) => {
      this.slides[i].classList.toggle('active', i === index);
      this.slides[i].classList.toggle('prev', i === this.calcIndex(-1));
      this.slides[i].classList.toggle('next', i === this.calcIndex(1));
      this.indicators[i].classList.toggle('active', i === index);
    });

    this.dispatchEvent(
      new CustomEvent('carousel-change', {
        detail: { index },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html` <slot />`;
  }
}
