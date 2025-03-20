import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const RadioSection: FC = () => (
  <ComponentBlock id="radio">
    <input type="radio" className="Radio" aria-label="input" name="radio-one" />
    <input type="radio" className="Radio" aria-label="input" name="radio-one" />
    <input type="radio" className="Radio" aria-label="input" name="radio-one" />
    <input type="radio" className="Radio" defaultChecked aria-label="input" />
    <input type="radio" className="Radio" disabled aria-label="input" />
    <input type="radio" className="Radio" defaultChecked disabled aria-label="input" />
  </ComponentBlock>
);
