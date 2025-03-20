import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const TextareaSection: FC = () => (
  <ComponentBlock id="textarea">
    <textarea className="Input" aria-label="input"></textarea>
    <textarea className="Input" aria-label="input" placeholder="placeholder"></textarea>
    <textarea className="Input" aria-label="input" defaultValue="value"></textarea>
    <textarea className="Input" aria-label="input" defaultValue="value" disabled></textarea>
  </ComponentBlock>
);
