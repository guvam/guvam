import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('guvam-alert')
export class Alert extends LitElement {
  render() {
    return html`<slot />`;
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('close-alert', () => {
      this.closeAlert();
    });

    const closeButton = this.shadowRoot?.querySelector('[data-target="close-button"]') as HTMLButtonElement | null;
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.dispatchCloseEvent();
      });
    }
  }

  dispatchCloseEvent() {
    this.dispatchEvent(new CustomEvent('close-alert'));
  }

  closeAlert() {
    const alert = this.shadowRoot?.querySelector('[data-target="alert"]');
    if (alert instanceof HTMLElement) {
      alert.style.display = 'none';
    }
  }
}
