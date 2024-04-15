export class Modal extends HTMLElement {
  private static = false;

  private modalOpener!: NodeListOf<HTMLElement>;

  private modal!: HTMLDialogElement;

  private modalClosers!: NodeListOf<HTMLElement>;

  connectedCallback() {
    this.modalOpener = this.querySelectorAll('[data-target="modal-opener"]');
    this.modalClosers = this.querySelectorAll('[data-target="modal-close"]');
    this.modal = this.querySelectorAll('[data-target="modal"]')[0] as HTMLDialogElement;

    this.modalOpener[0].addEventListener('click', () => {
      this.modal.showModal();
    });

    this.modalClosers.forEach((el) => {
      el.addEventListener('click', () => {
        this.modal.close();
      });
    });

    if (this.static)
      this.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') e.preventDefault();
      });
    else
      this.modal.addEventListener('mousedown', (e) => {
        console.log(e.target);
        if (e.target === this.modal) this.modal.close();
      });
  }
}
