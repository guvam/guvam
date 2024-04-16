/* tslint:disable */
declare global {
  declare module 'solid-js' {
    namespace JSX {
      interface IntrinsicElements {
        'gm-dropdown': JSX.IntrinsicElements.HTMLAttributes<HTMLElement>;
      }
    }
  }
}
