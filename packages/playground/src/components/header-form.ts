import { LitElement, html } from 'lit';
import { customElement, queryAssignedElements } from 'lit/decorators.js';

type FormValue = Record<string, string | boolean>;

@customElement('header-form')
export class HeaderForm extends LitElement {
  @queryAssignedElements({ selector: 'form' }) formEls!: HTMLFormElement[];

  private contentArea = (data: FormValue) => {
    const classNames = [
      'LayoutContent',
      'Variables',
      `-color-${data.color}`,
      `-size-${data.size}`,
      `-spacing-${data.spacing}`,
      `type-${data.theme}`,
    ];
    const el = document.querySelector('#content');
    if (el) {
      el.setAttribute('class', classNames.join(' '));
      el.setAttribute('dir', data.direction.toString());
    }
  };

  private formUpdate = (formEl: HTMLFormElement) => {
    const data: FormValue = {};
    for (const x of Array.from(formEl.elements)) {
      data[x.name] = x.checked === undefined ? x.value : x.checked;
    }
    window.localStorage.setItem('content', JSON.stringify(data));
    this.contentArea(data);
  };

  connectedCallback(): void {
    super.connectedCallback();

    const initData = {
      color: 'success',
      size: 'default',
      spacing: 'default',
      direction: 'left',
      theme: 'left',
    };
    const storageData = window.localStorage.getItem('content');
    const data: FormValue = storageData === null ? initData : JSON.parse(storageData);

    const formEl = this.formEls[0];

    if (formEl) {
      for (const x of formEl.elements) {
        if (x.checked === undefined) {
          x.value = data[x.name];
        } else {
          x.checked = data[x.name];
        }
      }
      formEl.addEventListener('change', () => {
        this.formUpdate(formEl);
      });
      this.contentArea(data);
    }
  }

  render() {
    return html` <slot />`;
  }
}
