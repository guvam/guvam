import type { FC } from "react";

import { Components } from "@/app/docs/components/Components";

export const TextareaSection: FC = () => (
  <Components id="textarea">
    <textarea className="Input Input--type-textarea" aria-label="input"></textarea>
    <textarea
      className="Input Input--type-textarea"
      aria-label="input"
      placeholder="placeholder"
    ></textarea>
    <textarea
      className="Input Input--type-textarea"
      aria-label="input"
      defaultValue="value"
    ></textarea>
    <textarea
      className="Input Input--type-textarea"
      aria-label="input"
      defaultValue="value"
      disabled
    ></textarea>
  </Components>
);
