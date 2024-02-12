import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-tabs')
export class Tabs extends LitElement {
  @queryAssignedElements({ selector: '[data-target="Tab-Headers"]' }) headersParent!: HTMLElement[];

  @queryAssignedElements({ selector: '[data-target="Tab-Contents"]' }) contentsParent!: HTMLElement[];

  connectedCallback(): void {
    super.connectedCallback();

    const headers = this.headersParent[0].children;

    for (let i = 0; i < headers.length; i++) {
      headers.item(i)?.addEventListener('click', () => {
        const content = this.contentsParent[0].children.item(i);
        this.openTab(content);
        console.log('clicked');
      });
    }
  }

  render() {
    return html`<slot />`;
  }

  openTab(el: Element | null) {
    if (el) el.classList.add('Tab-Active');
    const children = this.contentsParent[0].children;

    for (let i = 0; i < children.length; i++) {
      const child = children.item(i);
      if (child != el) {
        child?.classList.remove('Tab-Active');
      }
    }
  }
}
