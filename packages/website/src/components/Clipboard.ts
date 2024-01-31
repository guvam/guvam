import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('started-clipboard')
export class Clipboard extends LitElement {
  @property({ type: String }) Value = '';

  private timeout?: number;

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('click', () => {
      this._copyToClipboard();
    });
  }

  render() {
    return html`<slot />`;
  }

  private _copyToClipboard() {
    this.classList.add('Started-Copied');
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = window.setTimeout(() => this.classList.remove('Started-Copied'), 1000);

    void navigator.clipboard.writeText(this.Value).catch(() => {});
  }
}
