import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('started-clipboard')
export class Clipboard extends LitElement {
  @property({ type: Number })
  accessor count = 0;

  static styles = css`
    .Started-Clipboard {
      margin-inline-start: 16px;
      cursor: pointer;
      background-color: inherit;
      border: none;
    }
    .Started-Clipboard:hover {
      transition-duration: 0.2s;
      transform: scale(1.1);
    }
  `;

  render() {
    return html`
      <button class="Started-Clipboard">
        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.5 0.75H1.5C0.675 0.75 0 1.425 0 2.25V12.75H1.5V2.25H10.5V0.75ZM12.75 3.75H4.5C3.675 3.75 3 4.425
            3 5.25V15.75C3 16.575 3.675 17.25 4.5 17.25H12.75C13.575 17.25 14.25 16.575 14.25 15.75V5.25C14.25 4.425 13.575
            3.75 12.75 3.75ZM12.75 15.75H4.5V5.25H12.75V15.75Z"
            fill="black"
          />
        </svg>
      </button>
    `;
  }

  private copyToClipboard() {}
}
customElements.define('started-clipboard', Clipboard);