import { LitElement, html } from 'lit';
import { property, customElement, queryAssignedElements } from 'lit/decorators.js';

@customElement('guvam-alert')
export class Alert extends LitElement {
  @queryAssignedElements({ selector: '[data-target="alert-close"]' }) alertClose!: HTMLElement[];

  @queryAssignedElements({ selector: '[data-target="alert-button"]' }) alertButton!: HTMLElement[];

  connectedCallback() {
    super.connectedCallback();

    this.alertButton.forEach((button) => {
      button.addEventListener('click', () => this.handleButtonClick());
    });
  }

  handleButtonClick() {}

  render() {
    return html`<slot />`;
  }
}
