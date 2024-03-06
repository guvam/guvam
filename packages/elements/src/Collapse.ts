import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('guvam-collapse')
export class Collapse extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;

  private control!: HTMLElement | null;

  connectedCallback(): void {
    super.connectedCallback();

    this.control = this.querySelector('[data-target="collapse-control"]');

    this.control?.addEventListener('click', () => {
      this.open = !this.open;

      this.dispatchEvent(
        new CustomEvent('collapse-open', {
          detail: {
            open: this.open,
          },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }

  render() {
    return html`<slot />`;
  }
}
