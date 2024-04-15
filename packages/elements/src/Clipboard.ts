export class Clipboard extends HTMLElement {
  private timeout?: number;

  private value = '';

  animationTime = 1000;

  connectedCallback(): void {
    this.addEventListener('click', () => this.copyToClipboard());
  }

  private copyToClipboard() {
    this.classList.add('copied');
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => this.classList.remove('copied'), this.animationTime);
    navigator.clipboard.writeText(this.value).catch(console.info);
  }
}
