export class Tabs extends HTMLElement {
  private index = -1;
  private controls!: NodeListOf<HTMLElement>;
  private contents!: NodeListOf<HTMLElement>;

  connectedCallback(): void {
    this.controls = this.querySelectorAll('[data-target="tab-control"]');

    this.contents = this.querySelectorAll('[data-target="tab-content"]');

    this.controls?.forEach((el) =>
      el.addEventListener('click', (ev) => {
        const index = Array.from(this.controls).findIndex((indicator) => indicator === ev.target);
        this.setIndex(index);
      }),
    );

    if (this.index === -1) {
      const index = Array.from(this.controls).findIndex((el) => el.classList.contains('active'));
      this.index = index === -1 ? 0 : index;
    }

    this.setIndex(this.index);
  }

  setIndex(index: number) {
    this.index = index;

    this.controls.forEach((_, i) => {
      this.controls[i].classList.toggle('active', i === index);
      this.contents[i].classList.toggle('active', i === index);
    });

    this.dispatchEvent(
      new CustomEvent('tabs-change', {
        detail: { index },
        bubbles: true,
        composed: true,
      }),
    );
  }
}

customElements.define('gm-tabs', Tabs);
