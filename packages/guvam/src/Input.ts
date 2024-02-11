import { LitElement, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-input')
export class Input extends LitElement {
  @property({ type: Boolean, reflect: true }) open = true;

  @queryAssignedElements({ selector: '[data-target="button"]' }) buttons!: HTMLElement[];

  connectedCallback() {
    super.connectedCallback();
    const button = this.buttons[0];
    button?.addEventListener('click', () => this.openToggle());
  }

  private openToggle() {
    this.open = !this.open;
  }

  render() {
    return html` <slot />`;
  }
}

/*customElements.define('guvam-input', Input);*/
