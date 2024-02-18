import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-carousel')
export class Carousel extends LitElement {
  @property({ type: Boolean }) isOpen = false;

  @queryAssignedElements({ selector: "[data-target= 'slides-images']" }) imagesWrapper!: HTMLElement[];

  @queryAssignedElements({ selector: "[data-target= 'left-button']" }) imagesSliderLeft!: HTMLElement[];

  @queryAssignedElements({ selector: "[data-target= 'right-button']" }) imagesSliderRight!: HTMLElement[];

  @queryAssignedElements({ selector: "[data-target= 'bottom-button']" }) imageSliderBottom!: HTMLElement[];

  private totalImages = 0;

  private imageIndex = 0;

  connectedCallback(): void {
    super.connectedCallback();
    console.log(this.imagesWrapper[0].children);

    this.totalImages = this.imagesWrapper[0].children.length;

    this.imagesSliderLeft[0].addEventListener('click', () => {
      if (this.imageIndex > 0) this.imageIndex--;
      else this.imageIndex = this.totalImages - 1;
      this.toggleOpen();
    });

    this.imagesSliderRight[0].addEventListener('click', () => {
      if (this.imageIndex < this.totalImages - 1) this.imageIndex++;
      else this.imageIndex = 0;
      this.toggleOpen();
    });

    for (let i = 0; i < this.totalImages; i++) {
      const button = document.createElement('button');
      button.textContent = `Button ${i + 1}`;
      button.classList.add('Slider-Button-Bottom');
      button.setAttribute('data-target', `button-${i}`);

      button.addEventListener('click', () => {
        this.imageIndex = i;
        this.toggleOpen();
      });

      this.imageSliderBottom[0].appendChild(button);
    }
  }

  render() {
    return html`<slot />`;
  }

  toggleOpen() {
    for (let i = 0; i < this.totalImages; i++) {
      const child = this.imagesWrapper[0].children.item(i);
      child?.classList.toggle('Slide-Active', i == this.imageIndex);
    }
  }
}
