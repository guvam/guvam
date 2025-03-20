import type { FC } from "react";

import { ComponentBlock } from "@/components/ComponentBlock";

export const CheckboxSection: FC = () => (
  <ComponentBlock id="checkbox">
    <input type="checkbox" className="Checkbox" aria-label="input" />
    <input type="checkbox" className="Checkbox" aria-label="input" defaultChecked />
    <input type="checkbox" className="Checkbox" aria-label="input" disabled />
    <input type="checkbox" className="Checkbox" aria-label="input" defaultChecked disabled />
  </ComponentBlock>
);
