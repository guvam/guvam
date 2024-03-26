export class Alert extends HTMLElement {
  connectedCallback() {
    this.addEventListener('close-alert', () => {
      console.log('Alert!');
    });

    const closeButton = this.querySelector('[data-target="close-button"]');

    closeButton?.addEventListener('click', () => {
      this.closeAlert();
    });
  }

  closeAlert() {
    const alert = this.querySelector('[data-target="alert"]');
    if (alert instanceof HTMLElement) {
      alert.style.display = 'none';
      this.dispatchEvent(new CustomEvent('alert-close', { bubbles: true, composed: true }));
    }
  }
}

customElements.define('gm-alert', Alert);
