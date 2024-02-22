import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('guvam-alert')
export class Alert extends LitElement {
  render() {
    return html`<slot />`;
  }

  private closeAlert() {
    console.log('Alert');
    const alertElement = this.shadowRoot?.querySelector('[data-target="alert"]');
    if (alertElement) {
      alertElement.dispatchEvent(new CustomEvent('closeAlert', { bubbles: true, composed: true }));
    }
  }
}
