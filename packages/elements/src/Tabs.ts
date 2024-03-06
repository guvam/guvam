import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('guvam-tabs')
export class Tabs extends LitElement {
  @property({ type: Number, reflect: true }) index = -1;

  private controls!: NodeListOf<HTMLElement>;

  private contents!: NodeListOf<HTMLElement>;

  connectedCallback(): void {
    super.connectedCallback();

    this.controls = this.querySelectorAll('[data-target="tab-control"]');

    this.contents = this.querySelectorAll('[data-target="tab-content"]');

    this.controls?.forEach((el) =>
      el.addEventListener('click', (ev) => {
        const index = Array.from(this.controls).findIndex((indicator) => indicator === ev.target);
        this.setIndex(index);
      }),
    );

    if (this.index === -1) {
      const index = Array.from(this.controls).findIndex((el) => el.classList.contains('active'));
      this.index = index === -1 ? 0 : index;
    }

    this.setIndex(this.index);
  }

  render() {
    return html`<slot />`;
  }

  setIndex(index: number) {
    this.index = index;

    this.controls.forEach((_, i) => {
      this.controls[i].classList.toggle('active', i === index);
      this.contents[i].classList.toggle('active', i === index);
    });

    this.dispatchEvent(
      new CustomEvent('tabs-change', {
        detail: { index },
        bubbles: true,
        composed: true,
      }),
    );
  }
}
