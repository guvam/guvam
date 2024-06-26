export class Carousel extends HTMLElement {
  private index = -1;

  private slides!: HTMLElement[];

  private indicators!: HTMLElement[];

  private controlPrev!: HTMLElement | null;

  private controlNext!: HTMLElement | null;

  private autoSlideInterval: NodeJS.Timeout | null = null;

  connectedCallback(): void {
    const autoSlide = this.hasAttribute('auto-Slide');

    if (autoSlide) {
      this.startAutoSlide();
    }

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

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.setIndex(this.calcIndex(1)), 5000);
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval !== null) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
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

    if (this.autoSlideInterval !== null) {
      this.stopAutoSlide();
      this.startAutoSlide();
    }
  }
}
