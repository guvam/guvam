let GLOBAL_ID = 1;

export class Dropdown extends HTMLElement {
  position = 'bottom';
  private actionEl: HTMLElement | null = null;
  private popoverEl: HTMLElement | null = null;

  connectedCallback() {
    const id = `guvam-id-${++GLOBAL_ID}`;
    this.actionEl = this.querySelector('[data-target="action"]');
    this.popoverEl = this.querySelector('[data-target="popover"]');
    this.actionEl?.setAttribute('popovertarget', id.toString());
    this.popoverEl?.setAttribute('id', id.toString());
    console.log('load dropdown');

    if (this.getAttribute('position') === 'left') {
      this.position = 'left';
    }

    this.popoverEl?.addEventListener('beforetoggle', this.onClick);
  }

  private onClick = () => {
    if (this.actionEl && this.popoverEl) {
      const rect = this.actionEl.getBoundingClientRect();

      const style =
        this.position === 'bottom'
          ? `top: ${rect.top + rect.height + 4}px; left: ${rect.left}px`
          : `top: ${rect.top}px; left: ${rect.left + rect.width + 4}px`;

      this.popoverEl.setAttribute('style', style);
    }
  };
}
