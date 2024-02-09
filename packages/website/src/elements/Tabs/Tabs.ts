import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-tabs')
export class Tabs extends LitElement {
  @queryAssignedElements({ selector: ':not(.Tab-Window)', flatten: true }) headers!: HTMLElement[];

  @queryAssignedElements({ selector: '.Tab-Window', flatten: true }) tabWindow!: HTMLElement[];

  connectedCallback(): void {
    super.connectedCallback();

    console.log(this.headers);
    console.log(this.tabWindow);

    this.headers.forEach((el, index) => {
      el.addEventListener('click', () => {
        const contentChild = this.tabWindow[0].children.item(index);
        this.openTab(contentChild);
        console.log('clicked');
      });
    });
  }

  render() {
    return html`<slot />`;
  }

  openTab(el: Element | null) {
    if (el) el.classList.add('Tab-Active');
    const children = this.tabWindow[0].children;

    for (let i = 0; i < children.length; i++) {
      const child = children.item(i);
      if (child != el) {
        child?.classList.remove('Tab-Active');
      }
    }
  }
}
