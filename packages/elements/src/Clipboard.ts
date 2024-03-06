import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('guvam-clipboard')
export class Clipboard extends LitElement {
  private timeout?: number;

  @property({ type: String }) Value = '';

  @property({ type: Number }) animationTime = 1000;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', () => this.copyToClipboard());
  }

  render() {
    return html`<slot />`;
  }

  private copyToClipboard() {
    this.classList.add('copied');
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => this.classList.remove('copied'), this.animationTime);
    navigator.clipboard.writeText(this.Value).catch(console.info);
  }
}
