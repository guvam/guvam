import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('guvam-accordion')
export class Accordion extends LitElement {
  @property({ type: Boolean, reflect: true }) single = false;

  private controls!: NodeListOf<HTMLElement>;

  connectedCallback(): void {
    super.connectedCallback();

    this.controls = this.querySelectorAll('guvam-collapse');

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

  render() {
    return html`<slot />`;
  }

  setIndex(index: number) {
    this.controls.forEach((element, i) => {
      if (index !== i) {
        element.removeAttribute('open');
      }
    });
  }
}
