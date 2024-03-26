type FormValue = Record<string, string | boolean>;

export class HeaderForm extends HTMLElement {
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
    for (const x of Array.from(formEl.elements) as HTMLInputElement[]) {
      data[x.name] = x.checked ?? x.value;
    }
    window.localStorage.setItem('content', JSON.stringify(data));
    this.contentArea(data);
  };

  connectedCallback(): void {
    const initData = {
      color: 'success',
      size: 'default',
      spacing: 'default',
      direction: 'left',
      theme: 'left',
    };
    const storageData = window.localStorage.getItem('content');
    const data: FormValue = storageData === null ? initData : JSON.parse(storageData);

    const formEl = this.querySelector('form');

    if (formEl) {
      for (const x of Array.from(formEl.elements) as HTMLInputElement[]) {
        if (x.checked === undefined) {
          x.value = data[x.name].toString();
        } else {
          x.checked = Boolean(data[x.name]);
        }
      }
      formEl.addEventListener('change', () => {
        this.formUpdate(formEl);
      });
      this.contentArea(data);
    }
  }
}

customElements.define('ws-header-form', HeaderForm);
