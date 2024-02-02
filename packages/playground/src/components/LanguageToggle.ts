import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('language-toggle')
export class LanguageToggle extends LitElement {
  @state() lang = 'ltr';

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', () => {
      const el = document.querySelector(':root');
      if (el) {
        this.lang = el.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
        el.setAttribute('dir', this.lang);
        console.log(this.lang);
      }
    });
  }

  render() {
    return html` ${this.lang}`;
  }
}
