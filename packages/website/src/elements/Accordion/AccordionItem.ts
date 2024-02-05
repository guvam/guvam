import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-accordionitem')
export class AccordionItem extends LitElement {
  @property({ type: Boolean }) isOpen = false;

  @queryAssignedElements({ selector: '.Accordion-Content' }) contentSlot!: HTMLElement[];

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('click', () => {
      this.toggleOpen();
    });
  }

  render() {
    return html`<slot />`;
  }

  toggleOpen() {
    this.contentSlot[0].classList.toggle('Accordion-Active');
    this.isOpen = this.contentSlot[0].classList.contains('Accordion-Active');
    console.log('toggled');
  }
}
