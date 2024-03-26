export class Dropdown extends HTMLElement {
  private open = true;

  connectedCallback() {
    this.querySelector('[data-target="button"]')?.addEventListener('click', () => {
      this.open = !this.open;
      this.toggleAttribute('open', this.open);
    });
  }
}

customElements.define('gm-dropdown', Dropdown);
