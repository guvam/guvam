import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('guvam-select')
export class Select extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    console.log('guvam-select INIT!');
  }

  render() {
    return html`<slot />`;
  }
}
