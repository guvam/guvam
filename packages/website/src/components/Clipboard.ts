import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('started-clipboard')
export class Clipboard extends LitElement {
  // Attribute in parent element should be lowercase
  // eg copystr = npm i @guvam/guvam
  @property({ type: String }) copyStr = 'default';

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

    setTimeout(() => this.classList.remove('Started-Copied'), 1000);

    void navigator.clipboard.writeText(this.copyStr).catch(() => {});
  }
}
customElements.define('started-clipboard', Clipboard);

/* static count

@customElement('started-clipboard')
export class Clipboard extends LitElement {
  static count = 0;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', (e) => {
      console.log('callback fired', Clipboard.count);
    });
  }

  protected render() {
    return html`
      <p><button @click="${Clipboard._increment}">Click Me!</button></p>
      <p>Click count: ${Clipboard.count}</p>
    `;
  }

  private _increment(e: Event) {
    Clipboard.count++;
  }
}



*/

/* property count


export class Clipboard extends LitElement {
  @property() count = 0;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('click', (e) => {
      console.log('callback fired', this.count);
    });
  }

  protected render() {
    return html`
      <p><button @click="${this._increment}">Click Me!</button></p>
      <p>Click count: ${this.count}</p>
    `;
  }

  private _increment(e: Event) {
    this.count++;
  }
}


*/
