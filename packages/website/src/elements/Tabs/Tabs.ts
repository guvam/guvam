import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-tabs')
export class Tabs extends LitElement {
  @queryAssignedElements({ selector: 'Tab-Header' }) headers!: HTMLElement[];

  @queryAssignedElements({ selector: 'Tab-Content' }) contents!: HTMLElement[];

  @queryAssignedElements({ selector: 'Tab-Window' }) tabWindow!: HTMLElement[];

  connectedCallback(): void {
    super.connectedCallback();

    this.headers.forEach((el) => {
      el.addEventListener('click', () => {
        this.openTab(el);
        console.log('clicked');
      });
    });
  }

  render() {
    return html`<slot />`;
  }

  openTab(el: HTMLElement) {
    if (el.nextElementSibling) this.tabWindow[0].appendChild(el.nextElementSibling);
  }
}
