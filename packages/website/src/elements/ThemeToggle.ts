const switchBetweenClasses = (el: HTMLElement | null) => {
  if (el) {
    const isLight = el.classList.contains('type-light');
    el.classList.toggle('type-light', !isLight);
    el.classList.toggle('type-dark', isLight);

    localStorage.setItem('theme', String(!isLight));
  }
};

export class ThemeToggle extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', () => {
      switchBetweenClasses(document.querySelector(':root'));
      switchBetweenClasses(this);
    });
  }
}

customElements.define('ws-theme-toggle', ThemeToggle);
