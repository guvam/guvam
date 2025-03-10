import type { FC } from "react";
import { House } from "react-bootstrap-icons";

import { Components } from "@/app/(website)/docs/components/Components";

export const ButtonSection: FC = () => (
  <Components id="button">
    <button className="Button">Button</button>
    <button className="Button Button--type-muted">Button</button>
    <button className="Button Button--type-text">Button</button>
    <button className="Button Button--type-text" disabled>
      Button
    </button>
    <button className="Button Button--loading">Button</button>

    <button className="Button Button--icon" aria-label="House action">
      <House />
    </button>
    <button className="Button Button--icon Button--type-muted" aria-label="House action">
      <House />
    </button>
    <button className="Button Button--icon Button--type-text" aria-label="House action">
      <House />
    </button>
    <button className="Button Button--icon Button--type-text" aria-label="House action" disabled>
      <House />
    </button>
    <button className="Button Button--icon Button--loading" aria-label="House action"></button>
  </Components>
);
