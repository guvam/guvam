import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const InputSection: FC = () => (
  <ComponentBlock id="input">
    <input className="Input" type="text" aria-label="input" />
    <input className="Input" type="text" aria-label="input" placeholder="placeholder" />
    <input className="Input" type="text" aria-label="input" defaultValue="value" />
    <input className="Input" type="text" aria-label="input" defaultValue="value" disabled />
  </ComponentBlock>
);
