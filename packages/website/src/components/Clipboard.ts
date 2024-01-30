import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('started-clipboard')
export class Clipboard extends LitElement {
  @property({ type: Number }) count = 0;

  protected render() {
    return html`
      <p><button @click=${{ handleEvent: () => this._increment(), once: true }}>Click Me!</button></p>
      <p>Click count: ${this.count}</p>
    `;
  }

  private _increment(e: Event) {
    this.count++;
    console.log('test');
  }
}
customElements.define('started-clipboard', Clipboard);

/*

@customElement('started-clipboard')
export class Clipboard extends LitElement {
  @property({ type: String }) copyStr = 'npm i @guvam/guvam';

  @queryAssignedElements() listItems!: HTMLElement[];

  render() {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return html` <slot @click="${this._copyToClipboard}" /> `;
  }

  private _copyToClipboard() {
    if (this.listItems) this.listItems[0].classList.add('Starter-Copied');
    console.log('test');
    // navigator is not defined
    // void navigator.clipboard.writeText(this.copyStr).catch(() => {});
  }
}
customElements.define('started-clipboard', Clipboard);

*/
