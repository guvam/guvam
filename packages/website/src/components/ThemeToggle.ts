import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const switchBetweenClasses = (el: HTMLElement | null) => {
  if (el) {
    const isLight = el.classList.contains('type-light');
    el.classList.toggle('type-light', !isLight);
    el.classList.toggle('type-dark', isLight);
  }
};

@customElement('theme-toggle')
export class ThemeToggle extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', () => {
      switchBetweenClasses(document.querySelector(':root'));
      switchBetweenClasses(this);
    });
  }

  render() {
    return html`<slot />`;
  }
}
