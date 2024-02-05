import { LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('guvam-accordionitem')
export class AccordionItem extends LitElement {
  @property({ type: Boolean }) isOpen = false;

  connectedCallback(): void {
    super.connectedCallback();
    // Since parentElement is an astro island

    this.addEventListener('click', () => {
      this.toggleOpen();
    });
  }

  render() {
    return html`<slot />`;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.classList.toggle('Accordion-Active');
    console.log('toggled');
  }
}
