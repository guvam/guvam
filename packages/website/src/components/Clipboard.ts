import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('started-clipboard')
export class Clipboard extends LitElement {
  // Attribute in parent element should be lowercase
  // eg copystr ="npm i @guvam/guvam"
  @property({ type: String }) Value = '';

  @property() timeout: NodeJS.Timeout | null = null;

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('click', () => {
      this._copyToClipboard();
    });
  }

  render() {
    return html` <slot />`;
  }

  private _copyToClipboard() {
    this.classList.add('Started-Copied');
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.classList.remove('Started-Copied'), 1000);

    void navigator.clipboard.writeText(this.Value).catch(() => {});
  }
}
customElements.define('started-clipboard', Clipboard);
