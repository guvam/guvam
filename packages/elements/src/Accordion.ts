export class Accordion extends HTMLElement {
  private single = false;
  private controls!: NodeListOf<HTMLElement>;

  connectedCallback(): void {
    this.single = this.getAttribute('single') !== null;
    this.controls = this.querySelectorAll('gm-collapse');

    this.addEventListener('collapse-open', (ev) => {
      if (this.single) {
        const index = Array.from(this.controls).findIndex((el) => el === ev.target);
        this.setIndex(index);
      }
    });

    if (this.single) {
      const index = Array.from(this.controls).findIndex((el) => el.getAttribute('open') === '');
      this.setIndex(index);
    }
  }

  setIndex(index: number) {
    this.controls.forEach((element, i) => {
      if (index !== i) {
        element.removeAttribute('open');
      }
    });
  }
}

customElements.define('gm-accordion', Accordion);
