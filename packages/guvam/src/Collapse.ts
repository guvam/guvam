import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-collapse')
export class Collapse extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;

  @queryAssignedElements({ selector: '[data-target="collapse-action"]' }) collapseAction!: HTMLElement[];

  connectedCallback(): void {
    super.connectedCallback();
    this.collapseAction.forEach((el) => {
      el.addEventListener('click', () => {
        this.open = !this.open;
      });
    });
  }

  render() {
    return html`<slot />`;
  }
}
