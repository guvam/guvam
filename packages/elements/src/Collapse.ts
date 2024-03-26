export class Collapse extends HTMLElement {
  static readonly observedAttributes = ['open'];

  private open = false;
  private control!: HTMLElement | null;

  connectedCallback(): void {
    this.control = this.querySelector('[data-target="collapse-control"]');
    this.open = this.getAttribute('open') !== null;

    this.control?.addEventListener('click', () => {
      this.open = !this.open;
      this.toggleAttribute('open', this.open);

      this.dispatchEvent(
        new CustomEvent('collapse-open', {
          detail: {
            open: this.open,
          },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }
}

customElements.define('gm-collapse', Collapse);
