import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-accordion')
export class Accordion extends LitElement {
  @property({ type: Boolean }) singleOpen = false;

  @queryAssignedElements({ selector: '[data-target="accordion-item"]' }) accordionItems!: HTMLElement[];

  connectedCallback(): void {
    super.connectedCallback();
    console.log(this.accordionItems);
    this.accordionItems.forEach((el) => {
      el.firstElementChild?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleOpen(el);
      });
    });
  }

  render() {
    return html`<slot />`;
  }

  toggleOpen(el: HTMLElement) {
    el.classList.toggle('Accordion-Active');
    if (el.classList.contains('Accordion-Active') && this.singleOpen) {
      this.closeAllExcept(el);
    }
  }

  closeAllExcept(el: HTMLElement) {
    this.accordionItems.forEach((element) => {
      if (el !== element) {
        element.classList.remove('Accordion-Active');
      }
    });
  }
}
